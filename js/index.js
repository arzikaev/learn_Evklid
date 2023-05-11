//slider
const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    spaceBetween: 10,
  },
});

const itemSteps = document.querySelectorAll('.step__item');
const instructionContents = document.querySelectorAll('.instruction__content');

itemSteps.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    const path = e.currentTarget.dataset.path;

    itemSteps.forEach((step) => {
      console.log(step.classList)
      step.classList.remove("step__item-active");
      e.currentTarget.classList.add("step__item-active");
    });

    instructionContents.forEach((instruction) => {
      instruction.classList.remove("instruction__content-active");
      document.querySelector(`[data-target="${path}"]`).classList.add('instruction__content-active');
    })
  });
});

//accordion
new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

//burger-menu
const burger = document.querySelector('.burger');
const menuOverlay = document.querySelector('.menu__overlay');
const menu = document.querySelector('.header__nav');
const menuLinks = menu.querySelectorAll('.nav__header__link');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  menuOverlay.classList.toggle('menu__overlay--active')
  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', ()=> {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    menuOverlay.classList.remove('menu__overlay--active')
    document.body.classList.remove('stop-scroll');
  })
});

//searcher
const navSearch = document.querySelector('.nav__header__search__input');
const searchBtnClose = document.querySelector('.nav__search__btn__closed');
const searchBtn = document.querySelector('.nav__search__btn');

searchBtn.addEventListener('click', () => {
  navSearch.classList.toggle('nav__header__search__input--active');
  searchBtnClose.classList.toggle('nav__search__btn__closed--active');
  menuOverlay.classList.toggle('menu__overlay--active')
  document.body.classList.toggle('stop-scroll');
});

searchBtnClose.addEventListener('click', () => {
  navSearch.classList.remove('nav__header__search__input--active');
  searchBtnClose.classList.remove('nav__search__btn__closed--active');
  menuOverlay.classList.remove('menu__overlay--active')
  document.body.classList.remove('stop-scroll');
});

//menuOverlay
menuOverlay.addEventListener('click', ()=> {
  burger.classList.remove('burger--active');
  menu.classList.remove('header__nav--active');
  menuOverlay.classList.remove('menu__overlay--active');
  document.body.classList.remove('stop-scroll');
  navSearch.classList.remove('nav__header__search__input--active');
  searchBtnClose.classList.remove('nav__search__btn__closed--active');
})
