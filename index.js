import{a as v,S as $,i as a}from"./assets/vendor-CvjrmXAb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();const S="53361153-f145cef477c4ac6c9fc0f0a0c",R="https://pixabay.com/api/";async function m(r,t){const e={key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:40};return(await v.get(R,{params:e})).data}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),y=document.querySelector(".load-more");let g=new $(".gallery a",{captionsData:"alt",captionDelay:250});function q(){f.innerHTML=""}function M(r){const t=r.map(e=>`
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
    `).join("");f.innerHTML=t,g.refresh()}function P(r){const t=r.map(e=>`
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
    `).join("");f.insertAdjacentHTML("beforeend",t),g.refresh()}function b(){h.classList.remove("hidden")}function d(){h.classList.add("hidden")}function L(){y.classList.remove("hidden")}function p(){y.classList.add("hidden")}const E=document.querySelector(".form"),H=document.querySelector(".load-more");let i="",n=1;const w=40;let u=0;E.addEventListener("submit",O);H.addEventListener("click",T);async function O(r){if(r.preventDefault(),i=r.currentTarget.elements.query.value.trim(),n=1,!i){a.error({message:"Please enter a search term",position:"topRight"});return}q(),p(),b();try{const t=await m(i,n);if(u=t.totalHits,t.hits.length===0){a.warning({message:"Sorry, no images found",position:"topRight"}),d();return}M(t.hits),n*w<u&&L()}catch{a.error({message:"Something went wrong. Try again later.",position:"topRight"})}finally{d()}}async function T(){n+=1,p(),b();try{const r=await m(i,n);P(r.hits);const t=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"}),n*w>=u?(p(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):L()}catch{a.error({message:"Error loading more images",position:"topRight"})}finally{d()}}
//# sourceMappingURL=index.js.map
