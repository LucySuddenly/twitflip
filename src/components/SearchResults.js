import React, { Component } from 'react';
import SelectDropdown from './SelectDropdown'
import Tweet from './Tweet'


class SearchResults extends Component {

  render() {
    return (
      <div>
        {this.props.searchResults.map(result => {
          let newResult = {}
          newResult["__html"] = result
            return <div>
              <Tweet html={newResult} />
            
            
              <SelectDropdown tweet={result} chooseCollection={this.props.chooseCollection} collections={this.props.state.collections}/>
            </div>
        })}
      </div>
    );
  }
}

export default SearchResults;
