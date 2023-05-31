import React from "react";
import "../style.css";

function Myabout()
{
    return <h1>this is my new component</h1>
}


export function Myabout20()
{
    return <h2 className="first">this is heading two</h2>
}


export function Mycontact()
{
    return(
        <>
            <h3>this is second name export fucntion</h3>
            <ul>
                {/* <li>Home</li>
                <li>Home</li>
                <li>Home</li> */}
            </ul>
        </>
    )
}





export default Myabout;