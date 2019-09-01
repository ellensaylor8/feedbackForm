import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import './FeelingToday.css'
import { postFeedback, getFeedback } from '../../modules/services/services';


class FeelingToday extends Component {

state = {
    feelingRating: 0,
    disabled: true,
}

feelingsHandler = () => {
    const feelingRating = this.state.feelingRating
    this.props.dispatch({type: 'SET_FEELINGS', payload: feelingRating});
    this.props.history.push('/understandingContent')
    getFeedback().then((response) => {
        console.log(response);
    })
    // postFeedback(this.props.store.feedbackReducer).catch((err) => {
    //     console.log('err: ', err)
    //         });
console.log(this.props.store);
}

updateForm = (key) => (event) => {
    this.setState({
        [key]: event.target.value
    }, () => {
        if(this.state.feelingRating) {
            this.setState({
                disabled: false
            })
        } else {
            this.setState({
                disabled: true
            })
        }
    })
}


    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <input onChange={this.updateForm('feelingRating')} type="number" placeholder="Scale of 1-5" />
                <button disabled={this.state.disabled} onClick={this.feelingsHandler}>NEXT</button>
                <p>Response Required</p>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(FeelingToday);
