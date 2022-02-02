import React, { Component, Fragment } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import Header from "./Component/Header/header";
import Register from "./Component/Auth/Register";
import Home from "./Component/Homepage/home";
import Login from "./Component/Auth/Login";
import Dashboard from "./Component/Dashboard/Dashboard";
import { LOCALSTORAGE_KEYS } from './constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: localStorage.getItem(LOCALSTORAGE_KEYS.SESSION_ID)
        ? true
        : false,
    };
  }

  componentDidMount() {
    window.addEventListener("storage", () => {
      let isSessionAvailable = localStorage.getItem(
        LOCALSTORAGE_KEYS.SESSION_ID
      );
      console.log(isSessionAvailable);
      if (isSessionAvailable) {
        this.setState(
          {
            isAuthenticated: true,
          },
          () => {
            console.log(this.state.isAuthenticated);
          }
        );
      } else {
        this.setState({
          isAuthenticated: false,
        });
      }
    });
  }

  render() {
    return (
      <Fragment>
        <Router>
          <header>
            <Header />
          </header>
          <main>
            <Switch>
              <Route path="/login" exact 
              render={() =>
                this.state.isAuthenticated ? (
                  <Redirect to="/dashboard" />
                ) : (
                  <Login/>
                )
              } />
              <Route
                path="/dashboard"
                render={() =>
                  this.state.isAuthenticated ? (
                    <Dashboard />
                  ) : (
                    <Redirect to="/dashboard" />
                  )
                }
              />
              <Route path="/register" exact component={Register} />
              <Route path="/home" exact component={Home} />
            </Switch>
          </main>
        </Router>
      </Fragment>
    );
  }
}

export default withRouter(App);
