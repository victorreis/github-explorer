import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink, BrowserRouter } from 'react-router-dom';

import './App.css';
import CustomSwitch from './Components/Navigation/CustomSwitch/CustomSwitch';
import routes from './Routes/routes';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <div>
                    <nav>
                        <NavLink to="/">
                            <Button>Home</Button>
                        </NavLink>
                        <NavLink to="/about">
                            <Button>About</Button>
                        </NavLink>
                    </nav>

                    <CustomSwitch items={routes} />
                </div>
            </BrowserRouter>
        </>
    );
};

export default App;
