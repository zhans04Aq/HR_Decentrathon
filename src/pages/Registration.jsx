import uploadIcon from '../assets/icons/upload.svg'
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='p-5 h-screen flex flex-col items-start gap-y-5 justify-center'>
            <h1 className='text-white text-3xl font-semibold'>Registration</h1>
            <form className='flex flex-col gap-y-6 w-full'>
                <input placeholder='First Name' className='px-6 py-2 rounded-lg'/>
                <input placeholder='Last Name' className='px-6 py-2 rounded-lg'/>
                <textarea placeholder='Tell us about yourself...' className=' px-6 py-2 rounded-lg w-full min-h-24'/>
            </form>
            <div className='border border-dashed border-white self-center w-full flex flex-col items-center justify-center py-6 rounded-lg'>
                <img src={uploadIcon}/>
                <h1 className='text-white font-semibold text-xs'>Upload your resume</h1>
                <p className='text-[7px] text-[#FFFFFF78]' >Maximum file size: 50 MB</p>
                <p className='text-[7px] text-[#FFFFFF78]'>Supported format: .CSV</p>
            </div>
            <Link to='/role' className='self-center bg-white text-[#2E00D7] w-5/6 text-center font-semibold text-xl rounded-lg py-4'>Register</Link>
        </div>
    );
}

export default Registration;
