import React, { useEffect, useState } from "react"
import {NavLink} from "react-router-dom"
import logo from "../Images/bike.jpg"
import "./navbar.css"
function Post()
{
    
    return(
        <div className="imageclass">
        <NavLink to="/bio/1"><h1>Post1</h1></NavLink>
        <NavLink to="/bio/4"><h1>Post2</h1></NavLink>
        <NavLink to="/bio/5"><h1>Post3</h1></NavLink>
        </div>
    )
}
export default Post