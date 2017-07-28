import React from 'react';
import { StatusBar, Text } from 'react-native';
import { Container } from '../components/Container';
import { Map } from '../components/Map';
import { LocationInput } from '../components/LocationInput';


export default () => (
    <Container>
        <Map />
        <LocationInput />
    </Container>
);