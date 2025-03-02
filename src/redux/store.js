// import { createStoreHook } from "react-redux";
// import {legacy_createStore as createStore} from 'redux'
import {
	applyMiddleware,
	combineReducers,
	legacy_createStore as createStore,
} from "redux";
import { authReducer } from './reducer/authReducer'
import { bookReducer } from "./reducer/bookReducer";
import { thunk } from "redux-thunk";

// export const store = createStore(authReducer, )
const rootReducer = combineReducers({
	auth: authReducer,
	booksList: bookReducer
	// posts: postReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk),  
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
