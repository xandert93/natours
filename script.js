const faders = document.querySelectorAll('.fade-in'),
  sliders = document.querySelectorAll('.slide-in');

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
    } else {
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
    }
  });
}
