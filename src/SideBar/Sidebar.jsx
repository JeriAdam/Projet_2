import CarCategory from "./Category/CarCategory";
import MotorCategory from "./Category/MotorCategory";
import BoatCategory from "./Category/BoatCategory";
import PlaneCategory from "./Category/PlaneCategory";
import CarPrice from "./Price/CarPrice";
import PlanePrice from './Price/PlanePrice';
import BoatPrice from './Price/BoatPrice'
import MotorPrice from './Price/MotorPrice'
import CarColors from "./Colors/CarColors";
import PlaneColors from "./Colors/PlaneColors";
import BoatColors from "./Colors/BoatColors";
import MotorColors from "./Colors/MotorColors";
import "./Sidebar.css";
import React from "react";
const Sidebar = ({element, handleChange }) => {

  function searchElement(element){
    if (element === 'Plane'){
      return <div>
        <PlaneCategory handleChange={handleChange} />;
        <PlanePrice handleChange={handleChange} />
        <PlaneColors handleChange={handleChange} />
      </div> 
     }else if (element === 'Motor'){
       return <div>
       <MotorCategory handleChange={handleChange} />;
       <MotorPrice handleChange={handleChange} />
       <MotorColors handleChange={handleChange} />
     </div> 
     }else if (element === 'Boat'){
       return <div>
       <BoatCategory handleChange={handleChange} />;
       <BoatPrice handleChange={handleChange} />
       <BoatColors handleChange={handleChange} />
     </div> 
     }else{
      return <div>
      <CarCategory handleChange={handleChange} />;
      <CarPrice handleChange={handleChange} />
      <CarColors handleChange={handleChange} />
    </div> 
     }
  }
  return (
    <>
      <section className="sidebar">
        <div>{searchElement(element)}</div>
      </section>
    </>
  );
};

export default Sidebar;