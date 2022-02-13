import React from 'react';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




export default function Dashboard(){

    const navigate = useNavigate();
    const logout = async e => {

        sessionStorage.removeItem('token');
      
        console.log("Hello after logout");

       // navigate('/');
       sessionStorage.clear();
       window.location.href = '/';
      
      
      } 

    return(
        <div className="login-wrapper">
    <h1>LogOut</h1>
    
    <button onClick={logout}>LogOut</button>
  {/*   <form onSubmit={handleSubmit}>
      
      <div>
        <button type="submit">LogOut</button>
      </div>
    </form> */}
    </div>
    );
}