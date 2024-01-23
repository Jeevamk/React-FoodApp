import React from "react";
import ReactDOM from "react-dom/client";



const heading = <h1>HEllo ract</h1>


const HeadingComponent = ()=> (
    <div id="container" style={{textAlign:"center"}}>
        <heading></heading>
        <h1>Food App</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent/>)