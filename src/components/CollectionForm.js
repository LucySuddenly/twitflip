import React, { Component } from 'react';

class CollectionForm extends Component {
  constructor(){
    super()
    this.state = {
      newCollectionName: ""
    }
  }

  updateNewCollection = (ev) => {
    this.setState({
      newCollectionName: ev.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(ev) => this.props.submitNewCollection(ev, this.state.newCollectionName)} className='pad collectionForm'>
        <label for="newCollection">New Collection:</label>
        <input type="text" value={this.state.newCollectionName} name="newCollection" onChange={(ev) => this.updateNewCollection(ev)}></input>
        <button name="Submit">Submit</button>
      </form>
    );
  }
}

export default CollectionForm;
