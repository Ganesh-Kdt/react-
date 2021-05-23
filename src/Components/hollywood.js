import React, { useState } from "react"
import logo from "../Images/food.jpg"
import "./bollywood.css"
import Post from "./post"
import {NavLink} from "react-router-dom"
import NavBar from "./navbar"
import data from "./data"

function Hollywood()
{
    const food=data.filter((item)=>
    {
        if(item.id>=4 && item.id<=6)
        return item
    })
    return(
        <div className="sub-app-container">
            <NavBar />
            <div className="main-container">
                <div className="blogpost">
                    <div className="titleOfPost">Hollywood</div>
                <div className="container">
                {food.map((item)=>
                    <NavLink className="nav-container" key={item.id} to={`/bio/${item.id}`}>
                    <div className="wrap">
                    <div className="bimage1-container"><img className="bimage1" src={item.image} alt="yes"/></div>
                    <div className="para">
                        <div className="para1">{item.title}</div>
                        <div className="para2">{item.description}</div>
                        <div className="para3">{item.date}</div>
                    </div>
                    </div>
                    <hr className="hrblogpost"></hr>
                    </NavLink>
                )
                }
                </div>
                </div>
                <Post />
            </div>
        </div>
    )
}
export default Hollywood