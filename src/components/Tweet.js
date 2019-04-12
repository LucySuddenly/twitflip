import React, { Component } from 'react';

class Tweet extends Component {
  render() {
    return (
      <div>
        {this.props.html}
      </div>
    );
  }
}

export default Tweet;
