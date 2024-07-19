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
          value="privateJet"
          title="Private jet"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="commercialJet"
          title="Commercial jet"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="cargo"
          title="Cargo plane"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="helicopter"
          title="Helicopter"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="glider"
          title="Glider"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="seaPlane"
          title="Seaplane"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;