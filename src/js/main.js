import barba from '@barba/core'
import Plyr from 'plyr'
import { Curtains, Plane } from './bundle'

import { accessFrame, silencer } from './Regent'
import ScrollLoop from './ScrollLoop'

import { 
    homeOnce, 
    menuOnce, 
    contentOnce, 
    homeEnter, 
    homeEnterFromContent, 
    menuEnter, 
    contentEnter, 
    contentEnterFromMenu, 
    homeLeave, 
    menuLeave, 
    contentLeaveToHome, 
    contentLeaveToMenu 
} from './page_transitions'

require('../css/main.css')

console.log('%cwebsite by nklav https://github.com/nklav', 'font: 18px sans-serif')

const animationData = {
    content: {
        timeline: {
            enter: {
                from: {zIndex: -200},
                to: {zIndex: -100}
            },
            across: {
                from: {scale: 1},
                to: {scale: 1}
            }
        }
    },
    titles: {
        timeline: {
            enter: {
                from: {scale: 1},
                to: {scale: 1}
            },
            across: {
                from: {clipPath: 'inset(-800% -100% 800% -100%)'},
                to: {clipPath: 'inset(800% -100% -800% -100%)'}
            }
        }
    }
}

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

const element = document.querySelector('.menu--close')

const isMobile = () => {if (/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|Mobile|IEMobile|Windows Phone|Opera Mini/i.test(navigator.userAgent)) {return true} else {return false}}

if (history.scrollRestoration) history.scrollRestoration = 'manual'
barba.hooks.afterLeave(() => window.scrollTo(0, 0))

barba.hooks.beforeEnter(() => {if (document.body.hasAttribute('aria-live')) document.body.removeAttribute('aria-live')})
barba.hooks.enter(({current}) => element.setAttribute('href', current.url.href))

