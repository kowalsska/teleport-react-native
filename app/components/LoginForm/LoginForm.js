import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Keyboard, StatusBar } from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';

import RealmTasks from '../../data/realm-tasks';
import config from '../../config/server';
import styles from './styles';

class LoginForm extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func,
    }
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
        };
    }

    login() {
        const { navigate } = this.props.navigation;
        RealmTasks.login(
            this.state.email,
            this.state.password, '', '',
            (error, realm) => {
                RealmTasks.realm = realm;
                this.setState({
                    error: error ? error.message : "Success"
                });
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
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.login.bind(this)}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    };
};

export default connect()(LoginForm);;