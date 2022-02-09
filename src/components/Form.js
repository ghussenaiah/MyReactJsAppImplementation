import React, { Component } from "react";

class Form extends Component {

    constructor(props){
        super(props)
        this.state={

            username :'',
            description :'',
            topic :'react'
        }
    }

    handleuserNameChange = (event)=>{
      
        this.setState({
            username : event.target.value
        })
                
    }
    handledescriptionChange = (event)=>{
      
        this.setState({
            description : event.target.value
        })
                
    }

    handletopicOnchange = (event)=>{
      
        this.setState({
            topic : event.target.value
        })
                
    }
    onSubmitFormData = (event)=>{
      
      alert(`${this.state.username} ${this.state.description} ${this.state.topic}`)
      event.preventDefault()
    }

    render() {

        const {username,description,topic} = this.state
            return (
                <form onSubmit={this.onSubmitFormData}>
                <div>
                    <lable>UserName</lable>
                    <input type="text" value={username} onChange={this.handleuserNameChange}></input>
                </div>

                <div>
                <lable>text area</lable>
                <textarea value={description} onChange={this.handledescriptionChange}></textarea>
                </div>

                <div>
                <lable>Select</lable>
                <select value={topic} onChange={this.handletopicOnchange}>

                <optional value="react">React</optional>
                <optional value="angular">Angular</optional>
                <optional value="net">Net</optional>
               

                </select>

                <button type="submit">Submit </button>
                </div>


                

                </form>
            )
    }

}

export default Form
