import React, { Component } from "react";
import axios from "axios";
import Seeker from "./Seeker";

class CareerSeekers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seekers: []
    };
  }

  componentWillMount() {
    this.getSeekers();
  }
  getSeekers() {
    axios
      .get("https://droom-buildweek-4-15-19.herokuapp.com/api/seekers/id")
      .then(res => this.setState({ seekers: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const seeker = this.state.seekers.map((seeker, i) => {
      return <li>{seeker}</li>;
    });
    return (
      <div>
        <h2>Job Seekers</h2>
        <Seeker email={seeker.email} id={seeker.id} key={seeker.id} />
      </div>
    );
  }
}

Seeker.defaultProps = {
  users: []
};

export default CareerSeekers;
