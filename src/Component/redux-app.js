import React from "react"
import {connect} from "react-redux"
function App(props)
{
    
        console.log(props)
        console.log("render")
        return(
            <>
            <h1>{props.counter}</h1>
            <button onClick={props.increment}></button>
            </>
        )
    
}
const mapStateToProps=(state)=>
{
    console.log("mapStateToProps")
    return{
        counter:state.count,
        name:state.name,
    }
}
const mapDispatchToProps=(dispatch)=>
{
    console.log("mapDispatchToProps")
    return{
        increment:()=> dispatch({type:"increment"})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)