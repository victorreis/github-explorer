import axios from 'axios';

import { requestErrorHandler } from './ErrorHandlerService';

const getByUsername = async (username) => {
    const userDetails = await axios
        .get(`https://api.github.com/users/${username}`)
        .then((res) => res.data)
        .catch(requestErrorHandler);

    return userDetails ? standardizeUserFields(userDetails) : {};
};

const standardizeUserFields = (user) => {
    if (!user) {
        return {};
    }
    return {
        login: user?.login,
        name: user?.name,
        company: user?.company,
        blog: user?.blog,
        location: user?.location,
        email: user?.email,
        hireable: user?.hireable,
        bio: user?.bio,
        followers: user?.followers,
        following: user?.following,
        avatarUrl: user?.avatar_url,
        htmlUrl: user?.html_url,
        twitterUsername: user?.twitter_username,
        publicRepos: user?.public_repos,
        publicGists: user?.public_gists,
        createdAt: user?.created_at,
        updatedAt: user?.updated_at,
    };
};

const githubUserService = {
    getByUsername,
    standardizeUserFields,
};

export default githubUserService;
