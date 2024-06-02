import Size from "./Utills/Size"
import Time from './Utills/Time.js'
import Camera from "./Camera.js"
import Renderer from "./Renderer.js"
import * as THREE from 'three'

let instance = null
export default class Experience{
    constructor(canvas,sizes){

        // Singleton
        if(instance)
        {
            return instance
        }
        instance = this

        this.canvas = canvas

        //size
        this.size = new Size(sizes.width,sizes.height,sizes.ratio)
        //time
        this.time = new Time()
        //scene
        this.scene = new THREE.Scene()
        //camera
        this.camera = new Camera()
        //renderer
        this.renderer = new Renderer()

        // Resize event
        this.size.on('resize', () =>
        {
            this.resize()
        })

        // Time tick event
        this.time.on('tick', () =>
        {
            this.update()
        })

    }

    resize(){
        this.camera.resize()
        this.renderer.resize()
    }

    update(){
        this.camera.update()
        this.renderer.update()
    }
}