
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='fixed bottom-0 left-0 w-full '>
            <div className='bg-black px-2 py-4 mx-2 my-2 rounded-xl text-black'>
                <div className='flex justify-around text-sm '>
                    <NavLink to='/' className='text-white flex px-2 py-1 items-center gap-x-1 rounded-lg'>
                        <p>Home</p>
                    </NavLink>
                    <NavLink to='search-job' className='text-white flex px-2 py-1 items-center gap-x-1 rounded-lg'>
                        <p>Marketplace</p>
                    </NavLink>
                    <NavLink to='vacancy-response' className='text-white flex px-2 py-1 items-center gap-x-1 rounded-lg'>
                        <p>Notifications</p>
                    </NavLink>
                    <NavLink to='profile' className='text-white flex px-2 py-1 items-center gap-x-1 rounded-lg'>
                        <img src="" alt="" />
                        <p>Profile</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
