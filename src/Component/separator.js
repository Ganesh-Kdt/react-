import React from "react"
class Separator extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            obj:[
            "ganesh",
            "kdt",
            0
            ]
        }
        this.click=this.click.bind(this);
    }
    click()
    {
        this.setState((prevState)=>
        {
            return {
                obj:[
                    ...this.state.obj,
                    1,
                ]
            }
        })
    }
    render()
    {
        console.log(this.state.obj);
        return(
            <>
            <button onClick={this.click}></button>
            <h1>{this.state.obj.name} {this.state.obj.sur}</h1>
            </>
        )
    }
} 
export default Separator