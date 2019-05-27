import React, { Component } from "react";
import axios from "axios";

import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

class Login extends Component {
  constructor(props) {
    super(props);
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
  handleLogin = e => {
    e.preventDefault();
    axios
      .post(
        "https://droom-buildweek-4-15-19.herokuapp.com/api/auth/login",
        this.state
      )
      .then(res => {
        console.log(this.state);
        console.log(res);
        localStorage.setItem("token", res.data.token);
        console.log(res.data);
      })
      .catch(err => {
        console.log("err.message", err);
        localStorage.removeItem("token");
      });
  };
  render() {
    return (
      <div>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image className="logo" src={logo} /> Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="E-mail address"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />

                <Button
                  onClick={this.handleLogin}
                  color="teal"
                  fluid
                  size="large"
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <NavLink to="/register">
              <Message>
                New to us? <a href="#">Sign Up</a>
              </Message>
            </NavLink>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default Login;
