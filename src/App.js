import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';

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
                        <Link to="/">
                            <Button>Home</Button>
                        </Link>
                        <Link to="/about">
                            <Button>About</Button>
                        </Link>
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
