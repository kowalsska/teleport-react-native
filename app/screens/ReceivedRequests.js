import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, StatusBar, View, Image } from 'react-native';
import { Card, ListItem, Button, Avatar, Icon } from 'react-native-elements'
import { connect } from 'react-redux';

import { ReceivedRequestCard } from '../components/ReceivedRequestCard'

class ReceivedRequests extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    receivedRequests: PropTypes.array,
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={this.props.receivedRequests}
          renderItem={({ item }) => <ReceivedRequestCard username={item.timestamp} location={item.latitude} />}
          keyExtractor={item => item.timestamp}
        />
      </View>
    );
  }
}

const mapStatetoProps = (state) => {
  const receivedRequests = state.requests.inMyArea;
  return {
    receivedRequests
  };
};

export default connect(mapStatetoProps)(ReceivedRequests);