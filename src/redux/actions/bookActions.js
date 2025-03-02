


export const REGISTER_USER='REGISTER_USER'
export const LOGIN_USER= 'LOGIN_USER'
export const LOGOUT_USER= 'LOGOUT_USER'
export const SET_USER = 'SET_USER'

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST'
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS'
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE'
export const ADD_BOOK_TO_USER_LIST= 'ADD_BOOK_TO_USER_LIST'
export const FETCH_MY_BOOKS = 'FETCH_MY_BOOKS'
export const UPDATE_BOOK_STATUS= 'UPDATE_BOOK_STATUS'
export const UPDATE_BOOK_RATING= 'UPDATE_BOOK_RATING'

export const getHompageBooks =( type, payload)=>{
    return{
        payload,
        type
    }

}


