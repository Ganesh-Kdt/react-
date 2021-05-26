import React, { useEffect } from "react"
import {useState} from "react"
function App2()
{
    
    const [state,setState]=useState({count:0,name:"ganesh"})
    
    function click()
    {
        setState((prevState)=>
        {
            return{
                ...prevState,
                name:"dinesh"
            }
        })
    }
    if(state.count<2)
    {
        console.log("before-render")
    }
    return(
        <>
        {console.log(state)}
        <h1>{state.count}</h1>
        <button onClick={click}></button>
        </>
    )
}
export default App2 