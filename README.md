# GoIT JavaScript Homework #12 — Advanced Image Search with Pagination

The grand finale of the JavaScript course! This project is an upgraded version of the Image Search App, now featuring pagination, asynchronous performance optimizations, and enhanced user interface interactions.

## 📋 Project Overview
This application allows users to browse thousands of images from Pixabay using an infinite-scroll-like "Load More" functionality. It demonstrates deep knowledge of asynchronous JavaScript and DOM optimization.

## 🚀 New Features & Enhancements:

### 1. Async/Await Refactoring
- Migrated all Promise-based chains (`.then/.catch`) to the modern `async/await` syntax for better readability and robust error handling using `try...catch` blocks.

### 2. Smart Pagination
- **Dynamic Fetching**: Implemented `page` logic to fetch 15 images per request.
- **State Persistence**: The app tracks the current page and the search query across multiple requests.
- **End of Results**: Intelligent check comparing `totalHits` with the current number of loaded images to notify the user when the collection ends.

### 3. Professional UX & UI
- **Load More Button**: A dedicated button that appears only when additional results are available.
- **Smooth Scrolling**: Implemented automatic page scrolling using `window.scrollBy` and `getBoundingClientRect` to guide the user to new content.
- **Loader Management**: Integrated loaders that appear specifically during the "Load More" phase without clearing existing content.

### 4. Modular Code Structure
- Continued use of a clean modular approach separating API logic (`pixabay-api.js`), UI rendering (`render-functions.js`), and main application orchestration (`main.js`).

## 🛠 Technologies:
- **Core**: JavaScript (ES6+), Async/Await, Axios.
- **Build Tool**: Vite.
- **Libraries**: SimpleLightbox (Gallery), iziToast (Notifications), CSS-loader (Visual feedback).
- **Web APIs**: DOM Rect, Window Scroll API.

## 🔗 Live Demo:
[Link to your GitHub Pages here]
