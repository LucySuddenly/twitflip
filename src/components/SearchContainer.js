import React, { Component } from 'react';
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

class SearchContainer extends Component {
  render() {
    return (
      <div className="searchContainer">
        <SearchForm searchSubmit={this.props.searchSubmit}/>
        <SearchResults searchResults={this.props.searchResults} saveTweet={this.props.saveTweet} state={this.props.state} chooseCollection={this.props.chooseCollection}/>
      </div>
    );
  }
}

export default SearchContainer;
