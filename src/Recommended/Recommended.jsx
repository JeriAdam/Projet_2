import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ element, handleClick }) => {

  if (element === 'Plane'){
    return  <>
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Button onClickHandler={handleClick} value="" title="All Products" />
        <Button onClickHandler={handleClick} value="Bombardier" title="Bombardier" />
        <Button onClickHandler={handleClick} value="Airbus" title="Airbus" />
        <Button onClickHandler={handleClick} value="G1" title="G1 AVIATION" />
        <Button onClickHandler={handleClick} value="AgustaWestland" title="AgustaWestland" />
      </div>
    </div>
  </>
   }else if (element === 'Motor'){
     return  <>
     <div>
       <h2 className="recommended-title">Recommended</h2>
       <div className="recommended-flex">
         <Button onClickHandler={handleClick} value="" title="All Products" />
         <Button onClickHandler={handleClick} value="Suzuki" title="Suzuki" />
         <Button onClickHandler={handleClick} value="Honda" title="Honda" />
         <Button onClickHandler={handleClick} value="HD" title="Harley Davidson" />
       </div>
     </div>
   </>
   }else if (element === 'Boat'){
     return  <>
     <div>
       <h2 className="recommended-title">Recommended</h2>
       <div className="recommended-flex">
         <Button onClickHandler={handleClick} value="" title="All Products" />
         <Button onClickHandler={handleClick} value="Aggressor" title="Aggressor" />
         <Button onClickHandler={handleClick} value="Searay" title="Searay" />
         <Button onClickHandler={handleClick} value="Lakeway" title="Lakeway" />
         <Button onClickHandler={handleClick} value="Goespel" title="Goespel" />
       </div>
     </div>
   </>
   }else{
    return  <>
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Button onClickHandler={handleClick} value="" title="All Products" />
        <Button onClickHandler={handleClick} value="Mercedes" title="Mercedes" />
        <Button onClickHandler={handleClick} value="Lamborghini" title="Lamborghini" />
        <Button onClickHandler={handleClick} value="Ferrari" title="Ferrari" />
        <Button onClickHandler={handleClick} value="Bugatti" title="Buggati" />
      </div>
    </div>
  </>
  
};
}

export default Recommended;