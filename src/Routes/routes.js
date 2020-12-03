import About from '../Pages/About';
import User from '../Pages/User';

const routes = [
    {
        key: 'About',
        name: 'About',
        path: '/About',
        showInMenu: true,
        exact: true,
        component: About,
    },
    {
        key: 'User',
        name: 'User',
        path: '*',
        showInMenu: false,
        exact: false,
        component: User,
    },
];

export default routes;
