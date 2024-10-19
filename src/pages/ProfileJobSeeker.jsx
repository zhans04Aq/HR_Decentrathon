

import profileSearchIcon from '../assets/icons/profileSearchIcon.svg'
import arrow from '../assets/icons/arrow.svg'
import jobType from '../assets/icons/job-type.svg'
import shiftType from '../assets/icons/shift-type.svg'

import TCO from '../assets/icons/TCO.svg'
import NCOC from '../assets/icons/NCOC.svg'

import {jobData} from '../fakedata/vacancydatas'

const ProfileJobSeeker = () => {
    return (
        <div className=''>
            <section className='bg-[#2E00D7] w-full h-auto p-5 text-white flex flex-col gap-y-10'>
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
            </section>
            <section className='pt-5 px-9'>
                <div className='flex flex-row justify-between w-full'>
                    <h1 className='text-base font-semibold'>Best Matches</h1>
                    <p className='text-xs'>See All</p>
                </div>
                <div className='flex items-center gap-6 overflow-x-auto pb-4 text-center'>
                {
                    jobData.map((item)=>(
                        <>
                            <div key={item.id} className='bg-[#D9D9D9] pb-3 py-9 px-4 rounded-xl flex flex-col items-center gap-y-4 whitespace-nowrap'>
                                <div className='bg-white px-5 pb-5 flex flex-col gap-y-4 w-full items-center rounded-xl'>
                                    <div className='relative bottom-4 bg-[#D9D9D9] rounded-full p-3'>
                                        <div className='bg-white rounded-full p-3'>
                                            <img src={TCO} className='w-16 h-16 '/>
                                        </div>
                                    </div>
                                    <h1>{item.name}</h1>
                                    <div className='flex justify-around text-xs'>
                                        <div className='flex items-center gap-x-2'>
                                            <img src={jobType} className='w-4 h-4'/>
                                            <p>{item.jobType}</p>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                        <img src={shiftType} className='w-4 h-4'/>
                                            <p>{item.shiftType}</p>
                                        </div>
                                    </div>
                                    <p className='text-xs w-1/2 self-start'>{item.jobDescription}</p>
                                </div>
                                <button className='bg-[#2E00D7] text-white w-2/3 py-2 rounded-lg'>Apply Now</button>
                            </div>
                        </>
                    ))
                }
                </div>
            </section>
            <section className='pt-5 px-9 h-[50vh] bg-white'>
                <div className=''>
                    <div className='flex flex-row justify-between w-full'>
                        <h1 className='text-base font-semibold'>Most Recent</h1>
                        <p className='text-xs'>See All</p>
                    </div>
                </div>
                <div className='flex items-center gap-6 overflow-x-auto pb-4'>
                        <p className='bg-[#D9D9D9] bg-opacity-25 py-28 px-24 rounded-xl whitespace-nowrap'></p>
                        <p className='bg-[#D9D9D9] bg-opacity-25 py-28 px-24 rounded-xl whitespace-nowrap'></p>
                        <p className='bg-[#D9D9D9] bg-opacity-25 py-28 px-24 rounded-xl whitespace-nowrap'></p>
                        <p className='bg-[#D9D9D9] bg-opacity-25 py-28 px-24 rounded-xl whitespace-nowrap'></p>
                        <p className='bg-[#D9D9D9] bg-opacity-25 py-28 px-24 rounded-xl whitespace-nowrap'></p>

                    </div>
            </section>
        </div>
    );
}

export default ProfileJobSeeker;
