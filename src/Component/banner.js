import { useEffect } from "react"

function Banner()
{
    let styles={
        parastyle:{
            background:"yellow",
            fontSize: "2rem",
        }
    }
    useEffect(()=>
    {
        return ()=>console.log("banner")
    },[])
    return(
        <>
        <p style={styles.parastyle}>
        Banner
        </p>
        </>
    )
}
export default Banner