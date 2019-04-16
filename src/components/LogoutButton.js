import React, { Component } from 'react';

class LogoutButton extends Component {

    logout = () => {
        localStorage.removeItem("user_id")
        window.location.reload()
    }
    render() {
        return (
            <button onClick={this.logout}>Logout</button>
        );
    }
}

export default LogoutButton;
