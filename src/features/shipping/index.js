import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShippingAddress } from "../../redux/cart";
import CheckSteps from "../../components/checksteps.js";
import addressApi from "../../api/addressApi";
import Cookies from "js-cookie";
import ShipperImage from "../../assets/Shipper.png"
import {
  Container,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Card,
  Table,
  Button,
} from "reactstrap";
import "../../css/shipping.css";
import classnames from "classnames";
import { styled } from "@material-ui/core";
// import { set } from "@reduxjs/toolkit/node_modules/immer/dist/internal";
const Shipping = (Props) => {
  const [listAddress, setListAddress] = useState([]);
  const [fullname, setFullname] = useState();
  const [apartmentnumber, setApartmentnumber] = useState();
  const [wards, setWards] = useState();
  const [streetnames, setStreetNames] = useState();
  const [district, setDistrict] = useState();
  const [city, setCity] = useState();
  const [sdt, setSdt] = useState();
  const [country, setCountry] = useState();
  const [postalCode, setPostalCode] = useState();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const [activeTab, setActiveTab] = useState("1");
  const [option, setOption] = useState("1");
  const [change, setChange] = useState({
    status: "",
    currentPage: 1,
    keyword: "",
  });
  const userInfor = JSON.parse(Cookies.get("userInfor"));
  console.log(userInfor);
  if (!userInfor) {
    Props.history.push("/signin/redirect=/");
  }
  const toggle = (tab) => {
    console.log(tab);
    if (activeTab !== tab) setActiveTab(tab);
  };
  if (!userInfor) {
    Props.history.push("/signin?redirect=shipping");
  }
  if (!cartItems.length) {
    alert("cart is empty!");
    Props.history.push("/");
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      setShippingAddress({
        fullname,
        city,
        apartmentnumber,
        streetnames,
        wards,
        district,
        sdt,
      })
    );
    Props.history.push("/payment");
  };

  const submitHandler1 = (item) => {
    // e.preventDefault();
    dispatch(
      setShippingAddress({
        Id: item.Id,
        fullname: item.NguoiNhan,
        sdt: item.SDT,
        city: item.TinhTP,

        apartmentnumber: item.SoNhaTo,
        streetnames: item.Duong,
        wards: item.XaPhuong,
        district: item.QuanHuyen,
      })
    );
    Props.history.push("/payment");
  };
  useEffect(() => {
    try {
      const getAddress = async () => {
        const data = await addressApi.getDiaChiById(userInfor.Id);
        setListAddress(data);
      };
      getAddress();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="content">
      <CheckSteps step1 step2></CheckSteps>
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Nh???p ?????a ch???
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              ?????a ch??? c?? s???n
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>T??n ng?????i nh???n</th>
                      <th>S??? ??i???n tho???i</th>
                      <th>S??? nh??</th>
                      <th>???????ng</th>
                      <th>X??/Ph?????ng</th>
                      <th>Qu???n/Huy???n</th>
                      <th>T???nh/Th??nh Ph???</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {listAddress.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{item.Id}</th>
                          <td>{item?.NguoiNhan}</td>
                          <td>{item.SDT}</td>
                          <td>{item.SoNhaTo}</td>
                          <td>{item.Duong}</td>
                          <td>{item.XaPhuong}</td>
                          <td>{item.QuanHuyen}</td>
                          <td>{item.TinhTP}</td>
                          <td>
                            <Button onClick={() => submitHandler1(item)}>
                              Ch???n
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col className="image_Shipper" sm="1" md="5" lg="7">
                <img className="image_Shipper_img" src={ShipperImage}></img>
              </Col>
              <Col sm="11" md="7" lg="5">
                <Card body>
                  <form className="form-shipping" onSubmit={submitHandler}>
                    <h5>Shipping information</h5>
                    <label className="label-shipping" htmlFor="fullname">
                     T??n ng?????i nh???n h??ng
                    </label>
                    <br />
                    <input
                      className="input-shipping"
                      id="fullname"
                      type="text"
                      placeholder="Nh???p t??n ng?????i nh???n"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      required
                    ></input>
                    <br />
                    <label className="label-shipping" htmlFor="postalCode">
                      S??? ??i???n tho???i 
                    </label>
                    <br />
                    <input
                      className="input-shipping"
                      id="sdt"
                      type="text"
                      placeholder="Enter phone number"
                      value={sdt}
                      onChange={(e) => setSdt(e.target.value)}
                      required
                    ></input>
                    <br />

                    <label className="label-shipping" htmlFor="apartmentnumber">
                      S??? nh??
                    </label>
                    <br />
                    <input
                      className="input-shipping"
                      id="apartmentnumber"
                      type="text"
                      placeholder="Nh???p s??? nh??"
                      value={apartmentnumber}
                      onChange={(e) => setApartmentnumber(e.target.value)}
                      required
                    ></input>
                    <br />
                    <label className="label-shipping" htmlFor=" streetnames">
                      T??n ???????ng
                    </label>
                    <br />
                    <input
                      className="input-shipping"
                      id="streetnames"
                      type="text"
                      placeholder="Nh???p t??n ???????ng"
                      value={streetnames}
                      onChange={(e) => setStreetNames(e.target.value)}
                      required
                    ></input>
                    <br />
                    <label className="label-shipping" htmlFor="wards">
                      X??/Ph?????ng
                    </label>
                    <br />
                    <input
                      className="input-shipping"
                      id="wards"
                      type="text"
                      placeholder="Nh???p x??/ph?????ng"
                      value={wards}
                      onChange={(e) => setWards(e.target.value)}
                      required
                    ></input>
                    <br />
                    <label
                      className="label-shipping"
                      htmlFor="
district"
                    >
                      Qu???n
                    </label>
                    <br />
                    <input
                      className="input-shipping"
                      id="district"
                      type="text"
                      placeholder="Nh???p qu???n"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      required
                    ></input>

                    <br />
                    <label className="label-shipping" htmlFor="city">
                      Th??nh ph???
                    </label>
                    <br />
                    <input
                      className="input-shipping"
                      id="city"
                      type="text"
                      placeholder="Nh???p th??nh ph???"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    ></input>
                    {/* <br /> */}
                    {/* <label className="label-shipping" htmlFor="country">
                      Country
                    </label>
                    <br />
                    <input
                      className="input-shipping"
                      id="country"
                      type="text"
                      placeholder="Enter country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                    ></input>
                    <br /> */}
                    {/* <label className="label-shipping" htmlFor="postalCode">
                      Postal Code
                    </label>
                    <br />
                    <input
                      className="input-shipping"
                      id="postalCode"
                      type="text"
                      placeholder="Enter postal code"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      required
                    ></input> */}
                    <br />
                    <Button
                      color="success"
                      className="input-shipping button-shipping"
                      type="submit"
                    >
                      Continue
                    </Button>
                  </form>
                  {/* <Button>Go somewhere</Button> */}
                </Card>
              </Col>

              {/* <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col> */}
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default Shipping;
