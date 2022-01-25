import { Button, Col, Row } from "reactstrap";
import React from "react";

const CartItem = (Props) => {
  const { item, onClickDelete, onClickSetCart, onClickReduce } = Props;
  console.log("asdasdas",item);
  return (
    <div className="cart-item">
      <Row>
        <Col xs="6" md="6" sm="6" lg="6">
          <Row>
            <Col xs="3" md="12" sm="12" lg="3">
         
                <img
                  className="cart-itemImage"
                  src={item ? item.image : ""}
                  alt="products"
                ></img>
           
            </Col>
            <Col xs="9" md="12" sm="12" lg="9">
              <h5 className="cartItem-name">{item.Ten}</h5>
            </Col>
          </Row>
        </Col>
        <Col xs="6" md="6" sm="12" lg="6">
          <Row>
            <Col xs="3" md="6" sm="12" lg="3">
              <div>
                <p className="cart-priceItem">Price:{item.GiaSP} ₫</p>
              </div>
            </Col>
            <Col xs="4" md="6" sm="6" lg="4">
              <div className="cart-itemGroup">
                <button
                  className="cart-itemGroupDecrease"
                  onClick={onClickReduce}
                >
                  -
                </button>

                <div className="cart-itemGroupCount">
                  <p>{item.SoLuong}</p>
                </div>

                <button
                  className="cart-itemGroupIncrease"
                  onClick={onClickSetCart}
                >
                  +
                </button>
              </div>
            </Col>
            <Col xs="2" md="7" sm="3" lg="2">
              <div>
                <p className="cart-priceItem">{item.SoLuong * item.GiaSP} ₫</p>
              </div>
            </Col>
            <Col xs="3" md="5" sm="3" lg="3">
              <div>
                <Button
                  className="cart-buttonItem"
                  color="success"
                  onClick={onClickDelete}
                >
                  Xóa
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
