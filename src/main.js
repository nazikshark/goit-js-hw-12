import { fetchImages } from "./js/pixabay-api.js";
import {
  renderGallery,
  appendGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMore,
  hideLoadMore,
} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

let query = "";
let page = 1;
const perPage = 40;
let totalHits = 0;

form.addEventListener("submit", onSearch);
loadMoreBtn.addEventListener("click", onLoadMore);

async function onSearch(event) {
  event.preventDefault();

  query = event.currentTarget.elements.query.value.trim();

  if (!query) {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search term!",
      position: "topRight",
    });
    return;
  }

  page = 1;
  clearGallery();
  hideLoadMore();
  showLoader();

  try {
    const data = await fetchImages(query, page);

    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.info({
        title: "No results",
        message: "No images found. Try another search.",
        position: "topRight",
      });
      return;
    }

    renderGallery(data.hits);

    if (page * perPage < totalHits) {
      showLoadMore();
    }

  } catch (err) {
    iziToast.error({
      title: "Error",
      message: "Failed to load images. Try again later.",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
}

async function onLoadMore() {
  page += 1;
  hideLoadMore();
  showLoader();

  try {
    const data = await fetchImages(query, page);
    appendGallery(data.hits);

    smoothScroll();

    if (page * perPage >= totalHits) {
      iziToast.info({
        title: "End",
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
      hideLoadMore();
    } else {
      showLoadMore();
    }

  } catch (err) {
    iziToast.error({
      title: "Error",
      message: "Failed to load more images.",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
}

function smoothScroll() {
  const cardHeight = document
    .querySelector(".gallery")
    .firstElementChild.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: "smooth",
  });
}
