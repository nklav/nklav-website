import barba from '@barba/core'
import Plyr from 'plyr'
import bundle, { Curtains, Plane } from './bundle'
import main from '../css/main'

class AccessFrame {
    constructor(listener) {
        this.listener = listener

        if (window.accessFrame) gsap.ticker.remove(window.accessFrame)

        window.accessFrame = this.listener
        gsap.ticker.add(window.accessFrame)
    }
}

class EventRegent {
    constructor(signal, receiver) {
        this.signal_0 = signal[0]
        this.signal_1 = signal[1]
        this.signal_2 = signal[2]
        this.receiver_0 = receiver[0]
        this.receiver_1 = receiver[1]

        this.e = new Event(this.signal_1)

        if (window.accessProp_0 && window.accessProp_1 && window.accessMethod_0 && window.accessMethod_1) {
            window.removeEventListener(window.accessProp_0, window.accessMethod_0)
            window.removeEventListener(window.accessProp_1, window.accessMethod_1)
        }

        if (window.accessProp_2 && window.accessMethod_2) window.removeEventListener(window.accessProp_2, window.accessMethod_2)

        window.accessProp_0 = this.signal_0
        window.accessProp_1 = this.signal_1
        window.accessProp_2 = this.signal_2
        window.accessMethod_0 = this.#registry_0.bind(this)
        window.accessMethod_1 = this.#registry_1.bind(this)
        window.accessMethod_2 = this.receiver_1

        window.addEventListener(window.accessProp_0, window.accessMethod_0)
        window.addEventListener(window.accessProp_1, window.accessMethod_1)

        window.dispatchEvent(this.e)
    }

    #registry_0() {this.receiver_0()}
    #registry_1() {window.addEventListener(window.accessProp_2, window.accessMethod_2)}
}

class Loop {
    constructor(elements, animation) {
        this.elements = gsap.utils.toArray(elements)
        this.animation = animation
    }
    
    loop() {
        const spacing = 1 / this.elements.length
        const overlap = Math.ceil(1 / spacing)

        const start = this.elements.length * spacing + .5
        const end = (this.elements.length + overlap) * spacing + .5
    
        const continuum = gsap.timeline({paused: true})
    
        const loop = gsap.timeline({
            paused: true,
            repeat: -1,
            onRepeat() {this._time === this._dur && (this._tTime += this._dur - .01)}
        })
    
        const l = this.elements.length + overlap * 2
    
        let i, index, time
    
        for (i = 0; i < l; i++) {
            index = i % this.elements.length
            time = i * spacing
    
            continuum.add(this.animation(this.elements[index]), time)
        }
    
        continuum.time(start)
    
        loop.to(continuum, {
            time: end,
            duration: end - start,
            ease: 'none'
        })
    
        .fromTo(continuum, {time: overlap * spacing + 1}, {
            time: start,
            duration: start - (overlap * spacing + 1),
            ease: 'none',
            immediateRender: false
        })
    
        return {
            timeline: loop,
            unloop: () => {gsap.killTweensOf(continuum)}
        }
    }

    get space() {return this.elements.length}
}

class ScrollLoop extends Loop {
    constructor(config) {
        super()
        
        this.instances = config.instances
        this.pin = config.pin
        this.scrollSnapping = config.scrollSnapping
        this.keyScrolling = config.keyScrolling,
        this.on = config.on
        
        this.instance = this.instances[0].loop()

        this.instanceVector = []

        for (let i = 1; i < this.instances.length; i++) {
            const instance = this.instances[i].loop()
            this.instanceVector.unshift(instance)
        }
    }

