import React from "react";
import INstructor from "../../../assets/Images/Instructor.png"
import HighlightText from "./HighLightText";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";
const InstructionSection=()=>{
    return(
        <div className='mt-16'>
            <div className='flex flex-row gap-20 items-center'>
                <div className='w-[50%]'>
                   <img src={INstructor}
                     alt=""
                     className='shadow-white'
                   >

                   </img>
                </div>
                <div className='w-[50%] flex flex-col gap-10'>
                      <div className='text-4xl font-semibold'>
                         Become an
                         <HighlightText text={"Instriuctor"}></HighlightText>
                      </div>

                      <p className='font-medium text-[16px] w-[80%] text-richblack-300'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis velit laboriosam ea perferendis nostrum consequatur totam maxime. Minus aliquam pariatur atque voluptatem laborum, labore ipsa!
                      </p>


                       <div className='w-fit'>
                       <CTAButton active={true} linkto={"/signup"}>
                        <div className='flex flex-row gap-2 items-center'>
                            Start Learning Today
                            <FaArrowRight></FaArrowRight>
                        </div>
                      </CTAButton>
                       </div>
                     
                </div>
            </div>
        </div>
    )
}

export default InstructionSection