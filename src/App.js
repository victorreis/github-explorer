import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import CustomNavbar from './Components/Navigation/CustomNavbar';
import CustomSwitch from './Components/Navigation/CustomSwitch';
import routes from './Routes/routes';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <CustomNavbar items={routes} />
                <CustomSwitch items={routes} />
            </BrowserRouter>
        </>
    );
};

export default App;
