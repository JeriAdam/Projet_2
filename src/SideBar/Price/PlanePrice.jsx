import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={1}
          title="$0 - $499,999"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={2}
          title="$500,000 - $999,999"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={3}
          title="$1,000,000 - $5,000,000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={4}
          title="Over $5,000,000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;