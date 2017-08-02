import geolib from 'geolib';

import { SEND_REQUEST, GET_INITIAL_REQUESTS, REQUESTS_RESULT, REQUESTS_ERROR } from '../actions/requests';

const initialState = {
    inMyArea: [],
    myRequests: [],
}

const getRequestsInMyArea = (result) => {
    return result.filter(item => {
        let myLocation = { latitude: 37.78825, longitude: -122.4324 };
        let itemLocation = { latitude: item.latitude, longitude: item.longitude };
        return geolib.getDistance(myLocation, itemLocation) <= 500;
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
            let inmyarea = getRequestsInMyArea(action.result);
            console.log("action request result", inmyarea);
            return {
                ...state,
                inMyArea: [...state, ...inmyarea],
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