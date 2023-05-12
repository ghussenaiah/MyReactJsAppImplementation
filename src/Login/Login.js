import React from 'react';
import './Login.css';
import { useState } from 'react';



import Button from '@mui/material/Button';




async function loginUser(credentials) {
  return fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


  //  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
    // navigate('/home')

    console.log("Hello am new token", token)
  }
  /* className="login-wrappe" */

  function Form() {
    return (
      <div>

        <form onSubmit={handleSubmit}>
          <h1>Please Log In Here agaain</h1>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>


            <Button className="submitButton" type="submit" variant="contained" color="success">
              Success
            </Button>
          </div>
        </form>



      </div>
    );
  }

  /*   return(
      <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    ) */

  return (

    /*  <Styles>
        <Form />
      </Styles>  */

    <div className="LoginForm">

      <form onSubmit={handleSubmit}>
        <h3 className="LoginLabel">Sign In</h3>

        <div className="mb-3">
          <label className="LoginLabel">Email address</label>
          <input
            type="email"
            className="inputControl"
            placeholder="Enter email" onChange={e => setUserName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="LoginLabel">Password</label>
          <input
            type="password"
            className="inputControl"
            placeholder="Enter password" onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label LoginLabel" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
    /* <div className="login-wrapper">
       <h1>Please Log In Here </h1>
       <form onSubmit={handleSubmit}>
         <label>
           <p>Username</p>
           <input type="text" onChange={e => setUserName(e.target.value)} />
         </label>
         <label>
           <p>Password</p>
           <input type="password" onChange={e => setPassword(e.target.value)} />
         </label>
         <div>
           <button type="submit">Submit</button>
         </div>
       </form>
     </div> */


  );
}