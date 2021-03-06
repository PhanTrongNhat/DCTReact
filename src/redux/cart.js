// import axios from "axios";
// const SETCART = "SETCART";
// const SETCARTCOUNT = "SETCARTCOUNT";
// const LOADDATA = "GETDATA";
// const GETLENGTH = "GETLENGTH";
// const DELETEITEM = "DELETEITEM";
// const REDUCEITEM = "REDUCEITEM";
// const setData = async (data) =>
//   await axios
//     .post("https://2g8ge.sse.codesandbox.io/cart", data)
//     .catch((error) => {
//       console.log(error);
//     });
// const initState = {
//   items: [],
//   total: 0,
//   count: 0,
// };

// // action get data
// export const loadData = () => async (dispatch) => {
//   const res = await axios.get("https://2g8ge.sse.codesandbox.io/cart");
//   dispatch({ type: LOADDATA, payload: res.data });
// };

// export const reduceItem = (id) => {
//   return {
//     type: REDUCEITEM,
//     payload: id,
//   };
// };

// export const setCart = (item) => {
//   return {
//     type: SETCART,
//     payload: {...item},
//   };
// };
// export const setCartCount = (item) => {
//   return {
//     type: SETCARTCOUNT,
//     payload: { ...item },
//   };
// };
// export const deleteItem = (id) => {
//   return {
//     type: DELETEITEM,
//     payload: id,
//   };
// };
// export const getLengthCart = () => {
//   return {
//     type: GETLENGTH,
//   };
// };

// //reducer
// const reducer = (state = initState, action) => {
//   switch (action.type) {
//     case REDUCEITEM: {
//       let arr, index;
//       arr = [...state.items];
//       index = arr.findIndex((item) => item.id === action.payload);

//       if (arr[index].count === 1) {
//         state.count--;
//         state.total -= arr[index].cost;
//         arr.splice(index, 1);
//         setData({ ...state, items: arr });
//         return {
//           ...state,
//           items: arr,
//         };
//       } else {
//         arr[index].count--;
//         state.count--;
//         state.total -= arr[index].cost;
//         setData({ ...state, items: arr });
//         return {
//           ...state,
//           items: arr,
//         };
//       }
//     }

//     case LOADDATA: {
//       return {
//         ...state,
//         ...action.payload,
//       };
//     }

//     case SETCART: {
//       //khai b??o m???ng t???m v?? bi???n l??u index s???n ph???m trong gi??? h??ng
//       let arr, temp;
//       arr = [...state.items];
//       temp = arr.findIndex((item) => item.id === action.payload.id);

//       //ki???m tra s???n ph???m t???n t???i ??? gi??? h??ng ch??a
//       if (state.count === 0 || temp === -1) {
//         //c???ng bi???n th??m 1 v?? update gi??? h??ng

//         action.payload.count = 1;
//         arr.push(action.payload);
//         state.count++;
//         state.total += action.payload.cost;
//         //storeData({ ...state, items: arr });
//         setData({ ...state, items: arr });
//         return {
//           ...state,
//           items: arr,
//         };
//       } //c???ng bi???n th??m 1 v?? update gi??? h??ng

//       arr[temp].count++;
//       state.count++;
//       state.total += action.payload.cost;

//       setData({ ...state, items: arr });
//       return {
//         ...state,
//         items: arr,
//       };
//     }

//     case DELETEITEM: {
//       let arr = [...state.items];
//       //t??m v??? tr?? ph???n t??? c???n x??a
//       let index = arr.findIndex((item) => item.id === action.payload);
//       state.total -= arr[index].cost * arr[index].count;
//       state.count -= arr[index].count;
//       arr.splice(index, 1);
//       setData({ ...state, items: arr });

//       return {
//         ...state,
//         items: arr,
//       };
//     }
//     case SETCARTCOUNT: {
//       //khai b??o m???ng t???m v?? bi???n l??u index s???n ph???m trong gi??? h??ng
//       let arr, index;
//       arr = [...state.items];
//       index = arr.findIndex((item) => item.id === action.payload.id);
//       console.log(state);
//       //ki???m tra s???n ph???m t???n t???i ??? gi??? h??ng ch??a
//       if (action.payload.count === 0) {
//         return {
//           ...state,
//         };
//       }
//       if (state.count === 0 || index === -1) {
//         //c???ng bi???n th??m 1 v?? update gi??? h??ng
//         arr.push(action.payload);
//         state.count += action.payload.count;
//         state.total += action.payload.count * action.payload.cost;
//         //storeData({ ...state, items: arr });
//         setData({ ...state, items: arr });
//         return {
//           ...state,
//           items: arr,
//         };
//       } //c???ng bi???n th??m 1 v?? update gi??? h??ng
//       arr[index].count += action.payload.count;
//       state.count += action.payload.count;
//       state.total += action.payload.cost * action.payload.count;
//       setData({ ...state, items: arr });
//       return {
//         ...state,
//         items: arr,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export default reducer;
import { createSlice } from "@reduxjs/toolkit";
//import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

