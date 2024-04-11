import { catalogReducer } from "./catalog/catalogSlice";
import { filterReducer } from './catalog/filterSlice';
import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "./catalog/favoriteSlice";


const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        filter: filterReducer,
        favorites: favoritesReducer,
    },
});

export default store;