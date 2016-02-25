let initialState = {
	actions: []
};

export const actionbar = (state = initialState, action) => {
	switch (action.type) {
		case 'METHODICAL_APPRAISAL':
		case 'DISCERNING_EYE':
		case 'INSTINCTUAL_APPRAISAL':
		case 'UTMOST_CAUTION':
		case 'DEEP_BREATH':
		case 'IMPULSIVE_APPRAISAL':
		case 'SINGLE_MIND':
		case 'LAST_DITCH':
			return {
				...state,
				actions: [...state.actions, action.type]
			}
		case 'REMOVE_ACTION':
			return {
				...state,
				actions: _.filter(state.actions, (value, key) => key !== action.key)
			}
		default: return state;
	}
};