import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Navbar/>
        </>
    );
}

export default Layout;
