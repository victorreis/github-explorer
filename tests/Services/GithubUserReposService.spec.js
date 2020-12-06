/* eslint-disable fp/no-mutation */
import axios from 'axios';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import { GITHUB_API_URL } from '../../src/Config/constants';
import githubUserReposService from '../../src/Services/GithubUserReposService';
import reposService from '../../src/Services/ReposService';

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Services/GithubUserReposService', () => {
    let reposWithUnderlineKeys;
    let formattedRepos;
    const usernameNonExistant = 'username123teste';

    before(() => {
        reposWithUnderlineKeys = [
            {
                id: 123,
                name: 'repository name 1',
                owner: {
                    id: 111,
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
                },
                description: 'description 1',
                html_url: 'https://html1.url',
                forks_count: 4,
                homepage: 'https://homepage1.url',
                language: 'JS',
                stargazers_count: 0,
                watchers_count: 4,
                open_issues_count: 1,
                created_at: 'Sun, 05 Feb 2012 14:53:26 GMT',
                updated_at: 'Sun, 05 Feb 2012 14:53:26 GMT',
                pushed_at: 'Sun, 05 Feb 2012 14:53:26 GMT',
            },
            {
                id: 456,
                name: 'repository name 2',
                owner: {
                    id: 111,
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
                },
                description: 'description 2',
                html_url: 'https://html2.url',
                forks_count: 5,
                homepage: 'https://homepage2.url',
                language: 'JS',
                stargazers_count: 0,
                watchers_count: 5,
                open_issues_count: 2,
                created_at: 'Sun, 05 Feb 2012 14:53:26 GMT',
                updated_at: 'Sun, 05 Feb 2012 14:53:26 GMT',
                pushed_at: 'Sun, 05 Feb 2012 14:53:26 GMT',
            },
        ];
        formattedRepos = [
            {
                id: 123,
                name: 'repository name 1',
                owner: {
                    id: 111,
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
                },
                description: 'description 1',
                htmlUrl: 'https://html1.url',
                forksCount: 4,
                homepage: 'https://homepage1.url',
                language: 'JS',
                stargazersCount: 0,
                watchersCount: 4,
                openIssuesCount: 1,
                createdAt: 'Sun, 05 Feb 2012 14:53:26 GMT',
                updatedAt: 'Sun, 05 Feb 2012 14:53:26 GMT',
                pushedAt: 'Sun, 05 Feb 2012 14:53:26 GMT',
            },
            {
                id: 456,
                name: 'repository name 2',
                owner: {
                    id: 111,
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
                },
                description: 'description 2',
                htmlUrl: 'https://html2.url',
                forksCount: 5,
                homepage: 'https://homepage2.url',
                language: 'JS',
                stargazersCount: 0,
                watchersCount: 5,
                openIssuesCount: 2,
                createdAt: 'Sun, 05 Feb 2012 14:53:26 GMT',
                updatedAt: 'Sun, 05 Feb 2012 14:53:26 GMT',
                pushedAt: 'Sun, 05 Feb 2012 14:53:26 GMT',
            },
        ];
    });

    describe('getByUsername', () => {
        let standardizeReposFieldsStub;
        let axiosGetReposStub;
        let getByUsernameStub;

        beforeEach(() => {
            standardizeReposFieldsStub = sinon.spy(
                reposService,
                'standardizeReposFields'
            );
            axiosGetReposStub = sinon.stub(axios, 'get');
            getByUsernameStub = sinon.stub(
                githubUserReposService,
                'getByUsername'
            );

            axiosGetReposStub
                .withArgs(
                    `${GITHUB_API_URL}/users/${reposWithUnderlineKeys[0].owner.name}/repos`
                )
                .resolves(reposWithUnderlineKeys);

            getByUsernameStub
                .withArgs(reposWithUnderlineKeys[0].owner.name)
                .returns(formattedRepos);
            getByUsernameStub.withArgs(usernameNonExistant).returns([]);
        });

        afterEach(() => {
            standardizeReposFieldsStub.restore();
            axiosGetReposStub.restore();
            getByUsernameStub.restore();
        });

        context('Successful request - status 200', () => {
            it('Should return the repos array of informations when username exists', async () => {
                const response = await axios.get(
                    `${GITHUB_API_URL}/users/${reposWithUnderlineKeys[0].owner.name}/repos`
                );

                const standardizedRepos = reposService.standardizeReposFields(
                    reposWithUnderlineKeys
                );

                const userReposArray = await githubUserReposService.getByUsername(
                    reposWithUnderlineKeys[0].owner.name
                );

                expect(axios.get).to.have.callCount(1);
                expect(response).to.be.eql(reposWithUnderlineKeys);

                expect(standardizedRepos).to.be.eql(formattedRepos);
                expect(reposService.standardizeReposFields).to.have.callCount(
                    1
                );

                expect(userReposArray).to.be.eql(formattedRepos);
            });
        });

        context('Unsuccessful request - status 404', () => {
            it('Should return an empty object when username doesn`t exists', async () => {
                const userReposArray = await githubUserReposService.getByUsername(
                    usernameNonExistant
                );

                expect(userReposArray).to.be.eql([]);
                expect(reposService.standardizeReposFields).to.have.callCount(
                    0
                );
            });
        });
    });
});
