import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


//user responses updated per action type in reducer and posted to database on feedback form submittal
const initialObject = {
    feelingToday: 0,
    understandingContent: 0,
    supported: 0,
    comment: '',
}

//accepts dispatches from each component of feedback form
const feedbackReducer = (state = initialObject, action) => {
    if (action.type === "SET_FEELINGS") {
        return {
            ...state,
            feelingToday: action.payload
        }
    }
    if (action.type === "SET_UNDERSTANDING") {
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
    if (action.type === "SET_COMMENT") {
        return {
            ...state,
            comment: action.payload
        }
    }
    return state;
}


const store = createStore(
    combineReducers({
        feedbackReducer
    })
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
