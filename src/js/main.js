import barba from '@barba/core'
import Plyr from 'plyr'

import bundle, { Curtains, Plane } from './bundle'
import main from '../css/main'

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

const ITEMS = {
    VIDEOS: gsap.utils.toArray('.scroll_layers__video'),
    VIDEO_ID: gsap.utils.toArray('.scroll_layers__video_id')
}

const spacing = 1 / ITEMS.VIDEOS.length

const snap = gsap.utils.snap(spacing)

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
            reversed: true,
            immediateRender: false
        }, 0)

        return tl
    },
    videoIDLayerAnimation: id => {
        const tl = gsap.timeline()

        tl.fromTo(id, {
            scale: 1
        }, {
            scale: 1,
            duration: .5,
            ease: 'power1.in',
            repeat: 1,
            yoyo: true,
            immediateRender: false
        })

        .fromTo(id, {
            yPercent: 300,
            clipPath: 'inset(-500% -100% 500% -100%)'
        }, {
            yPercent: -300,
            clipPath: 'inset(500% -100% -500% -100%)',
            duration: 1,
            ease: 'none',
            reversed: true,
            immediateRender: false
        }, 0)

        return tl
    }
}

const loop = {
    videoLayerLoop: createLoop(ITEMS.VIDEOS, spacing, animation.videoLayerAnimation),
    videoIDLayerLoop: createLoop(ITEMS.VIDEO_ID, spacing, animation.videoIDLayerAnimation)
}

let iteration = 0

const playhead = {
    offset: 0
}

const loopTime = gsap.utils.wrap(0, loop.videoLayerLoop.duration())

const scrub = gsap.to(playhead, {
    offset: 0,
    onUpdate() {
        loop.videoLayerLoop.time(loopTime(playhead.offset))
        loop.videoIDLayerLoop.time(loopTime(playhead.offset))
    },
    duration: 1,
    ease: 'slow',
    paused: true
})

const scroller = ScrollTrigger.create({
    start: 0,
    onUpdate(self) {
        const scrollSelf = self.scroll()

        if (scrollSelf > self.end - 1) {
            scrollMeters.wrap(1, 1)
        } else if (scrollSelf < 1 && self.direction < 0) {
            scrollMeters.wrap(-1, self.end - 1)
        } else {
            scrub.vars.offset = (iteration + self.progress) * loop.videoLayerLoop.duration()
            scrub.invalidate().restart()
        }
    },
    end: '+=3000',
    pin: '.scroll_layers'
})

const scrollMeters = {
    scrollProgress: progress => gsap.utils.clamp(1, scroller.end - 1, gsap.utils.wrap(0, 1, progress) * scroller.end),
    wrap: (iterationDelta, scrollPoint) => {
        iteration += iterationDelta
        scroller.scroll(scrollPoint)
        scroller.update()
    }
}

const scrollPointOffset = offset => {
    const time = snap(offset)
    const progress = (time - loop.videoLayerLoop.duration() * iteration) / loop.videoLayerLoop.duration()
    const scroll = scrollMeters.scrollProgress(progress)
    
    if (progress >= 1 || progress < 0) {
        return scrollMeters.wrap(Math.floor(progress), scroll)
    }

    scroller.scroll(scroll)
}

const scrollSnap = () => {
    scrollPointOffset(scrub.vars.offset)
}

ScrollTrigger.addEventListener('scrollEnd', scrollSnap)

const keyScroll = e => {
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
}

window.addEventListener('keydown', keyScroll, false)

const videoElements = document.getElementsByClassName('scroll_layers__video')
const videoArray = [ ...videoElements ]

const scrollIndexNumber = document.querySelector('.scroll_index__number')
const scrollIndicatorIndex = document.querySelector('.scroll_indicator_index')

const updateElementState = () => {
    let i

    for (i = 0; i < videoArray.length; i++) {
        const video = videoArray[i]
        const videoStyles = video.getAttribute('style')

        const videoData = video.dataset.index
        const videoDataValues = [ ...videoData ]

        if (videoDataValues.length > -1 && videoStyles.includes('z-index: -100')) {
            video.play()
            scrollIndexNumber.innerHTML = videoData
            scrollIndicatorIndex.innerHTML = videoData
        }

        if (!videoStyles.includes('z-index: -100')) {
            video.pause()
        }
    }
}

gsap.ticker.add(updateElementState)

