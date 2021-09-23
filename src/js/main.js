import barba from '@barba/core'
import Plyr from 'plyr'
import { Curtains, Plane } from './bundle'

import { accessFrame, silencer } from './Regent'
import ScrollLoop from './ScrollLoop'

require('../css/main.css')

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

const pageContentAnimation = {
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
}

const pageTitleAnimation = {
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

barba.hooks.beforeEnter(() => {if (document.body.hasAttribute('aria-live')) document.body.removeAttribute('aria-live')})
barba.hooks.enter(({current}) => closeMenu.setAttribute('href', current.url.href))

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
                const pageContent = next.container.querySelectorAll('.scroll_layers__page_content')
                const pageTitles = next.container.querySelectorAll('.scroll_layers__page_title')
                
                const scrollIndicator = next.container.querySelector('.scroll_indicator')

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
                    animations: [pageContentAnimation, pageTitleAnimation],
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
                
                const proxy = new ScrollLoop({
                    elements: [pageContent, pageTitles],
                    animations: [pageContentAnimation, pageTitleAnimation],
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