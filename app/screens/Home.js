import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Image } from 'react-native-elements'
import { Container } from '../components/Container';
import { Map } from '../components/Map';
import { LocationInput } from '../components/LocationInput';


class Home extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'Home',
		showIcon: true,
		tabBarIcon: ({ tintColor }) => {
			return <Image
				source={require('./icon.png')}
				style={styles.icon}
			/>
		},
	};

	render() {
		return (
			<Container>
				<Map />
				<LocationInput />
			</Container>)
	}
};

const styles = EStyleSheet.create({
	icon: {
		width: 26,
		height: 26,
	},
});

export default Home;