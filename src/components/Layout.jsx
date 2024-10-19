import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <>
            <div className='bg-white w-full h-screen'>
                <Outlet/>
            </div>
            <Navbar/>
        </>
    );
}

export default Layout;
