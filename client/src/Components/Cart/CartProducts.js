import React, { Fragment, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import cartIcon from '../../icons/cart.svg';
import deleteIcon from '../../icons/delete.png';
import plusIcon from '../../icons/plus.png';
import minusIcon from '../../icons/minus.png';
import {NavLink} from 'react-router-dom';



const CartProducts = (props) => {

    const [cart, setCart] = useState([])
    var totalAmount=0;
    var totalQty = 0;

    const getCartItems = async (event) => {
        //event.preventDefault()
        const token = localStorage.getItem('usersdatatoken');
        console.log(token)

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

    const deleteFromCartHandler = async (cartId) => {
        const res = await fetch(`http://localhost:1337/api/deletefromcart/${cartId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
        })

        const cartDelete = await res.json()
        if (res.status === 422 || !cartDelete) {
        console.log("error");
        } else {
            alert("Product Removed from Cart Successfully")
            getCartItems()
        }
    }

    const updateCartHandler = (cartId) => {
        const qty = document.getElementsByName('qty').value
        console.log(qty)
    }

    const minusCartHandler = async (cartId) => {
        const res = await fetch(`http://localhost:1337/api/minuscartitem/${cartId}`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            }
        })

        const newCartItem = await res.json();

        if(newCartItem.status === 401 || !newCartItem){
            console.log("error")
        } else {
            console.log("Cart Qty Updated")
            getCartItems()
        }
    }

    const plusCartHandler = async (cartId) => {
        const res = await fetch(`http://localhost:1337/api/pluscartitem/${cartId}`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            }
        })

        const newCartItem = await res.json();

        if(newCartItem.status === 401 || !newCartItem){
            console.log("error")
        } else {
            console.log("Cart Qty Updated")
            getCartItems()
        }
    }

    useEffect(()=>{
        getCartItems()
    },[])

    return (
        <Fragment> 
      {cart.map((item)=>{
        {totalQty+=item.qty}
        {totalAmount+=item.total_amount}
        return (<>
        <tr>
                <td><img src={`http://localhost:1337/productImages/${item.product_id?.image1}`} height={150} width={150}></img></td>
                <td>{item.product_id?.product_name}</td>
                <td>{item.product_id?.size}</td>
                <td>{"₹"+item.total_amount/item.qty}</td>
                <td>{item.qty==1?"":<div onClick={()=>minusCartHandler(item._id)}><img src={minusIcon} height={20} width={20}></img></div>}{item.qty}<div onClick={()=>plusCartHandler(item._id)}><img src={plusIcon} height={30} width={30}></img></div></td>
                <td>{"₹"+item.total_amount}</td>
                <td><img src={deleteIcon} height={30} width={30} onClick={()=>deleteFromCartHandler(item._id)}></img></td>
          
          <br></br>
          </tr></>)
      })}

        Total Quantity : {totalQty}
        <br/>
        Total Amount : {"₹"+totalAmount}
        <br/>
        <NavLink to={"/SelectAddress"} className="btn btn-success">Checkout</NavLink>

        </Fragment>
    )
}

export default CartProducts