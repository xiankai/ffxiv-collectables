import React, { Component, PropTypes } from 'react';

import Window from './Window';

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<Window />
			</div>
		);
	}
}

App.propTypes = {
	
}