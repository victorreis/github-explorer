import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import CustomNavbar from './Components/Navigation/CustomNavbar';
import CustomSwitch from './Components/Navigation/CustomSwitch';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <CustomNavbar />
                <CustomSwitch />
            </BrowserRouter>
        </>
    );
};

export default App;
