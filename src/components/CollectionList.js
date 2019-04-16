import React, { Component } from 'react';
import Tweet from './Tweet.js'
import DeleteTweetButton from './DeleteTweetButton.js';

class CollectionList extends Component {
  

  render() {
    return (
      <div className="collectionList">
      {this.props.state.collections.length > 0 ?
      <>
        <select onChange={(ev) => this.props.updateSelectedCollection(ev)}>
          <option value={this.props.state.collections[0].id}>Select a Collection</option>
          {this.props.state.collections.map(collection => {
            return <option value={collection.id} >{collection.name}</option>
          })}
        </select>
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
