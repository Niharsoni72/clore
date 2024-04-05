import React, { useEffect, useState,Fragment } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import deleteIcon from '../../icons/delete.png';
import editIcon from '../../icons/edit.png';
import NavbarBoots from '../Navabar/NavbarBoots';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../CSS/UI/Card.css';

const EditAddress = () => {

    const [address, setAddress] = useState([])

    const navigate = useNavigate()

    const token = localStorage.getItem('usersdatatoken')

    console.log(token)

    const getAddresses = async () => {
        const addresses = await fetch("http://localhost:1337/api/getaddress", {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : token
            }
        })

        const getAddress = await addresses.json()

        if(getAddress.status === 401 || !getAddress){
            console.log("error")
        } else {
            console.log(getAddress)
            setAddress(getAddress)
        }

    }

    const deleteAddress = async (addressId)=> {
      const res = await fetch(`http://localhost:1337/api/deleteaddress/${addressId}`,{
        method : "DELETE",
        headers : {
          "Content-Type" : "application/json"
        }
      })

      const addressDel = await res.json()

      if(addressDel.status === 401 || !addressDel){
        console.log("error")
      } else {
        alert("Address Deleted Successfully")
        getAddresses()
      }
    }

    const editAddress = (addressId)=> {
      navigate(`/EditAddressById/${addressId}`)
    }

    useEffect(()=>{
      getAddresses()
    }, [])
    return (<Fragment>
    <NavbarBoots/>
    <div className='design_container'>
      <NavLink className='btn btn-success' to={"/AddAddress"}>Add Address</NavLink>
      <h2 style={{textAlign:'center'}}>Your Addresses</h2>
      <table class="table">
          <thead>
            <tr>
              <th scope="col">Phone</th>
              <th scope="col">House No. & Society</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Pincode</th>
              <th scope="col" colSpan={2} align={'center'}>Action</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            
          {address.map((item)=>{
              return (<>
              <tr>
                      <td>{item.phone}</td>
                      <td>{item.street}</td>
                      <td>{item.city}</td>
                      <td>{item.state}</td>
                      <td>{item.pincode}</td>
                      <td><img src={editIcon} onClick={()=>editAddress(item._id)} height={30} width={30}></img></td>
                      <td><img src={deleteIcon} onClick={()=>deleteAddress(item._id)} height={30} width={30}></img></td>
                
                <br></br>
                </tr></>)
          })}
          </tbody>
        </table>
        </div>
      </Fragment>
    )
}

export default EditAddress