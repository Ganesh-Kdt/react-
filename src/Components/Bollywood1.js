import React, { useEffect, useState } from "react"
import data from "./data"
import "./article.css"
import logo from "../Images/food.jpg"
import "../../node_modules/font-awesome/css/font-awesome.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faHandSparkles, faHandsWash, faShare, faShareAlt, faShareSquare } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import face from "../Images/face.jpg"
function Bollywood1(props)
{
    const [param,setParam]=useState({})
   useEffect(()=>
    {
        const newitem=data.find((item)=>
        {
            if(props.match.params.id==item.id)
            return item
        })
       setParam(newitem)
    },[props.match.params.id])
    return(
        <>
        <div className="main-container1">
        <div className="title">
        <p>{param.title}</p>
        </div>
        <div className="hrdivtitle"><hr></hr></div>
        <div className="authorandtag">
            <div className="author-face"><img className="author-image" src={face} alt="yes"/></div>
            <div className="author">
                <div className="authorname">{param.author}</div>
                <div>{param.date}</div>
            </div>
            <div className="tags">
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faYoutube}/>
            </div>
        </div>
        <div className="image-container"><img className="image" src={param.image} alt="yes"/></div>
        <div className="text">{param.para}</div>
        </div>
        <div className="side-container">
            <div className="icon1">
                <div>
                    <FontAwesomeIcon icon={faHandsWash}/>
                </div>
                <div className="share">9.3K</div>
            </div>
            <br></br>
            <div className="icon1">
                <div><FontAwesomeIcon icon={faShareAlt}/></div>
                <div className="share" id="share-id">Share this article</div>
            </div>
        </div>
        </>
    )
}
export default Bollywood1