import React, { Component } from 'react';

class Signin extends Component {
  
  render() {
    return (
      <>
        <form onSubmit={this.props.signInSubmit} className='link'>
        <label>Username:</label>
        <input type="text" id="username" value={this.props.username} onChange={this.props.signIn}></input>
        <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default Signin;
