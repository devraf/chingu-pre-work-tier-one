function parallaxElement(selector, effect, adjustment) {
  window.addEventListener('scroll', function() {
    let scrolled = window.pageYOffset
    var background = document.querySelector(selector)
    var rate = -scrolled * effect - adjustment + 'px'
    background.style.backgroundPosition = `0% ${rate}`
  })
}

parallaxElement('.hero', -0.5, 0)
parallaxElement('.parallax', 0.22, -150)
parallaxElement('.contact', 0.15, -500)
