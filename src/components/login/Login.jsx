import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import '../login/Login.css';
import Navbar from '../navbar/Navbar';
import Testimonials from '../testimonials/Testimonials';
import { Button } from '../ui/button';
import Input from '../ui/input';
import Label from '../ui/label';

const Login = () => {
  const [input , setInput] = useState({
    email:"",
    password:"",
  });

  const navigate = useNavigate();

  //For email to role 
      const changeEventHandler = (e) =>{
      setInput({...input , [e.target.name] : e.target.value });
    }
    
  //Function for API Call
      const submitHandler = async(e) =>{
      e.preventDefault();
       try{
         const res = await axios.post(`http://localhost:4001/api/auth/login`, input, {
          headers:{
           "Content-Type": "application/json"
          },
          withCredentials:true,
      });
      if(res.data.success){
        //navigate to the home page
        navigate("/");
        toast.success(res.data.message);
      }
    }catch(error){
      console.log(error);
    }
}

  return (
    <div>
        <Navbar/>
         <div className='login-section'>
          <form onSubmit={submitHandler} className='login-form' >
          <h1 className='login-h1'>welcome back!</h1>

           <div className='login-inputs'>
            <Label className="login-label">Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Univoc@gmail.com"
              className="login-input "
              />
          </div>
          <div className='mt-4 mb-2'>
            <Label className="login-label">Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="********"
              className="login-input"
              />
          </div>
            
           <Link to="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </Link>
            
          <Button type="submit" className="login-btn" id="login">
            Login
          </Button>
        
          <span classname="login-span">Don't have an account? <Link to="/Register" className="login-link">Signup</Link></span>

          <h2 className="continue-container">
  <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="472" height="3" viewBox="0 0 472 3" fill="none">
    <path d="M0 1.96579H472" stroke="#C8D3F9" stroke-width="2"/>
  </svg>
  <span className="continue-h2">or continue with</span>
</h2>


<div className='login-social-icons'>
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

export default Login