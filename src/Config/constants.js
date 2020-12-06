export const PROJECT_NAME = 'Github Explorer';

export const GITHUB_API_URL = 'https://api.github.com';

export const MALFORMED_USER_NAME = (username) =>
    `Malformed username (${username}). Please, provide an alphanumeric name.`;

export const NONEXISTENT_USER_NAME = (username) =>
    `The username (${username}) doesn't exists. Please, try another username.`;

export const NO_REPOSITORY_TO_BE_SHOWED =
    'There are no repositories to be showed.';
