// USING AN STANDARD MATERIAL : which is an material used to make object similar to real life 

import * as THREE from 'three';
import * as dat from 'lil-gui';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// ADDING TEXTURES TO THE BOX :

const textureLoader = new THREE.TextureLoader();
let boxColor = textureLoader.load("./images/color.jpg");
let boxRoughness = textureLoader.load("./images/roughness.jpg");
let normal = textureLoader.load("./images/normal.png");
// let height = textureLoader.load("./images/normal.png");

// TEXTURES ENDED 

const geometry = new THREE.BoxGeometry( 3, 1.8, 2 );
const material = new THREE.MeshStandardMaterial( { map:boxColor, roughnessMap:boxRoughness, normalMap:normal } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const canvas = document.querySelector('#draw');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// NOTE : This object is an real life object so it requires LIGHT to be VISIBLE so we are adding light and below code is for adding LIGHT 

const highIntensityLight = new THREE.DirectionalLight(0xffffff,2);
highIntensityLight.position.set(10,20,15);
scene.add(highIntensityLight);

// DIRECTION LIGHT : This light comes from an specific direction
const directionalLight = new THREE.DirectionalLight(0xffffff,1);
directionalLight.position.set(2,1,1);
scene.add(directionalLight);

// AMBIENT LIGHT : It is an normal light which comes from all the directions ( BACKGROUND LIGHT )
const ambientLight = new THREE.AmbientLight(0xffffff,0.5);
scene.add(ambientLight)

// POINT LIGHT : It is an SPOT LIGHT TARGETING specific point 
const pointLight  = new THREE.PointLight(0xffffff,1,100);
pointLight.position.set(0,1,0);
scene.add(pointLight)

// ADDING LIGHT HELPERs : which shows us that from where the light is coming from : 

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight,5);
scene.add(directionalLightHelper)

const highIntensityLightHelper = new THREE.DirectionalLightHelper(highIntensityLight,5);
scene.add(highIntensityLightHelper)

const pointLightHelper = new THREE.PointLightHelper(pointLight,5);
// scene.add(pointLightHelper)

// LIGHT CODE ENDED 

// ORBITAL CONTROLS : This helps user to move the object using mouse 

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
// controls.autoRotate = true;
// controls.enableZoom = true;
// controls.autoRotateSpeed = 5.0
controls.dampingFactor = 0.02;

// ADDING LIL-GUI : 
const gui = new dat.GUI();

const materialFolder = gui.addFolder('Material');
materialFolder.add(material,'roughness',0,1).name('Roughness');
materialFolder.add(material,'metalness',0,1).name('Metalness');
materialFolder.addColor(material,'color').name('Color');

const meshFolder = gui.addFolder('Mesh');
meshFolder.add(cube.scale,'x',0.1,5).name('Scale X');
meshFolder.add(cube.scale,'y',0.1,5).name('Scale Y');
meshFolder.add(cube.scale,'z',0.1,5).name('Scale Z');
meshFolder.add(cube.position,'x',-10,10).name('Position X');
meshFolder.add(cube.position,'y',-10,10).name('Position Y');
meshFolder.add(cube.position,'z',-10,10).name('Position Z');

const lightFolder = gui.addFolder('Lights');

const ambientLightFolder = lightFolder.addFolder('Ambient Light');
ambientLightFolder.add(ambientLight,'intensity',0,2).name('Intensity');

const directionalLightFolder = lightFolder.addFolder('Directional Light');
directionalLightFolder.add(directionalLight,'intensity',0,5).name('Intensity');
directionalLightFolder.add(directionalLight.position,'x',-10,10).name('Position X');
directionalLightFolder.add(directionalLight.position,'y',-10,10).name('Position Y');
directionalLightFolder.add(directionalLight.position,'z',-10,10).name('Position Z');

const pointLightFolder = lightFolder.addFolder('Point Light');
pointLightFolder.add(pointLight,'intensity',0,5).name('Intensity');
pointLightFolder.add(pointLight.position,'x',-10,10).name('Position X');
pointLightFolder.add(pointLight.position,'y',-10,10).name('Position Y');
pointLightFolder.add(pointLight.position,'z',-10,10).name('Position Z');

// LIL-GUI ENDED :
window.addEventListener('resize',()=>{
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})
function animate() {
    window.requestAnimationFrame(animate)
	renderer.render( scene, camera );
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    controls.update();
}

animate()
