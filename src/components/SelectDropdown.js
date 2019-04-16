import React, { Component } from 'react';

class SelectDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSelect: false
        }
    }
    

    showCollect = () => {
        this.setState({showSelect: true})
      }

    render() {
        return (
            <>
                <button onClick={this.showCollect}>Save Tweet to Collection</button>
                { this.state.showSelect ?
            <>
                <form onSubmit={(ev)=>{this.props.addToCollection(ev, this.props.tweet)}}>
                <label>Pick a Collection:</label>
                <select>
                    {this.props.collections.map(collection => {
                        return <option value={1}>{collection}</option>
                    })}
                </select>
                <button type="onClick">Add</button>
                </form>
            </>
            :
                null}
            </>
        );
    }
}

export default SelectDropdown;
