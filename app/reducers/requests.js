import { SEND_REQUEST } from '../actions/requests';

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_REQUEST:
            return [
                ...state,
                {
                    timestamp: action.timestamp,
                    lat: action.lat,
                    lng: action.lng,
                    username: action.username,
                    message: action.message
                }
            ]
        default:
            return state;
    }
}

export default reducer;