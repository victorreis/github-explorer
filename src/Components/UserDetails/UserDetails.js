import React, { useEffect, useState } from 'react';

import githubUserService from '../../Services/GithubUserService/GithubUserService';

const UserDetails = ({ name }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        (async () => {
            setUser(await githubUserService.getByName(name));
        })();
    }, [name]);

    return <>UserDetails: {JSON.stringify(user)}</>;
};

export default UserDetails;
