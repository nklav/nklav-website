const contentEnter = page => {
    const video = page.querySelector('video')

    const pageTransitionComponents = page.querySelectorAll('.ui_page_transition_component')

    const heading = page.querySelector('.page_content__heading')
    const description = page.querySelector('.page_content__description')

    const shareLabel = page.querySelector('.page_content__share_label')
    const socialIcons = page.querySelectorAll('.page_content__icon')

    const play = page.querySelectorAll('.page_content__play')
    const info = page.querySelector('.page_content__show_info')

    return gsap.timeline({
        delay: .5,
        onStart: () => {if (document.body.classList.contains('no_scroll')) document.body.classList.remove('no_scroll')}
    })

    .set(['.to_home', '.menu--open'], {display: 'block'})

    .set('.menu--open__ui_fragment', {transformOrigin: 'left'})
    
    .to(pageTransitionComponents, {
        scaleY: 0,
        duration: 4,
        ease: 'slow',
        onStart: () => video.play()
    })

    .fromTo('.to_home', {autoAlpha: 0}, {
        autoAlpha: 1,
        ease: 'none'
    }, '>-1.5')
    
    .fromTo('.menu--open__ui_fragment', {scaleX: 0}, {
        scaleX: 1,
        stagger: .2
    }, '<')

    .set('.menu--open', {pointerEvents: 'auto'})

    .from(heading, {
        xPercent: -100,
        duration: 1,
        ease: 'power2.out'
    }, '>-1.5')

    .from(description, {
        yPercent: -100,
        duration: 1,
        ease: 'power2.out'
    }, '<')
    
    .from(shareLabel, {
        yPercent: 100,
        duration: .8,
        ease: 'power2.out'
    }, '<')
    
    .from(socialIcons, {
        scale: 0,
        ease: 'back',
        duration: .8,
        stagger: .2
    }, '>-.2')
    
    .from(play, {
        scale: 0,
        duration: .8,
        ease: 'back',
        clearProps: 'scale'
    }, '<')
    
    .from(info, {
        autoAlpha: 0,
        duration: .8,
        ease: 'none'
    }, '<')

    .set(['.page_content__sns', play], {pointerEvents: 'auto'})

    .set(play, {transition: 'transform .5s cubic-bezier(.2, 0, 0, 2)'})
}

export default contentEnter