barba.init({
    schema: {
        prefix: 'data-app',
        wrapper: 'root',
        container: 'core',
        namespace: 'page'
    },
    views: [
        {
            namespace: 'home',
            beforeEnter({next}) {
                const element = next.container.querySelector('.scroll_indicator')
                const animation = gsap.to(element, {rotation: 360})

                if (isMobile()) {
                    next.container.querySelector('.mobile').classList.add('isMobile')

                    const elements = [
                        next.container.querySelector('.gradient--ceil'),
                        next.container.querySelector('.gradient--floor'),
                        next.container.querySelector('.scroll_layers'),
                        next.container.querySelector('.scroll_indicator_index'),
                        next.container.querySelector('.scroll_index')
                    ]

                    elements.forEach(element => element.classList.add('__isMobile'))

                    ScrollTrigger.create({animation, scrub: .5, scroller: next.container.querySelector('.mobile')})
                }

                if (!isMobile()) {
                    const pageContent = next.container.querySelectorAll('.scroll_layers__page_content')
                    const pageTitles = next.container.querySelectorAll('.scroll_layers__page_title')
    
                    const scrollHint = next.container.querySelector('.scroll_hint')
    
                    const keyDown = () => {
                        scrollHint.innerHTML = 'down'
                        setTimeout(() => scrollHint.innerHTML = 'scroll', 1000)
                    }
    
                    const keyUp = () => {
                        scrollHint.innerHTML = 'up'
                        setTimeout(() => scrollHint.innerHTML = 'scroll', 1000)
                    }
                    
                    const scrollLoop = new ScrollLoop({
                        elements: [pageContent, pageTitles],
                        animations: [animationData.content, animationData.titles],
                        scrollSnapping: true,
                        keyScrolling: true,
                        dial: {
                            spacing: 5,
                            distance: 3,
                            effect: 'slow'
                        },
                        onKey: {
                            down: keyDown,
                            up: keyUp
                        }
                    })
                    
                    scrollLoop.scroll()
                    scrollLoop.refresh()
                    scrollLoop.sync(animation, true)
    
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
                }
            },
            afterLeave({current}) {
                if (!isMobile()) {
                    const pageContent = current.container.querySelectorAll('.scroll_layers__page_content')
                    const pageTitles = current.container.querySelectorAll('.scroll_layers__page_title')
                    
                    const proxy = new ScrollLoop({
                        elements: [pageContent, pageTitles],
                        animations: [animationData.content, animationData.titles],
                        dial: {
                            spacing: 5,
                            distance: 3
                        }
                    })
    
                    proxy.scroll()
                    proxy.selfDestruct({
                        regent: {
                            on: ['load', 'load'],
                            call: [silencer, silencer]
                        }
                    })
    
                    accessFrame(silencer)
                }
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

                const toSelf = next.container.querySelector('.menu_page__to_self')
                const toSelfBack = next.container.querySelector('.to_self_back')

                const scrollTo = () => {
                    gsap.to(window, {
                        scrollTo: {
                            y: '.gl',
                            offsetY: 300
                        },
                        duration: 2,
                        ease: 'power4.inOut'
                    })
                }

                if (isMobile()) {
                    init.dispose()

                    next.container.querySelectorAll('video').forEach(video => {
                        video.classList.add('mobile_gl')
                        video.setAttribute('style', 'display: block;')
                    })

                    toSelf.addEventListener('click', () => {
                        document.body.classList.remove('no_scroll')
                        scrollTo()
                    })
                }

                if (!isMobile()) {
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

                    toSelf.addEventListener('click', scrollTo)
                }

                toSelfBack.addEventListener('click', () => {
                    gsap.to(window, {
                        scrollTo: {y: '.menu_page_container'},
                        duration: 1,
                        ease: 'power4.inOut'
                    })
                })
            },
            afterLeave() {if (!isMobile()) accessFrame(silencer)}
        },
        {
            namespace: 'content',
            beforeEnter({next}) {
                const player = new Plyr(next.container.querySelector('#plyr'), {
                    controls: ['play', 'progress', 'current-time', 'fullscreen'],
                    tooltips: {seek: false},
                    invertTime: false,
                    toggleInvert: false,
                    ratio: '16:9'
                })

                const play = next.container.querySelectorAll('.page_content__play')

                const pageTransitionComponents = next.container.querySelectorAll('.ui_page_transition_component')

                const playerContainer = next.container.querySelector('.plyr_ultra_container')

                const close = next.container.querySelector('.close_player')

                const openPlayer = () => {
                    return gsap.timeline({onComplete: () => player.play()})

                    .to('.to_home', {
                        autoAlpha: 0,
                        ease: 'none'
                    })

                    .to('.menu--open', {
                        autoAlpha: 0,
                        ease: 'none'
                    }, '<')

                    .to(pageTransitionComponents, {
                        scaleY: 1,
                        duration: .8,
                        ease: 'power1.inOut'
                    }, '<')

                    .set(playerContainer, {display: 'flex'})
                }

                const closePlayer = () => {
                    return gsap.timeline({onStart: () => player.stop()})
                    
                    .set(playerContainer, {
                        display: 'none',
                        delay: .1
                    })

                    .to(pageTransitionComponents, {
                        scaleY: 0,
                        duration: .8,
                        delay: .5,
                        ease: 'power1.inOut'
                    })

                    .to('.to_home', {
                        autoAlpha: 1,
                        ease: 'none'
                    })

                    .to('.menu--open', {
                        autoAlpha: 1,
                        ease: 'none'
                    }, '<')
                }

                const appear = gsap.timeline({paused: true})
                
                .set(close, {
                    display: 'block',
                    pointerEvents: 'auto'
                })

                .from(close, {
                    opacity: 0,
                    duration: .2,
                    ease: 'none'
                })

                play.forEach(play => {
                    play.addEventListener('click', openPlayer)
                    play.addEventListener('touchend', openPlayer)
                })

                close.addEventListener('click', closePlayer)
                close.addEventListener('touchend', closePlayer)

                const monitorPlayer = () => {
                    if (player.paused || player.ended) appear.play()
                    if (player.playing || player.stopped) appear.reverse()
                }

                close.addEventListener('click', () => appear.reverse())
                close.addEventListener('touchend', () => appear.reverse())

                const heading = next.container.querySelector('.page_content__heading_container')

                const mobileContainer = next.container.querySelector('.page_content__mobi_container')
                const mobileContent = next.container.querySelector('.mobile_content')

                const mobileUIFragments = next.container.querySelectorAll('.mobile_content__ui_fragment')
                const mobileSocialIcons = next.container.querySelectorAll('.mobile_content__icon')

                const show = next.container.querySelector('.page_content__show_info')
                const hide = next.container.querySelector('.mobile_content__hide_info')

                const toggleInfo = gsap.timeline({paused: true})

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

                show.addEventListener('click', () => toggleInfo.play())
                show.addEventListener('touchend', () => toggleInfo.play())

                hide.addEventListener('click', () => toggleInfo.reverse())
                hide.addEventListener('touchend', () => toggleInfo.reverse())

                const monitorWindow = () => {
                    let width = window.innerWidth
                    if (width >= 1024) toggleInfo.restart().pause()
                }

                accessFrame(monitorWindow, monitorPlayer)
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
                if (next.namespace == 'content' && trigger == element) contentEnterFromMenu(next.container)
                if (next.namespace == 'content' && trigger == 'back') contentEnterFromMenu(next.container)
                if (next.namespace == 'content' && trigger != element && trigger != 'back') contentEnter(next.container)
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