import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text, Image } from 'react-native';

import { RegisterForm } from '../components/RegisterForm';
import { LoginForm } from '../components/LoginForm';


class Login extends React.Component {
	static propTypes = {
		navigation: PropTypes.object,
		dispatch: PropTypes.func,
	}

	componentWillMount() {
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image
						style={styles.logo}
						source={require('../config/icon.png')} />
				</View>
				<View style={styles.formContainer}>
					<LoginForm navigation={this.props.navigation} />
				</View>
			</View>
		)
	};
};

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F2F4F4',
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center',
	},
	logo: {
		width: 250,
		height: 250,
	},
	title: {
		color: "#FFF",
		marginTop: 10,
		width: 160,
		textAlign: "center",
		opacity: 1,
		fontWeight: "bold",
	},
	formContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flexGrow: 1,
		marginBottom: 30,
	}
});

const mapStatetoProps = (state) => {
	const settings = state.settings;
	const requests = state.requests;
	return {
		settings, requests,
	};
};

export default connect(mapStatetoProps)(Login);