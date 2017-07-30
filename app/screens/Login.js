import React from 'react';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text, Image } from 'react-native';
import Realm from 'realm';
import { RegisterForm } from '../components/RegisterForm';

class Login extends React.Component {
	static propTypes = {
		navigation: PropTypes.object,
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image
						style={styles.logo}
						source={{ uri: "http://i.imgur.com/HjctfpK.png" }} />
					<Text style={styles.title}>
						Teleport is the coolest app ever. Please register below.
                    </Text>
				</View>
				<View style={styles.formContainer}>
					<RegisterForm navigation={this.props.navigation} />
				</View>

			</View>
		)
	};
};

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#d35400',
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center',
	},
	logo: {
		width: 100,
		height: 100,
	},
	title: {
		color: "#FFF",
		marginTop: 10,
		width: 160,
		textAlign: "center",
		opacity: 0.8,
	},
	formContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flexGrow: 1,
		marginBottom: 30,
	}
});

export default Login;