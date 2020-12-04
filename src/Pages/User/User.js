import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import UserDetails from '../../Components/UserDetails';
import { MALFORMED_USER_NAME } from '../../Config/constants';
import { validateGithubUsername } from '../../Utils/validators';

const User = () => {
    const { username } = useParams();
    const { pathname } = useLocation();
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        setIsValid(validateGithubUsername(username));
    }, [username]);

    if (!isValid) {
        return <section>{MALFORMED_USER_NAME(pathname)}</section>;
    }

    return (
        <section>
            <UserDetails username={username} />
        </section>
    );
};

export default User;
