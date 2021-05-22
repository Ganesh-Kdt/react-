import React, { useState } from "react"
import logo from "../Images/food.jpg"
import "./bollywood.css"
import Post from "./post"
import {NavLink} from "react-router-dom"
import NavBar from "./navbar"
import data from "./bollywooddetails"
function Technology()
{
    const [items]=useState(data);
    return(
        <div className="sub-app-container">
            <NavBar />
            <div className="main-container">
                <div className="blogpost">
                    <div className="titleOfPost">Technology</div>
                <div className="container">
                    {items.map((item)=>
                    <NavLink className="nav-container" key={item.id} to={`/bio/${item.id}`}>
                    <div className="wrap">
                    <div className="bimage1-container"><img className="bimage1" src={item.url} alt="yes"/></div>
                    <div className="para">
                        <div className="para1">{item.head}</div>
                        <div className="para2">{item.content}</div>
                        <div className="para3">{item.foot}</div>
                    </div>
                </div>
                <hr className="hrblogpost"></hr>
                </NavLink>
                )
                }
                </div>
                </div>
                <Post/>
            </div>
        </div>
    )
}
export default Technology