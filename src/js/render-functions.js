export function renderGallery(images) {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = images
    .map(
      img => `
    <li class="item">
      <img src="${img.webformatURL}" alt="${img.tags}" width="200" height="150"/>
    </li>`
    )
    .join("");
}

export function appendGallery(images) {
  const gallery = document.querySelector(".gallery");
  gallery.insertAdjacentHTML(
    "beforeend",
    images
      .map(
        img => `
      <li class="item">
        <img src="${img.webformatURL}" alt="${img.tags}" width="200" height="150"/>
      </li>`
      )
      .join("")
  );
}
