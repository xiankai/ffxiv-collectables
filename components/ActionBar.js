import React, { Component, PropTypes } from 'react';
import Hotkey from './Hotkey';
import { connect } from 'react-redux';
import { getActionFromActionName } from 'selectors/gatherer';

@connect(
	state => ({
		actions: state.actionbar.actions
	})
)
export default class ActionBar extends Component {
	handleClick = key => () => {
		let { dispatch } = this.props;
		dispatch({
			type: 'REMOVE_ACTION',
			key
		});
	}

	render() {
		let { actions } = this.props;
		return (
			<div>
				{
					actions.map((value, key) => {
						let action = getActionFromActionName(value);
						return <Hotkey key={key} {...action} handleClick={this.handleClick(key)}></Hotkey>
					})
				}
			</div>
		);
	}
}

ActionBar.propTypes = {
	
}