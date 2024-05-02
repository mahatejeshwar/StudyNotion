import React , {useState} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const VideoDetailsSlider=({setReviewModal})=>{
     const[activeStatus , setActiveStatus]=useState("");
     const[videobarctive,setVideoBarActive]=useState("");
     const navigate=useNavigate();
     const location=useLocation();
     const{sectionId, subSectionId}=useParams();
     const{
        courseSectionData,
        courseentireData,
        totalNoOfLectures,
        completedLectures,
     }=useSelector((state)=>state.viewCourse);

     useEffect(()=>{
           ;(()=>{
            if(!courseSectionData.length) return ;
            const currentSectionIndex=courseSectionData.findIndex(
                (data)=>data.id===sectionId
            )

            const currentSubSectionIndex=courseSectionData?.[currentSectionIndex]?.subSection.findIndex(
                (data)=>data._id===subSectionId
            )

            const activeSubSectionId=courseSectionData(currentSectionIndex)?.subSection?.[currentSubsectionIndex]?._id;

            setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);
            setVideoBarActive(activeSubSectionId);
           })()
     },[courseSectionData,courseentireData,location.pathname])

    return(
        <>
        <div>
           {/* button and heding    */}
           <div>
            {/* button */}
              <div>
                   <div onClick={()=>{
                    navigate("/dashboard/enrolled-courses")
                   }}>
                      Back
                    </div> 

                    <div>
                        <IconBtn
                        text="Add Review"
                        onClick={()=>setReviewModal(true)}>

                        </IconBtn>
                    </div>
              </div>
              {/* heading or title */}
              <div>
                 <p>{courseentireData?.courseName}</p>
                 <p>{completedLectures?.length}/{totalNoOfLectures}</p>
              </div>
           </div>

            {/* sec and subsec */}
            <div>
                {
                    courseSectionData.map((course,index)=>(
                          <div
                          onClick={()=>setActiveStatus(course?._id)}
                          key={index}>

                            {/* {section} */}

                                <div>
                                  <div>
                                    {course?.sectionName}
                                    </div>

                                </div>



                            {/* {subsection} */}
                                <div>
                                  {
                                        activeStatus===course?._id&&(
                                            <div>
                                                {
                                                    course.subSection.map((topic,index)=>(
                                                        <div
                                                        className={`flex gap-5 p-5 ${
                                                            videobarctive===topic._id?
                                                            "bg-yellow-200 text-richblack-900"
                                                            :"bg-richblack-900 text-white"
                                                        }`}
                                                        key={index}
                                                        onClick={()=>{
                                                            navigate(
                                                                `/view-course/${courseentireData?._id}/section/${course?._id}/
                                                                sub-section/${topic?._id}`
                                                            )
                                                            setVideoBarActive(topic?._id);
                                                        }}>
                                                            <input
                                                            type='checkbox'
                                                            checked={completedLectures.includes(topic?._id)}
                                                            onChange={()=>{}}>
                                                            
                                                            </input>
                                                            <span>
                                                                {topic.title}
                                                            </span>
                                                            </div> 
                                                    ))
                                                }
                                                </div>
                                        )
                                  }
                                </div>


                            </div>
                    ))
                }
            </div>
        </div>
         </>
    )
}


export default VideoDetailsSlider