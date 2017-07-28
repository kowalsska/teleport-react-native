import React from 'react';
import { Container } from '../components/Container';
import { Map } from '../components/Map';
import { LocationInput } from '../components/LocationInput';


class Home extends React.Component {

	render() {
		return (
			<Container>
				<Map />
				<LocationInput />
			</Container>)
	}
};

export default Home;