const parallax = e => {
    gsap.to('.scroll_layers__video_id', {
        x: e.clientX / 20 * -1,
        y: e.clientY / 20 * -1,
        duration: 1
    })
}

document.addEventListener('mousemove', parallax)

const scrollIndicator = document.querySelector('.scroll_indicator')

const scrollSync = gsap.to(scrollIndicator, {
    rotation: 360
})

ScrollTrigger.create({
    animation: scrollSync,
    scrub: 1
})

const menuOpen = document.querySelector('.menu--open')
const menuOpenUIFragments = document.querySelectorAll('.menu--open__ui_fragment')

const menuClose = document.querySelector('.menu--close')
const menuCloseUIFragments = document.querySelectorAll('.menu--close__ui_fragment')

const menuAnimation = menuStateFragments => {
    const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 6
    })

    tl.set(menuStateFragments, {
        transformOrigin: 'right'
    })

    .to(menuStateFragments, {
        scaleX: 0,
        duration: .3,
        ease: 'power2.out',
        stagger: .2
    })
    
    .set(menuStateFragments, {
        transformOrigin: 'left'
    })
    
    .to(menuStateFragments, {
        scaleX: 1,
        duration: .3,
        ease: 'power2.out',
        stagger: .2
    })

    return tl
}

const menuOpenAnimation = menuAnimation(menuOpenUIFragments)
const menuCloseAnimation = menuAnimation(menuCloseUIFragments)

const restartMenuOpenAnimation = () => menuOpenAnimation.restart().timeScale(1.5)
const resetMenuOpenTimeScale = () => menuOpenAnimation.timeScale(1)

const restartMenuCloseAnimation = () => menuCloseAnimation.restart().timeScale(1.5)
const resetMenuCloseTimeScale = () => menuCloseAnimation.timeScale(1)

menuOpen.addEventListener('mouseenter', restartMenuOpenAnimation)
menuOpen.addEventListener('mouseleave', resetMenuOpenTimeScale)

menuClose.addEventListener('mouseenter', restartMenuCloseAnimation)
menuClose.addEventListener('mouseleave', resetMenuCloseTimeScale)

// Debugging
document.addEventListener('dblclick', () => {
    loop.videoLayerLoop.kill()
    loop.videoIDLayerLoop.kill()

    scrub.kill()
    scroller.kill()

    ScrollTrigger.removeEventListener('scrollEnd', scrollSnap)
    window.removeEventListener('keydown', keyScroll)
    document.removeEventListener('mousemove', parallax)
})

const toSelf = document.querySelector('.works_page_as_menu__to_self')

const scrollToGL = () => {
    const tl = gsap.timeline()

    .to(window, {
        scrollTo: {
            y: '#_gl_scroll',
            offsetY: 250
        },
        duration: 2,
        ease: 'power4.inOut'
    })

    .from('._gl_container', {
        autoAlpha: 0,
        duration: .5,
        ease: 'slow'
    }, '-=1')

    return tl
}

toSelf.addEventListener('click', scrollToGL)

const vertexShader = `
precision mediump float;

attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

varying vec3 vVertexPosition;
varying vec2 vTextureCoord;

uniform float uTime;

void main() {
    vec3 vertexPosition = aVertexPosition;

    vertexPosition.z = sin(vertexPosition.x * 3.141592 + uTime * 0.0375) * 0.02;

    gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

    vTextureCoord = aTextureCoord;
    vVertexPosition = vertexPosition;
}
`

const fragmentShader = `
precision mediump float;

varying vec3 vVertexPosition;
varying vec2 vTextureCoord;

uniform sampler2D uSampler0;

void main() {
    gl_FragColor = texture2D(uSampler0, vTextureCoord);
}
`

const init = new Curtains({
    container: 'c',
    autoRender: false
})

gsap.ticker.add(init.render.bind(init))

const planeElements = document.getElementsByClassName('_gl__plane')

const config = {
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    widthSegments: 30,
    heightSegments: 30,
    uniforms: {
        time: {
            name: 'uTime',
            type: '1f',
            value: 0
        }
    }
}

const planes = []

const renderPlanes = index => {
    const plane = planes[index]

    plane.onRender(() => {
        plane.playVideos()
        plane.uniforms.time.value++
    })
}

for (let i = 0; i < planeElements.length; i++) {
    const plane = new Plane(init, planeElements[i], config)

    planes.push(plane)

    renderPlanes(i)
}