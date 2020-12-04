import githubUserService from './GithubUserService';

const standardizeReposFields = (repos) =>
    repos.map((repo) => ({
        ...repo,
        fullName: repo.full_name,
        owner: githubUserService.standardizeUserFields(repo.owner),
        htmlUrl: repo.html_url,
        stargazersCount: repo.stargazers_count,
        watchersCount: repo.watchers_count,
        forksCount: repo.forks_count,
        openIssuesCount: repo.open_issues_count,
        openIssues: repo.open_issues,
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
        pushedAt: repo.pushed_at,
    }));

const reposService = {
    standardizeReposFields,
};

export default reposService;
