import React, { PropTypes } from 'react';
import MapView from 'react-native-maps';
import styles from './styles';

const Map = () => (
    <MapView style={styles.map}
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4326,
            latitudeDelta: 0.0932,
            longitudeDelta: 0.0421,
        }}
    />
);

export default Map;