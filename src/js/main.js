import barba from '@barba/core'
import { Curtains, Plane } from 'curtainsjs'
import Rellax from 'rellax'
import Plyr from 'plyr'

import module from './module'
import main from '../css/main'

gsap.registerPlugin(ScrollTrigger)

let iteration = 0

const VIDEOS = gsap.utils.toArray('.items__video_layer video')

const spacing = 1 / VIDEOS.length
const snap = gsap.utils.snap(spacing)

const videoLayerAnimation = video => {
    const tl = gsap.timeline()

    tl.fromTo(video, {
        scale: .8,
        zIndex: -200
    }, {
        scale: 1,
        zIndex: -100,
        duration: .5,
        ease: 'power1.in',
        repeat: 1,
        yoyo: true,
        immediateRender: false
    })

    .fromTo(video, {
        yPercent: 300,
        rotationX: '-100px'
    }, {
        yPercent: -300,
        rotationX: '100px',
        duration: 1,
        ease: 'none',
        immediateRender: false
    }, 0)

    return tl
}

const loop = createLoop(VIDEOS, spacing, videoLayerAnimation)

const playhead = {
    offset: 0
}

const loopTime = gsap.utils.wrap(0, loop.duration())

const scrub = gsap.to(playhead, {
    offset: 0,
    onUpdate() {
        loop.time(loopTime(playhead.offset))
    },
    duration: .5,
    ease: 'power3',
    paused: true
})

const scroller = ScrollTrigger.create({
    start: 0,
    onUpdate(self) {
        let scrollSelf = self.scroll()

        if (scrollSelf > self.end - 1) {
            wrap(1, 1)
        } else if (scrollSelf < 1 && self.direction < 0) {
            wrap(-1, self.end - 1)
        } else {
            scrub.vars.offset = (iteration + self.progress) * loop.duration()
            scrub.invalidate().restart()
        }
    },
    end: '+=3000',
    pin: '.items'
})

const scrollProgress = progress => gsap.utils.clamp(1, scroller.end - 1, gsap.utils.wrap(0, 1, progress) * scroller.end)

const wrap = (iterationDelta, scrollPoint) => {
    iteration += iterationDelta
    scroller.scroll(scrollPoint)
    scroller.update()
}

ScrollTrigger.addEventListener('scrollEnd', () => {
    scrollPointOffset(scrub.vars.offset)
})

function scrollPointOffset(offset) {
    let time = snap(offset)
    let progress = (time - loop.duration() * iteration) / loop.duration()
    let scroll = scrollProgress(progress)

    if (progress >= 1 || progress < 0) {
        return wrap(Math.floor(progress), scroll)
    }
    scroller.scroll(scroll)
}

window.addEventListener('keydown', e => {
    const keyCodes = [
        'Space',
        'ArrowUp',
        'ArrowDown'
    ]

    if (keyCodes.indexOf(e.code) > -1) {
        e.preventDefault()
    }

    if (e.code === 'ArrowDown') {
        scrollPointOffset(scrub.vars.offset + spacing)
    }
    
    if (e.code === 'ArrowUp') {
        scrollPointOffset(scrub.vars.offset - spacing)
    }

}, false)

function createLoop(items, spacing, animation) {
    let overlap = Math.ceil(1 / spacing)
    let start = items.length * spacing + .5
    let end = (items.length + overlap) * spacing + 1

    let sequence = gsap.timeline({
        paused: true
    })

    let sequenceLoop = gsap.timeline({
        paused: true,
        repeat: -1,
        onRepeat() {
            this._time === this._dur && (this._tTime += this._dur - .01)
        }
    })

    let l = items.length + overlap * 2

    let time, i, index

    for (i = 0; i < l; i++) {
        index = i % items.length
        time = i * spacing

        sequence.add(animation(items[index]), time)
    }

    sequence.time(start)

    sequenceLoop.to(sequence, {
        time: end,
        duration: end - start,
        ease: 'none'
    })

    .fromTo(sequence, {
        time: overlap * spacing + 1
    }, {
        time: start,
        duration: start - (overlap * spacing + 1),
        ease: 'none',
        immediateRender: false
    })

    return sequenceLoop
}