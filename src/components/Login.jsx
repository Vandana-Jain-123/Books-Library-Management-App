import React, { useState } from 'react'
// import {signin}
import {signin} from '../redux/actions/authAction'
import { useDispatch ,useSelector} from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
export const Login = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
	const navigate = useNavigate();

      const [email, setEmail] = useState('');
        const [password, setPassword] = useState('')
        const hadnleLogin=()=>{
            dispatch(signin(email, password, navigate))
            setEmail('');
            setPassword('')
        }
    return (
        <div>
             {state?.auth?.user?.email ? 'logout' : 'login'}
            

<p> login email: {state?.auth?.user?.email || ''} </p>

            <input type='text' placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='enter email' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={hadnleLogin}>SUbmit</button>
        </div>
    )
}
