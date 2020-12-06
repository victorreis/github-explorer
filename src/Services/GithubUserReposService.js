import axios from 'axios';

import { GITHUB_API_URL, NONEXISTENT_USER_NAME } from '../Config/constants';
import { requestErrorHandler } from './ErrorHandlerService';
import reposService from './ReposService';

const getByUsername = async (username) => {
    try {
        const repos = await axios
            .get(`${GITHUB_API_URL}/users/${username}/repos`)
            .then((res) => res.data)
            .catch(requestErrorHandler);

        return reposService.standardizeReposFields(repos);
    } catch (error) {
        console.error(NONEXISTENT_USER_NAME(username));
    }
    return [];
};

const githubUserReposService = {
    getByUsername,
};

export default githubUserReposService;
