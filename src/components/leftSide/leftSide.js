import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

// import { userActions } from '../_actions';
import "./styles.css"
import { userActions } from "../../actions"
import { Button } from "react-bootstrap"
import {
  GearFill,
  PersonBadge,
  LifePreserver,
  ArrowUpRightSquare,
  ToggleOn
} from "react-bootstrap-icons"
// import { Link } from "react-router-dom"
export default function Booking() {
  const users = useSelector((state) => state.users)
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
    <div className="bodyContainer" style={{ paddingTop: 60 }}>
      <div>
        <div className="parallelogram">
          <p>
            {firstName}
            {lastName}
          </p>
        </div>
      </div>
      <div className="userName">
        <span>
          {user.firstName} {user.lastName}
        </span>
        <p>Premium Nomad</p>
      </div>
      <div className="BookButton">
        <Link style={{ color: "gray", paddingLeft: 5 }} to="/booking">
          <Button className="bookingButton" variant="primary" size="md" block>
            Booking{" "}
          </Button>
        </Link>
      </div>
      <div className="Refer">
        <PersonBadge /> Refer and Earn{" "}
      </div>
      <div className="Settings">
        <GearFill />
        <Link style={{ color: "gray", paddingLeft: 5 }} to="/account">
          Account Settings
        </Link>
        {/* <GearFill /> Account Settings{" "} */}
      </div>
      <div className="support">
        <span>SUPPORT</span>
      </div>
      <div className="Contact">
        <LifePreserver /> Contact us{" "}
      </div>
      <div className="FAQ">
        <ArrowUpRightSquare /> FAQ{" "}
      </div>
      <div className="signout">
        <Link style={{ color: "gray", paddingLeft: 5 }} to="/login">
          <ToggleOn color={"#383CC1"} /> Sign Out
        </Link>{" "}
      </div>
    </div>
    // </div>
  )
}
