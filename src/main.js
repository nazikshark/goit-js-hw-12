import { fetchImages } from "./js/pixabay-api.js";
import {
  clearGallery,
  renderImages,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".search-form");
const loadMoreBtn = document.querySelector(".load-more");

let query = "";
let page = 1;
let totalHits = 0;

form.addEventListener("submit", onFormSubmit);
loadMoreBtn.addEventListener("click", onLoadMore);

async function onFormSubmit(e) {
  e.preventDefault();

  hideLoadMoreButton();
  hideLoader();

  query = e.currentTarget.query.value.trim();

  if (!query) {
    iziToast.error({
      title: "Error",
      message: "The search field cannot be empty.",
      position: "topRight",
    });
    return;
  }

  page = 1;
  clearGallery();
  showLoader();

  try {
    const data = await fetchImages(query, page);

    if (data.hits.length === 0) {
      iziToast.warning({
        title: "Warning",
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
      return;
    }

    totalHits = data.totalHits;
    renderImages(data.hits);

    if (data.totalHits > 15) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "Something went wrong. Try again later.",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
}

async function onLoadMore() {
  hideLoadMoreButton();
  showLoader();
  page += 1;

  try {
    const data = await fetchImages(query, page);
    renderImages(data.hits);

    if (page * 15 >= totalHits) {
      iziToast.info({
        title: "Info",
        message: "We’re sorry, but you’ve reached the end of search results.",
        position: "topRight",
      });
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "Failed to load more images.",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
}
