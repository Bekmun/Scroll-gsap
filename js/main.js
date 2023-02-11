gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true
  })

  gsap.fromTo('.header', {opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.header',
      start: 'center',
      end: '1100',
      scrub: true
    }
  })

  const itemL = gsap.utils.toArray('.porfolio__left .gallery-item')

  itemL.forEach(item => {
    gsap.fromTo(item, { x: -50, opacity: 0 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-850',
        end: '-100',
        scrub: true
      }
    })
  })
  
  const itemR = gsap.utils.toArray('.porfolio__right .gallery-item')

  itemR.forEach(item => {
    gsap.fromTo(item, { x: 50, opacity: 0 }, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-850',
        end: '-100',
        scrub: true
      }
    })
  })
}