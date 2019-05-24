import React, { Component } from "react";

import { About } from "./components/About";
import { Home } from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { Team } from "./components/Team";
import { Route, Link } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    console.log("mounted");
  }
  render() {
    return (
      <div className="App">
        <h1>Droom</h1>
        <div className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/team">Team</Link>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/team" component={Team} />
      </div>
    );
  }
}
export default App;
