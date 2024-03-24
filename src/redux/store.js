import { catalogReducer } from "./catalog/catalogSlice";
import { modalReducer } from './catalog/modalSlice';
import { filterReducer } from './catalog/filterSlice';
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        modal: modalReducer,
        filter: filterReducer,
    },
});

export default store;