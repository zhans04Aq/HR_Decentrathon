import React from 'react';
import { NavLink } from 'react-router-dom';

import homeIcon from '../assets/icons/Home.svg'

const Navbar = () => {
    return (
        <div className='fixed bottom-0 left-0 w-full '>
            <div className='bg-black px-2 py-4 mx-2 my-2 rounded-xl text-black'>
                <div className='flex justify-around text-sm '>
                    <NavLink to='/' className='text-white flex px-2 py-1 items-center gap-x-1 rounded-lg'>
                        <img src={homeIcon} alt="" className=''/>
                        Home
                    </NavLink>
                    <NavLink to='profile' className='text-white flex px-2 py-1 items-center gap-x-1 rounded-lg'>
                        <img src="" alt="" />
                        Profile
                    </NavLink>
                    <NavLink to='vacancy-list' className='text-white flex px-2 py-1 items-center gap-x-1 rounded-lg'>
                        Vacancy List</NavLink>
                    <NavLink to='vacancy-response' className='text-white flex px-2 py-1 items-center gap-x-1 rounded-lg'>Vacancy Response</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
