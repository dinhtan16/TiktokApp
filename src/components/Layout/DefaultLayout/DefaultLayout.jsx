import Header from '../components/Header/Header';
import Sidebar from './Sidebar/Sidebar';
import './DefaultLayout.scss';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
function DefaultLayout() {
    return (
        <>
            <div className="wrapper">
                <Header />
                <div className="container">
                    <Sidebar />
                    <div className="content">
                        <Outlet />
                    </div>
                    {/* <div className="content">{children}</div> */}
                </div>
            </div>
        </>
    );
}
// DefaultLayout.propTypes = {
//     children: PropTypes.node.isRequired,
// };
export default DefaultLayout;
