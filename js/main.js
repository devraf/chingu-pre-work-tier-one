window.addEventListener('scroll', function() {
  let scrolled = window.pageYOffset
  let target = document.querySelector('.parallax')
  let rate = -scrolled * 0.1 - 300 + 'px'
  target.style.backgroundPosition = `0% ${rate}`
})

window.addEventListener('scroll', function() {
  let scrolled = window.pageYOffset
  var background = document.querySelector('.contact')
  var rate = -scrolled * 0.1 - -300 + 'px'
  background.style.backgroundPosition = `0% ${rate}`
})
