import React from "react";
import HighlightText from "./HighLightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from "./Button"
const LearningLanguageSection=()=>{
    return (
        <div className='mt-[150px] mb-32'>
            <div className='flex flex-col gap-5 items-center'>
                <div className='text-4xl font-semibond text-center'>
                    Your Swiss knife for
                    <HighlightText text={"Learning any Language"}></HighlightText>  
                        
                    
                </div>

                <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[70%]'>
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste dolore explicabo asperiores libero nesciunt vero quibusdam unde optio, voluptate sit. Facilis enim iure illo et! Modi fugiat earum voluptates itaque.
                </div>

                <div className='flex flex-row items-center mt-5'>
                <img src={know_your_progress}
                     alt="KNowyourprogress"
                     className='object-contain -mr-32'>
                       
                     </img>

                     <img src={compare_with_others}
                     alt="KNowyourprogress"
                     className='object-contain -mr-32'>
                       
                     </img>

                     <img src={ plan_your_lesson}
                     alt="KNowyourprogress"
                     className='object-contain -mr-32'>
                       
                     </img>
                </div>

                <div>
                    <CTAButton active={true} linkto={"/signup"}>
                        <div>
                            Learn More
                        </div>
                    </CTAButton>
                </div>

            </div>
            
        </div>
    )
}

export default LearningLanguageSection