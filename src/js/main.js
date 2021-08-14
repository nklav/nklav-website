import barba from '@barba/core'
import Plyr from 'plyr'

import bundle, { Curtains, Plane } from './bundle'
import main from '../css/main'

const loader = document.querySelector('.loader')
const progressBar = document.querySelector('.loader__progress_bar')

const loaderAnimation = () => {
    const tl = gsap.timeline({
        delay: 1
    })

    .set(loader, {
        display: 'block'
    })

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

    .set(loader, {
        transformOrigin: 'right'
    })

    .to(loader, {
        scaleX: 0,
        ease: 'power4.out',
        delay: .3
    })

    .set(loader, {
        display: 'none'
    })

    return tl
}

const userInterfaceAnimation = (logoPosition, menuStateFragments) => {
    const tl = gsap.timeline()

    tl.from(logoPosition, {
        opacity: 0
    })

    .set(menuStateFragments, {
        transformOrigin: 'left'
    }, 0)

    .to(menuStateFragments, {
        scaleX: 1,
        stagger: .3
    }, 0)

    return tl
}

const logoHeader = document.querySelector('.to_home')
const logoFooter = document.querySelector('.works_page_as_menu__to_home')

const menuOpen = document.querySelector('.menu--open')
const menuOpenUIFragments = document.querySelectorAll('.menu--open__ui_fragment')

const menuClose = document.querySelector('.menu--close')
const menuCloseUIFragments = document.querySelectorAll('.menu--close__ui_fragment')

const scrollIndicator = document.querySelector('.scroll_indicator')

const homeOnceAnimation = container => {
    const tl = gsap.timeline()
    
    tl.add(loaderAnimation())

    .set(logoHeader, {
        display: 'block',
        pointerEvents: 'auto'
    })

    .set(menuOpen, {
        display: 'block',
        pointerEvents: 'auto'
    })

    .add(userInterfaceAnimation(logoHeader, menuOpenUIFragments), '+=.5')

    .from(container, {
        autoAlpha: 0,
        duration: 1
    }, '-=.5')

    .from(scrollIndicator, {
        rotation: 360,
        duration: 1
    }, '-=1')

    return tl
}

const listItems = document.querySelectorAll('.works_page_as_menu__list_item')

const menuOnceAnimation = container => {
    const tl = gsap.timeline()

    tl.add(loaderAnimation())

    .set(menuClose, {
        display: 'block',
        pointerEvents: 'auto'
    })

    .add(userInterfaceAnimation(logoFooter, menuCloseUIFragments), '+=.5')

    .from(container, {
        autoAlpha: 0,
        duration: 1
    }, '-=.5')

    .from(listItems, {
        xPercent: 100,
        duration: .8,
        stagger: .1,
        ease: 'power1.out'
    }, '-=1')

    return tl
}

const pageTransitionComponents = document.querySelectorAll('.ui_page_transition_component')

const contentHeading = document.querySelector('.page_transition_content__heading')
const contentDescription = document.querySelector('.page_transition_content__description')

const contentShareLabel = document.querySelector('.page_transition_content__share_label')
const contentSocialIcons = document.querySelectorAll('.page_transition_content__icon')

const play = document.querySelectorAll('.page_transition_content__play')
const info = document.querySelector('.page_transition_content__show_info')

const contentOnceAnimation = () => {
    const tl = gsap.timeline()

    tl.add(loaderAnimation())

    .set(logoHeader, {
        display: 'block',
        pointerEvents: 'auto'
    })

    .set(menuOpen, {
        display: 'block',
        pointerEvents: 'auto'
    })

    .to(pageTransitionComponents, {
        scaleY: 0,
        duration: 4,
        ease: 'slow'
    })

    .add(userInterfaceAnimation(logoHeader, menuOpenUIFragments), '-=1.5')

    .from(contentHeading, {
        xPercent: -100
    }, '-=1.5')

    .from(contentDescription, {
        yPercent: -100
    }, '-=1.5')
    
    .from(contentShareLabel, {
        yPercent: 100
    }, '-=1.5')
    
    .from(contentSocialIcons, {
        scale: 0,
        ease: 'back',
        stagger: .2
    }, '-=1')
    
    .from(play, {
        scale: 0,
        ease: 'back',
        clearProps: 'scale'
    }, '-=1')

    .set(play, {
        transition: 'transform .5s cubic-bezier(0.175, 0.885, 0.32, 2)'
    })

    .from(info, {
        autoAlpha: 0,
        ease: 'none'
    }, '-=1')

    return tl
}

