import axios from 'axios';

import { requestErrorHandler } from './ErrorHandlerService';
import reposService from './ReposService';

const getByUsername = async (username) => {
    const repos = await axios
        .get(`https://api.github.com/users/${username}/starred`)
        .then((res) => res.data)
        .catch(requestErrorHandler);

    return reposService.standardizeReposFields(repos);
};

const githubStarredReposService = {
    getByUsername,
};

export default githubStarredReposService;
