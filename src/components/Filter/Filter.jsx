import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, FilterWrapper } from './Filter.styled';
import { changeLocationFilter, changeVechicleType, toggleEquipmentFilter } from '../../redux/catalog/filterSlice';

export const Filter = ({onSearch}) => {
    const dispatch = useDispatch();
    const {location} = useSelector(state => state.filter);
    
    const handleCheckboxChange = (equipment, checked) => {
        dispatch(toggleEquipmentFilter({ equipment, checked }));
    }

    const handleRadioChange = (value) => {
        dispatch(changeVechicleType(value));
    }

    const handleSearch = () => onSearch();

  return (
      <FilterWrapper>
          <div>
      Location
      <FilterInput
        name="location"
        type="text"
        value={location}
        onChange={event => dispatch(changeLocationFilter(event.target.value))}
          />
          </div>
          <div>
              <div>
          <h3>Vehicle equipment</h3>
          <input type='checkbox' onChange={(e) => handleCheckboxChange("airConditioner", e.target.checked)} id='airConditioner' name='airConditioner' />
          <label htmlFor='airConditioner'>AC</label><br />
          <input type='checkbox' onChange={(e) => handleCheckboxChange("transmission", e.target.checked)} id='transmission' name='transmission' />
          <label htmlFor='transmission'>Automatic</label><br />
          <input type='checkbox' onChange={(e) => handleCheckboxChange("kitchen", e.target.checked)} id='kitchen' name='kitchen' />
          <label htmlFor='kitchen'>Kitchen</label><br />
          <input type='checkbox' onChange={(e) => handleCheckboxChange("TV", e.target.checked)} id='TV' name='TV' />
          <label htmlFor='TV'>TV</label><br />
          <input type='checkbox' onChange={(e) => handleCheckboxChange("shower", e.target.checked)} id='shower' name='shower' />
          <label htmlFor='shower'>Shower/WC</label><br/>
        </div>
        <div>
          <h3>Vehicle type</h3>
          <input type='radio' id='panelTruck' name='radioGroup' value='panelTruck' onChange={() => handleRadioChange("panelTruck")}/>
          <label htmlFor='panelTruck'>Van</label><br />
          <input type='radio' id='fullyIntegrated' name='radioGroup' value='fullyIntegrated' onChange={() => handleRadioChange("fullyIntegrated")}/>
          <label htmlFor='fullyIntegrated'>Fully</label><br />
          <input type='radio' id='alcove' name='radioGroup' value='alcove' onChange={() => handleRadioChange("alcove")}/>
          <label htmlFor='alcove'>Alcove</label><br/>
        </div>
        <button onClick={handleSearch}>Search</button>
          </div>
    </FilterWrapper>
  );
};