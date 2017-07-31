import { SEND_REQUEST, GET_INITIAL_REQUESTS, REQUESTS_RESULT, REQUESTS_ERROR } from '../actions/requests';

const initialState = {
    inMyArea: [],
    myRequests: [],
}

const getRequestsInMyArea = (result) => {
    let myLatitude = 100;
    let myLongitude = 100;
    return result.map(item => {
        return Math.abs(item.latitude) - Math.abs(myLatitude) <= 100;
    })
}

const requestsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_REQUEST:
            const newRequest = {
                latitude: action.lat,
                longitude: action.lng,
                timestamp: action.timestamp,
                username: action.username,
                message: action.message,
            }
            return {
                ...state,
                myRequests: [...state.myRequests, newRequest],
            }
        case GET_INITIAL_REQUESTS:
            return {
                ...state,
            }
        case REQUESTS_RESULT:
            console.log("action request result", action.result);
            return {
                ...state,
                inMyArea: [...state, ...action.result]
            }
        case REQUESTS_ERROR:
            return {
                ...state,
            }
        default:
            return {
                ...state,
            }
    }
}

export default requestsReducer;