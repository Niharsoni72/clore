
import React, { useState } from 'react'
import "../../CSS/mix.css";
import { NavLink, useNavigate,} from 'react-router-dom'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const loginUser = async (e) => {
    e.preventDefault();
    if (email === '') {
      alert("Enter Email")
    } else if (!email.includes("@")) {
      alert("Enter Valid Email")
    } else if (password === "") {
      alert("Enter your password")
    } else {

      const data = await fetch("http://localhost:1337/api/login", {
        method: "POST",      
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      })

      const res = await data.json();
      console.log(res)
      if (res.status === 'ok') {
        // alert("Login Successfully");
        localStorage.setItem("usersdatatoken", res.user);
        console.log("User Data Token: ",localStorage.getItem("userdatatoken"));
        
        navigate('/')
        //alert("done")
        setEmail("")
        setPassword("")
      }
    }
  }
  return (
    <>
      <section>
        <div className='form_data'>
          <div className='form_heading'>
            <h1>Welcome Back , Log In</h1>
            <p>Hi, we are you glad you are back.Please login.</p>
          </div>
          <form>
            <div className='form_input'>
              <label htmlFor='email'>Email</label>
              <input type="email" name="email" placeholder='Enter Your Email Address' onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div className='form_input'>
              <label htmlFor='p'>Password</label>
              <div className='two'>
                <input type={!showPass ? "password" : "text"} name="password" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} value={password} />


                <div className='showpass' onClick={() => setShowPass(!showPass)}>
                  {
                    !showPass ? <BsEyeFill /> : <BsEyeSlashFill />
                  }

                </div>

              </div>
            </div>
            <button className='btn' onClick={loginUser}>Login</button>
            <p>Don't have an Account? <NavLink to="/Register">Sign Up</NavLink></p>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login