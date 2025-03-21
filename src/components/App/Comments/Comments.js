import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';

class Comments extends Component {

    state = {
        comment: '',
    }

    //captures updates comment state and dispatches to reducer in index.js
    commentsHandler = () => {
        const comment = this.state.comment
        this.props.dispatch({ type: 'SET_COMMENT', payload: comment });
        this.props.history.push('/review')
    }

    goBackHandler = () => {
        this.props.history.push('/supported') 
    }

    //updates comment state
    updateForm = (key) => (event) => {
        this.setState({
            [key]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <button onClick={this.goBackHandler}>BACK</button>
                <input onChange={this.updateForm('comment')} type="text" placeholder="..." />
                <button onClick={this.commentsHandler}>NEXT</button>
                <p>{this.state.comment}</p>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Comments);
