
function asarlar_btn() {
  alert('asarlar')
  const asarlar_div = document.querySelector('.asarlari .bottom');
  asarlar_div.classList.toggle('asarlar-notscroll')
}

var aAll = document.querySelectorAll('.slide-a');
var firstImg = document.querySelector('.first-img');
var count = 0;
var set;

function activateSlide(index) {
  for (let i = 0; i < aAll.length; i++) {
    aAll[i].style.background = 'rgba(255, 255, 255, 0.30)';
    aAll[i].style.transform = 'scale(1)';
  }
  aAll[index].style.transform = 'scale(1.1)';
  aAll[index].style.background = '#fff';
  firstImg.style.marginLeft = -index * 100 + '%';
  count = index;
}

function nextSlide() {
  count = (count + 1) % aAll.length;
  activateSlide(count);
}

aAll.forEach((a, index) => {
  a.addEventListener('click', () => {
    activateSlide(index);
    clearInterval(set);
    set = setInterval(nextSlide, 5000);
  });
});

set = setInterval(nextSlide, 5000);

var gmMenu = document.querySelector('.gamburger-menu')
var headFix = document.querySelector('.header-fixer')
var headBg = document.querySelector('.head-bg')
var clearBtn = document.querySelector('.clear-btn')

gmMenu.addEventListener('click', () => {
  headFix.style.display = 'flex'
  headBg.style.display = 'flex'
})

clearBtn.addEventListener('click', () => {
  headFix.classList.add('nowork')
  headBg.classList.add('head-nowork')
  setTimeout(() => {
    headFix.classList.remove('nowork')
    headFix.style.display = 'none'
    headBg.classList.remove('head-nowork')
    headBg.style.display = 'none'
  }, 700);
})


var log = document.querySelector('.log')
var sign = document.querySelector('.sign')
