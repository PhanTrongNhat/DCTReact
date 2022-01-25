import React from "react";
import "../css/shipping.css"
import { Row,Col } from "reactstrap";
const checksteps = (Props) => {
  return (
    <Row>      
      <Col className={Props.step1? "checkStep-active":"checkStep"} >SignIn</Col>
      <Col className={Props.step2? "checkStep-active":"checkStep"}>Shipping</Col>
      <Col  className={Props.step3? "checkStep-active":"checkStep"}>Payment</Col>
      <Col className={Props.step4? "checkStep-active":"checkStep"}>Place Order</Col>
    </Row>
  );
};

export default checksteps;
