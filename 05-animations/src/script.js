import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Object
const geometry2 = new THREE.BoxGeometry(1, 1, 1)
const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const mesh2 = new THREE.Mesh(geometry2, material2)
scene.add(mesh2)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

/**
 * Animate using libraries
 */
gsap.to(mesh2.position, { duration: 1, delay: 1, x: -2 })

let time = Date.now()

const clock = new THREE.Clock()

//fps animation
const tick = () => {

    const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime

    const elapsedTime = clock.getElapsedTime()

    //transforms
    mesh.position.x = Math.sin(elapsedTime) 
    mesh.rotation.y -= 0.003 * deltaTime

    mesh.scale.z = Math.cos(elapsedTime)


    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()
