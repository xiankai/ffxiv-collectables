export const error = store =>
	next => 
		action => 
			next(action)