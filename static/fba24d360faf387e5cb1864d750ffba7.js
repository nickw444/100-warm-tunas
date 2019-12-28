'use strict';(function(){function m(a,b,c){for(;a&&a!==b;){if(a.classList.contains(c))return a;a=a.parentNode}}function p(){let a=new Set,b=new Set,c=new IntersectionObserver(d=>{d.forEach(f=>{const g=f.target,h=k.i(g.dataset,"src"),q=k.i(g.dataset,"alt");f.isIntersecting?a.has(h)||(a.add(h),f.target.classList.add("result__artworkPlaceholder--loading"),window.setTimeout(()=>{if(a.has(h)&&!b.has(h)){b.add(h);var l=new Image;l.src=h;l.alt=q;l.classList.add("result__artworkImage","result__artworkImage--fadein");
l.onload=()=>{g.parentNode.insertBefore(l,g);g.remove()};l.onerror=()=>{f.target.classList.remove("result__artworkPlaceholder--loading")}}},200)):a.delete(h)})},{rootMargin:"48px"});document.querySelectorAll(".result__artworkPlaceholder").forEach(d=>c.observe(d))}function r(a){let b=document.createElement("iframe");b.src=k.i(a.dataset,"spotifyEmbedUrl");b.width=b.height="300px";b.classList.add("header__spotifyEmbed");b.title="Spotify Embed";b.onload=()=>{b.classList.add("header__spotifyEmbed--loaded")};
a.appendChild(b)}function t(){let a=document.querySelector(".header__spotify");if(null!=a){var b=new IntersectionObserver(c=>{c[0].isIntersecting&&(r(a),b.disconnect())});b.observe(a)}}function u(a){v(()=>window.particlesJS.load("particles-js",a))}class w{constructor(a){this.o=a}da(a,b,c,d){gtag("event","play",{ha:this.o,fa:"listen",ea:"click",G:a,I:b,ia:c,ga:d})}}class k{static i(a,b){return e.g(a[b])}static Z(a){return a(e.g(window.bootstrap))}}class e{static g(a){if(null==a)throw Error("expected value");
return a}}class x{constructor(a,b,c){this.K=a;this.b=b;this.$=c;this.j=0;this.c=void 0;this.b.l(0,()=>this.T());this.b.l(2,()=>this.W());this.b.l(1,()=>this.U());this.b.l(3,()=>this.D(e.g(this.c),!0));this.b.l(4,()=>this.V());this.b.l(5,d=>{this.b.ba(d)});this.$.S((d,f)=>this.D(d,f))}D(a,b){if(this.c&&this.c.C(a))switch(this.j){case 2:return this.resume(a);case 1:return b&&this.pause(a);default:return}this.play(a)}play(a){if(!this.c||!this.c.C(a)){this.j=1;null!=this.c&&this.c.J();this.c=a;a.play();
var {w:b,G:c,v:d,Y:f,I:g,title:h}=a.O();this.b.ca(c);this.b.H(0);this.b.play();this.b.aa({w:b,title:h,v:d});this.b.show();this.K.da(c,g,`${h} - ${d}`,f)}}pause(a){this.j=2;this.b.pause();a.pause()}resume(a){this.j=1;this.b.play();a.resume()}T(){null!=this.c&&(this.j=0,this.c.J(),this.b.P(),this.c=void 0)}U(){null!=this.c&&(this.j=2,this.c.pause())}W(){null!=this.c&&(this.j=1,this.c.resume())}V(){this.b.H(this.b.N())}}class y{constructor(a){this.a=a;this.f=void 0;this.A={};this.h=e.g(a.querySelector("audio"));
this.m=e.g(this.a.querySelector(".player__artworkPlayButton span"));this.X=e.g(this.a.querySelector(".player__progressIndicator"));this.h.onended=()=>this.s(0);this.h.onpause=()=>this.s(1);this.h.onplay=()=>this.s(2);this.h.ontimeupdate=()=>this.s(4);e.g(this.a.querySelector(".player__artworkPlayButton")).addEventListener("click",()=>this.s(3));let b=e.g(this.a.querySelector(".player__progress"));b.addEventListener("click",c=>{let {left:d,width:f}=b.getBoundingClientRect();c=Math.max(Math.min((c.clientX-
d)/f,1),0);let g=this.A[5];g&&g(c)})}s(a){(a=this.A[a])&&a()}ca(a){this.h.setAttribute("src",a)}aa({w:a,title:b,v:c}){this.f||(this.f=document.createElement("img"),this.f.className="player__artworkImage",e.g(this.a.querySelector(".player__artwork")).appendChild(this.f));a?this.f.src=a:(this.f.remove(),this.f=void 0);e.g(this.a.querySelector(".player__title")).innerText=b;e.g(this.a.querySelector(".player__artist")).innerText=c}pause(){this.m.className="icon-play2";this.h.pause()}play(){this.m.className=
"icon-pause";this.h.play()}show(){this.a.classList.remove("player--hidden");document.body.classList.add("hasPlayer")}P(){this.a.classList.add("player--hidden");document.body.classList.remove("hasPlayer")}l(a,b){this.A[a]=b}N(){return this.h.currentTime/this.h.duration}ba(a){this.h.currentTime=a*this.h.duration}H(a){this.X.style.left=`calc((${a} * -6px) + ${100*a}%)`}}class z{constructor(a){this.a=a;this.m=this.a.querySelector(".result__artworkPlayButton span");this.f=e.g(this.a.querySelector(".result__artwork"))}C(a){return this.a===
a.a}O(){return{Y:this.a.querySelector(".result__rank").innerText,w:this.M(),I:k.i(this.a.dataset,"songId"),G:k.i(this.a.dataset,"previewSrc"),v:this.a.querySelector(".result__artistName").innerText,title:this.a.querySelector(".result__trackTitle").innerText}}M(){let a=this.a.querySelector(".result__artworkImage"),b=this.a.querySelector(".result__artworkPlaceholder");return null!=a?a.src:b?k.i(b.dataset,"src"):void 0}play(){this.f.classList.add("result__artwork--prePlay");window.setTimeout(()=>{this.f.classList.add("result__artwork--playing");
this.u("icon-pause")},300)}pause(){this.f.classList.add("result__artwork--paused");this.u("icon-play2")}resume(){this.f.classList.remove("result__artwork--paused");this.u("icon-pause")}J(){this.f.classList.add("result__artwork--fadeout");this.u("icon-play2");window.setTimeout(()=>{window.requestAnimationFrame(()=>{this.f.classList.remove("result__artwork--prePlay","result__artwork--playing");window.requestAnimationFrame(()=>{this.f.classList.remove("result__artwork--fadeout")})})},350)}u(a){this.m&&
(this.m.className=a)}}class A{constructor(a){this.a=a;this.a.addEventListener("click",b=>this.R(b))}R(a){let b=m(a.target,this.a,"result__artworkPlayButton");a=m(a.target,this.a,"result__listenButton");if(a=b||a){var c=e.g(m(a,this.a,"result"));c=new z(c);this.F&&this.F(c,a===b)}}S(a){this.F=a}}class n{constructor({o:a,B:b}){this.B=b;this.o=a}static L(a){return new n({B:k.i(a,"particlesJsConfig"),o:k.i(a,"gaMeasurementId")})}}let v=window.requestIdleCallback||(a=>window.setTimeout(a,50));document.addEventListener("DOMContentLoaded",
function(){let {o:a,B:b}=k.Z(n.L);{var c=new w(a);let d=new A(e.g(document.querySelector(".countdown ul"))),f=new y(e.g(document.querySelector(".player")));new x(c,f,d)}p();t();b&&u(b)})})();
