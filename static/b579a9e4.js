'use strict';var v="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,Y="function"==typeof Object.defineProperties?Object.defineProperty:function(p,u,l){p!=Array.prototype&&p!=Object.prototype&&(p[u]=l.value)};function aa(p,u){if(u){var l=v;p=p.split(".");for(var q=0;q<p.length-1;q++){var x=p[q];x in l||(l[x]={});l=l[x]}p=p[p.length-1];q=l[p];u=u(q);u!=q&&null!=u&&Y(l,p,{configurable:!0,writable:!0,value:u})}}
function Z(p){function u(q){return p.next(q)}function l(q){return p.throw(q)}return new Promise(function(q,x){function C(G){G.done?q(G.value):Promise.resolve(G.value).then(u,l).then(C,x)}C(p.next())})}aa("Array.prototype.includes",function(p){return p?p:function(u,l){var q=this;q instanceof String&&(q=String(q));var x=q.length;l=l||0;for(0>l&&(l=Math.max(l+x,0));l<x;l++){var C=q[l];if(C===u||Object.is(C,u))return!0}return!1}});
(function(){function p(a){return{position:a.position,O:a.is_mega,J:a.song_id,A:a.song_title,s:a.artist_name,u:a.preview_url,l:a.num_votes,Ka:a.artwork_filename,backgroundColor:a.background_color}}function u(a){return new Promise(b=>{window.setTimeout(()=>b(),a)})}function l(a){let b=document.createElement("div");b.innerHTML=a;return b.firstChild}function q(a,b,c,d,e){return Z(function*(){try{var m=yield a.Oa()}catch(y){if(y instanceof O)return;console.error(y);return}let t=P.v(),D=Q.v();m=R.v(m,e);
let A=f.b(c.parentNode);A.insertBefore(t.a,c);A.insertBefore(D.a,c);A.insertBefore(m.a,c);(new ba(m,t,D,d,a,b)).da()}())}function x(){C();let a=f.b(document.querySelector(".header")),b=new ca(a);b.h(1,()=>{document.body.classList.add("noscroll");b.Ha(!0)});b.h(2,()=>{document.body.classList.remove("noscroll");b.Ha(!1)})}function C(){let a;window.addEventListener("resize",()=>{document.body.classList.add("resizing");window.clearTimeout(a);a=window.setTimeout(()=>document.body.classList.remove("resizing"),
200)})}function G(){let a=document.querySelector(".hero__viewCountdownCta"),b=document.querySelector(".countdown");a&&b&&a.addEventListener("click",()=>{da({top:b.offsetTop-32,behavior:"smooth"})})}function ea(){"Australia/Sydney"!==Intl.DateTimeFormat().resolvedOptions().timeZone&&document.querySelectorAll(".localTime").forEach(a=>{let b=parseInt(w.B(a.dataset,"ts"),10);a.innerText=`(${(new Date(1E3*b)).toLocaleString(void 0,{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"short"})} in your time zone)`})}
function J(a){return 0<a.touches.length?a.touches[0]:void 0}function fa(a,b){let c=new ha(f.b(document.querySelector(".player")));new ia(a,c,b)}function S(a,b){a=f.b(L(a,b,"result"));return new M(a)}function L(a,b,c){for(;a&&a!==b;){if(a.classList.contains(c))return a;a=a.parentNode}}function ja(a){a=new ka(a);let b=new la(a);return{la:a,o:b}}function T(a,b,c,d){return Z(function*(){function e(k){B?H&&(H.style.display=k?"block":"none"):c&&c.S(k)}function m(){let k=document.createElement("div");var g=
document.createElement("p");g.innerHTML=B?"Help us make a more accurate prediction \ud83d\udd25. Submit your votes by uploading them below:":"<strong>Want a sneak peek?</strong> Upload a screenshot of your votes to take a look:";k.appendChild(g);let n=document.createElement("form");n.classList.add("votesUploaderForm");k.appendChild(n);g=document.createElement("label");g.setAttribute("for","fileInput");g.innerHTML='\n    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>\n    <span>Choose a file\u2026</span>\n';
n.appendChild(g);g=document.createElement("input");g.type="file";g.name="upload";g.accept="image/*";g.id="fileInput";n.appendChild(g);g.addEventListener("change",r=>t(r,{Bb:E,zb:z}));g=void 0;B&&(g=document.createElement("div"),g.classList.add("loader"),g.innerHTML='<span class="countdown__statusIcon icon-spinner"></span>',g.style.display="none",k.appendChild(g));let h=document.createElement("div");h.classList.add("votesUploaderFormError");k.appendChild(h);let z=r=>{if(r){const U=document.createElement("p");
U.innerText=r;h.appendChild(U)}else h.innerHTML=""};if(B){let r=document.createElement("p");r.innerHTML='You can also submit your votes by posting a screenshot and tagging it with\n<a target="_blank"\n   class="hero__link"\n   href="https://www.instagram.com/explore/tags/hottest100/">#hottest100</a>\non a public Instagram account, or send as a direct message to\n<a target="_blank" rel="noreferrer nofollow" class="hero__link"\n   href="https://www.instagram.com/100warmtunas/">@100warmtunas</a>\non Instagram.';
k.appendChild(r)}let E=r=>{r?n.classList.add("votesUploaderForm--hidden"):n.classList.remove("votesUploaderForm--hidden")};return{Nb:k,ab:g}}function t(k,g){var {zb:n,Bb:h}=g;return Z(function*(){n(void 0);h(!0);e(!0);var z=f.b(f.b(k.target.files).item(0));let E;try{E=yield d.Ma({file:z})}catch(r){throw h(!1),n("Something went wrong whilst processing your image. Please try again later."),e(!1),r;}z=void 0;try{z=yield D({id:E.id,w:E.w})}catch(r){throw h(!1),n("Something went wrong whilst processing your image. Please try again later."),
e(!1),r;}if(null!=z){switch(z){case "novotes":h(!1);n("We did not detect any valid votes in the image you uploaded. Please ensure you are uploading a screenshot of your vote confirmation from triple j.");break;case "unknown":h(!1),n("Something went wrong whilst processing your image. Please try again later.")}e(!1)}else{try{yield A({id:E.id,w:E.w})}catch(r){throw h(!1),n("Something went wrong whilst processing your image. Please try again later."),e(!1),r;}try{let r=yield d.V();y(r)}catch(r){throw n("Something went wrong whilst processing your image. Please try again later."),
r;}finally{h(!1),e(!1)}}}())}function D(k){var {id:g,w:n}=k;return Z(function*(){let h=void 0;do null!=h&&(yield ma(1E3)),h=yield d.Sa({id:g,w:n});while("COMPLETE"!=h.state);if(null!=h.ta||null!=h.oa)return"unknown";if(!h.xa)return"novotes"}())}function A(k){var {id:g,w:n}=k;return Z(function*(){yield d.pb(new na(void 0,g,n))}())}function y(k){return Z(function*(){let g=k.results.length;a.innerHTML=B?"Thanks for submitting your votes. This helps us build a more accurate prediction \ud83d\udc1f":`<strong>Thanks for submitting your votes</strong>. Here is your sneak peek of the top ${g}:`;
c&&c.I(k.results.sort((h,z)=>z.position-h.position).map(h=>({O:10<g&&10>=h.position,backgroundColor:h.backgroundColor,u:h.u,J:0,position:h.position,A:h.A,s:h.s,l:h.l,Ja:Math.round(h.l/k.P.Y*100),G:h.G})));let n=document.createElement("p");n.innerText=`Data was last processed at ${(new Date(1E3*k.P.Ya)).toLocaleString(void 0,{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"short"})}. Data is based on ${k.P.l} votes counted across ${k.P.Y} entries.`;b&&b.Ab(n)}())}let B=null==b,H=void 0;try{e(!0);
let k=yield d.V();y(k)}catch(k){if(k instanceof V){let {Nb:g,ab:n}=m();H=n;a.appendChild(g)}}finally{e(!1)}}())}function ma(a){return new Promise(b=>{setTimeout(()=>b(),a)})}function oa(){let a=document.querySelector(".header__spotify");if(null!=a){var b=new IntersectionObserver(c=>{c[0].isIntersecting&&(K(()=>pa(a)),b.disconnect())});b.observe(a)}}function pa(a){let b=document.createElement("iframe");b.src=w.B(a.dataset,"spotifyEmbedUrl");b.width=b.height="300px";b.classList.add("header__spotifyEmbed");
b.title="Spotify Embed";b.onload=()=>{b.classList.add("header__spotifyEmbed--loaded")};a.appendChild(b)}class qa{constructor(a){this.M=a}Lb(a,b,c,d){gtag("event","play",{send_to:this.M,event_category:"listen",event_action:"click",previewSrc:a,songId:b,songTitle:c,resultCurrentRank:d})}Jb(){gtag("event","controls_button_visible",{event_category:"controls"})}Kb(){gtag("event","controls_open",{event_category:"controls"})}Ia(a){gtag("event","controls_changed",{event_category:"controls",
event_label:a.join(", ")})}}class w{static B(a,b){return f.b(a[b])}static ob(a){return a.resultsUrlSlug}static ub(a){return a(f.b(window.bootstrap))}static nb(a){return a.enableExcludePlacedControl}static tb(a){return w.nb(a)||!1}}class f{static b(a){if(null==a)throw Error("expected value");return a}}let K=window.requestIdleCallback||(a=>window.setTimeout(a,50));class I extends Error{}class ra extends I{}class sa extends I{}class V extends I{}class O extends I{}class ta{get(a){const b=this;return Z(function*(){let c=
yield fetch(a,{credentials:"include"});b.wa(c);return yield c.json()}())}ia(a,b){const c=this;return Z(function*(){let d=yield fetch(a,Object.assign({},b,{method:"POST",credentials:"include"}));c.wa(d);return yield d.json()}())}wa(a){switch(a.status){case 403:throw new V("Error: "+a.statusText);case 404:throw new O("Error: "+a.statusText);}if(400<=a.status&&500>a.status)throw new sa("Error: "+a.statusText);if(500<=a.status&&600>a.status)throw new ra("Error: "+a.statusText);if(200>a.status||300<=a.status)throw new I("Error: "+
a.statusText);}}class ba{constructor(a,b,c,d,e,m){this.qa=a;this.pa=b;this.bb=c;this.o=d;this.wb=e;this.F=m;this.ya=!1;a.h(1,t=>this.lb(t));b.h(1,()=>this.Ea(!this.qa.Xa()));c.h(1,()=>this.Ea(!1))}da(){this.o.mb(a=>{this.pa.Ib(a);a&&!this.ya&&(this.F.Jb(),this.ya=!0)})}lb(a){const b=this;return Z(function*(){if(0===a.length)K(()=>b.F.Ia([])),b.o.I([]),b.o.Fa("No media types selected. Please select at least one media type."),b.ha=void 0;else{b.o.S(!0);b.o.I([]);var c=b.ha=u(500).then(()=>{if(c!==b.ha)throw new N;
}).then(()=>{K(()=>b.F.Ia([...a].sort()));return b.wb.V(a)}).then(d=>{if(c!==b.ha)throw new N;b.o.S(!1);b.o.I(d.vb.map(e=>({O:e.O,backgroundColor:e.backgroundColor,u:e.u,J:e.J,position:e.position,A:e.A,s:e.s,l:e.l,Ja:Math.floor(e.l/d.Y*100),G:"/static/artwork/2021/"+e.Ka})))}).catch(d=>{if(!(d instanceof N))throw b.o.Fa("An error occurred whilst fetching data. Please try again."),d;})}}())}Ea(a){a&&this.F.Kb();this.bb.toggle(a);this.qa.toggle(a);this.pa.toggle(a)}}class N extends Error{}class F{constructor(a){this.a=
a;this.sa={}}i(a,...b){(a=this.sa[a])&&a(...b)}h(a,b){this.sa[a]=b}}class R extends F{constructor(a){super(a);this.Aa=f.b(a.querySelector(".controls__form--mediaTypes"));this.Aa.addEventListener("change",()=>this.i(1,this.Qa()))}static v(a,b){a=l(`<div class="controls controls--hidden">
  <div class="container container--narrow">
    <h3>Included Media Types</h3>
    <p>Fine-tune the prediction by selecting the specific media types to be counted.</p>
    <form class="controls__form controls__form--mediaTypes">
      ${b?'<div><label><input value="exclude_placed" type="checkbox" checked autocomplete="off"> Eliminate songs that have placed in the Hottest 200-101</label></div>':""}
      <div><label><input value="instagram_post" type="checkbox" checked autocomplete="off"> Instagram Posts <span class="controls__formMeta">(${a.Va} entries)</span></label>
      </div>
      <div><label><input value="instagram_direct_message" type="checkbox" checked autocomplete="off"> Instagram DMs <span class="controls__formMeta">(${a.Ua} entries)</span></label>
      </div>
      <div><label><input value="instagram_story" type="checkbox" checked autocomplete="off"> Instagram Stories <span
          class="controls__formMeta">(${a.Wa} entries)</span></label></div>
      <div><label><input value="twitter_post" type="checkbox" checked autocomplete="off"> Twitter Posts <span class="controls__formMeta">(${a.Mb}  entries)</span></label>
      </div>
      <div><label><input value="reddit_comment" type="checkbox" checked autocomplete="off"> Reddit Comments <span class="controls__formMeta">(${a.sb}  entries)</span></label>
      </div>
      <div><label><input value="web_upload" type="checkbox" checked autocomplete="off"> Website Uploads <span class="controls__formMeta">(${a.Ob}  entries)</span></label>
      </div>
    </form>
  </div>
</div>
`);return new R(a)}toggle(a){a?this.a.classList.remove("controls--hidden"):this.a.classList.add("controls--hidden")}Xa(){return!this.a.classList.contains("controls--hidden")}Qa(){let a=[];this.Aa.querySelectorAll('input[type="checkbox"]').forEach(b=>{b.checked&&a.push(b.value)});return a}}class P extends F{constructor(a){super(a);a.addEventListener("click",()=>this.i(1))}static v(){let a=l('<div class="controls__buttonContainer controls__buttonContainer--hidden">\n  <button class="controls__button">\n    <span class="controls__icon icon-equalizer"></span>\n    <span class="controls__icon controls__icon--hidden icon-close"></span>\n  </button>\n</div>');
return new P(a)}Ib(a){a?this.a.classList.remove("controls__buttonContainer--hidden"):this.a.classList.add("controls__buttonContainer--hidden")}toggle(a){let b=f.b(this.a.querySelector(".controls__icon.icon-equalizer")),c=f.b(this.a.querySelector(".controls__icon.icon-close"));a?(b.classList.add("controls__icon--hidden"),c.classList.remove("controls__icon--hidden")):(b.classList.remove("controls__icon--hidden"),c.classList.add("controls__icon--hidden"))}}class Q extends F{constructor(a){super(a);a.addEventListener("click",
()=>this.i(1))}static v(){let a=l('<div class="controls__mask controls__mask--hidden"></div>');return new Q(a)}toggle(a){a?(this.a.classList.remove("controls__mask--hidden"),document.body.classList.add("noscroll")):(this.a.classList.add("controls__mask--hidden"),document.body.classList.remove("noscroll"))}}class ca extends F{constructor(a){super(a);this.cb=f.b(this.a.querySelector(".header__navList"));this.za=f.b(this.a.querySelector(".header__navListMask"));a=f.b(this.a.querySelector(".header__hamburgerButton"));
let b=f.b(this.a.querySelector(".header__navListClose"));a.addEventListener("click",()=>this.i(1));[this.za,b].forEach(c=>c.addEventListener("click",()=>this.i(2)))}Ha(a){this.toggle(this.cb,a,"header__navList--visible");this.toggle(this.za,a,"header__navListMask--visible")}toggle(a,b,c){b?a.classList.add(c):a.classList.remove(c)}}let ua=a=>{function b(){window.requestAnimationFrame(()=>{const m=Math.max(Math.min((Date.now()-e)/300,1),0);window.scrollTo(window.scrollX,c+(.5>m?2*m*m:-1+(4-2*m)*m)*
d);1>m&&b()})}({top:a}=a);let c=window.scrollY;const d=a-c,e=Date.now();b()},da="scrollBehavior"in document.documentElement.style?window.scrollTo:ua;console.log();class W{constructor(a){var {M:b,H:c,ea:d}=a;this.M=b;this.H=c;this.ea=d}static j(a){return new W({M:w.B(a,"gaMeasurementId"),H:w.ob(a),ea:w.tb(a)})}}class ia{constructor(a,b,c){this.F=a;this.c=b;this.la=c;this.D=1;this.f=void 0;this.c.h(1,()=>this.ib());this.c.h(3,()=>this.kb());this.c.h(2,()=>this.jb());this.c.h(4,()=>this.va(f.b(this.f),
!0));this.c.h(6,d=>this.c.ma(d));this.c.h(5,d=>this.c.Db(d));this.la.h(1,this.va.bind(this))}va(a,b){if(this.f&&this.f.ra(a))switch(this.D){case 3:return this.resume();case 2:return b&&this.pause();default:return}this.play(a)}play(a){if(!this.f||!this.f.ra(a)){this.D=2;null!=this.f&&this.f.Ga();this.f=a;a.play();var {ca:b,qb:c,ba:d,rb:e,J:m,title:t}=a.Ra();this.c.Eb(c);this.c.ma(0);this.c.play();this.c.Cb({ca:b,title:t,ba:d});this.c.show();this.F.Lb(c,m,`${t} - ${d}`,e)}}pause(){this.D=3;this.c.pause()}resume(){this.D=
2;this.c.play()}ib(){null!=this.f&&(this.D=1,this.f.Ga(),this.c.Ta(),this.f=void 0)}jb(){null!=this.f&&(this.D=3,this.f.pause())}kb(){null!=this.f&&(this.D=2,this.f.resume())}}class ha extends F{constructor(a){super(a);this.g=void 0;this.N=!1;this.m=f.b(a.querySelector("audio"));this.K=f.b(this.a.querySelector(".player__artworkPlayButton span"));this.ka=f.b(this.a.querySelector(".player__progressIndicator"));this.m.onended=()=>this.i(1);this.m.onpause=()=>this.i(2);this.m.onplay=()=>this.i(3);this.m.ontimeupdate=
()=>!this.N&&this.i(6,this.m.currentTime/this.m.duration);f.b(this.a.querySelector(".player__artworkPlayButton")).addEventListener("click",()=>this.i(4));this.ja=f.b(this.a.querySelector(".player__progress"));this.ja.addEventListener("mousedown",b=>0===b.button&&this.Z(b));this.ja.addEventListener("touchstart",b=>this.Z(J(b)),{passive:!0});this.ka.addEventListener("mousedown",b=>0===b.button&&this.Z(b));this.ka.addEventListener("touchstart",b=>this.Z(J(b)),{passive:!0});window.addEventListener("mousemove",
b=>this.Ca(b));window.addEventListener("touchmove",b=>this.Ca(J(b)),{passive:!0});window.addEventListener("mouseup",b=>this.Da(b));window.addEventListener("touchend",b=>this.Da(J(b)),{passive:!0})}Z(a){document.body.classList.add("dragging");this.N=!0;this.W=this.fa(f.b(a))}Ca(a){this.N&&(this.W=this.fa(f.b(a)),this.ma(this.W))}Da(a){this.N&&(document.body.classList.remove("dragging"),this.N=!1,a=null!=a?this.fa(a):this.W,this.W=void 0,this.i(5,f.b(a)))}Eb(a){this.m.setAttribute("src",a)}Cb(a){var {ca:b,
title:c,ba:d}=a;this.g||(this.g=document.createElement("img"),this.g.className="player__artworkImage",f.b(this.a.querySelector(".player__artwork")).appendChild(this.g));b?this.g.src=b:(this.g.remove(),this.g=void 0);f.b(this.a.querySelector(".player__title")).innerText=c;f.b(this.a.querySelector(".player__artist")).innerText=d}pause(){this.K.className="icon-play2";this.m.pause()}play(){this.K.className="icon-pause";this.m.play()}show(){this.a.classList.remove("player--hidden");document.body.classList.add("hasPlayer")}Ta(){this.a.classList.add("player--hidden");
document.body.classList.remove("hasPlayer")}Db(a){this.m.currentTime=a*this.m.duration}ma(a){this.ka.style.transform=`translateX(calc(${-12+-12*a}px + ${100*a}%)`}fa(a){let {left:b,width:c}=this.ja.getBoundingClientRect();return Math.max(Math.min((a.clientX-(b+6))/(c-12),1),0)}}class va{constructor(a,b){this.id=a;this.w=b}static j(a){return{id:a.id,w:a.secret}}}class wa{constructor(a,b,c,d,e){this.id=a;this.state=b;this.ta=c;this.xa=d;this.oa=e}static j(a){return{id:a.id,state:a.state,ta:a.failureReason,
xa:a.hasMatchedVotes,oa:a.accessTokenUuid}}}class xa{constructor(a,b,c,d,e,m,t){this.position=a;this.A=b;this.s=c;this.u=d;this.l=e;this.G=m;this.backgroundColor=t}static j(a){return{position:a.position,A:a.songTitle,s:a.artistName,u:a.previewUrl,l:a.numVotes,G:a.artworkUrl,backgroundColor:a.backgroundColor}}}class ya{constructor(a,b){this.results=a;this.P=b}static j(a){return{results:a.results.map(b=>xa.j(b)),P:{Y:a.meta.numEntries,l:a.meta.numVotes,eb:a.meta.numPreviousYearVotes,Ya:a.meta.lastProcessed}}}}
class na{constructor(a,b,c){this.Za=a;this.Gb=b;this.Hb=c}xb(){return{linkingToken:this.Za,submissionId:this.Gb,submissionSecret:this.Hb}}}class za{constructor(a,b){this.C=a;this.T=b}Ma(a){const b=this;return Z(function*(){var c=new FormData;c.append("file",a.file);c=yield b.C.ia(b.T+"/submission",{body:c,headers:void 0});return va.j(c)}())}Sa(a){const b=this;return Z(function*(){let c=yield b.C.ia(b.T+`/submission/${a.id}`,{body:JSON.stringify({secret:a.w}),headers:{"Content-Type":"application/json"}});
return wa.j(c)}())}V(){const a=this;return Z(function*(){let b=yield a.C.get(a.T+"/results");return ya.j(b)}())}pb(a){const b=this;return Z(function*(){yield b.C.ia(b.T+"/exchange",{body:JSON.stringify(a.xb()),headers:{"Content-Type":"application/json"}});return{}}())}}class la{constructor(a){this.view=a;this.R=new Map;this.ga=new Set;a.h(2,this.gb.bind(this))}S(a){this.view.ua().S(a)}Fa(a){this.view.ua().Fb(a)}I(a){this.view.I(a);this.R.clear();this.ga.clear()}mb(a){this.view.La();this.view.h(3,
a)}gb(a,b,c,d,e){b?this.R.has(c)||(a.yb(),b=window.setTimeout(()=>{this.ga.has(c)||(this.ga.add(c),a.$a(c,d),e())},200),this.R.set(c,b)):(window.clearInterval(this.R.get(c)),this.R.delete(c))}}class M{constructor(a){this.a=a;this.K=this.a.querySelector(".result__artworkPlayButton span");this.g=f.b(this.a.querySelector(".result__artwork"))}static v(a){a=l(`<li class="result${a.O?" result--mega":""}"
      style="${a.O?`background: #${a.backgroundColor} radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)`:""}"
      data-preview-src="${a.u}"
      data-song-id="${a.J}"
      >
        <div class="container container--narrow">
          <div class="result__content">
            <div class="result__rankContainer">
              <div class="result__rank">${a.position}</div>
            </div>
            <div class="result__details">
              <div class="result__trackTitle">${a.A}</div>
              <div class="result__artistName">${a.s}</div>
              <div class="result__voteDetails">${a.l}
                votes (${a.Ja}%)
                ${a.u?'\n                    &nbsp;&nbsp;|&nbsp;&nbsp;\n                    <button class="result__listenButton">\n                      <span class="icon-play2"></span>&nbsp;Listen\n                    </button>\n                ':""}
              </div>
            </div>
            <div class="result__artwork">
                ${a.G?`
                <div class="result__artworkSpinner">
                    <div class="result__artworkPlaceholder"
                         data-alt="Cover artwork for ${a.A} - ${a.s}"
                         data-src="${a.G}"></div>
                  </div>
                  ${a.u?`
                  <button class="result__artworkPlayButton"
                            aria-label="Play ${a.A} by ${a.s}">
                      <span class="icon-play2"></span>
                    </button>
                  `:""}
                `:""}
            </div>
          </div>
        </div>
      </li>
`);return new M(a)}ra(a){return this.a===a.a}Ra(){return{rb:this.a.querySelector(".result__rank").textContent,ca:this.Na(),J:w.B(this.a.dataset,"songId"),qb:w.B(this.a.dataset,"previewSrc"),ba:this.a.querySelector(".result__artistName").textContent,title:this.a.querySelector(".result__trackTitle").textContent}}Na(){let a=this.a.querySelector(".result__artworkImage"),b=this.a.querySelector(".result__artworkPlaceholder");return null!=a?a.src:b?w.B(b.dataset,"src"):void 0}play(){this.g.classList.add("result__artwork--prePlay");
this.$("icon-pause");window.setTimeout(()=>{this.g.classList.add("result__artwork--playing")},300)}pause(){this.g.classList.add("result__artwork--paused");this.$("icon-play2")}resume(){this.g.classList.remove("result__artwork--paused");this.$("icon-pause")}Ga(){this.g.classList.add("result__artwork--fadeout");this.$("icon-play2");window.setTimeout(()=>{window.requestAnimationFrame(()=>{this.g.classList.remove("result__artwork--prePlay","result__artwork--playing");window.requestAnimationFrame(()=>
{this.g.classList.remove("result__artwork--fadeout")})})},350)}yb(){f.b(this.a.querySelector(".result__artworkPlaceholder")).classList.add("result__artworkPlaceholder--loading")}$a(a,b){let c=f.b(this.a.querySelector(".result__artworkPlaceholder")),d=new Image;d.src=a;d.alt=b;d.classList.add("result__artworkImage","result__artworkImage--fadein");d.onload=()=>{c.parentNode.insertBefore(d,c);c.remove()};d.onerror=()=>{c.classList.remove("result__artworkPlaceholder--loading")}}$(a){this.K&&(this.K.className=
a)}}class X{constructor(a){this.a=a}static v(){let a=document.createElement("div");a.className="countdown__statusIndicator countdown__statusIndicator--hidden";return new X(a)}S(a){a?(this.aa(!0),this.a.innerHTML='<div class="countdown__statusIcon"><span class="icon-spinner"></span></div>'):this.aa(!1)}Fb(a){if(a){this.aa(!0);var b=document.createElement("div");b.className="countdown__statusMessage";b.innerText=a;this.a.innerHTML="";this.a.appendChild(b)}else this.aa(!1)}aa(a){a?this.a.classList.remove("countdown__statusIndicator--hidden"):
this.a.classList.add("countdown__statusIndicator--hidden")}}class ka extends F{constructor(a){super(a);this.X=f.b(this.a.querySelector(".countdown__list"))}da(){this.a.addEventListener("click",a=>this.hb(a));this.Ba()}ua(){this.na||(this.na=X.v(),this.a.insertBefore(this.na.a,this.X));return this.na}I(a){this.X.innerHTML="";for(let b of a)a=M.v(b),this.X.appendChild(a.a);this.Ba()}Ab(a){null==this.L&&(this.L=document.createElement("div"),this.L.classList.add("container","container--narrow","countdown__footnote"),
this.a.appendChild(this.L));this.L.innerHTML="";this.L.appendChild(a)}La(){(new IntersectionObserver(a=>{a.length&&this.i(3,a[0].isIntersecting)},{rootMargin:"-96px 0px"})).observe(this.X)}hb(a){let b=L(a.target,this.a,"result__artworkPlayButton");a=L(a.target,this.a,"result__listenButton");if(a=b||a){let c=S(a,this.a);this.i(1,c,a===b)}}Ba(){let a=this.Pa();this.a.querySelectorAll(".result__artworkPlaceholder").forEach(b=>a.observe(b))}Pa(){return this.U?this.U:this.U=new IntersectionObserver(a=>
this.fb(f.b(this.U),a))}fb(a,b){b.forEach(c=>{let d=c.target,e=S(d,this.a),m=w.B(d.dataset,"src"),t=w.B(d.dataset,"alt");this.i(2,e,c.isIntersecting,m,t,()=>a.unobserve(d))})}}let Aa={j(a){return{Y:a.num_entries,l:a.num_votes,eb:a.numPreviousYearVotes,Pb:a.last_processed_ts,vb:a.results_0_100.map(p)}}},Ba={j(a){return{Va:a.instagram_post,Ua:a.instagram_direct_message,Wa:a.instagram_story,Mb:a.twitter_post,sb:a.reddit_comment,Ob:a.web_upload}}};class Ca{constructor(a,b){this.C=a;this.H=b}V(a){const b=
this;return Z(function*(){var c=[...a].sort();c=yield b.C.get(`/static/results/${b.H}/`+c.join("+")+".json");return Aa.j(c)}())}Oa(){const a=this;return Z(function*(){let b=yield a.C.get(`/static/results/${a.H}/entryCountsBySource.json`);return Ba.j(b)}())}}document.addEventListener("DOMContentLoaded",function(){let {M:a,H:b,ea:c}=w.ub(W.j),d=new qa(a),e=document.querySelector(".countdown"),m=document.querySelector(".uploader"),t=document.querySelector(".uploaderRoot--installGa"),D=new ta,A=new za(D,
window.location.href.includes("localhost")?"http://localhost:8000":"https://s.100warmtunas.com");t&&(t.classList.add("uploader","uploader--ga"),t.innerHTML="",T(t,void 0,void 0,A));if(null!=e){let {la:y,o:B}=ja(e);fa(d,y);y.da();null!=m&&T(m,y,B,A);K(()=>{if(b){let H=new Ca(D,b);q(H,d,e,B,c)}})}oa();x();G();ea()})})();
//# sourceMappingURL=b579a9e4.js.map