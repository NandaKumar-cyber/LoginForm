import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    try {
      let { email, password, userName } = this.state;
      localStorage.setItem(email, JSON.stringify({ userName, password }));
      this.props.history.push("/login");

      this.setState({
        userName: "",
        password: "",
        email: "",
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Fragment>
        <section className="vh-100 align-items-center justify-content-center d-flex registerComponent">
          <div className=" col-md-3 mx-auto">
            <div className="card-body card">
              <h1 className="h4">Create account</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="userName">Username</label>
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
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    value={this.state.email}
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
                  <button className="a-button-primary btn-block my-4">
                    Create your Account
                  </button>

                  <hr />
                  <span>Already Registered</span>

                  <p>
                    <Link to="/login">Login</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(Register);

