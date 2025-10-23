import React from "react"
import App from '../App.jsx'

function Gradient({ text, customStyle = {} }){
    return <>
        
        <p style={{color:"transparent",backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", backgroundClip: "text",paddingBottom: ".2rem", ...customStyle,}}>
    {text}
    </p>
    </>
}

export default Gradient