import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";
import { beApi } from "./beApi";

const store = configureStore({
  reducer: { [beApi.reducerPath]: beApi.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(beApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
