import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import NavbarBoots from '../Navabar/NavbarBoots'

const AddAddress = () => {


    const navigate = useNavigate()

    const token = localStorage.getItem('usersdatatoken')
    const [phone, setPhone] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [pincode, setPincode] = useState("")

    const addAddressHandler = async (e) => {
        e.preventDefault();

  
        var formData = new FormData();
        formData.append("phone", phone)
        formData.append("street", street)
        formData.append("city", city)
        formData.append("state", state)
        formData.append("pincode", pincode)
        

        
  
        const config = {
            headers: {
                "Content-Type":  "application/json",
                "Authorization" : token
            }
        }
  
        const res = await axios.post("http://localhost:1337/api/addaddress", formData, config);
        if (res.data.status === 401 || !res.data) {
            console.log("error")
        } else {
            alert("Address Added Successfully")
            navigate("/EditAddress")
        }
  
  
    }
  return (
    <>
    <NavbarBoots/>
    <section>
      <div className='form_data'>
        <div className='form_heading'>
          <h1>Add Address</h1>
          
        </div>
        <form>
          <div className='form_input'>
            <label htmlFor='phone'>Enter Mobile Number</label>
            <input type="number"
             onChange={(e) => setPhone(e.target.value)}
            value={phone} 
            name="phone" 
            placeholder='Enter Mobile Number that Delivery boy can Contact You' />
          </div>

          <div className='form_input'>
            <label htmlFor='street'>Enter House No and Society Name</label>
            <input type="text"
             onChange={(e) => setStreet(e.target.value)}
            value={street} 
            name="street" 
            placeholder='Enter House No and Society Name' />
          </div>

          <div className='form_input'>
            <label htmlFor='city'>Enter Your City</label>
            <input type="text"
             onChange={(e) => setCity(e.target.value)}
            value={city} 
            name="city" 
            placeholder='Enter Your City' />
          </div>

          <div className='form_input'>
            <label htmlFor='state'>Enter Your State</label>
            <input type="text"
             onChange={(e) => setState(e.target.value)}
            value={state} 
            name="state" 
            placeholder='Enter Your State' />
          </div>

          <div className='form_input'>
            <label htmlFor='pincode'>Enter Your Pincode</label>
            <input type="number"
             onChange={(e) => setPincode(e.target.value)}
            value={pincode} 
            name="Pincode" 
            placeholder='Enter Your Pincode' />
          </div>
          
          <button className='btn' onClick={addAddressHandler}>Add Address</button>
        </form>
      </div>
    </section>
    </>
  )
}

export default AddAddress