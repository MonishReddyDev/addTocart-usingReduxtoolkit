import {configureStore} from '@reduxjs/toolkit';
import shoppingCartApi from '../services/shoppingCartClient';
import cartReducer from './cartSlice';

const Store = configureStore({
  reducer: {
    [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
    cart: cartReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(shoppingCartApi.middleware),
});

export default Store;
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
