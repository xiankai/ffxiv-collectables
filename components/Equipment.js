import React, { Component, PropTypes } from 'react';
import actions from 'observables/actions';
import { observer } from 'mobservable-react';
import { Input } from 'react-bootstrap';

@observer
export default class Equipment extends Component {
	render() {
		let { actions } = this.props;
		return (
			<div>
				<Input label="GP" type="text" ref={actions.assignRef('gp')}></Input>
				<Input label="Gathering" type="text" ref={actions.assignRef('gathering')}></Input>
				<Input label="Perception" type="text" ref={actions.assignRef('perception')}></Input>
			</div>
		);
	}
}

Equipment.propTypes = {
	
}

Equipment.defaultProps = {
	actions
}