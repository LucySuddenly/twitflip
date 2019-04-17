import React, { Component } from 'react';
import CollectionForm from './CollectionForm'
import CollectionList from './CollectionList'

class CollectionContainer extends Component {

  componentDidMount(){
    this.props.updateCollections()
  }

  render() {
    return (
      <div>
        <CollectionForm submitNewCollection={this.props.submitNewCollection}/>
        <CollectionList state={this.props.state} updateSelectedCollection={this.props.updateSelectedCollection} deleteTweetFromState={this.props.deleteTweetFromState} showEditForm={this.props.showEditForm} updateCollections={this.props.updateCollections}/>
      </div>
    );
  }
}

export default CollectionContainer;