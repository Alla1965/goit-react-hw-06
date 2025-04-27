import { createSlice } from '@reduxjs/toolkit';
// import { setNameFilter } from '../../redux/filtersSlice';
const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '', // рядок пошуку за іменем
  },
  reducers: {
    setNameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setNameFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
