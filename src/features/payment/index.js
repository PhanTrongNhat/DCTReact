import React,{useState} from "react";
 import { useDispatch, useSelector  } from "react-redux";
 import { setPaymentMethod} from "../../redux/cart";
import CheckSteps from "../../components/checksteps.js";
import { Container } from "reactstrap";
import "../../css/payment.css";
const Payment = (Props) => {
  const [paymentMethod, setpaymentMethod] = useState('Paypal');
  //   const [postalCode, setPostalCode] = useState();
  //   const dispatch = useDispatch();
  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     dispatch(setCartData({ fullname, address, city, country, postalCode }));
  //   };
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.auth);

  const {userInfor} = userSignin;
  if (!userInfor) {
   Props.history.push('/signin?redirect=payment');
 }
const handleSubmit = (e)=>{
  e.preventDefault();
  dispatch(setPaymentMethod({paymentMethod}));
Props.history.push('/placeorder');
  


}
  return (
    <Container className="content">
      <CheckSteps step1 step2 step3></CheckSteps>
      <form className="form-payment" onSubmit={handleSubmit}>
        <h5>Payment</h5>
        <label className="payment-label" htmlFor="Paypall">
          Paypal
        </label>
        <br></br>
        <input
          className="payment-input"
          type="radio"
          id="Paypal"
          value="Paypal"
          name="method-payment"
          onChange={(e) => setpaymentMethod(e.target.value)}
          required
          checked
        ></input>
        <br />

        <label className="payment-label" htmlFor="momo">
          Momo
        </label>
        <br></br>
        <input
          className="payment-input"
          type="radio"
          id="momo"
          value="Momo"
          name="method-payment"
          onChange={(e) => setpaymentMethod(e.target.value)}
          required
        ></input>
        <br />

        <label className="payment-label" htmlFor="shipCOD">
          Ship CODE
        </label>
        <br></br>
        <input
          className="payment-input"
          type="radio"
          id="shipCOD"
          value="Ship COD"
          name="method-payment"
          onChange={(e) => setpaymentMethod(e.target.value)}
          required
        ></input>
        <br />

        <button className="button-payment" type="submit">
          Continue
        </button>
      </form>
    </Container>
  );
};

export default Payment;
