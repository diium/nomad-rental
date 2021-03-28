import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { userActions } from "../actions"
import Myimage from "../assets/images/image2.jpg"
function RegisterPage() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: ""
  })
  const [submitted, setSubmitted] = useState(false)
  const registering = useSelector((state) => state.registration.registering)
  const dispatch = useDispatch()

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout())
  }, [])

  function handleChange(e) {
    const { name, value } = e.target
    setUser((user) => ({ ...user, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    setSubmitted(true)
    if (user.firstName && user.lastName && user.username && user.password) {
      dispatch(userActions.register(user))
    }
  }

  return (
    <div>
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <div className="row no-gutters">
          <div className="col-md-4 no-gutters">
            <div
              style={{
                // paddingTop: 60,
                paddingLeft: 30
              }}
            >
              <div className="parallelogram">
                <i class="bi bi-key-fill"></i>
              </div>
            </div>
            <div className="leftside ">
              <div style={{ paddingLeft: 40 }}>
                <p>Hi there!</p>
              </div>
              <div style={{ paddingLeft: 40 }}>
                <p style={{ color: "gray", font: 12 }}>
                  Sign in to manage your listings and booking <br />
                  requests on Nomad Rental
                </p>
              </div>
              <div>
                <Link
                  to="/#"
                  className="btn btn-link"
                  style={{
                    color: "#00bfff",
                    paddingBottom: 40,
                    // paddingTop: 10,
                    paddingLeft: 30
                  }}
                >
                  <i class="bi bi-chevron-right">
                    Learn more about our premium subscription
                  </i>
                </Link>
              </div>
              <div
                style={{
                  backgroundColor: "#e0e0e0",
                  paddingBottom: 20,
                  paddingTop: 10
                }}
              >
                <div className="col-lg-8 offset-lg-2">
                  <h2>Register</h2>
                  <form name="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleChange}
                        className={
                          "form-control" +
                          (submitted && !user.firstName ? " is-invalid" : "")
                        }
                      />
                      {submitted && !user.firstName && (
                        <div className="invalid-feedback">
                          First Name is required
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleChange}
                        className={
                          "form-control" +
                          (submitted && !user.lastName ? " is-invalid" : "")
                        }
                      />
                      {submitted && !user.lastName && (
                        <div className="invalid-feedback">
                          Last Name is required
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        className={
                          "form-control" +
                          (submitted && !user.username ? " is-invalid" : "")
                        }
                      />
                      {submitted && !user.username && (
                        <div className="invalid-feedback">
                          Username is required
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        className={
                          "form-control" +
                          (submitted && !user.password ? " is-invalid" : "")
                        }
                      />
                      {submitted && !user.password && (
                        <div className="invalid-feedback">
                          Password is required
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary">
                        {registering && (
                          <span className="spinner-border spinner-border-sm mr-1"></span>
                        )}
                        Register
                      </button>
                      <Link to="/login" className="btn btn-link">
                        Cancel
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
              <div
                style={{
                  paddingBottom: 40,
                  paddingTop: 10,
                  paddingLeft: "15%"
                }}
              >
                <p>
                  Don't have an account?{" "}
                  <Link to="/register" className="btn btn-link">
                    Sign up now
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-8 no-gutters"
            // style={{ backgroundColor: "red", width: "60%" }}
          >
            <img
              // className="image"
              src={Myimage}
              alt="Myimage"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { RegisterPage }
