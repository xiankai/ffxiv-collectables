let initialState = {
	gathering: 0,
	perception: 0,
	gp: 0
}

export const equipment = (state = initialState, action) => {
	let strIndex = action.type.indexOf('SET_');
	if (strIndex > -1) {
		return {
			...state,
			[action.type.slice(4).toLowerCase()]: action.value
		}
	}

	switch (action.type) {
		default: return state;
	}
}