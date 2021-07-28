import barba from '@barba/core'
import { Curtains, Plane } from 'curtainsjs'
import Rellax from 'rellax'
import Plyr from 'plyr'

import module from './module'
import main from '../css/main'

gsap.registerPlugin(ScrollTrigger)

const createLoop = (items, spacing, animation) => {
    const overlap = Math.ceil(1 / spacing)
    const start = items.length * spacing + .5
    const end = (items.length + overlap) * spacing + .5

    const sequence = gsap.timeline({
        paused: true
    })

    const sequenceLoop = gsap.timeline({
        paused: true,
        repeat: -1,
        onRepeat() {
            this._time === this._dur && (this._tTime += this._dur - .01)
        }
    })

    const l = items.length + overlap * 2

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

const SCOPE = {
    videoLayerScope: document.querySelector('.video_layer__container')
}

const ITEMS = {
    VIDEOS: gsap.utils.toArray('.video_layer__item', SCOPE.videoLayerScope)
}

const spacing = {
    videoLayerSpacing: 1 / ITEMS.VIDEOS.length
}

const snap = {
    videoLayerSnap: gsap.utils.snap(spacing.videoLayerSpacing)
}

const animation = {
    videoLayerAnimation: video => {
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
}

const loop = {
    videoLayerLoop: createLoop(ITEMS.VIDEOS, spacing.videoLayerSpacing, animation.videoLayerAnimation)
}

let iteration = 0

const playhead = {
    offset: 0
}

const timeLoop = {
    videoLayerTimeLoop: gsap.utils.wrap(0, loop.videoLayerLoop.duration())
}

const scrub = {
    videoLayerScrub: gsap.to(playhead, {
        offset: 0,
        onUpdate() {
            loop.videoLayerLoop.time(timeLoop.videoLayerTimeLoop(playhead.offset))
        },
        duration: 1,
        ease: 'slow',
        paused: true
    })
}

const scroller = {
    videoLayerScroller: ScrollTrigger.create({
        start: 0,
        onUpdate(self) {
            const scrollSelf = self.scroll()

            if (scrollSelf > self.end - 1) {
                scrollMeters.videoLayerWrap(1, 1)
            } else if (scrollSelf < 1 && self.direction < 0) {
                scrollMeters.videoLayerWrap(-1, self.end - 1)
            } else {
                scrub.videoLayerScrub.vars.offset = (iteration + self.progress) * loop.videoLayerLoop.duration()
                scrub.videoLayerScrub.invalidate().restart()
            }
        },
        end: '+=3000',
        pin: '.video_layer'
    })
}

const scrollMeters = {
    videoLayerScrollProgress: progress => gsap.utils.clamp(1, scroller.videoLayerScroller.end - 1, gsap.utils.wrap(0, 1, progress) * scroller.videoLayerScroller.end),
    videoLayerWrap: (iterationDelta, scrollPoint) => {
        iteration += iterationDelta
        scroller.videoLayerScroller.scroll(scrollPoint)
        scroller.videoLayerScroller.update()
    }
}

const scrollPointOffset = {
    videoLayerOffset: offset => {
        const time = snap.videoLayerSnap(offset)
        const progress = (time - loop.videoLayerLoop.duration() * iteration) / loop.videoLayerLoop.duration()
        const scroll = scrollMeters.videoLayerScrollProgress(progress)
        
        if (progress >= 1 || progress < 0) {
            return scrollMeters.videoLayerWrap(Math.floor(progress), scroll)
        }

        scroller.videoLayerScroller.scroll(scroll)
    }
}

ScrollTrigger.addEventListener('scrollEnd', () => {
    scrollPointOffset.videoLayerOffset(scrub.videoLayerScrub.vars.offset)
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
        scrollPointOffset.videoLayerOffset(scrub.videoLayerScrub.vars.offset + spacing.videoLayerSpacing)
    }
    
    if (e.code === 'ArrowUp') {
        scrollPointOffset.videoLayerOffset(scrub.videoLayerScrub.vars.offset - spacing.videoLayerSpacing)
    }

}, false)

const videoElements = document.getElementsByClassName('video_layer__item')
const videoArray = [ ...videoElements ]

const playOnSnap = () => {
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