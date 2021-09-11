import Regent from "./Regent"
import Loop from "./Loop"

export default class ScrollLoop extends Loop {
    constructor(config) {
        super()

        this._config = config
        this._elements = config.elements
        this._animations = config.animations
        this._scrollSnapping = config.scrollSnapping
        this._keyScrolling = config.keyScrolling
        this._isSPA = config.isSPA
        this._limit = config.speedDial.limit
        this._acceleration = config.speedDial.acceleration
        this._effect = config.speedDial.effect

        this._presets = {
            enter: {
                repeat: 1,
                yoyo: true,
                immediateRender: false
            },
            across: {
                duration: 1,
                ease: 'none',
                immediateRender: false
            }
        }

        this._timelines = []

        if (Array.isArray(this._animations)) {
            for (let i = 0; i < this._animations.length; i++) {
                const {timeline: {enter, across}} = this._animations[i]
    
                const timeline = element => gsap.timeline()
                .fromTo(element, {...enter.from}, {...enter.to, ...this._presets.enter})
                .fromTo(element, {...across.from}, {...across.to, ...this._presets.across}, 0)
    
                this._timelines.push(timeline)
            }
        }

        this._instances = []
        
        if (Array.isArray(this._elements)) {
            for (let i = 0; i < this._elements.length; i++) {
                const elements = this._elements[i]
                const timeline = this._timelines[i]
                
                this._instances.push(new Loop(elements, timeline, this._limit))
            }
        }
        
        this._loopedInstances = []

        for (let i = 0; i < this._instances.length; i++) {
            const instance = this._instances[i]._loop()
            this._loopedInstances.push(instance)
        }
    }

    scroll() {
        const scrollLoop = document.querySelector('[data-scroll-loop]')

        const [instance] = this._instances
        const [loopedInstance] = this._loopedInstances

        let iteration = 0

        const playhead = {delta: 0}

        const timeLoop = gsap.utils.wrap(0, loopedInstance.timeline.duration())

        const motion = gsap.to(playhead, {
            delta: 0,
            duration: Number(scrollLoop.dataset.scrollSmoothing),
            ease: this._effect,
            paused: true,
            onUpdate: () => this._loopedInstances.forEach(instance => instance.timeline.time(timeLoop(playhead.delta)))
        })

        const scrollbar = ScrollTrigger.create({
            start: 0,
            end: `+=${this._acceleration}`,
            pin: scrollLoop,
            onUpdate: self => {
                const scrollSelf = self.scroll()

                if (scrollSelf > self.end - 1) scrollCircle(1, 1)
                if (scrollSelf < 1 && self.direction < 0) scrollCircle(-1, self.end - 1)

                motion.vars.delta = (iteration + self.progress) * loopedInstance.timeline.duration()
                motion.invalidate().restart()
            }
        })
        
        const scrollMeter = progress => gsap.utils.clamp(1, scrollbar.end - 1, gsap.utils.wrap(0, 1, progress) * scrollbar.end)

        const scrollCircle = (iterationDelta, scrollPoint) => {
            iteration += iterationDelta
            scrollbar.scroll(scrollPoint)
            scrollbar.update()
        }

        const scrollDelta = delta => {
            const snap = gsap.utils.snap(1 / instance._space)
            const t = snap(delta)

            const progress = (t - loopedInstance.timeline.duration() * iteration) / loopedInstance.timeline.duration()
            const m = scrollMeter(progress)

            if (progress >= 1 || progress < 0) scrollCircle(Math.floor(progress), m)

            scrollbar.scroll(m)
        }

        let timer = null

        const scrollSnap = () => {
            if (timer != null) clearTimeout(timer)
            timer = setTimeout(() => {
                scrollDelta(motion.vars.delta)
                if (this._config.onSnap) this._config.onSnap()
            }, 200)
        }

        const keyScroll = e => {
            const keyCodes = ['Space', 'ArrowUp', 'ArrowDown']

            if (keyCodes.indexOf(e.code) > -1) e.preventDefault()
            
            if (e.code == 'ArrowDown') {
                scrollDelta(motion.vars.delta + 1 / instance._space)
                if (this._config.onKey.down) this._config.onKey.down()
            }

            if (e.code == 'ArrowUp') {
                scrollDelta(motion.vars.delta - 1 / instance._space)
                if (this._config.onKey.up) this._config.onKey.up()
            }
        }

        if (this._scrollSnapping && this._keyScrolling && !this._isSPA) {
            document.addEventListener('scroll', scrollSnap)
            document.addEventListener('keydown', keyScroll)
        }

        if (this._scrollSnapping && !this._keyScrolling && !this._isSPA) document.addEventListener('scroll', scrollSnap)
        if (!this._scrollSnapping && this._keyScrolling && !this._isSPA) document.addEventListener('keydown', keyScroll)

        if (this._scrollSnapping && this._keyScrolling && this._isSPA) new Regent(['scroll', 'keydown'], [scrollSnap, keyScroll])
        if (this._scrollSnapping && !this._keyScrolling && this._isSPA) new Regent(['scroll'], [scrollSnap])
        if (!this._scrollSnapping && this._keyScrolling && this._isSPA) new Regent(['keydown'], [keyScroll])

        if (this._config.regent) new Regent(this._config.regent.on, this._config.regent.call)
    }

    sync(animation, smooth) {
        let value

        smooth ? value = 1 : value = true

        if (typeof smooth == 'number') value = smooth

        ScrollTrigger.create({
            animation,
            scrub: value
        })
    }

    selfDestruct() {
        const instances = ScrollTrigger.getAll()
        instances.forEach(instance => instance.kill())

        this._loopedInstances.forEach(instance => instance.destroy())
    }

    refresh() {ScrollTrigger.refresh(true)}
}