import './css/styles.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  clearGallery,
  showLoader,
  hideLoader,
  toggleLoadMoreButton,
} from './js/render-functions.js';

let query = '';
let page = 1;
let totalHits = 0;
const searchForm = document.querySelector('#search-form');
const loadMoreButton = document.querySelector('#load-more');
let lightbox;

searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  query = e.target.elements.query.value.trim();
  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search term.' });
    return;
  }
  page = 1;
  clearGallery();
  toggleLoadMoreButton(false);
  await loadImages();
});

loadMoreButton.addEventListener('click', async () => {
  page += 1;
  await loadImages();
});

async function loadImages() {
  showLoader();
  try {
    const data = await fetchImages(query, page);
    totalHits = data.totalHits;
    if (data.hits.length === 0) {
      iziToast.info({ title: 'No Results', message: 'No images found.' });
      return;
    }
    renderImages(data.hits);
    if (!lightbox) {
      lightbox = new SimpleLightbox('.gallery a');
    } else {
      lightbox.refresh();
    }
    toggleLoadMoreButton(page * 15 < totalHits);
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Failed to load images.' });
  } finally {
    hideLoader();
  }
}
function scrollToNewImages() {
  const { height: cardHeight } = document
    .querySelector('.gallery a')
    .getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
