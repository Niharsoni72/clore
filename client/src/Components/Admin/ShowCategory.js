import React, { Fragment, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import AddCategory from './AddCategory';
import AdminNavbar from './AdminNavbar';

const ShowCategory = () => {

  const [list, setList] = useState([]);

  const deleteCategory = async (categoryId) => {
    const res = await fetch(`http://localhost:1337/api/deletecategory/${categoryId}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
    })

    const categoryDelete = await res.json()
    if (res.status === 422 || !categoryDelete) {
      console.log("error");
    } else {
        alert("Category Deleted Successfully")
        getCategory()
    }

  }
  const getCategory = async () => {

    const res = await fetch("http://localhost:1337/api/getcategory", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const categoryData = await res.json()
    if (res.status === 422 || !categoryData) {
        console.log("error");
    } else {
        setList(categoryData) 
    }
  }

  useEffect(()=>{
    getCategory()
  }, [])

  return (
    <div>
      <AdminNavbar/>
      <div className='design_container'>
      <NavLink to={"/AddCategory"} className='btn btn-success'>Add Category</NavLink><br></br>
      <table className="table">
          <thead>
            <tr>
              <th scope="col">Category Name</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
      {list.map((item)=>{
        return (<tr>
          <td>{item.category_name}</td>
          <td><NavLink to={`/EditCategory/${item._id}`} className="btn btn-primary">Edit</NavLink></td>
          <td><button onClick={()=>deleteCategory(item._id)} className="btn btn-danger">Delete</button></td>
          <br></br>
        </tr>)
      })}
      </tbody>
      </table>
      </div>
    </div>
  )
}

export default ShowCategory