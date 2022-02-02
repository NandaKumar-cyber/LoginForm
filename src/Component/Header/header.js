import React, { Component, Fragment } from "react";
import "./header.style.css";
import { Link, withRouter } from "react-router-dom";
import { LOCALSTORAGE_KEYS } from "../../constants";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
    this.onLogOut = this.onLogOut.bind(this);
  }

  onLogOut = () => {
    localStorage.removeItem(LOCALSTORAGE_KEYS.SESSION_ID);
    window.dispatchEvent(new Event("storage"));
    this.props.history.push("/login");
  };

  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={this.onLogOut} to="/login">
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default withRouter(Header);
