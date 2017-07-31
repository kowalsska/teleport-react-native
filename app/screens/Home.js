import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Button from 'react-native-button';
import moment from 'moment';

import { Map } from '../components/Map';
import { LocationInput } from '../components/LocationInput';
import { sendRequest, getInitialRequests } from '../actions/requests';
import { getCurrentLocation } from '../actions/settings';

class Home extends React.Component {
	static propTypes = {
		dispatch: PropTypes.func,
	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {
		this.props.dispatch(getCurrentLocation());
		this.props.dispatch(getInitialRequests());
	}

	handleSendRequest = () => {
		console.log("MAP STATE", this.mapComponent.state);
		this.props.dispatch(sendRequest(this.mapComponent.state.latitude,
			this.mapComponent.state.longitude,
			moment().format('x'),
			"Magda",
			"What is up?"));
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={{ flex: 1 }}>
					<Map ref={(mapComponent) => this.mapComponent = mapComponent} />
					<Button style={styles.button} onPress={this.handleSendRequest}>TELEPORT</Button>
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
		height: 45,
		width: 50,
	},
});

const mapStatetoProps = (state) => {
	const settings = state.settings;
	const requests = state.requests;
	return {
		settings, requests,
	};
};

export default connect(mapStatetoProps)(Home);