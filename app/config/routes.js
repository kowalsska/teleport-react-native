import { TabNavigator } from 'react-navigation';
import Home from '../screens/Home';
import ReceivedRequests from '../screens/ReceivedRequests';
import Settings from '../screens/Settings';
import SentRequests from '../screens/SentRequests';

export default TabNavigator({
    SentRequests: {
        screen: SentRequests
    },
    Home: {
        screen: Home
    },
    ReceivedRequests: {
        screen: ReceivedRequests
    }
}, {
        initialRouteName: "Home",
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#e91e63',
        },
    });
