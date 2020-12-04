import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

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
            forksCount,
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
                            <strong>Forks: </strong>
                            {forks}
                            <br />
                            <strong>Homepage: </strong>
                            {homepage || '-'}
                            <br />
                            <strong>Language: </strong>
                            {language}
                            <br />
                            <strong>Html Url: </strong>
                            {htmlUrl}
                            <br />
                            <strong>Stargazers: </strong>
                            {stargazersCount}
                            <br />
                            <strong>Watchers: </strong>
                            {watchersCount}
                            <br />
                            <strong>Forks: </strong>
                            {forksCount}
                            <br />
                            <strong>Open Issues: </strong>
                            {openIssuesCount}
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
