/* eslint-disable fp/no-mutation */
import { expect } from 'chai';

import githubUserService from '../../src/Services/GithubUserService';

describe('Services/GithubUserService', () => {
    describe('getByUsername', () => {
        context('Successful request - status 200', () => {
            it('Should return the user informations', () => {});
        });

        context('Unsuccessful request - status 404', () => {
            it('Should return an empty object', () => {});
        });
    });

    describe('standardizeUserFields', () => {
        let userWithUnderlineKeys;
        let formatedUser;

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
                expect(
                    githubUserService.standardizeUserFields(
                        userWithUnderlineKeys
                    )
                ).to.be.eql(formatedUser);
            });
        });
    });
});
