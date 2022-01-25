// import { combineReducers, createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
//  import reducerProduct from "./products";
//  import reducerCart from "./cart";
//  import reducerAuth from "./auth";
 

// const producer = combineReducers({
//   products: reducerProduct,
//   cart: reducerCart,
//   auth: reducerAuth,
// });

// export default createStore(producer, applyMiddleware(thunk));

import { configureStore } from '@reduxjs/toolkit'
import {  combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
 import reducerProduct from "./products";
 import reducerCart from "./cart";
 import reducerAuth from "./auth";
//  const  preloadedState = {
//  auth: {
//     userInfor: localStorage.getItem('userInfor')
//       ? JSON.parse(localStorage.getItem('userInfor'))
//       : null,
//   },
//   cart: {
//     cartItems: localStorage.getItem('cartItems')
//       ? JSON.parse(localStorage.getItem('cartItems'))
//       : [],
//     shippingAddress: localStorage.getItem('shippingAddress')
//       ? JSON.parse(localStorage.getItem('shippingAddress'))
//       : {},
//     paymentMethod: 'PayPal',
//   },
// };
const rootReducer = combineReducers({
  auth: reducerAuth,
  products: reducerProduct,
  cart: reducerCart,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export const persistor = persistStore(store);
export default store;