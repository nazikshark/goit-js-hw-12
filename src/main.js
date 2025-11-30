import { fetchImages } from "./js/pixabay-api.js";
import { renderGallery, appendGallery } from "./js/render-functions.js";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMoreBtn = document.querySelector(".load-more");
const endMessage = document.querySelector(".end-message");

let query = "";
let page = 1;
const perPage = 40;
let totalHits = 0;

form.addEventListener("submit", onSearch);
loadMoreBtn.addEventListener("click", onLoadMore);

function onSearch(event) {
  event.preventDefault();
  query = event.currentTarget.elements.query.value.trim();

  if (!query) {
    alert("Enter search text");
    return;
  }

  page = 1;
  gallery.innerHTML = "";
  hideLoadMore();
  hideEndMessage();
  showLoader();

  fetchImages(query, page)
    .then(data => {
      totalHits = data.totalHits;

      renderGallery(data.hits);

      if (data.hits.length === 0) {
        hideLoadMore();
        return;
      }

      if (page * perPage >= totalHits) {
        showEndMessage();
      } else {
        showLoadMore();
      }
    })
    .catch(() => alert("Error loading images"))
    .finally(hideLoader);
}

function onLoadMore() {
  page += 1;
  hideLoadMore();
  showLoader();

  fetchImages(query, page)
    .then(data => {
      appendGallery(data.hits);

      if (page * perPage >= totalHits) {
        hideLoadMore();
        showEndMessage();
      } else {
        showLoadMore();
      }
    })
    .catch(() => alert("Error loading"))
    .finally(hideLoader);
}

function showLoader() {
  loader.classList.remove("hidden");
}
function hideLoader() {
  loader.classList.add("hidden");
}
function showLoadMore() {
  loadMoreBtn.classList.remove("hidden");
}
function hideLoadMore() {
  loadMoreBtn.classList.add("hidden");
}
function showEndMessage() {
  endMessage.classList.remove("hidden");
}
function hideEndMessage() {
  endMessage.classList.add("hidden");
}
