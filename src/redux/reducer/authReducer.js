import { SIGNIN_SUCCESS, SIGNUP_SUCCESS ,SIGN_OUT} from "../actions/authAction"
const initialState = {
    user: null,

}
export const authReducer =(state=initialState, action)=>{

    console.log("action is ", action);
    

    switch(action.type){
        case SIGNUP_SUCCESS:
		case SIGNIN_SUCCESS:
            localStorage.setItem('user', JSON.stringify(action?.payload))
            return {...state , user:action?.payload}
        case SIGN_OUT:
            localStorage.removeItem('user')
            return{
                ...state, user:null
            }
        case SIGNIN_SUCCESS:
            return {...state, }
        default:
        return state

    }


}