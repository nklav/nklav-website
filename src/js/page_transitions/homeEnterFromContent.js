export default function homeEnterFromContent(page) {
    const scrollLayers = page.querySelector('.scroll_layers');

    const pageTitles = page.querySelectorAll('.scroll_layers__page_title a');

    const scrollIndicator = page.querySelector('.scroll_indicator');
    const scrollIndicatorIndex = page.querySelector('.scroll_indicator_index');

    const scrollHint = page.querySelector('.scroll_hint');

    const scrollIndex = page.querySelector('.scroll_index');

    return gsap.timeline()

    .set([scrollLayers, scrollIndicator, scrollIndicatorIndex, scrollHint, scrollIndex], {visibility: 'visible'})
    
    .from(page, {
        autoAlpha: 0,
        duration: .8,
        ease: 'none'
    }, '+=.2')

    .set(['.to_home', '.menu--open', pageTitles], {pointerEvents: 'auto'})

    .set('.menu--open__ui_fragment', {transformOrigin: 'left'});
};