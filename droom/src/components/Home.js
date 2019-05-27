import React, { Component } from "react";
import droom from "../assets/images/droom.jpg";

import { Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("mounted");
  }
  render() {
    return (
      <div className="container">
        <h2 className="content-title title-one">Find Your</h2>
        <h2 className="content-title title-two">Dream</h2>
        <h2 className="content-title title-three">Job!</h2>

        <img className="droomBg" src={droom} alt="droom" />

        <div className="loginBtn">
          <Button.Group style={{ marginLeft: 280 }}>
            <NavLink to="/login">
              <Button style={{ paddingLeft: 50 }}>Log in</Button>
            </NavLink>
            <Button.Or />
            <NavLink to="/register">
              <Button style={{ paddingRight: 50 }} positive>
                Sign up
              </Button>
            </NavLink>
          </Button.Group>
        </div>
      </div>
    );
  }
}
export default Home;
