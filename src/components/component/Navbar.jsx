import React from 'react'
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/myBook"></Link>
        <Link to="/loginUser">Login/Register</Link>
        <Link to="/myBook"></Link>
        <Link to="/loginUser">Login/Register</Link>

      </nav>


    </>
  )
}

export default Navbar
