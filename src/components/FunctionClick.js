import React from "react";

function FunctionClick(props) {
 
    

    function functionclick()
    {
           console.log('button clicked')
    }

    return (
    
        <div>
      
        <button onClick={functionclick}>FunctionClick</button>

    </div>
    )

}

export default FunctionClick