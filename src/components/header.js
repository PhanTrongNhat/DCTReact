import React, { useState } from "react";
//import { Col, Row } from "reactstrap";
//import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import { Link } from "react-router-dom";
import "../css/header.css";
import Logo from "../assets/logo192.png";

import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Example = (Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  let history = useHistory();
  

  const toggle = () => setIsOpen(!isOpen);
  const searchHandle = async () => {
    if (search === "") {
      history.push("/");
    } else {
      history.push("/home?name=" + search);
    }
    // const listProduct = await productApi.searchByName(search);
    // console.log("list", listProduct);
    // if (listProduct.length > 0) {
    //   // setProducts(listProduct);
    // }
    setSearch("");
  };
  return (
    <div className="header">
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            {" "}
            <img className="header-logo" src={Logo} alt="logo"></img>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />

          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link className="header-item" to="/home">
                  HOME
                </Link>
              </NavItem>
              <NavItem>
                <Link className="header-item" to="/cart">
                  CART
                </Link>
              </NavItem>
              <NavItem>
                <Link className="header-item" to="/signin">
                  ME
                </Link>
              </NavItem>
            </Nav>
            <InputGroup className="search-box">
              <Input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Nhập từ khoá"
                value={search}
              />
              <InputGroupText
                style={{ backgroundColor: "#69D84F",color:"white" }}
                onClick={() => searchHandle()}
              >
                Tìm kiếm
              </InputGroupText>
            </InputGroup>
          </Collapse>
        </Navbar>
      </div>

      {/* <Row>
        <Col md={{ size: 1, offset: 1 }}>
          <img className="header-logo" src={Logo} alt="logo"></img>
        </Col>
        <Col md={{ size: 1, offset: 2 }}>
        
        </Col>
        <Col md={{ size: 1 }}>
          <div className="header-item">
            <div>
              <i className="fas fa-heart"></i>
            </div>

            <Link to="wishlist">Wishlist</Link>
          </div>
        </Col>
        <Col md={{ size: 1 }}>
          <div className="header-item">
            <div>
              <i className="fas fa-shopping-cart"></i>
            </div>
            <Link to="/cart">Cart</Link>
          </div>
        </Col>
        <Col md={{ size: 1 }}>
          <div className="header-item">
            <div>
              <i className="fas fa-user-alt"></i>
            </div>
            <Link to="/signin">Me</Link>
          </div>
        </Col>
        <hr></hr>
      </Row> */}
    </div>
  );
};

export default withRouter(Example);
