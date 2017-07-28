import React, { Props } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Avatar } from 'react-native-elements'
import styles from './styles';

class RequestCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            avatar: "",
            username: "",
            location: "",
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            avatar: nextProps.avatar,
            username: nextProps.username,
            location: nextProps.destination,
        });
    }
    render() {
        return (
            <Card>
                <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
                    <Avatar
                        large
                        rounded
                        source={{ uri: this.props.avatar }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                    <Text style={{ marginBottom: 10, flex: 1 }}>{this.props.username} from {this.props.location} wants to teleport near you.
                    </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Button
                        icon={{ name: 'close' }}
                        backgroundColor='#E42525'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='Decline' />
                    <Button
                        icon={{ name: 'check' }}
                        backgroundColor='#89D122'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='Accept' />
                </View>
            </Card>
        );
    };
};

export default RequestCard;
