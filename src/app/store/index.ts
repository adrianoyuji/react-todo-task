import { configureStore } from "@reduxjs/toolkit";
import choreReducer from "features/chores/choreSlice";

const store = configureStore({ reducer: { chores: choreReducer } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
