import React, { Component } from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Page Not Found</h1>
        <p>Hmmm, we are unable to find that page.</p>
        <Link to="/" className="button button--link">
          Head Home
        </Link>
      </div>
    </div>
  );
};
