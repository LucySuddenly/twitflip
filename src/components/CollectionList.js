import React, { Component } from 'react';
import Tweet from './Tweet.js'

class CollectionList extends Component {
  constructor(){
    super()
    this.state = {
      selectedCollectionIndex: 0
    }
  }

  updateSelectedCollection = (ev) => {
    this.setState({selectedCollectionIndex: ev.target.selectedIndex})
  }

  render() {
    return (
      <div className="collectionList">
        <select onChange={(ev) => this.updateSelectedCollection(ev)}>
          {this.props.state.collections.map(collection => {
            return <option value={collection.id} >{collection.name}</option>
          })}
        </select>
        {this.props.state.collections[this.state.selectedCollectionIndex].tweets.map( tweet => {
            let newResult = {}
            newResult["__html"] = tweet.html

           return <Tweet html={newResult} />
        })}

      </div>
    );
  }
}

export default CollectionList;
