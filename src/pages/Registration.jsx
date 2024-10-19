import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='p-5 h-screen flex flex-col items-start justify-center'>
            <h1>Registration</h1>
            <form className='flex flex-col gap-y-6'>
                <input placeholder='Last Name'/>
                <input placeholder='First Name'/>
            </form>
            <Link to='/role'>Register</Link>
        </div>
    );
}

export default Registration;
