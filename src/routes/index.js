import { HeaderOnly } from '~/components/Layout';
import Home from '~/Pages/Home';
import Follow from '~/Pages/Follow';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
//ko dang nhap van xem dc
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/follow',
        component: Follow,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
];
// dang nhap moi xem dc
const privatRoutes = [];

export { publicRoutes, privatRoutes };
