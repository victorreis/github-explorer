import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';

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
            publicGists,
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
                    </a>
                </Card.Subtitle>
                <Card.Text>
                    <br />
                    <strong>Bio: </strong>{' '}
                    {(bio && <blockquote>{bio}</blockquote>) || '-'}
                    <br />
                    <strong>Company: </strong> {company || '-'}
                    <br />
                    <strong>Blog: </strong> {blog || '-'}
                    <br />
                    <strong>Location: </strong> {location || '-'}
                    <br />
                    <strong>E-mail: </strong> {email || '-'}
                    <br />
                    <strong>Hireable: </strong> {hireable || '-'}
                    <br />
                    <strong>Twitter Username: </strong> {twitterUsername || '-'}
                    <br />
                    <strong>Public Repos: </strong> {publicRepos}
                    <br />
                    <strong>Public Gists: </strong> {publicGists}
                    <br />
                    <strong>Followers: </strong> {followers}
                    <br />
                    <strong>Following: </strong> {following}
                    <br />
                    <strong>Created At: </strong>
                    <time dateTime={createdAt}>{createdAt.toUTCString()}</time>
                    <br />
                    <strong>Updated At: </strong>
                    <time dateTime={updatedAt}>{updatedAt.toUTCString()}</time>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Button onClick={onClickShowUserRepos} className="mr-2">
                    REPOS
                </Button>
                <Button onClick={onClickShowStarredRepos}>STARRED</Button>
            </Card.Footer>
        </Card>
    );
};

export default UserDetailsCard;
