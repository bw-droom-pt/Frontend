import React from "react";

const Seeker = props => {
  return (
    <div>
      <p>First Name:</p>
      <p>Last Name:</p>
      <p>Email:{props.email}</p>
    </div>
  );
};

Seeker.defaultProps = {
  email: ""
};

export default Seeker;
