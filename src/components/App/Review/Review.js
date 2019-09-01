import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';

class Review extends Component {
    
    submitHandler = () => {
        
    }
   
    render() {
        return (
            <div>
                <h1>Review Your Feedback</h1>
                
                <button onClick={this.submitHandler}>SUBMIT</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Review);
