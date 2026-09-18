var T=Object.defineProperty;var j=(e,t,o)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var M=(e,t,o)=>j(e,typeof t!="symbol"?t+"":t,o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();class F{constructor(t){M(this,"routes",{});M(this,"appRoot");for(const o of t)this.routes[o.path]=o.render;window.addEventListener("popstate",()=>this.handleRoute())}init(t){this.appRoot=t,this.handleRoute()}navigate(t){window.history.pushState({},"",t),this.handleRoute()}handleRoute(){if(!this.appRoot)return;const t=window.location.pathname,o=this.routes[t]||this.routes["/404"];this.appRoot.innerHTML="",o&&this.appRoot.append(o())}}const I="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABX1JREFUeAG9V1tsFGUU/v7Zme1eusv2IqhUulzagGhKuWlKrCsGERSihgQfjPogmhiNJoov6oMiiYnVgA/EqIlNiA/6Ig9abokUiYhikAoFQVvX2lIX2rLtXrqXmf09/9+d7W472y6kcJLZmf92zne+c5kdhqz4/QGfCvUVegyAsQBuhHCc5jB2dwW/bzWnmPhZ7A/4DaYd4YQDN0HITtDg6QeCwfagBFA3f93fwvicW6tTH7RsN5beXa96PG4NMyhkyGhr+yG5c8ce7XJoSMuCaGR1/rXPcmb7YvacqvT+g59pLrcTNpsNMyw8k8kwRVEQGYli4/rn06HQgAbO31HIuIg73nr7xbTHWy6Mc8y8SOMCiLvchZaP3tDHZtn9YnaZeN6w8b4yQimnS9Z6LZvzgNy5tE7NjgOKuUJu22hxWu855znjE4GYa9OJxzueX+qEtWkdUhiDYKrzj36c+DUox/eu9GPJ4tvkcwkQeL4dFdchkWgSn7Yex9ffnKIwAlufWI5339wEr8cxxsTUxwucLAkAmzRm6L0URko3IGLY2xcusGruz9Akm4bUkgDoRgYGXcKIZrdBoSpd1ViLi11XiAGOlctrqXpEaDjSaYMyDbKURUimC+qUAMyz0WgC+77rwG8dfXA4NGlscCiGWUS52NTdM4idHx4ikAaSiTQaG2rw2KMNmOV1yfP8egGYoigMJ0/1YO9XJ1HuLoOmKigvd8BTXiZh/vhTt8wLnUISj9GdgDy+qaEU1VMDMNPVSV5XV3pQVeFGBV2qjTgm6seqjsPtsstLhGp4OI7qKg8cZXaU5JylYc4Lmoym0XtSZTAoxoINEWOWF1/xzGheNBnD4BQiBXb7uG9T9QhLBkTypNM6Qlci1MRBdNtBtqVxSQu3RA3RBQQuYSxMTIxEkhBkzb7FS07YLI9NAmB63XG2Dx9/0o5/e8NY0ThPKpR1ni10zgr3m9q9Hid6+oaxs+Ug5c0/qK2pwEsvBLCKKsWqRxTNgbPn+nHoyAWkUjp6+4cp451wOe2y1AoczwMhmHPSntNnejFCgAeoUi78GUKguV4CsBKlGACR7W6nJmNaVeGCz+dE9mVF3nNJuXkJyk1YAqDP60CFzyV7h0hOnyjXIlKUgdUravHc0034q3sAzWsW4jx5su/bDsoHJ1RKtkQyJXuBkMpKN1wOuyw/0TPWNtdhSf0cHDvehUULqrFqRW3pAExP5t1RiddeflDyS69JvL/rMGKjKWLGIetdlGNzUx2E72c6L5HhpNwbjyfhpf7w1NbVeHLLShkWVVOKNiNLBmQZ0kGzlMRY1LhKPTgeT8lc2LJ5GbY90yQp/3zvcbR++bNcEy1YN8bKtcw2rj6T1TlRLHOAZV+rJupEMo0EKTfI84HBiFxpumeBBCha85rVCyUTA4NRYieDBDGVShl5DsHSeFEAOSDZe5Ta69DVKN0TsiqGI6PoPNeX23f2fB+Gw6NIEtAYheBqOCbPTFJkISW9C+yahs2PNOCuxXOhUEcUrbhmro+81akiGGpur8DrlC+iU2YoVAsp8UTjKUXYovnrJNMXuw+JW8G/lZxICidM5ZWebNsTNnBucSinDax+wUNykAtBJBLTrYwX0yP7P2OWxs11q/Yv/p7Tbt0cCwDt4qHz9wt6ttHwQkXj7b/wym4rum4JnIuy3N92LDU2wmkqUH5UPG/f3qLEo3Gp0gqIBQe5e6l/z4X30Ugc7+3Yo2YN7FZ06LtIRTD034B9w/ptqQNtx+LUeIwSdY67ZgEtX0ZGYvovJzoSZCN9OTRop64Q7Aoebs1+nD5MH6cZ+jjlftwEEcYNrtDH6YFgAdg6/zr6TsSr9Fja/6lrl6OUGO16JrWLvozDYuJ/be9M+oCh90EAAAAASUVORK5CYII=";let N;const E={email:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',lock:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',eye:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',google:'<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>'},B=e=>{e.key==="Escape"&&D()},R=()=>`
  <div class="auth-form__header">
    <h2 class="auth-form__title">Welcome Back!</h2>
    <p class="auth-form__subtitle">Sign in to resume your games and progress.</p>
  </div>
  <form class="auth-form__body" onsubmit="return false;">
    <div class="auth-form__field">
      <label class="auth-form__label">Email Address</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${E.email}</span>
        <input type="email" class="auth-form__input" placeholder="e.g. alex@minigames.com" required />
      </div>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label">Password</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${E.lock}</span>
        <input type="password" class="auth-form__input" placeholder="••••••••" required />
        <button type="button" class="auth-form__eye-btn" aria-label="Toggle password visibility">${E.eye}</button>
      </div>
    </div>
    <div class="auth-form__forgot">
      <a href="#" class="auth-form__link auth-form__link--underline">Forgot Password?</a>
    </div>
    <button type="submit" class="auth-form__submit-btn">Login</button>
    <div class="auth-form__divider"><span>OR</span></div>
    <button type="button" class="auth-form__google-btn">
      <span class="auth-form__google-icon">${E.google}</span> Continue with Google
    </button>
    <div class="auth-form__footer-text">
      Don't have an account? <button type="button" class="auth-form__switch-inline" data-target="register">Register</button>
    </div>
  </form>
`,P=()=>`
  <div class="auth-form__header">
    <h2 class="auth-form__title">Create Account</h2>
    <p class="auth-form__subtitle">Join MiniGames to track your score & streak.</p>
  </div>
  <form class="auth-form__body" onsubmit="return false;">
    <div class="auth-form__field">
      <label class="auth-form__label">Username</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${E.user}</span>
        <input type="text" class="auth-form__input" placeholder="e.g. CozyGamer_99" required />
      </div>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label">Email Address</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${E.email}</span>
        <input type="email" class="auth-form__input" placeholder="your.email@domain.com" required />
      </div>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label">Password</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${E.lock}</span>
        <input type="password" class="auth-form__input" placeholder="Min. 8 characters" required />
      </div>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label">Confirm Password</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${E.lock}</span>
        <input type="password" class="auth-form__input" placeholder="Repeat your password" required />
      </div>
    </div>
    <button type="submit" class="auth-form__submit-btn">Create Account</button>
    <div class="auth-form__divider"><span>OR</span></div>
    <button type="button" class="auth-form__google-btn">
      <span class="auth-form__google-icon">${E.google}</span> Sign up with Google
    </button>
    <div class="auth-form__footer-text">
      Already have an account? <button type="button" class="auth-form__switch-inline" data-target="login">Login</button>
    </div>
  </form>
`,H=()=>{const e=document.createElement("div");e.className="auth-backdrop auth-backdrop--hidden",e.innerHTML=`
    <div class="auth-dialog" role="dialog" aria-modal="true">
      <button type="button" class="auth-dialog__close" aria-label="Close dialog">✕</button>
      
      <div class="auth-switcher">
        <div class="auth-switcher__pill"></div>
        <button type="button" class="auth-switcher__btn auth-switcher__btn--active" data-tab="login">Login</button>
        <button type="button" class="auth-switcher__btn" data-tab="register">Register</button>
      </div>

      <div class="auth-dialog__container">
        <div class="auth-dialog__view auth-dialog__view--active" id="auth-view-login">
          ${R()}
        </div>
        <div class="auth-dialog__view" id="auth-view-register">
          ${P()}
        </div>
      </div>
    </div>
  `;const t=a=>{const r=e.querySelectorAll(".auth-switcher__btn"),s=e.querySelector(".auth-switcher__pill"),i=e.querySelector("#auth-view-login"),l=e.querySelector("#auth-view-register");if(!i||!l||!s)return;a==="register"?s.classList.add("auth-switcher__pill--register"):s.classList.remove("auth-switcher__pill--register");for(const h of r)h.dataset.tab===a?h.classList.add("auth-switcher__btn--active"):h.classList.remove("auth-switcher__btn--active");const p=a==="login"?l:i,m=a==="login"?i:l;m.classList.contains("auth-dialog__view--active")||(p.classList.add("auth-dialog__view--fade-out"),setTimeout(()=>{p.classList.remove("auth-dialog__view--active","auth-dialog__view--fade-out"),m.classList.add("auth-dialog__view--active","auth-dialog__view--fade-in"),setTimeout(()=>{m.classList.remove("auth-dialog__view--fade-in")},200)},150))},o=e.querySelectorAll(".auth-switcher__btn");for(const a of o)a.addEventListener("click",()=>{const r=a.dataset.tab;r&&t(r)});e.addEventListener("click",a=>{const r=a.target;if(r.classList.contains("auth-form__switch-inline")){const s=r.dataset.target;s&&t(s)}});const n=e.querySelector(".auth-dialog__close");return n==null||n.addEventListener("click",D),e.addEventListener("click",a=>{a.target===e&&D()}),N=e,e},U=(e="login")=>{if(!N)return;N.classList.remove("auth-backdrop--hidden"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",B);const t=N.querySelector(`.auth-switcher__btn[data-tab="${e}"]`);t==null||t.click()},D=()=>{!N||N.classList.contains("auth-backdrop--hidden")||(N.classList.add("auth-backdrop--closing"),setTimeout(()=>{N&&(N.classList.remove("auth-backdrop--closing"),N.classList.add("auth-backdrop--hidden")),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",B)},250))},Y=()=>{const e=document.createElement("header");e.className="header";const t=document.createElement("div");t.className="header__container";const o=document.createElement("a");o.href="/",o.className="header__logo";const n=document.createElement("img");n.src=I,n.alt="MiniGames Logo",n.className="header__logo-icon";const a=document.createElement("span");a.className="header__logo-text",a.textContent="MiniGames",o.append(n,a);const r=document.createElement("nav");r.className="header__nav";const s=document.createElement("ul");s.className="header__nav-list";const i=[{name:"Home",href:"/",active:!0},{name:"Library",href:"/"},{name:"Tournaments",href:"/"},{name:"Community",href:"/"}];for(const k of i){const L=document.createElement("li");L.className="header__nav-item";const G=document.createElement("a");G.href=k.href,G.className=`header__nav-link${k.active?" header__nav-link--active":""}`,G.textContent=k.name,L.append(G),s.append(L)}r.append(s);const l=document.createElement("div");l.className="header__actions";const p=document.createElement("button");p.type="button",p.className="header__btn header__btn--login",p.textContent="Log In";const m=document.createElement("button");m.type="button",m.className="header__btn header__btn--signup",m.textContent="Sign Up",l.append(p,m);const h=document.createElement("button");h.type="button",h.className="header__burger",h.setAttribute("aria-label","Open navigation menu");for(let k=0;k<3;k+=1){const L=document.createElement("span");L.className="header__burger-line",h.append(L)}const d=document.createElement("div");d.className="header__right-controls",d.append(l,h);const g=document.createElement("div");g.className="header__mobile-overlay";const v=document.createElement("div");v.className="header__mobile-top";const y=o.cloneNode(!0),_=document.createElement("button");_.type="button",_.className="header__mobile-close",_.setAttribute("aria-label","Close menu");const c=document.createElement("span");c.className="header__mobile-close-icon",c.textContent="✕",_.append(c),v.append(y,_);const u=s.cloneNode(!0),w=document.createElement("div");w.className="header__mobile-actions";const b=p.cloneNode(!0),f=m.cloneNode(!0);w.append(b,f),g.append(v,u,w);const C=()=>{g.classList.remove("header__mobile-overlay--active"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",A)},x=()=>{g.classList.add("header__mobile-overlay--active"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",A)},A=k=>{k.key==="Escape"&&C()};h.addEventListener("click",x),_.addEventListener("click",C);const S=u.querySelectorAll(".header__nav-link");for(const k of S)k.addEventListener("click",C);const z=()=>{C(),U()};return p.addEventListener("click",z),b.addEventListener("click",z),m.addEventListener("click",z),f.addEventListener("click",z),t.append(o,r,d),e.append(t,g),e},q=()=>{const e=document.createElement("section");e.className="hero";const t=document.createElement("img");t.src="/images/hero-bg.webp",t.alt="",t.className="hero__bg";const o=document.createElement("div");o.className="hero__container";const n=document.createElement("div");n.className="hero__card";const a=document.createElement("h1");a.className="hero__title",a.textContent="Take a Short Break & Have Fun";const r=document.createElement("p");r.className="hero__description",r.textContent="Discover hundreds of curated casual mini-games. Play instantly in your browser — puzzle, match 3, farm, and board classics.";const s=document.createElement("button");return s.type="button",s.className="hero__btn",s.textContent="Browse Library",n.append(a,r,s),o.append(n),e.append(t,o),e},W=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toString(),O=e=>{const t=document.createElement("div");t.className="game-card";const o=document.createElement("img");o.src=e.cardImage,o.alt=e.name,o.className="game-card__image",o.addEventListener("error",()=>{o.src="https://placehold.co/300x380/1e1e1e/ffffff?text=No+Image"});const n=document.createElement("div");n.className="game-card__overlay";const a=document.createElement("h3");a.className="game-card__title",a.textContent=e.name;const r=document.createElement("div");r.className="game-card__meta";const s=document.createElement("div");s.className="game-card__stat game-card__stat--rating",s.innerHTML=`
    <svg class="game-card__icon game-card__icon--star" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FFD02B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
    <span>${e.rating.toFixed(1)}</span>
  `;const i=document.createElement("div");return i.className="game-card__stat game-card__stat--likes",i.innerHTML=`
    <svg class="game-card__icon game-card__icon--heart" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FF4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
    <span>${W(e.likesCount)}</span>
  `,r.append(s,i),n.append(a,r),t.append(o,n),t},V=e=>{const t=document.createElement("section");t.className="carousel-section";const o=document.createElement("header");o.className="carousel-section__header";const n=document.createElement("div");n.className="carousel-section__title-wrapper";const a=document.createElement("span");a.className="carousel-section__badge";const r=document.createElement("h2");r.className="carousel-section__title",r.textContent="New Games",n.append(a,r);const s=document.createElement("nav");s.className="carousel-section__nav",s.setAttribute("aria-label","Carousel Navigation");const i=document.createElement("button");i.type="button",i.className="carousel-section__btn carousel-section__btn--prev",i.setAttribute("aria-label","Previous slide"),i.innerHTML=`
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  `;const l=document.createElement("button");l.type="button",l.className="carousel-section__btn carousel-section__btn--next",l.setAttribute("aria-label","Next slide"),l.innerHTML=`
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  `,s.append(i,l),o.append(n,s);const p=["cat-mail-co","islanders-new-shores","vacation-cafe-simulator","winter-burrow","shelve-the-potions"],m=[],h=new Map(e.map(c=>[c.slug,c]));for(const c of p){const u=h.get(c);u&&(m.push(u),h.delete(c))}for(const c of h.values())m.push(c);const d=document.createElement("div");d.className="carousel-section__track-container";const g=document.createElement("div");g.className="carousel-section__track";const v=[];for(const c of m){const u=document.createElement("div");u.className="carousel-section__slide";const w=O(c);u.append(w),g.append(u),v.push(u)}d.append(g),t.append(o,d);let y=2;const _=()=>{const c=window.innerWidth<=1024,u=v.length;for(const[w,b]of v.entries()){b.classList.remove("carousel-section__slide--wide","carousel-section__slide--standard","carousel-section__slide--compact","carousel-section__slide--hidden");let f=(w-y)%u;f>u/2&&(f-=u),f<-u/2&&(f+=u),f===0?b.classList.add("carousel-section__slide--wide"):Math.abs(f)===1?b.classList.add(c?"carousel-section__slide--compact":"carousel-section__slide--standard"):!c&&Math.abs(f)===2?b.classList.add("carousel-section__slide--compact"):b.classList.add("carousel-section__slide--hidden")}};return i.addEventListener("click",()=>{const c=v.length;y=(y-1+c)%c,_()}),l.addEventListener("click",()=>{const c=v.length;y=(y+1)%c,_()}),window.addEventListener("resize",_),_(),t},K=e=>{const t=e.match(/[A-Z]/g);return t&&t.length>=2?t.slice(0,2).join(""):e.slice(0,2).toUpperCase()},X=e=>e.toLocaleString("en-US"),$=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toString(),Q=e=>{const t=document.createElement("section");t.className="leaderboard-section";const o=document.createElement("header");o.className="leaderboard-section__header";const n=document.createElement("div");n.className="leaderboard-section__title-wrapper";const a=document.createElement("span");a.className="leaderboard-section__badge";const r=document.createElement("h2");r.className="leaderboard-section__title",r.innerHTML=`
    <span class="leaderboard-section__title-full">Top Players This Week</span>
    <span class="leaderboard-section__title-short">Top Players</span>
  `,n.append(a,r),o.append(n);const s=document.createElement("div");s.className="leaderboard-section__table-wrapper";const i=document.createElement("table");i.className="leaderboard-table";const l=document.createElement("thead");l.className="leaderboard-table__head";const p=document.createElement("tr");p.className="leaderboard-table__row leaderboard-table__row--head";const m=[{html:"RANK",classModifier:"rank"},{html:"PLAYER",classModifier:"player"},{html:'<span class="leaderboard-table__head-full">GAMES PLAYED</span><span class="leaderboard-table__head-short">GAMES</span>',classModifier:"games"},{html:'<span class="leaderboard-table__head-full">TOTAL SCORE</span><span class="leaderboard-table__head-short">SCORE</span>',classModifier:"score"},{html:"STREAK",classModifier:"streak"},{html:"FAVORITE GAME",classModifier:"favorite"}];for(const d of m){const g=document.createElement("th");g.className=`leaderboard-table__th leaderboard-table__th--${d.classModifier}`,g.innerHTML=d.html,p.append(g)}l.append(p);const h=document.createElement("tbody");h.className="leaderboard-table__body";for(const d of e){const g=document.createElement("tr");g.className="leaderboard-table__row";const v=document.createElement("td");v.className="leaderboard-table__td leaderboard-table__td--rank";const y=document.createElement("span");y.className=`leaderboard-table__rank-text${d.rank===1?" leaderboard-table__rank-text--top":""}`,y.textContent=`#${d.rank}`,v.append(y);const _=document.createElement("td");_.className="leaderboard-table__td leaderboard-table__td--player";const c=document.createElement("div");c.className="leaderboard-table__player-cell";const u=document.createElement("div");u.className=`leaderboard-table__avatar leaderboard-table__avatar--${d.rank}`,u.textContent=K(d.playerName);const w=document.createElement("span");w.className="leaderboard-table__player-name",w.textContent=d.playerName,c.append(u,w),_.append(c);const b=document.createElement("td");b.className="leaderboard-table__td leaderboard-table__td--games",b.textContent=d.gamesPlayed.toString();const f=document.createElement("td");f.className="leaderboard-table__td leaderboard-table__td--score",f.innerHTML=`
      <span class="leaderboard-table__score-full">${X(d.totalScore)}</span>
      <span class="leaderboard-table__score-short">${$(d.totalScore)}</span>
    `;const C=document.createElement("td");C.className="leaderboard-table__td leaderboard-table__td--streak";const x=document.createElement("div");x.className="leaderboard-table__streak-cell",x.innerHTML=`
      <span class="leaderboard-table__fire-icon">🔥</span>
      <span class="leaderboard-table__streak-full">${d.streakDays} days</span>
      <span class="leaderboard-table__streak-short">${d.streakDays}d</span>
    `,C.append(x);const A=document.createElement("td");A.className="leaderboard-table__td leaderboard-table__td--favorite";const S=document.createElement("span");S.className="leaderboard-table__game-tag",S.textContent=d.favoriteGameName,A.append(S),g.append(v,_,b,f,C,A),h.append(g)}return i.append(l,h),s.append(i),t.append(o,s),t},J="/minigames/assets/ilustration-side-DsQZrXDY.webp",Z=()=>{const e=document.createElement("section");e.className="game-developers-section";const t=document.createElement("div");t.className="game-developers-section__container";const o=document.createElement("div");o.className="game-developers-section__illustration-wrapper";const n=document.createElement("img");n.className="game-developers-section__illustration",n.src=J,n.alt="Game developer workspace illustration",o.append(n);const a=document.createElement("div");a.className="game-developers-section__card";const r=document.createElement("h2");r.className="game-developers-section__title",r.textContent="Are You a Game Developer?";const s=document.createElement("p");s.className="game-developers-section__description",s.textContent="Want to see your game on MiniGames? We're always looking for fun, engaging mini games to add to our platform. Submit your game and reach thousands of players!";const i=document.createElement("button");i.type="button",i.className="game-developers-section__button";const l=document.createElement("span");l.className="game-developers-section__button-icon",l.innerHTML=`
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      <polyline points="7 9 12 4 17 9" />
      <line x1="12" y1="4" x2="12" y2="16" />
    </svg>
  `;const p=document.createElement("span");p.textContent="Submit Form",i.append(l,p);const m=document.createElement("p");return m.className="game-developers-section__contact",m.innerHTML='or contact us at <a href="mailto:developers@minigames.com">developers@minigames.com</a>',a.append(r,s,i,m),t.append(o,a),e.append(t),e},ee=()=>{const e=document.createElement("footer");return e.className="footer",e.innerHTML=`
    <div class="footer__container">
      <div class="footer__top">
        <!-- Brand Section -->
        <div class="footer__brand">
          <div class="footer__logo">
            <img class="footer__logo-img" src="${I}" alt="MiniGames Logo" />
            <span class="footer__logo-text">MiniGames</span>
          </div>
          <p class="footer__description">
            Take a short break and have fun. Hundreds of curated casual mini-games right in your web browser. No download required.
          </p>
        </div>

        <!-- Navigation Grid -->
        <div class="footer__nav-grid">
          <div class="footer__column">
            <h3 class="footer__title">Explore</h3>
            <ul class="footer__list">
              <li><a href="#" class="footer__link">Home</a></li>
              <li><a href="#" class="footer__link">Library</a></li>
              <li><a href="#" class="footer__link">Categories</a></li>
              <li><a href="#" class="footer__link">Tournaments</a></li>
            </ul>
          </div>

          <div class="footer__column">
            <h3 class="footer__title">Company</h3>
            <ul class="footer__list">
              <li><a href="#" class="footer__link">About Us</a></li>
              <li><a href="#" class="footer__link">Contact</a></li>
              <li><a href="#" class="footer__link">Privacy Policy</a></li>
              <li><a href="#" class="footer__link">Terms of Service</a></li>
            </ul>
          </div>

          <div class="footer__column footer__column--community">
            <h3 class="footer__title">Community</h3>
            <div class="footer__socials">
              <a href="#" class="footer__social-btn" aria-label="Share">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </a>
              <a href="#" class="footer__social-btn" aria-label="Chat">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  <line x1="8" y1="9" x2="16" y2="9"></line>
                  <line x1="8" y1="13" x2="14" y2="13"></line>
                </svg>
              </a>
              <a href="#" class="footer__social-btn" aria-label="RSS">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 11a9 9 0 0 1 9 9"></path>
                  <path d="M4 4a16 16 0 0 1 16 16"></path>
                  <circle cx="5" cy="19" r="1"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer__divider"></div>

      <!-- Bottom Bar -->
      <div class="footer__bottom">
        <span class="footer__copyright">© 2026 MiniGames. All rights reserved.</span>
        
        <div class="footer__credits">
          <a href="https://rs.school/courses/short-track" target="_blank" rel="noopener noreferrer" class="footer__credit-link">
            <span class="footer__badge footer__badge--rs">RS</span>
            <span>RS School</span>
          </a>

          <a href="https://github.com/Volhakav" target="_blank" rel="noopener noreferrer" class="footer__credit-link">
            <span class="footer__badge footer__badge--github">&lt;&gt;</span>
            <span>@Volhakav</span>
          </a>
        </div>

        <span class="footer__tagline">Designed with love</span>
      </div>
    </div>
  `,e},te=[{slug:"vacation-cafe-simulator",name:"Vacation Cafe Simulator",category:"strategy",price:"Free",shortDescription:"Cozy Italian Vacation Cafe No timers, No stress cook traditional dishes upgrade and customize 🏠 just drink Prosecco 🥂 relax and grow your dream cafe ✨",rating:4.8,likesCount:28750,cardImage:"/images/games/vacation-cafe-simulator-card.jpg",featured:!0},{slug:"winter-burrow",name:"Winter Burrow",category:"farm",price:"Free",shortDescription:"A cozy woodland survival game about a mouse restoring their childhood burrow. Explore, gather resources, craft, knit warm sweaters, bake pies and meet the locals.",rating:4.9,likesCount:32400,cardImage:"/images/games/winter-burrow-card.jpg",featured:!0},{slug:"shelve-the-potions",name:"Shelve the Potions!",category:"puzzle",price:"Free",shortDescription:"Organize 2000+ potions on shelves after the witch's cats have knocked them over, using clues around an enchanted cellar. Learn strange symbols and decipher cryptic notes.",rating:4.7,likesCount:21300,cardImage:"/images/games/shelve-the-potions-card.jpg",featured:!0},{slug:"heartopia",name:"Heartopia",category:"strategy",price:"$1.99",shortDescription:"A multiplayer life simulation game crafted for creativity, freedom, and peace. Build your dream home, explore hobbies, and forge warm connections with friends in a cozy town.",rating:4.6,likesCount:46800,cardImage:"/images/games/heartopia-card.jpg",featured:!0},{slug:"palia",name:"Palia",category:"strategy",price:"Free",shortDescription:"A free-to-play fantasy life sim adventure where you can craft, explore, and create the life and home of your dreams in a vibrant, heartwarming world.",rating:4.8,likesCount:89500,cardImage:"/images/games/palia-card.jpg",featured:!0},{slug:"cat-mail-co",name:"Cat Mail Co.",category:"puzzle",price:"Free",shortDescription:"Run a cozy cat post office. Sort and deliver parcels from the daily boat. At night, the moon reveals hidden truths about packages. Clear a strange backlog and unlock new destinations.",rating:4.9,likesCount:38200,cardImage:"/images/games/cat-mail-co-card.jpg",featured:!0},{slug:"leaf-it-alone",name:"Leaf it Alone",category:"arcade",price:"Free",shortDescription:"Finally, it's that time of the year to clean up this leafy mess. Derust your raking skills and don't waste a second — there's a whole lawn waiting!",rating:4.4,likesCount:12600,cardImage:"/images/games/leaf-it-alone-card.jpg",featured:!1},{slug:"leafy-corner",name:"Leafy Corner",category:"farm",price:"$1.99",shortDescription:"Run a cute little plant shop. Grow, sell, and care for real-life plants, help customers find their dream plants, complete orders, and customize your cozy shop.",rating:4.7,likesCount:19800,cardImage:"/images/games/leafy-corner-card.jpg",featured:!1},{slug:"grimshire",name:"Grimshire",category:"strategy",price:"Free",shortDescription:"A deadly plague threatens the village of Grimshire. Manage farmland, forage wilds, stop harvest rot and keep the cellar full. Can you help the community survive?",rating:4.6,likesCount:15700,cardImage:"/images/games/grimshire-card.jpg",featured:!1},{slug:"tiny-glade",name:"Tiny Glade",category:"arcade",price:"$3.99",shortDescription:"A small diorama builder where you doodle whimsical castles, cozy cottages & romantic ruins. No management, combat or goals — just lovable dioramas.",rating:4.9,likesCount:67300,cardImage:"/images/games/tiny-glade-card.jpg",featured:!0},{slug:"whisper-of-the-house",name:"Whisper of the House",category:"puzzle",price:"Free",shortDescription:"A cozy organizing & decorating game. Help townspeople move, organize, and clean their spaces. Your gentle touch may change their lives and uncover hidden stories.",rating:4.8,likesCount:24900,cardImage:"/images/games/whisper-of-the-house-card.jpg",featured:!1},{slug:"tukoni-forest-keepers",name:"Tukoni: Forest Keepers",category:"puzzle",price:"Free",shortDescription:"A cute cozy puzzle adventure. Play as a forest spirit exploring hand-drawn magical locations, meet charming characters, solve puzzles, collect herbs and tea recipes.",rating:4.9,likesCount:31200,cardImage:"/images/games/tukoni-forest-keepers-card.jpg",featured:!1},{slug:"cat-chess",name:"Cat Chess",category:"strategy",price:"Free",shortDescription:"Play the ancient and thrilling game of Chess but with... cats! Lead your furry friends to the Purrfect battle of brains and whiskers!",rating:4.6,likesCount:17400,cardImage:"/images/games/cat-chess-card.jpg",featured:!1},{slug:"cast-n-chill",name:"Cast n Chill",category:"arcade",price:"Free",shortDescription:"A relaxing fishing game where you explore serene lakes, rivers, and oceans. Catch rare fish, upgrade your gear and reel in legendary catches - all with your loyal companion.",rating:4.7,likesCount:26800,cardImage:"/images/games/cast-n-chill-card.jpg",featured:!1},{slug:"little-corners",name:"Little Corners",category:"puzzle",price:"Free",shortDescription:"Peel, place, and arrange stickers across tiny windows into different worlds. Relax and unwind to lofi beats, collect unique stickers and share cozy creations.",rating:4.8,likesCount:41500,cardImage:"/images/games/little-corners-card.jpg",featured:!1},{slug:"tailside-cozy-cafe-sim",name:"Tailside: Cozy Cafe Sim",category:"strategy",price:"Free",shortDescription:"Run your own cozy café in Tailside! Brew coffee, decorate your café, follow small stories in the daily newspaper. Unlock new items, skills, villagers, and creature visitors.",rating:4.8,likesCount:35600,cardImage:"/images/games/tailside-cozy-cafe-sim-card.jpg",featured:!0},{slug:"islanders-new-shores",name:"ISLANDERS: New Shores",category:"strategy",price:"Free",shortDescription:"Build your island retreat in a calm, minimalist world with exciting new features that keep the classic charm while inspiring fresh creativity.",rating:4.9,likesCount:54200,cardImage:"/images/games/islanders-new-shores-card.jpg",featured:!0},{slug:"camper-van-make-it-home",name:"Camper Van: Make it Home",category:"puzzle",price:"Free",shortDescription:"Decorate and organize the camper van of your dreams! Build your own home-on-wheels using creative block organization puzzles and relaxing interior design.",rating:4.7,likesCount:29300,cardImage:"/images/games/camper-van-make-it-home-card.jpg",featured:!1},{slug:"organized-inside",name:"Organized Inside",category:"puzzle",price:"Free",shortDescription:"A slow-paced life sim and tidying up game about a cat, passion, transformation and growth. Categorize household items while uncovering the meaning of life through organization.",rating:4.8,likesCount:22700,cardImage:"/images/games/organized-inside-card.jpg",featured:!1},{slug:"cozy-solitaire",name:"Cozy Solitaire",category:"card",price:"Free",shortDescription:"Classic Solitaire game, accompanied by music and kitties.",rating:4.5,likesCount:38900,cardImage:"/images/games/cozy-solitaire-card.jpg",featured:!1},{slug:"cozy-sudoku",name:"Cozy Sudoku",category:"puzzle",price:"Free",shortDescription:"Sudoku, tunes, and some furry friends.",rating:4.6,likesCount:21500,cardImage:"/images/games/cozy-sudoku-card.jpg",featured:!1},{slug:"koroneko",name:"KoroNeko",category:"puzzle",price:"Free",shortDescription:"Roll your way through a cozy, kawaii world full of charming characters and challenging puzzles to save your siblings from Strawberry the Witch!",rating:4.9,likesCount:47300,cardImage:"/images/games/koroneko-card.jpg",featured:!1},{slug:"wytchwood",name:"Wytchwood",category:"strategy",price:"$4.99",shortDescription:"A crafting adventure game set in a land of gothic fables. As the old witch, explore, collect ingredients, brew spells, and pass judgement upon a capricious cast of characters.",rating:4.7,likesCount:33100,cardImage:"/images/games/wytchwood-card.jpg",featured:!1},{slug:"the-wild-at-heart",name:"The Wild at Heart",category:"strategy",price:"Free",shortDescription:"Wield a herd of quirky creatures to rebuild paths, battle beasts, and solve puzzles in a rich, interconnected nostalgic storybook fantasy world.",rating:4.8,likesCount:30400,cardImage:"/images/games/the-wild-at-heart-card.jpg",featured:!1}],ae={data:te},oe=[{rank:1,playerName:"Alex_Pro99",gamesPlayed:142,totalScore:94250,streakDays:12,favoriteGameSlug:"heartopia",favoriteGameName:"Heartopia"},{rank:2,playerName:"CozyGamer_x",gamesPlayed:118,totalScore:81400,streakDays:8,favoriteGameSlug:"cat-mail-co",favoriteGameName:"Cat Mail Co."},{rank:3,playerName:"MatchMaster",gamesPlayed:98,totalScore:72110,streakDays:5,favoriteGameSlug:"tiny-glade",favoriteGameName:"Tiny Glade"},{rank:4,playerName:"BubblePop",gamesPlayed:87,totalScore:65900,streakDays:3,favoriteGameSlug:"whisper-of-the-house",favoriteGameName:"Whisper of the House"},{rank:5,playerName:"SudokuGod",gamesPlayed:74,totalScore:59320,streakDays:2,favoriteGameSlug:"cat-chess",favoriteGameName:"Cat Chess"}],re={data:oe},se=()=>{const e=document.createElement("div");e.className="page-home";const t=Y(),o=document.createElement("main"),n=q(),a=V(ae.data),r=Q(re.data),s=Z(),i=ee(),l=H();return o.append(n,a,r,s),e.append(t,o,i,l),e},ne=()=>{const e=document.createElement("main");e.className="page-404";const t=document.createElement("h1");return t.textContent="404 - Page Not Found",e.append(t),e},ie=()=>{let e=document.querySelector("#app");e||(e=document.createElement("div"),e.id="app",document.body.append(e)),new F([{path:"/",render:se},{path:"/404",render:ne}]).init(e)};ie();
