import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-bar'>
        <nav>
            <div className="logo">
                <img src="/assets/shared/logo.svg" alt="" />
            </div>
            <div className="link">
                <Link to={"/"}>Home</Link>
                <Link to={"/Destination"}>Destination</Link>
                <Link to={"/Crew"}>Crew</Link>
                <Link to={"/Technology"}>Technology</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar