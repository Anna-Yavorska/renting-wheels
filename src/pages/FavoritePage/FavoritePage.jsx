import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites, setFavorires } from "../../redux/catalog/favoriteSlice";
import { BookingForm } from "components/BookingForm/BookingForm";
import { saveFavoritesToLocalStorage } from "helpers/saveFavoritesToLocalStorage";
import { useEffect } from "react";
import { About, Aside, Container, UpperContainer } from "./FavoritePage.styled";

export default function FavoritePage() {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.favorites);

    const handleRemoveFromFavorites = (itemId) => {
        dispatch(removeFromFavorites(itemId));
        const updatedFavorites = favorites.filter(item => item._id !== itemId);

        saveFavoritesToLocalStorage(updatedFavorites);
    };

    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');

        if (savedFavorites) {
            dispatch(setFavorires(JSON.parse(savedFavorites)));
        }
    }, [dispatch])

  return (
      <Container>
          <UpperContainer>
      <h1>Favorite</h1> 
          <ul>
              {favorites.map(item => (
                  <li key={item._id}>
                      <button onClick={()=>handleRemoveFromFavorites(item._id)}>X</button>
                      <p>{item.description}</p>
                  </li>
              ))}
              </ul>
              </UpperContainer>
          <Aside>
               
              <About>
                  <ul>
                    <li>Features</li>
                    <li>Reviews</li>
                  </ul>
                 <p>Lorem, ipis unde eos rep</p></About>
              <BookingForm />
          </Aside>
          
    </Container>
  );
}