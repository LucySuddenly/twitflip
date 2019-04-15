import React, { Component } from 'react';
import './App.css';
import CollectionContainer from './components/CollectionContainer'
import SearchContainer from './components/SearchContainer'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import Signin from './components/Signin'

class App extends Component {
  constructor(){
    super()
    this.state ={
      userExists: true,
      username: "",
      user_id: "",
      searchResults: [],
      collections: ["ariana grande", "euphredes"],
      apiurl: "//localhost:3000"
    }
  }

  signIn = (ev) => {
    this.setState({username: ev.target.value})
  }

  signInSubmit = (ev) => {
    this.setState({userExists: true})
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
    .then(json => this.setState({
      searchResults: json["tweets"]
    }))
  }

  chooseCollection = () =>{
    console.log("inside collection choooooooser")
  }

  render() {
    return (
     <div className="App" id="box">
      <Router>
        <div>
          {this.state.userExists ?
          <>
            Welcome, {this.state.username}!! 
            <br/>
            <NavLink to="/search">Search</NavLink>
            {' || '}
            <NavLink to="/collections">View My Collections</NavLink>
            <Route exact path="/collections" render={(props)=>(<CollectionContainer {...props} state={this.state}/>)}/>
            <Route exact path="/search" render={(props)=>(<SearchContainer {...props} state={this.state} searchSubmit={this.searchSubmit} searchResults={this.state.searchResults}/>)}/>
          </>
          :
          <>
            <NavLink to="/signin">Sign up or Login</NavLink>
            <Route exact path="/signin" render={(props)=>(<Signin {...props} signIn={this.signIn} signInSubmit={this.signInSubmit}/>)}/>
          </>
          }
        </div>
        
      </Router>
     </div>
    );
  }
}

export default App; 

//saving this down here til i know exactly where i'm making the request
// let something
//     fetch(this.state.apiurl + 'collection', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify(something)
//       }
//       )
//       .then(response=>response.json())
//       .then(json =>
//         set the state with the json
//       )