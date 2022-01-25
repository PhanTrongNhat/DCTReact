import React from "react";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";
//import cartApi from "../../api/cartApi";
import "../../css/cart.css";
//import { setShippingAddress } from "../../redux/cart";
//import CartEmpty from "./cartEmpty";
import Items from "./items";

const CartIndex = (Props) => {
  //const count = useSelector((state) => state.cart.count);
  const userSignin = useSelector((state) => state.auth);
  const { userInfor } = userSignin;
  console.log(userInfor);
  if (!userInfor) {
    Props.history.push("/signin");
  }
  //const dispatch = useDispatch();
  // useEffect(() => {
  //   const fetchCartList = async () => {
  //     try {
  //       // const params = { _page: 1, _limit: 10 };
  //       const response = await cartApi.getAll();

  //       dispatch(setShippingAddress(response));
  //       console.log("Fetch products successfully: ", response);
  //     } catch (error) {
  //       console.log("Failed to fetch product list: ", error);
  //     }
  //   };
  //   fetchCartList();
  // }, [dispatch]);

  return (
    <div className="content">
      <Items />
    </div>
  );
};

export default CartIndex;
