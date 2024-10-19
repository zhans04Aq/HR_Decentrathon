import React from 'react';

import profileSearchIcon from '../assets/icons/profileSearchIcon.svg'

const ProfileJobSeeker = () => {
    return (
        <div className=''>
            <div className='bg-[#2E00D7] w-full h-auto p-5 text-white'>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-row items-center gap-x-4'>
                        <div className='w-10 h-10 bg-gray-50 opacity-50 rounded-xl flex items-center justify-center'>
                            <div className='w-8 h-8 bg-gray-500 opacity-80 rounded-xl'></div>
                        </div>
                        <p className='text-base'>
                            Hello, <br />
                            <span className='text-2xl'>User Name </span>               
                        </p>
                    </div>
                    <div className='relative w-full'>
                        <div className='bg-gray-400 p-7 rounded-full opacity-50 absolute right-4 bottom-0'></div>
                        <img src={profileSearchIcon} alt="" className='w-8 h-8'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileJobSeeker;
