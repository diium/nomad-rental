import React from "react"
import { connect } from "react-redux"

import { userActions } from "../actions"
import Join from "./Join"
class HomePage extends React.Component {
  componentDidMount() {
    this.props.getUsers()
    this.state = { value: "coconut" }
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value)
    event.preventDefault()
  }

  render() {
    const { user, users } = this.props
    return (
      <>
        <Join />
      </>
    )
  }
}

function mapState(state) {
  const { users, authentication } = state
  const { user } = authentication
  return { user, users }
}

const actionCreators = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage)
export { connectedHomePage as HomePage }
