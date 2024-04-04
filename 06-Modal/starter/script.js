'use strict';

// const modal = document.querySelector('.modal');

// const overLay = document.querySelector('.overlay');

// const btnCloseModal = document.querySelector('.close-modal');

// const btnsOpenModal = document.querySelectorAll('.show-modal');

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overLay.classList.add('hidden');
// };

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overLay.classList.remove('hidden');
// };
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', openModal);
// }

// btnCloseModal.addEventListener('click', closeModal);
// overLay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
// });

const modalBtnOpen = document.querySelectorAll('.show-modal'); // object of the 3 different btns

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const modal = document.querySelector('.modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < modalBtnOpen.length; i++) {
  modalBtnOpen[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
