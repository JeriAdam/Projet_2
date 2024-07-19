import Stepper from "../Stepper/StepperShop.jsx";
import React from "react";
import Sidebar from "../SideBar/Sidebar.jsx";
import { useState } from "react";
import Products from "../Products/Products.jsx";
import Carproducts from "../db/dataCar.js";
import Motorproducts from "../db/dataMotor.js";
import Planeproducts from "../db/dataPlane.js";
import Boatproducts from "../db/dataBoat.js";
import Card from "../components/Card.jsx";
import Recommended from "../Recommended/Recommended.jsx";
import './Shop.css'
import {Element} from '../components/Products.jsx';
function Shop(){

  const [selectedVehicle, setSelectedVehicle] = useState("Car");
  const handleVehicleChange = (vehicle) => {
    setSelectedVehicle(vehicle);
  };
  


    const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected) {
    let filteredProducts = products;


    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, priceCategory, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          priceCategory === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, reviews, prevPrice, newPrice, description, power, weight, size, score}) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          description={description}
          power = {power}
          weight = {weight}
          size = {size}
          score={score}
        />
      )
    );
  }
  let result = 0;
  if (Element === 'Plane'){
    result = filteredData(Planeproducts, selectedCategory);
  }else if (Element === 'Motor'){
    result = filteredData(Motorproducts, selectedCategory);
  }else if (Element === 'Boat'){
    result = filteredData(Boatproducts, selectedCategory);
  }else {
    result = filteredData(Carproducts, selectedCategory);
  }

    return(
        <>
         <Sidebar element = {Element} handleChange={handleChange} />
         <Stepper/>
         <Recommended element = {Element} handleClick={handleClick} />
         <Products result={result} />
        </>
    );
}
export default Shop