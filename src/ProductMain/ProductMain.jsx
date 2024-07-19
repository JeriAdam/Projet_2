import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import CustomLink from "../components/CustomLink";
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
function productMain(){
    const location = useLocation();
    const productImage = location.state.img;
    const productDescription = location.state.description;
    const productPower = location.state.power;
    const productSize = location.state.size;
    const productWeight = location.state.weight;
    const productTitle = location.state.title;
    const productPrevPrice = location.state.prevPrice;
    const productNewPrice = location.state.newPrice;
    const productScore = location.state.score;

    const routeState = {
      img : productImage,
      title : productTitle,
      prevPrice : productPrevPrice,
      newPrice : productNewPrice,
      description : productDescription,
      power : productPower,
      weight : productWeight,
      size : productSize,
      score : productScore, 
  }


    return(
    <>
    <div className="container mt-12">
        <div className='row'>
            <div className='col-md-4'>
            <p className='text-5xl subpixel-antialiased'>{productTitle}</p>
            <Rating name="read-only" value={productScore} readOnly />
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{productScore}</span>
            </div>
            <div className='col-md-8'>
              <div className='row'>
              <div className='col-md-2'>
                <p className='text-3xl subpixel-antialiased'>Price : </p>
              </div>
              <div className='col-md-3'>
                <p className='text-3xl subpixel-antialiased'><del>{productPrevPrice}</del></p>
              </div>
              <div className='col-md-3'>
                <p className='text-red-700 text-3xl subpixel-antialiased'>{productNewPrice}</p>
              </div>
              <div className='col-md-4'>
              <CustomLink to="/CartPage" state={routeState}><Button variant="primary">Add to cart</Button></CustomLink>
              </div>
              </div>
              
               
            </div>
        </div>
        <div className='row mt-10'>
            <div className='col-md-4'>
                <img src={productImage} />
            </div>
            <div className='col-md-8'>
                <div className='row'>
                <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><p className='text-xl subpixel-antialiased'><strong>Description</strong></p></Accordion.Header>
        <Accordion.Body>{productDescription}</Accordion.Body>
      </Accordion.Item>
      </Accordion>
                </div>
                <div className='row mt-10'>
                <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><p className='text-xl subpixel-antialiased'><strong>Specification</strong></p></Accordion.Header>
        <Accordion.Body><p> <strong>Power :</strong> {productPower}</p>
                        <p> <strong>Weight :</strong> {productWeight}</p>
                        <p>  <strong>Size :</strong> {productSize} </p>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
                </div>
            </div>
        </div>
    </div>
    </>);
}

export default productMain;
