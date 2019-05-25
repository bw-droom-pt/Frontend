import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  // componentDidMount() {
  //   this.props.getSeeker();
  // }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addSeekerSubmit = e => {
    e.preventDefault();
    axios
      .post(
        'https://droom-buildweek-4-15-19.herokuapp.com/api/auth/register',
        this.state
      )
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data);
        console.log(res.data);
        this.props.history.push('/careerseekers');
      })
      .catch(err => {
        console.log(err.message);
      });
    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    return (
      <div className='ui container'>
        <h2>Register</h2>
        <form className='ui form' onSubmit={this.addSeekerSubmit}>
          <div className='field'>
            <label>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={this.state.email}
              onChange={this.changeHandler}
            />
          </div>
          <div className='field'>
            <label> Create Password</label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.changeHandler}
            />
          </div>
          <button className='ui button' type='submit'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
