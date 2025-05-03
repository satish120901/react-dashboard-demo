import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function Update() {

      const{register,handleSubmit,reset,setValue,formState:{errors}} =useForm();
    

    const userJson = localStorage.getItem("user");
    const {uid,name,username,password,usertype,image} = JSON.parse(userJson);




    setValue('uid', uid);
    setValue('name', name);
    setValue('username', username);
    setValue('password', password);
    setValue('usertype', usertype);

    function saveData(data){
        const userDetails={
          
          uid:data.uid,
          name:data.name,
          username:data.username,
          password:data.password,
          usertype:data.usertype,
    }
    
    const formData=new FormData();
    
    formData.append("userjson", JSON.stringify(userDetails));
    formData.append("image",data.image[0])
    
    
    console.log(data)
          axios.post("http://localhost:9095/savedata", formData)
            .then(() => {
             console.log(data);
              reset();
            });
        }

  return (
    <>
    <h2>Update Data</h2>
    <form onSubmit={handleSubmit(saveData)}>
    
   <label className='fs-4 form-label'>Enter Id:-</label>
   <input type='number' className='form-control' {...register("uid")}/>
   
   
   <label className='fs-4 form-label'>Enter Name:-</label>
   <input type='text' className='form-control' {...register("name")}/>
   
   
   <label className='fs-4 form-label'>Enter UserName:-</label>
   <input type='text' className='form-control' {...register("username")}/>
   
   
   <label className='fs-4 form-label'>Enter Password:-</label>
   <input type='text' className='form-control' {...register("password")}/>
   
   
   <label className='fs-4 form-label'>Enter UserType:-</label>
   <input type='text' className='form-control' {...register("usertype")}/>

   <label className='fs-4 form-label'>Upload Image:-</label>
   <input type='file' className='form-control' {...register("image")}/>  

   <label className='fs-4 form-label'>Existing Image:-</label>
   <img src={'data:image/jpeg;base64,'+image }height={50} width={50}/>
       <br></br>

   <button className='w-25 btn btn-success fs-4 mt-2'>Submit</button>

    </form>
    </>
  )
}

export default Update