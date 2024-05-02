import React,{useEffect,useState} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI";
import IconBtn from "../../common/IconBtn";
import CoursesTable from "./InstructorCourses/CoursesTable";

const MyCourses=()=>{
    const{token}=useSelector((state)=>state.auth);
    const navigate=useNavigate();
    const [courses,setCourses]=useState([]);

    useEffect(()=>{
        const fetchCourses=async()=>{
            const result=await fetchInstructorCourses(token);
            if(result){
                setCourses(result);
            }
        }
        fetchCourses();
    },[])

    return(
        <div>
            <div>
                <h1>Ny courses</h1>
                <IconBtn
                text="Add Course"
                onclick={()=>navigate("/dashboard/add-course")}>

                </IconBtn>
            </div>

            {courses&& <CoursesTable courses={courses} setCourses={setCourses}></CoursesTable>}
        </div>
    )

}

export default MyCourses;