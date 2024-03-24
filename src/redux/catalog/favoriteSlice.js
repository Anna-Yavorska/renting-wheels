import { createSlice }from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
};

const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter(item => item._id !== action.payload);
        },
    },
});

export const favoritesReducer = favoriteSlice.reducer;

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;