import { SET_RADIUS, GET_CURRENT_LOCATION } from '../actions/settings';

const initialState = {
    radius: 100,
    userLatitude: 55.873543,
    userLongitude: -4.289058,
}

const getUserCoordinates = () => {
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition((pos) => {
        console.log("CURRENT LOCATION", pos.coords.latitude, pos.coords.longitude);
        return {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
        };
    }, (err) => {
        console.log("could not get current location")
        return {
            latitude: 0,
            longitude: 0,
        }
    }, options);
}

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RADIUS:
            return {
                ...state,
                radius: action.radius,
            }
        case GET_CURRENT_LOCATION:
            let coordinates = getUserCoordinates();
            if (coordinates) {
                console.log("CURRENT coord", coordinates);
                return {
                    ...state,
                    userLatitude: coordinates.latitude,
                    userLongitude: coordinates.longitude,
                }
            } else {
                return {
                    ...state,
                }
            }

        default:
            return {
                ...state,
            }
    }
}

export default settingsReducer;