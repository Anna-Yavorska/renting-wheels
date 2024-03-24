import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  vechicleEquipment: {
    airConditioner: false,
    transmission: false,
    kitchen: false,
    TV: false,
    shower: false,
  },
  vechicleType: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
    reducers: {
        changeLocationFilter: (state, action) => {
            state.location = action.payload;
        },
        toggleEquipmentFilter: (state, action) => {
            const { equipment, checked } = action.payload;
            state.vechicleEquipment[equipment] = checked;
        },
        changeVechicleType: (state, action) => {
            state.vechicleType = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeLocationFilter, toggleEquipmentFilter, changeVechicleType } = filterSlice.actions;
