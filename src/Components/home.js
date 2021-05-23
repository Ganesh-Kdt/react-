import React from "react"
import {NavLink} from "react-router-dom"
import "./navbar.css"
import img1 from "../Images/fitness-f1.jpg"
import img2 from "../Images/technology-robot.jpg"
import img3 from "../Images/hollywood-kingkong.jpeg"
import NavBar from "../Components/navbar"
function Home()
{
    return(
        <>
        <NavBar />
        <NavLink to="/bio/10"><div className="image-container1"></div></NavLink>
        <div className="image-container2">
            <NavLink to="/bio/13"><img className="image2" src={img1} alt="yes"></img></NavLink>
            <NavLink to="/bio/4"><img className="image3" src={img3} alt="yes"></img></NavLink>
        </div>
        </>
    )
}
export default Home