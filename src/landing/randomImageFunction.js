const UNSPLASH_API_KEY = 'ppdXkK5D0CVieFWNOY92ozafkw9Agf2sMpVOsXHrc04';

const fetchImages = async (url, isSearch = false) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return (isSearch ? data.results : data).map(image => ({
      url: image.urls.regular,
      name: image.alt_description || "Untitled",
      unsplashLink: image.links.html
    }));
  } catch (error) {
    console.error("Failed to fetch images:", error);
    reloadApp();
    return [];
  }
};

const getRandomImages = async (count = 9) =>
  fetchImages(`https://api.unsplash.com/photos/random?client_id=${UNSPLASH_API_KEY}&count=${count}`);

const getPopularImages = async (count = 9) =>
  fetchImages(`https://api.unsplash.com/photos?order_by=popular&client_id=${UNSPLASH_API_KEY}&per_page=${count}`);

const getLatestImages = async (count = 9) =>
  fetchImages(`https://api.unsplash.com/photos?order_by=latest&client_id=${UNSPLASH_API_KEY}&per_page=${count}`);

const searchImages = async (query) =>
  fetchImages(`https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_API_KEY}&per_page=9`, true);

const createImageElement = (image) => {
  const post = document.createElement('div');
  post.classList.add('post');

  const img = document.createElement('img');
  img.src = image.url;
  img.alt = image.name || "Untitled";

  const h1 = document.createElement('h1');
  h1.textContent = image.name || "Untitled";

  addUnsplashClickListener(post, image.unsplashLink);

  post.appendChild(img);
  post.appendChild(h1);

  img.onload = () => img.classList.add('loaded');

  return post;
};

const displayImages = async (imagesFetcher) => {
  const appContainer = document.getElementById('app');
  const loadMoreButton = document.getElementById('load-more-btn');
  appContainer.innerHTML = '';
  const images = await imagesFetcher();
  if (images.length === 0) {
    displayNoResultsMessage(loadMoreButton);
  } else {
    loadMoreButton.style.display = 'block';
    images.forEach(image => appContainer.appendChild(createImageElement(image)));
  }
  // Hide the load more button if an error occurred
  if (images.length === 0 && loadMoreButton) {
    loadMoreButton.style.display = 'none';
  }
};

const displayRandomImages = async () => await displayImages(getRandomImages);
const displayPopularImages = async () => await displayImages(getPopularImages);
const displayLatestImages = async () => await displayImages(getLatestImages);
const searchAndDisplayImages = async () => {
  const query = document.getElementById('filter-input').value;
  if (query) await displayImages(() => searchImages(query));
};
const loadMoreImages = async () => {
  const appContainer = document.getElementById('app');
  const currentCount = appContainer.children.length;
  const additionalImages = await getRandomImages(Math.floor(currentCount / 10) + 9);
  additionalImages.forEach(image => appContainer.appendChild(createImageElement(image)));
};

const addUnsplashClickListener = (element, url) => element.addEventListener('click', () => window.open(url, '_blank'));

const displayNoResultsMessage = (loadMoreButton) => {
  const appContainer = document.getElementById('app');
  const message = document.createElement('div');
  message.classList.add('no-results');
  message.innerHTML = `
    <p>No image found. You can try searching by:</p>
    <div class="not-found-btns"> 
    <button id="random-btn">Random</button>
    <button id="popular-btn">Popular</button>
    <button id="latest-btn">Latest</button>
    </div>
  `;
  appContainer.appendChild(message);
  appContainer.addEventListener('click', (event) => {
    if (event.target && event.target.id === 'random-btn') {
      displayRandomImages();
    } else if (event.target && event.target.id === 'popular-btn') {
      displayPopularImages();
    } else if (event.target && event.target.id === 'latest-btn') {
      displayLatestImages();
    }
  });
};

const reloadApp = () => setTimeout(() => location.reload(), 3000);

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('load-more-btn').addEventListener('click', loadMoreImages);
  document.getElementById('search-btn').addEventListener('click', searchAndDisplayImages);
});

export {
  displayRandomImages,
  displayPopularImages,
  displayLatestImages,
  searchAndDisplayImages,
  loadMoreImages
};
