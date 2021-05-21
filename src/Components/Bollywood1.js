import React, { useEffect, useState } from "react"
import data from "./data"
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
        
       // setParamid(props.match.params.id)
    },[props.match.params.id])
    return(
        <>
        {console.log(param)}
        {console.log(props.match.params.id)}
        <h1>{param.text}</h1>
        <h3>{param.id}</h3>
        </>
    )
}
export default Bollywood1