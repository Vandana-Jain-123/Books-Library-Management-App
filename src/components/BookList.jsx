import React from 'react'
import { useSelector } from 'react-redux'

export const BookList = () => {

    const {userReadBook} = useSelector((state)=>state?.BookList);

    
  return (
    <div>
        <h1>my books</h1>
        
    </div>
  )
}
