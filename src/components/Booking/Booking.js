import React from "react"
import "./styles.css"

import {
  ChevronRight,
  CheckCircleFill,
  ClockFill,
  StarFill,
  CalendarCheck,
  Receipt
} from "react-bootstrap-icons"

import img from "./stayIn.svg"
// import Logo from "./logo.png"
export default function Booking() {
  return (
    <div
      className="booking-container"
      style={{ width: "100%", height: "100%" }}
    >
      <h4 className="bookingText">Booking</h4>
      <div style={{ marginBottom: 10, paddingTop: 10 }}>
        <sub className="bookingText">
          Review and update your account details
        </sub>
        <p className="longText">
          Please update with the properity if your travel plans should change or
          if you wish to make any changes to your stay.
        </p>
        <a className="longText1" href="premium" style={{ paddingBottom: 20 }}>
          <ChevronRight size="15" /> Learn more about our premium subscription
        </a>
      </div>

      <div className="image-info-container">
        <div className="image">
          <img src={img} alt="img" />
        </div>

        <div className="Thegreen">
          <div>
            <div className="bookedInfo">
              <div className="booked-desc-bg">
                <strong className="bookingTextView">The Green View</strong>
                <div className="Recieved">
                  <CheckCircleFill /> Booking request Recieved
                </div>
                <div className="Awaiting">
                  <ClockFill /> Awaiting confirmation from Hotel{" "}
                </div>
              </div>
              <hr></hr>
              <div className="booked-desc-bg">
                <strong className="Superior">Superior Premium</strong>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around"
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      paddingLeft: 1
                    }}
                  >
                    <p style={{ paddingTop: 10, color: "grey" }}>
                      <CalendarCheck /> Check-in
                    </p>
                    <p>July 19th, 2021</p>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ paddingTop: 10, color: "grey" }}>
                      <Receipt /> Refrence
                    </p>
                    <p>#UC311K</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingBottom: 20 }}>
            <div
              className="booked-desc"
              style={{ paddingLeft: 20, paddingTop: 10 }}
            >
              <span
                style={{
                  color: "green",
                  display: "flex"
                }}
              >
                <StarFill color={"green"} style={{ marginTop: 5 }} />
                <p style={{ paddingLeft: 10 }}>Rate your stay</p>
              </span>
            </div>
            <div style={{ paddingTop: 5, paddingBottom: 5 }}>
              <hr />
            </div>
            <div
              className="booked-desc"
              style={{ paddingLeft: 20, paddingBottom: 8 }}
            >
              <span style={{ color: "grey" }}>
                <i class="bi bi-cursor-fill"></i>

                <ion-icon name="navigate-outline"></ion-icon>
                <p style={{ paddingLeft: 10 }}>Email the property</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
