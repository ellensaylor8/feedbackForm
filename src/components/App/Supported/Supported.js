import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import './Supported.css'

class Supported extends Component {

    state = {
        supported: 0,
        disabled: true,
    }

    //captures updated state and dispatches to reducer in index.js
    supportedHandler = () => {
        const supportedRating = this.state.supported
        this.props.dispatch({ type: 'SET_SUPPORTED', payload: supportedRating });
        this.props.history.push('/comments')
        console.log('SUPPORTED', this.props.store)
    }

    //updates state based on user input
    updateForm = (key) => (event) => {
        this.setState({
            [key]: event.target.value
        }, () => {
            if (this.state.supported) {
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
                <h1>How well are you being supported?</h1>
                <input onChange={this.updateForm('supported')} type="number" placeholder="Scale of 1-5" />
                <button disabled={this.state.disabled} onClick={this.supportedHandler}>NEXT</button>
                <p>Response Required</p>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Supported);
