import React, { useEffect, useState } from "react"
import {NavLink} from "react-router-dom"
import logo from "../Images/godzilla.jpg"
import "./navbar.css"
import "./article.css"
function Post()
{
    
    return(
        <>
        <div className="sidepost">
                    <div className="titleOfPost">Top Posts</div>
                <div className="container">
                    <NavLink className="navlink1" to="/bio/1">
                    <div className="sub-div">
                        <div className="pimagediv"><img className="pimage" src={logo} alt="yes"/></div>
                        <div id="post1details">
                            <div className="post1">catch waves with an adventure guide</div>
                            <div className="number1">1</div>
                        </div>
                    </div>
                    </NavLink>
                    <hr ></hr>
                    <NavLink className="navlink2" to="/bio/2">
                    <div className="post2">
                        <div className="post2imagediv"><img className="post2image" src={logo}/></div>
                        <div className="post2details">catch waves with an adventure guide</div>
                        <div className="post2number">2</div>
                    </div>
                    </NavLink>
                    <hr ></hr>
                    <NavLink className="navlink2" to="/bio/3">
                    <div className="post2">
                    <div className="post2imagediv"><img className="post2image" src={logo}/></div>
                        <div className="post2details">catch waves with an adventure guide</div>
                        <div className="post2number">3</div>
                    </div>
                    </NavLink>
                </div>
                </div>
        </>
    )
}
export default Post