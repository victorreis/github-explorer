import React, { useEffect, useState } from 'react';

import githubUserService from '../../Services/GithubUserService';
import UserDetailsCard from '../UserDetailsCard';

const UserDetails = ({ name }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        (async () => {
            setUser(await githubUserService.getByName(name));
        })();
    }, [name]);

    return (
        <>
            <UserDetailsCard user={user} />
        </>
    );
};

export default UserDetails;
