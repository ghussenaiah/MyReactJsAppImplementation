import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

import { useNavigate } from 'react-router-dom';

 
const EditEmployee = () => {
   
  // let history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
  const navigate = useNavigate();

  const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 
  
 
  const [user ,setUser] = useState({
    name: "",
    address: "",
    order: ""
  })
 
 
  const { name, address, order } = user;
 
  const onInputChange = e => {
    setUser({ ...user,[e.target.name]: e.target.value });
  };
 
  useEffect(() => {
    loadUser();
  }, []);
 
   
  const updateEmployee = async e => {
    e.preventDefault();
    alert(`http://localhost:5000/update/${id}`);
    await axios.put(`http://localhost:5000/update/${id}`, user);
   // history.push("/");

//navigate('/home');

   alert("employee edited");
  };
 
  const loadUser =  () => {



    axios.delete(`http://localhost:5000/edit`,{params: { id: `${id}`}})
    .then((result)=>{

        console.log(result.data.id)
                
        setUser({
        
        
            name: result.data.name,
            address: result.data.addresss,
            order: result.data.order


        });
     
    })
    .catch(()=>{
      alert('Error in the Code');
    });
    
    
 /*    fetch(`http://localhost:5000/edit/${id}`,{
            method: "GET",
          })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
 */

      
            // });
            /* .catch((error) => console.log("error", error)); */
  };

  
 
  return (
    <div className="container">
     <div className="row mt-4"> 
      <div className="col-sm-5 col-offset-3 mx-auto shadow p-5">
        <h4 className="text-center mb-4">Edit A employee</h4>
       
          <h5 className="text-success">Employee ID : {user.id} </h5>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Price"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Description"
              name="order"
              value={order}
              onChange={e => onInputChange(e)}
            />
          </div>
         

          <button onClick={updateEmployee} className="btn btn-secondary btn-block">Update Employee</button>
       
       </div>
      </div> 
    </div>
  );
};
 
export default EditEmployee;