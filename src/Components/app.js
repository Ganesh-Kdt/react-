import React from "react"
import Home from "./home"
import Header from "./header"
import Bollywood from "./bollywood"
import Hollywood from "./hollywood"
import Bollywood1 from "./Bollywood1"
import Post from "./post"
import "./navbar.css"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Technology from "./technology"
import Fitness from "./fitness"
import Food from "./food"
function App()
{
    return(
        <div className="app-container">
        <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/bollywood" component={Bollywood} exact/>
        <Route path="/technology" component={Technology} exact/>
        <Route path="/hollywood" component={Hollywood} exact/>
        <Route path="/fitness" component={Fitness} exact/>
        <Route path="/food" component={Food} exact/>
        <Route path="/bio/:id" component={Bollywood1} exact />
        </BrowserRouter>
        </div>
    )
}
export default App