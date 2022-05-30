export default function contentEnterFromMenu(page) {
    const video = page.querySelector('video');

    const pageTransitionComponents = page.querySelectorAll('.ui_page_transition_component');

    const play = page.querySelectorAll('.page_content__play');

    return gsap.timeline({
        delay: .5,
        onStart: () => {
            if (document.body.classList.contains('no_scroll')) document.body.classList.remove('no_scroll');
        }
    })

    .set(['.to_home', '.menu--open'], {display: 'block'})

    .set('.menu--open__ui_fragment', {transformOrigin: 'left'})
    
    .to(pageTransitionComponents, {
        scaleY: 0,
        duration: 1,
        ease: 'power1.inOut',
        onStart: () => video.play()
    })

    .fromTo('.to_home', {autoAlpha: 0}, {
        autoAlpha: 1,
        ease: 'none'
    }, '>-.3')
    
    .fromTo('.menu--open__ui_fragment', {scaleX: 0}, {
        scaleX: 1,
        stagger: .2
    }, '<')

    .set(['.menu--open', '.page_content__sns', play], {pointerEvents: 'auto'})

    .set(play, {transition: 'transform .5s cubic-bezier(.2, 0, 0, 2)'});
}