    scroll() {
        const parameters = {
            instance: this.instance.timeline,
            space: this.instances[0].space,
            pin: this.pin
        }

        let iteration = 0

        const playhead = {offset: 0}
        const timeLoop = gsap.utils.wrap(0, parameters.instance.duration())

        const directMotion = gsap.to(playhead, {
            offset: 0,
            onUpdate: () => {
                parameters.instance.time(timeLoop(playhead.offset))
                this.instanceVector.forEach(instance => instance.timeline.time(timeLoop(playhead.offset)))
            },
            duration: 1,
            ease: 'slow',
            paused: true
        })

        const scroller = ScrollTrigger.create({
            start: 0,
            onUpdate: self => {
                const scrollSelf = self.scroll()

                if (scrollSelf > self.end - 1) scrollMeters.scrollCircle(1, 1)
                if (scrollSelf < 1 && self.direction < 0) scrollMeters.scrollCircle(-1, self.end - 1)

                directMotion.vars.offset = (iteration + self.progress) * parameters.instance.duration()
                directMotion.invalidate().restart()
            },
            end: '+=3000',
            pin: parameters.pin
        })

        const scrollMeters = {
            scrollProgress: progress => gsap.utils.clamp(1, scroller.end - 1, gsap.utils.wrap(0, 1, progress) * scroller.end),
            scrollCircle: (iterationDelta, scrollPoint) => {
                iteration += iterationDelta
                scroller.scroll(scrollPoint)
                scroller.update()
            }
        }

        const scrollPointOffset = offset => {
            const snap = gsap.utils.snap(1 / parameters.space)
            const time = snap(offset)

            const progress = (time - parameters.instance.duration() * iteration) / parameters.instance.duration()
            const scroll = scrollMeters.scrollProgress(progress)

            if (progress >= 1 || progress < 0) scrollMeters.scrollCircle(Math.floor(progress), scroll)

            scroller.scroll(scroll)
        }

        if (this.scrollSnapping && this.keyScrolling && this.on) {
            let timer = null
    
            const scrollSnap = () => {
                if (timer != null) clearTimeout(timer)
                timer = setTimeout(() => scrollPointOffset(directMotion.vars.offset), 200)
            }
    
            const keyScroll = e => {
                const keyCodes = [
                    'Space',
                    'ArrowUp',
                    'ArrowDown'
                ]
                
                if (keyCodes.indexOf(e.code) > -1) e.preventDefault()

                if (e.code == 'ArrowDown') scrollPointOffset(directMotion.vars.offset + 1 / parameters.space)
                if (e.code == 'ArrowUp') scrollPointOffset(directMotion.vars.offset - 1 / parameters.space)
            }
    
            new EventRegent(this.on, [scrollSnap, keyScroll])
        }
    }

    sync(animation) {
        ScrollTrigger.create({
            animation: animation,
            scrub: 1
        })
    }

    selfDestruct() {
        const instances = ScrollTrigger.getAll()
        instances.forEach(instance => instance.disable())

        this.instance.unloop()

        for (let i = 0; i < this.instanceVector.length; i++) {
            const instance = this.instanceVector[i]
            instance.unloop()
        }
    }

    refresh() {
        const instances = ScrollTrigger.getAll()
        instances.forEach(instance => instance.enable())

        ScrollTrigger.refresh(true)
    }
}

const loader = document.querySelector('.loader')
const progressBar = document.querySelector('.loader__progress_bar')

const logo = document.querySelector('.to_home')

const menuOpen = document.querySelector('.menu--open')
const menuOpenUIFragments = document.querySelectorAll('.menu--open__ui_fragment')

const menuClose = document.querySelector('.menu--close')
const menuCloseUIFragments = document.querySelectorAll('.menu--close__ui_fragment')

const scrollLayers = document.querySelector('.scroll_layers')

const pageTitles = document.querySelectorAll('.scroll_layers__page_title a')

const scrollIndicator = document.querySelector('.scroll_indicator')
const scrollIndicatorIndex = document.querySelector('.scroll_indicator_index')

const scrollIndex = document.querySelector('.scroll_index')

const listItems = document.querySelectorAll('.works_page_as_menu__list_item')

const pageTransitionComponents = document.querySelectorAll('.ui_page_transition_component')

const heading = document.querySelector('.page_transition_content__heading')
const description = document.querySelector('.page_transition_content__description')

const shareLabel = document.querySelector('.page_transition_content__share_label')
const socialIcons = document.querySelectorAll('.page_transition_content__icon')

const play = document.querySelectorAll('.page_transition_content__play')
const info = document.querySelector('.page_transition_content__show_info')

