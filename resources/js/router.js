import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Users from './components/Users';


const routes = [
    {
        path: '/dashboard',

        component: Dashboard,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        title: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/profile',
        name: 'profile',
        title: 'profile',
        component: Profile
    },
    {
        path: '/users',
        name: 'users',
        title: 'users',
        component: Users
    },
    {
        path: '*',
        redirect: { name: 'dashboard' },
    },
];



export default routes;
