import{a as v,S as $,i as a}from"./assets/vendor-CvjrmXAb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();const S="53361153-f145cef477c4ac6c9fc0f0a0c",R="https://pixabay.com/api/";async function m(r,t){const e={key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:40};return(await v.get(R,{params:e})).data}const p=document.querySelector(".gallery"),h=document.querySelector(".loader"),y=document.querySelector(".load-more");let g=new $(".gallery a",{captionsData:"alt",captionDelay:250});function q(){p.innerHTML=""}function M(r){const t=r.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${e.likes}</p>
          <p><b>Views:</b> ${e.views}</p>
          <p><b>Comments:</b> ${e.comments}</p>
          <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
      </li>
    `).join("");p.innerHTML=t,g.refresh()}function P(r){const t=r.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${e.likes}</p>
          <p><b>Views:</b> ${e.views}</p>
          <p><b>Comments:</b> ${e.comments}</p>
          <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
      </li>
    `).join("");p.insertAdjacentHTML("beforeend",t),g.refresh()}function b(){h.classList.remove("hidden")}function u(){h.classList.add("hidden")}function L(){y.classList.remove("hidden")}function c(){y.classList.add("hidden")}const E=document.querySelector(".form"),H=document.querySelector(".load-more");u();c();let i="",n=1;const w=40;let f=0;E.addEventListener("submit",O);H.addEventListener("click",T);async function O(r){if(r.preventDefault(),i=r.currentTarget.elements.query.value.trim(),n=1,!i){a.error({message:"Please enter a search term",position:"topRight"});return}q(),c(),b();try{const t=await m(i,n);if(f=t.totalHits,t.hits.length===0){a.warning({message:"Sorry, no images found",position:"topRight"});return}M(t.hits),n*w<f&&L()}catch{a.error({message:"Something went wrong. Try again later.",position:"topRight"})}finally{u()}}async function T(){n+=1,c(),b();try{const r=await m(i,n);P(r.hits);const t=document.querySelector(".gallery li");if(t){const e=t.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}n*w>=f?(c(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):L()}catch{a.error({message:"Error loading more images",position:"topRight"})}finally{u()}}
//# sourceMappingURL=index.js.map
