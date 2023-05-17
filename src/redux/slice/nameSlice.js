import { createSlice } from "@reduxjs/toolkit";
const nameSlice = createSlice({
  name: "name",
  initialState: [],
  reducers: {
    addName(state, action) {
      state.push(action.payload);
    },
  },
});
export default nameSlice.reducer;
export const { addName } = nameSlice.actions;
