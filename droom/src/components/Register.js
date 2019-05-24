import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleRegister = e => {
    e.preventDefault();
    axios
      .post(
        "https://droom-buildweek-4-15-19.herokuapp.com/api/auth/register",
        this.state
      )
      .then(res => {
        console.log(this.state);
        console.log(res);
        localStorage.setItem("token", res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  render() {
    return (
      <div>
        <form>
          <h3>Please sign up to continue.</h3>
          <h4>Enter Your Username</h4>
          <label htmlFor="email" />
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Username"
          />

          <h4>Enter Your Password</h4>
          <label htmlFor="password" />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button onClick={this.handleRegister} type="submit">
            Log in
          </button>
        </form>
      </div>
    );
  }
}
export default Register;
