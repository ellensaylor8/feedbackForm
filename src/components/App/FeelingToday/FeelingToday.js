import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';

class FeelingToday extends Component {

state = {
    feelingRating: 0,
}

feelingsHandler = () => {
    const feelingRating = this.state.feelingRating
    // const respondentId = event.target.dataset.id;
    // const responseObject = this.props.store.feedbackReducer;
    this.props.dispatch({type: 'SET_FEELINGS', payload: feelingRating});
  
    this.props.history.push('/understandingContent')

}

updateForm = (key) => (event) => {
    this.setState({
        [key]: event.target.value
    })
}

    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <input onChange={this.updateForm('feelingRating')} type="number" placeholder="Scale of 1-5" />
                <button onClick={this.feelingsHandler}>NEXT</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(FeelingToday);
