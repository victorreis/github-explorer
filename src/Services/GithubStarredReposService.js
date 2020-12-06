import axios from 'axios';

import { GITHUB_API_URL } from '../Config/constants';
import { requestErrorHandler } from './ErrorHandlerService';
import reposService from './ReposService';

const getByUsername = async (username) => {
    const repos = await axios
        .get(`${GITHUB_API_URL}/users/${username}/starred`)
        .then((res) => res.data)
        .catch(requestErrorHandler);

    return reposService.standardizeReposFields(repos);
};

const githubStarredReposService = {
    getByUsername,
};

export default githubStarredReposService;
