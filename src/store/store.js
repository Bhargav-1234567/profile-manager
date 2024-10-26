// src/store/store.js
import { createStore, combineReducers } from "redux";
import profileReducer from "../reducers/profileReducer";

const rootReducer = combineReducers({
  profiles: profileReducer,
});

const store = createStore(rootReducer);

export default store;
