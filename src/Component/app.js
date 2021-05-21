import React, { useEffect } from 'react';
import Heading from './heading.js'
import Banner from './banner.js'
import Para from "./paraclass.js"
import Input from "./input.js"

function App()
{   
    
    const [count,setCount]=React.useState(0);
    const [originalvalue,setValue]=React.useState("");
    const [remove,setRemove]=React.useState(true);
    function removebanner()
    {
        setRemove((prevRemove)=>
        {
            return prevRemove=false
        })
    }
    function increment()
    {
        setCount((prevCount)=>{
            return prevCount+1
        })
    } 
    function handleChange(event)
    {
        const {type,value}=event.target
        setValue((prevValue)=> {
            return prevValue=value
        
        })
    }
    useEffect(()=>
    {
       
        console.log(originalvalue)
    })
    return(
            <>
            {console.log("render")}
            <h1>{count}</h1>
            <input type="text" onChange={handleChange}/>
            <button onClick={increment}>increment</button>
            {remove?<Banner />:null}
            <button onClick={removebanner}>Remove Banner</button>
            </>
        )
}
export default App