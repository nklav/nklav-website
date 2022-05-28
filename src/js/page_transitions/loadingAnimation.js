export default function loadingAnimation() {
    return gsap.timeline({delay: 1})

    .set('.loader', {display: 'block'})

    .from('.loader', {
        opacity: 0,
        duration: .3,
        ease: 'none'
    })

    .to('.loader__progress_bar', {
        scaleX: .25,
        ease: 'power2.out',
        delay: .3
    })

    .to('.loader__progress_bar', {
        scaleX: .5,
        ease: 'power2.out'
    })

    .to('.loader__progress_bar', {
        scaleX: 1,
        ease: 'power4.in',
        delay: .5
    })

    .set('.loader', {transformOrigin: 'right'})

    .to('.loader', {
        scaleX: 0,
        ease: 'power4.out',
        delay: .3
    })

    .set('.loader', {display: 'none'});
};