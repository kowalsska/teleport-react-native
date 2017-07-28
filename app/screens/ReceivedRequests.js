import React from 'react';
import { FlatList, Text, StatusBar, View, Image } from 'react-native';
import { Card, ListItem, Button, Avatar, Icon } from 'react-native-elements'
import { RequestCard } from '../components/RequestCard'
import requests from '../data/requests';

class ReceivedRequests extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={requests}
          renderItem={({ item }) => <RequestCard username={item.username} location={item.location} avatar={item.avatar} />}
          keyExtractor={item => item.username}
        />
      </View>
    );
  }
}

export default ReceivedRequests;