import React, { Component } from 'react'
import toaster from 'toasted-notes';

class DeleteTweetButton extends Component {

    tweeterDeleter= () => {
        if (window.confirm("Are you sure you want to delete this tweet from the collection?")) {
            fetch(this.props.apiurl + `/tweets/${this.props.tweet.id}`, {method: 'DELETE'}
            )
            this.props.deleteTweetFromState(this.props.tweet)
            toaster.notify(`Tweet removed from collection!`, {
                position: 'bottom-left',
                duration: 2000
            })
        }
    }

    render() {
        return (
            <>
            <button onClick={this.tweeterDeleter} className='pad'>Remove from collection</button>
            </>
        )
    }
}

export default DeleteTweetButton

