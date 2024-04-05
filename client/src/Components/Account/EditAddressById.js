import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, NavLink } from 'react-router-dom'
import axios from 'axios'
import NavbarBoots from '../Navabar/NavbarBoots'

const EditAddressById = () => {

  const [address, setAddress] = useState("")

  const navigate = useNavigate()

  const [phone, setPhone] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [pincode, setPincode] = useState("")

  const { id } = useParams("")

  const getAddressById = async () => {
    const addressGet = await fetch(`http://localhost:1337/api/getaddressid/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const getAddress = await addressGet.json()

    if (getAddress.status === 401 || !getAddress) {
      console.log("error")
    } else {
      console.log(getAddress)
      setAddress(getAddress)
      setPhone(getAddress.phone)
      setStreet(getAddress.street)
      setCity(getAddress.city)
      setState(getAddress.state)
      setPincode(getAddress.pincode)
    }
  }

  const updateAddressListener = async () => {
    var formData = new FormData();
    formData.append("phone", phone)
    formData.append("street", street)
    formData.append("city", city)
    formData.append("state", state)
    formData.append("pincode", pincode)

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    const res = await axios.patch(`http://localhost:1337/api/updateaddress/${id}/`, formData, config);
    if (res.data.status === 401 || !res.data) {
      console.log("error")
    } else {
      alert("Address Updated Successfully")
      navigate("/ShowSubCategory")
    }

  }

  useEffect(() => {
    getAddressById()
  }, [])

  return (
    <div>
      <NavbarBoots/> 
      <section>
        <div className='form_data'>
          <div className='form_heading'>
            <h1>Edit Address</h1>

          </div>
          <form>
            <div className='form_input'>
              <label htmlFor='phone'>Enter Mobile Number</label>
              <input type="number"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                name="phone"
                placeholder='Enter Mobile Number' />
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

            <button className='btn' onClick={updateAddressListener}>Update Address</button>
            <NavLink to={"/EditAddress"} >Go to My Address</NavLink>
          </form>
        </div>
      </section>
    </div>
  )
}

export default EditAddressById