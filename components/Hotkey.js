import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

@connect()
export default class Hotkey extends Component {
	handleClick = () => {
		let { dispatch, action } = this.props;

		dispatch({
			type: action
		});
	}

	render() {
		let { name, icon, action, dispatch } = this.props;

		return (
			<img 
				src={icon}
				alt={name}
				style={{
					cursor: 'pointer'
				}}
				onClick={this.handleClick} />
		);
	}
}

Hotkey.propTypes = {
	name: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	action: PropTypes.string.isRequired
}