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
            <label>Pick a Collection:</label>
            <select>
                {this.props.collections.map(collection => {
                    return <option value={collection}>{collection}</option>
                })}
            </select>
            </>
            :
            null}
            </>
        );
    }
}

export default SelectDropdown;
