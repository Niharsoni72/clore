import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NavbarBoots from "../Navabar/NavbarBoots";
import classes from "../../CSS/ShopPage/shoppage.module.css";
import ProductNew from "../Home/ProductNew";
import Filter from "./Filter";

const Home = () => {
  const [list, setList] = useState([]);
  const [histData, setHistData] = useState([]);

  const navigate = useNavigate();

  const getData = async () => {
    const res = await fetch("http://localhost:1337/api/getproduct", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const productData = await res.json();
    if (res.status === 422 || !productData) {
      console.log("error");
    } else {
      setList(productData);
      setHistData(productData);
    }
  };

  const productDetailHandler = (productId) => {
    navigate(`/ShowProductDetail/${productId}`);
  };

  useEffect(() => {
    getData();
  }, []);

  const brandsFilterSubmit = (brandList) => {
    if (brandList !== "") {
      setList(histData.filter(item => item.brand_id._id === brandList));
    }
  };

  const categoryFilterSubmit = (categoryList) => {
    if (categoryList !== "") {
      setList(histData.filter(item => item.category_id._id === categoryList));
    }
  };

  const sizeFilterSubmit = (sizeList) => {
    if (sizeList !== "") {
      setList(histData.filter(item => item.size === sizeList));
    }
  };

  const onReset = () => {
    setList(histData);
  };

  return (
    <div className={classes.master_container}>
      <NavbarBoots />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Filter
              onBrandChange={brandsFilterSubmit}
              onCategoryChange={categoryFilterSubmit}
              onSizeChange={sizeFilterSubmit}
              onResetFilter={onReset}
            />
          </div>
          <div className="col-9">
            <div className="row">
              {list.length > 0 ? (
                list.map((item) => (
                  <div key={item._id} className="col-4">
                    <div onClick={() => productDetailHandler(item._id)}>
                      <ProductNew
                        imageName={`http://localhost:1337/productImages/${item.image1}`}
                        productName={item.product_name}
                        shortDesc={item.small_desc}
                        _id={item._id}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div>No products found.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
