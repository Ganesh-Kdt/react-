import "./../styles/heading.css"
function Heading(props)
{
    console.log(props);
    return(
        <>
        <h1 className="main-heading">{props.head}</h1>
        
        </>
    )
}
export default Heading