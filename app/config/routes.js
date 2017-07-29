import React from 'react';
import { Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home';
import ReceivedRequests from '../screens/ReceivedRequests';
import Settings from '../screens/Settings';
import SentRequests from '../screens/SentRequests';
import Login from '../screens/Login';

const MainScreenNavigator = TabNavigator({
    SentRequests: {
        screen: SentRequests,
        navigationOptions: {
            tabBarLabel: 'Sent Requests',
            showIcon: true,
            tabBarIcon: ({ tintColor }) => (
                <Icon name="my-location" />
            ),
        },
    },
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            showIcon: true,
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('./icon.png')}
                    style={{ height: 50, width: 50 }}
                />
            ),
        }
    },
    ReceivedRequests: {
        screen: ReceivedRequests,
        navigationOptions: {
            tabBarLabel: 'Received Requests',
            showIcon: true,
            tabBarIcon: ({ tintColor }) => (
                <Icon name="wifi-tethering" />
            ),
        }
    }
}, {
        initialRouteName: "Home",
        swipeEnabled: true,
        animationEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            activeTintColor: '#e91e63',
            showLabel: false,
            showIcon: true,
        },
    });

export default AppNavigator = StackNavigator({
    Main: {
        screen: MainScreenNavigator,
        navigationOptions: {
            header: () => null,
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: () => null,
        }
    },
}, {
        initialRouteName: "Login",
    },
)
