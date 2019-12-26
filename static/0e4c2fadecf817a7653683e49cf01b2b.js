!function(){"use strict";function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d=function(e){var t=document.getElementById("player");t.classList.remove("hidden"),document.body.classList.add("hasPlayer"),t.setAttribute("src",e),t.play(),t.onended=function(){return t.classList.add("hidden")}},l=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.gaMeasurementId=e}var e,r,n;return e=t,(r=[{key:"trackPlayEvent",value:function(e,t,r,n){gtag("event","play",{send_to:this.gaMeasurementId,event_category:"listen",event_action:"click",previewSrc:e,songId:t,songTitle:r,resultCurrentRank:n})}}])&&a(e.prototype,r),n&&a(e,n),t}();function u(){var n=document.querySelector(".header__spotify");if(null!=n){var a=new IntersectionObserver(function(e){var t,r;e[0].isIntersecting&&(t=n,(r=document.createElement("iframe")).src=t.dataset.spotifyEmbedUrl,r.width=r.height=300,r.classList.add("header__spotifyEmbed"),r.title="Spotify Embed",r.onload=function(){r.classList.add("header__spotifyEmbed--loaded")},t.appendChild(r),a.disconnect())});a.observe(n)}}var f=window.requestIdleCallback||function(e){return window.setTimeout(e,50)};document.addEventListener("DOMContentLoaded",function(){var i,a,o,t,e,r=window.bootstrap,n=r.gaMeasurementId,s=r.particlesJsConfig,c=new l(n);i=c,document.querySelectorAll(".result__listenButton").forEach(function(o){o.addEventListener("click",function(){d(o.dataset.previewSrc);var e=o.parentNode.parentNode.parentNode,t=e.querySelector(".result__trackTitle"),r=e.querySelector(".result__artistName"),n=e.querySelector(".result__rank"),a="".concat(t.innerText," - ").concat(r.innerText);i.trackPlayEvent(o.dataset.previewSrc,o.dataset.songId,a,n.innerText)})}),a=new Set,o=new Set,t=new IntersectionObserver(function(e){e.forEach(function(t){var r=t.target.dataset.src,n=t.target.dataset.alt;if(t.isIntersecting){if(a.has(r))return;a.add(r),t.target.classList.add("result__artworkPlaceholder--loading"),window.setTimeout(function(){if(a.has(r)){if(o.has(r))return;o.add(r);var e=new Image;e.src=r,e.alt=n,e.classList.add("result__artworkImage","result__artworkImage--fadein"),e.onload=function(){t.target.parentNode.insertBefore(e,t.target),t.target.remove()},e.onerror=function(){t.target.classList.remove("result__artworkPlaceholder--loading")}}},200)}else a.delete(r)})},{rootMargin:"48px"}),document.querySelectorAll(".result__artworkPlaceholder").forEach(function(e){return t.observe(e)}),u(),s&&(e=s,f(function(){return particlesJS.load("particles-js",e)}))})}();