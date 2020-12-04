import About from '../Pages/About';
import User from '../Pages/User';

const routes = [
    {
        key: 'About',
        name: 'About',
        path: '/about',
        showInMenu: true,
        exact: true,
        component: About,
    },
    {
        key: 'User',
        name: 'User',
        path: '/:username',
        showInMenu: false,
        exact: false,
        component: User,
    },
];

export default routes;
