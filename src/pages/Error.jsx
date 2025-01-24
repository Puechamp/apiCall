import React from 'react';
import { useLocation } from 'react-router';

const Error = () => {
  const location = useLocation();
  const errorCode = location.state?.errorCode || 404;
  const errorMessage = location.state?.errorMessage || "Page not found";

  const getErrorMessage = (code) => {
    switch (code) {
      case 404:
        return "Page not found";
      case 500:
        return "Internal server error";
      case 403:
        return "Forbidden";
      default:
        return "An unexpected error occurred";
    }
  };

  return (
    <div className="error-page">
      <h1>Error {errorCode}</h1>
      <p>{getErrorMessage(errorCode)}</p>
      <p>{errorMessage}</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};

export default Error;