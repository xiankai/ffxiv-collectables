export const actions = [
	{
		name: 'Methodical Appraisal',
		icon: './images/icons/methodical_appraisal.png',
		lvl: 50,
		gp: 0,
		action: 'METHODICAL_APPRAISAL'
	},
	{
		name: 'Discerning Eye',
		icon: './images/icons/discerning_eye.png',
		lvl: 50,
		gp: 200,
		action: 'DISCERNING_EYE'
	},
	{
		name: 'Instinctual Appraisal',
		icon: './images/icons/instinctual_appraisal.png',
		lvl: 51,
		gp: 0,
		action: 'INSTINCTUAL_APPRAISAL'
	},
	{
		name: 'Utmost Caution',
		icon: './images/icons/utmost_caution.png',
		lvl: 51,
		gp: 100,
		action: 'UTMOST_CAUTION'
	},
	{
		name: 'Deep Breath',
		icon: './images/icons/deep_breath.png',
		lvl: 52,
		gp: 300,
		action: 'DEEP_BREATH'
	},
	{
		name: 'Impulsive Appraisal',
		icon: './images/icons/impulsive_appraisal.png',
		lvl: 53,
		gp: 0,
		action: 'IMPULSIVE_APPRAISAL'
	},
	{
		name: 'Single Mind',
		icon: './images/icons/single_mind.png',
		lvl: 57,
		gp: 200,
		action: 'SINGLE_MIND'
	},
	{
		name: 'Last Ditch',
		icon: './images/icons/last_ditch.png',
		lvl: 59,
		gp: 50,
		action: 'LAST_DITCH'
	}
];

export const getActionFromActionName = action => _.find(actions, { action })