const redux=require("redux")
const createStore=redux.createStore
const iniState={
    count:1,
    name:"ganesh"
}
reducer=(state=iniState,action)=>{
    
    if(action.type==="count")
    {
    return {
        ...state,
        count:action.payload
    }
    }
    return state
}
const store=createStore(reducer)

console.log(store.getState())
store.subscribe(()=>
{
    console.log(store.getState())
})
store.dispatch({
    type:"count",
    payload:2
})
store.dispatch({
    type:"",
})