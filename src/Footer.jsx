import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5 ">
      <div className="container">
        <div className="row">
          {/* Left Side - Brand Name */}
          <div className="col-md-4">
            <h5 className="text-uppercase">Shivam Varshney</h5>
            <p>Building the future, one line of code at a time.</p>
          </div>

          {/* Center - Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><NavLink className="text-white text-decoration-none" to="/">Home</NavLink></li>
              <li><NavLink className="text-white text-decoration-none" to="/about">About</NavLink></li>
              <li><NavLink className="text-white text-decoration-none" to="/service">Services</NavLink></li>
              <li><NavLink className="text-white text-decoration-none" to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          {/* Right Side - Social Media */}
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <NavLink to="https://facebook.com" className="text-white me-3"><i className="fab fa-facebook"></i></NavLink>
            <NavLink to="https://twitter.com" className="text-white me-3"><i className="fab fa-twitter"></i></NavLink>
            <NavLink to="https://instagram.com" className="text-white me-3"><i className="fab fa-instagram"></i></NavLink>
            <NavLink to="https://linkedin.com" className="text-white me-3"><i className="fab fa-linkedin"></i></NavLink>
          </div>
        </div>

        {/* Copyright Section */}
        <hr className="my-3 border-light" />
        <p className="mb-0">© {new Date().getFullYear()} Shivam Varshney. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
