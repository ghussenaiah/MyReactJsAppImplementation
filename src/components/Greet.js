import React from "react";

function Greet(props) {

    const {name,heroName} = props;

    

    return (

    <div>

            <h1>Hello World Functional Component {props.name} Hero Name {props.heroName} </h1>

            <h1>Hello World Functional Component using const {name} Hero Name {heroName} </h1>

    </div>
       

    )

}

export default Greet