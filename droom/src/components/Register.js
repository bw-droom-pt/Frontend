import React from 'react';

export const Register = () => {
  return (
    <div className='ui container'>
      <h2>Register</h2>
      <form className='ui form'>
        <div className='field'>
          <label>Name</label>
          <div className='two fields'>
            <div className='field'>
              <input type='text' name='firstName' placeholder='First Name' />
            </div>
            <div class='field'>
              <input type='text' name='lastName' placeholder='Last Name' />
            </div>
          </div>
        </div>
        <div className='field'>
          <label>Email</label>
          <input type='email' name='email' placeholder='Email' />
        </div>
        <div className='field'>
          <label> Create Password</label>
          <input type='password' name='password' placeholder='Password' />
        </div>
        <button className='ui button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};
