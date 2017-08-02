import React from 'react';
import PropTypes from 'prop-types';
import MapView from 'react-native-maps';
//import { connect } from 'react-redux';

import styles from './styles';

const RADIUS = 100;

class Map extends React.Component {
    // static propTypes = {
    //     settings: PropTypes.object,
    // }
    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0122,
                longitudeDelta: 0.0121,
            },
            error: null,
        };
    }

    getInitialState() {
        return {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            },
        };
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    },
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 },
        );
    }

    onRegionChangeComplete = (region) => {
        //console.log("USER COORDS", this.props.settings.userLatitude, this.props.settings.userLongitude);
        console.log("Change complete:", region);
        this.setState({ region });
    }

    render() {
        return (
            <MapView style={styles.map}
                region={this.state.region}
                onRegionChangeComplete={this.onRegionChangeComplete}>
                <MapView.Circle
                    key={(this.state.region.longitude + this.state.region.latitude + RADIUS).toString()}
                    center={{
                        latitude: this.state.region.latitude,
                        longitude: this.state.region.longitude,
                    }}
                    radius={RADIUS}
                />
            </MapView>
        )
    }
};

// const mapStatetoProps = (state) => {
//     const settings = state.settings;
//     return {
//         settings,
//     };
// };

export default Map;