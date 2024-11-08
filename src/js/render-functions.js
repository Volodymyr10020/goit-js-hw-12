export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      image => `
    <a href="${image.largeImageURL}" class="gallery__item">
      <img src="${image.webformatURL}" alt="${image.tags}" />
    </a>
  `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader').classList.add('visible');
}

export function hideLoader() {
  document.querySelector('.loader').classList.remove('visible');
}

export function toggleLoadMoreButton(show) {
  const button = document.querySelector('#load-more');
  button.classList.toggle('hidden', !show);
}
