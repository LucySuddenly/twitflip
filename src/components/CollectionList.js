import React, { Component } from 'react';
import Tweet from './Tweet.js'
import DeleteTweetButton from './DeleteTweetButton.js';
import toaster from 'toasted-notes';

class CollectionList extends Component {
  state ={
    currentCollectionName: "",
    currentCollectionId: "",
    showEditCollection: false
  }
  
  showEditCollection = () => {
    this.setState({showEditCollection: true})
  }

  updateCollectionInfo = (ev) => {
    ev.preventDefault()
    let option = document.getElementById(this.state.currentCollectionId)
    option.innerText = ev.target.children[1].value
    fetch(this.props.state.apiurl + `/collections/${this.state.currentCollectionId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({new_name: ev.target.children[1].value})
    })
    this.setState({showEditCollection: false})
    this.props.updateCollections()
    toaster.notify(`Name updated to ${ev.target.children[1].value}`)
    this.forceUpdate()
  }

  setCurrentCollection = (ev) => {
    let ele = document.getElementById(ev.target.value)
    this.setState({currentCollectionName: ele.innerText, currentCollectionId: ev.target.value})
    this.props.updateSelectedCollection(ev)
  }

  render() {
    return (
      <div className="collectionList">
      {this.props.state.collections.length > 0 ?
      <>
        <select onChange={(ev) => this.setCurrentCollection(ev)}>
          <option value={this.props.state.collections[0].id}>Select a Collection</option>
          {this.props.state.collections.map(collection => {
            return <option value={collection.id} id={collection.id}name={collection.name}>{collection.name}</option>
          })}
        </select>
        <button type="submit" onClick={this.showEditCollection}>Edit this collection</button>
        {this.state.showEditCollection ?
        <form onSubmit={(ev) => {this.updateCollectionInfo(ev)}} className="pad">
          <label>Name</label>
          <input type="text" placeholder={this.state.currentCollectionName}></input>
          <button type="submit">Update</button>
        </form>
        :
        null
        }
        {this.props.state.collectionTweets.map( tweet => {
            let newResult = {}
            newResult["__html"] = tweet.html

           return <>
           <Tweet html={newResult} />
           <DeleteTweetButton tweet={tweet} apiurl={this.props.state.apiurl} state={this.props.state} deleteTweetFromState={this.props.deleteTweetFromState}/>
           </>
        })}
        </>
        :
        null
      }
      </div>
    );
  }
}

export default CollectionList;
