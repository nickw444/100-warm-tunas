'use strict';function F(l){var e=0;return function(){return e<l.length?{done:!1,value:l[e++]}:{done:!0}}}function K(l){var e="undefined"!=typeof Symbol&&Symbol.iterator&&l[Symbol.iterator];return e?e.call(l):{next:F(l)}}var L="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,R="function"==typeof Object.defineProperties?Object.defineProperty:function(l,e,n){l!=Array.prototype&&l!=Object.prototype&&(l[e]=n.value)};
function S(l,e){if(e){var n=L;l=l.split(".");for(var r=0;r<l.length-1;r++){var x=l[r];x in n||(n[x]={});n=n[x]}l=l[l.length-1];r=n[l];e=e(r);e!=r&&null!=e&&R(n,l,{configurable:!0,writable:!0,value:e})}}
S("Promise",function(l){function e(d){this.N=0;this.ja=void 0;this.w=[];var f=this.aa();try{d(f.resolve,f.reject)}catch(h){f.reject(h)}}function n(){this.o=null}function r(d){return d instanceof e?d:new e(function(f){f(d)})}if(l)return l;n.prototype.na=function(d){if(null==this.o){this.o=[];var f=this;this.oa(function(){f.Ma()})}this.o.push(d)};var x=L.setTimeout;n.prototype.oa=function(d){x(d,0)};n.prototype.Ma=function(){for(;this.o&&this.o.length;){var d=this.o;this.o=[];for(var f=0;f<d.length;++f){var h=
d[f];d[f]=null;try{h()}catch(p){this.Ka(p)}}}this.o=null};n.prototype.Ka=function(d){this.oa(function(){throw d;})};e.prototype.aa=function(){function d(p){return function(t){h||(h=!0,p.call(f,t))}}var f=this,h=!1;return{resolve:d(this.tb),reject:d(this.ha)}};e.prototype.tb=function(d){if(d===this)this.ha(new TypeError("A Promise cannot resolve to itself"));else if(d instanceof e)this.Bb(d);else{a:switch(typeof d){case "object":var f=null!=d;break a;case "function":f=!0;break a;default:f=!1}f?this.sb(d):
this.ta(d)}};e.prototype.sb=function(d){var f=void 0;try{f=d.then}catch(h){this.ha(h);return}"function"==typeof f?this.Cb(f,d):this.ta(d)};e.prototype.ha=function(d){this.Fa(2,d)};e.prototype.ta=function(d){this.Fa(1,d)};e.prototype.Fa=function(d,f){if(0!=this.N)throw Error("Cannot settle("+d+", "+f+"): Promise already settled in state"+this.N);this.N=d;this.ja=f;this.Na()};e.prototype.Na=function(){if(null!=this.w){for(var d=0;d<this.w.length;++d)z.na(this.w[d]);this.w=null}};var z=new n;e.prototype.Bb=
function(d){var f=this.aa();d.P(f.resolve,f.reject)};e.prototype.Cb=function(d,f){var h=this.aa();try{d.call(f,h.resolve,h.reject)}catch(p){h.reject(p)}};e.prototype.then=function(d,f){function h(v,y){return"function"==typeof v?function(D){try{p(v(D))}catch(E){t(E)}}:y}var p,t,A=new e(function(v,y){p=v;t=y});this.P(h(d,p),h(f,t));return A};e.prototype.catch=function(d){return this.then(void 0,d)};e.prototype.P=function(d,f){function h(){switch(p.N){case 1:d(p.ja);break;case 2:f(p.ja);break;default:throw Error("Unexpected state: "+
p.N);}}var p=this;null==this.w?z.na(h):this.w.push(h)};e.resolve=r;e.reject=function(d){return new e(function(f,h){h(d)})};e.race=function(d){return new e(function(f,h){for(var p=K(d),t=p.next();!t.done;t=p.next())r(t.value).P(f,h)})};e.all=function(d){var f=K(d),h=f.next();return h.done?r([]):new e(function(p,t){function A(D){return function(E){v[D]=E;y--;0==y&&p(v)}}var v=[],y=0;do v.push(void 0),y++,r(h.value).P(A(v.length-1),t),h=f.next();while(!h.done)})};return e});
function T(l){function e(r){return l.next(r)}function n(r){return l.throw(r)}return new Promise(function(r,x){function z(d){d.done?r(d.value):Promise.resolve(d.value).then(e,n).then(z,x)}z(l.next())})}
(function(){function l(a){return{position:a.position,R:a.is_mega,L:a.song_id,M:a.song_title,B:a.artist_name,J:a.preview_url,H:a.num_votes,Ja:a.artwork_filename,backgroundColor:a.background_color}}function e(a){return new Promise(b=>{window.setTimeout(()=>b(),a)})}function n(a){let b=document.createElement("div");b.innerHTML=a;return b.firstChild}function r(a,b,c,g,m){return T(function*(){try{var q=yield a.Pa()}catch(U){window.Sentry.captureException(U);return}let w=M.m(),B=N.m();q=O.m(q,m);let H=
k.b(c.parentNode);H.insertBefore(w.a,c);H.insertBefore(B.a,c);H.insertBefore(q.a,c);(new V(q,w,B,g,a,b)).$()}())}function x(){z();let a=k.b(document.querySelector(".header")),b=new W(a);b.h(1,()=>{document.body.classList.add("noscroll");b.Ha(!0)});b.h(2,()=>{document.body.classList.remove("noscroll");b.Ha(!1)})}function z(){let a;window.addEventListener("resize",()=>{document.body.classList.add("resizing");window.clearTimeout(a);a=window.setTimeout(()=>document.body.classList.remove("resizing"),200)})}
function d(){let a=document.querySelector(".hero__viewCountdownCta"),b=document.querySelector(".countdown");a&&b&&a.addEventListener("click",()=>{X({top:b.offsetTop-32,behavior:"smooth"})})}function f(){"Australia/Sydney"!==Intl.DateTimeFormat().resolvedOptions().timeZone&&document.querySelectorAll(".localTime").forEach(a=>{let b=parseInt(u.s(a.dataset,"ts"),10);a.innerText=`(${(new Date(1E3*b)).toLocaleString(void 0,{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"short"})} in your time zone)`})}
function h(a){return 0<a.touches.length?a.touches[0]:void 0}function p(a,b){let c=new Y(k.b(document.querySelector(".player")));new Z(a,c,b)}function t(a,b){a=k.b(A(a,b,"result"));return new I(a)}function A(a,b,c){for(;a&&a!==b;){if(a.classList.contains(c))return a;a=a.parentNode}}function v(a){a=new aa(a);let b=new ba(a);return{ia:a,l:b}}function y(){let a=document.querySelector(".header__spotify");if(null!=a){var b=new IntersectionObserver(c=>{c[0].isIntersecting&&(G(()=>D(a)),b.disconnect())});
b.observe(a)}}function D(a){let b=document.createElement("iframe");b.src=u.s(a.dataset,"spotifyEmbedUrl");b.width=b.height="300px";b.classList.add("header__spotifyEmbed");b.title="Spotify Embed";b.onload=()=>{b.classList.add("header__spotifyEmbed--loaded")};a.appendChild(b)}class E{constructor(a){this.F=a}Gb(a,b,c,g){gtag("event","play",{send_to:this.F,event_category:"listen",event_action:"click",previewSrc:a,songId:b,songTitle:c,resultCurrentRank:g})}Eb(){gtag("event","controls_button_visible",
{event_category:"controls"})}Fb(){gtag("event","controls_open",{event_category:"controls"})}Ia(a){gtag("event","controls_changed",{event_category:"controls",event_label:a.join(", ")})}}class u{static s(a,b){return k.b(a[b])}static mb(a){return a.resultsUrlSlug}static rb(a){return a(k.b(window.bootstrap))}static lb(a){return a.enableExcludePlacedControl}static qb(a){return u.lb(a)||!1}}class k{static b(a){if(null==a)throw Error("expected value");return a}}let G=window.requestIdleCallback||(a=>window.setTimeout(a,
50));class V{constructor(a,b,c,g,m,q){this.qa=a;this.pa=b;this.$a=c;this.l=g;this.vb=m;this.v=q;this.wa=!1;a.h(1,w=>this.jb(w));b.h(1,()=>this.Da(!this.qa.Ya()));c.h(1,()=>this.Da(!1))}$(){this.l.kb(a=>{this.pa.Db(a);a&&!this.wa&&(this.v.Eb(),this.wa=!0)})}jb(a){const b=this;return T(function*(){if(0===a.length)G(()=>b.v.Ia([])),b.l.K([]),b.l.Ea("No media types selected. Please select at least one media type."),b.ea=void 0;else{b.l.V(!0);b.l.K([]);var c=b.ea=e(500).then(()=>{if(c!==b.ea)throw new J;
}).then(()=>{G(()=>b.v.Ia([...a].sort()));return b.vb.Ra(a)}).then(g=>{if(c!==b.ea)throw new J;b.l.V(!1);b.l.K(g.ub.map(m=>({R:m.R,backgroundColor:m.backgroundColor,J:m.J,L:m.L,position:m.position,M:m.M,B:m.B,H:m.H,Ib:Math.floor(m.H/g.bb*100),ma:"/static/artwork/2021/"+m.Ja})))}).catch(g=>{if(!(g instanceof J))throw b.l.Ea("An error occurred whilst fetching data. Please try again."),g;})}}())}Da(a){a&&this.v.Fb();this.$a.toggle(a);this.qa.toggle(a);this.pa.toggle(a)}}class J extends Error{}class C{constructor(a){this.a=
a;this.sa={}}i(a,...b){(a=this.sa[a])&&a(...b)}h(a,b){this.sa[a]=b}}class O extends C{constructor(a){super(a);this.za=k.b(a.querySelector(".controls__form--mediaTypes"));this.za.addEventListener("change",()=>this.i(1,this.Sa()))}static m(a,b){a=n(`<div class="controls controls--hidden">
  <div class="container container--narrow">
    <h3>Included Media Types</h3>
    <p>Fine-tune the prediction by selecting the specific media types to be counted.</p>
    <form class="controls__form controls__form--mediaTypes">
      ${b?'<div><label><input value="exclude_placed" type="checkbox" checked autocomplete="off"> Eliminate songs that have placed in the Hottest 200-101</label></div>':""}
      <div><label><input value="instagram_post" type="checkbox" checked autocomplete="off"> Instagram Posts <span class="controls__formMeta">(${a.Wa} entries)</span></label>
      </div>
      <div><label><input value="instagram_direct_message" type="checkbox" checked autocomplete="off"> Instagram DMs <span class="controls__formMeta">(${a.Va} entries)</span></label>
      </div>
      <div><label><input value="instagram_story" type="checkbox" checked autocomplete="off"> Instagram Stories <span
          class="controls__formMeta">(${a.Xa} entries)</span></label></div>
      <div><label><input value="twitter_post" type="checkbox" checked autocomplete="off"> Twitter Posts <span class="controls__formMeta">(${a.Hb}  entries)</span></label>
      </div>
      <div><label><input value="reddit_comment" type="checkbox" checked autocomplete="off"> Reddit Comments <span class="controls__formMeta">(${a.pb}  entries)</span></label>
      </div>
    </form>
  </div>
</div>
`);return new O(a)}toggle(a){a?this.a.classList.remove("controls--hidden"):this.a.classList.add("controls--hidden")}Ya(){return!this.a.classList.contains("controls--hidden")}Sa(){let a=[];this.za.querySelectorAll('input[type="checkbox"]').forEach(b=>{b.checked&&a.push(b.value)});return a}}class M extends C{constructor(a){super(a);a.addEventListener("click",()=>this.i(1))}static m(){let a=n('<div class="controls__buttonContainer controls__buttonContainer--hidden">\n  <button class="controls__button">\n    <span class="controls__icon icon-equalizer"></span>\n    <span class="controls__icon controls__icon--hidden icon-close"></span>\n  </button>\n</div>');
return new M(a)}Db(a){a?this.a.classList.remove("controls__buttonContainer--hidden"):this.a.classList.add("controls__buttonContainer--hidden")}toggle(a){let b=k.b(this.a.querySelector(".controls__icon.icon-equalizer")),c=k.b(this.a.querySelector(".controls__icon.icon-close"));a?(b.classList.add("controls__icon--hidden"),c.classList.remove("controls__icon--hidden")):(b.classList.remove("controls__icon--hidden"),c.classList.add("controls__icon--hidden"))}}class N extends C{constructor(a){super(a);a.addEventListener("click",
()=>this.i(1))}static m(){let a=n('<div class="controls__mask controls__mask--hidden"></div>');return new N(a)}toggle(a){a?(this.a.classList.remove("controls__mask--hidden"),document.body.classList.add("noscroll")):(this.a.classList.add("controls__mask--hidden"),document.body.classList.remove("noscroll"))}}class W extends C{constructor(a){super(a);this.ab=k.b(this.a.querySelector(".header__navList"));this.ya=k.b(this.a.querySelector(".header__navListMask"));a=k.b(this.a.querySelector(".header__hamburgerButton"));
let b=k.b(this.a.querySelector(".header__navListClose"));a.addEventListener("click",()=>this.i(1));[this.ya,b].forEach(c=>c.addEventListener("click",()=>this.i(2)))}Ha(a){this.toggle(this.ab,a,"header__navList--visible");this.toggle(this.ya,a,"header__navListMask--visible")}toggle(a,b,c){b?a.classList.add(c):a.classList.remove(c)}}let ca=a=>{function b(){window.requestAnimationFrame(()=>{const q=Math.max(Math.min((Date.now()-m)/300,1),0);window.scrollTo(window.scrollX,c+(.5>q?2*q*q:-1+(4-2*q)*q)*
g);1>q&&b()})}({top:a}=a);let c=window.scrollY;const g=a-c,m=Date.now();b()},X="scrollBehavior"in document.documentElement.style?window.scrollTo:ca;console.log();class P{constructor(a){var {F:b,A:c,ba:g}=a;this.F=b;this.A=c;this.ba=g}static D(a){return new P({F:u.s(a,"gaMeasurementId"),A:u.mb(a),ba:u.qb(a)})}}class Z{constructor(a,b,c){this.v=a;this.c=b;this.ia=c;this.u=1;this.f=void 0;this.c.h(1,()=>this.gb());this.c.h(3,()=>this.ib());this.c.h(2,()=>this.hb());this.c.h(4,()=>this.va(k.b(this.f),
!0));this.c.h(6,g=>this.c.ka(g));this.c.h(5,g=>this.c.yb(g));this.ia.h(1,this.va.bind(this))}va(a,b){if(this.f&&this.f.ra(a))switch(this.u){case 3:return this.resume();case 2:return b&&this.pause();default:return}this.play(a)}play(a){if(!this.f||!this.f.ra(a)){this.u=2;null!=this.f&&this.f.Ga();this.f=a;a.play();var {Z:b,nb:c,Y:g,ob:m,L:q,title:w}=a.Ta();this.c.zb(c);this.c.ka(0);this.c.play();this.c.xb({Z:b,title:w,Y:g});this.c.show();this.v.Gb(c,q,`${w} - ${g}`,m)}}pause(){this.u=3;this.c.pause()}resume(){this.u=
2;this.c.play()}gb(){null!=this.f&&(this.u=1,this.f.Ga(),this.c.Ua(),this.f=void 0)}hb(){null!=this.f&&(this.u=3,this.f.pause())}ib(){null!=this.f&&(this.u=2,this.f.resume())}}class Y extends C{constructor(a){super(a);this.g=void 0;this.G=!1;this.j=k.b(a.querySelector("audio"));this.C=k.b(this.a.querySelector(".player__artworkPlayButton span"));this.ga=k.b(this.a.querySelector(".player__progressIndicator"));this.j.onended=()=>this.i(1);this.j.onpause=()=>this.i(2);this.j.onplay=()=>this.i(3);this.j.ontimeupdate=
()=>!this.G&&this.i(6,this.j.currentTime/this.j.duration);k.b(this.a.querySelector(".player__artworkPlayButton")).addEventListener("click",()=>this.i(4));this.fa=k.b(this.a.querySelector(".player__progress"));this.fa.addEventListener("mousedown",b=>0===b.button&&this.U(b));this.fa.addEventListener("touchstart",b=>this.U(h(b)),{passive:!0});this.ga.addEventListener("mousedown",b=>0===b.button&&this.U(b));this.ga.addEventListener("touchstart",b=>this.U(h(b)),{passive:!0});window.addEventListener("mousemove",
b=>this.Ba(b));window.addEventListener("touchmove",b=>this.Ba(h(b)),{passive:!0});window.addEventListener("mouseup",b=>this.Ca(b));window.addEventListener("touchend",b=>this.Ca(h(b)),{passive:!0})}U(a){document.body.classList.add("dragging");this.G=!0;this.S=this.ca(k.b(a))}Ba(a){this.G&&(this.S=this.ca(k.b(a)),this.ka(this.S))}Ca(a){this.G&&(document.body.classList.remove("dragging"),this.G=!1,a=null!=a?this.ca(a):this.S,this.S=void 0,this.i(5,k.b(a)))}zb(a){this.j.setAttribute("src",a)}xb(a){var {Z:b,
title:c,Y:g}=a;this.g||(this.g=document.createElement("img"),this.g.className="player__artworkImage",k.b(this.a.querySelector(".player__artwork")).appendChild(this.g));b?this.g.src=b:(this.g.remove(),this.g=void 0);k.b(this.a.querySelector(".player__title")).innerText=c;k.b(this.a.querySelector(".player__artist")).innerText=g}pause(){this.C.className="icon-play2";this.j.pause()}play(){this.C.className="icon-pause";this.j.play()}show(){this.a.classList.remove("player--hidden");document.body.classList.add("hasPlayer")}Ua(){this.a.classList.add("player--hidden");
document.body.classList.remove("hasPlayer")}yb(a){this.j.currentTime=a*this.j.duration}ka(a){this.ga.style.transform=`translateX(calc(${-12+-12*a}px + ${100*a}%)`}ca(a){let {left:b,width:c}=this.fa.getBoundingClientRect();return Math.max(Math.min((a.clientX-(b+6))/(c-12),1),0)}}class ba{constructor(a){this.view=a;this.I=new Map;this.da=new Set;a.h(2,this.eb.bind(this))}V(a){this.view.ua().V(a)}Ea(a){this.view.ua().Ab(a)}K(a){this.view.K(a);this.I.clear();this.da.clear()}kb(a){this.view.La();this.view.h(3,
a)}eb(a,b,c,g,m){b?this.I.has(c)||(a.wb(),b=window.setTimeout(()=>{this.da.has(c)||(this.da.add(c),a.Za(c,g),m())},200),this.I.set(c,b)):(window.clearInterval(this.I.get(c)),this.I.delete(c))}}class I{constructor(a){this.a=a;this.C=this.a.querySelector(".result__artworkPlayButton span");this.g=k.b(this.a.querySelector(".result__artwork"))}static m(a){a=n(`<li class="result${a.R?" result--mega":""}"
      style="${a.R?`background: #${a.backgroundColor} radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)`:""}"
      data-preview-src="${a.J}"
      data-song-id="${a.L}"
      >
        <div class="container container--narrow">
          <div class="result__content">
            <div class="result__rankContainer">
              <div class="result__rank">${a.position}</div>
            </div>
            <div class="result__details">
              <div class="result__trackTitle">${a.M}</div>
              <div class="result__artistName">${a.B}</div>
              <div class="result__voteDetails">${a.H}
                votes (${a.Ib}%)
                ${a.J?'\n                    &nbsp;&nbsp;|&nbsp;&nbsp;\n                    <button class="result__listenButton">\n                      <span class="icon-play2"></span>&nbsp;Listen\n                    </button>\n                ':""}
              </div>
            </div>
            <div class="result__artwork">
                ${a.ma?`
                <div class="result__artworkSpinner">
                    <div class="result__artworkPlaceholder"
                         data-alt="Cover artwork for ${a.M} - ${a.B}"
                         data-src="${a.ma}"></div>
                  </div>
                  ${a.J?`
                  <button class="result__artworkPlayButton"
                            aria-label="Play ${a.M} by ${a.B}">
                      <span class="icon-play2"></span>
                    </button>
                  `:""}
                `:""}
            </div>
          </div>
        </div>
      </li>
`);return new I(a)}ra(a){return this.a===a.a}Ta(){return{ob:this.a.querySelector(".result__rank").textContent,Z:this.Oa(),L:u.s(this.a.dataset,"songId"),nb:u.s(this.a.dataset,"previewSrc"),Y:this.a.querySelector(".result__artistName").textContent,title:this.a.querySelector(".result__trackTitle").textContent}}Oa(){let a=this.a.querySelector(".result__artworkImage"),b=this.a.querySelector(".result__artworkPlaceholder");return null!=a?a.src:b?u.s(b.dataset,"src"):void 0}play(){this.g.classList.add("result__artwork--prePlay");
this.W("icon-pause");window.setTimeout(()=>{this.g.classList.add("result__artwork--playing")},300)}pause(){this.g.classList.add("result__artwork--paused");this.W("icon-play2")}resume(){this.g.classList.remove("result__artwork--paused");this.W("icon-pause")}Ga(){this.g.classList.add("result__artwork--fadeout");this.W("icon-play2");window.setTimeout(()=>{window.requestAnimationFrame(()=>{this.g.classList.remove("result__artwork--prePlay","result__artwork--playing");window.requestAnimationFrame(()=>
{this.g.classList.remove("result__artwork--fadeout")})})},350)}wb(){k.b(this.a.querySelector(".result__artworkPlaceholder")).classList.add("result__artworkPlaceholder--loading")}Za(a,b){let c=k.b(this.a.querySelector(".result__artworkPlaceholder")),g=new Image;g.src=a;g.alt=b;g.classList.add("result__artworkImage","result__artworkImage--fadein");g.onload=()=>{c.parentNode.insertBefore(g,c);c.remove()};g.onerror=()=>{c.classList.remove("result__artworkPlaceholder--loading")}}W(a){this.C&&(this.C.className=
a)}}class Q{constructor(a){this.a=a}static m(){let a=document.createElement("div");a.className="countdown__statusIndicator countdown__statusIndicator--hidden";return new Q(a)}V(a){a?(this.X(!0),this.a.innerHTML='<div class="countdown__statusIcon"><span class="icon-spinner"></span></div>'):this.X(!1)}Ab(a){if(a){this.X(!0);var b=document.createElement("div");b.className="countdown__statusMessage";b.innerText=a;this.a.innerHTML="";this.a.appendChild(b)}else this.X(!1)}X(a){a?this.a.classList.remove("countdown__statusIndicator--hidden"):
this.a.classList.add("countdown__statusIndicator--hidden")}}class aa extends C{constructor(a){super(a);this.T=k.b(this.a.querySelector(".countdown__list"))}$(){this.a.addEventListener("click",a=>this.fb(a));this.Aa()}ua(){this.la||(this.la=Q.m(),this.a.insertBefore(this.la.a,this.T));return this.la}K(a){this.T.innerHTML="";for(let b of a)a=I.m(b),this.T.appendChild(a.a);this.Aa()}La(){(new IntersectionObserver(a=>{a.length&&this.i(3,a[0].isIntersecting)},{rootMargin:"-96px 0px"})).observe(this.T)}fb(a){let b=
A(a.target,this.a,"result__artworkPlayButton");a=A(a.target,this.a,"result__listenButton");if(a=b||a){let c=t(a,this.a);this.i(1,c,a===b)}}Aa(){let a=this.Qa();this.a.querySelectorAll(".result__artworkPlaceholder").forEach(b=>a.observe(b))}Qa(){return this.O?this.O:this.O=new IntersectionObserver(a=>this.cb(k.b(this.O),a))}cb(a,b){b.forEach(c=>{let g=c.target,m=t(g,this.a),q=u.s(g.dataset,"src"),w=u.s(g.dataset,"alt");this.i(2,m,c.isIntersecting,q,w,()=>a.unobserve(g))})}}class da extends Error{}
class ea{get(a){return T(function*(){let b=yield fetch(a);if(200>b.status||300<=b.status)throw new da("Error: "+b.statusText);return yield b.json()}())}}let fa={D(a){return{bb:a.num_entries,H:a.num_votes,Kb:a.numPreviousYearVotes,Jb:a.last_processed_ts,ub:a.results_0_100.map(l)}}},ha={D(a){return{Wa:a.instagram_post,Va:a.instagram_direct_message,Xa:a.instagram_story,Hb:a.twitter_post,pb:a.reddit_comment}}};class ia{constructor(a,b){this.xa=a;this.A=b}Ra(a){const b=this;return T(function*(){var c=
[...a].sort();c=yield b.xa.get(`/static/results/${b.A}/`+c.join("+")+".json");return fa.D(c)}())}Pa(){const a=this;return T(function*(){let b=yield a.xa.get(`/static/results/${a.A}/entryCountsBySource.json`);return ha.D(b)}())}}document.addEventListener("DOMContentLoaded",function(){let {F:a,A:b,ba:c}=u.rb(P.D),g=new E(a),m=document.querySelector(".countdown");if(m){let {ia:q,l:w}=v(m);p(g,q);q.$();G(()=>{if(b){var B=new ea;B=new ia(B,b);r(B,g,m,w,c)}})}y();x();d();f()})})();
//# sourceMappingURL=75a722b6.js.map
