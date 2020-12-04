import axios from 'axios';

import { requestErrorHandler } from './ErrorHandlerService';
import reposService from './ReposService';

const getByUsername = async (username) => {
    const repos = await axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((res) => res.data)
        .catch(requestErrorHandler);

    return reposService.standardizeReposFields(repos);
};

const githubUserReposService = {
    getByUsername,
};

export default githubUserReposService;