const menuFragmentsAnimation = menuStateFragments => {
    const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 6,
        delay: 6
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

const menuInteraction = (menuState, menuStateFragments) => {
    const menuAnimationGetter = menuFragmentsAnimation(menuStateFragments)

    const menuInteractionAnimation = () => menuAnimationGetter.restart().timeScale(1.5)
    const resetTimeScale = () => menuAnimationGetter.timeScale(1)

    menuState.addEventListener('mouseenter', menuInteractionAnimation)
    menuState.addEventListener('mouseleave', resetTimeScale)
}

class Looper {
    constructor(items, animation) {
        this.items = items
        this.animation = animation
    }
    
    loop() {
        const spacing = 1 / this.items.length
        const overlap = Math.ceil(1 / spacing)
    
        const start = this.items.length * spacing + .5
        const end = (this.items.length + overlap) * spacing + .5
    
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
    
        const l = this.items.length + overlap * 2
    
        let i, index, time
    
        for (i = 0; i < l; i++) {
            index = i % this.items.length
            time = i * spacing
    
            sequence.add(this.animation(this.items[index]), time)
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

    vector(selector) {
        return gsap.utils.toArray(selector)
    }

    get spacer() {
        return this.items.length
    }
}

class ScrollLoop extends Looper {
    constructor(config) {
        super()

        this.instances = config.instances
        this.pinner = config.pinner
        this.scrollSnapping = config.scrollSnapping
        this.keyScrolling = config.keyScrolling
        this.parallax = config.parallaxElement

        this.controller = new AbortController
    }

    scrollLooper() {
        const parameters = {
            LooperInstance: this.instances[0].loop(),
            pinner: this.pinner,
            spacer: this.instances[0].spacer
        }

        let iteration = 0

        const playhead = {offset: 0}
        const timeLoop = gsap.utils.wrap(0, parameters.LooperInstance.duration())

        const scrub = gsap.to(playhead, {
            offset: 0,
            onUpdate: () => {
                parameters.LooperInstance.time(timeLoop(playhead.offset))

                for (let i = 1; i < this.instances.length; i++) {
                    const instance = this.instances[i].loop()
                    instance.time(timeLoop(playhead.offset))
                }
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

                scrub.vars.offset = (iteration + self.progress) * parameters.LooperInstance.duration()
                scrub.invalidate().restart()
            },
            end: '+=3000',
            pin: parameters.pinner
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
            const snap = gsap.utils.snap(1 / parameters.spacer)
            const time = snap(offset)

            const progress = (time - parameters.LooperInstance.duration() * iteration) / parameters.LooperInstance.duration()
            const scroll = scrollMeters.scrollProgress(progress)

            if (progress >= 1 || progress < 0) scrollMeters.scrollCircle(Math.floor(progress), scroll)

            scroller.scroll(scroll)
        }

        if (this.scrollSnapping) {
            let timer = null
    
            const scrollSnap = () => {
                if (timer != null) clearTimeout(timer)
    
                timer = setTimeout(() => scrollPointOffset(scrub.vars.offset), 200)
            }
    
            window.addEventListener('scroll', scrollSnap, {
                signal: this.controller.signal
            })
        }

        if (this.keyScrolling) {
            const keyScroll = e => {
                const keyCodes = [
                    'Space',
                    'ArrowUp',
                    'ArrowDown'
                ]
                
                if (keyCodes.indexOf(e.code) > -1) e.preventDefault()
                
                if (e.code == 'ArrowDown') scrollPointOffset(scrub.vars.offset + 1 / parameters.spacer)
                
                if (e.code == 'ArrowUp') scrollPointOffset(scrub.vars.offset - 1 / parameters.spacer)
            }
    
            window.addEventListener('keydown', keyScroll, {
                signal: this.controller.signal
            })
        }

        if (this.parallax) {
            const parallax = e => {
                gsap.to(this.parallax, {
                    x: e.clientX / 20 * -1,
                    y: e.clientY / 20 * -1,
                    duration: 1
                })
            }

            window.addEventListener('mousemove', parallax, {
                signal: this.controller.signal
            })
        }
    }

    scrollSync(animation) {
        ScrollTrigger.create({
            animation: animation,
            scrub: 1
        })
    }

    accessFrame(callback) {
        gsap.ticker.add(callback)
    }

    destroy() {
        const instances = ScrollTrigger.getAll()
        instances.forEach(instance => instance.disable())
    }

    refresh() {
        const instances = ScrollTrigger.getAll()
        instances.forEach(instance => instance.enable())

        ScrollTrigger.refresh(true)
    }
}

const videoAnimation = video => {
    const tl = gsap.timeline()

    .fromTo(video, {
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
}

const videoIDAnimation = id => {
    const tl = gsap.timeline()

    tl.fromTo(id, {
        scale: 1
    }, {
        scale: 1,
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

barba.init({
    debug: true,
    schema: {
        prefix: 'data-page',
        wrapper: 'container',
        container: 'transition'
    },
    views: [
        {
            namespace: 'home',
            beforeEnter({next}) {
                const videos = Looper.prototype.vector('.scroll_layers__video')
                const videoID = Looper.prototype.vector('.scroll_layers__video_id')

                const pinner = next.container.querySelector('.scroll_layers')
                
                const videoLooper = new Looper(videos, videoAnimation)
                const videoIDLooper = new Looper(videoID, videoIDAnimation)
                
                const scrollLoop = new ScrollLoop({
                    instances: [videoLooper, videoIDLooper],
                    pinner: pinner,
                    scrollSnapping: true,
                    keyScrolling: true,
                    parallaxElement: videoID
                })
                
                const scrollIndicatorAnimation = gsap.to(scrollIndicator, {rotation: 360})

                const videoElements = document.getElementsByClassName('scroll_layers__video')
                const videoArray = [ ...videoElements ]

                const scrollIndexNumber = document.querySelector('.scroll_index__number')
                const scrollIndicatorIndex = document.querySelector('.scroll_indicator_index')

                const updateElementState = () => {
                    for (let i = 0; i < videoArray.length; i++) {
                        const video = videoArray[i]
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
                
                scrollLoop.scrollLooper()
                
                scrollLoop.scrollSync(scrollIndicatorAnimation)

                scrollLoop.accessFrame(updateElementState)
                
                scrollLoop.refresh()
            }
        },
        {
            namespace: 'menu',
            beforeEnter() {
                ScrollLoop.prototype.destroy()

                const toSelf = document.querySelector('.works_page_as_menu__to_self')
                const toSelfBack = document.querySelector('.to_self_back')

                const scrollToVideos = () => {
                    const tl = gsap.timeline()

                    .to(window, {
                        scrollTo: {
                            y: '#_gl_scroll',
                            offsetY: 300
                        },
                        duration: 2,
                        ease: 'power4.inOut'
                    })

                    .from('._gl_container', {
                        autoAlpha: 0,
                        ease: 'slow'
                    }, '-=1')

                    return tl
                }

                const scrollTop = () => {
                    gsap.to(window, {
                        scrollTo: {
                            y: '#_top'
                        },
                        duration: 1,
                        ease: 'power4.inOut'
                    })
                }
                
                toSelf.addEventListener('click', scrollToVideos)
                toSelf.addEventListener('touchend', scrollToVideos)
                
                toSelfBack.addEventListener('click', scrollTop)
                toSelfBack.addEventListener('touchend', scrollTop)
                
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
                    container: '_c',
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
            }
        },
        {
            namespace: 'content',
            beforeEnter() {
                ScrollLoop.prototype.destroy()

                const heading = document.querySelector('.page_transition_content__heading_container')

                const mobileContainer = document.querySelector('.page_transition_content__mobi_container')
                const mobileContent = document.querySelector('.mobi_toggle_state_content')

                const show = document.querySelector('.page_transition_content__show_info')
                const hide = document.querySelector('.mobi_toggle_state_content__hide_info')

                const mobileUIFragments = document.querySelectorAll('.mobi_toggle_state_content__ui_fragment')
                const mobileSocialIcons = document.querySelectorAll('.mobi_toggle_state_content .page_transition_content__icon')

                const showInfo = gsap.timeline({
                    paused: true
                })

                showInfo.to(heading, {
                    opacity: 0
                })

                .to(mobileContainer, {
                    opacity: 0
                }, '-=.5')

                .set(heading, {
                    display: 'none',
                    pointerEvents: 'none'
                })

                .set(mobileContainer, {
                    display: 'none',
                    pointerEvents: 'none'
                })

                .set(mobileContent, {
                    display: 'block',
                    pointerEvents: 'auto'
                })

                .fromTo(mobileContent, {
                    opacity: 0
                }, {
                    opacity: 1
                })

                .to(mobileUIFragments, {
                    scaleX: '100%',
                    duration: .3,
                    stagger: .2
                })

                .from(mobileSocialIcons, {
                    scale: 0,
                    ease: 'back',
                    stagger: .3
                }, '-=.5')

                show.addEventListener('click', () => {
                    showInfo.play()
                })

                show.addEventListener('touchend', () => {
                    showInfo.play()
                })

                hide.addEventListener('click', () => {
                    showInfo.reverse()
                })

                hide.addEventListener('touchend', () => {
                    showInfo.reverse()
                })

                const monitorWindow = () => {
                    let width = window.innerWidth

                    if (width >= 1024) showInfo.restart().pause()
                }

                gsap.ticker.add(monitorWindow)
            }
        }
    ],
    transitions: [
        {
            async once({next}) {
                if (next.namespace == 'home') await homeOnceAnimation(next.container)

                if (next.namespace == 'menu') await menuOnceAnimation(next.container)

                if (next.namespace == 'content') await contentOnceAnimation()
            },
            afterOnce({next}) {
                if (next.namespace == 'home' || 'content') menuInteraction(menuOpen, menuOpenUIFragments)

                if (next.namespace == 'menu') menuInteraction(menuClose, menuCloseUIFragments)
            }
        }
    ]
})