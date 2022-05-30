export default function contentLeaveToHome(page) {
    const video = page.querySelector('video');

    const pageTransitionComponents = page.querySelectorAll('.ui_page_transition_component');

    const play = page.querySelectorAll('.page_content__play');

    return gsap.timeline()

    .set(['.to_home', '.menu--open', '.page_content__sns', play], {pointerEvents: 'none'})

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

    .set(page, {}, '+=.5');
}