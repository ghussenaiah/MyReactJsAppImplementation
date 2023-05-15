import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'

import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/Eeventbind'

import ParentComponent from './components/ParentComponent'
import UserGreetMessage from './components/UserGreetMessage'
import NamesList from './components/NamesList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './components/appStyle.css'
import styles from './components/appStlyes.module.css'
import Form from './components/Form'
import PostList from './components/PostList';
import PostForm from './components/PostForm';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Preferences from './Preferences/Preferences';
import { useState } from 'react';
import Login from './Login/Login';
// import useToken from './useToken';
import Sidebar from "./SideBar/Sidebar";
import { AboutUs, OurAim, OurVision, OurVision1 } from "./Pages/AboutUs";
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./Pages/Services";
import { Events, EventsOne, EventsTwo } from "./Pages/Events";
import Contact from "./Pages/Contact";
import Support from "./Pages/Support";
import EditEmployee from "./Pages/EditEmployee";

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

import React, { Component } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


/* import Navbar from "./SideBar/Navbar";
import Content from "./SideBar/Content"; */


/* function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {

  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
} */

function App() {

  const [token, setToken] = useState();
  // const token = getToken();
  // const { token, setToken } = useToken();
  // console.log("after refresh",token);

   if (!token) {
    return <Login setToken={setToken} />
   }

  // return <Login />

  return (

    <ThemeProvider theme={darkTheme}>
      {/*     className="App" */}

      <div className="mainbody">

        {/* <h2>Application</h2> */}
        {



          <BrowserRouter>
            {<Sidebar />}
            {/*   <Navbar />
      <Content /> */}
            <Routes>
              <Route path="/about-us" exact element={<AboutUs />} />
              <Route path="/about-us/aim" exact element={<OurAim />} />
              <Route path="/about-us/vision" exact element={<OurVision />} />
              <Route path="/services" exact element={<Services />} />
              <Route path="/services/services1" exact element={<ServicesOne />} />
              <Route path="/services/services2" exact element={<ServicesTwo />} />
              <Route path="/services/services3" exact element={<ServicesThree />} />
              <Route path="/contact" exact element={<Contact />} />
              <Route path="/events" exact element={<Events />} />
              <Route path="/events/events1" exact element={<EventsOne />} />
              <Route path="/events/events2" exact element={<EventsTwo />} />
              <Route path="/EditEmployee/editID/:id" exact element={<EditEmployee />} />
              {/* <Route path="/support" exact element={<Support/>} /> */}
            </Routes>
          </BrowserRouter>


   // Login Page Implementation
   /*    <BrowserRouter>
        <Routes>

        <Route path="/" element={<Dashboard/>}>
         
         </Route>

          <Route path="/dashboard" element={<Dashboard/>}>
         
          </Route>
          <Route path="/preferences" element={<Preferences/>}>
           
          </Route>
        </Routes>
      </BrowserRouter> */}

        {/*   <Navbar /> */}
        { /* <Router>
<Navbar />
      </Router>  */}

        {/*   <PostList /> */}
        {/*     <PostForm /> */}

      </div>
      <>

      </>
    </ThemeProvider>
  );
}

export default App;


{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */



    /*


<table>
  <thead>
    <tr>
      <th><Message/></th>
      <th> <Counter/></th>
      <th> <UserGreetMessage/></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><Greet name="London" heroName="SuperMan"/></td>
      <td><Greet name="America" heroName="SpiderMan"/></td>
      <td><NamesList /></td>
      <td><h2 className={styles.success}>styles100</h2></td>
      <td><Form /></td>
      <td></td>
    </tr>
    <tr>
      <td><Greet name="Australia" heroName="WounderWomen"/></td>
      <td><Welcome name="London" heroName="SuperMan"/></td>
      <td><Stylesheet primary={true}/></td>
      <td><h2 className='error'>Eroor</h2></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td><Welcome name="America" heroName="SpiderMan"/></td>
      <td><Welcome name="Australia" heroName="WounderWomen"/></td>
      <td><Inline /></td>
      <td><FunctionClick/></td>
      <td> <ClassClick/></td>
      <td> <EventBind/></td>
      <td><ParentComponent/></td>
    </tr>
  </tfoot>
</table>




    
    
    } 
  */}
