import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FeelingToday from '../FeelingToday/FeelingToday';

class Success extends Component {

    //resets data and kicks back to first page
    newFeedbackHandler = () => {
        this.props.store.feedbackReducer = [];
    }

    render() {
        return (
            <div>
                <h1>Feedback Submitted!</h1>
                <h1>Thank you!</h1>
                <Router>
                    <div>
                        <Link to="/"><button onClick={this.newFeedbackHandler}>Leave New Feedback</button></Link>
                        <Route exact path="/" component={FeelingToday} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Success);
