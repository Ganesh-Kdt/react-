import React from "react"
class Input extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            count:10,
        }
    }
    
    render()
    {
        console.log(this.props);
        return(
            <input type="checkbox" onClick={()=> this.props.handleChange(this.state.count)}/>
        )
    }    
}
export default Input