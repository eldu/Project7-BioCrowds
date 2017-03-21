
const THREE = require('three'); // older modules are imported like this. You shouldn't have to worry about this much
import Framework from './framework'

var startTime = new Date();
var currentTime = new Date();

// called after the scene loads
function onLoad(framework) {
  var scene = framework.scene;
  var camera = framework.camera;
  var renderer = framework.renderer;
  var gui = framework.gui;
  var stats = framework.stats;

  // set camera position
  camera.position.set(1, 1, 200);
  camera.lookAt(new THREE.Vector3(0,0,0));

  // scene.add();

  // edit params and listen to changes like this
  // more information here: https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage
  gui.add(camera, 'fov', 0, 180).onChange(function(newVal) {
    camera.updateProjectionMatrix();
  });

}

// called on frame updates
function onUpdate(framework) {

}

// when the scene is done initializing, it will call onLoad, then on frame updates, call onUpdate
Framework.init(onLoad, onUpdate);


// WEBPACK FOOTER //
// ./src/main.js