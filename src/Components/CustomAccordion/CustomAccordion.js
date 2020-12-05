import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { HiOutlineExternalLink } from 'react-icons/hi';

const CustomAccordion = ({ repos }) => {
    const reposCards = repos?.map((repo) => {
        const {
            id,
            name,
            description,
            forks,
            homepage,
            language,
            htmlUrl,
            stargazersCount,
            watchersCount,
            openIssuesCount,
        } = repo;
        const createdAt = new Date(repo.createdAt);
        const updatedAt = new Date(repo.updatedAt);
        const pushedAt = new Date(repo.pushedAt);

        return (
            <Card key={id}>
                <Accordion.Toggle as={Card.Header} eventKey={id}>
                    {name}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={id}>
                    <article>
                        <Card.Body>
                            <strong>Description: </strong>
                            {description || '-'}
                            <br />
                            <strong>Html Url: </strong>
                            <a href={htmlUrl} target="_blank" rel="noreferrer">
                                {htmlUrl}
                                <HiOutlineExternalLink />
                            </a>
                            <br />
                            <strong>Forks: </strong>
                            <a
                                href={`${htmlUrl}/network/members`}
                                target="_blank"
                                rel="noreferrer">
                                {forks}
                                <HiOutlineExternalLink />
                            </a>
                            <br />
                            <strong>Homepage: </strong>
                            {(homepage && (
                                <a
                                    href={homepage}
                                    target="_blank"
                                    rel="noreferrer">
                                    {homepage}
                                    <HiOutlineExternalLink />
                                </a>
                            )) ||
                                '-'}
                            <br />
                            <strong>Language: </strong>
                            {language}
                            <br />
                            <strong>Stargazers: </strong>
                            <a
                                href={`${htmlUrl}/stargazers`}
                                target="_blank"
                                rel="noreferrer">
                                {stargazersCount}
                                <HiOutlineExternalLink />
                            </a>
                            <br />
                            <strong>Watchers: </strong>
                            <a
                                href={`${htmlUrl}/watchers`}
                                target="_blank"
                                rel="noreferrer">
                                {watchersCount}
                                <HiOutlineExternalLink />
                            </a>
                            <br />
                            <strong>Open Issues: </strong>
                            <a
                                href={`${htmlUrl}/issues`}
                                target="_blank"
                                rel="noreferrer">
                                {openIssuesCount}
                                <HiOutlineExternalLink />
                            </a>
                            <br />
                            <strong>Created At: </strong>
                            <time dateTime={createdAt}>
                                {createdAt.toUTCString()}
                            </time>
                            <br />
                            <strong>Updated At: </strong>
                            <time dateTime={updatedAt}>
                                {updatedAt.toUTCString()}
                            </time>
                            <br />
                            <strong>Pushed At: </strong>
                            <time dateTime={pushedAt}>
                                {pushedAt.toUTCString()}
                            </time>
                        </Card.Body>
                    </article>
                </Accordion.Collapse>
            </Card>
        );
    });
    return (
        <>
            <Accordion>{reposCards}</Accordion>
        </>
    );
};

export default CustomAccordion;
