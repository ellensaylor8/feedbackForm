import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import { postFeedback } from '../../modules/services/services';

class Review extends Component {

    //post request to database once submit is selected
    //up to this point everything has been stored in store
    submitHandler = () => {
        postFeedback(this.props.store.feedbackReducer).catch((err) => {
            console.log('err: ', err)
        });
        this.props.history.push('/success')
    }

    render() {
        return (
            <div>
                <h1>Review Your Feedback</h1>
                <p>Feelings: {this.props.store.feedbackReducer.feelingToday}</p>
                <p>Understanding: {this.props.store.feedbackReducer.understandingContent}</p>
                <p>Support: {this.props.store.feedbackReducer.supported}</p>
                <p>Comment: {this.props.store.feedbackReducer.comment}</p>
                <button onClick={this.submitHandler}>SUBMIT</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Review);
