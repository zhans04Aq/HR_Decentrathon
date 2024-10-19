import React from 'react';

import sliderIllustration from '../../assets/illustration/Illustration No. 1.svg'

const ThirdSlider = () => {
    return (
        <div className='flex flex-col gap-y-3 items-center my-5'>
            <img src={sliderIllustration} alt="" className='mb-5 w-2/3' />
            <div className='text-center text-white w-full flex flex-col items-center gap-y-5'>
                <p className='text-lg '>Mini application helps to attract specialists, improve the quality of your projects and stimulate innovative thinking in the team</p>
            </div>
        </div>
    );
}

export default ThirdSlider;
