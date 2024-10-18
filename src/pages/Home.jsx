import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='flex gap-x-2'>
            Home
            <Link to='/profile'>Profile</Link>
            <Link to='/vacancy-list'>Vacancy List</Link>
            <Link to='/vacancy-response'>Vacancy Response</Link>
        </div>
    );
}

export default Home;
