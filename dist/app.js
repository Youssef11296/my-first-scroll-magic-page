const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.section'
})
    .setClassToggle('.section', 'show')
    .addTo(controller)