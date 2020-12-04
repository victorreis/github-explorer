import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../../Routes/routes';

const NavLinks = () => {
    const navLinks = routes.map(
        (route) =>
            route.showInMenu && (
                <NavLink className="nav-link" to={route.path} key={route.key}>
                    {route.name}
                </NavLink>
            )
    );
    return <>{navLinks}</>;
};

export default NavLinks;
