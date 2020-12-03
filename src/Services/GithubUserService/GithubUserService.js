import axios from 'axios';

import { requestErrorHandler } from '../ErrorHandler/ErrorHandler';

const getByName = async (name) => {
    const userDetails = await axios
        .get(`https://api.github.com/users/${name}`)
        .then((res) => res.data)
        .catch(requestErrorHandler);

    return { userDetails };
};

const githubUserService = {
    getByName,
};

export default githubUserService;
