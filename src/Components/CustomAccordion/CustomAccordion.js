import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const CustomAccordion = ({ repos }) => {
    const reposCards = repos?.map((repo) => (
        <Card key={repo.id}>
            <Accordion.Toggle as={Card.Header} eventKey={repo.id}>
                {repo.name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={repo.id}>
                <article>
                    <Card.Body>
                        <strong>Description: </strong>
                        {repo.description || '-'}
                        <br />
                        <strong>Forks: </strong>
                        {repo.forks}
                        <br />
                        <strong>Homepage: </strong>
                        {repo.homepage || '-'}
                        <br />
                        <strong>Language: </strong>
                        {repo.language}
                        <br />
                        <strong>Html Url: </strong>
                        {repo.htmlUrl}
                        <br />
                        <strong>Stargazers: </strong>
                        {repo.stargazersCount}
                        <br />
                        <strong>Watchers: </strong>
                        {repo.watchersCount}
                        <br />
                        <strong>Forks: </strong>
                        {repo.forksCount}
                        <br />
                        <strong>Open Issues: </strong>
                        {repo.openIssuesCount}
                        <br />
                        <strong>Created At: </strong>
                        <time dateTime={repo.createdAt}>{repo.createdAt}</time>
                        <br />
                        <strong>Updated At: </strong>
                        <time dateTime={repo.updatedAt}>{repo.updatedAt}</time>
                        <br />
                        <strong>Pushed At: </strong>
                        <time dateTime={repo.pushedAt}>{repo.pushedAt}</time>
                    </Card.Body>
                </article>
            </Accordion.Collapse>
        </Card>
    ));
    return (
        <>
            <Accordion>{reposCards}</Accordion>
        </>
    );
};

export default CustomAccordion;
