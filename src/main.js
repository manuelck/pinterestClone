import '../src/main.css';
import navTemplate from './navbar/navbar.js';
import landingTemplate from './landing/landing.js';
import footerTemplate from './footer/footer.js';
import { displayRandomImages, displayPopularImages, displayLatestImages, searchAndDisplayImages, loadMoreImages } from './landing/randomImageFunction.js';

const printNav = () => {
    const navElement = document.querySelector("#navbar");
    if (navElement) {
        navElement.innerHTML = navTemplate;
    }
};

const printFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
        footerElement.innerHTML = footerTemplate();
    }
};

const printLanding = () => {
    const landingElement = document.querySelector(".landing");
    if (landingElement) {
        landingElement.innerHTML = landingTemplate();
    }
};

const reloadApp = () => {
    setTimeout(() => location.reload(), 3000);
    setTimeout(initializeApp, 3000);
};

const initializeApp = async () => {
    try {
        printNav();
        printLanding();
        printFooter(); 
        await displayRandomImages(); 
        addEventListeners();
    } catch (error) {
        console.error("An error occurred during initialization:", error);
    }
};

const addEventListeners = () => {
    const popularBtn = document.getElementById('popular-btn');
    const latestBtn = document.getElementById('latest-btn');
    const randomBtn = document.getElementById('random-btn');
    const searchBtn = document.getElementById('search-btn');
    const loadMoreBtn = document.getElementById('load-more-btn');

    if (popularBtn) popularBtn.addEventListener('click', displayPopularImages);
    if (latestBtn) latestBtn.addEventListener('click', displayLatestImages);
    if (randomBtn) randomBtn.addEventListener('click', displayRandomImages);
    if (searchBtn) searchBtn.addEventListener('click', searchAndDisplayImages);
    if (loadMoreBtn) loadMoreBtn.addEventListener('click', loadMoreImages);
};

document.addEventListener('DOMContentLoaded', initializeApp);

document.addEventListener('DOMContentLoaded', () => {
    const links = [
        { id: 'gift', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        { id: 'manux', url: 'https://x.com/manuelck_' },
        { id: 'manui', url: 'https://www.instagram.com/manuuelck' },
        { id: 'manub', url: 'https://www.behance.net/Manuelcorpas' }
    ];

    links.forEach(link => {
        const element = document.getElementById(link.id);
        if (element) {
            element.addEventListener('click', () => {
                window.open(link.url, '_blank');
            });
        }
    });
});
