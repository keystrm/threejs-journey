import Size from "./Utills/Size"
import Time from './Utills/Time.js'
import Camera from "./Camera.js"
import Renderer from "./Renderer.js"
import * as THREE from 'three'
import World from "./World/World.js"
import Resource from "./Utills/Resource.js"
import sources from './sources.js'
import Debug from "./Utills/Debug.js"

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
        //debug
        this.debug = new Debug()
        //size
        this.size = new Size(sizes.width,sizes.height,sizes.ratio)
        //time
        this.time = new Time()
        //scene
        this.scene = new THREE.Scene()
        //resources
        this.resources = new Resource(sources)
        //camera
        this.camera = new Camera()
        //renderer
        this.renderer = new Renderer()
        //world
        this.world = new World()

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
        this.world.update()
        this.renderer.update()
    }
    destroy()
    {
        this.size.off('resize')
        this.time.off('tick')
        // Traverse the whole scene
        // Traverse the whole scene
        this.scene.traverse((child) =>
        {
            // Test if it's a mesh
            if(child instanceof THREE.Mesh)
            {
                child.geometry.dispose()

                // Loop through the material properties
                for(const key in child.material)
                {
                    const value = child.material[key]

                    // Test if there is a dispose function
                    if(value && typeof value.dispose === 'function')
                    {
                        value.dispose()
                    }
                }
            }
        })

        this.camera.controls.dispose()
        this.renderer.instance.dispose()
        if(this.debug.active)
            this.debug.ui.destroy()
    }
}