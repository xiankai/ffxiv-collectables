import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Hotkey from './Hotkey';
import { actions } from 'selectors/gatherer';

@connect()
export default class Hotbar extends Component {
	handleClick = action => () => {
		let { dispatch } = this.props;

		dispatch({
			type: action
		});
	}

	render() {
		return (
			<div>
				{
					actions.map((value, key) => <Hotkey key={key} {...value} handleClick={this.handleClick(value.action)}></Hotkey>)
				}
			</div>
		);
	}
}

Hotbar.propTypes = {
	
}