const loaderAnimation = () => {
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
    return gsap.timeline()

    .set(logo, {display: 'block'})

    .set(menuOpen, {display: 'block'})
    .set(menuOpenUIFragments, {transformOrigin: 'left'})

    .set(scrollLayers, {visibility: 'visible'})

    .set(scrollIndicator, {visibility: 'visible'})
    .set(scrollIndicatorIndex, {visibility: 'visible'})

    .set(scrollIndex, {visibility: 'visible'})

    .add(loaderAnimation())

    .from(logo, {
        autoAlpha: 0,
        ease: 'none'
    }, '>.5')

    .from(menuOpenUIFragments, {
        scaleX: 0,
        stagger: .2
    }, '<')

    .set(menuOpen, {pointerEvents: 'auto'})
    
    .from(page, {
        autoAlpha: 0,
        duration: 1,
        ease: 'none'
    }, '>-.5')

    .from(scrollIndicator, {
        rotation: 360,
        duration: 1
    }, '<')

    .set(pageTitles, {pointerEvents: 'auto'})
}

const menuOnce = page => {
    return gsap.timeline()

    .set(menuClose, {display: 'block'})

    .add(loaderAnimation())

    .from(menuCloseUIFragments, {
        scaleX: 0,
        stagger: .2
    }, '>.5')

    .set(menuClose, {pointerEvents: 'auto'})

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
}

const contentOnce = page => {
    const video = page.querySelector('video')

    return gsap.timeline()

    .set(logo, {display: 'block'})

    .set(menuOpen, {display: 'block'})
    .set(menuOpenUIFragments, {transformOrigin: 'left'})

    .add(loaderAnimation())
    
    .to(pageTransitionComponents, {
        scaleY: 0,
        duration: 4,
        ease: 'slow',
        onStart: () => {video.play()}
    }, '>.5')

    .from(logo, {
        autoAlpha: 0,
        ease: 'none'
    }, '>-1.5')
    
    .from(menuOpenUIFragments, {
        scaleX: 0,
        stagger: .2
    }, '<')
    
    .set(menuOpen, {pointerEvents: 'auto'})

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
    
    .set('.page_transition_content__sns', {pointerEvents: 'auto'})

    .set(play, {
        pointerEvents: 'auto',
        transition: 'transform .5s cubic-bezier(.2, 0, 0, 2)'
    })

    .from(info, {
        autoAlpha: 0,
        duration: .8,
        ease: 'none'
    }, '>-1.5')
}

