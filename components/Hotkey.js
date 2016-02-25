import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

@connect()
export default class Hotkey extends Component {
	render() {
		let { name, icon, action, dispatch, handleClick } = this.props;

		return (
			<img 
				src={icon}
				alt={name}
				style={{
					cursor: 'pointer'
				}}
				onClick={handleClick} />
		);
	}
}

Hotkey.propTypes = {
	name: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	action: PropTypes.string.isRequired
}