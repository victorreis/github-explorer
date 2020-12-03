import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../../Pages/Home';
import routes from '../../../Routes/routes';
import createCustomRoute from '../CustomRoute';

const CustomSwitch = (props) => {
    const customRoutes = routes.map((route) => createCustomRoute(route)());

    return (
        <main>
            <br />
            <br />
            <Switch>
                <Route path="/" exact component={Home} />
                {customRoutes}
            </Switch>
        </main>
    );
};

export default CustomSwitch;
