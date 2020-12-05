import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FaWpexplorer } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import { PROJECT_NAME } from '../../../Config/constants';
import NavLinks from '../NavLinks';
import UserSearchField from '../UserSearchField';

const CustomNavbar = () => {
    return (
        <nav>
            <Navbar bg="dark" expand="md">
                <Container>
                    <FaWpexplorer size="1.7rem" className="mr-3 text-light" />
                    <NavLink to="/">
                        <Navbar.Brand className="text-light">
                            <strong>{PROJECT_NAME}</strong>
                        </Navbar.Brand>
                    </NavLink>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLinks />
                        </Nav>
                        <UserSearchField />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default CustomNavbar;
