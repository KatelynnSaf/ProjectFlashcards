import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="NotFound">
      Not Found
      <p>
      <Link to="/">Return Home</Link>
      </p>
    </div>
  );
}

export default NotFound;

