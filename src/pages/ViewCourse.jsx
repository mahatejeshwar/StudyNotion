import React from 'react'
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getFullDetailsOfCourse } from '../services/operations/courseDetailsAPI';
import { setCompletedLectures, setCourseSectionData, setEntireCourseData, setTotalNoOfLectures } from '../slices/viewCourseSlice';
const ViewCourse=()=>{

    const[reviewModal , setReviewModal]=useState(false);
    const{courseID}=useParams();
    const{token}=useSelector((state)=>state.auth);
    const dispatch=useDispatch();

    useEffect(()=>{
        const setCourseSpecificDetails=async()=>{
            const courseData=await getFullDetailsOfCourse(courseId,token);
            dispatch(setCourseSectionData(courseData.courseDetails.courseContent));
            dispatch(setEntireCourseData(courseData.courseDetails));
            dispatch(setCompletedLectures(courseData.completedVideos));
            let lectures=0;
            courseData?.courseDetails?.courseContent?.forEach((sec)=>{
                lectures+=sec.subSection.length
            })
            dispatch(setTotalNoOfLectures(lectures))
        }
        setCourseSpecificDetails();
    },[]);


   return(
    <div>
        <>
          <div>
              <VideoDetailsSlider></VideoDetailsSlider>
              <div>
                <Outlet></Outlet>
              </div>
          </div>

          {reviewModal&& <CourseReviewModal setReviewModal={setReviewModal}></CourseReviewModal>}
        </>
    </div>
   )
}

export default ViewCourse