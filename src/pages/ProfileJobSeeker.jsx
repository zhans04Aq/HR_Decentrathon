import React from 'react';

import profileSearchIcon from '../assets/icons/profileSearchIcon.svg'
import arrow from '../assets/icons/arrow.svg'

const ProfileJobSeeker = () => {
    return (
        <div className=''>
            <div className='bg-[#2E00D7] w-full h-auto p-5 text-white flex flex-col gap-y-10'>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-row items-center gap-x-4 w-full'>
                        <div className='w-10 h-10 bg-gray-50 opacity-50 rounded-xl flex items-center justify-center'>
                            <div className='w-8 h-8 bg-gray-500 opacity-80 rounded-xl'></div>
                        </div>
                        <p className='text-base'>
                            Hello, <br />
                            <span className='text-2xl'>User Name </span>               
                        </p>
                    </div>
                    <div className='relative w-full flex items-center'>
                        <div className='absolute bg-gray-400 p-7 rounded-full w-10 h-10 opacity-50 right-0'></div>
                        <img src={profileSearchIcon} alt="" className=' absolute w-8 h-8 right-3'/>
                    </div>
                </div>
                <div className='flex flex-col gap-y-10'>
                    <h1 className='text-[#E8DD58] text-3xl'>
                        Find Find your Next <br />
                        Dream Job
                    </h1>
                    <div className='flex items-center gap-x-2' >
                        <p className='text-base'>Choose a Job Type</p>
                        <img src={arrow} alt="" className='w-3 h-3 mt-1'/>
                    </div>
                    <div className='flex items-center gap-6 overflow-x-auto pb-4'>
                        <p className='bg-[#D9D9D9] bg-opacity-25 py-3 px-4 rounded-xl whitespace-nowrap'>New Job</p>
                        <p className='bg-[#D9D9D9] bg-opacity-25 py-3 px-4 rounded-xl whitespace-nowrap'>Part Time</p>
                        <p className='bg-[#D9D9D9] bg-opacity-25 py-3 px-4 rounded-xl whitespace-nowrap'>Full Time</p>
                        <p className='bg-[#D9D9D9] bg-opacity-25 py-3 px-4 rounded-xl whitespace-nowrap'>Remote</p>
                        <p className='bg-[#D9D9D9] bg-opacity-25 py-3 px-4 rounded-xl whitespace-nowrap'>Hybrid</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileJobSeeker;
