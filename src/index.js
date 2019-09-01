import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const initialObject = {
    feelingToday: 0,
    understandingContent: 0,
    supported: 0,
}

const feedbackReducer = (state = initialObject, action) => {
    if (action.type === "SET_FEELINGS") {
        return {
            ...state,
            feelingToday: action.payload
        }
    }
    if (action.type === "SET_UNDERSTANDING") {
        console.log(initialObject);
        return {
            ...state,
            understandingContent: action.payload
        }
    }
    if (action.type === "SET_SUPPORTED") {
        return {
            ...state,
            supported: action.payload
        }
    }
    return state;
}


console.log(initialObject);

const store = createStore(
    combineReducers({
        feedbackReducer
    })
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
