import { observable } from 'mobservable';

const path = {
	path: 0,
	actions: []
}

class Actions {
	@observable refs = [];
	@observable progress = 0;
	@observable skillsUsed = [path];
	@observable currentPath = 0;
	@observable currentPathIndex
	@observable pathCounter = 0;

	parse(sequence, path, length = null)  {
		let curSequence = _.find(sequence, { path });
		let start = [];
		if (_.has(curSequence, 'dependent')) {
			let dependent = curSequence.dependent;
			start = parse(sequence, dependent.path, dependent.since);
		}

	  if (length) {
		  start = start.concat(curSequence.actions.slice(0, length));
	  } else {
	    start =   start.concat(curSequence.actions);
	  }
	  
		return start;
	}

	branchPath(actions) {
		this.pathCounter++;
		this.skillsUsed.push({
			path: this.pathCounter,
			actions
		});
	}

	deleteAction(path, pathIndex) {
		let currentPath = _.find(this.skillsUsed, { path });
		_.remove(currentPath.actions, (action, index) => index === pathIndex);

		_.remove(this.skillsUsed, { dependent: { path, since: pathIndex } });
	}

	assignRef = ref => node => {
		this.refs[ref] = node.value;
	}
}

const singleton = new Actions;
export default singleton;