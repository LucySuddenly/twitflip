import React, { Component } from 'react';
import './App.css';
import CollectionContainer from './components/CollectionContainer';
import SearchContainer from './components/SearchContainer';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Signin from './components/Signin';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      userExists: false,
      username: "",
      user_id: "",
      searchResults: [],
      collections: [],
      apiurl: "//localhost:3000"
    }
  }

  signIn = (ev) => {
    this.setState({username: ev.target.value})
  }

  signInSubmit = (ev) => {
    ev.preventDefault()
    this.setState({userExists: true})
    let tempUser = {username: ev.target.children[1].value}
    fetch(this.state.apiurl + '/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(tempUser)
    })
    .then(response=>response.json())
    .then(json=>
      this.setState({user_id: json.id}, () => {
        fetch(this.state.apiurl + '/user_collections', {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({user_id: this.state.user_id})
        })
        .then(resp => resp.json())
        .then(json => this.setState({
          collections: json
        }))
      })
    )
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

  submitNewCollection = (ev, collectionName) => {
    ev.preventDefault()
    fetch(this.state.apiurl + "/collections", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({name: collectionName, user_id: this.state.user_id})
    })
    .then(resp => resp.json())
    .then(json =>{

      toaster.notify(`${collectionName} added to collections!`, {
        position: 'bottom-left',
        duration: 2000
      })
      this.setState({
        collections: [...this.state.collections, json]
      })
    }
    )
  }

  addToCollection = (ev, tweet) =>{
    ev.preventDefault()
    let postData = {user_id: this.state.user_id, collection_id: ev.target.children[1].value, html: tweet}
    fetch(this.state.apiurl + '/tweets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(postData)
      }
      )
      toaster.notify(`Tweet added to collection!`, {
        position: 'bottom-left',
        duration: 2000
      })
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
            <Route exact path="/collections" render={(props)=>(<CollectionContainer {...props} submitNewCollection={this.submitNewCollection} state={this.state}/>)}/>
            <Route exact path="/search" render={(props)=>(<SearchContainer {...props} state={this.state} searchSubmit={this.searchSubmit} searchResults={this.state.searchResults} addToCollection={this.addToCollection}/>)}/>
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
