import React from 'react';
import { TextInput, Keyboard } from 'react-native';
import styles from './styles';

class LocationInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Where are you teleporting to?' };
    }
    render() {
        return (
            <TextInput style={styles.input}
                onFocus={() => this.setState({ text: "" })}
                onSubmitEditing={Keyboard.dismiss}
                underlineColorAndroid="transparent"
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
            />
        );
    }
}

export default LocationInput;