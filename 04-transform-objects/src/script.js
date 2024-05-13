import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)


//position
// mesh.position.x=0.7
// mesh.position.x=-0.6
// mesh.position.x=1

mesh.position.set(0.7,-0.6,1)

//scale

// mesh.scale.x = 0.5
// mesh.scale.x = 1.5
// mesh.scale.x = 2

mesh.scale.set(2,0.5,0.5)

//rotation

//you can give the order to rotate
mesh.rotation.reorder('YXZ')

mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25


scene.add(mesh)

const axis = new THREE.AxesHelper()
scene.add(axis)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

camera.lookAt(mesh.position)
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)