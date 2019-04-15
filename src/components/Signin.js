import React, { Component } from 'react';

class Signin extends Component {
  
  render() {
    return (
      <div>
        <label>Username:</label>
        <input type="text" id="username" value={this.props.username} onChange={this.props.signIn}></input>
        <button type="submit" onClick={this.props.signInSubmit}>Submit</button>
      </div>
    );
  }
}

export default Signin;
