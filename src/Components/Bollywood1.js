import React, { useEffect, useState } from "react"
import data from "./data"
import "./article.css"
import logo from "../Images/food.jpg"
import "../../node_modules/font-awesome/css/font-awesome.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faHandSparkles, faHandsWash, faShare, faShareAlt, faShareSquare } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
function Bollywood1(props)
{
    const [param,setParam]=useState({})
  //  const [paramid,setParamid]=useState(0)
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
        <p>5 ways to create a react component</p>
        </div>
        <div className="authorandtag">
            <div className="author">
                <div className="authorname">ganesh</div>
                <div>August 12th 2018</div>
            </div>
            <div className="tags">
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faYoutube}/>
            </div>
        </div>
        <div className="image-container"><img className="image" src={logo} alt="yes"/></div>
        <div className="text">Oozing out cheese and delightful vegetable toppings seasoned with spicy chili flakes and oregano can leave anyone yearning for a hearty pizza treat! There’s no denying to the fact that a pizza can instantly lift up your mood and it is hard to resist a delicious pizza. With too much health consciousness most of us compromise our palate preferences and ditch the idea of relishing a cheese loaded pizza. Well, if you too feel the same, then we have got you covered, here are a few simple homemade pizza recipes which you can nail easily by adding fresh and healthy ingredients and enjoy anytime.</div>
        </div>
        <div className="side-container">
            <div className="icon1">
                <div><FontAwesomeIcon icon={faHandsWash}/></div>
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