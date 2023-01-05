/* funcionalidades e operacoes */

const campNumber = document.getElementById('camp-numbers');
const btns = document.querySelectorAll('button');
const btnDelete = document.querySelector('.btn-delete');
const btnResultado = document.querySelector('.btn-resultado');
const btnReset = document.querySelector('.btn-reset');

function addValue(event) {
  if (campNumber.innerText.length < 9) {
    campNumber.innerText += event.target.value.replace('.', ',');
  };
}

btns.forEach((item) => {
  item.addEventListener('click', addValue);
});

function delCaracter() {
  const campNumberLength = campNumber.innerText.length - 1;
  let newCampNumber = campNumber.innerText.slice(0, campNumberLength);
  campNumber.innerText = newCampNumber;
}

btnDelete.addEventListener('click', delCaracter);

function resultado() {
  const campTextFormatado = campNumber.innerText.replace(',', '.');
  const resul = eval(campTextFormatado);

  campNumber.innerText = resul.toFixed(2).toString().replace('.', ',');
}

btnResultado.addEventListener('click', resultado)

function resetCaracteres() {
  campNumber.innerText = '';
}

btnReset.addEventListener('click', resetCaracteres);

/* change theme */

const btnThemeChange = document.querySelector('main header .toogle-theme input[type=range]');

if(localStorage.theme) {
  const inputCamp = document.querySelector('input[type=range]');
  inputCamp.setAttribute('value', localStorage.theme);
  changeTheme();
}

function changeTheme() {
  const valueBtn = btnThemeChange.value;
  const cabecalhoTexts = document.querySelectorAll('.cabecalho-text');
  const inputChangeTheme = document.querySelector('input[type=range]');
  const btnCamp = document.querySelector('.botoes');
  const btnsResetAndDel = document.querySelectorAll('button.btn-reset, button.btn-delete');

  if (valueBtn == '1') {
    document.body.style.backgroundColor = 'hsl(222, 26%, 31%)';
    cabecalhoTexts.forEach(i => i.style.color = '#fff');
    inputChangeTheme.style.backgroundColor = 'hsl(223, 31%, 20%)';
    campNumber.style.backgroundColor = 'hsl(224, 36%, 15%)';
    campNumber.style.color = '#fff';
    btnCamp.style.backgroundColor = 'hsl(223, 31%, 20%)';
    btns.forEach(i => i.style.backgroundColor = '#fff');
    btns.forEach(i => i.style.boxShadow = '0 3px 0px hsl(35, 11%, 61%)');
    btns.forEach(i => i.style.color = 'hsl(221, 14%, 31%)');
    btnsResetAndDel.forEach(i => i.style.backgroundColor = 'hsl(225, 21%, 49%)');
    btnsResetAndDel.forEach(i => i.style.color = '#fff');
    btnsResetAndDel.forEach(i => i.style.boxShadow = '0 3px 0px hsl(224, 28%, 35%)');
    btnResultado.style.backgroundColor = 'hsl(6, 63%, 50%)';
    btnResultado.style.color = '#fff';
    btnResultado.style.boxShadow = '0 3px 0px hsl(6deg 70% 34%)';

  } else if (valueBtn == '2') {
    document.body.style.backgroundColor = 'hsl(0, 0%, 90%)';
    cabecalhoTexts.forEach(i => i.style.color = 'hsl(60, 10%, 19%)');
    inputChangeTheme.style.backgroundColor = 'hsl(0, 5%, 81%)';
    campNumber.style.backgroundColor = 'hsl(0, 0%, 93%)';
    campNumber.style.color = 'hsl(60, 10%, 19%)';
    btnCamp.style.backgroundColor = 'hsl(0, 5%, 81%)';
    btns.forEach(i => i.style.backgroundColor = 'hsl(45, 7%, 89%)');
    btns.forEach(i => i.style.boxShadow = '0 3px 0px hsl(35, 11%, 61%)');
    btns.forEach(i => i.style.color = 'hsl(60, 10%, 19%)');
    btnsResetAndDel.forEach(i => i.style.backgroundColor = 'hsl(185, 42%, 37%)');
    btnsResetAndDel.forEach(i => i.style.color = '#fff');
    btnsResetAndDel.forEach(i => i.style.boxShadow = '0 3px 0px hsl(185, 58%, 25%)');
    btnResultado.style.backgroundColor = 'hsl(25, 98%, 40%)';
    btnResultado.style.color = '#fff';
    btnResultado.style.boxShadow = '0 3px 0px hsl(25, 99%, 27%)';

  } else {
    document.body.style.backgroundColor = 'hsl(268, 75%, 9%)';
    cabecalhoTexts.forEach(i => i.style.color = 'hsl(52, 100%, 62%)');
    inputChangeTheme.style.backgroundColor = 'hsl(268, 71%, 12%)';
    campNumber.style.backgroundColor = 'hsl(268, 71%, 12%)';
    campNumber.style.color = 'hsl(52, 100%, 62%)';
    btnCamp.style.backgroundColor = 'hsl(268, 71%, 12%)';
    btns.forEach(i => i.style.backgroundColor = 'hsl(268, 47%, 21%)');
    btns.forEach(i => i.style.boxShadow = '0 3px 0px hsl(290, 70%, 36%)');
    btns.forEach(i => i.style.color = 'hsl(52, 100%, 62%)');
    btnsResetAndDel.forEach(i => i.style.backgroundColor = 'hsl(281, 89%, 26%)');
    btnsResetAndDel.forEach(i => i.style.color = '#fff');
    btnsResetAndDel.forEach(i => i.style.boxShadow = '0 3px 0px hsl(285, 91%, 52%)');
    btnResultado.style.backgroundColor = 'hsl(176, 100%, 44%)';
    btnResultado.style.color = 'hsl(198, 20%, 13%)';
    btnResultado.style.boxShadow = '0 3px 0px hsl(177 92% 70%)';
  }
}

btnThemeChange.addEventListener('change', changeTheme);

// salvar tema preferencial no armazenamento local

if(localStorage.theme) {
  document.querySelector('input[type=range]').value = localStorage.theme;
}

const saveTheme = function() {
  const toggleTheme = document.querySelector('input[type=range]').value;
  localStorage.setItem('theme', toggleTheme);
}

document.onchange = saveTheme;
