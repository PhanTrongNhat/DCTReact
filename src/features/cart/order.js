import { useSelector } from "react-redux";
import { Button, Col, Row } from "reactstrap";
import React from 'react'
import { withRouter} from 'react-router-dom';
const CartOrder = (Props) => {
  const items = useSelector((state) => state.cart.cartItems);
  const total = items.reduce(function(prev, cur) {
    return prev + cur.GiaSP*cur.SoLuong;
  }, 0);

const handleOrder = ()=>{
  Props.history.push('/signin?redirect=shipping');
  
}
  return (
    <div className="cart-order">
      <Row>
        <Col xs="3" sm={{ offset: 1,size:12 }} md={{ offset: 1,size:6 }} lg={{size:7, offset: 1 }}>
          <div>
            <h4>
              <p>Tổng thanh toán ({items.length} Sản phẩm):</p>
            </h4>
          </div>
        </Col>
        <Col>
          <h4>
            <b className="cart-priceOrder">₫{total}</b>
          </h4>
        </Col>
        <Col>
          <div>
            <Button
              className="cart-buttonBuy"
              color="success"
              onClick={handleOrder}
            >
              Mua Hàng
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter( CartOrder);
