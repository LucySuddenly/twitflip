import React, { Component } from 'react'

class DeleteTweetButton extends Component {

    tweeterDeleter= () => {
        fetch(this.props.apiurl + `/tweets/${this.props.tweet.id}`, {method: 'DELETE'}
        )
        this.props.deleteTweetFromState(this.props.tweet)
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

