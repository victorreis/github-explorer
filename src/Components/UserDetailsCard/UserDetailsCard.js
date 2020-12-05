import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import { HiOutlineExternalLink } from 'react-icons/hi';

import './UserDetailsCard.css';
import { NONEXISTENT_USER_NAME } from '../../Config/constants';

const UserDetailsCard = (props) => {
    const {
        username,
        user: {
            login,
            name,
            avatarUrl,
            htmlUrl,
            company,
            blog,
            location,
            email,
            hireable,
            bio,
            twitterUsername,
            publicRepos,
            followers,
            following,
        },
        onClickShowUserRepos,
        onClickShowStarredRepos,
    } = props;
    const createdAt = new Date(props.user.createdAt);
    const updatedAt = new Date(props.user.updatedAt);

    if (!login) {
        return <>{NONEXISTENT_USER_NAME(username)}</>;
    }
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <Image
                        src={`${avatarUrl}/55x55`}
                        roundedCircle
                        alt="Avatar."
                        title="Title."
                        width="55"
                        height="55"
                        className="user-details-card-avatar-image"
                    />
                    {name} ({login})
                </Card.Title>
                <Card.Subtitle>
                    <a href={htmlUrl} target="_blank" rel="noreferrer">
                        {htmlUrl}
                        <HiOutlineExternalLink />
                    </a>
                </Card.Subtitle>
                <Card.Text>
                    <br />
                    <strong>Bio: </strong>{' '}
                    {(bio && <blockquote>{bio}</blockquote>) || '-'}
                    <br />
                    <strong>Company: </strong>
                    {company || '-'}
                    <br />
                    <strong>Blog: </strong>
                    {(
                        <>
                            <a href={blog} target="_blank" rel="noreferrer">
                                {blog}
                                <HiOutlineExternalLink />
                            </a>
                        </>
                    ) || '-'}
                    <br />
                    <strong>Location: </strong>
                    {location || '-'}
                    <br />
                    <strong>E-mail: </strong>
                    {email || '-'}
                    <br />
                    <strong>Hireable: </strong>
                    {hireable || '-'}
                    <br />
                    <strong>Twitter Username: </strong>
                    {twitterUsername || '-'}
                    <br />
                    <strong>Public Repos: </strong>
                    <a
                        href={`https://github.com/${login}?tab=repositories`}
                        target="_blank"
                        rel="noreferrer">
                        {publicRepos}
                        <HiOutlineExternalLink />
                    </a>
                    <br />
                    <strong>Followers: </strong>
                    <a
                        href={`https://github.com/${login}?tab=followers`}
                        target="_blank"
                        rel="noreferrer">
                        {followers}
                        <HiOutlineExternalLink />
                    </a>
                    <br />
                    <strong>Following: </strong>
                    <a
                        href={`https://github.com/${login}?tab=following`}
                        target="_blank"
                        rel="noreferrer">
                        {following}
                        <HiOutlineExternalLink />
                    </a>
                    <br />
                    <strong>Created At: </strong>
                    <time dateTime={createdAt}>{createdAt.toUTCString()}</time>
                    <br />
                    <strong>Updated At: </strong>
                    <time dateTime={updatedAt}>{updatedAt.toUTCString()}</time>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Button onClick={onClickShowUserRepos}>REPOS</Button>
                <Button onClick={onClickShowStarredRepos}>STARRED</Button>
            </Card.Footer>
        </Card>
    );
};

export default UserDetailsCard;
