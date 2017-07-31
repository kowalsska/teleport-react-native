import { SEND_REQUEST, GET_REQUESTS } from '../actions/requests';
import { addRequest, getAllRequests } from '../data/realm-tasks';

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_REQUEST:
            addRequest(action.lat, action.lng, action.message);
            return [
                ...state,
            ]
        case GET_REQUESTS:
            console.log("IN GET_REQUESTS REDUCER");
            const requestsFromDatabase = getAllRequests() || [];
            return [
                ...state,
                requestsFromDatabase
            ]
        default:
            return [
                ...state,
            ]
    }
}

export default reducer;