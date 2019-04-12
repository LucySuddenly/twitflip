import React, { Component } from 'react';

class Tweet extends Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={this.props.html}>
      </div>
    );
  }
}

export default Tweet;
