import React from "react"

import { Router, Route, Switch, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { history } from "./helpers"
import { alertActions } from "./actions"
import { PrivateRoute } from "./components"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { RegisterPage } from "./RegisterPage"
import Booking from "./components/Booking/main"
import Account from "./components/Account/Main"
class App extends React.Component {
  constructor(props) {
    super(props)

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts()
    })
  }

  render() {
    const { alert } = this.props
    return (
      <div style={{ backgroundColor: "#ededed", height: "100%" }}>
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/booking" component={Booking} />
            <Route path="/account" component={Account} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    )
  }
}

function mapState(state) {
  const { alert } = state
  return { alert }
}

const actionCreators = {
  clearAlerts: alertActions.clear
}

const connectedApp = connect(mapState, actionCreators)(App)
export { connectedApp as App }
