import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Avatar } from 'react-native-elements'
import styles from './styles';

class ReceivedRequestCard extends React.Component {
    static propTypes = {
        navigation: PropTypes.object,
    }
    constructor(props) {
        super(props);

        this.state = {
            timestamp: "",
            message: "",
            map: "",
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            timestamp: nextProps.timestamp,
            message: nextProps.username,
            map: nextProps.map,
        });
    }

    handleSeeGallery(timestamp) {
        console.log("See gallery: ", timestamp);
        //this.props.navigation.navigate()
    }

    render() {
        return (
            <Card
                title={this.props.message}
                image={require('../../data/background.jpg')}
                imageStyle={styles.image}
                imageWrapperStyle={styles.imageWrapper}>
                <Text style={{ marginBottom: 10 }}>
                    {this.props.timestamp} The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                    onPress={() => this.handleSeeGallery(this.props.timestamp)}
                    icon={{ name: 'code' }}
                    backgroundColor='#03A9F4'
                    buttonStyle={styles.button}
                    title='See gallery' />
            </Card>
        );
    };
};


export default ReceivedRequestCard;
