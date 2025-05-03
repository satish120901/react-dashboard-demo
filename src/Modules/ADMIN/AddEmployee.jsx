import axios from "axios";
import {useForm} from "react-hook-form";

function AddEmployee() 
{
  const{register,handleSubmit,reset,setValue,formState:{errors}} =useForm();

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
         // getData();
         console.log(data);
          reset();
        });
    }


  return (
    <>
        <h2>Add Employee</h2>
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

       <button className='w-25 btn btn-success fs-4 mt-2'>Submit</button>

        </form>
        </>
  )
}

export default AddEmployee;