
import arrow from '../assets/icons/Arrow2.svg'
import arrowL from '../assets/icons/Arrow.svg'
import jobLogoExample from '../assets/icons/JobLogoExample1.svg'

import jobType from '../assets/icons/job-type.svg'
import shiftType from '../assets/icons/shift-type.svg'

const JobSearch = () => {
    return (
        <div className="py-5 px-10">
            <div className='flex flex-row items-center gap-x-4'>
                <div className='bg-[#D9D9D96E] p-2 rounded-lg'>
                    <img src={arrow} className='w-4 h-4'/>
                </div>
                <h1 className='font-medium text-base text-black'>Search Job</h1>
            </div>
            <section className='my-4'>
                <div className='bg-[#0040FF26] w-full h-auto rounded-xl'>
                    <div className='px-4 py-6'>
                        <div className='flex justify-between mb-4'>
                            <div className='flex items-center gap-x-4'>
                                <div className='bg-white p-4 rounded-xl'>
                                    <img src={jobLogoExample}/>
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='text-sm'>Content Writer</h1>
                                    <p className='text-xs'>ui8.net</p>
                                </div>
                            </div>
                            <div className='text-white flex items-center'>
                                <button className='bg-black px-2 py-1 rounded-lg'>Apply Now</button>
                                <button><img src={arrowL} className='rotate-[-90deg] bg-black px-2 py-1 rounded-lg w-8 h-8'/></button>
                            </div>
                        </div>
                        <hr className='border border-[#00000033] border-dashed'></hr>
                        <div className='flex gap-x-4 text-xs my-4'>
                            <div className='flex items-center gap-x-2'>
                                <img src={jobType} className='w-4 h-4'/>
                                <p>Remote</p>
                            </div>
                            <div className='flex items-center gap-x-2'>
                            <img src={shiftType} className='w-4 h-4'/>
                                <p>Full Time</p>
                            </div>
                        </div>
                        <p className='text-xs text-[#595959AB]'>We are looking for a dynamic Web - Designer who will be responsible...</p>
                    </div>                                                              
                </div>
            </section>
        </div>
    );
}

export default JobSearch;
