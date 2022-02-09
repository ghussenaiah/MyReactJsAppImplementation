



import React, { Component } from "react";

class EventBind extends Component {


    constructor(props){
        super(props)
        this.state={
            message : 'Hello'
        }
       

    }
    clickHandler()
    {
        this.setState({
            message : 'Good Bye !'
        })
    }

    render() {
        return (
    
            <div>
                <h1>{this.state.message}</h1>
          
                <button onClick={this.clickHandler}>Event Bind</button>
    
            </div>
        )
    }

}

export default EventBind

