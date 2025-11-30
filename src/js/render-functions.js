export function clearGallery() {
  document.querySelector(".gallery").innerHTML = "";
}

export function renderGallery(images) {
  document.querySelector(".gallery").innerHTML = createMarkup(images);
}

export function appendGallery(images) {
  document
    .querySelector(".gallery")
    .insertAdjacentHTML("beforeend", createMarkup(images));
}

function createMarkup(images) {
  return images
    .map(
      img => `
        <li class="item">
          <img src="${img.webformatURL}" alt="${img.tags}" width="300" />
        </li>`
    )
    .join("");
}

export function showLoader() {
  document.querySelector(".loader").classList.remove("hidden");
}

export function hideLoader() {
  document.querySelector(".loader").classList.add("hidden");
}

export function showLoadMore() {
  document.querySelector(".load-more").classList.remove("hidden");
}

export function hideLoadMore() {
  document.querySelector(".load-more").classList.add("hidden");
}
