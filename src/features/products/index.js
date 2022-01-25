import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import productApi from "../../api/productApi";
import "../../css/content.css";
import { setData } from "../../redux/products";
import Detail from "./itemDetail";
import Items from "./items";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        // const params = { _page: 1, _limit: 10 };
        const response = await productApi.getAll();

        dispatch(setData(response));
        // console.log("Fetch products successfully: ", response.data);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, [dispatch]);

  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            <Items></Items>
          </Route>
          <Route exact path="/product">
            <Detail></Detail>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default Home;
