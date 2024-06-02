import EventEmitter from './EventEmitter.js'
export default class Size extends EventEmitter{
    constructor(width,height,ratio){
        super()
        this.width = width
        this.height = height
        this.ratio = ratio

        window.addEventListener('resize', () =>
        {
            this.trigger('resize')
        })
    }
}