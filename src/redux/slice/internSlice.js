import { createSlice } from "@reduxjs/toolkit";
const internashipSlice = createSlice({
  name: "skills",
  initialState: [],
  reducers: {
    addinternship(state, action) {
      state.push(action.payload);
    },
  },
});
export default internashipSlice.reducer;
export const { addinternship } = internashipSlice.actions;
