export default function contentLeaveToMenu(page) {
    const video = page.querySelector('video');

    const pageTransitionComponents = page.querySelectorAll('.ui_page_transition_component');

    const play = page.querySelectorAll('.page_content__play');

    return gsap.timeline()

    .set(['.menu--open', '.page_content__sns', play], {pointerEvents: 'none'})

    .set('.menu--open__ui_fragment', {transformOrigin: 'right'})

    .set(play, {transition: 'none'})

    .fromTo('.to_home', {autoAlpha: 1}, {
        autoAlpha: 0,
        ease: 'none'
    })

    .fromTo('.menu--open__ui_fragment', {scaleX: 1}, {
        scaleX: 0,
        stagger: .2
    }, '<')

    .set(['.to_home', '.menu--open'], {display: 'none'})

    .to(pageTransitionComponents, {
        scaleY: 1,
        duration: .8,
        ease: 'power1.inOut',
        onComplete: () => {
            video.pause()
            video.currentTime = 0
        }
    });
};