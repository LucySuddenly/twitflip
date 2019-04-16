import React, { Component } from 'react';
import SelectDropdown from './SelectDropdown'
import Tweet from './Tweet'


class SearchResults extends Component {

  render() {
    return (
      <>
        {this.props.searchResults.map(result => {
          let newResult = {}
          newResult["__html"] = result
            return <>
              <Tweet html={newResult} />
            
            
              <SelectDropdown tweet={result} chooseCollection={this.props.chooseCollection} collections={this.props.state.collections} addToCollection={this.props.addToCollection}/>
            </>
        })}
      </>
    );
  }
}

export default SearchResults;
