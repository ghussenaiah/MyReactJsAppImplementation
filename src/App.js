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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
    {/*   <Navbar /> */}
{ /* <Router>
<Navbar />
      </Router>  */}
   
   {/*   <PostList /> */}
 {/*     <PostForm /> */}
     
    </div>
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
