const API_KEY = '53361153-f145cef477c4ac6c9fc0f0a0c';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  });

  const url = `${BASE_URL}?${params}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error('Pixabay fetch error');

  return await response.json();
}
