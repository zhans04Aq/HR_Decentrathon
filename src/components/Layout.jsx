import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <>
            <div className=''>
                <Outlet/>
            </div>
            <Navbar/>
        </>
    );
}

export default Layout;
