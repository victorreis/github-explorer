import React from 'react';
import { Route } from 'react-router-dom';

const CustomRoute = (props) => {
    const { component, path, exact, key } = props.item;
    return <Route exact={exact} path={path} component={component} key={key} />;
};

const createCustomRoute = (item) => CustomRoute({ item });
export default createCustomRoute;
