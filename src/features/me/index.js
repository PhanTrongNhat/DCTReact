import React from "react";
import { useSelector } from "react-redux";
import "../../css/me.css";
//import { loadData } from "../../redux/auth";
import Login from "./signin";
import Profile from "./profile";

const Me = () => {
 // const dispatch = useDispatch();
  const sign = useSelector((state) => state.auth.userInfor);
  
  return <div>{sign === false ? <Login></Login> : <Profile></Profile>}</div>;
};

export default Me;
