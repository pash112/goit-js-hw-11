import{a as d,S as f,i as n}from"./assets/vendor-BfjKTZs6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="49636434-6242580fc709b024bc2e20b91",y="https://pixabay.com/api/";async function p(s){try{return(await d.get(y,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.error("Error fetching images:",t),t}}const c=document.querySelector(".gallery");let g=new f(".gallery a");function h(s){const t=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:i,comments:l,downloads:u})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img src="${o}" alt="${e}" loading="lazy"/>
        </a>
        <div class="info">
          <p>Likes: ${r}</p>
          <p>Views: ${i}</p>
          <p>Comments: ${l}</p>
          <p>Downloads: ${u}</p>
        </div>
      </li>
    `).join("");c.innerHTML=t,g.refresh()}function L(){c.innerHTML=""}document.querySelector(".loader");function b(){document.querySelector(".loader").classList.add("visible")}function q(){document.querySelector(".loader").classList.remove("visible")}const v=document.querySelector("#search-form");v.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(!t.replace(/\s+/g,"")){n.error({title:"Error",message:"Please enter a valid search query!"});return}L(),b();try{const o=await p(t);!o||!o.hits||o.hits.length===0?n.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!"}):h(o.hits)}catch(o){console.error("Error fetching images:",o),n.error({title:"Error",message:"Failed to fetch images!"})}finally{q()}});
//# sourceMappingURL=index.js.map
