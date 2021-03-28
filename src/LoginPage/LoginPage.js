import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import { userActions } from "../actions"
import Myimage from "../assets/images/image2.jpg"
import "./styles.css"

class LoginPage extends React.Component {
  constructor(props) {
    super(props)

    // reset login status
    this.props.logout()

    this.state = {
      username: "",
      password: "",
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({ submitted: true })
    const { username, password } = this.state
    if (username && password) {
      this.props.login(username, password)
    }
  }

  render() {
    const { loggingIn } = this.props
    const { username, password, submitted } = this.state
    return (
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <div className="row no-gutters">
          <div className="col-md-4 no-gutters">
            <div
              style={{
                paddingTop: 60,
                paddingLeft: 30
                // backgroundColor: "green"
                // backgroundColor: "#9945f5"
              }}
            >
              <div className="parallelogram">
                <i class="bi bi-key-fill" style={{ paddingTop: 20 }}></i>
              </div>
            </div>
            <div
              className="leftside "
              style={
                {
                  // paddingTop: 50
                  // paddingLeft: 30,
                  // backgroundColor: "green"
                }
              }
            >
              <div style={{ paddingLeft: 40, paddingTop: 10 }}>
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
                    paddingTop: 10,
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
                  paddingTop: 40
                }}
              >
                <form
                  name="form"
                  onSubmit={this.handleSubmit}
                  style={{ marginLeft: 30, marginRight: 45 }}
                >
                  <div
                    className={
                      "form-group" +
                      (submitted && !username ? " has-error" : "")
                    }
                  >
                    <label htmlFor="username">Email address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                    />
                    {submitted && !username && (
                      <div className="help-block">Username is required</div>
                    )}
                  </div>
                  <div
                    className={
                      "form-group" +
                      (submitted && !password ? " has-error" : "")
                    }
                  >
                    <label htmlFor="password">Password</label>
                    <Link
                      style={{
                        marginLeft: 67,
                        paddingLeft: 88,
                        paddingBottom: 20
                      }}
                      to="/register"
                      className="btn btn-link"
                    >
                      Forget your password?
                    </Link>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                    {submitted && !password && (
                      <div className="help-block">Password is required</div>
                    )}
                  </div>
                  <div
                    className="BookButton"
                    style={{ paddingBottom: 20, paddingTop: 20 }}
                  >
                    <button
                      className="btn btn-primary"
                      style={{
                        width: "100%",
                        height: 50,
                        backgroundColor: "#9945f5"
                      }}
                    >
                      Sign in
                    </button>
                    {loggingIn && (
                      <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    )}
                    {/* <Link to="/register" className="btn btn-link">
                Register
              </Link> */}
                  </div>
                </form>
              </div>
              <div
                style={{
                  paddingBottom: 40,
                  paddingTop: 20,
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
    )
  }
}

function mapState(state) {
  const { loggingIn } = state.authentication
  return { loggingIn }
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
}

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage)
export { connectedLoginPage as LoginPage }
