//MOVE NAVBAR ON SCROLL FOR NON-MOBILE DEVICES
const navbar = document.querySelector('.navigation__nav');

window.onscroll = () => {
  if (innerWidth > 900) {
    pageYOffset > 0
      ? navbar.classList.add('navigation__nav--scrolled')
      : navbar.classList.remove('navigation__nav--scrolled');
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

//MAKE MODAL OUTSIDE CLICKABLE FOR EXIT
const modal = document.querySelector('.popup');
const modalBody = document.querySelector('.popup__body');
const modalButton = document.querySelector('.popup__body a.btn');

const showModal = (e) => {
  e.preventDefault();
  modal.classList.add('popup--appear');
  modalBody.classList.add('popup__body--appear');
};

const closeModal = (e) => {
  if (e.target === e.currentTarget) {
    e.target !== modalButton && e.preventDefault();
    modal.classList.remove('popup--appear');
    modalBody.classList.remove('popup__body--appear');
  }
};
