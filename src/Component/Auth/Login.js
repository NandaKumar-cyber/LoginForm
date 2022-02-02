import { json } from "body-parser";
import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import {LOCALSTORAGE_KEYS} from "../../constants"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    let { userName } = this.state;
    console.log(userName)
    let userData = localStorage.getItem(userName);
    console.log(userData);
    if (userData&&userData.userName === this.state.userName) {
      this.props.history.push("/dashboard");
    }
    let myuuid = uuidv4();
    console.log(myuuid)
    localStorage.setItem(LOCALSTORAGE_KEYS.SESSION_ID,myuuid)
    window.dispatchEvent(new Event("storage"))
    this.setState({
      userName: "",
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <Fragment>
        <section className="vh-100 align-items-center justify-content-center d-flex registerComponent">
          <div className=" col-md-3 mx-auto">
            <div className="card-body card">
              <h1 className="h4">Login</h1>

              <div className="form-group">
                <label htmlFor="email">UserName</label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="userName"
                  required
                  value={this.state.userName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <button
                  className="a-button-primary btn-block my-4"
                  onClick={this.handleSubmit}
                >
                  Login
                </button>
              </div>

              <hr />
              <span>New User..! </span>

              <p>
                <Link to="/register">Create your Account</Link>
              </p>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(Login);
