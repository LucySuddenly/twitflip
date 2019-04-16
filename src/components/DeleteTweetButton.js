import React, { Component } from 'react'

class DeleteTweetButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            staaate: "is here"
        }
    }

    tweeterDeleter= () => {
        fetch(this.props.apiurl + `/tweets/${this.props.tweet.id}`, {method: 'DELETE'}
        )
        this.props.deleteTweetFromState()
    }

    render() {
        return (
            <>
            <button onClick={this.tweeterDeleter}>Remove from collection</button>
            </>
        )
    }
}

export default DeleteTweetButton

