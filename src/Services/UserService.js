import { validateGithubUsername } from '../Utils/validators';

const getValidUsernameFromPathname = (pathname) => {
    const splittedPathname = pathname.split('/');
    return splittedPathname.length > 2
        ? null
        : validateGithubUsername(splittedPathname[1]);
};

const userService = {
    getValidUsernameFromPathname,
};

export default userService;
