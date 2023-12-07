function showContent(contentType) {
  const iqtibos = document.querySelector('.iqtibos');
  const taqriz = document.querySelector('.taqriz');
  const kitob_li = document.querySelectorAll('.kitob-haqida .top ul li');

  kitob_li.forEach(li => li.style.color = '');

  if (contentType === 'iqtibos') {
    iqtibos.style.display = 'flex';
    taqriz.style.display = 'none';
    kitob_li[1].style.color = 'var(--cream)';
    kitob_li[2].style.color = 'var(--light-gray)';
  } else if (contentType === 'taqriz') {
    iqtibos.style.display = 'none';
    taqriz.style.display = 'flex';
    kitob_li[1].style.color = 'var(--light-gray)';
    kitob_li[2].style.color = 'var(--cream)';
  }
}

function kitob_tavsiya() {
  const kt_bottom = document.querySelector('.kitob-tavsiya .bottom');
  kt_bottom.classList.toggle('kt_notscroll');
}

function comment(contentType) {
  const comment = document.querySelector('.comment');
  const textarea = document.querySelector('.comment textarea');

  if (contentType === 'close') {
    if (textarea.value.trim() !== '') {
      comment.style.display = 'none';
    }
  } else if (contentType === 'open') {
    comment.style.display = 'flex';        
  }else if (contentType === 'close-nocomment') {
    comment.style.display = 'none';
  }
}
