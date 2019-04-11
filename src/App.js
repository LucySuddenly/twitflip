import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CollectionContainer from './components/CollectionContainer'
import SearchContainer from './components/SearchContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CollectionContainer/>
        <SearchContainer/>
      </div>
    );
  }
}

export default App;
