import React, { Component } from "react";
import axios from "axios";

import logo from "../assets/images/logo.png";

import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";

class Register extends Component {
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
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image className="logo" src={logo} /> Please sign up to continue.
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
                  onClick={this.handleRegister}
                  color="teal"
                  fluid
                  size="large"
                >
                  Sign up
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default Register;
