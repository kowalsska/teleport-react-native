export const SEND_REQUEST = "SEND_REQUEST";
export const GET_REQUESTS = "GET_REQUESTS";
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";

export const registerUser = (email, password, username, location, avatar) => ({
    type: REGISTER_USER,
    email, password, username, location, avatar,
});

export const loginUser = (email, password) => ({
    type: LOGIN_USER,
    email, password,
});

export const sendRequest = (lat, lng, timestamp, username, message) => ({
    type: SEND_REQUEST,
    lat, lng, timestamp, username, message,
});

export const getRequests = () => ({
    type: GET_REQUESTS,
});