/* empty css                      */import{a as g,i as n,S as p}from"./assets/vendor-D73Uttp0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const y="46848734-31deafc513cc7a3bd94f1beea",h="https://pixabay.com/api/";async function L(e,r=1){try{return(await g.get(h,{params:{key:y,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}catch(a){throw console.error("Error fetching images:",a),a}}function b(e){const r=document.querySelector(".gallery"),a=e.map(s=>`
        <div class="gallery__item">
          <a href="${s.largeImageURL}">
            <img src="${s.webformatURL}" alt="${s.tags}" class="gallery_image"/>
          </a>
          <div class="image-info">
            <p>Likes: ${s.likes}</p>
            <p>Views: ${s.views}</p>
            <p>Comments: ${s.comments}</p>
            <p>Downloads: ${s.downloads}</p>
          </div>
        </div>
      `).join("");r.insertAdjacentHTML("beforeend",a)}function w(){document.querySelector(".gallery").innerHTML=""}function v(){const e=document.querySelector(".loader");e&&e.classList.add("visible")}function d(e){const r=document.querySelector("#load-more");r.style.display=e?"block":"none"}let u="",i=1,f=0;const q=document.querySelector("#search-form"),S=document.querySelector("#load-more");let c;q.addEventListener("submit",async e=>{if(e.preventDefault(),u=e.target.elements.query.value.trim(),!u){n.error({title:"Error",message:"Please enter a search term."});return}i=1,w(),d(!1),await m()});S.addEventListener("click",async()=>{i+=1,await m()});async function m(){v();try{const e=await L(u,i);if(f=e.totalHits,e.hits.length===0){n.info({title:"No Results",message:"No images found."});return}b(e.hits),c?c.refresh():c=new p(".gallery a"),E(),i*15>=f?(d(!1),n.info({message:"We're sorry, but you've reached the end of search results."})):d(!0)}catch{n.error({title:"Error",message:"Failed to load images."})}finally{hideLoader()}}function E(){const e=document.querySelectorAll(".gallery a");if(e.length>0){const{height:r}=e[0].getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
