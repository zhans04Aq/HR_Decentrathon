import bell from '../assets/icons/iconBell.svg'
import postJob from '../assets/icons/job-post.svg'

const ProfileRecuiter = () => {
    return (
        <div className='py-6 px-8 w-full flex flex-col'>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-row items-center gap-x-4 w-full'>
                        <div className='w-10 h-10 bg-gray-500 opacity-50 rounded-xl flex items-center justify-center'>
                            <div className='w-8 h-8 bg-gray-50 opacity-80 rounded-xl'></div>
                        </div>
                        <p className='text-xs'>
                            Hello, <br />
                            <span className='text-2xl font-semibold'>User Name </span>               
                        </p>
                    </div>
                    <div className='relative w-full flex items-center'>
                        <div className='absolute bg-gray-400 p-3 rounded-full opacity-50 right-0'></div>
                        <img src={bell} alt="" className=' absolute w-3 h-3 right-1.5'/>
                    </div>
                </div>
                <section className='self-center flex gap-y-6 flex-col items-center justify-center h-[65dvh] text-center'>
                    <div className='bg-[#455A9726] p-6 w-1/3 rounded-full'>
                        <img src={postJob} className=''/>
                    </div>
                    <div className=' space-y-6'>
                        <h1 className='text-2xl font-semibold'>Post a job and Hire</h1>
                        <p className='text-base'>When you post a job you can edit <br/> and promote</p>
                    </div>
                </section>
                <div className='text-black font-semibold flex items-center self-center'>
                    <button className='bg-[#455A9726] px-4 py-2 rounded-lg'>Apply Now</button>
                    <button className='bg-[#455A9726] px-4 py-2 rounded-lg'>+</button>
                </div>
        </div>
    );
}

export default ProfileRecuiter;
