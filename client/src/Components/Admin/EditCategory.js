import React, { Fragment, useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import AddBrand from './AddBrand';
import axios from "axios"
import AdminNavbar from './AdminNavbar';


const EditCategory = () => {
  const [category, setCategory] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const { id } = useParams("");
  const navigate = useNavigate()

  const getCategoryId = async () => {

    const getCategory = await fetch(`http://localhost:1337/api/getcategoryid/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const categoryEdit = await getCategory.json()
    if (getCategory.status === 422 || !categoryEdit) {
      console.log("error");
    } else {
      console.log(categoryEdit)
      setCategory(categoryEdit)
      setCategoryName(categoryEdit.category_name)
    }
  }

  useEffect(() => {
    getCategoryId()
  }, [])

  const updateCategoryListener = async (event) => {
    event.preventDefault();

    var formData = new FormData();
    formData.append("category_name", categoryName)

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    const res = await axios.patch(`http://localhost:1337/api/updatecategory/${id}`, formData, config);
    if (res.data.status === 401 || !res.data) {
      console.log("error")
    } else {
      alert("Category Updated Successfully")
      navigate("/ShowCategory")
    }
  }

  return (
    <Fragment>
      <AdminNavbar/>
    <section>
      <div className='form_data'>
          <div className='form_heading'>
          <h1>Update Category</h1>
          </div>
      <form>
        <div className='form_input'>
          <label htmlFor='category_name'>Enter Sub Category Name</label>
          <input type="text"
            onChange={(e) => setCategoryName(e.target.value)}
            value={categoryName}
            name="category_name"
            placeholder='Enter New Category Name Here' />
        </div>

        <button className='btn' onClick={updateCategoryListener}>Update Category</button>
      </form>
      </div>
    </section>
    </Fragment>
  )
}

export default EditCategory