var Qe=Object.defineProperty;var Je=(e,a,t)=>a in e?Qe(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;var P=(e,a,t)=>Je(e,typeof a!="symbol"?a+"":a,t);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();class ea{constructor(a){P(this,"routes",{});P(this,"appRoot");for(const t of a)this.routes[t.path]=t.render;window.addEventListener("popstate",()=>this.handleRoute())}init(a){this.appRoot=a,this.handleRoute()}navigate(a){window.history.pushState({},"",a),this.handleRoute()}handleRoute(){if(!this.appRoot)return;const a=window.location.pathname,t=this.routes[a]||this.routes["/404"];this.appRoot.innerHTML="",t&&this.appRoot.append(t())}}const X="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABX1JREFUeAG9V1tsFGUU/v7Zme1eusv2IqhUulzagGhKuWlKrCsGERSihgQfjPogmhiNJoov6oMiiYnVgA/EqIlNiA/6Ig9abokUiYhikAoFQVvX2lIX2rLtXrqXmf09/9+d7W472y6kcJLZmf92zne+c5kdhqz4/QGfCvUVegyAsQBuhHCc5jB2dwW/bzWnmPhZ7A/4DaYd4YQDN0HITtDg6QeCwfagBFA3f93fwvicW6tTH7RsN5beXa96PG4NMyhkyGhr+yG5c8ce7XJoSMuCaGR1/rXPcmb7YvacqvT+g59pLrcTNpsNMyw8k8kwRVEQGYli4/rn06HQgAbO31HIuIg73nr7xbTHWy6Mc8y8SOMCiLvchZaP3tDHZtn9YnaZeN6w8b4yQimnS9Z6LZvzgNy5tE7NjgOKuUJu22hxWu855znjE4GYa9OJxzueX+qEtWkdUhiDYKrzj36c+DUox/eu9GPJ4tvkcwkQeL4dFdchkWgSn7Yex9ffnKIwAlufWI5339wEr8cxxsTUxwucLAkAmzRm6L0URko3IGLY2xcusGruz9Akm4bUkgDoRgYGXcKIZrdBoSpd1ViLi11XiAGOlctrqXpEaDjSaYMyDbKURUimC+qUAMyz0WgC+77rwG8dfXA4NGlscCiGWUS52NTdM4idHx4ikAaSiTQaG2rw2KMNmOV1yfP8egGYoigMJ0/1YO9XJ1HuLoOmKigvd8BTXiZh/vhTt8wLnUISj9GdgDy+qaEU1VMDMNPVSV5XV3pQVeFGBV2qjTgm6seqjsPtsstLhGp4OI7qKg8cZXaU5JylYc4Lmoym0XtSZTAoxoINEWOWF1/xzGheNBnD4BQiBXb7uG9T9QhLBkTypNM6Qlci1MRBdNtBtqVxSQu3RA3RBQQuYSxMTIxEkhBkzb7FS07YLI9NAmB63XG2Dx9/0o5/e8NY0ThPKpR1ni10zgr3m9q9Hid6+oaxs+Ug5c0/qK2pwEsvBLCKKsWqRxTNgbPn+nHoyAWkUjp6+4cp451wOe2y1AoczwMhmHPSntNnejFCgAeoUi78GUKguV4CsBKlGACR7W6nJmNaVeGCz+dE9mVF3nNJuXkJyk1YAqDP60CFzyV7h0hOnyjXIlKUgdUravHc0034q3sAzWsW4jx5su/bDsoHJ1RKtkQyJXuBkMpKN1wOuyw/0TPWNtdhSf0cHDvehUULqrFqRW3pAExP5t1RiddeflDyS69JvL/rMGKjKWLGIetdlGNzUx2E72c6L5HhpNwbjyfhpf7w1NbVeHLLShkWVVOKNiNLBmQZ0kGzlMRY1LhKPTgeT8lc2LJ5GbY90yQp/3zvcbR++bNcEy1YN8bKtcw2rj6T1TlRLHOAZV+rJupEMo0EKTfI84HBiFxpumeBBCha85rVCyUTA4NRYieDBDGVShl5DsHSeFEAOSDZe5Ta69DVKN0TsiqGI6PoPNeX23f2fB+Gw6NIEtAYheBqOCbPTFJkISW9C+yahs2PNOCuxXOhUEcUrbhmro+81akiGGpur8DrlC+iU2YoVAsp8UTjKUXYovnrJNMXuw+JW8G/lZxICidM5ZWebNsTNnBucSinDax+wUNykAtBJBLTrYwX0yP7P2OWxs11q/Yv/p7Tbt0cCwDt4qHz9wt6ttHwQkXj7b/wym4rum4JnIuy3N92LDU2wmkqUH5UPG/f3qLEo3Gp0gqIBQe5e6l/z4X30Ugc7+3Yo2YN7FZ06LtIRTD034B9w/ptqQNtx+LUeIwSdY67ZgEtX0ZGYvovJzoSZCN9OTRop64Q7Aoebs1+nD5MH6cZ+jjlftwEEcYNrtDH6YFgAdg6/zr6TsSr9Fja/6lrl6OUGO16JrWLvozDYuJ/be9M+oCh90EAAAAASUVORK5CYII=";let D;const T={email:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',lock:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',eye:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',google:'<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>'},Z=e=>{e.key==="Escape"&&$()},aa=()=>`
  <div class="auth-form__header">
    <h2 class="auth-form__title">Welcome Back!</h2>
    <p class="auth-form__subtitle">Sign in to resume your games and progress.</p>
  </div>
  <form class="auth-form__body" onsubmit="return false;">
    <div class="auth-form__field">
      <label class="auth-form__label">Email Address</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${T.email}</span>
        <input type="email" class="auth-form__input" placeholder="e.g. alex@minigames.com" required />
      </div>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label">Password</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${T.lock}</span>
        <input type="password" class="auth-form__input" placeholder="••••••••" required />
        <button type="button" class="auth-form__eye-btn" aria-label="Toggle password visibility">${T.eye}</button>
      </div>
    </div>
    <div class="auth-form__forgot">
      <a href="#" class="auth-form__link auth-form__link--underline">Forgot Password?</a>
    </div>
    <button type="submit" class="auth-form__submit-btn">Login</button>
    <div class="auth-form__divider"><span>OR</span></div>
    <button type="button" class="auth-form__google-btn">
      <span class="auth-form__google-icon">${T.google}</span> Continue with Google
    </button>
    <div class="auth-form__footer-text">
      Don't have an account? <button type="button" class="auth-form__switch-inline" data-target="register">Register</button>
    </div>
  </form>
`,ta=()=>`
  <div class="auth-form__header">
    <h2 class="auth-form__title">Create Account</h2>
    <p class="auth-form__subtitle">Join MiniGames to track your score & streak.</p>
  </div>
  <form class="auth-form__body" onsubmit="return false;">
    <div class="auth-form__field">
      <label class="auth-form__label">Username</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${T.user}</span>
        <input type="text" class="auth-form__input" placeholder="e.g. CozyGamer_99" required />
      </div>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label">Email Address</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${T.email}</span>
        <input type="email" class="auth-form__input" placeholder="your.email@domain.com" required />
      </div>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label">Password</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${T.lock}</span>
        <input type="password" class="auth-form__input" placeholder="Min. 8 characters" required />
      </div>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label">Confirm Password</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${T.lock}</span>
        <input type="password" class="auth-form__input" placeholder="Repeat your password" required />
      </div>
    </div>
    <button type="submit" class="auth-form__submit-btn">Create Account</button>
    <div class="auth-form__divider"><span>OR</span></div>
    <button type="button" class="auth-form__google-btn">
      <span class="auth-form__google-icon">${T.google}</span> Sign up with Google
    </button>
    <div class="auth-form__footer-text">
      Already have an account? <button type="button" class="auth-form__switch-inline" data-target="login">Login</button>
    </div>
  </form>
`,Q=()=>{const e=document.createElement("div");e.className="auth-backdrop auth-backdrop--hidden",e.innerHTML=`
    <div class="auth-dialog" role="dialog" aria-modal="true">
      <button type="button" class="auth-dialog__close" aria-label="Close dialog">✕</button>
      
      <div class="auth-switcher">
        <div class="auth-switcher__pill"></div>
        <button type="button" class="auth-switcher__btn auth-switcher__btn--active" data-tab="login">Login</button>
        <button type="button" class="auth-switcher__btn" data-tab="register">Register</button>
      </div>

      <div class="auth-dialog__container">
        <div class="auth-dialog__view auth-dialog__view--active" id="auth-view-login">
          ${aa()}
        </div>
        <div class="auth-dialog__view" id="auth-view-register">
          ${ta()}
        </div>
      </div>
    </div>
  `;const a=s=>{const r=e.querySelectorAll(".auth-switcher__btn"),i=e.querySelector(".auth-switcher__pill"),n=e.querySelector("#auth-view-login"),l=e.querySelector("#auth-view-register");if(!n||!l||!i)return;s==="register"?i.classList.add("auth-switcher__pill--register"):i.classList.remove("auth-switcher__pill--register");for(const m of r)m.dataset.tab===s?m.classList.add("auth-switcher__btn--active"):m.classList.remove("auth-switcher__btn--active");const p=s==="login"?l:n,c=s==="login"?n:l;c.classList.contains("auth-dialog__view--active")||(p.classList.add("auth-dialog__view--fade-out"),setTimeout(()=>{p.classList.remove("auth-dialog__view--active","auth-dialog__view--fade-out"),c.classList.add("auth-dialog__view--active","auth-dialog__view--fade-in"),setTimeout(()=>{c.classList.remove("auth-dialog__view--fade-in")},200)},150))},t=e.querySelectorAll(".auth-switcher__btn");for(const s of t)s.addEventListener("click",()=>{const r=s.dataset.tab;r&&a(r)});e.addEventListener("click",s=>{const r=s.target;if(r.classList.contains("auth-form__switch-inline")){const i=r.dataset.target;i&&a(i)}});const o=e.querySelector(".auth-dialog__close");return o==null||o.addEventListener("click",$),e.addEventListener("click",s=>{s.target===e&&$()}),D=e,e},sa=(e="login")=>{if(!D)return;D.classList.remove("auth-backdrop--hidden"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",Z);const a=D.querySelector(`.auth-switcher__btn[data-tab="${e}"]`);a==null||a.click()},$=()=>{!D||D.classList.contains("auth-backdrop--hidden")||(D.classList.add("auth-backdrop--closing"),setTimeout(()=>{D&&(D.classList.remove("auth-backdrop--closing"),D.classList.add("auth-backdrop--hidden")),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",Z)},250))},J=(e={})=>{const{activePage:a="home",onNavigate:t}=e,o=document.createElement("header");o.className="header";const s=document.createElement("div");s.className="header__container";const r=(_,A)=>{_.preventDefault(),t&&t(A)},i=document.createElement("a");i.href="/",i.className="header__logo",i.addEventListener("click",_=>r(_,"home"));const n=document.createElement("img");n.src=X,n.alt="MiniGames Logo",n.className="header__logo-icon";const l=document.createElement("span");l.className="header__logo-text",l.textContent="MiniGames",i.append(n,l);const p=document.createElement("nav");p.className="header__nav";const c=document.createElement("ul");c.className="header__nav-list";const m=[{name:"Home",page:"home"},{name:"Library",page:"library"},{name:"Tournaments",page:"home"},{name:"Community",page:"home"}];for(const _ of m){const A=document.createElement("li");A.className="header__nav-item";const S=document.createElement("a");S.href="#";const M=_.name.toLowerCase()===a;S.className=`header__nav-link${M?" header__nav-link--active":""}`,S.textContent=_.name,S.addEventListener("click",G=>r(G,_.page)),A.append(S),c.append(A)}p.append(c);const d=document.createElement("div");d.className="header__actions";const u=document.createElement("button");u.type="button",u.className="header__btn header__btn--login",u.textContent="Log In";const h=document.createElement("button");h.type="button",h.className="header__btn header__btn--signup",h.textContent="Sign Up",d.append(u,h);const v=document.createElement("button");v.type="button",v.className="header__burger",v.setAttribute("aria-label","Open navigation menu");for(let _=0;_<3;_+=1){const A=document.createElement("span");A.className="header__burger-line",v.append(A)}const w=document.createElement("div");w.className="header__right-controls",w.append(d,v);const f=document.createElement("div");f.className="header__mobile-overlay";const N=document.createElement("div");N.className="header__mobile-top";const g=i.cloneNode(!0);g.addEventListener("click",_=>{b(),r(_,"home")});const y=document.createElement("button");y.type="button",y.className="header__mobile-close",y.setAttribute("aria-label","Close menu");const E=document.createElement("span");E.className="header__mobile-close-icon",E.textContent="✕",y.append(E),N.append(g,y);const j=document.createElement("ul");j.className="header__nav-list";for(const _ of m){const A=document.createElement("li");A.className="header__nav-item";const S=document.createElement("a");S.href="#";const M=_.name.toLowerCase()===a;S.className=`header__nav-link${M?" header__nav-link--active":""}`,S.textContent=_.name,S.addEventListener("click",G=>{b(),r(G,_.page)}),A.append(S),j.append(A)}const C=document.createElement("div");C.className="header__mobile-actions";const x=u.cloneNode(!0),z=h.cloneNode(!0);C.append(x,z),f.append(N,j,C);const b=()=>{f.classList.remove("header__mobile-overlay--active"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",B)},k=()=>{f.classList.add("header__mobile-overlay--active"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",B)},B=_=>{_.key==="Escape"&&b()};v.addEventListener("click",k),y.addEventListener("click",b);const L=()=>{b(),sa()};return u.addEventListener("click",L),x.addEventListener("click",L),h.addEventListener("click",L),z.addEventListener("click",L),s.append(i,p,w),o.append(s,f),o},oa=()=>{const e=document.createElement("section");e.className="hero";const a=document.createElement("img"),t="images/hero-bg.webp".replace(/^\//,"");a.src=`/minigames/${t}`,a.alt="",a.className="hero__bg";const o=document.createElement("div");o.className="hero__container";const s=document.createElement("div");s.className="hero__card";const r=document.createElement("h1");r.className="hero__title",r.textContent="Take a Short Break & Have Fun";const i=document.createElement("p");i.className="hero__description",i.textContent="Discover hundreds of curated casual mini-games. Play instantly in your browser — puzzle, match 3, farm, and board classics.";const n=document.createElement("button");return n.type="button",n.className="hero__btn",n.textContent="Browse Library",s.append(r,i,n),o.append(s),e.append(a,o),e},ra=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toString(),ia=e=>{const a=document.createElement("div");a.className="game-card";const t=document.createElement("img"),o=e.cardImage.replace(/^\//,"");t.src=`/minigames/${o}`,t.alt=e.name,t.className="game-card__image",t.addEventListener("error",()=>{t.src="https://placehold.co/300x380/1e1e1e/ffffff?text=No+Image"});const s=document.createElement("div");s.className="game-card__overlay";const r=document.createElement("h3");r.className="game-card__title",r.textContent=e.name;const i=document.createElement("div");i.className="game-card__meta";const n=document.createElement("div");n.className="game-card__stat game-card__stat--rating",n.innerHTML=`
    <svg class="game-card__icon game-card__icon--star" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FFD02B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
    <span>${e.rating.toFixed(1)}</span>
  `;const l=document.createElement("div");return l.className="game-card__stat game-card__stat--likes",l.innerHTML=`
    <svg class="game-card__icon game-card__icon--heart" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FF4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
    <span>${ra(e.likesCount)}</span>
  `,i.append(n,l),s.append(r,i),a.append(t,s),a},ee="/minigames/assets/camper-van-make-it-home-card-61XprhL7.jpg",ae="/minigames/assets/camper-van-make-it-home-hero-pwfm3znw.jpg",te="/minigames/assets/cast-n-chill-card-CRLWRuq0.jpg",se="/minigames/assets/cast-n-chill-hero-8veDqaQs.jpg",oe="/minigames/assets/cat-chess-card-BkETDAfr.jpg",re="/minigames/assets/cat-chess-hero-BHbuGtch.jpg",ie="/minigames/assets/cat-mail-co-card-B0GMTC_n.jpg",ne="/minigames/assets/cat-mail-co-hero-DbYEE9Th.jpg",le="/minigames/assets/cozy-solitaire-card-CSczvhq9.jpg",ce="/minigames/assets/cozy-solitaire-hero-BRbaEfNe.jpg",de="/minigames/assets/cozy-sudoku-card-CyAOOis5.jpg",me="/minigames/assets/cozy-sudoku-hero-C3SdMet6.jpg",ge="/minigames/assets/grimshire-card-D1QcLtZT.jpg",pe="/minigames/assets/grimshire-hero-T4rzibu3.jpg",ue="/minigames/assets/heartopia-card-DRd_6OVG.jpg",_e="/minigames/assets/heartopia-hero-CMAZ-f6E.jpg",he="/minigames/assets/hero-bg-BjRnG4tW.webp",be="/minigames/assets/islanders-new-shores-card-DljrohUL.jpg",ve="/minigames/assets/islanders-new-shores-hero-De9RnJZj.jpg",fe="/minigames/assets/koroneko-card-BXvG49TG.jpg",ye="/minigames/assets/koroneko-hero-VMaYEKgL.jpg",ke="/minigames/assets/leaf-it-alone-card-CGXXB8uI.jpg",we="/minigames/assets/leaf-it-alone-hero-CV390ovr.jpg",Ee="/minigames/assets/leafy-corner-card-CAdJaXNI.jpg",Ne="/minigames/assets/leafy-corner-hero-CZzWvrUG.jpg",je="/minigames/assets/little-corners-card-BzTzTJLT.jpg",Ce="/minigames/assets/little-corners-hero-B0OQFWAJ.jpg",Le="/minigames/assets/organized-inside-card-CyWIV6Rk.jpg",xe="/minigames/assets/organized-inside-hero-FV62oWy5.jpg",Ae="/minigames/assets/palia-card-8xT8yeZQ.jpg",ze="/minigames/assets/palia-hero-CCZCUrCw.jpg",Se="/minigames/assets/shelve-the-potions-card-DTY_N_zq.jpg",De="/minigames/assets/shelve-the-potions-hero-Cm4UQOCB.jpg",Te="/minigames/assets/tailside-cozy-cafe-sim-card-C7B0rePC.jpg",Be="/minigames/assets/tailside-cozy-cafe-sim-hero-CxkZW35G.jpg",Me="/minigames/assets/the-wild-at-heart-card-DfO3UIaM.jpg",Ge="/minigames/assets/the-wild-at-heart-hero-C48oeLv2.jpg",Pe="/minigames/assets/tiny-glade-card-CS2XLEzK.jpg",$e="/minigames/assets/tiny-glade-hero-u35s1BKW.jpg",Ie="/minigames/assets/tukoni-forest-keepers-card-CkPF-Hda.jpg",Fe="/minigames/assets/tukoni-forest-keepers-hero-D-UQTA7d.jpg",Re="/minigames/assets/vacation-cafe-simulator-card-Bzcyczbo.jpg",He="/minigames/assets/vacation-cafe-simulator-hero-DHuU6sOY.jpg",Ue="/minigames/assets/whisper-of-the-house-card-BE7Dq45b.jpg",We="/minigames/assets/whisper-of-the-house-hero-ciSQ2ovS.jpg",qe="/minigames/assets/winter-burrow-card-KbzzF82b.jpg",Oe="/minigames/assets/winter-burrow-hero-oJn7juUA.jpg",Ye="/minigames/assets/wytchwood-card-XvNmJ299.jpg",Ke="/minigames/assets/wytchwood-hero-DzdPASTa.jpg",na={name:"Tukoni: Forest Keepers",heroImage:"/assets/images/games/tukoni-forest-keepers-hero.jpg",rating:4.9,likesCount:31200,isLikedByCurrentUser:!1,fullDescription:"Tukoni: Forest Keepers — a cozy hand-drawn puzzle-adventure. You are Traveller, a little forest spirit on an important mission. Wander storybook meadows, visit mushroom villages, meet adorable inhabitants, solve gentle hand-crafted puzzles, brew herbal teas and help the Tukoni forest prepare peacefully for the coming winter.",specs:{genre:"Puzzle",players:"Solo",duration:"40-90 min",price:"Free"},topRecords:[{position:1,playerName:"ForestSpirit",score:356700,achievedAt:"2026-08-28T14:30:00Z"},{position:2,playerName:"TeaBrewer",score:332400,achievedAt:"2026-08-25T09:12:00Z"},{position:3,playerName:"HerbalistPath",score:308900,achievedAt:"2026-08-23T18:45:00Z"}]},I={data:na},la=[{commentId:"c5d9f2a1-7c3b-4e8f-9a0d-000000000001",authorName:"ForestDweller",text:"The hand-drawn art is absolutely magical 🍄 Every location feels like a page from a children's storybook. The mushroom village made me cry happy tears!",likesCount:12,isLikedByCurrentUser:!1,createdAt:"2026-08-30T07:00:00Z"},{commentId:"c5d9f2a1-7c3b-4e8f-9a0d-000000000002",authorName:"HerbalTeaLover",text:"Perfect cozy evening game — brew a cup of chamomile, wrap in a blanket and help the little Tukoni prepare for winter. The puzzles are gentle but satisfying.",likesCount:5,isLikedByCurrentUser:!1,createdAt:"2026-08-29T15:30:00Z"},{commentId:"c5d9f2a1-7c3b-4e8f-9a0d-000000000003",authorName:"CottageCoreMia",text:"I want to live inside this game forever 🌿 The NPCs are so charming, the tea recipes are real, and the atmosphere is pure warmth and calm.",likesCount:8,isLikedByCurrentUser:!1,createdAt:"2026-08-27T20:10:00Z"}],ca={totalComments:3,returnedCount:3,sort:"newest"},F={data:la,meta:ca},R=Object.assign({"/public/images/games/camper-van-make-it-home-card.jpg":ee,"/public/images/games/camper-van-make-it-home-hero.jpg":ae,"/public/images/games/cast-n-chill-card.jpg":te,"/public/images/games/cast-n-chill-hero.jpg":se,"/public/images/games/cat-chess-card.jpg":oe,"/public/images/games/cat-chess-hero.jpg":re,"/public/images/games/cat-mail-co-card.jpg":ie,"/public/images/games/cat-mail-co-hero.jpg":ne,"/public/images/games/cozy-solitaire-card.jpg":le,"/public/images/games/cozy-solitaire-hero.jpg":ce,"/public/images/games/cozy-sudoku-card.jpg":de,"/public/images/games/cozy-sudoku-hero.jpg":me,"/public/images/games/grimshire-card.jpg":ge,"/public/images/games/grimshire-hero.jpg":pe,"/public/images/games/heartopia-card.jpg":ue,"/public/images/games/heartopia-hero.jpg":_e,"/public/images/games/hero-bg.webp":he,"/public/images/games/islanders-new-shores-card.jpg":be,"/public/images/games/islanders-new-shores-hero.jpg":ve,"/public/images/games/koroneko-card.jpg":fe,"/public/images/games/koroneko-hero.jpg":ye,"/public/images/games/leaf-it-alone-card.jpg":ke,"/public/images/games/leaf-it-alone-hero.jpg":we,"/public/images/games/leafy-corner-card.jpg":Ee,"/public/images/games/leafy-corner-hero.jpg":Ne,"/public/images/games/little-corners-card.jpg":je,"/public/images/games/little-corners-hero.jpg":Ce,"/public/images/games/organized-inside-card.jpg":Le,"/public/images/games/organized-inside-hero.jpg":xe,"/public/images/games/palia-card.jpg":Ae,"/public/images/games/palia-hero.jpg":ze,"/public/images/games/shelve-the-potions-card.jpg":Se,"/public/images/games/shelve-the-potions-hero.jpg":De,"/public/images/games/tailside-cozy-cafe-sim-card.jpg":Te,"/public/images/games/tailside-cozy-cafe-sim-hero.jpg":Be,"/public/images/games/the-wild-at-heart-card.jpg":Me,"/public/images/games/the-wild-at-heart-hero.jpg":Ge,"/public/images/games/tiny-glade-card.jpg":Pe,"/public/images/games/tiny-glade-hero.jpg":$e,"/public/images/games/tukoni-forest-keepers-card.jpg":Ie,"/public/images/games/tukoni-forest-keepers-hero.jpg":Fe,"/public/images/games/vacation-cafe-simulator-card.jpg":Re,"/public/images/games/vacation-cafe-simulator-hero.jpg":He,"/public/images/games/whisper-of-the-house-card.jpg":Ue,"/public/images/games/whisper-of-the-house-hero.jpg":We,"/public/images/games/winter-burrow-card.jpg":qe,"/public/images/games/winter-burrow-hero.jpg":Oe,"/public/images/games/wytchwood-card.jpg":Ye,"/public/images/games/wytchwood-hero.jpg":Ke}),H=Object.assign({}),da=e=>{if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const a=e.split("/").pop();if(!a)return e;const t=`/public/images/games/${a}`;if(R[t])return R[t];const o=`../assets/images/games/${a}`;return H[o]?H[o]:e},ma=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toString(),ga=e=>e.toLocaleString("en-US")+" pts",pa=e=>e===1?"🥇":e===2?"🥈":e===3?"🥉":"",U=e=>{if(!e)return"recently";const a=new Date(e);if(Number.isNaN(a.getTime()))return e;const o=Math.floor((new Date("2026-08-30T10:00:00Z").getTime()-a.getTime())/1e3);if(o<3600){const r=Math.max(1,Math.floor(o/60));return`${r} ${r===1?"minute":"minutes"} ago`}if(o<86400){const r=Math.floor(o/3600);return`${r} ${r===1?"hour":"hours"} ago`}const s=Math.floor(o/86400);return`${s} ${s===1?"day":"days"} ago`},ua=e=>e.startsWith("F")||e.toLowerCase().includes("forest")?"#bae6fd":e.startsWith("H")||e.toLowerCase().includes("herbal")?"#fef08a":e.startsWith("C")||e.toLowerCase().includes("cottage")?"#e2e8f0":"#e0f2fe",_a=()=>{var v,w,f,N;const e=I.data||I,a=F.data||F||[],t=document.createElement("div");t.className="game-dialog-backdrop";const o=document.createElement("div");o.className="game-dialog";const s=(e.topRecords||[]).map(g=>`
      <li class="game-dialog__record-item">
        <span class="game-dialog__record-user">${pa(g.position)} ${g.playerName}</span>
        <span class="game-dialog__record-score">${ga(g.score)}</span>
        <span class="game-dialog__record-date">${U(g.achievedAt)}</span>
      </li>
    `).join(""),r=a.map(g=>{const y=g.author||g.authorName||g.userName||"Anonymous",E=g.text||g.content||"",j=g.likesCount??g.likes??0,C=g.createdAt||g.timestamp,x=U(C),z=g.avatarBg||ua(y),b=y.charAt(0).toUpperCase(),k=!!(g.isLikedByCurrentUser??g.isLiked??g.liked);return`
        <li class="game-dialog__comment-item">
          <article class="game-dialog__comment">
            <div class="game-dialog__comment-header">
              <div class="game-dialog__comment-author">
                <div class="game-dialog__avatar" style="background-color: ${z};">
                  ${b}
                </div>
                <span class="game-dialog__author-name">${y}</span>
              </div>
              <span class="game-dialog__comment-time">${x}</span>
            </div>
            <p class="game-dialog__comment-text">${E}</p>
            <button type="button" class="game-dialog__like-btn${k?" game-dialog__like-btn--active":""}">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="${k?"#ff4b4b":"#18152e"}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span>${j}</span>
            </button>
          </article>
        </li>
      `}).join("");o.innerHTML=`
    <header class="game-dialog__hero">
      <img 
        src="${da(e.heroImage)}" 
        alt="${e.name} Cover" 
        class="game-dialog__hero-img"
      />
      <button type="button" class="game-dialog__zoom-btn" aria-label="Zoom image">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
      <button type="button" class="game-dialog__close" aria-label="Close dialog">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </header>

    <div class="game-dialog__body">
      <section class="game-dialog__info">
        <div class="game-dialog__header">
          <h2 class="game-dialog__title">${e.name}</h2>
          <div class="game-dialog__stats">
            <div class="game-dialog__stat">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FFD02B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>${e.rating?e.rating.toFixed(1):"0.0"}</span>
            </div>
            <div class="game-dialog__stat">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FF4B4B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span>${ma(e.likesCount||0)}</span>
            </div>
          </div>
        </div>

        <p class="game-dialog__description">
          ${e.fullDescription}
        </p>

        <div class="game-dialog__meta-grid">
          <div class="game-dialog__meta-item">
            <span class="game-dialog__meta-label">Genre</span>
            <span class="game-dialog__meta-value">${((v=e.specs)==null?void 0:v.genre)||""}</span>
          </div>
          <div class="game-dialog__meta-item">
            <span class="game-dialog__meta-label">Players</span>
            <span class="game-dialog__meta-value">${((w=e.specs)==null?void 0:w.players)||""}</span>
          </div>
          <div class="game-dialog__meta-item">
            <span class="game-dialog__meta-label">Duration</span>
            <span class="game-dialog__meta-value">${((f=e.specs)==null?void 0:f.duration)||""}</span>
          </div>
          <div class="game-dialog__meta-item">
            <span class="game-dialog__meta-label">Price</span>
            <span class="game-dialog__meta-value">${((N=e.specs)==null?void 0:N.price)||""}</span>
          </div>
        </div>

        <div class="game-dialog__actions">
          <button type="button" class="game-dialog__play-btn">Play Now</button>
          <button type="button" class="game-dialog__fav-btn${e.isLikedByCurrentUser?" game-dialog__fav-btn--active":""}">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span>Add to Favorites</span>
          </button>
        </div>
      </section>

      <section class="game-dialog__section game-dialog__records-section">
        <h3 class="game-dialog__section-title">🏆 Top Records</h3>
        <ul class="game-dialog__records-list">
          ${s}
        </ul>
      </section>

      <section class="game-dialog__section game-dialog__comments-section">
        <h3 class="game-dialog__section-title">Comments (${a.length})</h3>
        
        <form class="game-dialog__comment-form">
          <div class="game-dialog__avatar game-dialog__avatar--user">U</div>
          <textarea 
            class="game-dialog__textarea" 
            placeholder="Write a comment..." 
            rows="1"
            aria-label="Write a comment"
          ></textarea>
          <button type="submit" class="game-dialog__send-btn" aria-label="Send comment">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>

        <ul class="game-dialog__comments-list">
          ${r}
        </ul>
      </section>
    </div>
  `,t.append(o);const i=o.querySelector(".game-dialog__close"),n=o.querySelector(".game-dialog__play-btn"),l=o.querySelector(".game-dialog__fav-btn"),p=o.querySelectorAll(".game-dialog__like-btn"),c=o.querySelector(".game-dialog__comment-form"),m=o.querySelector(".game-dialog__textarea");let d=!1;const u=()=>{d||(d=!0,t.classList.add("game-dialog-backdrop--closing"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",h),setTimeout(()=>{t.remove()},250))},h=g=>{g.key==="Escape"&&u()};i==null||i.addEventListener("click",u),t.addEventListener("click",g=>{g.target===t&&u()}),document.addEventListener("keydown",h),n==null||n.addEventListener("click",g=>{g.preventDefault()}),l==null||l.addEventListener("click",()=>{l.classList.toggle("game-dialog__fav-btn--active")}),m&&m.addEventListener("input",()=>{m.style.height="auto";const g=Math.min(m.scrollHeight,88);m.style.height=`${g}px`}),c==null||c.addEventListener("submit",g=>{g.preventDefault()});for(const g of p)g.addEventListener("click",()=>{const y=g.classList.toggle("game-dialog__like-btn--active"),E=g.querySelector("svg");E&&(E.setAttribute("fill","none"),E.setAttribute("stroke",y?"#ff4b4b":"#18152e"))});return t},Ve=()=>{const e=document.querySelector(".game-dialog-backdrop");e&&e.remove();const a=_a();document.body.append(a),document.body.classList.add("no-scroll")},ha=e=>{const a=document.createElement("section");a.className="carousel-section";const t=document.createElement("header");t.className="carousel-section__header";const o=document.createElement("div");o.className="carousel-section__title-wrapper";const s=document.createElement("span");s.className="carousel-section__badge";const r=document.createElement("h2");r.className="carousel-section__title",r.textContent="New Games",o.append(s,r);const i=document.createElement("nav");i.className="carousel-section__nav",i.setAttribute("aria-label","Carousel Navigation");const n=document.createElement("button");n.type="button",n.className="carousel-section__btn carousel-section__btn--prev",n.setAttribute("aria-label","Previous slide"),n.innerHTML=`
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  `;const l=document.createElement("button");l.type="button",l.className="carousel-section__btn carousel-section__btn--next",l.setAttribute("aria-label","Next slide"),l.innerHTML=`
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  `,i.append(n,l),t.append(o,i);const p=e.filter(b=>b.featured===!0).slice(0,9),c=p.length>=9?p:e.slice(0,9),m=document.createElement("div");m.className="carousel-section__track-container";const d=document.createElement("div");d.className="carousel-section__track";const u=[];for(const b of c){const k=document.createElement("div");k.className="carousel-section__slide";const B=ia(b);k.append(B),k.addEventListener("click",L=>{N||(L.preventDefault(),Ve())}),d.append(k),u.push(k)}m.append(d),a.append(t,m);let h=0,v,w=!1,f=0,N=!1;const g=()=>{const b=window.innerWidth<=1024,k=u.length;for(const[B,L]of u.entries()){L.classList.remove("carousel-section__slide--wide","carousel-section__slide--standard","carousel-section__slide--compact","carousel-section__slide--hidden");let _=(B-h)%k;_>k/2&&(_-=k),_<-k/2&&(_+=k),L.style.order=`${_+Math.floor(k/2)}`,_===0?L.classList.add("carousel-section__slide--wide"):Math.abs(_)===1?L.classList.add(b?"carousel-section__slide--compact":"carousel-section__slide--standard"):!b&&Math.abs(_)===2?L.classList.add("carousel-section__slide--compact"):L.classList.add("carousel-section__slide--hidden")}},y=()=>{const b=u.length;h=(h+1)%b,g()},E=()=>{const b=u.length;h=(h-1+b)%b,g()},j=()=>{v!==void 0&&(clearInterval(v),v=void 0)},C=()=>{j(),v=window.setInterval(y,4e3)},x=()=>{j(),C()};n.addEventListener("click",()=>{E(),x()}),l.addEventListener("click",()=>{y(),x()}),m.addEventListener("pointerdown",b=>{w=!0,N=!1,f=b.clientX,j()}),m.addEventListener("pointermove",b=>{w&&Math.abs(b.clientX-f)>5&&(N=!0)});const z=b=>{if(!w)return;w=!1;const k=b.clientX-f;N?(k<-40?y():k>40?E():g(),x()):C()};return m.addEventListener("pointerup",z),m.addEventListener("pointercancel",z),window.addEventListener("resize",g),g(),C(),a},ba=e=>{const a=e.match(/[A-Z]/g);return a&&a.length>=2?a.slice(0,2).join(""):e.slice(0,2).toUpperCase()},va=e=>e.toLocaleString("en-US"),fa=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toString(),ya=e=>{const a=document.createElement("section");a.className="leaderboard-section";const t=document.createElement("header");t.className="leaderboard-section__header";const o=document.createElement("div");o.className="leaderboard-section__title-wrapper";const s=document.createElement("span");s.className="leaderboard-section__badge";const r=document.createElement("h2");r.className="leaderboard-section__title",r.innerHTML=`
    <span class="leaderboard-section__title-full">Top Players This Week</span>
    <span class="leaderboard-section__title-short">Top Players</span>
  `,o.append(s,r),t.append(o);const i=document.createElement("div");i.className="leaderboard-section__table-wrapper";const n=document.createElement("table");n.className="leaderboard-table";const l=document.createElement("thead");l.className="leaderboard-table__head";const p=document.createElement("tr");p.className="leaderboard-table__row leaderboard-table__row--head";const c=[{html:"RANK",classModifier:"rank"},{html:"PLAYER",classModifier:"player"},{html:'<span class="leaderboard-table__head-full">GAMES PLAYED</span><span class="leaderboard-table__head-short">GAMES</span>',classModifier:"games"},{html:'<span class="leaderboard-table__head-full">TOTAL SCORE</span><span class="leaderboard-table__head-short">SCORE</span>',classModifier:"score"},{html:"STREAK",classModifier:"streak"},{html:"FAVORITE GAME",classModifier:"favorite"}];for(const d of c){const u=document.createElement("th");u.className=`leaderboard-table__th leaderboard-table__th--${d.classModifier}`,u.innerHTML=d.html,p.append(u)}l.append(p);const m=document.createElement("tbody");m.className="leaderboard-table__body";for(const d of e){const u=document.createElement("tr");u.className="leaderboard-table__row";const h=document.createElement("td");h.className="leaderboard-table__td leaderboard-table__td--rank";const v=document.createElement("span");v.className=`leaderboard-table__rank-text${d.rank===1?" leaderboard-table__rank-text--top":""}`,v.textContent=`#${d.rank}`,h.append(v);const w=document.createElement("td");w.className="leaderboard-table__td leaderboard-table__td--player";const f=document.createElement("div");f.className="leaderboard-table__player-cell";const N=document.createElement("div");N.className=`leaderboard-table__avatar leaderboard-table__avatar--${d.rank}`,N.textContent=ba(d.playerName);const g=document.createElement("span");g.className="leaderboard-table__player-name",g.textContent=d.playerName,f.append(N,g),w.append(f);const y=document.createElement("td");y.className="leaderboard-table__td leaderboard-table__td--games",y.textContent=d.gamesPlayed.toString();const E=document.createElement("td");E.className="leaderboard-table__td leaderboard-table__td--score",E.innerHTML=`
      <span class="leaderboard-table__score-full">${va(d.totalScore)}</span>
      <span class="leaderboard-table__score-short">${fa(d.totalScore)}</span>
    `;const j=document.createElement("td");j.className="leaderboard-table__td leaderboard-table__td--streak";const C=document.createElement("div");C.className="leaderboard-table__streak-cell",C.innerHTML=`
      <span class="leaderboard-table__fire-icon">🔥</span>
      <span class="leaderboard-table__streak-full">${d.streakDays} days</span>
      <span class="leaderboard-table__streak-short">${d.streakDays}d</span>
    `,j.append(C);const x=document.createElement("td");x.className="leaderboard-table__td leaderboard-table__td--favorite";const z=document.createElement("span");z.className="leaderboard-table__game-tag",z.textContent=d.favoriteGameName,x.append(z),u.append(h,w,y,E,j,x),m.append(u)}return n.append(l,m),i.append(n),a.append(t,i),a},ka="/minigames/assets/ilustration-side-DsQZrXDY.webp",wa=()=>{const e=document.createElement("section");e.className="game-developers-section";const a=document.createElement("div");a.className="game-developers-section__container";const t=document.createElement("div");t.className="game-developers-section__illustration-wrapper";const o=document.createElement("img");o.className="game-developers-section__illustration",o.src=ka,o.alt="Game developer workspace illustration",t.append(o);const s=document.createElement("div");s.className="game-developers-section__card";const r=document.createElement("h2");r.className="game-developers-section__title",r.textContent="Are You a Game Developer?";const i=document.createElement("p");i.className="game-developers-section__description",i.textContent="Want to see your game on MiniGames? We're always looking for fun, engaging mini games to add to our platform. Submit your game and reach thousands of players!";const n=document.createElement("button");n.type="button",n.className="game-developers-section__button";const l=document.createElement("span");l.className="game-developers-section__button-icon",l.innerHTML=`
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      <polyline points="7 9 12 4 17 9" />
      <line x1="12" y1="4" x2="12" y2="16" />
    </svg>
  `;const p=document.createElement("span");p.textContent="Submit Form",n.append(l,p);const c=document.createElement("p");return c.className="game-developers-section__contact",c.innerHTML='or contact us at <a href="mailto:developers@minigames.com">developers@minigames.com</a>',s.append(r,i,n,c),a.append(t,s),e.append(a),e},Xe=(e={})=>{const{onNavigate:a}=e,t=document.createElement("footer");t.className="footer",t.innerHTML=`
    <div class="footer__container">
      <div class="footer__top">
        <!-- Brand Section -->
        <div class="footer__brand">
          <div class="footer__logo">
            <img class="footer__logo-img" src="${X}" alt="MiniGames Logo" />
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
              <li><a href="#" class="footer__link" data-page="home">Home</a></li>
              <li><a href="#" class="footer__link" data-page="library">Library</a></li>
              <li><a href="#" class="footer__link" data-page="home">Categories</a></li>
              <li><a href="#" class="footer__link" data-page="home">Tournaments</a></li>
            </ul>
          </div>

          <div class="footer__column">
            <h3 class="footer__title">Company</h3>
            <ul class="footer__list">
              <li><a href="#" class="footer__link" data-page="home">About Us</a></li>
              <li><a href="#" class="footer__link" data-page="home">Contact</a></li>
              <li><a href="#" class="footer__link" data-page="home">Privacy Policy</a></li>
              <li><a href="#" class="footer__link" data-page="home">Terms of Service</a></li>
            </ul>
          </div>

          <div class="footer__column footer__column--community">
            <h3 class="footer__title">Community</h3>
            <div class="footer__socials">
              <a href="#" class="footer__social-btn" aria-label="Share" data-page="home">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </a>
              <a href="#" class="footer__social-btn" aria-label="Chat" data-page="home">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  <line x1="8" y1="9" x2="16" y2="9"></line>
                  <line x1="8" y1="13" x2="14" y2="13"></line>
                </svg>
              </a>
              <a href="#" class="footer__social-btn" aria-label="RSS" data-page="home">
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
  `;const o=t.querySelectorAll("[data-page]");for(const s of o)s.addEventListener("click",r=>{r.preventDefault();const i=s.dataset.page||"home";a&&a(i)});return t},Ea=[{slug:"vacation-cafe-simulator",name:"Vacation Cafe Simulator",category:"strategy",price:"Free",shortDescription:"Cozy Italian Vacation Cafe No timers, No stress cook traditional dishes upgrade and customize 🏠 just drink Prosecco 🥂 relax and grow your dream cafe ✨",rating:4.8,likesCount:28750,cardImage:"/images/games/vacation-cafe-simulator-card.jpg",featured:!0},{slug:"winter-burrow",name:"Winter Burrow",category:"farm",price:"Free",shortDescription:"A cozy woodland survival game about a mouse restoring their childhood burrow. Explore, gather resources, craft, knit warm sweaters, bake pies and meet the locals.",rating:4.9,likesCount:32400,cardImage:"/images/games/winter-burrow-card.jpg",featured:!0},{slug:"shelve-the-potions",name:"Shelve the Potions!",category:"puzzle",price:"Free",shortDescription:"Organize 2000+ potions on shelves after the witch's cats have knocked them over, using clues around an enchanted cellar. Learn strange symbols and decipher cryptic notes.",rating:4.7,likesCount:21300,cardImage:"/images/games/shelve-the-potions-card.jpg",featured:!0},{slug:"heartopia",name:"Heartopia",category:"strategy",price:"$1.99",shortDescription:"A multiplayer life simulation game crafted for creativity, freedom, and peace. Build your dream home, explore hobbies, and forge warm connections with friends in a cozy town.",rating:4.6,likesCount:46800,cardImage:"/images/games/heartopia-card.jpg",featured:!0},{slug:"palia",name:"Palia",category:"strategy",price:"Free",shortDescription:"A free-to-play fantasy life sim adventure where you can craft, explore, and create the life and home of your dreams in a vibrant, heartwarming world.",rating:4.8,likesCount:89500,cardImage:"/images/games/palia-card.jpg",featured:!0},{slug:"cat-mail-co",name:"Cat Mail Co.",category:"puzzle",price:"Free",shortDescription:"Run a cozy cat post office. Sort and deliver parcels from the daily boat. At night, the moon reveals hidden truths about packages. Clear a strange backlog and unlock new destinations.",rating:4.9,likesCount:38200,cardImage:"/images/games/cat-mail-co-card.jpg",featured:!0},{slug:"leaf-it-alone",name:"Leaf it Alone",category:"arcade",price:"Free",shortDescription:"Finally, it's that time of the year to clean up this leafy mess. Derust your raking skills and don't waste a second — there's a whole lawn waiting!",rating:4.4,likesCount:12600,cardImage:"/images/games/leaf-it-alone-card.jpg",featured:!1},{slug:"leafy-corner",name:"Leafy Corner",category:"farm",price:"$1.99",shortDescription:"Run a cute little plant shop. Grow, sell, and care for real-life plants, help customers find their dream plants, complete orders, and customize your cozy shop.",rating:4.7,likesCount:19800,cardImage:"/images/games/leafy-corner-card.jpg",featured:!1},{slug:"grimshire",name:"Grimshire",category:"strategy",price:"Free",shortDescription:"A deadly plague threatens the village of Grimshire. Manage farmland, forage wilds, stop harvest rot and keep the cellar full. Can you help the community survive?",rating:4.6,likesCount:15700,cardImage:"/images/games/grimshire-card.jpg",featured:!1},{slug:"tiny-glade",name:"Tiny Glade",category:"arcade",price:"$3.99",shortDescription:"A small diorama builder where you doodle whimsical castles, cozy cottages & romantic ruins. No management, combat or goals — just lovable dioramas.",rating:4.9,likesCount:67300,cardImage:"/images/games/tiny-glade-card.jpg",featured:!0},{slug:"whisper-of-the-house",name:"Whisper of the House",category:"puzzle",price:"Free",shortDescription:"A cozy organizing & decorating game. Help townspeople move, organize, and clean their spaces. Your gentle touch may change their lives and uncover hidden stories.",rating:4.8,likesCount:24900,cardImage:"/images/games/whisper-of-the-house-card.jpg",featured:!1},{slug:"tukoni-forest-keepers",name:"Tukoni: Forest Keepers",category:"puzzle",price:"Free",shortDescription:"A cute cozy puzzle adventure. Play as a forest spirit exploring hand-drawn magical locations, meet charming characters, solve puzzles, collect herbs and tea recipes.",rating:4.9,likesCount:31200,cardImage:"/images/games/tukoni-forest-keepers-card.jpg",featured:!1},{slug:"cat-chess",name:"Cat Chess",category:"strategy",price:"Free",shortDescription:"Play the ancient and thrilling game of Chess but with... cats! Lead your furry friends to the Purrfect battle of brains and whiskers!",rating:4.6,likesCount:17400,cardImage:"/images/games/cat-chess-card.jpg",featured:!1},{slug:"cast-n-chill",name:"Cast n Chill",category:"arcade",price:"Free",shortDescription:"A relaxing fishing game where you explore serene lakes, rivers, and oceans. Catch rare fish, upgrade your gear and reel in legendary catches - all with your loyal companion.",rating:4.7,likesCount:26800,cardImage:"/images/games/cast-n-chill-card.jpg",featured:!1},{slug:"little-corners",name:"Little Corners",category:"puzzle",price:"Free",shortDescription:"Peel, place, and arrange stickers across tiny windows into different worlds. Relax and unwind to lofi beats, collect unique stickers and share cozy creations.",rating:4.8,likesCount:41500,cardImage:"/images/games/little-corners-card.jpg",featured:!1},{slug:"tailside-cozy-cafe-sim",name:"Tailside: Cozy Cafe Sim",category:"strategy",price:"Free",shortDescription:"Run your own cozy café in Tailside! Brew coffee, decorate your café, follow small stories in the daily newspaper. Unlock new items, skills, villagers, and creature visitors.",rating:4.8,likesCount:35600,cardImage:"/images/games/tailside-cozy-cafe-sim-card.jpg",featured:!0},{slug:"islanders-new-shores",name:"ISLANDERS: New Shores",category:"strategy",price:"Free",shortDescription:"Build your island retreat in a calm, minimalist world with exciting new features that keep the classic charm while inspiring fresh creativity.",rating:4.9,likesCount:54200,cardImage:"/images/games/islanders-new-shores-card.jpg",featured:!0},{slug:"camper-van-make-it-home",name:"Camper Van: Make it Home",category:"puzzle",price:"Free",shortDescription:"Decorate and organize the camper van of your dreams! Build your own home-on-wheels using creative block organization puzzles and relaxing interior design.",rating:4.7,likesCount:29300,cardImage:"/images/games/camper-van-make-it-home-card.jpg",featured:!1},{slug:"organized-inside",name:"Organized Inside",category:"puzzle",price:"Free",shortDescription:"A slow-paced life sim and tidying up game about a cat, passion, transformation and growth. Categorize household items while uncovering the meaning of life through organization.",rating:4.8,likesCount:22700,cardImage:"/images/games/organized-inside-card.jpg",featured:!1},{slug:"cozy-solitaire",name:"Cozy Solitaire",category:"card",price:"Free",shortDescription:"Classic Solitaire game, accompanied by music and kitties.",rating:4.5,likesCount:38900,cardImage:"/images/games/cozy-solitaire-card.jpg",featured:!1},{slug:"cozy-sudoku",name:"Cozy Sudoku",category:"puzzle",price:"Free",shortDescription:"Sudoku, tunes, and some furry friends.",rating:4.6,likesCount:21500,cardImage:"/images/games/cozy-sudoku-card.jpg",featured:!1},{slug:"koroneko",name:"KoroNeko",category:"puzzle",price:"Free",shortDescription:"Roll your way through a cozy, kawaii world full of charming characters and challenging puzzles to save your siblings from Strawberry the Witch!",rating:4.9,likesCount:47300,cardImage:"/images/games/koroneko-card.jpg",featured:!1},{slug:"wytchwood",name:"Wytchwood",category:"strategy",price:"$4.99",shortDescription:"A crafting adventure game set in a land of gothic fables. As the old witch, explore, collect ingredients, brew spells, and pass judgement upon a capricious cast of characters.",rating:4.7,likesCount:33100,cardImage:"/images/games/wytchwood-card.jpg",featured:!1},{slug:"the-wild-at-heart",name:"The Wild at Heart",category:"strategy",price:"Free",shortDescription:"Wield a herd of quirky creatures to rebuild paths, battle beasts, and solve puzzles in a rich, interconnected nostalgic storybook fantasy world.",rating:4.8,likesCount:30400,cardImage:"/images/games/the-wild-at-heart-card.jpg",featured:!1}],Ze={data:Ea},Na=[{rank:1,playerName:"Alex_Pro99",gamesPlayed:142,totalScore:94250,streakDays:12,favoriteGameSlug:"heartopia",favoriteGameName:"Heartopia"},{rank:2,playerName:"CozyGamer_x",gamesPlayed:118,totalScore:81400,streakDays:8,favoriteGameSlug:"cat-mail-co",favoriteGameName:"Cat Mail Co."},{rank:3,playerName:"MatchMaster",gamesPlayed:98,totalScore:72110,streakDays:5,favoriteGameSlug:"tiny-glade",favoriteGameName:"Tiny Glade"},{rank:4,playerName:"BubblePop",gamesPlayed:87,totalScore:65900,streakDays:3,favoriteGameSlug:"whisper-of-the-house",favoriteGameName:"Whisper of the House"},{rank:5,playerName:"SudokuGod",gamesPlayed:74,totalScore:59320,streakDays:2,favoriteGameSlug:"cat-chess",favoriteGameName:"Cat Chess"}],ja={data:Na},W=e=>{window.dispatchEvent(new CustomEvent("navigate",{detail:e}))},q=()=>{const e=document.createElement("div");e.className="page-home";const a=J({activePage:"home",onNavigate:W}),t=document.createElement("main"),o=oa(),s=ha(Ze.data),r=ya(ja.data),i=wa(),n=Xe({onNavigate:W}),l=Q();return t.append(o,s,r,i),e.append(a,t,n,l),e},Ca=[{slug:"all",label:"All Games",isDefault:!0},{slug:"puzzle",label:"Puzzle",isDefault:!1},{slug:"card",label:"Card",isDefault:!1},{slug:"match",label:"Match",isDefault:!1},{slug:"farm",label:"Farm",isDefault:!1},{slug:"strategy",label:"Strategy",isDefault:!1},{slug:"arcade",label:"Arcade",isDefault:!1}],La={data:Ca},xa=La.data,O=[{value:"rating-desc",label:"Sort by: Rating ↓"},{value:"rating-asc",label:"Sort by: Rating ↑"},{value:"title-asc",label:"Sort by: Title A-Z"},{value:"likes-desc",label:"Sort by: Popularity"}],Aa=()=>{const e=document.createElement("section");e.className="library-controls";const a=document.createElement("div");a.className="library-controls__header";const t=document.createElement("h1");t.className="library-controls__title",t.textContent="Game Library";const o=document.createElement("p");o.className="library-controls__subtitle",o.textContent="Browse our collection of casual mini-games",a.append(t,o);const s=document.createElement("div");s.className="library-controls__row";const r=document.createElement("div");r.className="library-controls__chips";for(const p of xa){const c=document.createElement("button");c.type="button",c.className=`library-controls__chip${p.isDefault?" library-controls__chip--active":""}`,c.textContent=p.label,c.dataset.slug=p.slug,c.addEventListener("click",()=>{for(const m of r.querySelectorAll(".library-controls__chip"))m.classList.remove("library-controls__chip--active");c.classList.add("library-controls__chip--active")}),r.append(c)}const i=document.createElement("div");i.className="library-controls__sort";const n=document.createElement("button");n.type="button",n.className="library-controls__sort-trigger",n.innerHTML=`
    <span class="library-controls__sort-label">${O[0].label}</span>
    <svg class="library-controls__sort-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `;const l=document.createElement("ul");l.className="library-controls__sort-menu";for(const[p,c]of O.entries()){const m=document.createElement("li");m.className="library-controls__sort-item";const d=document.createElement("button");d.type="button",d.className=`library-controls__sort-option${p===0?" library-controls__sort-option--active":""}`,d.textContent=c.label,d.dataset.value=c.value,d.addEventListener("click",()=>{const u=n.querySelector(".library-controls__sort-label");u&&(u.textContent=c.label);for(const h of l.querySelectorAll(".library-controls__sort-option"))h.classList.remove("library-controls__sort-option--active");d.classList.add("library-controls__sort-option--active"),i.classList.remove("library-controls__sort--open")}),m.append(d),l.append(m)}return n.addEventListener("click",p=>{p.stopPropagation(),i.classList.toggle("library-controls__sort--open")}),document.addEventListener("click",()=>{i.classList.remove("library-controls__sort--open")}),i.append(n,l),s.append(r,i),e.append(a,s),e},Y=Object.assign({"/public/images/games/camper-van-make-it-home-card.jpg":ee,"/public/images/games/camper-van-make-it-home-hero.jpg":ae,"/public/images/games/cast-n-chill-card.jpg":te,"/public/images/games/cast-n-chill-hero.jpg":se,"/public/images/games/cat-chess-card.jpg":oe,"/public/images/games/cat-chess-hero.jpg":re,"/public/images/games/cat-mail-co-card.jpg":ie,"/public/images/games/cat-mail-co-hero.jpg":ne,"/public/images/games/cozy-solitaire-card.jpg":le,"/public/images/games/cozy-solitaire-hero.jpg":ce,"/public/images/games/cozy-sudoku-card.jpg":de,"/public/images/games/cozy-sudoku-hero.jpg":me,"/public/images/games/grimshire-card.jpg":ge,"/public/images/games/grimshire-hero.jpg":pe,"/public/images/games/heartopia-card.jpg":ue,"/public/images/games/heartopia-hero.jpg":_e,"/public/images/games/hero-bg.webp":he,"/public/images/games/islanders-new-shores-card.jpg":be,"/public/images/games/islanders-new-shores-hero.jpg":ve,"/public/images/games/koroneko-card.jpg":fe,"/public/images/games/koroneko-hero.jpg":ye,"/public/images/games/leaf-it-alone-card.jpg":ke,"/public/images/games/leaf-it-alone-hero.jpg":we,"/public/images/games/leafy-corner-card.jpg":Ee,"/public/images/games/leafy-corner-hero.jpg":Ne,"/public/images/games/little-corners-card.jpg":je,"/public/images/games/little-corners-hero.jpg":Ce,"/public/images/games/organized-inside-card.jpg":Le,"/public/images/games/organized-inside-hero.jpg":xe,"/public/images/games/palia-card.jpg":Ae,"/public/images/games/palia-hero.jpg":ze,"/public/images/games/shelve-the-potions-card.jpg":Se,"/public/images/games/shelve-the-potions-hero.jpg":De,"/public/images/games/tailside-cozy-cafe-sim-card.jpg":Te,"/public/images/games/tailside-cozy-cafe-sim-hero.jpg":Be,"/public/images/games/the-wild-at-heart-card.jpg":Me,"/public/images/games/the-wild-at-heart-hero.jpg":Ge,"/public/images/games/tiny-glade-card.jpg":Pe,"/public/images/games/tiny-glade-hero.jpg":$e,"/public/images/games/tukoni-forest-keepers-card.jpg":Ie,"/public/images/games/tukoni-forest-keepers-hero.jpg":Fe,"/public/images/games/vacation-cafe-simulator-card.jpg":Re,"/public/images/games/vacation-cafe-simulator-hero.jpg":He,"/public/images/games/whisper-of-the-house-card.jpg":Ue,"/public/images/games/whisper-of-the-house-hero.jpg":We,"/public/images/games/winter-burrow-card.jpg":qe,"/public/images/games/winter-burrow-hero.jpg":Oe,"/public/images/games/wytchwood-card.jpg":Ye,"/public/images/games/wytchwood-hero.jpg":Ke}),K=Object.assign({}),za=e=>{if(e.startsWith("http://")||e.startsWith("https://"))return e;const a=e.split("/").pop();if(!a)return e;const t=`/public/images/games/${a}`;if(Y[t])return Y[t];const o=`../assets/images/games/${a}`;return K[o]?K[o]:e},Sa=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toString(),Da=e=>{const a=document.createElement("article");a.className="library-card";const t=document.createElement("div");t.className="library-card__media";const o=document.createElement("img");o.src=za(e.cardImage),o.alt=e.name,o.className="library-card__img",o.loading="lazy",t.append(o);const s=document.createElement("div");s.className="library-card__content";const r=document.createElement("div");r.className="library-card__header";const i=document.createElement("div");i.className="library-card__title-group";const n=document.createElement("h3");n.className="library-card__title",n.textContent=e.name;const l=document.createElement("span");l.className="library-card__category",l.textContent=e.category,i.append(n,l);const p=document.createElement("span");p.className="library-card__price",p.textContent=e.price,r.append(i,p);const c=document.createElement("p");c.className="library-card__desc",c.textContent=e.shortDescription;const m=document.createElement("div");m.className="library-card__footer";const d=document.createElement("div");d.className="library-card__stats";const u=document.createElement("div");u.className="library-card__stats-group";const h=document.createElement("div");h.className="library-card__stat",h.innerHTML=`
    <svg class="library-card__icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FFD02B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
    <span>${e.rating.toFixed(1)}</span>
  `;const v=document.createElement("div");v.className="library-card__stat",v.innerHTML=`
    <svg class="library-card__icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FF4B4B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
    <span>${Sa(e.likesCount)}</span>
  `,u.append(h,v);const w=document.createElement("span");w.className="library-card__price--mobile",w.textContent=e.price,d.append(u,w);const f=document.createElement("button");return f.type="button",f.className="library-card__btn",f.textContent="Details",f.addEventListener("click",()=>{Ve()}),m.append(d,f),s.append(r,c,m),a.append(t,s),a},Ta=()=>{const e=document.createElement("section");e.className="library-games";const a=document.createElement("div");a.className="library-games__container";const t=document.createElement("div");t.className="library-games__grid";const o=Ze.data;for(const s of o)t.append(Da(s));return a.append(t),e.append(a),e},Ba=(e={})=>{const a=e.totalPages||5;let t=e.initialPage||1;const o=document.createElement("section");o.className="library-pagination";const s=document.createElement("div");s.className="library-pagination__container";const r=()=>window.matchMedia("(max-width: 640px)").matches,i=()=>{const l=r()?3:4,p=[];let c=Math.max(1,t-Math.floor(l/2)),m=c+l-1;m>a&&(m=a,c=Math.max(1,m-l+1));for(let d=c;d<=m;d++)p.push(d);return p},n=()=>{s.innerHTML="";const l=document.createElement("button");l.type="button",l.className="library-pagination__arrow library-pagination__arrow--prev",l.ariaLabel="Previous page",l.innerHTML=`
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    `,t===1&&(l.disabled=!0,l.classList.add("library-pagination__arrow--disabled")),l.addEventListener("click",()=>{t>1&&(t-=1,n())}),s.append(l);const p=i();for(const m of p){const d=document.createElement("button");d.type="button",d.className=`library-pagination__page${m===t?" library-pagination__page--active":""}`,d.textContent=m.toString(),d.addEventListener("click",()=>{t!==m&&(t=m,n())}),s.append(d)}const c=document.createElement("button");c.type="button",c.className="library-pagination__arrow library-pagination__arrow--next",c.ariaLabel="Next page",c.innerHTML=`
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    `,t===a&&(c.disabled=!0,c.classList.add("library-pagination__arrow--disabled")),c.addEventListener("click",()=>{t<a&&(t+=1,n())}),s.append(c)};return window.addEventListener("resize",()=>{n()}),n(),o.append(s),o},V=()=>{const e=document.createElement("div");e.className="page-library";const a=p=>{const c="/minigames/",m=p==="home"?c:`${c}library`;window.location.hash=m,window.dispatchEvent(new CustomEvent("navigate",{detail:p}))},t=J({activePage:"library",onNavigate:a}),o=document.createElement("main"),s=Aa(),r=Ta(),i=Ba({totalPages:5,initialPage:1});o.append(s,r,i);const n=Xe({onNavigate:a}),l=Q();return e.append(t,o,n,l),e},Ma=()=>{const e=document.createElement("main");e.className="page-404";const a=document.createElement("h1");return a.textContent="404 - Page Not Found",e.append(a),e},Ga=()=>{let e=document.querySelector("#app");e||(e=document.createElement("div"),e.id="app",document.body.append(e));const a="/minigames/",t={home:q,library:V},o=r=>{e.innerHTML="",e.append(t[r]())};window.addEventListener("navigate",r=>{o(r.detail)}),new ea([{path:a,render:q},{path:`${a}library`,render:V},{path:`${a}404`,render:Ma}]).init(e)};Ga();
