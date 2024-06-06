import pinterestLogo from '../../public/assets/pinterest.svg'


const navTemplate =  
  `
    <img class="logo" id="logo" src="${pinterestLogo}" alt="logoPinterest">
    <div class="navlist">
      <ul>
        <li id="random-btn">Home</li>
        <li id="latest-btn">Latest</li>
        <li id="popular-btn">Popular</li>
        <svg  id="gift" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-gift"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" /><path d="M12 8l0 13" /><path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" /></svg>
      </ul>
    </div>
    <div class="search">
      <input id="filter-input" type="text" placeholder="Search">
      <button id="search-btn" ><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="3"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg></button>
    </div>

    <div class="icons">
      <img src="/assets/message.svg" alt="">
      <img src="/assets/bell.svg" alt="">
      <img src="/assets/login.svg" alt="">
    </div>

    ` ;

    export default navTemplate;








