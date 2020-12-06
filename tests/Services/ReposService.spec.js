/* eslint-disable fp/no-mutation */
import { expect } from 'chai';

import reposService from '../../src/Services/ReposService';

describe('Services/GithubUserService', () => {
    let repoWithUnderlineKeys;
    let formattedRepo;

    before(() => {
        repoWithUnderlineKeys = [
            {
                full_name: 'repository name 1',
                owner: {
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
                full_name: 'repository name 2',
                owner: {
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
        formattedRepo = [
            {
                fullName: 'repository name 1',
                owner: {
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
                fullName: 'repository name 2',
                owner: {
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

    describe('standardizeReposFields', () => {
        context('Repos undefined or null', () => {
            it('Should return and empty object.', () => {
                expect(reposService.standardizeReposFields(null)).to.be.eql([]);
                expect(reposService.standardizeReposFields()).to.be.eql([]);
            });
        });

        context('Repos array with objects with all the keys formatted', () => {
            it('Should return a new repos array with all the objects with keys without the underline character.', () => {
                const standardizeRepos = reposService.standardizeReposFields(
                    repoWithUnderlineKeys
                );
                expect(standardizeRepos).to.be.eql(formattedRepo);
            });
        });
    });
});
