
const THREE = require('three'); // older modules are imported like this. You shouldn't have to worry about this much
import Framework from './framework'

var startTime = new Date();
var currentTime = new Date();

var options = {
  numAgents: 10
  // lookX: 0,
  // lookY: 0,
  // lookZ: 0,
  // rotX: 0,
  // rotY: 0,
  // rotZ: 0
}

var agents = {};

// called after the scene loads
function onLoad(framework) {
  var scene = framework.scene;
  var camera = framework.camera;
  var renderer = framework.renderer;
  var gui = framework.gui;
  var stats = framework.stats;

  //renderer.setClearColor (0xbac2d1, 1);

  // initialize a simple box and material
  var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
  directionalLight.color.setHSL(0.1, 1, 0.95);
  directionalLight.position.set(1, 3, 2);
  directionalLight.position.multiplyScalar(10);
  scene.add(directionalLight);

  // set camera position
  camera.position.set(500, 1000, 500);
  camera.lookAt(new THREE.Vector3(500, 0, 500));


  // Voronoi Diagram Plane
  var planeGeo = new THREE.PlaneGeometry(1000, 1000);
  // var planeMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide});
  var planeMaterial = new THREE.ShaderMaterial({
    uniforms: {
      u_amount: {
        type: "f",
        value: 1.0
      },
      u_albedo: {
        type: 'v3',
        value: new THREE.Color('#ffffff')
      }
    },
    vertexShader: require('./shaders/voronoi-vert.glsl'),
    fragmentShader: require('./shaders/voronoi-frag.glsl')
  });
  var planeMesh = new THREE.Mesh(planeGeo, planeMaterial);
  planeMesh.rotateX(-Math.PI / 2.0);
  planeMesh.position.set(500, 0, 500);
  scene.add(planeMesh);

  // TEST OBJECTS DELETE ONCE DONE
  // Origin
  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshLambertMaterial( {color: 0xff0000} );
  var sphere = new THREE.Mesh( geometry, material );
  sphere.position.set(0, 0.5, 0);
  scene.add( sphere );

  // Add agents to the scene










  // edit params and listen to changes like this
  // more information here: https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage
  gui.add(camera, 'fov', 0, 180).onChange(function(newVal) {
    camera.updateProjectionMatrix();
  });

  // gui.add(options, 'lookX', -5, 100).onChange(function(newVal) {
  //   camera.lookAt(new THREE.Vector3(options.lookX, options.lookY, options.lookZ));
  // });
  // gui.add(options, 'lookY', -5, 100).onChange(function(newVal) {
  //   camera.lookAt(new THREE.Vector3(options.lookX, options.lookY, options.lookZ));
  // });
  // gui.add(options, 'lookZ', -5, 100).onChange(function(newVal) {
  //   camera.lookAt(new THREE.Vector3(options.lookX, options.lookY, options.lookZ));
  // });

  // gui.add(options, 'rotX', -2 * Math.PI, 2 * Math.PI).onChange(function(newVal) {
  //   planeMesh.rotation.set(options.rotX, options.rotY, options.rotZ);
  // });
  // gui.add(options, 'rotY', -2 * Math.PI, 2 * Math.PI).onChange(function(newVal) {
  //   planeMesh.rotation.set(options.rotX, options.rotY, options.rotZ);
  // });
  // gui.add(options, 'rotZ', -2 * Math.PI, 2 * Math.PI).onChange(function(newVal) {
  //   planeMesh.rotation.set(options.rotX, options.rotY, options.rotZ);
  // });

}


function populate(n) {

}

// called on frame updates
function onUpdate(framework) {

}

// when the scene is done initializing, it will call onLoad, then on frame updates, call onUpdate
Framework.init(onLoad, onUpdate);


// WEBPACK FOOTER //
// ./src/main.js