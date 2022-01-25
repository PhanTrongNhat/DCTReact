import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Cart from "./features/cart/index";
import Me from "./features/me/index";
import Home from "./features/products/items";
import Product from "./features/products/itemDetail";
import store,{persistor} from "./redux/store";
import Signin from "./features/me/signin";
import Profile from "./features/me/profile";
import Shipping from "./features/shipping/index";
import Payment from "./features/payment/index";
import PlaceOrder from "./features/placeOrder/index";
import ChatBox from './components/chatBox.js'
import Register from "./features/me/register"
import { PersistGate } from "redux-persist/integration/react";
// const config = {
//   apiKey: process.env.REACT_APP_FIREBASE_API,
//   authDomain: "webapp-b19a3.firebaseapp.com",
//   // ...
// };

// firebase.initializeApp(config);
function App() {
 
  // useEffect(() => {
  //   const unregisterAuthObserver = firebase
  //     .auth()
  //     .onAuthStateChanged(async (user) => {
  //       if (!user) {
  //         return;
  //       }
  //       // console.log("loggin username ",user);
  //       //const token = await user.getIdToken();
  //       // console.log("loggin token : ",token);
  //     });
  //   return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  // }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router>
            <Header></Header>

            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route exact path="/me" component={Me}></Route>
            <Route path="/product/:id" component={Product}></Route>
            <Route path="/signin" component={Signin}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/shipping" component={Shipping}></Route>
            <Route path="/payment" component={Payment}></Route>
            <Route path="/placeorder" component={PlaceOrder}></Route>
            <ChatBox></ChatBox>
            <Footer></Footer>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
