import loadingAnimation from './loadingAnimation';

export default function contentOnce(page) {
    const video = page.querySelector('video');

    return gsap.timeline()

    .set(['.to_home', '.menu--open'], {display: 'block'})

    .set('.menu--open__ui_fragment', {transformOrigin: 'left'})

    .add(loadingAnimation())
    
    .to('.ui_page_transition_component', {
        scaleY: 0,
        duration: 4,
        ease: 'slow',
        onStart: () => video.play()
    }, '>.5')

    .fromTo('.to_home', {autoAlpha: 0}, {
        autoAlpha: 1,
        ease: 'none'
    }, '>-1.5')
    
    .fromTo('.menu--open__ui_fragment', {scaleX: 0}, {
        scaleX: 1,
        stagger: .2
    }, '<')
    
    .set('.menu--open', {pointerEvents: 'auto'})

    .from('.page_content__heading', {
        xPercent: -100,
        duration: 1,
        ease: 'power2.out'
    }, '>-1.5')

    .from('.page_content__description', {
        yPercent: -100,
        duration: 1,
        ease: 'power2.out'
    }, '<')
    
    .from('.page_content__share_label', {
        yPercent: 100,
        duration: .8,
        ease: 'power2.out'
    }, '<')
    
    .from('.page_content__icon', {
        scale: 0,
        ease: 'back',
        duration: .8,
        stagger: .2
    }, '>-.2')
    
    .from('.page_content__play', {
        scale: 0,
        duration: .8,
        ease: 'back',
        clearProps: 'scale'
    }, '<')
    
    .from('.page_content__show_info', {
        autoAlpha: 0,
        duration: .8,
        ease: 'none'
    }, '<')

    .set(['.page_content__sns', '.page_content__play'], {pointerEvents: 'auto'})

    .set('.page_content__play', {transition: 'transform .5s cubic-bezier(.2, 0, 0, 2)'});
};