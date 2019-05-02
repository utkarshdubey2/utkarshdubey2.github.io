function loadImage(id, targetId) {
  const el = document.getElementById(id);
  const targetEl = (targetId) ? document.getElementById(targetId) : el;
  let imageToLoad;

  (el.dataset.image) ? imageToLoad = el.dataset.image : imageToLoad = el.src;

  if (imageToLoad) {
    const img = new Image();
    img.src = imageToLoad;
    img.onload = () => targetEl.classList.add('is-loaded');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadImage('wallpaper');
  loadImage('pictureImage', 'picture');
});