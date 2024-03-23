import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, FilterWrapper } from './Filter.styled';
import { changeFilter } from 'redux/contacts/filterSlice';
import { selectFilters } from 'redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();
  return (
    <FilterWrapper>
      Find contacts by name
      <FilterInput
        name="filter"
        type="text"
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </FilterWrapper>
  );
};