import React from "react"
import { Row, Col } from "react-bootstrap"

import Logo from "./logo.png"
function Nav() {
  return (
    <div>
      <div style={{ paddingTop: 20 }}>
        <Row style={{ paddingLeft: "5%" }}>
          <Col lg={2} md={2} xs={6} className="left-bar">
            <div>
              <div className="logo">
                <img src={Logo} />
              </div>
            </div>
          </Col>
          <Col lg={10} md={10} xs={6} style={{ paddingLeft: 70 }}>
            <div>
              <div
                className="bookingText"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "80%"
                  // paddingTop: 10
                }}
              >
                <div style={{ color: "gray" }}>Choose a city</div>
                <div class="wrapper" style={{ paddingTop: 20 }}>
                  <div class="hamburger">
                    <div class="first"></div>
                    <div class="second"></div>
                    <div class="third"></div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Nav
