const slideInfo = document.querySelectorAll('main .slide-container');
const btns = document.querySelectorAll('main .slide-container .btns .btn');

function onChange() {
  slideInfo.forEach((item) => {
    item.classList.toggle('ativo');
  })
}

btns.forEach((item) => {
  item.addEventListener('click', onChange);
});