import React from "react";
import { useSelector } from "react-redux";
import IconBtn from "../../common/IconBtn";

const CourseReviewModal=({setReviewModal})=>{

    const {user}=useSelector((state)=>state.profile);
    const {token}=useSelector((state)=>state.auth);


    const{
        register,
        handleSubmit,
        setValue,
        formState:{errors},
    }=useForm();

    useEffect(()=>{
        setValue("courseExperience","")
        setValue("courseRating",0)
    },[])

    const ratingChanged=(newRating)=>{
          setValue("courseRating" , newRating);
    }
    const onSubmit=async(data)=>{
       await createRating(
        {
            courseId:courseentireData._id,
            rating:data.courseRating,
            review:data.courseExperience,
        },
        token
       );
       setReviewModal(false);
    }
    return(
        <div>
             <div>
             <div>
                  <p>Add Review</p>
                  <button
                  onClick={setReviewModal(false)}>
                      Close
                  </button>
              </div>

               <div>
                  <div>
                     <img
                     src={user?.image}
                     alt='user Image'
                     className='aspect-square w-[50px] rounded-full object-cover'>
                     </img>
                     <div>
                        <p>{user?.firstName}{user?.lastName}</p>
                        <p>Posting Publicly</p>
                     </div>
                  </div>

                  <form
                  onSubmit={handleSubmit(onSubmit)}
                  className='mt-6 flex flex-col items-center'>
                   <ReactStars
                   count={5}
                   onChange={ratingChanged}
                   size={24}
                   activeColor="#fd700">

                   </ReactStars>


                   <div>
                     <label htmlFor='courseExperience'>
                         Add Your Experience
                     </label>

                     <textarea
                     id='courseExperience'
                     placeholder="Add your experience here"
                     {...register("courseExperience" , {required:true})}
                     className="form-style min-h-[130px] w-full">

                     </textarea>{
                        errors.courseExperience && (
                            <span>
                                Please add your experience
                            </span>
                        )
                     }
                   </div>

                   <div>
                       <button
                       onClick={()=> setReviewModal(false)}>
                          Cancel
                       </button>
                       <IconBtn
                       text="save">

                       </IconBtn>
                    </div>
                  </form>
               </div>
                </div>
        </div>
    )
}

export default CourseReviewModal

