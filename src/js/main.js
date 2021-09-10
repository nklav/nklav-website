import barba from '@barba/core'
import Plyr from 'plyr'
import { Curtains, Plane } from './bundle'
import main from '../css/main'

class EventRegent {
    constructor(signal, receiver) {
        this._signal_0 = signal[0]
        this._signal_1 = signal[1]
        this._signal_2 = signal[2]
        this._receiver_0 = receiver[0]
        this._receiver_1 = receiver[1]

        this._e = new Event(this._signal_1)

        if (window.accessProp_0 && window.accessMethod_0) window.removeEventListener(window.accessProp_0, window.accessMethod_0)
        if (window.accessProp_1 && window.accessMethod_1) window.removeEventListener(window.accessProp_1, window.accessMethod_1)
        if (window.accessProp_2 && window.accessMethod_2) window.removeEventListener(window.accessProp_2, window.accessMethod_2)

        window.accessProp_0 = this._signal_0
        window.accessProp_1 = this._signal_1
        window.accessProp_2 = this._signal_2
        window.accessMethod_0 = this._registry_0.bind(this)
        window.accessMethod_1 = this._registry_1.bind(this)
        window.accessMethod_2 = this._receiver_1

        window.addEventListener(window.accessProp_0, window.accessMethod_0)
        window.addEventListener(window.accessProp_1, window.accessMethod_1)

        window.dispatchEvent(this._e)
    }

    _registry_0() {this._receiver_0()}
    _registry_1() {window.addEventListener(window.accessProp_2, window.accessMethod_2)}
}

