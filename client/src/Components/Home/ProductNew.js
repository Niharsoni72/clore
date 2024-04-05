import React from 'react';
import styles from '../../CSS/UI/ProductCard.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { BsEye } from 'react-icons/bs';



const ProductNew = (props) => {
  const navigate = useNavigate()

  const productDetailHandler = (productId) => {
    navigate(`/ShowProductDetail/${productId}`)
  }

  const addProductToCart = async (productId) => {
    console.log(productId);

    const token = localStorage.getItem('usersdatatoken');

    const addToCart = await fetch(`http://localhost:1337/api/addtocart/${productId}`, {
    method : "POST",
    headers : {
      "Content-Type" : "application/json",
      "Authorization": token
    }
  })
  }
  return (
    <div className={styles.main_card}>
      <img src={props.imageName}  className={styles.prodImage} onClick={() => productDetailHandler(props._id)}/>
      <h5>{props.productName}</h5>
      <p>{props.shortDesc}</p>
      <div className={styles.buttons_group}>
        <a className='btn btn-warning mx-3' onClick={()=>addProductToCart(props._id)}><HiOutlineShoppingCart /></a>
        <a className='btn btn-success mx-3' onClick={() => productDetailHandler(props._id)}><BsEye /></a>
      </div>
    </div>
  )
}

export default ProductNew;