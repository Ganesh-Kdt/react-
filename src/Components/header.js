import React from "react"
import {NavLink} from "react-router-dom"
import "./navbar.css"
import logo1 from "../Images/technology.jpg"
import logo2 from "../Images/fitness.jpg"
import NavBar from "./navbar"

function Header()
{
    return(
        <>
        <NavBar />
        <hr></hr>
        <NavLink to="/bio/1"><div className="image-container1"></div></NavLink>
        <div className="image-container2">
            <NavLink to="/bio/2"><img className="image2" src={logo1} alt="yes"></img></NavLink>
            <NavLink to="/bio/3"><img className="image3" src={logo2} alt="yes"></img></NavLink>
        </div>
        </>
    )
}
export default Header