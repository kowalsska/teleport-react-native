import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Keyboard, StatusBar } from 'react-native';
import moment from 'moment';
import Realm from 'realm';

import { Request, User, Photo } from '../../data/schema';
import config from '../../config/server';
import styles from './styles';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uuid: '',
            username: '',
            email: '',
            password: '',
            location: '',
            avatar: null,
        };
    }

    registerUser() {
        const { navigate } = this.props.navigation;
        Realm.Sync.User.login(config.auth_uri, this.state.email, this.state.password, (error, user) => {
            if (!error) {
                var realm = new Realm({
                    sync: {
                        user: user,
                        url: config.db_uri,
                    },
                    schema: [Request, User, Photo],
                    path: config.db_path,
                });
                console.log("NEW USER", user.identity);
                try {
                    // realm.write(() => {
                    //     realm.create('User', {
                    //         uuid: user.identity,
                    //         email: this.state.email,
                    //         username: this.state.username,
                    //         location: this.state.location,
                    //         avatar: this.state.avatar,
                    //     });
                    // });
                    realm.write(() => {
                        realm.create('Request', {
                            timestamp: parseInt(moment().format('x')),
                            latitude: 777,
                            latitude: 777,
                            message: 'Czarny kot bialy kot',
                            author: null,
                            photos: [],
                        });
                    });
                    let allRequests = realm.objects('Request');
                    let allUsers = realm.objects('User');
                    console.log("allRequests", allRequests);
                    //console.log("allUsers", allUsers);
                } catch (e) {
                    console.log("Error", e);
                };
                navigate("Main");
            } else {
                console.log("COULD NOT VERIFY THE USER");
            }
        });
    };

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