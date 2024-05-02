import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HighLightText from "../components/core/HomePage/HighLightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructionSection from "../components/core/HomePage/InstructionSection"
import Footer from "../components/common/Footer"
import ExploreMore from '../components/core/HomePage/Explore';
const Home=()=>{
    return(
    <div>
        
       {/* {section 1 } */}
        <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'>
              <Link to={"/signup"}>
        <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
            <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
            <p>Become An Instructor</p>
            <FaArrowRight></FaArrowRight>
            </div>
        </div>
               </Link>

            <div className='text-center text-4xl font-semibold mt-7'>
            Empower Your Power With
            <HighLightText text={"Coding Skills"}></HighLightText>
            </div>


            <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblue-500 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla recusandae omnis exercitationem numquam eligendi iste. Molestias magnam voluptatibus consequatur ab tempora vel obcaecati, dicta rerum corrupti officia neque animi rem sed corporis eum placeat laudantium nihil reprehenderit! At corporis doloremque iure voluptatibus dicta molestiae repudiandae?
            </div>
            
            <div className='flex flex-row gap-7 mt-8'>
                        <CTAButton active={true} linkto={"/signup"}> Learn More</CTAButton>
                        <CTAButton active={false} linkto={"/login"}>Book A Demo</CTAButton>
              </div>

              <div className='mx-3 my-12 shadow-blue-200'>
                <video muted loop autoPlay><source src={Banner} type="video/mp4"></source>

                </video>
              </div>


              <div>
            <CodeBlocks 
                position={"lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your
                        <HighLightText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                codeColor={"text-yellow-25"}
            />
              </div>

              <div>
            <CodeBlocks 
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your
                        <HighLightText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                codeColor={"text-yellow-25"}
            />
              </div>

              <ExploreMore></ExploreMore>
           
        </div>    
    
              
        
       {/* {section 2} */}
       <div className='bg-pure-greys-5 text-richblack-700'>
            <div className='homepage_bg h-[310px]'>
                <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto '>
                  <div className='h-[150px]'></div>
                  <div className='flex flex-row gap-7 text-white'>
                       <CTAButton active={true} linkto={"/signup"}>
                           <div className='flex items-center gap-3'>
                              Explore Full Catalog
                              <FaArrowRight></FaArrowRight>
                           </div>
                           
                       </CTAButton>

                       <CTAButton active={false} linkto={"/signup"}>
                            <div>
                                Learn More
                            </div>
                       </CTAButton>
                  </div>
                </div>
                 

                </div>


            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
               
               <div className='flex flex-row gap-5 mb-10 mt-[95]px'>
                    <div className='text-4xl font-semibold w-[45%]'>
                        Get the skills that you need for a      
                        <HighLightText text={"Job that is in demand"}></HighLightText>
                                       </div>

                  <div className='flex flex-col gap-10 w-[40%] items-start'>
                  <div className='text-[16px]'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus neque reiciendis, labore ullam, dolorum iure unde vero modi corporis ut consectetur obcaecati doloremque, eaque saepe!
                  </div>

                  <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
               </div>
               </div>

              
            </div>

            <TimeLineSection></TimeLineSection>
             <LearningLanguageSection></LearningLanguageSection>
        </div>

       
       {/* {section 3} */}
         <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>


            <InstructionSection></InstructionSection>
            <h2 className='text-center text-4xl font-semobold mt-10'>Review From others learners</h2>

            <ReviewSlider></ReviewSlider>
         </div>
         

         

       {/* {section 4} */}
        <Footer></Footer>

    </div>
    )
}

export default Home