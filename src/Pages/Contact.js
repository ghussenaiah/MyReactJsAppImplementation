import { DataGrid } from "@material-ui/data-grid";
import React from "react";
import { useState, useEffect } from "react";


const columns=[

	
	{field:'id',headerName:'Id'},
	{field:'jobTitle',headerName:'JobTitle',width:200},
	{field:'name',headerName:'Name',width:200},
	{field:'addresss',headerName:'Address',width:200},
	{field:'order',headerName:'Order',width:200}
]



const Contact = () => {

	const [table,setTable]=useState([]);



const loadEmployeeDetail = async () =>  
{
  var response = fetch('http://localhost:5000/fetchall')
	 .then(function(response){
		return response.json();
	  })
	 .then(function(myJson) {
		 console.log("all emplyee data",myJson)
		 setTable(myJson);
	  });
}
useEffect(() => {
  loadEmployeeDetail();
}, []);

return (
	<div  style ={{height:700,width:'100%'}} className="contact">
	<DataGrid rows={table}
	columns={columns}
	pageSize={10}
	checkboxSelection
	

	/>
	</div>
);
};

export default Contact;
