import React, { Component } from 'react';

class CollectionList extends Component {
  render() {
    return (
      <div className="collectionList">
        <select>
          {this.props.state.collections.map(collection => {
            return <option value={collection.id} >{collection.name}</option>
          })}
        </select>
      </div>
    );
  }
}

export default CollectionList;
