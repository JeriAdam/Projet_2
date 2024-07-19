import "./Category.css";
import Input from "../../components/Input";
import { useTranslation } from 'react-i18next';
function Category({ handleChange }) {

  const {t} = useTranslation();
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
          value="sportsCar"
          title={t('Sport')}
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="hyper"
          title={t('Hyper')}
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="SUV"
          title={t('SUV')}
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sedan"
          title={t('Sedan')}
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="coupe"
          title={t('Coupe')}
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="convertible"
          title={t('Convertible')}
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;