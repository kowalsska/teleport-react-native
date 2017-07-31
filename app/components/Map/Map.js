import React from 'react';
import PropTypes from 'prop-types';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';

import styles from './styles';

const RADIUS = 100;

class Map extends React.Component {
    static propTypes = {
        settings: PropTypes.object,
    }
    constructor(props) {
        super(props);

        this.state = {
            latitude: this.props.settings.userLatitude,
            longitude: this.props.settings.userLongitude,
            latitudeDelta: 0.00684002,
            longitudeDelta: 0.0068664,
        };
    }

    onRegionChangeComplete = (region) => {
        console.log("USER COORDS", this.props.settings.userLatitude, this.props.settings.userLongitude);
        console.log("Change complete:", region);
        this.setState({ latitude: region.latitude, longitude: region.longitude });
    }

    render() {
        return (
            <MapView style={styles.map}
                region={this.state}
                onRegionChangeComplete={this.onRegionChangeComplete}>
                <MapView.Circle
                    key={(this.state.longitude + this.state.latitude + RADIUS).toString()}
                    center={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                    }}
                    radius={RADIUS}
                />
            </MapView>
        )
    }
};

const mapStatetoProps = (state) => {
    const settings = state.settings;
    return {
        settings,
    };
};

export default connect(mapStatetoProps)(Map);