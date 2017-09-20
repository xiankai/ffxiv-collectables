import React, { Component, PropTypes } from 'react';
import { observer } from 'mobservable-react';
import { ProgressBar } from 'react-bootstrap';

@observer
export default class Progress extends Component {
	render() {
		let { progress } = this.props;

		return (
			<div>
				<ProgressBar now={progress} max={1000} bsStyle="success"></ProgressBar>
				{ progress } / 1000
			</div>
		);
	}
}

Progress.propTypes = {
	progress: PropTypes.number.isRequired	
}