class Loop {
    constructor(nodes, animation, n) {
        this._nodes = gsap.utils.toArray(nodes)
        this._animation = animation
        this._n = n

        console.log(this._nodes)
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
    
            spaceTime.add(this._animation(this._nodes[index]), time)
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

class ScrollLoop extends Loop {
    constructor(config, data) {
        super()

        this._elements = config.elements
        this._animations = config.animations
        this._easingCurve = config.easingCurve
        this._scrollSnapping = config.scrollSnapping
        this._keyScrolling = config.keyScrolling
        this._isSPA = config.isSPA
        this._limit = config.speedDial.limit
        this._acceleration = config.speedDial.acceleration

        this._on = data.on
        this._node = data.node

        this._instances = []

        if (Array.isArray(this._elements && this._animations)) {
            for (let i = 0; i < this._elements.length; i++) {
                const elements = this._elements[i]
                const animation = this._animations[i]
    
                this._instances.push(new Loop(elements, animation, this._limit))
            }
        }

        if (!Array.isArray(this._elements && this._animations)) this._instances.push(new Loop(this._elements, this._animations, this._limit))

        this._loopedInstances = []

        for (let i = 0; i < this._instances.length; i++) {
            const instance = this._instances[i]._loop()
            this._loopedInstances.push(instance)
        }
    }

    scroll() {
        const scrollContainer = document.querySelector('[data-scroll-loop]')

        const [instance] = this._instances
        const [loopedInstance] = this._loopedInstances

        let iteration = 0

        const playhead = {delta: 0}

        const timeLoop = gsap.utils.wrap(0, loopedInstance.timeline.duration())

        const setDuration = () => {
            const duration = Number(scrollContainer.dataset.scrollSmoothing)

            if (isNaN(duration) || duration === 0) return .5
            if (duration >= .5 && duration <= 2) return duration
        }

        const motion = gsap.to(playhead, {
            delta: 0,
            duration: setDuration(),
            ease: this._easingCurve,
            paused: true,
            onUpdate: () => this._loopedInstances.forEach(instance => instance.timeline.time(timeLoop(playhead.delta)))
        })

        const scrollbar = ScrollTrigger.create({
            start: 0,
            end: `+=${this._acceleration}`,
            pin: scrollContainer,
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
            const meter = scrollMeter(progress)

            if (progress >= 1 || progress < 0) scrollCircle(Math.floor(progress), meter)

            scrollbar.scroll(meter)
        }

        if (this._scrollSnapping && this._keyScrolling) {
            let timer = null
    
            const scrollSnap = () => {
                if (timer != null) clearTimeout(timer)
                timer = setTimeout(() => scrollDelta(motion.vars.delta), 200)
            }
    
            const keyScroll = e => {
                const keyCodes = ['Space', 'ArrowUp', 'ArrowDown']

                if (keyCodes.indexOf(e.code) > -1) e.preventDefault()
                
                if (e.code == 'ArrowDown') {
                    scrollDelta(motion.vars.delta + 1 / instance._space)
                    this._node.innerHTML = 'down'
                    setTimeout(() => this._node.innerHTML = 'scroll', 1000)
                }

                if (e.code == 'ArrowUp') {
                    scrollDelta(motion.vars.delta - 1 / instance._space)
                    this._node.innerHTML = 'up'
                    setTimeout(() => this._node.innerHTML = 'scroll', 1000)
                }
            }
    
            new EventRegent(this._on, [scrollSnap, keyScroll])
        }
    }

    sync(animation, smooth) {
        let value

        smooth ? value = 1 : value = true

        if (typeof smooth === 'number') value = smooth

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

const loader = document.querySelector('.loader')
const progressBar = document.querySelector('.loader__progress_bar')

const logo = document.querySelector('.to_home')

const openMenu = document.querySelector('.menu--open')
const openMenuUIFragments = document.querySelectorAll('.menu--open__ui_fragment')

const closeMenu = document.querySelector('.menu--close')
const closeMenuUIFragments = document.querySelectorAll('.menu--close__ui_fragment')

const scrollLayers = document.querySelector('.scroll_layers')

const pageTitles = document.querySelectorAll('.scroll_layers__page_title a')

const scrollIndicator = document.querySelector('.scroll_indicator')
const scrollIndicatorIndex = document.querySelector('.scroll_indicator_index')

const scrollHint = document.querySelector('.scroll_hint')

const scrollIndex = document.querySelector('.scroll_index')

const listItems = document.querySelectorAll('.menu_page__list_item')

const pageTransitionComponents = document.querySelectorAll('.ui_page_transition_component')

const heading = document.querySelector('.page_content__heading')
const description = document.querySelector('.page_content__description')

const shareLabel = document.querySelector('.page_content__share_label')
const socialIcons = document.querySelectorAll('.page_content__icon')

const play = document.querySelectorAll('.page_content__play')
const info = document.querySelector('.page_content__show_info')

const loadingAnimation = () => {
    return gsap.timeline({delay: 1})

    .set(loader, {display: 'block'})

    .from(loader, {
        opacity: 0,
        duration: .3,
        ease: 'none'
    })

    .to(progressBar, {
        scaleX: .25,
        ease: 'power2.out',
        delay: .3
    })

    .to(progressBar, {
        scaleX: .5,
        ease: 'power2.out'
    })

    .to(progressBar, {
        scaleX: 1,
        ease: 'power4.in',
        delay: .5
    })

    .set(loader, {transformOrigin: 'right'})

    .to(loader, {
        scaleX: 0,
        ease: 'power4.out',
        delay: .3
    })

    .set(loader, {display: 'none'})
}

const homeOnce = page => {
    return gsap.timeline({
        onStart: () => document.body.classList.add('no_scroll'),
        onComplete: () => document.body.classList.remove('no_scroll')
    })

    .set([logo, openMenu], {display: 'block'})

    .set(openMenuUIFragments, {transformOrigin: 'left'})

    .set([scrollLayers, scrollIndicator, scrollIndicatorIndex, scrollHint, scrollIndex], {visibility: 'visible'})

    .add(loadingAnimation())

    .fromTo(logo, {autoAlpha: 0}, {
        autoAlpha: 1,
        ease: 'none'
    }, '>.5')

    .fromTo(openMenuUIFragments, {scaleX: 0}, {
        scaleX: 1,
        stagger: .2
    }, '<')
    
    .from(page, {
        autoAlpha: 0,
        duration: 1,
        ease: 'none'
    }, '<')

    .from(scrollIndicator, {
        rotation: 360,
        duration: 1
    }, '<')

    .set([openMenu, pageTitles], {pointerEvents: 'auto'})
}

const menuOnce = page => {
    return gsap.timeline({onStart: () => document.body.classList.add('no_scroll')})

    .set(closeMenu, {display: 'block'})

    .add(loadingAnimation())

    .fromTo(closeMenuUIFragments, {scaleX: 0}, {
        scaleX: 1,
        stagger: .2
    }, '>.5')

    .set(closeMenu, {
        pointerEvents: 'auto',
        onComplete: () => closeMenu.setAttribute('href', '/')
    })

    .from(page, {
        autoAlpha: 0,
        duration: 1,
        ease: 'none'
    }, '>-1')

    .from(listItems, {
        xPercent: 100,
        duration: .8,
        stagger: .1
    }, '<')

    .set(listItems, {pointerEvents: 'auto'})
}

const contentOnce = page => {
    const video = page.querySelector('video')

    return gsap.timeline()

    .set([logo, openMenu], {display: 'block'})

    .set(openMenuUIFragments, {transformOrigin: 'left'})

    .add(loadingAnimation())
    
    .to(pageTransitionComponents, {
        scaleY: 0,
        duration: 4,
        ease: 'slow',
        onStart: () => video.play()
    }, '>.5')

    .fromTo(logo, {autoAlpha: 0}, {
        autoAlpha: 1,
        ease: 'none'
    }, '>-1.5')
    
    .fromTo(openMenuUIFragments, {scaleX: 0}, {
        scaleX: 1,
        stagger: .2
    }, '<')
    
    .set(openMenu, {pointerEvents: 'auto'})

    .from(heading, {
        xPercent: -100,
        duration: 1,
        ease: 'power2.out'
    }, '>-1.5')

    .from(description, {
        yPercent: -100,
        duration: 1,
        ease: 'power2.out'
    }, '<')
    
    .from(shareLabel, {
        yPercent: 100,
        duration: .8,
        ease: 'power2.out'
    }, '<')
    
    .from(socialIcons, {
        scale: 0,
        ease: 'back',
        duration: .8,
        stagger: .2
    }, '>-.2')
    
    .from(play, {
        scale: 0,
        duration: .8,
        ease: 'back',
        clearProps: 'scale'
    }, '<')
    
    .from(info, {
        autoAlpha: 0,
        duration: .8,
        ease: 'none'
    }, '<')

    .set(['.page_content__sns', play], {pointerEvents: 'auto'})

    .set(play, {transition: 'transform .5s cubic-bezier(.2, 0, 0, 2)'})
}

const homeLeave = page => {
    const pageTitles = page.querySelectorAll('.scroll_layers__page_title a')

    return gsap.timeline()

    .set(openMenuUIFragments, {transformOrigin: 'right'})

    .set(pageTitles, {pointerEvents: 'none'})

    .fromTo(logo, {autoAlpha: 1}, {
        autoAlpha: 0,
        ease: 'none'
    })

    .fromTo(openMenuUIFragments, {scaleX: 1}, {
        scaleX: 0,
        stagger: .2
    }, '<')

    .set([logo, openMenu], {display: 'none'})

    .set(openMenu, {pointerEvents: 'none'})

    .to(page, {
        autoAlpha: 0,
        duration: .8,
        ease: 'none'
    }, '>-.5')
}

const menuLeave = page => {
    const listItems = page.querySelectorAll('.menu_page__list_item')

    return gsap.timeline()

    .set([closeMenu, listItems], {pointerEvents: 'none'})

    .fromTo(closeMenuUIFragments, {scaleX: 1}, {
        scaleX: 0,
        stagger: .2
    })

    .set(closeMenu, {display: 'none'})

    .to(page, {
        autoAlpha: 0,
        duration: .8,
        ease: 'none'
    }, 0)
}

const contentLeaveToHome = page => {
    const video = page.querySelector('video')

    const pageTransitionComponents = page.querySelectorAll('.ui_page_transition_component')

    const play = page.querySelectorAll('.page_content__play')

    return gsap.timeline()

    .set([logo, openMenu, '.page_content__sns', play], {pointerEvents: 'none'})

    .set(play, {transition: 'none'})

    .to(pageTransitionComponents, {
        scaleY: 1,
        duration: .8,
        ease: 'power1.inOut',
        onComplete: () => {
            video.pause()
            video.currentTime = 0
        }
    })

    .set(page, {}, '+=.5')
}

const contentLeaveToMenu = page => {
    const video = page.querySelector('video')

    const pageTransitionComponents = page.querySelectorAll('.ui_page_transition_component')

    const play = page.querySelectorAll('.page_content__play')

    return gsap.timeline()

    .set([openMenu, '.page_content__sns', play], {pointerEvents: 'none'})

    .set(openMenuUIFragments, {transformOrigin: 'right'})

    .set(play, {transition: 'none'})

    .fromTo(logo, {autoAlpha: 1}, {
        autoAlpha: 0,
        ease: 'none'
    })

    .fromTo(openMenuUIFragments, {scaleX: 1}, {
        scaleX: 0,
        stagger: .2
    }, '<')

    .set([logo, openMenu], {display: 'none'})

    .to(pageTransitionComponents, {
        scaleY: 1,
        duration: .8,
        ease: 'power1.inOut',
        onComplete: () => {
            video.pause()
            video.currentTime = 0
        }
    })
}

const homeEnter = page => {
    const scrollLayers = page.querySelector('.scroll_layers')

    const pageTitles = page.querySelectorAll('.scroll_layers__page_title a')

    const scrollIndicator = page.querySelector('.scroll_indicator')
    const scrollIndicatorIndex = page.querySelector('.scroll_indicator_index')

    const scrollHint = page.querySelector('.scroll_hint')

    const scrollIndex = page.querySelector('.scroll_index')

    return gsap.timeline({
        delay: .5,
        onStart: () => {if (document.body.classList.contains('no_scroll')) document.body.classList.remove('no_scroll')}
    })

    .set([logo, openMenu], {display: 'block'})

    .set(openMenuUIFragments, {transformOrigin: 'left'})

    .set([scrollLayers, scrollIndicator, scrollIndicatorIndex, scrollHint, scrollIndex], {visibility: 'visible'})

    .fromTo(logo, {autoAlpha: 0}, {
        autoAlpha: 1,
        ease: 'none'
    })

    .fromTo(openMenuUIFragments, {scaleX: 0}, {
        scaleX: 1,
        stagger: .2
    }, '<')

    .from(page, {
        autoAlpha: 0,
        duration: .8,
        ease: 'none'
    }, '<')

    .set([openMenu, pageTitles], {pointerEvents: 'auto'})
}

const homeEnterFromContent = page => {
    const scrollLayers = page.querySelector('.scroll_layers')

    const pageTitles = page.querySelectorAll('.scroll_layers__page_title a')

    const scrollIndicator = page.querySelector('.scroll_indicator')
    const scrollIndicatorIndex = page.querySelector('.scroll_indicator_index')

    const scrollHint = page.querySelector('.scroll_hint')

    const scrollIndex = page.querySelector('.scroll_index')

    return gsap.timeline()

    .set([scrollLayers, scrollIndicator, scrollIndicatorIndex, scrollHint, scrollIndex], {visibility: 'visible'})
    
    .from(page, {
        autoAlpha: 0,
        duration: .8,
        ease: 'none'
    }, '+=.2')

    .set([logo, openMenu, pageTitles], {pointerEvents: 'auto'})

    .set(openMenuUIFragments, {transformOrigin: 'left'})
}

const menuEnter = page => {
    const listItems = page.querySelectorAll('.menu_page__list_item')

    const footer = page.querySelector('.menu_page__footer')

    return gsap.timeline({onStart: () => document.body.classList.add('no_scroll')})

    .set(closeMenu, {display: 'block'})

    .fromTo(closeMenuUIFragments, {scaleX: 0}, {
        scaleX: 1,
        stagger: .2
    })

    .from(listItems, {
        xPercent: 100,
        duration: .8,
        stagger: .1
    }, '<')

    .from(footer, {
        autoAlpha: 0,
        duration: .8,
        ease: 'none'
    }, '<')

    .set([closeMenu, listItems], {pointerEvents: 'auto'})
}

const contentEnter = page => {
    const video = page.querySelector('video')

    const pageTransitionComponents = page.querySelectorAll('.ui_page_transition_component')

    const heading = page.querySelector('.page_content__heading')
    const description = page.querySelector('.page_content__description')

    const shareLabel = page.querySelector('.page_content__share_label')
    const socialIcons = page.querySelectorAll('.page_content__icon')

    const play = page.querySelectorAll('.page_content__play')
    const info = page.querySelector('.page_content__show_info')

    return gsap.timeline({
        delay: .5,
        onStart: () => {if (document.body.classList.contains('no_scroll')) document.body.classList.remove('no_scroll')}
    })

    .set([logo, openMenu], {display: 'block'})

    .set(openMenuUIFragments, {transformOrigin: 'left'})
    
    .to(pageTransitionComponents, {
        scaleY: 0,
        duration: 4,
        ease: 'slow',
        onStart: () => video.play()
    })

    .fromTo(logo, {autoAlpha: 0}, {
        autoAlpha: 1,
        ease: 'none'
    }, '>-1.5')
    
    .fromTo(openMenuUIFragments, {scaleX: 0}, {
        scaleX: 1,
        stagger: .2
    }, '<')

    .set(openMenu, {pointerEvents: 'auto'})

    .from(heading, {
        xPercent: -100,
        duration: 1,
        ease: 'power2.out'
    }, '>-1.5')

    .from(description, {
        yPercent: -100,
        duration: 1,
        ease: 'power2.out'
    }, '<')
    
    .from(shareLabel, {
        yPercent: 100,
        duration: .8,
        ease: 'power2.out'
    }, '<')
    
    .from(socialIcons, {
        scale: 0,
        ease: 'back',
        duration: .8,
        stagger: .2
    }, '>-.2')
    
    .from(play, {
        scale: 0,
        duration: .8,
        ease: 'back',
        clearProps: 'scale'
    }, '<')
    
    .from(info, {
        autoAlpha: 0,
        duration: .8,
        ease: 'none'
    }, '<')

    .set(['.page_content__sns', play], {pointerEvents: 'auto'})

    .set(play, {transition: 'transform .5s cubic-bezier(.2, 0, 0, 2)'})
}

const contentEnterFromMenu = page => {
    const video = page.querySelector('video')

    const pageTransitionComponents = page.querySelectorAll('.ui_page_transition_component')

    const play = page.querySelectorAll('.page_content__play')

    return gsap.timeline({
        delay: .5,
        onStart: () => {if (document.body.classList.contains('no_scroll')) document.body.classList.remove('no_scroll')}
    })

    .set([logo, openMenu], {display: 'block'})

    .set(openMenuUIFragments, {transformOrigin: 'left'})
    
    .to(pageTransitionComponents, {
        scaleY: 0,
        duration: 1,
        ease: 'power1.inOut',
        onStart: () => video.play()
    })

    .fromTo(logo, {autoAlpha: 0}, {
        autoAlpha: 1,
        ease: 'none'
    }, '>-.3')
    
    .fromTo(openMenuUIFragments, {scaleX: 0}, {
        scaleX: 1,
        stagger: .2
    }, '<')

    .set([openMenu, '.page_content__sns', play], {pointerEvents: 'auto'})

    .set(play, {transition: 'transform .5s cubic-bezier(.2, 0, 0, 2)'})
}

const pageContentAnimation = element => {
    return gsap.timeline()

    .fromTo(element, {zIndex: -200}, {
        zIndex: -100,
        ease: 'power1.in',
        repeat: 1,
        yoyo: true,
        immediateRender: false
    })

    .fromTo(element, {yPercent: 500}, {
        yPercent: -500,
        duration: 1,
        ease: 'none',
        immediateRender: false
    }, 0)
}

const pageTitleAnimation = element => {
    return gsap.timeline()

    .fromTo(element, {scale: 1}, {
        scale: 1,
        ease: 'power1.in',
        repeat: 1,
        yoyo: true,
        immediateRender: false
    })

    .fromTo(element, {
        yPercent: 500,
        clipPath: 'inset(-800% -100% 800% -100%)'
    }, {
        yPercent: -500,
        clipPath: 'inset(800% -100% -800% -100%)',
        duration: 1,
        ease: 'none',
        immediateRender: false
    }, 0)
}

const accessFrame = listener => {
    if (window.accessFrame) gsap.ticker.remove(window.accessFrame)

    window.accessFrame = listener
    gsap.ticker.add(window.accessFrame)
}

const silencer = () => {return}

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

if (history.scrollRestoration) history.scrollRestoration = 'manual'

barba.hooks.afterLeave(() => window.scrollTo(0, 0))
barba.hooks.enter(({current}) => closeMenu.setAttribute('href', current.url.href))

barba.init({
    schema: {
        prefix: 'data-app',
        wrapper: 'root',
        container: 'state',
        namespace: 'page'
    },
    views: [
        {
            namespace: 'home',
            beforeEnter({next}) {
                const pageContent = next.container.querySelectorAll('.scroll_layers__page_content')
                const pageTitles = next.container.querySelectorAll('.scroll_layers__page_title')
                
                const scrollIndicator = next.container.querySelector('.scroll_indicator')

                const scrollHint = next.container.querySelector('.scroll_hint')
                
                const scrollLoop = new ScrollLoop({
                    elements: [pageContent, pageTitles],
                    animations: [pageContentAnimation, pageTitleAnimation],
                    easingCurve: 'slow',
                    scrollSnapping: true,
                    keyScrolling: true,
                    isSPA: true,
                    speedDial: {
                        limit: .5,
                        acceleration: 3000
                    }
                }, {
                    on: ['scroll', 'custom', 'keydown'],
                    node: scrollHint
                })
                
                const scrollIndicatorAnimation = gsap.to(scrollIndicator, {rotation: 360})
                
                scrollLoop.scroll()
                scrollLoop.refresh()
                scrollLoop.sync(scrollIndicatorAnimation, true)

                const videoElements = next.container.getElementsByClassName('scroll_layers__page_content')
                const buffer = [...videoElements]

                const scrollIndexNumber = next.container.querySelector('.scroll_index__number')
                const scrollIndicatorIndex = next.container.querySelector('.scroll_indicator_index')

                const updateState = () => {
                    for (let i = 0; i < buffer.length; i++) {
                        const video = buffer[i]
                        const videoStyles = video.getAttribute('style')

                        const videoData = video.dataset.index

                        if (videoStyles.includes('z-index: -100') && video.paused) {
                            video.play()

                            scrollIndexNumber.innerHTML = videoData
                            scrollIndicatorIndex.innerHTML = videoData
                        }

                        if (!videoStyles.includes('z-index: -100') && !video.paused) video.pause()
                    }
                }

                const state = () => {
                    const style = next.container.getAttribute('style')
                    if (style.includes('opacity: 1')) updateState()
                }

                accessFrame(state)
            },
            afterLeave({current}) {
                const pageContent = current.container.querySelectorAll('.scroll_layers__page_content')
                const pageTitles = current.container.querySelectorAll('.scroll_layers__page_title')

                const scrollHint = current.container.querySelector('.scroll_hint')
                
                const proxy = new ScrollLoop({
                    elements: [pageContent, pageTitles],
                    animations: [pageContentAnimation, pageTitleAnimation],
                    easingCurve: 'slow',
                    scrollSnapping: true,
                    keyScrolling: true,
                    isSPA: true,
                    speedDial: {
                        limit: .5,
                        acceleration: 3000
                    }
                }, {
                    on: ['scroll', 'custom', 'keydown'],
                    node: scrollHint
                })

                proxy.scroll()
                proxy.selfDestruct()

                accessFrame(silencer)
            }
        },
        {
            namespace: 'menu',
            beforeEnter({next}) {
                const init = new Curtains({
                    container: 'c',
                    autoRender: false,
                    pixelRatio: Math.min(1.5, window.devicePixelRatio)
                })
                
                accessFrame(init.render.bind(init))

                const config = {
                    vertexShader,
                    fragmentShader,
                    widthSegments: 20,
                    heightSegments: 20,
                    uniforms: {
                        time: {
                            name: 'uTime',
                            type: '1f',
                            value: 0
                        }
                    }
                }

                const toSelf = next.container.querySelector('.menu_page__to_self')
                const toSelfBack = next.container.querySelector('.to_self_back')

                const planeElements = next.container.getElementsByClassName('gl__plane')

                const vector = []

                for (let i = 0; i < planeElements.length; i++) {
                    const plane = new Plane(init, planeElements[i], config)
                    vector.push(plane)
                }

                vector.forEach(plane => plane.onReady(() => toSelf.addEventListener('click', () => {
                    document.body.classList.remove('no_scroll')
                    plane.playVideos()
                }, {once: true})).onRender(() => plane.uniforms.time.value++))
                
                toSelf.addEventListener('click', () => {
                    gsap.to(window, {
                        scrollTo: {
                            y: '.gl',
                            offsetY: 300
                        },
                        duration: 2,
                        ease: 'power4.inOut'
                    })
                })

                toSelfBack.addEventListener('click', () => {
                    gsap.to(window, {
                        scrollTo: {y: '.menu_page_container'},
                        duration: 1,
                        ease: 'power4.inOut'
                    })
                })
            },
            afterLeave() {accessFrame(silencer)}
        },
        {
            namespace: 'content',
            beforeEnter({next}) {
                const heading = next.container.querySelector('.page_content__heading_container')

                const mobileContainer = next.container.querySelector('.page_content__mobi_container')
                const mobileContent = next.container.querySelector('.mobile_content')

                const mobileUIFragments = next.container.querySelectorAll('.mobile_content__ui_fragment')
                const mobileSocialIcons = next.container.querySelectorAll('.mobile_content__icon')

                const show = next.container.querySelector('.page_content__show_info')
                const hide = next.container.querySelector('.mobile_content__hide_info')

                const showInfo = gsap.timeline({paused: true})

                .to(heading, {
                    autoAlpha: 0,
                    ease: 'none'
                })

                .to(mobileContainer, {
                    autoAlpha: 0,
                    ease: 'none'
                }, 0)

                .set([heading, mobileContainer], {display: 'none'})

                .set(mobileContent, {display: 'block'})

                .fromTo(mobileContent, {opacity: 0}, {
                    opacity: 1,
                    ease: 'none',
                    delay: .3
                })

                .to(mobileUIFragments, {
                    scaleX: 1,
                    duration: .3,
                    stagger: .2
                })

                .from(mobileSocialIcons, {
                    scale: 0,
                    duration: .8,
                    ease: 'back',
                    stagger: .2
                }, '<')

                .set('.mobile_content__sns', {pointerEvents: 'auto'})

                show.addEventListener('click', () => showInfo.play())
                hide.addEventListener('click', () => showInfo.reverse())

                const monitor = () => {
                    let width = window.innerWidth
                    if (width >= 1024) showInfo.restart().pause()
                }

                accessFrame(monitor)
            },
            afterLeave() {accessFrame(silencer)}
        }
    ],
    transitions: [
        {
            once({next}) {
                if (next.namespace == 'home') homeOnce(next.container)
                if (next.namespace == 'menu') menuOnce(next.container)
                if (next.namespace == 'content') contentOnce(next.container)
            }
        },
        {
            name: 'home-to-menu-or-content',
            from: {namespace: 'home'},
            async leave({current}) {await homeLeave(current.container)},
            enter({next}) {
                if (next.namespace == 'menu') menuEnter(next.container)
                if (next.namespace == 'content') contentEnter(next.container)
            }
        },
        {
            name: 'menu-to-home-or-content',
            from: {namespace: 'menu'},
            async leave({current}) {await menuLeave(current.container)},
            enter({next, trigger}) {
                if (next.namespace == 'home') homeEnter(next.container)
                if (next.namespace == 'content' && trigger == closeMenu) contentEnterFromMenu(next.container)
                if (next.namespace == 'content' && trigger == 'back') contentEnterFromMenu(next.container)
                if (next.namespace == 'content' && trigger != closeMenu && trigger != 'back') contentEnter(next.container)
            }
        },
        {
            name: 'content-to-home',
            from: {namespace: 'content'},
            to: {namespace: 'home'},
            async leave({current}) {await contentLeaveToHome(current.container)},
            enter({next}) {homeEnterFromContent(next.container)}
        },
        {
            name: 'content-to-menu',
            from: {namespace: 'content'},
            to: {namespace: 'menu'},
            async leave({current}) {await contentLeaveToMenu(current.container)},
            enter({next}) {menuEnter(next.container)}
        }
    ]
})

document.body.removeAttribute('aria-live')