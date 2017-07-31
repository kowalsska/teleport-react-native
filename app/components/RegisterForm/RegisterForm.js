import React from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Keyboard, StatusBar } from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';

import RealmTasks from '../../data/realm-tasks';
import config from '../../config/server';
import styles from './styles';
import { getRequests } from '../../actions/requests';

class RegisterForm extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func,
    }
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            location: '',
            avatar: null,
            error: '',
        };
    }

    register() {
        const { navigate } = this.props.navigation;
        //registerUser(this.state.email, this.state.password, this.state.username, this.state.location);
        //loginUser(this.state.email, this.state.password);
        //this.props.dispatch(getRequests());
        RealmTasks.register(
            this.state.email,
            this.state.password,
            this.state.email,
            this.state.location,
            (error, realm) => {
                console.log("halo halo");
                RealmTasks.realm = realm;
                this.setState({
                    error: error ? error.message : "Success"
                });
                console.log("this.state.error", this.state.error);
                if (this.state.error === "Success") {
                    navigate("Main");
                }
            }
        );
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
                    onPress={this.register.bind(this)}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    };
};

export default connect()(RegisterForm);;