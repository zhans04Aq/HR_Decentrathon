import React from 'react';

import slideIllustration from '../../assets/illustration/Illustration No. 2.svg'

const SecondSlider = () => {
    return (
        <div className='flex flex-col gap-y-3 items-center my-5'>
            <img src={slideIllustration} alt="" className='mb-5 w-2/3' />
            <div className='text-center text-white w-full flex flex-col items-center gap-y-5'>
                <h1 className='font-semibold text-3xl w-3/4'>A place where ideas become reality</h1>
                <p className='text-lg '>This mini-app will help to be useful for companies that value creativity, innovation and unique ideas in their work</p>
            </div>
        </div>
    );
}

export default SecondSlider;
