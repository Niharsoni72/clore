import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import {BsEyeFill,BsEyeSlashFill} from 'react-icons/bs'
import "../../CSS/mix.css";
// import Toast from '../UI/toast';

const Register = () => {
  const [showPass,setShowPass] = useState(false)
  const [cshowpass,setCShowPass] = useState(false)
  const navigate=useNavigate();
  // const [toastFlag,setToastFlag] = useState(true)
  const [fname,setFname] = useState("")
  const [lname,setLname] = useState("")
  const [phone,setPhone] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [cpassword,setCpassword] = useState("")


  const addUserdata  = async (e) =>{
    
    e.preventDefault();
    if(fname===''){
      alert("Enter Name")
    }else if (email ===''){
      alert("Enter Email")
    }else if(!email.includes("@")){
      alert("Enter Valid Email")
    }else if(password === ""){
      alert("Enter your password")
    }else if(password.length<6){
      alert("Please Enter Min 6 character")
    }else if(cpassword === ''){
      alert("Please enter Confirm Password")
    }else if(cpassword.length<6){
      alert("Please Enter Min 6 Character")
    }else if(password!==cpassword){
        alert("password and confirm password not match")
    }else{
      
     
      const data = await fetch("http://localhost:1337/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fname, 
            lname,
            phone,
            email, 
            password, 
            cpassword
        })
    });

    const res = await data.json();
    console.log(res.status);

    if(res.status === 'ok'){
      // alert("Account Successfully Registered ");
      
      alert("User Registered Successfully");
      window.location.href = '/Login'
      setFname("")
      setLname("")
      setPhone("")
      setEmail("")
      setPassword("")
      setCpassword("")
      navigate('/Login')

    }
  


    }
  }
  return (
  
    <section>
      <div className='form_data'>
        <div className='form_heading'>
          <h1>Sign Up</h1>
          <p style={{textAlign:"center"}}>We are glad that you will be using Project Cloud to manage<br/>
          your tasks! We hope that you will get like it</p>
        </div>
        <form>
          <div className='form_input'>
            <label htmlFor='fname'>First Name</label>
            <input type="text"
             onChange={(e) => setFname(e.target.value)}
            value={fname} 
            name="fname" 
            placeholder='Enter Your First Name' />
          </div>
          
          <div className='form_input'>
            <label htmlFor='lname'>Last Name</label>
            <input type="lname"
             onChange={(e) => setLname(e.target.value)}
            value={lname} 
            name="lname" 
            placeholder='Enter Your Last Name' />
          </div>

          <div className='form_input'>
            <label htmlFor='email'>Email</label>
            <input type="email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email" 
            placeholder='Enter Your Email Address' />
          </div>

          <div className='form_input'>
            <label htmlFor='phone'>Mobile</label>
            <input type="number"
             onChange={(e) => setPhone(e.target.value)}
            value={phone} 
            name="phone" 
            placeholder='Enter Your Mobile Number' />
          </div>

          <div className='form_input'>
            <label htmlFor='password'>Password</label>
            <div className='two'>
              <input 
              type={!showPass ? "password" : "text"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              placeholder='Enter Your Password' />

              <div className='showpass' onClick={() =>setShowPass(!showPass)}>
               {
                !showPass ? <BsEyeFill/> : <BsEyeSlashFill/>
               }              
              </div>        
            </div>
          </div>

          <div className='form_input'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <div className='two'>
              <input type={!cshowpass ? "password" : "text"} onChange={(e) => setCpassword(e.target.value)} value={cpassword} name="cpassword" placeholder='Confirm Password' />
              <div className='showpass' onClick={() =>setCShowPass(!cshowpass)}>
               {
                !cshowpass ? <BsEyeFill/> : <BsEyeSlashFill/>
               }              
                </div>        
            </div>
          </div>
          <button className='btn' onClick={addUserdata}>SignUp</button>
          <p>Already have an Account?  <NavLink to={"/Login"}>Log In</NavLink></p>
        </form>
      </div>
      
    </section>
  )
}

export default Register