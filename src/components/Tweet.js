import React, { Component } from 'react';
import $ from 'jquery'

class Tweet extends Component {

  render() {
    $.getScript("https://platform.twitter.com/widgets.js")
    return (
      <div dangerouslySetInnerHTML={this.props.html} className="tweet">
      </div>
    );
  }
}

export default Tweet;
