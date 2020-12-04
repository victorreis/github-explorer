import React from 'react';
import { useLocation } from 'react-router-dom';

import UserDetails from '../../Components/UserDetails';
import { MALFORMED_USER_NAME } from '../../Config/constants';
import userService from '../../Services/UserService';

const User = (props) => {
    const { pathname } = useLocation();
    const validUsername = userService.getValidUsernameFromPathname(pathname);

    const user = validUsername ? (
        <UserDetails name={validUsername} />
    ) : (
        <>{MALFORMED_USER_NAME(pathname)}</>
    );

    return <>{user}</>;
};

export default User;
