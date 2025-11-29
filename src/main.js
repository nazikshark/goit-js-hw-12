import { 
  getImagesByQuery 
} from "./js/pixabay-api";

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  lightbox
} from "./js/render-functions";

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const loadMoreBtn = document.querySelector('#load-more-btn');

let query = '';
let page = 1;
let totalHits = 0;

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();

  query = input.value.trim();
  if (!query) return;

  page = 1;                
  clearGallery();
  hideLoadMoreButton();

  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      hideLoader();
      alert('No results found');
      return;
    }

    createGallery(data.hits);
    handlePagination(data);

  } catch (err) {
    console.log(err);
    alert("Error fetching images");
  } finally {
    hideLoader();
  }
}

async function onLoadMore() {
  page++;

  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    createGallery(data.hits);
    handlePagination(data);

    smoothScroll();

  } catch (err) {
    alert("Error loading more images");
  } finally {
    hideLoader();
  }
}

function handlePagination(data) {
  const maxPages = Math.ceil(totalHits / 15);

  if (page >= maxPages) {
    hideLoadMoreButton();
    alert("We're sorry, but you've reached the end of search results.");
  } else {
    showLoadMoreButton();
  }
}

function smoothScroll() {
  const firstCard = document.querySelector('.gallery-item');
  const cardHeight = firstCard.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}