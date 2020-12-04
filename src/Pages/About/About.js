import React from 'react';

const About = () => (
    <section>
        <header>
            <h3>About</h3>
        </header>
        <br />

        <section>
            <p>
                The main objective of this project is to practice some dev
                skills throught some technologies and concepts:
            </p>
            <ul>
                <li>
                    <strong>ReactJS</strong>
                </li>
                <li>
                    <strong>React Router</strong>
                </li>
                <li>
                    <strong>React Bootstrap</strong>
                </li>
                <li>
                    <strong>Mocha: </strong> testing library.
                </li>
                <li>
                    <strong>SEO and Web Semantic: </strong> use of tags that
                    emphasizes the semantic of each part of the pages.
                </li>
                <li>
                    <strong>Usability</strong>
                </li>
                <li>
                    <strong>Clean Code</strong>
                </li>
                <li>
                    <strong>SOLID</strong>
                </li>
                <li>
                    <strong>KISS: </strong> “Keep It Simple, Stupid!”
                </li>
                <li>
                    <strong>YAGNI: </strong> “You aren’t gonna need it”
                </li>
                <li>
                    <strong>DRY: </strong> “Do not Repeat Yourself”
                </li>
            </ul>
        </section>

        <hr />

        <section>
            <h5>Functionalities purposed</h5>
            <p>
                Provide a search field to search Github user informations and a
                place to show them. Provide a button to search for the user
                repositories, a button to search for the repositories the user
                starred and a place to show these. To do this, some endpoints
                from Github API was consumed:
            </p>
            <ul>
                <li>
                    <strong>User informations: </strong>
                    https://api.github.com/users/USER_GITHUB
                </li>
                <li>
                    <strong>User repositories: </strong>
                    https://api.github.com/users/USER_GITHUB/repos
                </li>
                <li>
                    <strong>Repositories the user starred: </strong>
                    https://api.github.com/users/USER_GITHUB/starred
                </li>
            </ul>
        </section>
    </section>
);

export default About;
