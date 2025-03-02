
import { FETCH_MY_BOOKS, FETCH_BOOKS_SUCCESS,ADD_BOOK_TO_USER_LIST, FETCH_BOOKS_FAILURE,FETCH_BOOKS_REQUEST } from "../actions/bookActions"
const initialState = {

    books: [],
    userBooksList : [],
    userReadBook : [],

}

export const bookReducer =(state=initialState, action)=>{
    const {payload, type} = action;
    switch(action.type){
        case FETCH_BOOKS_SUCCESS:
            return{...state, books: [...payload]}
        case ADD_BOOK_TO_USER_LIST:
            return{...state, userReadBook: [...state.userReadBook, payload]}
        default:
            return state
    }
}