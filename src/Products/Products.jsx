import "./Product.css";
import React from 'react';
const Products = ({ result }) => {
  return (
    <>
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-10">
      <section  className="card-container">{result}</section>
      </div>
    </div>
    </>
  );
};

export default Products;
