import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../../Pages/Home';
import createCustomRoute from '../CustomRoute';

const CustomSwitch = ({ items }) => {
    const routes = items.map((item) => createCustomRoute(item)());

    return (
        <main>
            <br />
            <br />
            <Switch>
                <Route path="/" exact component={Home} />
                {routes}
            </Switch>
        </main>
    );
};

export default CustomSwitch;
