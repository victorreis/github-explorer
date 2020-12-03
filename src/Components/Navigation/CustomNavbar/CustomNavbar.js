import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { PROJECT_NAME } from '../../../Constants/constants';
import NavLinks from '../NavLinks';
import UserSearchField from '../UserSearchField';

const CustomNavbar = (props) => {
    return (
        <nav>
            <Navbar bg="light" expand="md">
                <NavLink to="/">
                    <Navbar.Brand>{PROJECT_NAME}</Navbar.Brand>
                </NavLink>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLinks />
                    </Nav>
                    <UserSearchField />
                </Navbar.Collapse>
            </Navbar>
        </nav>
    );
};

export default CustomNavbar;
