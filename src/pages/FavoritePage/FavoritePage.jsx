import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../../redux/catalog/favoriteSlice";

export default function FavoritePage() {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.favorites);

    const handleRemoveFromFavorites = (itemId) => {
        dispatch(removeFromFavorites(itemId));
    }

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
    </div>
  );
}