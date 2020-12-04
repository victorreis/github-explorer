export const validateGithubUsername = (username) =>
    username?.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i);
