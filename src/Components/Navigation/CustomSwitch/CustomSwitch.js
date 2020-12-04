import React from 'react';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import Home from '../../../Pages/Home';
import routes from '../../../Routes/routes';
import createCustomRoute from '../CustomRoute';

import './CustomSwitch.css';

const CustomSwitch = () => {
    const customRoutes = routes.map((route) => createCustomRoute(route));

    return (
        <Container className="custom-switch-container">
            <main>
                <br />
                <br />
                <Switch>
                    <Route path="/" exact component={Home} />
                    {customRoutes}
                </Switch>
                <br />
                <br />
            </main>
        </Container>
    );
};

export default CustomSwitch;
