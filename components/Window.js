import React, { Component, PropTypes } from 'react';
import Progress from './Progress';
import Controls from './Controls';

export default class Window extends Component {
	render() {
		return (
			<div>
				<Progress></Progress>

				<Controls></Controls>
			</div>
		);
	}
}

Window.propTypes = {
	
}