import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites, setFavorires } from "../../redux/catalog/favoriteSlice";
import { BookingForm } from "components/BookingForm/BookingForm";
import { saveFavoritesToLocalStorage } from "helpers/saveFavoritesToLocalStorage";
import { useEffect } from "react";

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
    <div>
      <h1>Favorite</h1> 
          <ul>
              {favorites.map(item => (
                  <li key={item._id}>
                      <button onClick={()=>handleRemoveFromFavorites(item._id)}>X</button>
                      <p>{item.description}</p>
                  </li>
              ))}
          </ul>
          <BookingForm/>
    </div>
  );
}