



import React, { Component } from "react";

class UserGreetMessage extends Component {


    constructor(props){
        super(props)
        this.state={
            isloggedIn : false
        }
       

    }
 

    render() {

         /* first approach */
           /* 
           
           if(this.state.isloggedIn){
                   return  <div>Welcome admin</div>
            }else
            {
                return  <div>Welcome User</div>
            } */

            /**second approach */
         /*    let message
            if(this.state.isloggedIn){
                message =  <div>Welcome admin</div>
             }else
            {
                message = <div>Welcome user</div>
            }  

            return <div>{message}</div> */

             /**third approach */

           return this.state.isloggedIn ? <div>Welcome admin</div> : <div>Welcome user</div>
           
        
    }

}

export default UserGreetMessage

