export const SEND_REQUEST = "SEND_REQUEST";

export const sendRequest = (lat, lng, timestamp, username, message) => ({
    type: SEND_REQUEST,
    lat, lng, timestamp, username, message,
});