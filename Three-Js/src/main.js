import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe:true} );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// const canvas = document.querySelector('#draw');
// const renderer = new THREE.WebGLRenderer({canvas});
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const controls = new OrbitControls( camera, renderer.domElement );
// controls.enableDamping = true;
// controls.autoRotate = true;
// // controls.enableZoom = true;
// controls.autoRotateSpeed = 5.0
// controls.dampingFactor = 0.02;

// window.addEventListener('resize',()=>{
//     renderer.setSize( window.innerWidth, window.innerHeight );
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
// })
// function animate() {
//     window.requestAnimationFrame(animate)
// 	renderer.render( scene, camera );
//     // cube.rotation.x += 0.01;
//     // cube.rotation.y += 0.01;
//     controls.update();
// }

// animate()


// DIFFERENT TYPE OF GEOMETERY : 
  // 1. SPHERE

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const geometry = new THREE.SphereGeometry( 1, 12, 3,30);
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe:true} );
// const sphere = new THREE.Mesh( geometry, material );
// scene.add( sphere );

// camera.position.z = 5;

// const canvas = document.querySelector('#draw');
// const renderer = new THREE.WebGLRenderer({canvas});
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const controls = new OrbitControls( camera, renderer.domElement );
// controls.enableDamping = true;
// // controls.autoRotate = true;
// // controls.enableZoom = true;
// // controls.autoRotateSpeed = 5.0
// controls.dampingFactor = 0.02;

// window.addEventListener('resize',()=>{
//     renderer.setSize( window.innerWidth, window.innerHeight );
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
// })

// function animate() {
//     window.requestAnimationFrame(animate)
// 	renderer.render( scene, camera );
//     // sphere.rotation.x += 0.01;
//     // sphere.rotation.y += 0.01;
//     controls.update();
// }

// animate()

  // 2. CYLINDER

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const geometry = new THREE.CylinderGeometry( 2, 2, 1,12,1,true);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe:false,side:THREE.DoubleSide} ); // THREE.DoubleSide : Shows the backside and frontside of the geometery shape 
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

camera.position.z = 5;

const canvas = document.querySelector('#draw');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
// controls.autoRotate = true;
// controls.enableZoom = true;
// controls.autoRotateSpeed = 5.0
controls.dampingFactor = 0.02;

window.addEventListener('resize',()=>{
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})

function animate() {
    window.requestAnimationFrame(animate)
	renderer.render( scene, camera );
    // sphere.rotation.x += 0.01;
    // sphere.rotation.y += 0.01;
    controls.update();
}

animate()