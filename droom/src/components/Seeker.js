import React from 'react';

const Seeker = props => {
  return (
    <div>
      <p>First Name:</p>
      <p>Last Name:</p>
      <p>Email:{props.email}</p>
      <br />
      <button
      // onClick={e => {
      //   seeker.deleteUser(e, seeker.id);
      // }}
      >
        Delete Seeker
      </button>
    </div>
  );
};

Seeker.defaultProps = {
  email: ''
};

export default Seeker;
