import React, { useState, useEffect } from 'react';
import axios from "axios"
import { Navigate, useNavigate } from 'react-router-dom';
import ShowBrand from './ShowBrand';

const AddCategory = () => {
  const [categoryName,setCategoryName] = useState("")
  const navigate = useNavigate()
 

    useEffect(() => {
        
    }, [])

    const addCategoryHandler = async (e) => {
      e.preventDefault();
      console.log(categoryName)
      var formData = new FormData();
      
      formData.append("category_name", categoryName)

      const config = {
          headers: {
              "Content-Type":  "application/json"
          }
      }

      const res = await axios.post("http://localhost:1337/api/addcategory", formData, config);
      if (res.data.status === 401 || !res.data) {
          console.log("errror")
      } else {
          alert("Category Added Successfully")
          navigate("/ShowCategory")
      }


    }
  return (
    <>
    <section>
      <div className='form_data'>
        <div className='form_heading'>
          <h1>Add Category</h1>
          
        </div>
        <form>
          <div className='form_input'>
            <label htmlFor='category_name'>Enter Category Name</label>
            <input type="text"
             onChange={(e) => setCategoryName(e.target.value)}
            value={categoryName} 
            name="category_name" 
            placeholder='Enter Category Name Here' />
          </div>

          <button className='btn' onClick={addCategoryHandler}>Add Category</button>
        </form>
      </div>
    </section>
    </>
  )
}

export default AddCategory