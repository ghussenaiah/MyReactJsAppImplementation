



import React, { Component } from "react";


import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            message : 'message'
        }

        this.greetFunction=this.greetFunction.bind(this)
       

    }
    greetFunction(childName)
    {
       alert(`Hello from parent ${this.state.message} from child ${childName} `)
    }

    render() {
        return (
    
            <div>
                  <ChildComponent greetHandler={this.greetFunction}/>
    
            </div>
        )
    }
}
export default ParentComponent

