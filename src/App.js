import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink, Route, BrowserRouter, Switch } from 'react-router-dom';

import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import User from './Pages/User';

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

                    <Switch>
                        <Route path="/about" exact component={About} />
                        <Route path="/" exact component={Home} />
                        <Route path="*" exact component={User} />
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    );
};

export default App;
