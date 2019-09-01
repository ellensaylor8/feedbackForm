import React, { Component } from 'react';

class Supported extends Component {
    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <input type="number" placeholder="Scale of 1-5" />
                <button>NEXT</button>
            </div>
        )
    }
}

export default Supported;