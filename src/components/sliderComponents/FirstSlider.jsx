import React from 'react';

const FirstSlider = () => {
    return (
        <div className='flex justify-center gap-y-36 flex-col items-center h-screen'>
            <div className="absolute w-1/3 top-12 right-36">
                <div className="flex justify-between">
                    <div className="rotate-[7.37deg] w-11 h-80  round rounded-tl-3xl rounded-br-3xl
                    bg-gradient-to-b opacity-30 
                    from-[#D9D9D9] to-[#737373]"></div>
                    <div className="relative bottom-10 rotate-[187.37deg] w-11 h-80 bg-white rounded-bl-3xl rounded-tr-3xl bg-gradient-to-b opacity-30
                    from-[#D9D9D9] to-[#737373]"></div>
                </div>
            </div>
            <div className="flex flex-col gap-y-6 text-center font-medium	">
                <p className="text-black px-16 bg-white rounded-lg py-2 rotate-[-15deg] z-0">Flexible Job Provider</p>
                <p className="text-white bg-mainBlue rounded-lg py-2 rotate-[11deg]">Hr & Recruitment App</p>
                <p className="text-black bg-white rounded-lg py-2 rotate-[-15.72deg]">Find Your Dream Job</p>
            </div>
            <h1 className="text-3xl text-center text-white w-3/4 font-semibold leading-9">A mini - app for easy job search and job provider</h1>
        </div>
    );
}

export default FirstSlider;
