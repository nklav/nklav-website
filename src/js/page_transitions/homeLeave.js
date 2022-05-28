export default function homeLeave(page) {
    const pageTitles = page.querySelectorAll('.scroll_layers__page_title a');

    return gsap.timeline()

    .set('.menu--open__ui_fragment', {transformOrigin: 'right'})

    .set(pageTitles, {pointerEvents: 'none'})

    .fromTo('.to_home', {autoAlpha: 1}, {
        autoAlpha: 0,
        ease: 'none'
    })

    .fromTo('.menu--open__ui_fragment', {scaleX: 1}, {
        scaleX: 0,
        stagger: .2
    }, '<')

    .set(['.to_home', '.menu--open'], {display: 'none'})

    .set('.menu--open', {pointerEvents: 'none'})

    .to(page, {
        autoAlpha: 0,
        duration: .8,
        ease: 'none'
    }, '>-.5');
};