import React, { useState } from "react"
import Input from "./input"
function Parent() 
{
    const [count,setCount]=useState({name:"ganesh",surname:"kudtarkar"})
    function click()
    {
        setCount((prevCount)=>
        {
            return {
                ...count,
                name:"dinesh"
            }
        })
    }
    console.log(count)
    return(
        <>
        <button onClick={click}></button>
        <h1>{count.name}</h1>
        </>
    )
}
export default Parent