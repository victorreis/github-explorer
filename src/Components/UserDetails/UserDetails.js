import React, { useEffect, useState } from 'react';

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
        setRepos(await githubStarredReposService.getByUsername(username));
        setAreUserRepos(false);
        setAreStarredRepos(true);
    };

    const userReposAccordionTitle = areUserRepos
        ? `'${username}' repositories`
        : null;
    const starredReposAccordionTitle = areStarredRepos
        ? `Repositories starred by '${username}'`
        : null;

    const someButtonClicked = areUserRepos || areStarredRepos;
    const hasATitle = userReposAccordionTitle || starredReposAccordionTitle;

    const accordionTitle =
        someButtonClicked &&
        hasATitle &&
        ((repos.length > 0 && (
            <h5>{userReposAccordionTitle || starredReposAccordionTitle}</h5>
        )) ||
            NO_REPOSITORY_TO_BE_SHOWED);

    return (
        <>
            <section>
                <UserDetailsCard
                    username={username}
                    user={user}
                    showUserRepos={showUserRepos}
                    showStarredRepos={showStarredRepos}
                />
            </section>
            <br />
            <section>
                {accordionTitle}
                <CustomAccordion repos={repos} />
            </section>
        </>
    );
};

export default UserDetails;
