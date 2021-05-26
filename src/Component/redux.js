const iniState={
    count:1,
    name:"ganesh"
}
const reducer=(state=iniState,action)=>
{
    if(action.type==="increment")
    {
        return {
            ...state,
            count:state.count+1,
        } 
    }
    return state
}
export default reducer