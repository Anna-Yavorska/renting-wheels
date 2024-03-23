import { useDispatch, useSelector } from 'react-redux';
import { Card, ListItem, LoadMoreButton, Wrapper } from './CatalogPage.styled';
import { useEffect, useState } from 'react';
import { fetchCatalog } from '../../redux/catalog/operations';
import { Modal } from 'components/Modal/Modal';
import { closeModal, openModal } from '../../redux/catalog/modalSlice';
// import { Filter } from 'components/Filter/Filter';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(state => state.catalog);
  const [displayedItems, setDisplayedItems] = useState(4);
  const loadMoreItems = () => {
    setDisplayedItems(prevCount => prevCount + 4);
  };

  const [selectedItemId, setSelectedItemId] = useState(null);
  const { isOpen } = useSelector(state => state.modal);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    <div>Error: {error}</div>;
  }

  return (
    <Wrapper>
      <div>
        <h2>Location</h2>
        <h2>Filter</h2>
        <h3>Vehicle equipment</h3>
        <ul>
          <li>AC</li>
          <li>Auiomatic</li>
          <li>Kitchen</li>
          <li>TV</li>
          <li>Shower/WC</li>
        </ul>
        <h3>Vehicle type</h3>
        <ul>
          <li>Van</li>
          <li>Fully</li>
          <li>Alcove</li>
        </ul>
        <button>Search</button>
      </div>
      
      <div>
        <ul>
          {items.slice(0, displayedItems).map(item => (
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
                gallery={items.find(item => item._id === selectedItemId)?.gallery}
              />)}
        {displayedItems < items.length && (
          <LoadMoreButton onClick={loadMoreItems}>Load More</LoadMoreButton>
        )}
      </div>
    </Wrapper>
  );
}
