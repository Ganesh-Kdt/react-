import React from "react"
import Home from "./home"
import Header from "./header"
import Bollywood from "./bollywood"
import Hollywood from "./hollywood"
import Bollywood1 from "./Bollywood1"
import Post from "./post"
import "./navbar.css"
import {Route,Switch} from "react-router-dom"
import { HashRouter as Router } from 'react-router-dom'
import Technology from "./technology"
import Fitness from "./fitness"
import Food from "./food"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)
function App()
{
    return(
        <>
        <div className="app-title">The Siren</div>
        <div className="app-container">
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/bollywood" component={Bollywood} exact/>
                <Route path="/technology" component={Technology} exact/>
                <Route path="/hollywood" component={Hollywood} exact/>
                <Route path="/fitness" component={Fitness} exact/>
                <Route path="/food" component={Food} exact/>
                <Route path="/bio/:id" component={Bollywood1} exact />
            </Switch>
        </Router>
        </div>
        </>
    )
}
export default App