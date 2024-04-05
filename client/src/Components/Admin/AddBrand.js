import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Navigate, useNavigate } from 'react-router-dom';
import ShowBrand from './ShowBrand';

const AddBrand = () => {
  const [brand_name,setBrandName] = useState("")
  const [images,setImagePath] = useState("")
  const navigate = useNavigate()
 

    useEffect(() => {
        
    }, [])

    const addBrandHandler = async (e) => {
      e.preventDefault();
      console.log(brand_name);
      console.log(images);

      var formData = new FormData();
      formData.append("image_path", images)
      formData.append("brand_name", brand_name)

      const config = {
          headers: {
              "Content-Type":  "multipart/form-data"
          }
      }

      const res = await axios.post("http://localhost:1337/api/addbrand", formData, config);
      if (res.data.status === 401 || !res.data) {
          console.log("errror")
      } else {
          alert("Brand Added Successfully")
          navigate("/ShowBrand")
      }


    }
  return (
    <>
    <section>
      <div className='form_data'>
        <div className='form_heading'>
          <h1>Add Brand</h1>
          
        </div>
        <form>
          <div className='form_input'>
            <label htmlFor='brand_name'>Enter Brand Name</label>
            <input type="text"
             onChange={(e) => setBrandName(e.target.value)}
            value={brand_name} 
            name="brand_name" 
            placeholder='Enter Brand Name Here' />
          </div>
          
          
         <div className='form_input'>
            <label htmlFor='image_path'>Brand Images</label>
            <div className='two'>
              <input 
              type="file"
              name="image_path"
              onChange={(e) => setImagePath(e.target.files[0])}
              placeholder='Select Brand Images'/>       
            </div>
          </div>

          <button className='btn' onClick={addBrandHandler}>Add Brand</button>
        </form>
      </div>
    </section>
    </>
  )
}

export default AddBrand