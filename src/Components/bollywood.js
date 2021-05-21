import React, { useState } from "react"
import logo from "../Images/food.jpg"
import "./bollywood.css"
import Post from "./post"
import {NavLink} from "react-router-dom"
import NavBar from "./navbar"
import data from "./bollywooddetails"

function Bollywood()
{
    const [items]=useState(data);
    return(
        <div>
            <NavBar />
            <div className="main-container">
                <div className="blogpost">
                    <div className="titleOfPost">Bollywood</div>
                <div>
                    {items.map((item)=>
                    <NavLink key={item.id} to={`/bio/${item.id}`}>
                    <div className="wrap">
                    <div><img className="bimage1" src={item.url} alt="yes"/></div>
                    <div className="para">
                        <div className="para1">{item.head}</div>
                        <div className="para2">{item.content}</div>
                        <div className="para3">{item.foot}</div>
                    </div>
                </div>
                <div style={{color:"grey"}}>______________________________________________________________________</div>
                </NavLink>
                )
                }
                </div>
                </div>
                <div className="sidepost">
                    <div className="titleOfPost">Top Posts</div>
                <div>
                    <NavLink to="/bio/1">
                    <div>
                        <div><img className="pimage" src={logo} alt="yes"/></div>
                        <div id="post1details">
                            <div className="post1">catch waves with an adventure guide</div>
                            <div className="number1">1</div>
                        </div>
                    </div>
                    </NavLink>
                    <hr></hr>
                    <NavLink to="/bio/2">
                    <div className="post2">
                        <div className="post2imagediv"><img className="post2image" src={logo}/></div>
                        <div className="post2details">catch waves with an adventure guide</div>
                        <div className="post2number">2</div>
                    </div>
                    </NavLink>
                    <hr></hr>
                    <NavLink to="/bio/3">
                    <div className="post2">
                    <div className="post2imagediv"><img className="post2image" src={logo}/></div>
                        <div className="post2details">catch waves with an adventure guide</div>
                        <div className="post2number">3</div>
                    </div>
                    </NavLink>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Bollywood
/*
<NavLink to="/bio/1"><p>b1</p></NavLink>
            <NavLink to="/bio/2"><p>b2</p></NavLink>
            <NavLink to="/bio/3"><p>b3</p></NavLink>
*/