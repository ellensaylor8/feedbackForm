import axios from 'axios';

//gets feedback from database
const getFeedback = () => {
    return axios({
        method: 'GET',
        url: '/feedback'
    })
}

//post entire feedback object to database once user approves responses and submits
const postFeedback = (feedback) => {
    return axios({
        method: 'POST',
        url: '/feedback',
        data: feedback
    })
}

export {
    getFeedback,
    postFeedback
}