const pageContentAnimation = element => {
    return gsap.timeline()

    .fromTo(element, {
        scale: .8,
        zIndex: -200
    }, {
        scale: 1,
        zIndex: -100,
        ease: 'power1.in',
        repeat: 1,
        yoyo: true,
        immediateRender: false
    })

    .fromTo(element, {
        yPercent: 450,
        rotationX: -100
    }, {
        yPercent: -450,
        rotationX: 100,
        duration: 1,
        ease: 'none',
        reversed: true,
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
        yPercent: 450,
        clipPath: 'inset(-800% -100% 800% -100%)'
    }, {
        yPercent: -450,
        clipPath: 'inset(800% -100% -800% -100%)',
        duration: 1,
        ease: 'none',
        reversed: true,
        immediateRender: false
    }, 0)
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

barba.init({
    schema: {
        prefix: 'data-page',
        wrapper: 'container',
        container: 'transition'
    },
    views: [
        {
            namespace: 'home',
            beforeEnter({next}) {
                const pageContent = next.container.querySelectorAll('.scroll_layers__page_content')
                const pageTitles = next.container.querySelectorAll('.scroll_layers__page_title')

                const scrollLayers = next.container.querySelector('.scroll_layers')
                
                const scrollIndicator = next.container.querySelector('.scroll_indicator')

                const contentLoop = new Loop(pageContent, pageContentAnimation)
                const titleLoop = new Loop(pageTitles, pageTitleAnimation)
                
                const scrollLoop = new ScrollLoop({
                    instances: [contentLoop, titleLoop],
                    pin: scrollLayers,
                    scrollSnapping: true,
                    keyScrolling: true,
                    on: ['scroll', 'custom', 'keydown']
                })
                
                const scrollIndicatorAnimation = gsap.to(scrollIndicator, {rotation: 360})

                const videoElements = next.container.getElementsByClassName('scroll_layers__page_content')
                const buffer = [ ...videoElements ]

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
                
                scrollLoop.scroll()
                scrollLoop.refresh()
                scrollLoop.sync(scrollIndicatorAnimation)

                new AccessFrame(updateState)
            },
            beforeLeave({current}) {
                const pageContent = current.container.querySelectorAll('.scroll_layers__page_content')
                const pageTitles = current.container.querySelectorAll('.scroll_layers__page_title')

                const scrollLayers = current.container.querySelector('.scroll_layers')
                
                const contentLoop = new Loop(pageContent, pageContentAnimation)
                const titleLoop = new Loop(pageTitles, pageTitleAnimation)
                
                const Proxy = new ScrollLoop({
                    instances: [contentLoop, titleLoop],
                    pin: scrollLayers,
                    scrollSnapping: true,
                    keyScrolling: true,
                    on: ['load', 'custom', 'load']
                })

                Proxy.scroll()
                Proxy.selfDestruct()

                new AccessFrame(silencer)
            }
        },
        {
            namespace: 'menu',
            beforeEnter({next}) {
                const toSelf = next.container.querySelector('.works_page_as_menu__to_self')
                const toSelfBack = next.container.querySelector('.to_self_back')

                const scrollTo = () => {
                    gsap.to(window, {
                        scrollTo: {
                            y: '#gl_scroll',
                            offsetY: 300
                        },
                        duration: 2,
                        ease: 'power4.inOut'
                    })
                }

                const scrollTop = () => {
                    gsap.to(window, {
                        scrollTo: {y: '#top'},
                        duration: 1,
                        ease: 'power4.inOut'
                    })
                }
                
                toSelf.addEventListener('click', scrollTo)
                toSelf.addEventListener('touchend', scrollTo)
                
                toSelfBack.addEventListener('click', scrollTop)
                toSelfBack.addEventListener('touchend', scrollTop)

                const init = new Curtains({
                    container: 'c',
                    autoRender: false,
                    pixelRatio: Math.min(1.5, window.devicePixelRatio)
                })

                new AccessFrame(init.render.bind(init))

                const planeElements = next.container.getElementsByClassName('gl__plane')

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

                const planes = []

                const renderPlanes = index => {
                    const plane = planes[index]
                    plane.onReady(() => {plane.playVideos()}).onRender(() => {plane.uniforms.time.value++})
                }

                for (let i = 0; i < planeElements.length; i++) {
                    const plane = new Plane(init, planeElements[i], config)
                    planes.push(plane)

                    renderPlanes(i)
                }
            },
            beforeLeave() {new AccessFrame(silencer)}
        },
        {
            namespace: 'content',
            beforeEnter({next}) {
                const heading = next.container.querySelector('.page_transition_content__heading_container')

                const mobileContainer = next.container.querySelector('.page_transition_content__mobi_container')
                const mobileContent = next.container.querySelector('.mobi_toggle_state_content')

                const mobileUIFragments = next.container.querySelectorAll('.mobi_toggle_state_content__ui_fragment')
                const mobileSocialIcons = next.container.querySelectorAll('.mobi_toggle_state_content__icon')

                const show = next.container.querySelector('.page_transition_content__show_info')
                const hide = next.container.querySelector('.mobi_toggle_state_content__hide_info')

                const showInfo = gsap.timeline({paused: true})

                .to(heading, {
                    autoAlpha: 0,
                    ease: 'none'
                })

                .to(mobileContainer, {
                    autoAlpha: 0,
                    ease: 'none'
                }, 0)

                .set(heading, {display: 'none'})

                .set(mobileContainer, {display: 'none'})
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
                }, '>-.3')

                .set('.mobi_toggle_state_content__sns', {pointerEvents: 'auto'})

                show.addEventListener('click', () => {showInfo.play()})
                show.addEventListener('touchend', () => {showInfo.play()})

                hide.addEventListener('click', () => {showInfo.reverse()})
                hide.addEventListener('touchend', () => {showInfo.reverse()})

                const monitor = () => {
                    let width = window.innerWidth
                    if (width >= 1024) showInfo.restart().pause()
                }

                new AccessFrame(monitor)
            },
            beforeLeave() {new AccessFrame(silencer)}
        }
    ],
    transitions: [
        {
            once({next}) {
                if (next.namespace == 'home') homeOnce(next.container)
                if (next.namespace == 'menu') menuOnce(next.container)
                if (next.namespace == 'content') contentOnce(next.container)
            }
        }
    ]
})