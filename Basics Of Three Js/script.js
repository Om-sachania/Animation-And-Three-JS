// ANIMATING 3-D CUBE : 

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// const canvas = document.querySelector('#draw');
// const renderer = new THREE.WebGLRenderer({canvas});
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// function animate() {
//     window.requestAnimationFrame(animate)
// 	renderer.render( scene, camera );
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
// }

// animate()


// CREATING SCENE AND CAMERA :

// let scene = new THREE.Scene();
// let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, .1 ,100);
// camera.position.z = 5;
// scene.add(camera);

// let box = new THREE.BoxGeometry(1,1,1);
// let material = new THREE.MeshBasicMaterial({color:'red'});
// let mesh = new THREE.Mesh(box,material);

// SETTING POSITION : 
// mesh.position.x = 1;
// mesh.position.y = -2
// mesh.position.z = -7

// ROTATING POSITION : 
// mesh.rotation.x = 1.4
// mesh.rotation.y = 2.4
// mesh.rotation.z = 1.5

// SCALING PSOITION:
// mesh.scale.x = 2.4;
// mesh.scale.y = 2.4;

    // USE BOTH THE BELOW LINES TO SEE CHANGES : 
// mesh.rotation.y=1;
// mesh.scale.z = 2;

// scene.add(mesh);

// const canvas = document.querySelector('#draw');
// const renderer = new THREE.WebGLRenderer({canvas});
// renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.render( scene, camera );

// let clock = new THREE.Clock();

// function animate(){
//     window.requestAnimationFrame(animate);
//     renderer.render(scene,camera);
//     mesh.rotation.y = clock.getElapsedTime();
//     // mesh.rotation.y +=0.01;
// }

// animate()

// RESPONSIVE CUBE ANIMATION : 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const canvas = document.querySelector('#draw');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener('resize',()=>{
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})
function animate() {
    window.requestAnimationFrame(animate)
	renderer.render( scene, camera );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}

animate()