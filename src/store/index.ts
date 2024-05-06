import {configureStore} from "@reduxjs/toolkit";
import cart from "./cart";

const store = configureStore({
  reducer: {
    cart,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
  // devTools: import.meta.env.NODE_ENV === "development",
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
