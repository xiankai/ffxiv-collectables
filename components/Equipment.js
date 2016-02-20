import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Input } from 'react-bootstrap';
import { equipmentStatSelector } from 'selectors/equipment';

@connect(
	equipmentStatSelector
)
export default class Equipment extends Component {
	handleChange = action => e => {
		let { dispatch } = this.props;

		dispatch({
			type: action,
			value: parseInt(e.target.value)
		})
	}

	render() {
		let { gp, gathering, perception } = this.props;
		return (
			<div>
				<Input label="GP" type="text" value={gp} onChange={this.handleChange('SET_GP')}></Input>
				<Input label="Gathering" type="text" value={gathering} onChange={this.handleChange('SET_GATHERING')}></Input>
				<Input label="Perception" type="text" value={perception} onChange={this.handleChange('SET_PERCEPTION')}></Input>
			</div>
		);
	}
}

Equipment.propTypes = {
	
}