import React from 'react'
import { useSelector } from 'react-redux'

export const MyBookPage = () => {

    const {userReadBook} = useSelector((state)=>state?.booksList);

    
  return (
    <div class="container-myBooks">

   {userReadBook?.map((item)=>{
    return(
        <div class="card" key={item?.id}>
        <h3> {item?.title} </h3>
        <h4> Author: {item?.author} </h4>
        <p>Rate : * * </p>
      </div>
    )
   })}

</div>
  )
}
