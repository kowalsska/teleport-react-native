export const SET_RADIUS = "SET_RADIUS";
export const GET_CURRENT_LOCATION = "GET_CURRENT_LOCATION"

export const setRadius = (radius) => ({
    type: SET_RADIUS,
    radius,
});

export const getCurrentLocation = () => ({
    type: GET_CURRENT_LOCATION,
});