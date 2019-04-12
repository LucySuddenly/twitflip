import React, { Component } from 'react';
import Tweet from './Tweet'


class SearchResults extends Component {



  render() {
    return (
      <div>
        {this.props.searchResults.map(result => {
          let newResult = {}
          newResult["__html"] = result
          return <Tweet html={newResult}/>
        })}
      </div>
    );
  }
}

export default SearchResults;
