import React, { useEffect, useState } from "react"
import {NavLink} from "react-router-dom"
import logo from "../Images/godzilla.jpg"
import "./navbar.css"
import "./article.css"
import img1 from "../Images/fitness-f1.jpg"
import img2 from "../Images/technology-robot.jpg"
import img3 from "../Images/hollywood-kingkong.jpeg"
function Post()
{
    
    return(
        <>
        <div className="sidepost">
                    <div className="titleOfPost">Top Posts</div>
                <div className="container">
                    <NavLink className="navlink1" to="/bio/13">
                    <div className="sub-div">
                        <div className="pimagediv"><img className="pimage" src={img1} alt="yes"/></div>
                        <div id="post1details">
                            <div className="post1">The Mental Health Benefits of Exercise</div>
                            <div className="number1">1</div>
                        </div>
                    </div>
                    </NavLink>
                    <hr ></hr>
                    <NavLink className="navlink2" to="/bio/10">
                    <div className="post2">
                        <div className="post2imagediv"><img className="post2image" src={img2}/></div>
                        <div className="post2details">Robotic extra thumb</div>
                        <div className="post2number">2</div>
                    </div>
                    </NavLink>
                    <hr ></hr>
                    <NavLink className="navlink2" to="/bio/4">
                    <div className="post2">
                    <div className="post2imagediv"><img className="post2image" src={img3}/></div>
                        <div className="post2details">‘Godzilla vs. Kong’: Monster movies</div>
                        <div className="post2number">3</div>
                    </div>
                    </NavLink>
                </div>
                </div>
        </>
    )
}
export default Post