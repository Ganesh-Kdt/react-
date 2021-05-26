import React from "react"
class App1 extends React.Component
{
    constructor()
    {
        super()
        this.state={
            count:0,
            color:"#0000FF",
        }
        
        this.handleClick=this.handleClick.bind(this)
    }
    
    handleClick()
    {
        this.setState((prevState)=>
        {
            return{
                count: prevState.count + 1,
            }
        })
    }
    componentDidMount()
    {
        console.log("yes")
    }
    componentDidUpdate(prevProps,prevState)
    {
        console.log(prevState.count+"component"+this.state.count)
        if(prevState.count!==this.state.count)
        {
           this.setState({color:"#FFA500"})
            
        }
    }
    render()
    {
        console.log("evry-time")
        return(
            <>
            <h1 style={{color:this.state.color}}>{this.state.count}</h1>
            <button onClick={this.handleClick}>Click Me</button>
            </>
        )
    }
}
export default App1