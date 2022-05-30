export default function menuEnter(page) {
    const listItems = page.querySelectorAll('.menu_page__list_item');

    const footer = page.querySelector('.menu_page__footer');

    return gsap.timeline({onStart: () => document.body.classList.add('no_scroll')})

    .set('.menu--close', {display: 'block'})

    .fromTo('.menu--close__ui_fragment', {scaleX: 0}, {
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

    .set(['.menu--close', listItems], {pointerEvents: 'auto'});
}