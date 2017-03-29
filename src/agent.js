const THREE = require('three');


export default class Agent {

	// Agent Constructor
	constructor(goal, material, position = new THREE.Vector3(0, 0, 0), gridCellWidth, gridCellHeight, velocity = new THREE.Vector3(0.0, 0.0, 10.0), 
				orientation = new THREE.Vector3(1, 0, 0), size = new THREE.Vector3(0.25, 0.25, 1)) {

		// Seriously a dummy vector so I can us vector math
		// TODO: Get rid of this.
		this.v3 = new THREE.Vector3(0.0, 0.0, 0.0);

		this.maxSpeed = 10.0;
		this.position = position;
		this.velocity = velocity;

		// Goal
		this.goal = goal;
		
		this.orientation = orientation;
		this.markers = []; // Markers are initially empty
		this.size = size;
		
		// Color
		this.color = 0xffffff;

		// Cylinder
		this.geometry = new THREE.CylinderGeometry(20, 20, 100, 32);
		this.material = material;
		//this.material = new THREE.MeshBasicMaterial({color: this.color})
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.mesh.position.set(position.x, position.y, position.z); // = position;

		this.gridCellWidth = gridCellWidth;
		this.gridCellHeight	= gridCellHeight;

		this.i = Math.floor((this.position.x + 0.5 * this.gridCellWidth) / this.gridCellWidth);
		this.j = Math.floor((this.position.z + 0.5 * this.gridCellWidth) / this.gridCellHeight);
	};

	update(deltaTime) {
		// Update Cell Grid
		this.i = Math.floor((this.position.x + 0.5 * this.gridCellWidth) / this.gridCellWidth);
		this.j = Math.floor((this.position.z + 0.5 * this.gridCellWidth) / this.gridCellHeight);

		var sum = new THREE.Vector3(0.0, 0.0, 0.0);
		for (var m = 0; m < this.markers.length; m++) {
			sum.add(this.markers[m].geo.vertices[this.markers[m].mark]);
			sum.sub(this.position);
		}



		var toGoal = new THREE.Vector3(0.0, 0.0, 0.0);
		toGoal.add(this.goal.position);
		toGoal.sub(this.position);
		toGoal.clamp(0.0, this.maxSpeed);
		sum.add(toGoal);

		var len = sum.length();
		sum.normalize()
		sum.multiplyScalar(Math.min(len, this.maxSpeed));



		this.velocity = sum;


		this.position.add(this.v3.multiplyVectors(this.velocity, deltaTime));
		this.mesh.position.set(this.position.x, this.position.y, this.position.z);
	};
}

