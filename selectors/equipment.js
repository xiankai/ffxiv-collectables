import { createSelector } from 'reselect';

const gpSelector = state => state.equipment.gp;
const gatheringSelector = state => state.equipment.gathering;
const perceptionSelector = state => state.equipment.perception;

export const equipmentStatSelector = createSelector(
	gpSelector,
	gatheringSelector,
	perceptionSelector,
	(gp, gathering, perception) => ({
		gp,
		gathering,
		perception
	})
);