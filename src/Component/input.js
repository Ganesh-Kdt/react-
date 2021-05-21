import React from "react"
class Input extends React.Component{
    render()
    {
        return(
            <input type="checkbox" onClick={()=> this.props.func()}/>
        )
    }    
}
export default Input