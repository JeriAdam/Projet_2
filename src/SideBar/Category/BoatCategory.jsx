import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sailBoat"
          title="Sailboat"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="yacht"
          title="Yacht"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="motor"
          title="motor boat"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="fishing"
          title="Fishing boat"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="catamaran"
          title="Catamaran"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="house"
          title="House boat"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;