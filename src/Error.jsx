import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <div className="error-container">
        <h1>
          Oops!!! <span className="error-text">Error 404</span>, Page Not Found 
          <span className="animated"> 😢</span>
        </h1>
        <p className="error-message">The page you're looking for doesn't exist or has been moved.</p>
        <NavLink to="/" className="btn btn-outline-dark error-btn">Go Back Home</NavLink>
      </div>
    </>
  );
};

export default Error;
