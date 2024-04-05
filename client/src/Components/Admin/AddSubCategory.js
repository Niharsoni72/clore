import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
// import ShowBrand from './ShowBrand';

const AddSubCategory = () => {
    const [list1, setList1] = useState([])
  const [subCategoryName,setSubCategoryName] = useState("")
  const [categoryId,setCategoryId] = useState("")
  const navigate = useNavigate()
 

    useEffect(() => {
        getCategory()
    }, []);
    // useEffect(() => {
    //   // setCategoryId(list1.at(0)._id)
    //   console.log(list1[0].id)
    // },[list1]);
    

    const getCategory = async () => {
        const res = await fetch("http://localhost:1337/api/getcategory", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const categoryData = await res.json()
        if (res.status === 422 || !categoryData) {
            console.log("error")
        } else {
            setList1(categoryData)
            
            //console.log(data);
        }
    }

    const addSubCategoryHandler = async (e) => {
      e.preventDefault();
      
      var formData = new FormData();
      formData.append("category_id", categoryId)
      formData.append("sub_category_name", subCategoryName)

      const config = {
          headers: {
              "Content-Type":  "application/json"
          }
      }

      const res = await axios.post("http://localhost:1337/api/addsubcategory", formData, config);
      if (res.data.status === 401 || !res.data) {
          console.log("errror")
      } else {
          alert("Sub Category Added Successfully")
          navigate("/ShowSubCategory")
      }


    }
    useEffect(()=>{
      console.log(list1)
    },[])
  return (
    
    <section>
      <div className='form_data'>
        <div className='form_heading'>
          <h1>Add Sub Category</h1>
          
        </div>
        <form>
          <div className='form_input'>
            <label htmlFor='sub_category_name'>Enter Sub Category Name</label>
            <input type="text"
             onChange={(e) => setSubCategoryName(e.target.value)}
            value={subCategoryName} 
            name="sub_category_name" 
            placeholder='Enter Brand Name Here' />
          </div>
          
          
          <div class="form-group">
            <label for="exampleInputUsername1">Product Category</label>
               <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} selected name='category_id' class="form-control">
               <option value={""}>Select</option>
                {
                    list1.map((item, index) => {
                      return (
                          
                            <option value={item._id}>{item.category_name}</option>
                          
                      )
                    })
                  }     
                </select>
          </div>

          <button className='btn' onClick={addSubCategoryHandler}>Add Sub Category</button>
        </form>
      </div>
    </section>
  
  )
}

export default AddSubCategory