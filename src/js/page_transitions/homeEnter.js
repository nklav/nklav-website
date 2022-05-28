export default function homeEnter(page) {
    const scrollLayers = page.querySelector('.scroll_layers');

    const pageTitles = page.querySelectorAll('.scroll_layers__page_title a');

    const scrollIndicator = page.querySelector('.scroll_indicator');
    const scrollIndicatorIndex = page.querySelector('.scroll_indicator_index');

    const scrollHint = page.querySelector('.scroll_hint');

    const scrollIndex = page.querySelector('.scroll_index');

    return gsap.timeline({
        delay: .5,
        onStart: () => {if (document.body.classList.contains('no_scroll')) document.body.classList.remove('no_scroll')}
    })

    .set(['.to_home', '.menu--open'], {display: 'block'})

    .set('.menu--open__ui_fragment', {transformOrigin: 'left'})

    .set([scrollLayers, scrollIndicator, scrollIndicatorIndex, scrollHint, scrollIndex], {visibility: 'visible'})

    .fromTo('.to_home', {autoAlpha: 0}, {
        autoAlpha: 1,
        ease: 'none'
    })

    .fromTo('.menu--open__ui_fragment', {scaleX: 0}, {
        scaleX: 1,
        stagger: .2
    }, '<')

    .from(page, {
        autoAlpha: 0,
        duration: .8,
        ease: 'none'
    }, '<')

    .set(['.menu--open', pageTitles], {pointerEvents: 'auto'});
};