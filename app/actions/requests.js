export const SEND_REQUEST = "SEND_REQUEST";

export const sendRequest = (lat, lng, timestamp) => ({
    type: SEND_REQUEST,
    lat, lng, timestamp,
});