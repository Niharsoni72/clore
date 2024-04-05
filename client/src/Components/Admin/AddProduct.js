import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [list, setList] = useState([]);
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [pname, setPname] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [small_desc, setSmallDesc] = useState("");
  const [long_desc, setLongDesc] = useState("");
  const [qty, setQty] = useState("");
  const [images, setImages] = useState([]);
  const [brand_id, setBrand] = useState("");
  const [category_id, setCategory] = useState("");
  const [sub_category_id, setSubCategory] = useState("");

  const navigate = useNavigate();

  const getBrand = async () => {
    const res = await fetch("http://localhost:1337/api/getbrand", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const brandData = await res.json();
    if (res.status === 422 || !brandData) {
      console.log("error");
    } else {
      setList(brandData);
    }
  };

  const getCategory = async () => {
    const res = await fetch("http://localhost:1337/api/getcategory", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const categoryData = await res.json();
    if (res.status === 422 || !categoryData) {
      console.log("error");
    } else {
      setList1(categoryData);
      //console.log(data);
    }
  };

  const getSubCategory = async () => {
    const res = await fetch("http://localhost:1337/api/getsubcategory", {
      method: "GET",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const subcategoryData = await res.json();
    if (res.status === 422 || !subcategoryData) {
      console.log("error");
    } else {
      setList2(subcategoryData);
      //console.log(data);
    }
  };

  useEffect(() => {
    getBrand();
    getCategory();
    getSubCategory();
  }, []);
  const addProductHandler = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    for (let i = 0; i < images.length; i++) {
        formData.append("image_path", images[i]);
    }
    formData.append("pname", pname);
    formData.append("price", price);
    formData.append("qty", qty);
    formData.append("color", color);
    formData.append("size", size);
    formData.append("small_desc", small_desc);
    formData.append("long_desc", long_desc);
    formData.append("brand_id", brand_id);
    formData.append("category_id", category_id);

    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    };

    try {
        const res = await axios.post(
            "http://localhost:1337/api/addproduct",
            formData,
            config
        );
        alert("Product Added Successfully");
        navigate("/ShowProduct");
    } catch (err) {
        console.log(err);
        alert("Error Adding Product");
    }
};

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Add Product</h1>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="pname">Enter Product Name</label>
              <input
                type="text"
                onChange={(e) => setPname(e.target.value)}
                value={pname}
                name="pname"
                placeholder="Enter Product Name Here"
              />
            </div>

            <div className="form_input">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                name="price"
                placeholder="Enter Product Price Here"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputUsername1">Product Category</label>
              <select
                value={category_id}
                onChange={(e) => setCategory(e.target.value)}
                selected
                name="category_id"
                class="form-control"
              >
                <option value={""}>Select</option>
                {list1.map((item, index) => {
                  return (
                    <>
                      <option value={item._id}>{item.category_name}</option>
                    </>
                  );
                })}
              </select>
            </div>

            <div class="form-group">
              <label for="exampleInputUsername1">Product Brand</label>
              <select
                value={brand_id}
                onChange={(e) => setBrand(e.target.value)}
                selected
                name="brand_id"
                class="form-control"
              >
                <option>---Select---</option>
                {list.map((item, index) => {
                  return (
                    <>
                      <option value={item._id}>{item.brand_name}</option>
                    </>
                  );
                })}
              </select>
            </div>

            <div className="form_input">
              <label htmlFor="small_desc">Small Description</label>
              <input
                type="text"
                onChange={(e) => setSmallDesc(e.target.value)}
                value={small_desc}
                name="small_desc"
                placeholder="Enter Small Description for Product"
              />
            </div>

            <div className="form_input">
              <label htmlFor="long_desc">Long Description</label>
              <input
                type="text"
                onChange={(e) => setLongDesc(e.target.value)}
                value={long_desc}
                name="long_desc"
                placeholder="Enter Long Description for Product"
              />
            </div>

            <div className="form_input">
              <label htmlFor="image_path">Product Images</label>
              <div className="two">
                <input
                  type="file"
                  name="image_path"
                  multiple
                  onChange={(e) => setImages(e.target.files)}
                />
              </div>
            </div>

            <div className="form_input">
              <label htmlFor="color">Product Color</label>
              <input
                type="text"
                onChange={(e) => setColor(e.target.value)}
                value={color}
                name="color"
                placeholder="Enter Product Color"
              />
            </div>

            <div className="form_input">
              <label htmlFor="size">Product Size</label>
              <input
                type="text"
                onChange={(e) => setSize(e.target.value)}
                value={size}
                name="size"
                placeholder="Enter Product Size"
              />
            </div>

            <div className="form_input">
              <label htmlFor="qty">Product In Stock</label>
              <input
                type="number"
                onChange={(e) => setQty(e.target.value)}
                value={qty}
                name="qty"
                placeholder="Enter Number of Products in Stocks"
              />
            </div>

            <button className="btn" onClick={addProductHandler}>
              Add Product
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
