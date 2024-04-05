import React, { useState, useNavigate, useEffect, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import "../../CSS/UI/Card.css";

const ShowOrders = () => {

    const [myOrders, setMyOrders] = useState([])


    const getMyOrdersById = async (event) => {

        const myOrders = await fetch("http://localhost:1337/api/getallmyorders", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const getMyOrders = await myOrders.json();

        if (getMyOrders.status === 401 || !getMyOrders) {
            console.log("error")
        } else {
            console.log("User : ", getMyOrders)
            setMyOrders(getMyOrders)
        }
    }

    useEffect(() => {
        getMyOrdersById();
    }, [])

    return (
        <Fragment>
            <AdminNavbar />
            <div className='design_container'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Product</th>
                            <th scope="col">Size</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">₹</th>
                            <th scope="col">Order at</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">



                        {myOrders.map((item) => {

                            return (<>
                                <tr>
                                    <td><img src={`http://localhost:1337/productImages/${item.product_id?.image1}`} height={50} width={50}></img></td>
                                    <td>{item.product_id?.product_name}</td>
                                    <td>{item.product_id?.size}</td>
                                    <td>{item.quantity}</td>
                                    <td>{"₹" + item.total}</td>
                                    <td>{item.created_at}</td>
                                    <td><NavLink to={`/MyOrderDetails/${item._id}`}>See Details</NavLink></td>

                                </tr>
                            </>)
                        })}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default ShowOrders