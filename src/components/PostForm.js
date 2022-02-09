import React, { Component } from "react";


import axios from 'axios'

class PostForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userId : '',
            title:'',
            body : ''
        }
     }
     handlechange = (event)=> {
          this.setState({ [event.target.name] : event.target.value })
     }


    onSubmitFormData = (event)=>{
      
         event.preventDefault()

         axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
         .then(response => {
            console.log(response)})
         .catch(error => {
            console.log(error)})
         }

 render() {
   
        const {userId,title,body} = this.state

    
        return (

            <div>
               <form onSubmit={this.onSubmitFormData}>
                
                <div>
                    <lable>userId</lable>
                    <input type="text" name="userId" value={userId} onChange={this.handlechange}></input>
                </div>
                <div>
                    <lable>title</lable>
                    <input type="text" name="title" value={title} onChange={this.handlechange}></input>
                </div>
                <div>
                    <lable>body</lable>
                    <input type="text" name="body" value={body} onChange={this.handlechange}></input>
                </div>
                <button type="submit">Submit </button>
             </form>
            </div>

        )
    

 }
}

export default PostForm