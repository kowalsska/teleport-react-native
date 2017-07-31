import { SET_RADIUS } from '../actions/settings';

const initialState = {
    radius: 100,
}

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RADIUS:
            return {
                ...state,
                radius: action.radius,
            }
        default:
            return {
                ...state,
            }
    }
}

export default settingsReducer;