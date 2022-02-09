import React from "react";
import Person from "./Person";


function NamesList(props) {


    const persons = [
       {
           id:20,
           name:'Jake',
           skill : 'C++'
       },
       {
        id:30,
        name:'Price',
        skill : 'C'
    },
    {
        id:40,
        name:'David',
        skill : 'Java'
    }

    ]

    const names= ['Jake','Price','David','Alah']

   const namesList= names.map(name => <h1>{name}</h1>)

   const personList= persons.map((person,index) => <Person key={index} person ={person} />)
 
    return (
        <div>{personList}</div>
    )
}

export default NamesList