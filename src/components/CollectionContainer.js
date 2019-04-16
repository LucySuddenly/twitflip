import React, { Component } from 'react';
import CollectionForm from './CollectionForm'
import CollectionList from './CollectionList'

class CollectionContainer extends Component {
  render() {
    return (
      <div>
        <CollectionForm submitNewCollection={this.props.submitNewCollection}/>
        <CollectionList state={this.props.state} updateSelectedCollection={this.props.updateSelectedCollection} deleteTweetFromState={this.props.deleteTweetFromState}/>
      </div>
    );
  }
}

export default CollectionContainer;