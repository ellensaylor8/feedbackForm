import React, { Component } from 'react';

class UnderstandingContent extends Component {
    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <input type="number" placeholder="Scale of 1-5" />
                <button>NEXT</button>
            </div>
        )
    }
}

export default UnderstandingContent;
