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
      collectionTweets: [],
      apiurl: "//localhost:3000",
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
    toaster.notify(`Welcome, ${this.state.username}!!`, {
      duration: 3000
    })
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
      if(this.state.collections.length>0){
      this.setState({
        collections: [...this.state.collections, json]
      })}
      else {
        this.setState({collections: [json]})
      }
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
      .then(json=> {
      if(this.state.collectionTweets.length >0){
      this.setState({collectionTweets: [...this.state.collectionTweets, json]})}
      else {
        this.setState({collectionTweets: [json]})
      }
    })
      toaster.notify(`Tweet added to collection!`, {
        position: 'bottom-left',
        duration: 2000
      })
  }

  updateCollections = () => {
    fetch(this.state.apiurl + '/user_collections', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user_id: this.state.user_id})
    })
    .then(res => res.json())
    .then(json => this.setState({collections: json}))
  }

  deleteTweetFromState=(tweet)=> {
    let tempIndex = this.state.collectionTweets.indexOf(tweet)
    let newArray = [...this.state.collectionTweets]
    newArray.splice(tempIndex, 1)
    this.setState({collectionTweets: newArray})
  }

  updateSelectedCollection = (ev) => {
    fetch(this.state.apiurl + '/collection_tweets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({collection_id: ev.target.value})
    })
    .then(res=> res.json())
    .then(json =>
      this.setState({collectionTweets: json})
      )
  }

  render() {
    return (
     <div className="container">
      <img src="http://i.picasion.com/gl/89/b3qZ.gif" alt="logo"></img>
      <Router>
        <>
          {this.state.userExists ?
          <div className="loggedIn">
            <br/>
            <NavLink to="/search">Search</NavLink>
            {' || '}
            <NavLink to="/collections" onClick={this.updateCollections}>View My Collections</NavLink>
            <Route exact path="/collections" render={(props)=>(<CollectionContainer {...props} submitNewCollection={this.submitNewCollection} state={this.state} updateSelectedCollection={this.updateSelectedCollection} deleteTweetFromState={this.deleteTweetFromState}/>)}/>
            <Route exact path="/search" render={(props)=>(<SearchContainer {...props} state={this.state} searchSubmit={this.searchSubmit} searchResults={this.state.searchResults} addToCollection={this.addToCollection}/>)}/>
          </div>
          :
          <div className="signInPage">
            <NavLink to="/signin">Sign up or Login</NavLink>
            <Route exact path="/signin" render={(props)=>(<Signin {...props} signIn={this.signIn} signInSubmit={this.signInSubmit}/>)}/>
          </div>
          }
        </>
      </Router>
     </div>
    );
  }
}

export default App;
