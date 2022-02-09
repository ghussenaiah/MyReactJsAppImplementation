import React from "react";

import './Stylesheet.css'

function Stylesheet(props) {

    let classNameFromMainComponent=props.primary ? 'primary' : ''

    return (

    <div>

        <h1 className={`${classNameFromMainComponent} .font-xl` }>Stylesheet</h1>

    </div>
       

    )

}

export default Stylesheet