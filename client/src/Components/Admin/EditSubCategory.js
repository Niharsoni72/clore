import React, { Fragment, useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import AddBrand from './AddBrand';
import axios from "axios"
import AdminNavbar from './AdminNavbar';


const EditSubCategory = () => {
  const [list1, setList1] = useState([])
  const [subCategory, setSubCategory] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const { id } = useParams("");
  const navigate = useNavigate()

  const getSubCategoryId = async () => {

    const getSubCategory = await fetch(`http://localhost:1337/api/getsubcategoryid/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const subCategoryEdit = await getSubCategory.json()
    if (getCategory.status === 422 || !subCategoryEdit) {
      console.log("error");
    } else {
      console.log(subCategoryEdit)
      setSubCategory(subCategoryEdit)
      setSubCategoryName(subCategoryEdit.sub_category_name)
      setCategoryId(subCategoryEdit.category_id)
    }
  }

  useEffect(() => {
    getSubCategoryId()
    getCategory()
  }, [])

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

  const updateSubCategoryListener = async (event) => {
    event.preventDefault();

    var formData = new FormData();
    formData.append("sub_category_name", subCategoryName)
    formData.append("category_id", categoryId)

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    const res = await axios.patch(`http://localhost:1337/api/updatesubcategory/${id}`, formData, config);
    if (res.data.status === 401 || !res.data) {
      console.log("error")
    } else {
      alert("Sub Category Updated Successfully")
      navigate("/ShowSubCategory")
    }
  }



  return (
    <Fragment>
      <AdminNavbar />
      <section>
        <div className='form_data'>
          <div className='form_heading'>
            <h1>Update Sub Category</h1>
          </div>
          <form>
            <div className='form_input'>
              <label htmlFor='category_name'>Enter Sub Category Name</label>
              <input type="text"
                onChange={(e) => setSubCategoryName(e.target.value)}
                value={subCategoryName}
                name="sub_category_name"
                placeholder='Enter Sub Category Name Here' />
            </div>

            <div class="form-group">
              <label for="exampleInputUsername1">Product Category</label>
              <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} selected name='category_id' class="form-control">
                {
                  list1.map((item, index) => {
                    return (
                      <>
                        <option value={item._id}>{item.category_name}</option>
                      </>
                    )
                  })
                }
              </select>
            </div>

            <button className='btn' onClick={updateSubCategoryListener}>Update Category</button>
          </form>
        </div>
      </section>
    </Fragment>
  )
}

export default EditSubCategory