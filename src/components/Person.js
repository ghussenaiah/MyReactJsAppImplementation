import React from "react";

function Person(props) {
    const {id,name,skill} = props.person;
    return (<div><h1>Hai Im  {id} name {name} having skill {skill}</h1> </div>
    )
}
export default Person