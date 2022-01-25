import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "../../css/products.css";
import Rating from "./rating";
const Example = (Props) => {
  const { item } = Props;

  return (
    <div className="products-item" style={{ position: "relative" }}>
      <Link to={`/product/${item.id || item.Id}`}>
        <img
          className="products-itemImage"
          src={item.hinhAnh?.Url || item.HinhSanPham?.Url}
          alt="item"
        ></img>
        {/* <div className="icon-heart">
        <i className="fab fa-gratipay"></i>
      </div> */}
        <div style={{ position: "absolute", bottom: 40, right: 15 }}>
          <Rating number={(parseInt(item.giaSP) % 10) / 2}></Rating>
        </div>

        <h6 style={{ position: "absolute", bottom: 10, left: 5 }}>
          <div className="name">{item.ten || item.Ten}</div>
        </h6>
        <p style={{ position: "absolute", right: 15, bottom: 0 }}>
          ${item.giaSP || item.GiaSP}
        </p>

        <div>
          {/* <Link
          to={{
            pathname: "/product",
            state: item, // your data array of objects
          }}
        >
          <Button className="products-itemButton">Buy</Button>
        </Link> */}
          {/* <Link to={`/product/${item.id}`}>
          <Button className="products-itemButton">Buy</Button>
        </Link> */}
        </div>
      </Link>
    </div>
  );
};

export default Example;
