import React, { Component } from 'react';

class Signin extends Component {
  
  render() {
    return (
      <div>
        <form onSubmit={this.props.signInSubmit}>
        <label>Username:</label>
        <input type="text" id="username" value={this.props.username} onChange={this.props.signIn}></input>
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Signin;
