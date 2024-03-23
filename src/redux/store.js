import { catalogReducer } from "./catalog/catalogSlice";

import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./catalog/modalSlice";

const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        modal: modalReducer,
    },
});

export default store;