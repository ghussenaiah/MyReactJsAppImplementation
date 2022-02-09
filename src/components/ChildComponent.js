import React from "react";


function ChildComponent(props) {
 
    return (
        <div>
            <button onClick={()=>props.greetHandler('param value')}>Data from child class </button>
        </div>
    )
}

export default ChildComponent