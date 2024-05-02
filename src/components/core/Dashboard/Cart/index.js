import React from "react";
import {useSelector} from "react-redux"

const Cart=()=>{

    const {total , totalItems}=useSelector((state)=>state.auth);
    return (
        <div>
           <h1>Your Cart</h1>
           <p>{totalItems} Courses in Cart</p>
           {total>0
           ?(<div>
              <RenderCartCourses></RenderCartCourses>
            </div>):(<p>Your cart is empty</p>)}
        </div>
    )
}

export default Cart