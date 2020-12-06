/* eslint-disable fp/no-mutation */
import axios from 'axios';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import githubUserService from '../../src/Services/GithubUserService';

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Services/GithubUserService', () => {
    let userWithUnderlineKeys;
    let formatedUser;
    const usernameNonExistant = 'username123teste';

    before(() => {
        userWithUnderlineKeys = {
            login: 'login',
            name: 'name',
            company: 'company',
            blog: 'blog',
            location: 'location',
            email: 'email',
            hireable: 'hireable',
            bio: 'bio',
            followers: 'followers',
            following: 'following',
            avatar_url: 'http://avatar.url',
            html_url: 'http://html.url',
            twitter_username: 'twitter_username',
            public_repos: 3,
            public_gists: 1,
            created_at: 'Sun, 05 Feb 2012 14:53:26 GMT',
            updated_at: 'Sat, 05 Dec 2020 06:07:07 GMT',
        };
        formatedUser = {
            login: 'login',
            name: 'name',
            company: 'company',
            blog: 'blog',
            location: 'location',
            email: 'email',
            hireable: 'hireable',
            bio: 'bio',
            followers: 'followers',
            following: 'following',
            avatarUrl: 'http://avatar.url',
            htmlUrl: 'http://html.url',
            twitterUsername: 'twitter_username',
            publicRepos: 3,
            publicGists: 1,
            createdAt: 'Sun, 05 Feb 2012 14:53:26 GMT',
            updatedAt: 'Sat, 05 Dec 2020 06:07:07 GMT',
        };
    });

    describe('getByUsername', () => {
        let standardizeUserFieldsStub;
        let axiosGetUserStub;
        let getByUsernameStub;

        beforeEach(() => {
            standardizeUserFieldsStub = sinon.spy(
                githubUserService,
                'standardizeUserFields'
            );
            axiosGetUserStub = sinon.stub(axios, 'get');
            getByUsernameStub = sinon.stub(githubUserService, 'getByUsername');

            axiosGetUserStub
                .withArgs(
                    `https://api.github.com/users/${userWithUnderlineKeys.name}`
                )
                .resolves(userWithUnderlineKeys);

            getByUsernameStub
                .withArgs(userWithUnderlineKeys.name)
                .returns(formatedUser);
            getByUsernameStub.withArgs(usernameNonExistant).returns({});
        });

        afterEach(() => {
            standardizeUserFieldsStub.restore();
            axiosGetUserStub.restore();
            getByUsernameStub.restore();
        });

        context('Successful request - status 200', () => {
            it('Should return the user informations when username exists', async () => {
                const response = await axios.get(
                    `https://api.github.com/users/${userWithUnderlineKeys.name}`
                );

                const standardizeUser = githubUserService.standardizeUserFields(
                    userWithUnderlineKeys
                );

                const userDetails = await githubUserService.getByUsername(
                    userWithUnderlineKeys.name
                );

                expect(axios.get).to.have.callCount(1);
                expect(response).to.be.eql(userWithUnderlineKeys);

                expect(standardizeUser).to.be.eql(formatedUser);
                expect(
                    githubUserService.standardizeUserFields
                ).to.have.callCount(1);

                expect(userDetails).to.be.eql(formatedUser);
            });
        });

        context('Unsuccessful request - status 404', () => {
            it('Should return an empty object when username doesn`t exists', async () => {
                const userDetails = await githubUserService.getByUsername(
                    usernameNonExistant
                );

                expect(userDetails).to.be.eql({});
                expect(
                    githubUserService.standardizeUserFields
                ).to.have.callCount(0);
            });
        });
    });

    describe('standardizeUserFields', () => {
        context('User undefined or null', () => {
            it('Should return and empty object.', () => {
                expect(githubUserService.standardizeUserFields(null)).to.be.eql(
                    {}
                );
                expect(githubUserService.standardizeUserFields()).to.be.eql({});
            });
        });

        context('User object with all the keys', () => {
            it('Should return a new user object with keys without the underline character.', () => {
                const standardizedUser = githubUserService.standardizeUserFields(
                    userWithUnderlineKeys
                );
                expect(standardizedUser).to.be.eql(formatedUser);
            });
        });
    });
});
