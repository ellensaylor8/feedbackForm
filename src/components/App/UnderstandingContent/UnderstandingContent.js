import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import './UnderstandingContent.css'

class UnderstandingContent extends Component {

    state = {
        understandingContent: 0,
        disabled: true,
    }
    
    understandingHandler = () => {
        const understandingRating = this.state.understandingContent
        this.props.dispatch({type: 'SET_UNDERSTANDING', payload: understandingRating});
        this.props.history.push('/supported')
        console.log('Understanding Content', this.props.store);
    }

    goBackHandler = () => {
        this.props.history.push('/') 
    }
    
    updateForm = (key) => (event) => {
        this.setState({
            [key]: event.target.value
        }, () => {
            if(this.state.understandingContent) {
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
                <h1>How well are you understanding the content?</h1>
                <button onClick={this.goBackHandler}>BACK</button>
                <input onChange={this.updateForm('understandingContent')} type="number" placeholder="Scale of 1-5" />
                <button disabled={this.state.disabled} onClick={this.understandingHandler}>NEXT</button>
                <p>Response Required</p>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(UnderstandingContent);
