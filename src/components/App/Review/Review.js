import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';

class Comments extends Component {

    state = {
        comment: 0,
    }
    
    commentsHandler = () => {
        const comment = this.state.supported
        this.props.dispatch({type: 'SET_COMMENT', payload: comment});
        // this.props.history.push('/review')
    }
    
    updateForm = (key) => (event) => {
        this.setState({
            [key]: event.target.value
        })
    }
   
    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <input onChange={this.updateForm('comment')} type="text" placeholder="..." />
                <button onClick={this.supportedHandler}>NEXT</button>
                <p>{this.state.comment}</p>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Comments);
