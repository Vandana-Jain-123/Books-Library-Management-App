import React from 'react'
import { Login } from './Login'
import { SignUp } from './SignUp'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../redux/actions/authAction'
import { Home } from '../pages/Home'
import "../styles/navbar.css"

export const Navbar = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch();

    const signOutFn = () => {
        dispatch(signout())
    }
    return (
        <div className='navbar'>
            <div>
                <Link className='link1' to="/home">Home</Link>
            </div>

            {state?.auth?.user?.email && <div>
                <Link className='link1' to="/mybooks"> my books</Link>
            </div>}

            <div>
                <Link className='link2' to="/signup">signup</Link>
            </div>

            {state?.auth?.user?.email && (<div style={{ color: "yellow", fontSize: "20px", marginLeft: "50%" }}>

                user email: {state?.auth?.user?.email}
            </div>)}
            {!state?.auth?.user?.email ?
                <div>
                    <Link to="/login" className='link21' >
                        {/* login */}
                        {state?.auth?.user?.email ? 'logout' : 'login'}
                    </Link>
                </div> :
                <div onClick={signOutFn}>
                    <Link to="/logout" className='link21'>
                        logout
                    </Link>
                </div>
            }


            {/* BookList */}





        </div>
    )
}
