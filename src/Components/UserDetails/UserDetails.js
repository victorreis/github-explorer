import React, { useEffect, useState } from 'react';

import githubUserReposService from '../../Services/GithubUserReposService';
import githubUserService from '../../Services/GithubUserService';
import CustomAccordion from '../CustomAccordion';
import UserDetailsCard from '../UserDetailsCard';

const UserDetails = ({ username }) => {
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [areUserRepos, setAreUserRepos] = useState(false);
    const [areStarredRepos, setAreStarredRepos] = useState(false);

    useEffect(() => {
        (async () => {
            setUser(await githubUserService.getByUsername(username));
            setRepos([]);
            setAreUserRepos(false);
            setAreStarredRepos(false);
        })();
    }, [username]);

    const showUserRepos = async () => {
        setRepos(await githubUserReposService.getByUsername(username));
        setAreUserRepos(true);
        setAreStarredRepos(false);
    };

    const showStarredRepos = async () => {
        setRepos([]);
        setAreUserRepos(false);
        setAreStarredRepos(true);
    };

    const userReposAccordionTitle = areUserRepos
        ? `${username} repositories`
        : null;
    const starredReposAccordionTitle = areStarredRepos
        ? `Repositories starred by ${username}`
        : null;

    const someButtonClicked = areUserRepos || areStarredRepos;
    const hasATitle = userReposAccordionTitle || starredReposAccordionTitle;
    const noReposToShow = 'There are no repositories to be showed.';

    const accordionTitle =
        someButtonClicked &&
        hasATitle &&
        ((repos.length > 0 && (
            <h5>{userReposAccordionTitle || starredReposAccordionTitle}</h5>
        )) ||
            noReposToShow);

    return (
        <>
            <UserDetailsCard
                user={user}
                showUserRepos={showUserRepos}
                showStarredRepos={showStarredRepos}
            />
            <br />
            {accordionTitle}
            <CustomAccordion repos={repos} />
        </>
    );
};

export default UserDetails;
