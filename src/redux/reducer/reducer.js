import { combineReducers } from "@reduxjs/toolkit";
import skiilsSlice from "../slice/skillSlice";
import picSlice from "../slice/Slices";
const rootReducer = combineReducers({
  skilldata: skiilsSlice,
  picdata: picSlice,
});
export default rootReducer;
