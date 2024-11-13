import * as THREE from 'three';
import { Reflector } from 'three/examples/jsm/Addons.js';

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

const textureLoader = new THREE.TextureLoader();

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

const rootNode = new THREE.Object3D();
scene.add(rootNode);

let count = 6;
for(let i = 0; i < count; i++){

    const texture = textureLoader.load(images[i]);

    texture.colorSpace = THREE.SRGBColorSpace;

    const baseNode = new THREE.Object3D();
    baseNode.rotation.y = i * ( 2 * Math.PI / count );
    rootNode.add(baseNode);

    const border = new THREE.Mesh(
        new THREE.BoxGeometry(3.2, 2.2, 0.09),
        new THREE.MeshBasicMaterial({ color: 0x202020 })
    );
    border.position.z = -4;
    baseNode.add(border);

    const artwork = new THREE.Mesh(
        new THREE.BoxGeometry(3, 2, 0.1),
        new THREE.MeshStandardMaterial({ map: texture })
    );
    artwork.position.z = -4;
    baseNode.add(artwork);
}

const spotlight = new THREE.SpotLight(0xffffff, 100.0, 10.0, 0.65, 1);
spotlight.position.set(0, 5, 0);
spotlight.target.position.set(0, 0.6, -5);
scene.add(spotlight);
scene.add(spotlight.target);


const mirror = new Reflector(
    new THREE.CircleGeometry(10),
    {
        color: 0x303030,
        textureWidth: window.innerWidth,
        textureHeight: window.innerHeight,
    }
);

mirror.position.y = -1.1;
mirror.rotateX(-Math.PI / 2);
scene.add(mirror);


function animate() {

    rootNode.rotation.y += 0.1;

	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

    mirror.getRenderTarget().setSize(
        window.innerWidth,
        window.innerHeight
    );
});