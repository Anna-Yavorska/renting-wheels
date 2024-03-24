import { useDispatch, useSelector } from 'react-redux';
import { Card, ListItem, LoadMoreButton, Wrapper } from './CatalogPage.styled';
import { useEffect, useState } from 'react';
import { fetchCatalog } from '../../redux/catalog/operations';
import { Modal } from 'components/Modal/Modal';
import { closeModal, openModal } from '../../redux/catalog/modalSlice';
import { Filter } from 'components/Filter/Filter';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(state => state.catalog);
  const {location, vechicleEquipment, vechicleType} = useSelector(state => state.filter);
  const [displayedItems, setDisplayedItems] = useState(4);
  const loadMoreItems = () => {
    setDisplayedItems(prevCount => prevCount + 4);
  };

  const [selectedItemId, setSelectedItemId] = useState(null);
  const { isOpen } = useSelector(state => state.modal);

  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  useEffect(() => {
    if (location === '' && !vechicleType) {
      setFilteredItems(items);
    } 
  }, [location, vechicleType, items]);


  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
    if (!isOpen) {
      dispatch(openModal())
    }
  }

  const handleCloseModal = () => {
    setSelectedItemId(null);
    dispatch(closeModal());
  }

  const handleSearch = () => {
    const filteredItems = items.filter(item => {
        const locationMatch = !location || item.location.toLowerCase().includes(location.toLowerCase());

        const typeMatch = !vechicleType || item.form.toLowerCase().includes(vechicleType.toLowerCase());

        const equipmentMatch = Object.entries(vechicleEquipment).every(([key, value]) => {
            if (key !== 'transmission') {
                return !value || (value && item.details[key] > 0);
            }
            return !value || (value && item.transmission === 'automatic');
        });
        return locationMatch && typeMatch && equipmentMatch;
    });
    setFilteredItems(filteredItems);
  };
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    <div>Error: {error}</div>;
  }

  return (
    <Wrapper>
      <Filter onSearch={handleSearch}/>
      <div>
        <ul>
          {filteredItems.slice(0, displayedItems).map(item => (
            <ListItem key={item._id} onClick={()=> handleItemClick(item._id)}>
              <Card>
                <p>{item.name}</p>
                <p>{item.location}</p>
                <p>{item.rating}</p>
                <p>{item.reviews.length}</p>
                <p>{item.price}</p>
                <img src={item.gallery[0]} alt='car' width={170} height={120}></img>
                <p>{item.adults}</p>
                <p>{item.engine}</p>
                <p>{item.transmittion}</p>
              </Card>
            </ListItem>
          ))}
        </ul>
        {isOpen && (<Modal
                isOpen={isOpen}
                isClose={handleCloseModal}
          gallery={filteredItems.find(item => item._id === selectedItemId)?.gallery}
          price={filteredItems.find(item => item._id === selectedItemId)?.price}
              />)}
        {displayedItems < filteredItems.length && (
          <LoadMoreButton onClick={loadMoreItems}>Load More</LoadMoreButton>
        )}
      </div>
    </Wrapper>
  );
}
