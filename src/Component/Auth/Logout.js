import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>Successfully Logged Out</h3>
        <span>Click Here To Log In</span>

        <p>
          <Link to="/login">Login</Link>
        </p>
      </div>
    );
  }
}

export default withRouter(Logout);
