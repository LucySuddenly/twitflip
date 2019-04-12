import React, { Component } from 'react';
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

class SearchContainer extends Component {
  render() {
    return (
      <div>
        <SearchForm searchSubmit={this.props.searchSubmit}/>
        <SearchResults searchResults={this.props.searchResults}/>
      </div>
    );
  }
}

export default SearchContainer;
