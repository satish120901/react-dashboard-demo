import React, { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ProfileInfo() {
 

  const userJson = localStorage.getItem("user");
  const {uid,name,username,usertype,image} = JSON.parse(userJson);
  const navigate = useNavigate();

function Logout(){

  alert("Do you want to logged out?");
  localStorage.clear();
  navigate('/login');


}


  return (
    <div>
      
      <h1 style={{textAlign:"center"}}>Customer Data</h1>
      <table className='table table-hover'  style={{margin:'auto', textAlign:'center',marginTop:'50px'}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fullname</th>
            <th>User Name</th>
            <th>User Type</th>
            <th>Image</th>

           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{uid}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>{usertype}</td>
            <td><img src={'data:image/jpeg;base64,'+image }height={50} width={50}/></td>

            
          </tr>
        </tbody>
      </table>
      <button onClick={()=>Logout()}>Log Out</button>
    </div>
  );
}

export default ProfileInfo;