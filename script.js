const faders = document.querySelectorAll('.fade-in'),
  sliders = document.querySelectorAll('.slide-in'),
  navbar = document.querySelector('.navigation__nav');

const aosObserver = new IntersectionObserver(intersectionHandler, {
  threshold: 0,
  rootMargin: '0px 0px -300px 0px',
});

faders.forEach((fader) => aosObserver.observe(fader));
sliders.forEach((slider) => aosObserver.observe(slider));

function intersectionHandler(entriesArr) {
  entriesArr.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add('appear');
    aosObserver.unobserve(entry.target);
    entry.target.ontransitionend = () =>
      entry.target.classList.remove(
        'fade-in',
        'slide-in',
        'appear',
        'left',
        'right'
      );
  });
}

window.onscroll = () => {
  if (innerWidth > 900) {
    pageYOffset > 70
      ? navbar.classList.add('navigation__nav--scrolled')
      : navbar.classList.remove('navigation__nav--scrolled');
  }
};
