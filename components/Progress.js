import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';

@connect(
	state => ({
		progress: state.gatherer.progress
	})
)
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
	progress: PropTypes.string	
}