import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavbarBoots from '../Navabar/NavbarBoots'
import '../../CSS/UI/Card.css';

const MyOrderDetails = () => {

    const [myFinalOrder, setMyFinalOrder] = useState("")
    const [myOrderDetails, setMyOrderDetails] = useState("")

    const { id } = useParams("")

    const token = localStorage.getItem('usersdatatoken')

    const getMyOrderDetails = async () => {
        const getMyOrderDetails = await fetch(`http://localhost:1337/api/getmyorderid/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        })

        const getMyOrderDetailsRes = await getMyOrderDetails.json();

        if (getMyOrderDetailsRes.status === 401 || !getMyOrderDetailsRes) {
            console.log("Error")
        } else {
            console.log(getMyOrderDetailsRes.Order)
            console.log(getMyOrderDetailsRes.OrderDetails)
            setMyFinalOrder(getMyOrderDetailsRes.Order)
            setMyOrderDetails(getMyOrderDetailsRes.OrderDetails)
        }
    }

    useEffect(() => {
        getMyOrderDetails()
    }, [])

    return (
        <div>
            <NavbarBoots />
        
            <div className="design_container">
            <h4>YOUR ORDER DETAILS</h4>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Pics</th>
                            <th scope="col">Product</th>
                            <th scope="col">Size</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total Amount</th>
                            <th scope="col">Order Date</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <td><img src={`http://localhost:1337/productImages/${myFinalOrder.product_id?.image1}`} height={50} width={50}></img></td>
                            <td>{myFinalOrder.product_id?.product_name}</td>
                            <td>{myFinalOrder.product_id?.size}</td>
                            <td>{myFinalOrder.quantity}</td>
                            <td>{"₹" + myFinalOrder.total}</td>
                            <td>{myFinalOrder.created_at}</td>
                        </tr>
                    </tbody>
                </table>
                <br></br><br></br>
                <table>
                    <tr>
                        <td>Delivery Address : {myFinalOrder.user_id?.first_name + " " + myFinalOrder.user_id?.last_name},{" " + myOrderDetails.address_id?.pincode}</td>
                    </tr>
                    <tr>
                        <td>{myOrderDetails.address_id?.street}</td>
                    </tr>
                    <tr>
                        <td>{myOrderDetails.address_id?.city + ", " + myOrderDetails.address_id?.state}</td>
                    </tr>
                    <tr>
                        <td>Mobile Number : {myOrderDetails.address_id?.phone}</td>
                    </tr>
                    <tr><td>return or exchange
                        </td></tr>
                </table>
                


            </div>
        </div>
    )
}

export default MyOrderDetails