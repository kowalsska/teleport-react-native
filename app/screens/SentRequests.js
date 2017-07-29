import React from 'react';
import { FlatList, Text, StatusBar, View, Image } from 'react-native';
import { Card, ListItem, Button, Avatar, Icon } from 'react-native-elements'
import { SentRequestCard } from '../components/SentRequestCard'
import requests from '../data/requests';

class SentRequests extends React.Component {

	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar translucent={false} barStyle="default" />
				<FlatList
					data={requests}
					renderItem={({ item }) => <SentRequestCard message={item.message} timestamp={item.timestamp} />}
					keyExtractor={item => item.timestamp}
				/>
			</View>
		);
	}
};

export default SentRequests;