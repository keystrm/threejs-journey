import Size from "./Utills/Size"
import Time from './Utills/Time.js'
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

        this.time = new Time()
    }
}