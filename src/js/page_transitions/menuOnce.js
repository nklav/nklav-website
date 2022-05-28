import loadingAnimation from './loadingAnimation';

export default function menuOnce(page) {
    return gsap.timeline({onStart: () => document.body.classList.add('no_scroll')})

    .set('.menu--close', {display: 'block'})

    .add(loadingAnimation())

    .fromTo('.menu--close__ui_fragment', {scaleX: 0}, {
        scaleX: 1,
        stagger: .2
    }, '>.5')

    .set('.menu--close', {
        pointerEvents: 'auto',
        onComplete: () => document.querySelector('.menu--close').setAttribute('href', '/')
    })

    .from(page, {
        autoAlpha: 0,
        duration: 1,
        ease: 'none'
    }, '>-1')

    .from('.menu_page__list_item', {
        xPercent: 100,
        duration: .8,
        stagger: .1
    }, '<')

    .set('.menu_page__list_item', {pointerEvents: 'auto'});
};