import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CollectionContainer from './components/CollectionContainer'
import SearchContainer from './components/SearchContainer'

class App extends Component {
  constructor(){
    super()
    this.state ={
      searchResults: [],
      apiurl: "//localhost:3000"
    }
  }


  searchSubmit = (ev, state) => {
    ev.preventDefault()
    fetch(this.state.apiurl + "/search", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(state)
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
  }

  render() {
    return (
      <div className="App">
        <CollectionContainer/>
        <SearchContainer searchSubmit={this.searchSubmit} searchResults={this.state.searchResults}/>
      </div>
    );
  }
}

export default App;
