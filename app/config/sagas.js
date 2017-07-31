import { takeEvery, select, call, put } from 'redux-saga/effects';

import RealmTasks from '../data/realm-tasks';
import {
    SEND_REQUEST,
    UPLOAD_PHOTO,
    LIKE_ADDED,
    DISLIKE_ADDED,
    GET_INITIAL_REQUESTS,
    REQUESTS_RESULT,
    REQUESTS_ERROR,
} from '../actions/requests';

const getLatestRequests = () => {
    if (RealmTasks.realm) {
        return RealmTasks.realm.objects("Request");
    } else {
        return [];
    }
}

function* fetchRequestsForTheUser(action) {
    try {
        //let radius = yield select(state => state.settings.radius);
        let response = yield call(getLatestRequests);
        let result = Array.from(response.values());
        yield put({ type: REQUESTS_RESULT, result });
    } catch (e) {
        yield put({ type: REQUESTS_ERROR, error: e.message });
    }

}

export default function* rootSaga() {
    yield takeEvery(GET_INITIAL_REQUESTS, fetchRequestsForTheUser);
    //yield takeEvery(SEND_REQUEST, fetchRequestsForTheUser);
    //yield takeEvery(UPLOAD_PHOTO, fetchRequestsForTheUser);
    //yield takeEvery(LIKE_ADDED, fetchRequestsForTheUser);
    //yield takeEvery(DISLIKE_ADDED, fetchRequestsForTheUser);
}