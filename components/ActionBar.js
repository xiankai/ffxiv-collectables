import React, { Component, PropTypes } from 'react';
import { observer } from 'mobservable-react';
import actions from 'observables/actions';
import Hotkey from './Hotkey';

@observer
export default class ActionBar extends Component {
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
	actions	
}