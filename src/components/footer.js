import React from "react";
import { Row, Col, Container, Button } from "reactstrap";
import "../css/footer.css";
import PhotoAndroid from "../assets/imageFooter/logo-chplay.png";
import PhotoIos from "../assets/imageFooter/logo-appStore.png";
const Example = () => {
  return (
    <div className="footer">
      <Container>
        <div className="wrap-footer">
          <Row>
            <Col sm={3}>
              <b className="text-1">Join to own group.</b>
            </Col>
            <Col sm={2}>
              <Button outline className="footer-button">
                Get Started
              </Button>
            </Col>
          </Row>

          <hr className="footer-hr" />
          <Row>
            <Col sm={4}>
              <div className="tb-column">
                <b>Your Account</b>
                <p>Sign up</p>
                <p>Log in</p>
                <p>Help</p>
              </div>
            </Col>
            <Col sm={4}>
              <div className="tb-column">
                <b>Discover</b>
                <p>Groups</p>
                <p>Calender</p>
                <p>Topics</p>
                <p>Cities</p>
              </div>
            </Col>
           
          </Row>

          <div className="wrap-logo">
            <div className="follow-us">
              <b>follow us</b>
              <div className="wrap-icon">
                <Row>
                  <Col>
                    <i id="footer-icon" className="fab fa-facebook"></i>

                    <i id="footer-icon" className="fab fa-twitter"></i>

                    <i id="footer-icon" className="fab fa-youtube"></i>

                    <i id="footer-icon" className="fab fa-instagram"></i>
                  </Col>

                  <Col md={{ span: 1, offset: 4 }}>
                    <div className="logo">
                      <img className="lg-img" src={PhotoAndroid} alt="icon" />
                    </div>
                  </Col>
                  <Col md={{ span: 1 }}>
                    <div>
                      <img className="lg-img" src={PhotoIos} alt="icon" />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div>
            <Row >
              <div className="footer-listEnd">
                <p>2020 Meetup</p>
              </div>

              <div className="footer-listEnd">
                <p>Terms of Service</p>
              </div>

              <div className="footer-listEnd">
                <p>Privacy Policy</p>
              </div>

              <div className="footer-listEnd">
                <p>Cookie Policy</p>
              </div>

              <div className="footer-listEnd">
                <p>Help</p>
              </div>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Example;
