
import { useState } from "react";
import FirstSlider from "../components/sliderComponents/FirstSlider";

import SecondSlider from '../components/sliderComponents/SecondSlider'
import ThirdSlider from "../components/sliderComponents/ThirdSlider";

const Intro = ({ onProceed }) => {

    const [sliderCounter, setSLiderCounter] = useState(1)

    const sliderHandler = () =>{
        setSLiderCounter(sliderCounter+1)
    }

    if(sliderCounter>3){
        onProceed()
    }

    return (
    <div className="flex justify-center flex-col items-center h-screen p-1">
        {
            sliderCounter == 1? <FirstSlider/> : <></>
        }        {
            sliderCounter == 2? <SecondSlider/> : <></>
        }        {
            sliderCounter == 3? <ThirdSlider/> : <></>
        }
        <div className="flex w-full flex-col items-center gap-y-6">

            <div className="flex justify-center flex-row gap-x-3 w-3/4">
                <div onClick={()=>setSLiderCounter(1)} className={`${sliderCounter == 1?` bg-white  `:`bg-[#B5B5B554]`}  rounded-full w-2 h-2`}></div>               
                <div onClick={()=>setSLiderCounter(2)} className={`${sliderCounter == 2?` bg-white  `:` bg-[#B5B5B554]`}  rounded-full w-2 h-2`}></div>                
                <div onClick={()=>setSLiderCounter(3)} className={`${sliderCounter == 3?` bg-white  `:`bg-[#B5B5B554] `}  rounded-full w-2 h-2`}></div>
            </div>
            <button className="bg-white w-2/3 py-2 text-mainPurp rounded-xl font-semibold text-sm" onClick={sliderHandler}>
                {sliderCounter == 1 ? 'Get Started': ''}
                {sliderCounter == 2 ? 'Next': ''}
                {sliderCounter == 3 ? 'Finish': ''}
                
                </button>
        </div>
    </div>
    );
};

export default Intro;  