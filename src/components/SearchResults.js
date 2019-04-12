import React, { Component } from 'react';
import Tweet from './Tweet'

class SearchResults extends Component {
  render() {
    return (
      <div>
        {this.props.searchResults.map(result => {
          return <Tweet html={result}/>
        })}
      </div>
    );
  }
}

export default SearchResults;
