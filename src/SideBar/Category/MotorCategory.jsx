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
          value="sportsBike"
          title="Sports"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="dualSport"
          title="Dual-Sport"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="cruiser"
          title="Cruiser"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="touring"
          title="Touring"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="standard"
          title="Standard"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Scooter"
          title="Scooter"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;