
import React, { Fragment, useEffect, useState } from 'react'
import { Navigate, useParams, useNavigate } from 'react-router-dom'
import '../../CSS/UI/Card.css';
import NavbarBoots from '../Navabar/NavbarBoots';
import pic from '../../image/CLORE.png';
import axios from 'axios';
const PlaceOrder = () => {

    const [currentUser, setCurrentUser] = useState("")
    const [address, setAddress] = useState("")
    const [order, setOrder] = useState("")
    const [cart, setCart] = useState([])
    const {id} = useParams("")
    const navigate = useNavigate()

    var totalAmount = 0;
    var totalQty = 0;

    const token = localStorage.getItem('usersdatatoken')

    const getCartItems = async (event) => {

        const cartItems = await fetch("http://localhost:1337/api/getcartitems",{
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : token
            }
        })

        const getCartItems = await cartItems.json();

        if(getCartItems.status === 401 || !getCartItems){
            console.log("error")
        } else {
            console.log("User : ",getCartItems)
            setCart(getCartItems)
        }
    }

    const getUser = async () => {

        const user = await fetch("http://localhost:1337/api/user", {
          method : "GET",
          headers : {
            "Content-Type" : "application/json",
            "Authorization": token
          }
        })
  
        const getUser = await user.json();
  
        if(getUser.status === 422 || !getUser){
          console.log("error")
        } else {
          console.log("User : ",getUser)
          setCurrentUser(getUser)
        }
    }

    const getAddressById = async () => {
        const addressGet = await fetch(`http://localhost:1337/api/getaddressid/${id}`,{
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        })

        const getAddress = await addressGet.json()

        if(getAddress.status === 401 || !getAddress){
            console.log("error")
        } else {
            console.log(getAddress)
            setAddress(getAddress)
        }
    }

    const checkOutHandler = async (addId) => {
        console.log("Address Id : ", addId)
        const checkOut = await fetch(`http://localhost:1337/api/checkout/${addId}`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : token
            }
        })

        const getCheckOut = await checkOut.json()

        if(getCheckOut.status === 401 || !getCheckOut) {
            console.log("Error")
        } else {
            console.log(getCheckOut);
            setOrder(getCheckOut)
            const options = {
                key: "rzp_test_2TuO5NUvU21p95",
                amount: getCheckOut.amount, 
                currency: "INR",
                name: "Clore-The Cloth Store",
                description: "Test Transaction",
                image: pic,
                order_id: getCheckOut.id, 
                //callback_url: "http://localhost:1337/api/paymentverification",
                handler: async function (response){
                    var formData = new FormData();
    
                    formData.append("razorpay_payment_id",response.razorpay_payment_id)
                    formData.append("razorpay_order_id",response.razorpay_order_id)
                    formData.append("razorpay_signature",response.razorpay_signature)
    
                    const config = {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization" : token
                        }
                    }
              
                    const res = await axios.post("http://localhost:1337/api/paymentverification", formData, config);
                    if (res.data.status === 401 || !res.data) {
                        console.log("errror")
                    } else {
                        alert("Payment Successfully")
                        navigate("/MyOrders")
                    }
                },
                prefill: {
                    name: currentUser.first_name,
                    email: currentUser.email,
                    contact: currentUser.phone
                },
                notes: {
                    address: "Razorpay Corporate Office"
                },
                theme: {
                    color: "#3399cc"
                }
            };
            const razor = new window.Razorpay(options);
            razor.open();
        }

        
        
    }

    const cashOnDeliveryHandler = async (addId) => {
        console.log("Address Id : ", addId)
        const checkOut = await fetch(`http://localhost:1337/api/checkoutbycod/${addId}`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : token
            }
        })

        const getCheckOut = await checkOut.json()

        if(getCheckOut.status === 401 || !getCheckOut) {
            console.log("Error")
        } else {
           alert("Order is Placed") 
           navigate("/MyOrders")
        }
    }

    useEffect(()=>{
        getCartItems()
        getUser()
        getAddressById()
    }, [])
    return (<Fragment>
       <NavbarBoots/>
        <div className='design_container'>
            <h4>YOUR ITEMS</h4>
            <table class="table">
          <thead>
            <tr>
              <th scope="col">Pics</th>
              <th scope="col">Product</th>
              <th scope="col">Size</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total Amount</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            
            
          
            {cart.map((item)=>{
                {totalQty+=item.qty}
                {totalAmount+=item.total_amount}
                return (<>
                    <tr>
                            <td><img src={`http://localhost:1337/productImages/${item.product_id?.image1}`} height={50} width={50} style={{borderRadius:4}}></img></td>
                            <td>{item.product_id?.product_name}</td>
                            <td>{item.product_id?.size}</td>
                            <td>{item.total_amount/item.qty}</td>
                            <td>{item.qty}</td>
                            <td>{"₹"+item.total_amount}</td>
                                   
                      <br></br>
                      </tr>
                      </>)
            })}
            <tr><th>Sub Total :</th><td></td><td></td><td></td><td></td><th>{"₹"+totalAmount}</th>
                        </tr>
        </tbody>
        </table>
            <br></br><br></br><br></br>
            <table>
                <tr>
                    <td>Deliver To : {currentUser.first_name+" "+currentUser.last_name},{" "+address.pincode}</td>
                </tr>
                <tr>
                    <td>{address.street}</td>
                </tr>
                <tr>
                    <td>{address.city+", "+address.state}</td>
                </tr>
                <tr>
                    <td>{address.phone}</td>
                </tr>
            </table>
        </div>
        <br></br><br></br>
        <div className='design_container'>
            <table>
                <tr>
                    <th>PRICE DETAILS</th>
                </tr>
                <tr>
                    <td>Price {"("+totalQty+" items)"}</td>
                    <td align='right'>{"₹"+totalAmount}</td>
                </tr>

                <tr>
                    <td>Delivery Charges</td>
                    <td align='right'>FREE</td>
                </tr>

                <tr>
                    <th>Total Payable</th>
                    <th align='right'>{"₹"+totalAmount}</th>
                </tr>
            </table>
        </div>
        <br></br>
        <div>
            <button className='btn btn-success' style={{marginLeft: 'auto',marginRight: 'auto',display: 'block'}} onClick={()=>checkOutHandler(address._id)}>PAY ONLINE</button><br></br>
        </div>
        <div>
            <button className='btn btn-success' style={{marginLeft: 'auto',marginRight: 'auto',display: 'block'}} onClick={()=>cashOnDeliveryHandler(address._id)}>PAY ON DELIVERY</button>
            {/* <button className='btn btn-success' style={{marginLeft: 'auto',marginRight: 'auto',display: 'block'}}>PLACE ORDER</button> */}

        </div>
        </Fragment>
    )
}

export default PlaceOrder