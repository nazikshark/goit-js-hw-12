import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
let lightbox = new SimpleLightbox(".gallery a");

export function clearGallery() {
  gallery.innerHTML = "";
}

export function renderImages(images) {
  const markup = images
    .map(
      (img) => `
      <div class="gallery-item">
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" />
        </a>
      </div>`
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);

  lightbox.refresh();
}

export function showLoader() {
  document.querySelector(".loader").classList.remove("is-hidden");
}

export function hideLoader() {
  document.querySelector(".loader").classList.add("is-hidden");
}

export function showLoadMoreButton() {
  document.querySelector(".load-more").classList.remove("is-hidden");
}

export function hideLoadMoreButton() {
  document.querySelector(".load-more").classList.add("is-hidden");
}