const initialState = {
  cartItems: [],
  shippingAddress: {
    idDiaChi: null,
    fullname: null,
    apartmentnumber: null,
    streetnames: null,
    wards: null,
    district: null,
    city: null,

    sdt: null,
  },
  paymentMethod: null,
};

const cartSlice = createSlice({
  name: "cartRedux",
  initialState,
  reducers: {
    setShippingAddress(state, action) {
      state.shippingAddress.fullname = action.payload.fullname;
      state.shippingAddress.apartmentnumber = action.payload.apartmentnumber;
      state.shippingAddress.streetnames = action.payload.streetnames;
      state.shippingAddress.wards = action.payload.wards;
      state.shippingAddress.district = action.payload.district;
      state.shippingAddress.city = action.payload.city;
      state.shippingAddress.idDiaChi = action.payload.Id;
      state.shippingAddress.sdt = action.payload.sdt;
    },
    setPaymentMethod(state, action) {
      state.paymentMethod = action.payload.paymentMethod;
    },
    reduceItem(state, action) {
      let index;

      index = state.cartItems.findIndex((item) => item.Id === action.payload);

      if (state.cartItems[index].SoLuong > 0) {
        state.cartItems[index].SoLuong--;
      }
    },
    addToCart(state, action) {
      console.log("add", action.payload);
      let index;
      if (action.payload.id) {
        index = state.cartItems.findIndex(
          (item) => item.Id === action.payload.id
        );
      } else {
        index = state.cartItems.findIndex(
          (item) => item.Id === action.payload.Id
        );
      }

      if (index === -1) {
        state.cartItems.push({
          Id: action.payload.id || action.payload.Id,
          Ten: action.payload.ten || action.payload.Ten,
          SoLuong: action.payload.count,
          image: action.payload.hinhAnh?.Url || action.payload.image,
          GiaSP: action.payload.giaSP || action.payload.GiaSP,
        });
      } else {
        console.log("cart", state.cartItems[index].count);
        state.cartItems[index].SoLuong += action.payload.count;
      }
    },
    raiseCart(state, action) {
      console.log("raise", action.payload);
      let index = state.cartItems.findIndex(
        (item) => item._id === action.payload.Id
      );

      //ki???m tra s???n ph???m t???n t???i ??? gi??? h??ng ch??a
      if (state.count === 0 || index === -1) {
        //c???ng bi???n th??m 1 v?? update gi??? h??ng

        action.payload.count = 1;
        state.items.push(action.payload);
        state.count++;
        state.total += action.payload.giaSP;
        //storeData({ ...state, items: arr });
        //setData({ ...state, items: arr });
      } //c???ng bi???n th??m 1 v?? update gi??? h??ng

      state.items[index].count++;
      state.count++;
      state.total += action.payload.giaSP;

      // setData({ ...state, items: arr });
      // return {
      //   ...state,
      //   items: arr,
      // };
    },
    deleteItem(state, action) {
      //t??m v??? tr?? ph???n t??? c???n x??a
      let index = state.cartItems.findIndex(
        (item) => item._id === action.payload
      );

      state.cartItems.splice(index, 1);
      // setData({ ...state, items: arr });

      // return {
      //   ...state,
      //   items: arr,
      // };
    },
    setCartCount(state, action) {
      //khai b??o m???ng t???m v?? bi???n l??u index s???n ph???m trong gi??? h??ng

      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(index);
      //ki???m tra s???n ph???m t???n t???i ??? gi??? h??ng ch??a
      if (state.count === 0 || index === -1) {
        //c???ng bi???n th??m 1 v?? update gi??? h??ng
        state.items.push(action.payload);
        state.count += action.payload.count;
        state.total += action.payload.count * action.payload.cost;
        //storeData({ ...state, items: arr });
        // setData({ ...state, items: arr });
        // return {
        //   ...state,
        //   items: arr,
        // };
      } else {
        state.items[index].count += action.payload.count;
        state.count += action.payload.count;
        state.total += action.payload.cost * action.payload.count;
      } //c???ng bi???n th??m 1 v?? update gi??? h??ng

      // setData({ ...state, items: arr });
      // return {
      //   ...state,
      //   items: arr,
      // };
    },
    deleteCart(state, action) {
       state.cartItems = [];
    },
   
  },
});

export const {
  setShippingAddress,
  setPaymentMethod,
  reduceItem,
  raiseCart,
  deleteItem,
  setCartCount,
  addToCart,
  deleteCart,
} = cartSlice.actions;
export default cartSlice.reducer;
