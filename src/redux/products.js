// import axios from "axios";
// const SETDATA = "SETDATA";
// const GETDATA = "GETDATA";
// const SETSTATUS = " SETSTATUS";
// let initState = {
//   products: [],
//   categoris:[]
// };
// const setDataSatus = async (data) =>
//   await axios
//     .post("https://2g8ge.sse.codesandbox.io/products", data)
//     .catch((error) => {
//       console.log(error);
//     });
// //action
// export const setData = (product) => {
//   return {
//     type: SETDATA,
//     payload: product,
//   };
// };
// export const getData = () => {
//   return {
//     type: GETDATA,
//   };
// };

// export const setStatusProducts = (id) => {

//   return {
//     type: SETSTATUS,
//     payload: id,
//   };
// };
// export const fetchData = () => async (dispatch) => {
//   const res = await axios.get("https://2g8ge.sse.codesandbox.io/products");

//   dispatch({ type: SETDATA, payload: res.data });
// };

// const reducer = (state = initState, action) => {
//   switch (action.type) {
//     case GETDATA:
//       return {
//         ...state,
//       };
//     case SETDATA:

//       return {
//         ...state,
//         products: action.payload.products,
//         categoris: action.payload.categoris
//       };
//     case SETSTATUS:
//       let arr = [...state.products];
//       const index = arr.findIndex((item) => item.id === action.payload);
//       arr[index].favourite = !arr[index].favourite;
//       setDataSatus({
//         ...state,
//         products: arr,
//       });
//       return {
//         ...state,
//         products: arr,
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
 
};

const productsSlice = createSlice({
  name: "productsRedux",
  initialState,
  reducers: {
    setData(state, action) {
      state.products = action.payload;
     // state.categoris = action.payload.categoris;
    },
    setStatusProducts(state, action) {
      const index = state.products.findIndex(
        (item) => item.id === action.payload
      );
      state.products[index].favourite = !state.products[index].favourite;
    },
  },
});

export const { setData, setStatusProducts } = productsSlice.actions;
export default productsSlice.reducer;
