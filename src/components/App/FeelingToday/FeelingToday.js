import React, { Component } from 'react';

class FeelingToday extends Component {
    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <input type="number" placeholder="Scale of 1-5" />
                <button>NEXT</button>
            </div>
        )
    }
}

export default FeelingToday;
