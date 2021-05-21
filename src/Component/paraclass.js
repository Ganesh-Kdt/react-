import React from "react"
class Para extends React.Component
{
    Add=()=> {
       let c=this.state.counter;
       this.setState({
          counter:c+1
       }) 
    }
    state={
        counter:0,
        id:"id",
        inputtext:""
    }  

    Change=(event)=>
    {
        this.setState({
        inputtext:event.target.value
        })
    }
    styles={
        parastyle:{
            background:"yellow",
            fontSize: "2rem",
        }
    } 
    render()
    {
        return(
            <>
            <button onClick={this.Add} id={this.state.id+this.state.counter}>Add me</button>
            <input type="text" onChange={this.Change}/>
            <p style={this.styles.parastyle} className="para">{this.state.counter}{this.state.inputtext}ParaClass Component</p>
            </>
        )
    }
}
export default Para