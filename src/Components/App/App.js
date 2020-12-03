import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CustomNavbar from '../Navigation/CustomNavbar';
import CustomSwitch from '../Navigation/CustomSwitch';

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
