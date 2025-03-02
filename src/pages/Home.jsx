

import axios from 'axios';
import React, { useEffect } from 'react'
import { getHompageBooks, FETCH_BOOKS_SUCCESS, ADD_BOOK_TO_USER_LIST } from '../redux/actions/bookActions';
import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
    const url = 'https://react-redux-social-media-57816-default-rtdb.firebaseio.com/books.json';
const dispatch = useDispatch();
const state = useSelector((state)=>state?.booksList);
console.log('state is ', state);

const handleCardWantToRead=(book)=>{
    dispatch(getHompageBooks(ADD_BOOK_TO_USER_LIST, book))
}
    const formatBooks =(booksObj)=>{
        let booksAr=[]
        for(let bookId in booksObj ){
            let obj ={}
            obj = {id: bookId, ...booksObj[bookId]}
            // obj["id"]=bookId;
            // obj = {...obj, }
            booksAr.push(obj)
        }
        return booksAr
    }
    useEffect(() => {
        axios.get(url)
            .then((res) => {
                console.log("res is ", formatBooks(res.data));
                dispatch(getHompageBooks(FETCH_BOOKS_SUCCESS, formatBooks(res.data) ))
                return res.data

            }).catch((err) => {
                console.log("err in fetch", err);

            })
    }, [])
    
    return (
        <div>HomePage

<div class="container">

   {state?.books?.map((item)=>{
    return(
        <div class="card" key={item?.id}>
        <h3> {item?.title} </h3>
        <img src={`${item?.coverImage}`} alt="" />
        <p>Card content goes here...</p>
        <h4> Author: {item?.author} </h4>
        <button onClick={()=>handleCardWantToRead(item)}> want to read </button>
      </div>
    )
   })}
</div>


        </div>
    )
}
