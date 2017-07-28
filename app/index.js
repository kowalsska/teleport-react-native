import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import ReceivedRequests from './screens/ReceivedRequests';


EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
});

export default () => <ReceivedRequests />;