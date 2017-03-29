const THREE = require('three');

// E

export default class Agent {
	// Agent Constructor
	constructor(goal, position = new THREE.Vector3(0, 0, 0), velocity = new THREE.Vector3(0, 0, 0), 
				orientation = new THREE.Vector3(1, 0, 0), size = new THREE.Vector3(0.25, 0.25, 1)) {
		this.position = position;
		this.velocity = velocity;

		// Goal
		this.goal = goal;
		
		this.orientation = orientation;
		this.markers = {}; // Markers are initially empty
		this.size = size;
		
		// Color
		this.color = 0xffffff;

		// Cylinder
		this.geometry = new THREE.CylinderGeometry(size.x, size.x. size.z);
		this.material = new THREE.MeshBasicMaterial({color: this.color})
		this.mesh = new THREE.Mesh(this.geometry, this.material);
	}
}

