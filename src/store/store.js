import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import storage from "./storage";

const persistedReducer = persistReducer({ key: "root", storage }, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistedStore = persistStore(store);
