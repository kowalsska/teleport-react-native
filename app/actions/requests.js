export const SEND_REQUEST = "SEND_REQUEST";
export const GET_INITIAL_REQUESTS = "GET_INITIAL_REQUESTS";
export const UPLOAD_PHOTO = "UPLOAD_PHOTO";
export const LIKE_ADDED = "LIKE_ADDED";
export const DISLIKE_ADDED = "DISLIKE_ADDED";

export const REQUESTS_RESULT = "REQUESTS_RESULT";
export const REQUESTS_ERROR = "REQUESTS_ERROR";

export const sendRequest = (lat, lng, timestamp, username, message) => ({
    type: SEND_REQUEST,
    lat, lng, timestamp, username, message,
});

export const getInitialRequests = () => ({
    type: GET_INITIAL_REQUESTS,
});

export const uploadPhoto = (image, timestamp) => ({
    type: UPLOAD_PHOTO,
    image, timestamp
});

export const likeAdded = (imageId, userId) => ({
    type: LIKE_ADDED,
    imageId, userId,
});

export const dislikeAdded = (imageId, userId) => ({
    type: DISLIKE_ADDED,
    imageId, userId,
});
