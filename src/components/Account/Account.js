import React, { useEffect } from "react"
// import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import "./styles.css"
import { Col, Button, Form } from "react-bootstrap"
import { ChevronRight, PersonLinesFill } from "react-bootstrap-icons"

import { userActions } from "../../actions"
export default function Booking() {
  const user = useSelector((state) => state.authentication.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.getAll())
  }, [])

  function handleDeleteUser(id) {
    dispatch(userActions.delete(id))
  }
  console.log("user", user)
  const str = user.firstName
  const firstName = str.charAt(0)
  const str1 = user.lastName
  const lastName = str1.charAt(0)
  return (
    <div>
      <div
        className="booking-container"
        style={{ width: "100%", height: "100%" }}
      >
        <h4 className="bookingText">Account</h4>
        <div style={{ marginBottom: 10, paddingTop: 10 }}>
          <sub className="bookingText">
            Review and update your account details
          </sub>
          <p className="longText">
            Pleae make sure these details are up to date as they'll be used for
            your bookings, <br /> and communications with the hotels.
          </p>
          <a
            className="longText"
            href="premium"
            // style={{ paddingTop: 10, paddingBottom: 10 }}
          >
            <ChevronRight size="15" /> Learn more about our premium subscription
          </a>
        </div>

        <div className="image-info-Account">
          <Form
            style={{
              padding: 20,
              // backgroundColor: "green",
              borderRadius: 15
            }}
          >
            <Form.Row>
              <Form.Group as={Col} md="1" controlId="formGridName">
                <PersonLinesFill size={44} />
              </Form.Group>

              <Form.Group as={Col} md="10" controlId="formGridEmail">
                <div>
                  <h3>
                    {user.firstName} {user.lastName}
                  </h3>
                  <p className="longTextAccount">
                    Please make sure these details are up to date as they'll be
                    used for your bookings, <br /> and communications with the
                    hotels.
                  </p>
                </div>
              </Form.Group>
            </Form.Row>
            <div className="formGridName">
              <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder={user.firstName + " " + user.lastName}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="text" placeholder={user.username} />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCountry">
                  <Form.Label>Country</Form.Label>
                  <Form.Control as="select" defaultValue="Thailand">
                    <option>Thailand</option>
                    <option>Malaysia</option>
                    <option>Singapor</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>&nbsp; </Form.Label>
                  <Form.Control placeholder="(0) 052 2332 3232"></Form.Control>
                </Form.Group>
              </Form.Row>
              <hr />
              <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control type="password" placeholder="******" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridNewpas">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control type="text" placeholder="New password" />
                </Form.Group>
              </Form.Row>
            </div>
            <Form.Row className="classButton">
              <div style={{ float: "right" }}>
                Your data will be{" "}
                <i style={{ color: "#23C4ED" }}> handled with care</i>
                &nbsp;&nbsp;&nbsp;
                <Button className="classButton1" type="submit">
                  Update
                </Button>
              </div>
            </Form.Row>
          </Form>
        </div>
        <div className="padding-top"></div>
        {/* </Col>
        </Row> */}
      </div>
    </div>
  )
}
