import axios from 'axios';

import { requestErrorHandler } from '../ErrorHandler/ErrorHandler';

const getByName = async (name) => {
    const userDetails = await axios
        .get(`https://api.github.com/users/${name}`)
        .then((res) => res.data)
        .catch(requestErrorHandler);

    return standardizeUserFields(userDetails);
};

const standardizeUserFields = (user) => ({
    ...user,
    avatarUrl: user.avatar_url,
    htmlUrl: user.html_url,
    twitterUsername: user.twitter_username,
    publicRepos: user.public_repos,
    publicGists: user.public_gists,
    createdAt: user.created_at,
    updatedAt: user.updated_at,
});

const githubUserService = {
    getByName,
};

export default githubUserService;
