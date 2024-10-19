import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='fixed bottom-0 left-0 w-full '>
            <div className='bg-black px-2 py-4 mx-2 my-2 rounded-xl text-white'>
                <div className='flex justify-around text-sm '>
                    <Link to='/'>Home</Link>
                    <Link to='profile'>Profile</Link>
                    <Link to='vacancy-list'>Vacancy List</Link>
                    <Link to='vacancy-response'>Vacancy Response</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
