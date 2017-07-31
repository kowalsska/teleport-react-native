import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, StatusBar, View, Image } from 'react-native';
import { Card, ListItem, Button, Avatar, Icon } from 'react-native-elements'
import { connect } from 'react-redux';

import { SentRequestCard } from '../components/SentRequestCard'
//import requests from '../data/requests';

class SentRequests extends React.Component {
	static propTypes = {
		myRequests: PropTypes.array,
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar translucent={false} barStyle="default" />
				<FlatList
					data={this.props.myRequests}
					renderItem={({ item }) => <SentRequestCard message={item.message} timestamp={item.timestamp} />}
					keyExtractor={item => item.timestamp}
				/>
			</View>
		);
	}
};

const mapStatetoProps = (state) => {
	const myRequests = state.requests.myRequests;
	return {
		myRequests
	};
};

export default connect(mapStatetoProps)(SentRequests);