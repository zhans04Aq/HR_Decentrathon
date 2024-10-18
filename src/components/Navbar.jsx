import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='fixed bottom-0 w-full p-2'>
            <div className='flex gap-x-4 justify-center text-sm'>
                <Link to='/'>Home</Link>
                <Link to='profile'>Profile</Link>
                <Link to='vacancy-list'>Vacancy List</Link>
                <Link to='vacancy-response'>Vacancy Response</Link>
            </div>
        </div>
    );
}

export default Navbar;
