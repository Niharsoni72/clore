import React, { Fragment, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import AddCategory from './AddCategory';
import AdminNavbar from './AdminNavbar';

const ShowSubCategory = () => {

  const [list, setList] = useState([]);

  const deleteSubCategory = async (subCategoryId) => {
    const res = await fetch(`http://localhost:1337/api/deletesubcategory/${subCategoryId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const subCategoryDelete = await res.json()
    if (res.status === 422 || !subCategoryDelete) {
      console.log("error");
    } else {
      alert("Sub Category Deleted Successfully")
      getSubCategory()
    }

  }
  const getSubCategory = async () => {

    const res = await fetch("http://localhost:1337/api/getsubcategorywithcategory", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const subCategoryData = await res.json()
    if (res.status === 422 || !subCategoryData) {
      console.log("error");
    } else {
      setList(subCategoryData)
    }
  }

  useEffect(() => {
    getSubCategory()
  }, [])

  return (
    <Fragment>
      <AdminNavbar />

      <div className='design_container'>
        <NavLink to={"/AddSubCategory"} className="btn btn-success">Add Sub Category</NavLink><br></br>
        <table className='table'>
          <thead>
            <tr>
              <th scope="col">Sub Category</th>
              <th scope="col">Category</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {list.map((item) => {
              return (<tr>
                <td>{item.sub_category_name}</td>
                <td>{item.category_id?.category_name}</td>
                <td><NavLink to={`/EditSubCategory/${item._id}`} className="btn btn-primary">Edit</NavLink></td>
                <td><button onClick={() => deleteSubCategory(item._id)} className="btn btn-danger">Delete</button></td>
                <br></br>
              </tr>)
            })}
          </tbody>

        </table>
      </div>
    </Fragment>
  )
}

export default ShowSubCategory