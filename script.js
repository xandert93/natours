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

    let tourCards = document.querySelectorAll(
      '.section-tours > div.row > .col-1-of-3'
    );
    let featuresBoxes = document.querySelectorAll(
      '.section-features > div.row > .col-1-of-4'
    );

    tourCards.forEach((tourCard) => {
      tourCard.classList.add('fade-in');
    });
    featuresBoxes.forEach((featureBox) => {
      featureBox.classList.add('fade-in');
    });
  }

  faders = document.querySelectorAll('.fade-in');
  sliders = document.querySelectorAll('.slide-in');

  const aosObserver = new IntersectionObserver(intersectionHandler, {
    threshold: 0,
    rootMargin,
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
};

//OPEN/CLOSE MODAL on 7 ELEMENTS
const toggleModal = (e) => {
  e.target.getAttribute('href') !== '#section-booking' && e.preventDefault();

  if (e.target === e.currentTarget) {
    const modal = document.querySelector('.popup');
    const modalBody = document.querySelector('.popup__body');
    modal.classList.toggle('popup--appear');
    modalBody.classList.toggle('popup__body--appear');
  }
};

//MOBILE NAVIGATION CLOSE AFTER CLICKING NAVLINK - EvLstr on nav container
const closeNav = (e) => {
  if (innerWidth <= 900 && e.target.classList.contains('navigation__link')) {
    const navCheckbox = document.querySelector('.navigation__checkbox');
    navCheckbox.checked = false;
  }
};
