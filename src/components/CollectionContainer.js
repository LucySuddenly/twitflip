import React, { Component } from 'react';
import CollectionForm from './CollectionForm'
import CollectionList from './CollectionList'

class CollectionContainer extends Component {
  render() {
    return (
      <div>
        <CollectionForm submitNewCollection={this.props.submitNewCollection}/>
        <CollectionList/>
      </div>
    );
  }
}

export default CollectionContainer;
