import React, { PropTypes } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Button from 'react-native-button';
import moment from 'moment';

import { Map } from '../components/Map';
import { LocationInput } from '../components/LocationInput';
import { sendRequest } from '../actions/requests';

class Home extends React.Component {
	static propTypes = {
		dispatch: PropTypes.func,
	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	handleSendRequest = () => {
		this.props.dispatch(sendRequest(this.mapComponent.state.region.latitude,
			this.mapComponent.state.region.longitude, moment().format('x')));
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={{ flex: 1 }}>
					<Map ref={(mapComponent) => this.mapComponent = mapComponent} />
					<Button style={styles.button} onPress={this.handleSendRequest}>
						TELEPORT ME
				</Button>
					<LocationInput />
				</View>
			</TouchableWithoutFeedback >
		)
	}
};

const styles = EStyleSheet.create({
	button: {
		position: "absolute",
		top: 100,
		left: 40,
		padding: 1,
		height: 65,
		width: 50,
	},
});

const mapStatetoProps = (state) => {
	return {

	};
};

export default connect(mapStatetoProps)(Home);