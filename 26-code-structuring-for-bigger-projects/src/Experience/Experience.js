import Size from "./Utills/Size"
import Time from './Utills/Time.js'
import * as THREE from 'three'
export default class Experience{
    constructor(canvas,sizes){
        // Global access
        window.experience = this //temp
        this.canvas = canvas

        //size
        this.size = new Size(sizes.width,sizes.height,sizes.ratio)

        // Resize event
        this.size.on('resize', () =>
        {
            console.log('A resize occurred')
        })

        //time
        this.time = new Time()

        // Time tick event
        this.time.on('tick', () =>
        {
            this.update()
        })

        //scene
        this.scene = new THREE.Scene()
    }

    resize(){

    }

    update(){

    }
}