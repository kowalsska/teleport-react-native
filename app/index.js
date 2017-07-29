import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Home from './screens/Home';
import ReceivedRequests from './screens/ReceivedRequests';
import Navigator from './config/routes';
import store from './config/store';

EStyleSheet.build({
    $primaryBlue: '#EDEFEA',
});

export default () => (
    <Provider store={store}>
        <Navigator onNavigationStateChange={null} />
    </Provider>
)