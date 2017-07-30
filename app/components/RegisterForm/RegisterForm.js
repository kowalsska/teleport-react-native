import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Keyboard, StatusBar } from 'react-native';
import styles from './styles';
import SERVER_ADDRESS from '../../config/server';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            location: '',
        };
    }

    registerUser() {
        const { navigate } = this.props.navigation;
        console.log("New user registered!", this.state);
        navigate("Main");
        Realm.Sync.User.register(SERVER_ADDRESS, this.state.username, this.state.password, (error, user) => {
            if (error) {
                console.log("something went wrong", error);
            } else {
                console.log("hurray", user);
            }
        });
    }

    render() {
        return (
            <KeyboardAvoidingView behaviour="padding" style={styles.container}>
                <StatusBar barStyle="light-content" />
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    returnKeyType='next'
                    autoCorrect={false}
                    ref={(input) => this.usernameInput = input}
                    onSubmitEditing={() => this.emailInput.focus()}
                    onChangeText={(username) => this.setState({ username })}
                    placeholderTextColor='rgba(255, 255, 255, 0.5)' />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType='next'
                    keyboardType='email-address'
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={(email) => this.setState({ email })}
                    ref={(input) => this.emailInput = input}
                    placeholderTextColor='rgba(255, 255, 255, 0.5)' />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    returnKeyType='next'
                    secureTextEntry
                    onSubmitEditing={() => this.locationInput.focus()}
                    onChangeText={(password) => this.setState({ password })}
                    ref={(input) => this.passwordInput = input}
                    placeholderTextColor='rgba(255, 255, 255, 0.5)' />
                <TextInput
                    style={styles.input}
                    returnKeyType='done'
                    placeholder="Where are you from?"
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={(location) => this.setState({ location })}
                    ref={(input) => this.locationInput = input}
                    placeholderTextColor='rgba(255, 255, 255, 0.5)' />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => this.registerUser()}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    };
};

export default RegisterForm;