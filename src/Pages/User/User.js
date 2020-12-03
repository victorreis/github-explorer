import React from 'react';
import { useLocation } from 'react-router-dom';

import UserDetails from '../../Components/UserDetails/UserDetails';
import { MALFORMED_USER_NAME } from '../../Config/constants';

const getFormattedAndValidPathname = (pathname) => {
    const splittedPathname = pathname.split('/');
    return splittedPathname.length > 2 ? null : splittedPathname[1];
};

const User = (props) => {
    const { pathname } = useLocation();
    const formatedPathname = getFormattedAndValidPathname(pathname);

    const user = formatedPathname ? (
        <UserDetails name={formatedPathname} />
    ) : (
        <>{MALFORMED_USER_NAME(pathname)}</>
    );

    return <>{user}</>;
};

export default User;
