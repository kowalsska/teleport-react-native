import { combineReducers } from 'redux';
import requests from './requests';
import settings from './settings';

export default combineReducers({
    requests, settings,
});