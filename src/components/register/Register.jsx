import RadioGroup from '../ui/radioGroup'; // Adjust the path as per your project structure

import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import '../register/Register.css';
import Testimonials from '../testimonials/Testimonials';
import { Button } from '../ui/button';
import Input from '../ui/input';
import Label from '../ui/label';


const Register = () => {
  const [input , setInput] = useState({
    fullName:"",
    email:"",
    phoneNumber:"",
    password:"",
    role:"",
  });

  const navigate = useNavigate();
  
  //For fullname to password
  const changeEventHandler = (e) =>{
    setInput({...input , [e.target.name] : e.target.value });
  }
  
   //Function for API Call
   const submitHandler = async(e) =>{
     e.preventDefault();
      // Validate input fields
      if (!input.fullName || !input.email || !input.phoneNumber || !input.password || !input.role) {
      toast.error("Please fill all fields!");
      return;
  }
    const userData = {
      fullName: input.fullName,
      email: input.email,
      phoneNumber: input.phoneNumber,
      password: input.password,
      role: input.role  // Fix applied here
    };
  
   
     try{
     const res = await axios.post(`http://localhost:4001/api/auth/signup`, userData, {
       headers:{
         'Content-Type':"application/json",
         'Accept':'application/json',  // Add Accept header
       },
       withCredentials:true,
     });
     console.log("Response Data:", res.data); // Check the response data 

     if(res.data.success){
       //navigate to the login page
       console.log("Navigating to OTP page...");
       navigate("/Verify", { state: { activationToken: res.data.activationToken}});
       toast.success(res.data.message);
     }
    }
    catch (err) {
      console.error("Signup Error:", err); // Log error for debugging
      if (err.response && err.response.data) {
        console.log("Server error message:", err.response.data.message);  // Check exact error from backend
        toast.error(err.response.data.message || "Signup failed. Please check your input.");
      }
    }
   }

  return (
    <div>
      <Navbar/>
      <div className='register-section'>
        <form onSubmit={submitHandler} className=' '>
        <h1 className='register-h1'>create your account</h1>

          <div className='register-inputs'>
            <Label className="register-label">Full Name</Label>
            <Input
              type="text"
              name="fullName"
              value={input.fullName}
              onChange={changeEventHandler}
              placeholder="Univoc"
              className="register-input"
              />
          </div>            
          <div className='mt-2 mb-2'>
            <Label className="register-label">Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Univoc@gmail.com"
              className="register-input"
              />
          </div>
          <div className='mt-2 mb-2'>
            <Label className="register-label">Phone Number</Label>
            <Input
              type="text"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              placeholder="+91  "
              className="register-input"
              />
          </div>
          <div className='mt-2 mb-2'>
            <Label className="register-label">Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="********"
              className="register-input"
              />
          </div>
          
          <div className="radio-button">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input 
                    type="radio" 
                    name="role" 
                    value="Student" 
                    checked={input.role === 'Student'}
                    onChange={changeEventHandler}
                    className="cursor-pointer w-4 h-4"  
                  />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input 
                    type="radio" 
                    name="role" 
                    value="Recruiter" 
                    checked={input.role === 'Recruiter'}
                    onChange={changeEventHandler}
                    className="cursor-pointer w-4 h-4" 
                 />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
            </div>
          
          <Button
            type="submit" 
            className="signup-btn" id="register">
            Sign Up
          </Button>
  
          <span className="register-span">Already have an account?{' '} <Link to="/Login" className="register-link">Login</Link></span>
          <h2 className="continue-container">
  <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="472" height="3" viewBox="0 0 472 3" fill="none">
    <path d="M0 1.96579H472" stroke="#C8D3F9" stroke-width="2"/>
  </svg>
  <span className="continue-h2">or continue with</span>
</h2>


<div className='register-social-icons'>
<img className='icon' src='/assets/google.svg' alt='google' />
<img className='icon' src='/assets/apple.svg' alt='apple' />
<img className='icon' src='/assets/facebook.svg' alt='facebook' />
          </div>
        </form>
      </div>
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Register;
