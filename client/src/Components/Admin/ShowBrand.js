import React, { Fragment, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import AddBrand from './AddBrand';
import AdminNavbar from './AdminNavbar';

const ShowBrand = () => {

  const [list, setList] = useState([]);

  const deleteBrand = async (brandId) => {
    const res = await fetch(`http://localhost:1337/api/deletebrand/${brandId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const brandDelete = await res.json()
    if (res.status === 422 || !brandDelete) {
      console.log("error");
    } else {
      alert("Brand Deleted Successfully")
      getBrand()
    }

  }
  const getBrand = async () => {

    const res = await fetch("http://localhost:1337/api/getbrand", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const brandData = await res.json()
    if (res.status === 422 || !brandData) {
      console.log("error");
    } else {
      setList(brandData)

    }
  }

  useEffect(() => {
    getBrand()
  }, [])

  return (
    <Fragment>
      <AdminNavbar />
      <div className='design_center'>
          <NavLink to={"/AddBrand"} className="btn btn-success mt-3" >Add New Brand</NavLink><br></br>
        </div>
      <div className='design_container'>
        <table className='table'>
          <thead>
            <tr>
              <th scope="col">Brand Image</th>
              <th scope="col">Brand Name</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">

            {list.map((item) => {
              return (<tr>
                <td><img variant="top" style={{ width: "100px", textAlign: "center", margin: "auto", height: "100px" }} src={`http://localhost:1337/productImages/${item.image_path}`} className='mt-2' /></td>
                <td>{item.brand_name}</td>
                <td> <NavLink to={`/EditBrand/${item._id}`} className="btn btn-primary">Edit</NavLink></td>
                <td><button onClick={() => deleteBrand(item._id)} className="btn btn-danger">Delete</button></td>
                <br></br>
              </tr>)
            })}
          </tbody>
        </table>
      
      </div>
    </Fragment>
  )
}

export default ShowBrand