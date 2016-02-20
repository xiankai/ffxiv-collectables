let initialState = {
	attempts: 0,
	wear: 0,
	gp: 0,
	progress: 0,
	discerningEye: false,
	utmostCaution: false,
	deepBreath: false,
	impulsiveAppraisal: false,
	singleMind: false
}

export const gatherer = (state = initialState, action) => {
	let strIndex = action.type.indexOf('SET_');
	if (strIndex > -1) {
		return {
			...state,
			[action.type.slice(4).toLowerCase()]: action.value
		}
	}

	switch (action.type) {
		case 'METHODICAL_APPRAISAL':
			return {
				...state,
				attempts: state.attempts - 1,
				wear: state.wear - 10,
				progress: state.progress + state.perception
			};
		case 'DISCERNING_EYE':
			return {
				...state,
				gp: state.gp - 200,
				discerningEye: true
			};
		case 'INSTINCTUAL_APPRAISAL':
			return {
				...state,
				attempts: state.attempts - 1,
				wear: state.wear - 15,
				progress: state.progress + state.perception * 0.9
			}
		case 'UTMOST_CAUTION':
			return {
				...state,
				gp: state.gp - 50,
				utmostCaution: true
			}
		case 'DEEP_BREATH':
			return {
				...state,
				gp: state.gp - 300,
				deepBreath: true
			}
		case 'IMPULSIVE_APPRAISAL':
			return {
				...state,
				attempts: state.attempts - 1,
				impulsiveAppraisal: true,
				progress: state.progress + state.perception * 0.9
			}
		case 'SINGLE_MIND':
			return {
				gp: gp - 200,
				singleMind: true
			}
		case 'LAST_DITCH':
			if (state.wear >= 30) {
				return {
					...state,
					gp: state.gp - 50,
					progress: state.progress + state.perception
				}
			}
			return state;
		default: return state;
	}
}