import * as THREE from 'three';

const images = [
    'pc1.jpg',
    'pc2.jpg',
    'pc3.jpg',
    'pc4.jpg',
    'pc5.jpg',
    'pc6.jpg',
    'pc7.jpg',
];

const titles = [
    'picture 1',
    'picture 2',
    'picture 3',
    'picture 4',
    'picture 5',
    'picture 6',
    'picture 7',
];

const artist = [
    'ceasar',
    'ceasar',
    'ceasar',
    'ceasar',
    'ceasar',
    'ceasar',
    'ceasar',
];

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00f193 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 6;

const artwork = new THREE.Mesh(
    new THREE.BoxGeometry(3, 2, 0.1),
    new THREE.MeshBasicMaterial({ color: 0xf08080})
);
artwork.position.z = -4;
scene.add(artwork);

function animate() {

	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
});