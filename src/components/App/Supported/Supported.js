import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';

class Supported extends Component {

    state = {
        supported: 0,
    }
    
    supportedHandler = () => {
        const supportedRating = this.state.supported
        this.props.dispatch({type: 'SET_SUPPORTED', payload: supportedRating});
        this.props.history.push('/comments')
    }
    
    updateForm = (key) => (event) => {
        this.setState({
            [key]: event.target.value
        })
    }
   
    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <input onChange={this.updateForm('supported')} type="number" placeholder="Scale of 1-5" />
                <button onClick={this.supportedHandler}>NEXT</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Supported);
