import Regent, { silencer } from "./Regent"
import Loop from "./Loop"

export default class ScrollLoop extends Loop {
    constructor(config) {
        super()

        this._config = config
        this._elements = config.elements
        this._animations = config.animations
        this._scrollSnapping = config.scrollSnapping
        this._keyScrolling = config.keyScrolling
        this._horizontal = config.horizontal
        this._reversed = config.reversed
        this._spacing = config.dial.spacing
        this._distance = config.dial.distance
        this._effect = config.dial.effect

        this._presets = {
            enter: {
                repeat: 1,
                ease: 'none',
                yoyo: true,
                immediateRender: false
            },
            across: {
                from: {},
                to: {
                    duration: 1,
                    ease: 'none',
                    reversed: false,
                    immediateRender: false
                }
            }
        }

        if (this._reversed) this._presets.across.to.reversed = true

        this._percent = Number(`${this._spacing}00`)

        this._horizontal ? this._axis = 'x' : this._axis = 'y'

        this._presets.across.from[`${this._axis}Percent`] = this._percent
        this._presets.across.to[`${this._axis}Percent`] = -this._percent

        this._timelines = []

        for (let i = 0; i < this._animations.length; i++) {
            const {timeline: {enter, across}} = this._animations[i]

            const timeline = element => gsap.timeline()
            .fromTo(element, {...enter.from}, {...enter.to, ...this._presets.enter})
            .fromTo(element, {...across.from, ...this._presets.across.from}, {...across.to, ...this._presets.across.to}, 0)

            this._timelines.push(timeline)
        }

        this._instances = []

        for (let i = 0; i < this._elements.length; i++) {
            const elements = this._elements[i]
            const timeline = this._timelines[i]
            
            this._instances.push(new Loop(elements, timeline, this._spacing))
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
            end: `+=${this._distance}000`,
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

        const scrollSnap = e => {
            if (timer != null) clearTimeout(timer)
            timer = setTimeout(() => {
                scrollDelta(motion.vars.delta)
                if (this._config.onSnap) this._config.onSnap(e)
            }, 200)
        }

        const keyScroll = e => {
            const keyCodes = ['Space', 'ArrowUp', 'ArrowDown']

            if (keyCodes.indexOf(e.code) > -1) e.preventDefault()
            
            if (e.code == 'ArrowDown') {
                scrollDelta(motion.vars.delta + 1 / instance._space)
                if (this._config.onKey.down) this._config.onKey.down(e)
            }

            if (e.code == 'ArrowUp') {
                scrollDelta(motion.vars.delta - 1 / instance._space)
                if (this._config.onKey.up) this._config.onKey.up(e)
            }
        }

        if (this._scrollSnapping && this._keyScrolling) new Regent(['scroll', 'keydown'], [scrollSnap, keyScroll])
        if (this._scrollSnapping && !this._keyScrolling) new Regent(['scroll'], [scrollSnap])
        if (!this._scrollSnapping && this._keyScrolling) new Regent(['keydown'], [keyScroll])
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

    selfDestruct(overwrite) {
        const instances = ScrollTrigger.getAll()
        instances.forEach(instance => instance.kill())

        this._loopedInstances.forEach(instance => instance.destroy())

        if (overwrite) new Regent(overwrite.regent.on, overwrite.regent.call)

        if (!overwrite) {
            if (this._scrollSnapping && this._keyScrolling) new Regent(['scroll', 'keydown'], [silencer, silencer])
            if (this._scrollSnapping && !this._keyScrolling) new Regent(['scroll'], [silencer])
            if (!this._scrollSnapping && this._keyScrolling) new Regent(['keydown'], [silencer])
        }
    }

    refresh() {ScrollTrigger.refresh(true)}
}