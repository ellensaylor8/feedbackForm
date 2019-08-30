import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const initialObject = {
    feelingToday: 0,
}

const feedbackReducer = (state = initialObject, action) => {
    if (action.type === "SET_FEELINGS") {
        return {
            ...state,
            feelingToday: action.payload
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
