import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const hiatorySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHostory: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromHostory: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const {addToHostory, removeFroHostory} = hiatorySlice.actions;

export default hiatorySlice.reducer;
