import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useLocation } from "react-router-dom";
import { Button, Col, Row, Container } from "reactstrap";
import "../../css/products.css";
import { addToCart } from "../../redux/cart";
import productApi from "../../api/productApi";
import Avatar from "react-avatar";
import Comment from "./comment";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DetailProduct = (Props) => {
  const dispatch = useDispatch();
  const productId = Props.match.params.id;
  const [item, setItem] = useState({});
  const [comment, setComment] = useState();
  // const [commentList, setCommentList] = useState();
  const userInfor = useSelector((state) => state.auth.userInfor);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await productApi.getId(productId);
      console.log(product);
        setItem({ ...product.data });
        console.log(item.comments);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProduct();
  }, [item.comment]);
  // const location = useLocation();
  // let item = { ...location.state };
  const [count, setCount] = useState(0);

  let addItem = () => {
    try {
        if (count) {
          item.count = count;

          dispatch(addToCart({ ...item }));
          setCount(0);
          toast.success("Thêm sản phẩm vào giỏ hàng thành công!")
        }
    } catch (error) {
      toast.warning("Thêm sản phẩm thất bại!");
    }
  
  };
  const checkoutHandler = () => {
    if (count) {
      item.count = count;
      dispatch(addToCart({ ...item }));
      setCount(0);
       Props.history.push("/cart");
    }
  };
  const handleChange = (event) => {
    setComment(event.target.value);
  };
  const handleSubmitComment = (e) => {
    e.preventDefault();
    const callApi = async () => {
      await productApi.postComment({
        content: comment,
        userId: userInfor._id,
        username: userInfor.username,
        _id: productId,
      });
    };
    callApi();
  };
  return (
    <div className="content">
      <ToastContainer />;
      <Row className="product-detail">
        <Col xs="4" md="4" sm="4" lg="4">
          <Carousel>
            <img
              className="product-detailImage"
              src={item.hinhAnh ? item.hinhAnh.Url : ""}
              alt="item"
            ></img>
            <img
              className="product-detailImage"
              src={item.hinhAnh ? item.hinhAnh.Url : ""}
              alt="item"
            ></img>
            <img
              className="product-detailImage"
              src={item.hinhAnh ? item.hinhAnh.Url : ""}
              alt="item"
            ></img>
            <img
              className="product-detailImage"
              src={item.hinhAnh ? item.hinhAnh.Url : ""}
              alt="item"
            ></img>
            <img
              className="product-detailImage"
              src={item.hinhAnh ? item.hinhAnh.Url : ""}
              alt="item"
            ></img>
            <img
              className="product-detailImage"
              src={item.hinhAnh ? item.hinhAnh.Url : ""}
              alt="item"
            ></img>
          </Carousel>
        </Col>
        <Col
          xs={{ size: 6, offset: 1 }}
          md={{ size: 6, offset: 1 }}
          sm={{ size: 6, offset: 1 }}
          lg={{ size: 6, offset: 1 }}
        >
          {/* <div className="product-detailProduct"> */}
          <Row className="product-detailBorderCount ">
            <Col
              xs="12"
              md="12"
              sm="12"
              lg={{ size: "12" }}
              className="product-detailName"
            >
              <h2>{item.ten}</h2>
              <p>Cost: ${item.giaSP}</p>
            </Col>
            <Col xs="12" md="12" sm="12" lg="12">
              <Row>
                <Col
                  xs={{ size: "1", offset: "3" }}
                  md={{ size: "1", offset: "4" }}
                  sm={{ size: "1", offset: "3" }}
                  lg={{ size: "1", offset: "4" }}
                  className="p-reduce"
                >
                  {" "}
                  <button
                    className="p-Button"
                    onClick={count > 0 ? () => setCount(count - 1) : () => {}}
                  >
                    -
                  </button>
                </Col>
                <Col xs="2" md="2" sm="2" lg="2" className="p-count">
                  {" "}
                  <div xs="2" md="2">
                    {count}
                  </div>
                </Col>
                <Col xs="1" md="1" sm="1" lg="1" className="p-increase">
                  {" "}
                  <button
                    onClick={() => setCount(count + 1)}
                    className="p-Button "
                  >
                    +
                  </button>
                </Col>
              </Row>
            </Col>

            <Col xs="12" md="12" sm="12" lg="6">
              <Button
                onClick={() => addItem()}
                className="products-detailAddToCart"
                color="warning"
              >
                Add to cart
              </Button>
            </Col>
            <Col xs="12" md="12" sm="12" lg="6">
              <Button
                onClick={checkoutHandler}
                color="success"
                className="products-detailBuy"
              >
                Buy
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="product-describe">
        <h5>Describe:</h5>
        <p>{item.moTa}</p>
      </Row>
      <Row className="product-comment">
        <Col sm="1" className="comment-title">
          {" "}
          <b>Comment()</b>
        </Col>

        {userInfor ? (
          <form className="comment-form">
            <Row>
              <Col xs="2" md="1" lg="1" sm="2" style={{ textAlign: "center" }}>
                <Avatar
                  className="usercomment-avatar"
                  size="50"
                  name={userInfor.username}
                  round={true}
                />
                <b>{userInfor.username}</b>
              </Col>
              <Col xs="10" md="11" lg="11" sm="10">
                <textarea
                  className="comment-input"
                  placeholder="Enter your comment"
                  name="Text1"
                  onChange={handleChange}
                ></textarea>
              </Col>
            </Row>

            <Row>
              <Col sm={{ offset: 1 }}>
                <Button
                  disabled
                  className="comment-buttonSubmit"
                  onClick={handleSubmitComment}
                >
                  post
                </Button>
              </Col>
            </Row>
          </form>
        ) : (
          ""
        )}

        {item.comments === [] || item.comments
          ? item.comments.map((product) => (
              <Comment key="" item={product}></Comment>
            ))
          : ""}
      </Row>
    </div>
  );
};

export default DetailProduct;
