export default function slide() {
  const thumbnails = document.querySelectorAll('main .imgs ul li');
  const imgsPrincipais = document.querySelectorAll('main .imgs .img-large .img-principal');

  // muda o slide ao click na thumb

  function changeSlide(item) {
    const indexAddClass = item.target.name;
    imgsPrincipais.forEach((img) => {
      img.classList.remove('active');
    });
    imgsPrincipais[indexAddClass].classList.add('active');

    thumbnails.forEach((thumb) => {
      thumb.classList.remove('active');
    });
    thumbnails[indexAddClass].classList.add('active');
  }

  thumbnails.forEach((item) => {
    item.addEventListener('click', changeSlide)
  });
}