export default class Loop {
    constructor(nodes, timeline, n) {
        this._nodes = gsap.utils.toArray(nodes)
        this._timeline = timeline
        this._n = n
    }
    
    _loop() {
        const space = 1 / this._nodes.length
        const overlap = Math.ceil(1 / space)

        const start = this._nodes.length * space + .5
        const end = (this._nodes.length + overlap) * space + this._n
    
        const spaceTime = gsap.timeline({paused: true})
    
        const loop = gsap.timeline({
            repeat: -1,
            paused: true,
            onRepeat() {this._time == this._dur && (this._tTime += this._dur - .01)}
        })
    
        const l = this._nodes.length + overlap * 2
    
        for (let i = 0; i < l; i++) {
            let index = i % this._nodes.length
            let time = i * space
    
            spaceTime.add(this._timeline(this._nodes[index]), time)
        }
    
        spaceTime.time(start)
    
        loop.to(spaceTime, {
            time: end,
            duration: end - start,
            ease: 'none'
        })
    
        .fromTo(spaceTime, {time: overlap * space + 1}, {
            time: start,
            duration: start - (overlap * space + 1),
            ease: 'none',
            immediateRender: false
        })
    
        return {
            timeline: loop,
            destroy: () => loop.kill()
        }
    }

    get _space() {return this._nodes.length}
}