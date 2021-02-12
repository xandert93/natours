//MOVE NAVBAR ON SCROLL FOR NON-MOBILE DEVICES
const navBar = document.querySelector('.navigation__nav');

window.onscroll = () => {
  if (innerWidth > 900) {
    pageYOffset > 0
      ? navBar.classList.add('navigation__nav--scrolled')
      : navBar.classList.remove('navigation__nav--scrolled');
  }
};

//CHANGE SLIDE/FADE ON ELEMENTS DEPENDING ON DEVICE WIDTH
window.onload = () => {
  let faders;
  let sliders;
  let rootMargin = '0px 0px -300px 0px';

  if (innerWidth <= 900) {
    rootMargin = '0px 0px -150px 0px';
    let toursSlider = document.querySelector(
      '.section-tours > div.row.slide-in'
    );

    let featuresFader = document.querySelector(
      '.section-features > div.row.fade-in'
    );

    toursSlider.classList.remove('slide-in');
    featuresFader.classList.remove('fade-in');

    Array.from(toursSlider.children)
      .concat(Array.from(featuresFader.children))
      .forEach((element) => {
        element.classList.add('fade-in');
      });
  }

  //AOS INTERSECTION OBSERVER
  faders = document.querySelectorAll('.fade-in');
  sliders = document.querySelectorAll('.slide-in');

  const aosObserver = new IntersectionObserver(intersectionHandler, {
    threshold: 0,
    rootMargin,
  });

  //observe faders and sliders
  Array.from(faders)
    .concat(Array.from(sliders))
    .forEach((faderOrSlider) => aosObserver.observe(faderOrSlider));

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
};

//OPEN/CLOSE MODAL on 7 ELEMENTS
//PREVIOUS - uses 7 event listeners
// const toggleModal = (e) => {
//   e.target.getAttribute('href') !== '#section-booking' && e.preventDefault();

//   if (e.target === e.currentTarget) {
//     const modal = document.querySelector('.popup');
//     const modalBody = document.querySelector('.popup__body');
//     modal.classList.toggle('popup--appear');
//     modalBody.classList.toggle('popup__body--appear');
//   }
// };

//CURRENT - uses 3 event listeners but more crap inside...?
const toggleModal = (e) => {
  if (
    ['navigation__link navigation__link--btn', 'btn btn--white'].includes(
      e.target.className
    ) ||
    ['popup popup--appear', 'popup__close', 'btn btn--green'].includes(
      e.target.className
    )
  ) {
    e.target.getAttribute('href') !== '#section-booking' && e.preventDefault();
    const modal = document.querySelector('.popup');
    const modalBody = document.querySelector('.popup__body');
    modal.classList.toggle('popup--appear');
    modalBody.classList.toggle('popup__body--appear');
  }
};

//MOBILE NAVIGATION CLOSE AFTER CLICKING NAVLINK - event listener on nav container
const closeNav = (e) => {
  if (innerWidth <= 900 && e.target.classList.contains('navigation__link')) {
    const navCheckbox = document.querySelector('.navigation__checkbox');
    navCheckbox.checked = false;
  }
};
