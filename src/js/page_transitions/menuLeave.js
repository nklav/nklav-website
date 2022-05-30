export default function menuLeave(page) {
    const listItems = page.querySelectorAll('.menu_page__list_item');

    return gsap.timeline()

    .set(['.menu--close', listItems], {pointerEvents: 'none'})

    .fromTo('.menu--close__ui_fragment', {scaleX: 1}, {
        scaleX: 0,
        stagger: .2
    })

    .set('.menu--close', {display: 'none'})

    .to(page, {
        autoAlpha: 0,
        duration: .8,
        ease: 'none'
    }, 0);
}