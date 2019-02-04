import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="alert alert-primary text-center" role="alert">
      Oops! Page not found. <Link to="/" className="alert-link">Go to Homepage</Link>.
    </div>
  );
};

export default NotFound;