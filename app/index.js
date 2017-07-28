import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import ReceivedRequests from './screens/ReceivedRequests';

import Navigator from './config/routes';

EStyleSheet.build({
    $primaryBlue: '#EDEFEA',
});

export default () => <Navigator />;