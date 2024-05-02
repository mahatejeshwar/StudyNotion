import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { buyCourse } from '../services/operations/studentFeaturesAPI';
import { useState } from 'react';
import {fetchCourseDetails} from '../services/operations/studentFeaturesAPI'
const CourseDetails = () => {

    const {user} = useSelector((state)=>state.profile);
    const {token} = useSelector((state)=>state.auth);
    const {loading} = useSelector((state)=>state.profile);
    const {paymentLoading}=useSelector((state)=>state.course);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {courseId}  = useParams();

    const [courseData,setCourseData]=useState(null);

    useEffect(()=>{
        const getCourseFullDetails=async()=>{
           try{
                     const result=await fetchCourseDetails(courseId);
                     setCourseData(result);
           }
           catch(error){
               console.log("course details could not fetch")
           }

        }

        getCourseFullDetails();
        
    },[courseId]);

    const[avgReviewCount , setAverageReviewCount]=useState(0);
    useEffect(()=>{
        const count=GetAvgRating(courseData?.data?.CourseDetails.ratingAndReviews);

        setAverageReviewCount(count);
    },[courseData])


    const[totalNoOfLectures,setTotalNoOfLectures]=useState(0);
    useEffect(()=>{
        let lectures=0;
        lectures=courseData?.data?.courseDetails?.courseContent?.forEach((sec)=>{
            lectures+=sec.subSection.length || 0
        })
        setTotalNoOfLectures(lectures);

    },[courseData]);


    const handleBuyCourse = () => {
        
        if(token) {
            buyCourse(token, [courseId], user, navigate, dispatch);
            return;
        }

        setConfirmationModal({
            text1:"You are not logged in",
            text2:"Please login to purchase the course",
            btn1Text:"Login",
            btn2Text:"Cancel",
            btn1Handler:()=>navigate("/login"),
            btn2Handler:()=>setConfirmationModal(null),
        })

        if(loading || !courseData){
            return(
                <div>
                    Loading..
                </div>
            )
        }

        if(!courseData.success){
            return(
                <div>
                    <Error></Error>
                </div>
            )
        }
    }

    const{
        _id:course_id,
        courseName,
        courseDescription,
        price,
        whatYouWillLearn,
        courseContent,
        ratingAndReviews,
        instructor,
        studentEnrolled,
        createdAt,
    }=courseData.data?.courseDetails;


  return (
    <div className='flex flex-col items-center text-white'>
         <div className='flex flex-col relative'>
         <p>{courseName}</p>
          <p>{courseDescription}</p>
          <div className='flex gap-x-2'>
               <span>{avgReviewCount}</span>
               <RatingStars Review_Count={avgReviewCount} Star_Size={24}></RatingStars>
               <span>{`(${ratingAndReviews.length}reviews)`}</span>
               <span>{`(${studentEnrolled.length}students enrolled)`}</span>
          </div>
            <div>
                <p>Created By{`${instructor.firstName}`}</p>
            </div>

            <div className='flex-gap-x-3'>
                <p>
                    Created At{formatDate(createdAt)}
                </p>

                <p>English</p>
            </div>

            <div>
                <CourseDetailsCard
                course={courseData?.data?.courseDetails}
                setConfirmationModal={setConfirmationModal}
                handleBuyCourse={handleBuyCourse}
                
                >

                </CourseDetailsCard>
            </div>

         </div>


         {confirmationModal && <confirmationModal modalData={confirmationModal}></confirmationModal>}
    </div>
  )
}

export default CourseDetails
