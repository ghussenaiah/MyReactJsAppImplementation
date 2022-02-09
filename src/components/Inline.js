import React from "react";

import './Stylesheet.css'

function Inline(props) {

    const heading={
        fontSize : '72px',
        color : 'blue'
     }

    return (

    <div><h1 style={heading}>Stylesheet</h1>
    </div>
    
     )

}

export default Inline