import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const CustomAccordion = ({ repos }) => {
    const reposCards = repos?.map((repo) => (
        <Card key={repo.id}>
            <Accordion.Toggle as={Card.Header} eventKey={repo.id}>
                {repo.name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={repo.id}>
                <Card.Body>
                    <strong>description: </strong>
                    {repo.description}
                    <br />
                    <strong>forks: </strong>
                    {repo.forks}
                    <br />
                    <strong>homepage: </strong>
                    {repo.homepage}
                    <br />
                    <strong>language: </strong>
                    {repo.language}
                    <br />
                    <strong>htmlUrl: </strong>
                    {repo.htmlUrl}
                    <br />
                    <strong>fullName: </strong>
                    {repo.fullName}
                    <br />
                    <strong>htmlUrl: </strong>
                    {repo.htmlUrl}
                    <br />
                    <strong>stargazersCount: </strong>
                    {repo.stargazersCount}
                    <br />
                    <strong>watchersCount: </strong>
                    {repo.watchersCount}
                    <br />
                    <strong>forksCount: </strong>
                    {repo.forksCount}
                    <br />
                    <strong>openIssuesCount: </strong>
                    {repo.openIssuesCount}
                    <br />
                    <strong>openIssues: </strong>
                    {repo.openIssues}
                    <br />
                    <strong>createdAt: </strong>
                    {repo.createdAt}
                    <br />
                    <strong>updatedAt: </strong>
                    {repo.updatedAt}
                    <br />
                    <strong>pushedAt: </strong>
                    {repo.pushedAt}
                </Card.Body>
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
