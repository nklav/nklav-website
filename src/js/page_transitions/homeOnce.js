import loadingAnimation from './loadingAnimation';

export default function homeOnce(page) {
    return gsap.timeline({
        onStart: () => document.body.classList.add('no_scroll'),
        onComplete: () => document.body.classList.remove('no_scroll')
    })

    .set(['.to_home', '.menu--open'], {display: 'block'})

    .set('.menu--open__ui_fragment', {transformOrigin: 'left'})

    .set(['.scroll_layers', '.scroll_indicator', '.scroll_indicator_index', '.scroll_hint', '.scroll_index'], {visibility: 'visible'})

    .add(loadingAnimation())

    .fromTo('.to_home', {autoAlpha: 0}, {
        autoAlpha: 1,
        ease: 'none'
    }, '>.5')

    .fromTo('.menu--open__ui_fragment', {scaleX: 0}, {
        scaleX: 1,
        stagger: .2
    }, '<')
    
    .from(page, {
        autoAlpha: 0,
        duration: 1,
        ease: 'none'
    }, '<')

    .from('.scroll_indicator', {
        rotation: 360,
        duration: 1
    }, '<')

    .set(['.menu--open', '.scroll_layers__page_title a'], {pointerEvents: 'auto'});
}