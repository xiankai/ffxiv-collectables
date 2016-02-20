import React, { Component, PropTypes } from 'react';

export default class Hotbar extends Component {
	render() {
		return (
			<div>
				{ this.props.children }
			</div>
		);
	}
}

Hotbar.propTypes = {
	
}