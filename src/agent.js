const THREE = require('three');

// E

export default class Agent {
	// Agent Constructor
	constructor(position = new THREE.Vector3(0, 0, 0), velocity = new THREE.Vector3(0, 0, 0), 
				goalPosition = new THREE.Vector3(10, 10, 0), orientation = new THREE.Vector3(1, 0, 0),
				size = new THREE.Vector3(0.25, 0.25, )) {
		this.position = position;
		this.velocity = velocity;
		this.goalPosition = goalPosition;
		this.orientation = orientation;
		this.markers = {}; // Markers are initially empty
	}
}

