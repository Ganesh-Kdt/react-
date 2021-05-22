import React from "react"
import {NavLink} from "react-router-dom"
import "./navbar.css"
import logo1 from "../Images/technology.jpg"
import logo2 from "../Images/fitness.jpg"
function NavBar()
{
    return(
        <>
        <div className="header-container">
            <div><NavLink className="header-items" to="/">Home</NavLink></div>
            <div><NavLink className="header-items" to="/bollywood">Bollywood</NavLink></div>
            <div><NavLink className="header-items" to="/technology">Technology</NavLink></div>
            <div><NavLink className="header-items" to="/hollywood">Hollywood</NavLink></div>
            <div><NavLink className="header-items" to="/fitness">Fitness</NavLink></div>
            <div><NavLink className="header-items" to="/food">Food</NavLink></div>
        </div>
        <hr className="navbarhr"></hr>
        </>
    )
}
export default NavBar