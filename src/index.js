import React from 'react';
import ReactDom from 'react-dom';
import Parent from './Component/childtoparent';
import App from './Component/redux-app';
import {Provider} from "react-redux";
import {createStore} from "redux"
import reducer from "./Component/redux"
import App from "./Components/app"
const store=createStore(reducer)
ReactDom.render(<Provider store={store}><App /></Provider>,document.getElementById("root"));