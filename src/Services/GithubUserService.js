import axios from 'axios';

import { GITHUB_API_URL, NONEXISTENT_USER_NAME } from '../Config/constants';
import { requestErrorHandler } from './ErrorHandlerService';

const getByUsername = async (username) => {
    try {
        const userDetails = await axios
            .get(`${GITHUB_API_URL}/users/${username}`)
            .then((res) => res.data)
            .catch(requestErrorHandler);

        return standardizeUserFields(userDetails);
    } catch (error) {
        console.error(NONEXISTENT_USER_NAME(username));
    }
    return {};
};

const standardizeUserFields = (user) => {
    if (!user) {
        return {};
    }
    return {
        id: user?.id,
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
