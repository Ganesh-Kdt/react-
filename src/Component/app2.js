import React, { useEffect } from "react"
import {useState} from "react"
function App2()
{
    const [count,setCount]=useState(0)
    useEffect(()=>
    {
        setCount((prevCount)=> {return prevCount+1})
    },[])
    return(
        <>
        {console.log("render"+count)}
        {count===1?<h3>{count}</h3>:null}
        </>
    )
}
export default App2 