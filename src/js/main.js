import barba from '@barba/core'
import { Curtains, Plane } from 'curtainsjs'
import Rellax from 'rellax'
import Plyr from 'plyr'

import module from './module'
import main from '../css/main'

gsap.registerPlugin(ScrollTrigger)

const scopes = {
    videoLayerScope: document.querySelector('.items__video_layer')
}

const ITEMS = {
    VIDEOS: gsap.utils.toArray('video', scopes.videoLayerScope)
}

const spacing = 1 / ITEMS.VIDEOS.length
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

    let i, index, time

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

const loops = {
    videoLayerLoop: createLoop(ITEMS.VIDEOS, spacing, videoLayerAnimation)
}

const loopTime = gsap.utils.wrap(0, loops.videoLayerLoop.duration())

let iteration = 0

const playhead = {
    offset: 0
}

const scrub = gsap.to(playhead, {
    offset: 0,
    onUpdate() {
        loops.videoLayerLoop.time(loopTime(playhead.offset))
    },
    duration: 1,
    ease: 'slow',
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
            scrub.vars.offset = (iteration + self.progress) * loops.videoLayerLoop.duration()
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

function scrollPointOffset(offset) {
    let time = snap(offset)
    let progress = (time - loops.videoLayerLoop.duration() * iteration) / loops.videoLayerLoop.duration()
    let scroll = scrollProgress(progress)

    if (progress >= 1 || progress < 0) {
        return wrap(Math.floor(progress), scroll)
    }
    scroller.scroll(scroll)
}

ScrollTrigger.addEventListener('scrollEnd', () => {
    scrollPointOffset(scrub.vars.offset)
})

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

const playOnSnap = () => {
    const videoElements = document.getElementsByTagName('video')
    const videoArray = [ ...videoElements ]

    let i

    for (i = 0; i < videoArray.length; i++) {
        const video = videoArray[i];
        const videoStyles = video.getAttribute('style')

        if (videoStyles.includes('z-index: -100')) {
            video.play()
        }

        if (!videoStyles.includes('z-index: -100')) {
            video.pause()
        }
    }
}

gsap.ticker.add(playOnSnap)