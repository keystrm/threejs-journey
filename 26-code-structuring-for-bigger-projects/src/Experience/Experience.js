import Size from "./Utills/Size"

export default class Experience{
    constructor(canvas,sizes){
        // Global access
        window.experience = this //temp
        this.canvas = canvas

        //size
        this.size = new Size(sizes.width,sizes.height,sizes.ratio)
    }
}