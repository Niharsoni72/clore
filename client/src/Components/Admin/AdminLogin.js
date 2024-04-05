import React, { Fragment, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';


const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate()
    const [password, setPassword] = useState("")

    const loginAdminHandler = async (e) => {
        e.preventDefault();
        if (email === '') {
            alert("Enter Email")
        } else if (!email.includes("@")) {
            alert("Enter Valid Email")
        } else if (password === "") {
            alert("Enter your password")
        } else {

            const data = await fetch("http://localhost:1337/api/adminLogin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            })
            const dataRes=await data.json()
            console.log(dataRes)
            if (dataRes === 'Login Successful') {
                navigate('/AdminHomePage');
            }
            else {
                alert("Incorrect Data");
            }
        }
    }
    return (
        <Fragment>
            <section>
                <div className='form_data'>
                    <div className='form_heading'>
                        <h1>Welcome Admin , Log In</h1>
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
                        <button className='btn' onClick={loginAdminHandler}>Login</button>
                    </form>
                </div>
            </section>
        </Fragment>
    )
}

export default AdminLogin