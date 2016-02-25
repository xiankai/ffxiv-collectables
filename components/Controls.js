import React, { Component, PropTypes } from 'react';
import Equipment from './Equipment';
import ActionBar from './ActionBar';
import Hotbar from './Hotbar';

export default class Controls extends Component {
	render() {
		return (
			<div>
				<Equipment></Equipment>
				<ActionBar></ActionBar>
				<Hotbar></Hotbar>
			</div>
		);
	}
}

Controls.propTypes = {
	
}