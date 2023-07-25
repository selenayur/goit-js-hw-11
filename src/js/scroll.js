import { refs } from './refs';
function smoothScrollGallery(el) {
  window.scroll({
    top: el.offsetTop,
    behavior: 'smooth',
  });
}

export default function upButtonVisible() {
  refs.fastScrollUp.hidden = false;

  refs.fastScrollUp.addEventListener('click', () => {
    setTimeout(() => {
      refs.fastScrollUp.hidden = true;
    }, 1000);
    smoothScrollGallery(refs.searchForm);
  });
}
