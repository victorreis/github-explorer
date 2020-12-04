import React, { useEffect, useState, useCallback } from 'react';

import { NO_REPOSITORY_TO_BE_SHOWED } from '../../Config/constants';
import githubStarredReposService from '../../Services/GithubStarredReposService';
import githubUserReposService from '../../Services/GithubUserReposService';
import githubUserService from '../../Services/GithubUserService';
import CustomAccordion from '../CustomAccordion';
import UserDetailsCard from '../UserDetailsCard';

const UserDetails = ({ username }) => {
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [areUserRepos, setAreUserRepos] = useState(false);
    const [areStarredRepos, setAreStarredRepos] = useState(false);

    const memoizedFunction = useCallback(async () => {
        setUser(await githubUserService.getByUsername(username));
        setRepos([]);
        setAreUserRepos(false);
        setAreStarredRepos(false);
    }, [username]);

    useEffect(() => {
        memoizedFunction();
    }, [memoizedFunction]);

    const handleShowUserRepos = async () => {
        setRepos(await githubUserReposService.getByUsername(username));
        setAreUserRepos(true);
        setAreStarredRepos(false);
    };

    const handleShowStarredRepos = async () => {
        setRepos(await githubStarredReposService.getByUsername(username));
        setAreUserRepos(false);
        setAreStarredRepos(true);
    };

    return (
        <>
            <section>
                <UserDetailsCard
                    username={username}
                    user={user}
                    onClickShowUserRepos={handleShowUserRepos}
                    onClickShowStarredRepos={handleShowStarredRepos}
                />
            </section>
            <br />
            <section>
                <ConditionalReposTitle
                    username={username}
                    areUserRepos={areUserRepos}
                    areStarredRepos={areStarredRepos}
                    repos={repos}
                />
                <CustomAccordion repos={repos} />
            </section>
        </>
    );
};

const ConditionalReposTitle = (props) => {
    const { username, areUserRepos, areStarredRepos, repos } = props;

    const userReposAccordionTitle = areUserRepos
        ? `'${username}' repositories`
        : null;
    const starredReposAccordionTitle = areStarredRepos
        ? `Repositories starred by '${username}'`
        : null;

    if (repos.length > 0) {
        return <h5>{userReposAccordionTitle || starredReposAccordionTitle}</h5>;
    }
    if (areUserRepos || areStarredRepos) {
        return <>{NO_REPOSITORY_TO_BE_SHOWED}</>;
    }
    return null;
};

export default UserDetails;
