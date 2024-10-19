import React from 'react';

import illustration from '../assets/illustration/People search-rafiki1.svg'

import specialistIcon from '../assets/icons/specialist.svg'
import companyIcon from '../assets/icons/company.svg';

const RoleChoose = () => {
    return (
        <div className='flex flex-col items-center h-screen justify-center gap-y-24'>
            <img src={illustration} alt="" className='w-2/3'/>
            <div className='flex flex-col items-center relative gap-y-10'>
                <h1 className='font-semibold text-3xl text-center text-white w-3/4'>Are you a job-seeker or an employer?</h1>
                <div className='text-[#2E00D7] flex gap-x-4 items-center justify-center'>
                    <button className='flex items-center px-8 py-2 gap-x-4 bg-white rounded-lg'>
                        <img src={specialistIcon} alt="" />
                        <p className=''>Specialist</p>
                    </button>
                    <p className='text-white'>or</p>
                    <button className='flex items-center px-8 py-2 gap-x-4 bg-white rounded-lg'>
                        <img src={companyIcon} alt="" className=''/>
                        <p className=''>Company</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RoleChoose;
