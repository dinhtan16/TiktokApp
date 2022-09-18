import { HeaderOnly } from '~/components/Layout';
import Home from '../Pages/Home/Home';
import Follow from '../Pages/Follow/Follow';
import Profile from '../Pages/Profile/Profile';
import Upload from '../Pages/Upload/Upload';
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
const privateRoutes = [];

export { publicRoutes, privateRoutes };
