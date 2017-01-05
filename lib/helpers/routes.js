import Login from '../components/Login';
import AccountSetup from '../components/AccountSetup';
import Application from '../components/Application';

const routes = {
    path: '/',
    component: Application,
    childRoutes: [
        { path: '/login', component: Login },
        {
            path: '/accountsetup',
            component: AccountSetup,
            // childRoutes: [ { path: '/post/:nr', component: Post } ]
        },
    ]
}
