import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import './FeelingToday.css'



class FeelingToday extends Component {

    state = {
        feelingRating: 0,
        disabled: true,
    }

    //captures response from updateForm and dispatches to reducer to update feelingToday property
    feelingsHandler = () => {
        const feelingRating = this.state.feelingRating
        this.props.dispatch({ type: 'SET_FEELINGS', payload: feelingRating });
        this.props.history.push('/understandingContent')
    }

    //updates state and changes disabled attribute on button depending on whether user has entered value
    updateForm = (key) => (event) => {
        this.setState({
            [key]: event.target.value
        }, () => {
            if (this.state.feelingRating) {
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
