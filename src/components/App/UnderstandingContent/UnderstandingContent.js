import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';

class UnderstandingContent extends Component {

    state = {
        understandingContent: 0,
    }
    
    understandingHandler = () => {
        const understandingRating = this.state.understandingContent
        this.props.dispatch({type: 'SET_UNDERSTANDING', payload: understandingRating});
        this.props.history.push('/supported')
        console.log(this.props.store);
    }
    
    updateForm = (key) => (event) => {
        this.setState({
            [key]: event.target.value
        })
    }
   
    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <input onChange={this.updateForm('understandingContent')} type="number" placeholder="Scale of 1-5" />
                <button onClick={this.understandingHandler}>NEXT</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(UnderstandingContent);
