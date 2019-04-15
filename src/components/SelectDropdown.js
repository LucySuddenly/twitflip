import React, { Component } from 'react';

class SelectDropdown extends Component {
    render() {
        return (
            <>
            <label>Pick a Collection:</label>
            <select>
                {this.props.collections.map(collection => {
                    return <option value={collection}>{collection}</option>
                })}
            </select>
            </>
        );
    }
}

export default SelectDropdown;
