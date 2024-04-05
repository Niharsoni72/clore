// AboutUsPage.js

import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import NavbarBoots from "../Navabar/NavbarBoots";

const AboutUsPage = () => {
  const [aboutUsData, setAboutUsData] = useState("");

  useEffect(() => {
    // Fetch About Us page data from the backend
    // axios.get('/api/aboutus')
    //   .then(res => {
    //     setAboutUsData(res.data);
    //   })
    //   .catch(err => {
    //     console.error('Error fetching About Us page data:', err);
    //   });
  }, []);

  return (
    <Fragment>
      <NavbarBoots></NavbarBoots>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1 className="text-center mt-5 mb-4">About Us</h1>
            <p className="text-justify">
              "Discover timeless style at Clore, where fashion meets
              sophistication." "Explore curated collections of high-quality
              clothing for every occasion." "From classic essentials to trendy
              pieces, Clore offers something for everyone." "Experience
              unparalleled comfort and craftsmanship with our carefully selected
              fabrics." "Stay ahead of the curve with our latest arrivals and
              seasonal must-haves." "Shop with confidence knowing that each
              garment is designed to last." "Find the perfect fit with our range
              of sizes and customizable options." "Elevate your wardrobe with
              versatile pieces that effortlessly transition from day to night."
              "Enjoy a seamless shopping experience with our user-friendly
              website and responsive customer support." "Embrace your
              individuality and express your unique style with Clore, where
              fashion meets function."  
            </p>
            <p className="text-justify">
            Shop the latest trends at Clothe, your ultimate online fashion destination. Discover curated collections of high-quality clothing for every occasion,
             offering style and comfort in one place.
            </p>
            <p className="text-justify">
              
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUsPage;
