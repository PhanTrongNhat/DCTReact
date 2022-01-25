import React from "react";
import { Row, Col } from "reactstrap";
const OrderItems = (Props) => {
  const { item } = Props;

  return (
    <Row className="orderItems">
      <Col sm="2">
        <b>{item.name}</b>
      </Col>

      <Col  sm="5">
        <img className="orderItems-image" src={item.image}></img>
      </Col>
      <Col  sm="2">
        <p>{item.GiaSP}{""}$</p>
      </Col>
      <Col sm="1">
      <p>{item.SoLuong}</p>
      </Col>
      <Col  sm="2">
        <p>total:{item.GiaSP * item.SoLuong}$</p>
      </Col>
    </Row>
  );
};
export default OrderItems;
