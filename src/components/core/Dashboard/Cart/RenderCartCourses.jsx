import React from "react";


const RenderCartCourses=()=>{

    const {cart}=useSelector((state)=>state.cart)
    const dispatch=useDispatch();
    return(
        <div>
          {
            cart.map((course,index)=>(
                <div>
                    <div>
                        <img src={course?.thumbnail}></img>
                        

                        <div>
                            <p>{course?.courseName}</p>
                            <p>{course?.category?.name}</p>
                            <div>
                                <span>4.8</span>
                                <ReactStars
                                 count={5}
                                 size={20}
                                 edit={false}
                                 activeColor="#ffd700"
                                 emptyicon={<GiNinjastar></GiNinjastar>}
                                 fullIcon={<GiNinjastar></GiNinjastar>}
                                >

                                </ReactStars>

                                <span>{course?.ratingAndReviews?.length}Ratings</span>
                                </div>
                            </div>
                    </div>

                    <div>

                        <button
                        onClick={()=>dispatch(removeFromCart(course._id))}>
                             <RiDeleteBin6Line></RiDeleteBin6Line> 
                             <span>Remove</span>
                        </button>

                        <p>Rs{course?.price}</p>
                        </div>
                    </div>
            ))
          }
        </div>
    )
}

export default RenderCartCourses