import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Timer } from 'three/addons/misc/Timer.js'
import GUI from 'lil-gui'

/**
 * Base
 */
// Debug
const gui = new GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const houseMeasurements = {
    height:2.5,
    width:4,
    depth:4,
    roof:{
        height:1.5,
        radius:3.5
    },
    door:{
        height:1.8,
        width:1.4
    }
}

/**
 * Axes helper
 */
const axesHelper = new THREE.AxesHelper(20)
scene.add(axesHelper)

const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20,20),
    new THREE.MeshStandardMaterial()
)
floor.rotation.x = -Math.PI * 0.5
scene.add(floor)

/**
 * House
 */
// Temporary sphere

const house = new THREE.Group()
scene.add(house)

//walls
const walls = new THREE.Mesh(
    new THREE.BoxGeometry(houseMeasurements.width,houseMeasurements.height,houseMeasurements.depth),
    new THREE.MeshStandardMaterial()
)
walls.position.y = houseMeasurements.height * 0.5
house.add(walls)

//roofs
const roof = new THREE.Mesh(
    new THREE.ConeGeometry(houseMeasurements.roof.radius,houseMeasurements.roof.height,4),
    new THREE.MeshStandardMaterial()
)
roof.position.y = houseMeasurements.height+houseMeasurements.roof.height*0.5
roof.rotation.y = Math.PI * 0.25    
house.add(roof)

//door
const door = new THREE.Mesh(
    new THREE.PlaneGeometry(houseMeasurements.door.width,houseMeasurements.door.height),
    new THREE.MeshStandardMaterial({color:'red'})
)
door.position.y = houseMeasurements.door.height*0.5
door.position.z = houseMeasurements.width*0.5 + 0.01

house.add(door)

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
scene.add(ambientLight)

// Directional light
const directionalLight = new THREE.DirectionalLight('#ffffff', 1.5)
directionalLight.position.set(3, 2, -8)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 4
camera.position.y = 2
camera.position.z = 5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const timer = new Timer()

const tick = () =>
{
    // Timer
    timer.update()
    const elapsedTime = timer.getElapsed()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()