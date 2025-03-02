import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signUp, signout } from '../redux/actions/authAction';
import { useSelector } from "react-redux";

export const SignUp = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    console.log("state is", state);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const submit = () => {
        dispatch(signUp(email, password))
        setEmail('');
        setPassword('')
    }

    const signOutFn = () => {
        dispatch(signout())
    }
    return (
        <div>SignUp 
             <button onClick={signOutFn}> sign out </button>
            <input type='text' placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='enter email' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={submit}>SUbmit</button>

            <hr />
        </div>
    )
}
