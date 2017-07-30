import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, StatusBar, View, Image } from 'react-native';
import { Card, ListItem, Button, Avatar, Icon } from 'react-native-elements'
import { connect } from 'react-redux';

import { ReceivedRequestCard } from '../components/ReceivedRequestCard'

class ReceivedRequests extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    requests: PropTypes.array,
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={this.props.requests}
          renderItem={({ item }) => <ReceivedRequestCard username={item.username} location={item.location} avatar={item.avatar} />}
          keyExtractor={item => item.timestamp}
        />
      </View>
    );
  }
}

const mapStatetoProps = (state) => {
  const requests = state.requests.requestsList;
  return {
    requests
  };
};

export default connect(mapStatetoProps)(ReceivedRequests);