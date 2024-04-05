import React, { Fragment, useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import AddBrand from './AddBrand';
import axios from "axios"
import AdminNavbar from './AdminNavbar';


const EditBrand = () => {
  const [brand, setBrand] = useState("");
  const [brandName, setBrandName] = useState("");
  const [brandImage, setBrandImage] = useState("");
  const {id} = useParams("");
  const navigate = useNavigate()

  const getBrandId = async () => {
    
    const getBrand = await fetch(`http://localhost:1337/api/getbrandid/${id}`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
    })

    const brandEdit = await getBrand.json()
    if (getBrand.status === 422 || !brandEdit) {
      console.log("error");
    } else {
        setBrand(brandEdit)
        setBrandName(brandEdit.brand_name)
        setBrandImage(brandEdit.image_path)
    }
  }

  useEffect(()=>{
    getBrandId()
  }, [])

  const updateBrandListener = async (event)=>{
    event.preventDefault();
    console.log(brandName);
    console.log(brandImage);

    var formData = new FormData();
      formData.append("image_path", brandImage)
      formData.append("brand_name", brandName)

      const config = {
          headers: {
              "Content-Type":  "multipart/form-data"
          }
      }

      const res = await axios.patch(`http://localhost:1337/api/updatebrand/${id}`, formData, config);
      if (res.data.status === 401 || !res.data) {
          console.log("error")
      } else {
          alert("Brand Updated Successfully")
          navigate("/ShowBrand")
      }
  }

  return (
    <Fragment>
      <AdminNavbar/>
    <section>
      <div className='form_data'>
        <div className='form_heading'>
        <h1>Update Brand</h1>
        </div>
      
      <form>
          <div className='form_input'>
            <label htmlFor='brand_name'>Enter Brand Name</label>
            <input type="text"
             onChange={(e) => setBrandName(e.target.value)}
            value={brandName} 
            name="brand_name" 
            placeholder='Enter Brand Name Here' />
          </div>
          
        
         <div className='form_input'>
            <label htmlFor='image_path'>Brand Images</label>
            <div className='two'>
              <input 
              type="file"
              name="image_path"
              onChange={(e) => setBrandImage(e.target.files[0])}
              placeholder='Select Brand Images' required/>       
            </div>
          </div>

          <button className='btn' onClick={updateBrandListener}>Update Brand</button>
        </form>
        </div>
    </section>
    </Fragment>
  )
}

export default EditBrand