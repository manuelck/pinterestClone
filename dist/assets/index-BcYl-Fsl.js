(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const v="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='128'%20height='128'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23CB1F27'%20d='M0%20128.002c0%2052.414%2031.518%2097.442%2076.619%20117.239c-.36-8.938-.064-19.668%202.228-29.393c2.461-10.391%2016.47-69.748%2016.47-69.748s-4.089-8.173-4.089-20.252c0-18.969%2010.994-33.136%2024.686-33.136c11.643%200%2017.268%208.745%2017.268%2019.217c0%2011.704-7.465%2029.211-11.304%2045.426c-3.207%2013.578%206.808%2024.653%2020.203%2024.653c24.252%200%2040.586-31.149%2040.586-68.055c0-28.054-18.895-49.052-53.262-49.052c-38.828%200-63.017%2028.956-63.017%2061.3c0%2011.152%203.288%2019.016%208.438%2025.106c2.368%202.797%202.697%203.922%201.84%207.134c-.614%202.355-2.024%208.025-2.608%2010.272c-.852%203.242-3.479%204.401-6.409%203.204c-17.884-7.301-26.213-26.886-26.213-48.902c0-36.361%2030.666-79.961%2091.482-79.961c48.87%200%2081.035%2035.364%2081.035%2073.325c0%2050.213-27.916%2087.726-69.066%2087.726c-13.819%200-26.818-7.47-31.271-15.955c0%200-7.431%2029.492-9.005%2035.187c-2.714%209.869-8.026%2019.733-12.883%2027.421a127.897%20127.897%200%200%200%2036.277%205.249c70.684%200%20127.996-57.309%20127.996-128.005C256.001%2057.309%20198.689%200%20128.005%200C57.314%200%200%2057.309%200%20128.002'/%3e%3c/svg%3e",b=`
    <img class="logo" id="logo" src="${v}" alt="logoPinterest">
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

    `,y=()=>`
    <div class="search-mbl">
        <input id="filter-input" type="text" placeholder="Search">
        <button id="search-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
            </svg>
        </button>
    </div>
    <div id="app">
    
    </div>
    <button id="load-more-btn">Cargar Más...</button>
`,w=()=>`
    <div class="left">      
    <h1>Pinterest</h1>
    <h2>Otro clon más...</h2>
    </div>
        <div class="right">
        <p>By Manuel Corpas Kannen</p>
        <div class="socials">
        <img id="manux" src="/assets/brand-x.svg" alt="">
        <img id="manui" src="/assets/brand-instagram.svg" alt="">
        <img  id="manub" src="/assets//brand-behance.svg" alt="">
        </div>
    </div>
`,i="ppdXkK5D0CVieFWNOY92ozafkw9Agf2sMpVOsXHrc04",r=async(t,e=!1)=>{try{const s=await(await fetch(t)).json();return(e?s.results:s).map(o=>({url:o.urls.regular,name:o.alt_description||"Untitled",unsplashLink:o.links.html}))}catch(n){return console.error("Failed to fetch images:",n),B(),[]}},p=async(t=9)=>r(`https://api.unsplash.com/photos/random?client_id=${i}&count=${t}`),E=async(t=9)=>r(`https://api.unsplash.com/photos?order_by=popular&client_id=${i}&per_page=${t}`),L=async(t=9)=>r(`https://api.unsplash.com/photos?order_by=latest&client_id=${i}&per_page=${t}`),k=async t=>r(`https://api.unsplash.com/search/photos?query=${t}&client_id=${i}&per_page=9`,!0),u=t=>{const e=document.createElement("div");e.classList.add("post");const n=document.createElement("img");n.src=t.url,n.alt=t.name||"Untitled";const s=document.createElement("h1");return s.textContent=t.name||"Untitled",M(e,t.unsplashLink),e.appendChild(n),e.appendChild(s),n.onload=()=>n.classList.add("loaded"),e},c=async t=>{const e=document.getElementById("app"),n=document.getElementById("load-more-btn");e.innerHTML="";const s=await t();s.length===0?I():(n.style.display="block",s.forEach(o=>e.appendChild(u(o)))),s.length===0&&n&&(n.style.display="none")},d=async()=>await c(p),m=async()=>await c(E),g=async()=>await c(L),h=async()=>{const t=document.getElementById("filter-input").value;t&&await c(()=>k(t))},f=async()=>{const t=document.getElementById("app"),e=t.children.length;(await p(Math.floor(e/10)+9)).forEach(s=>t.appendChild(u(s)))},M=(t,e)=>t.addEventListener("click",()=>window.open(e,"_blank")),I=t=>{const e=document.getElementById("app"),n=document.createElement("div");n.classList.add("no-results"),n.innerHTML=`
    <p>No image found. You can try searching by:</p>
    <div class="not-found-btns"> 
    <button id="random-btn">Random</button>
    <button id="popular-btn">Popular</button>
    <button id="latest-btn">Latest</button>
    </div>
  `,e.appendChild(n),e.addEventListener("click",s=>{s.target&&s.target.id==="random-btn"?d():s.target&&s.target.id==="popular-btn"?m():s.target&&s.target.id==="latest-btn"&&g()})},B=()=>setTimeout(()=>location.reload(),3e3);document.addEventListener("DOMContentLoaded",()=>{document.getElementById("load-more-btn").addEventListener("click",f),document.getElementById("search-btn").addEventListener("click",h)});const C=()=>{const t=document.querySelector("#navbar");t&&(t.innerHTML=b)},x=()=>{const t=document.getElementById("footer");t&&(t.innerHTML=w())},_=()=>{const t=document.querySelector(".landing");t&&(t.innerHTML=y())},O=async()=>{try{C(),_(),x(),await d(),P()}catch(t){console.error("An error occurred during initialization:",t)}},P=()=>{const t=document.getElementById("popular-btn"),e=document.getElementById("latest-btn"),n=document.getElementById("random-btn"),s=document.getElementById("search-btn"),o=document.getElementById("load-more-btn");t&&t.addEventListener("click",m),e&&e.addEventListener("click",g),n&&n.addEventListener("click",d),s&&s.addEventListener("click",h),o&&o.addEventListener("click",f)};document.addEventListener("DOMContentLoaded",O);document.addEventListener("DOMContentLoaded",()=>{[{id:"gift",url:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},{id:"manux",url:"https://x.com/manuelck_"},{id:"manui",url:"https://www.instagram.com/manuuelck"},{id:"manub",url:"https://www.behance.net/Manuelcorpas"}].forEach(e=>{const n=document.getElementById(e.id);n&&n.addEventListener("click",()=>{window.open(e.url,"_blank")})})});
