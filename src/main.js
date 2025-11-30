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
  page = 1;

  if (!query) {
    iziToast.error({
      message: "Please enter a search term",
      position: "topRight",
    });
    return;
  }

  clearGallery();
  hideLoadMore();
  showLoader();

  try {
    const data = await fetchImages(query, page);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.warning({
        message: "Sorry, no images found",
        position: "topRight",
      });
      hideLoader();
      return;
    }

    renderGallery(data.hits);

    if (page * perPage < totalHits) {
      showLoadMore();
    }
  } catch (error) {
    iziToast.error({
      message: "Something went wrong. Try again later.",
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

    const cardHeight = document
      .querySelector(".gallery li")
      .getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth",
    });

    if (page * perPage >= totalHits) {
      hideLoadMore();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
    } else {
      showLoadMore();
    }
  } catch (error) {
    iziToast.error({
      message: "Error loading more images",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
}
