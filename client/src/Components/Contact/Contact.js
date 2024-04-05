import React, { useState } from "react";
import axios from "axios";
import { Alert } from "bootstrap";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", formData);
      alert("Message sent successfully!"); // Display success message
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error submitting message:", err);
      alert(
        "Thank you for your submisson we will contact soon"
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mb-4">
          <h1>Contact Us</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <input
            className="form-control"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
      <footer
        className="footer py-5 bg-dark d-flex align-items-center"
        style={{ position: "center", bottom: 0, width: "100%" }}
      >
        <div className="container text-center text-light">
          <p>Connect with us:</p>
          <a
            href="https://www.facebook.com/clothestore"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fa-lg mx-2"></i>
          </a>
          <a
            href="https://twitter.com/clothestore"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-lg mx-2"></i>
          </a>
          <a
            href="https://www.instagram.com/clothestore"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-lg mx-2"></i>
          </a>
          <p>
            For inquiries, email us at:{" "}
            <a href="mailto:info@clorethestore.com">info@clorethestore.com</a>
          </p>
          <p>Visit us at: 123 Clothing Street, Mumbai, India</p>
          <p></p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUsPage;
