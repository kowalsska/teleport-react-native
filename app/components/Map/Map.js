import React from 'react';
import MapView from 'react-native-maps';
import styles from './styles';

const RADIUS = 100;

class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        };
    }

    getInitialState = () => {
        return {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }

    onRegionChangeComplete = (region) => {
        console.log("Change complete:", region);
        this.setState({ region: region });
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


export default Map;