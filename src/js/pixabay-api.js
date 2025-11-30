const API_KEY = "53361153-f145cef477c4ac6c9fc0f0a0c";
const BASE_URL = "https://pixabay.com/api/";

export function fetchImages(query, page) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`;

  return fetch(url).then(response => {
    if (!response.ok) throw new Error("Network error");
    return response.json();
  });
}