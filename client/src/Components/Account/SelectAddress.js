import React, { Fragment, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import NavbarBoots from '../Navabar/NavbarBoots'
import '../../CSS/UI/Card.css';

const SelectAddress = () => {

    const [address, setAddress] = useState([])

    const navigate = useNavigate()

    const token = localStorage.getItem('usersdatatoken')

    console.log(token)

    const getAddresses = async () => {
        const addresses = await fetch("http://localhost:1337/api/getaddress", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        })

        const getAddress = await addresses.json()

        if (getAddress.status === 401 || !getAddress) {
            console.log("error")
        } else {
            console.log(getAddress)
            setAddress(getAddress)
        }

    }

    const placeOrder = (id) => {
        navigate(`/PlaceOrder/${id}`)
    }

    useEffect(() => {
        getAddresses()
    }, [])

    return (
        <Fragment>
            <NavbarBoots />
            <div className='design_container'>
            <h1>Select Address</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Phone</th>
                        <th scope="col">House No. & Society</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Pincode</th>

                    </tr>
                </thead>
                <tbody class="table-group-divider">

                    {address.map((item) => {
                        return (<>

                            <tr onClick={() => placeOrder(item._id)}>
                                <td>{item.phone}</td>
                                <td>{item.street}</td>
                                <td>{item.city}</td>
                                <td>{item.state}</td>
                                <td>{item.pincode}</td>


                                <br></br>
                            </tr></>)
                    })}
                </tbody>
            </table>
            </div>
        </Fragment>
    )
}

export default SelectAddress