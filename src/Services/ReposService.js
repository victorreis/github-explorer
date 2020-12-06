import githubUserService from './GithubUserService';

const standardizeReposFields = (repos) => {
    if (!repos) {
        return [];
    }

    return repos.map((repo) => ({
        id: repo.id,
        name: repo.name,
        owner: githubUserService.standardizeUserFields(repo.owner),
        description: repo.description,
        htmlUrl: repo.html_url,
        forksCount: repo.forks_count,
        homepage: repo.homepage,
        language: repo.language,
        stargazersCount: repo.stargazers_count,
        watchersCount: repo.watchers_count,
        openIssuesCount: repo.open_issues_count,
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
        pushedAt: repo.pushed_at,
    }));
};

const reposService = {
    standardizeReposFields,
};

export default reposService;
