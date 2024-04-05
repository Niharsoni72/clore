import React,{Fragment, useEffect, useState} from 'react'

const CartModalProduct = () => {
  const [cart, setCart] = useState([])

  const getCartItems = async (event) => {
      
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

  useEffect(()=>{
      getCartItems()
  },[])


  return (
    <Fragment>

    {cart.map((item)=>{
        return (<>
        <tr>
            <td>
                <img src={`http://localhost:1337/productImages/${item.product_id?.image1}`} height={100} width={100}/>
            </td>
            <td>    
                {item.product_id?.product_name}
                <br/>
                Qty : {item.qty}  &emsp;&emsp;&emsp;&emsp; Size : {item.product_id?.size}
                <br/>
                Price : {item.product_id?.price}
            </td>
            
        </tr></>)
      })}
        
    </Fragment>
  )
}

export default CartModalProduct