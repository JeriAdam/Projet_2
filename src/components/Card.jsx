import "../Products/Product.css"
import CustomLink from "./CustomLink";
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Card = ({ img, title, reviews, prevPrice, newPrice, description, power, weight, size,score }) => {

    const routeState = {
        img : img,
        title : title,
        reviews : reviews,
        prevPrice : prevPrice,
        newPrice : newPrice,
        description : description,
        power : power,
        weight : weight,
        size : size,
        score : score,
    }
  return (
    <>



<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 transition-all duration-700 hover:scale-110">
    <a>
       <CustomLink to ="/ProductPage" state={routeState}><img style={{ cursor: 'pointer' }} class="p-8 rounded-t-lg" src={img} alt="product image" /></CustomLink> 
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark">{title}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
        <div class="flex items-center">
        <div class="flex items-center space-x-1 rtl:space-x-reverse">
        <Rating name="read-only" value={score} readOnly />
        </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{score}</span>
        <div className="card-reviews">
            <span className="total-reviews">{reviews}</span>
        </div>
        </div>
            
        </div>
        <div className="row">
            <div className="col-5">
            <p className="text-xl font-bold text-gray-900"> <del className="text-red-700">{prevPrice}</del> {newPrice}</p>
            </div>
            <div className="col-7">
            <CustomLink to ="/ProductPage" state={routeState}><a href="/ProductPage" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More info</a></CustomLink>
            </div>
        </div>
    </div>
</div>

    </>
  );
};

export default Card;
