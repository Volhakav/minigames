var ne=Object.defineProperty;var re=(e,t,n)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var q=(e,t,n)=>re(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();class ie{constructor(t){q(this,"routes",{});q(this,"appRoot");q(this,"routeChangeListeners",[]);for(const n of t)this.routes[n.path]=n.render;window.addEventListener("popstate",()=>this.handleRoute()),document.addEventListener("click",n=>{const o=n.target.closest("a[data-link]");if(o){n.preventDefault();const r=o.getAttribute("href");r&&this.navigate(r)}})}init(t){this.appRoot=t,this.handleRoute()}navigate(t,n=!1){n?window.history.replaceState({},"",t):window.history.pushState({},"",t),this.handleRoute()}updateQueryParams(t,n=!1){const o=new URL(window.location.href);for(const[s,a]of Object.entries(t))a===void 0||a===""?o.searchParams.delete(s):o.searchParams.set(s,a);const r=o.pathname+o.search;this.navigate(r,n)}getQueryParams(){const t=new URLSearchParams(window.location.search),n={};for(const[o,r]of t.entries())n[o]=r;return n}onRouteChange(t){this.routeChangeListeners.push(t)}handleRoute(){if(!this.appRoot)return;const t="/minigames/",n=t.endsWith("/")?t.slice(0,-1):t;let o=window.location.pathname;o.length>1&&o.endsWith("/")&&(o=o.slice(0,-1)),(o===n||o==="")&&(o=n||"/");let r=this.routes[o];if(!r){const a=`${n}/404`;r=this.routes[a]||this.routes["/404"]}this.appRoot.innerHTML="",r&&this.appRoot.append(r());const s=this.getQueryParams();for(const a of this.routeChangeListeners)a(s)}}const ee="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABX1JREFUeAG9V1tsFGUU/v7Zme1eusv2IqhUulzagGhKuWlKrCsGERSihgQfjPogmhiNJoov6oMiiYnVgA/EqIlNiA/6Ig9abokUiYhikAoFQVvX2lIX2rLtXrqXmf09/9+d7W472y6kcJLZmf92zne+c5kdhqz4/QGfCvUVegyAsQBuhHCc5jB2dwW/bzWnmPhZ7A/4DaYd4YQDN0HITtDg6QeCwfagBFA3f93fwvicW6tTH7RsN5beXa96PG4NMyhkyGhr+yG5c8ce7XJoSMuCaGR1/rXPcmb7YvacqvT+g59pLrcTNpsNMyw8k8kwRVEQGYli4/rn06HQgAbO31HIuIg73nr7xbTHWy6Mc8y8SOMCiLvchZaP3tDHZtn9YnaZeN6w8b4yQimnS9Z6LZvzgNy5tE7NjgOKuUJu22hxWu855znjE4GYa9OJxzueX+qEtWkdUhiDYKrzj36c+DUox/eu9GPJ4tvkcwkQeL4dFdchkWgSn7Yex9ffnKIwAlufWI5339wEr8cxxsTUxwucLAkAmzRm6L0URko3IGLY2xcusGruz9Akm4bUkgDoRgYGXcKIZrdBoSpd1ViLi11XiAGOlctrqXpEaDjSaYMyDbKURUimC+qUAMyz0WgC+77rwG8dfXA4NGlscCiGWUS52NTdM4idHx4ikAaSiTQaG2rw2KMNmOV1yfP8egGYoigMJ0/1YO9XJ1HuLoOmKigvd8BTXiZh/vhTt8wLnUISj9GdgDy+qaEU1VMDMNPVSV5XV3pQVeFGBV2qjTgm6seqjsPtsstLhGp4OI7qKg8cZXaU5JylYc4Lmoym0XtSZTAoxoINEWOWF1/xzGheNBnD4BQiBXb7uG9T9QhLBkTypNM6Qlci1MRBdNtBtqVxSQu3RA3RBQQuYSxMTIxEkhBkzb7FS07YLI9NAmB63XG2Dx9/0o5/e8NY0ThPKpR1ni10zgr3m9q9Hid6+oaxs+Ug5c0/qK2pwEsvBLCKKsWqRxTNgbPn+nHoyAWkUjp6+4cp451wOe2y1AoczwMhmHPSntNnejFCgAeoUi78GUKguV4CsBKlGACR7W6nJmNaVeGCz+dE9mVF3nNJuXkJyk1YAqDP60CFzyV7h0hOnyjXIlKUgdUravHc0034q3sAzWsW4jx5su/bDsoHJ1RKtkQyJXuBkMpKN1wOuyw/0TPWNtdhSf0cHDvehUULqrFqRW3pAExP5t1RiddeflDyS69JvL/rMGKjKWLGIetdlGNzUx2E72c6L5HhpNwbjyfhpf7w1NbVeHLLShkWVVOKNiNLBmQZ0kGzlMRY1LhKPTgeT8lc2LJ5GbY90yQp/3zvcbR++bNcEy1YN8bKtcw2rj6T1TlRLHOAZV+rJupEMo0EKTfI84HBiFxpumeBBCha85rVCyUTA4NRYieDBDGVShl5DsHSeFEAOSDZe5Ta69DVKN0TsiqGI6PoPNeX23f2fB+Gw6NIEtAYheBqOCbPTFJkISW9C+yahs2PNOCuxXOhUEcUrbhmro+81akiGGpur8DrlC+iU2YoVAsp8UTjKUXYovnrJNMXuw+JW8G/lZxICidM5ZWebNsTNnBucSinDax+wUNykAtBJBLTrYwX0yP7P2OWxs11q/Yv/p7Tbt0cCwDt4qHz9wt6ttHwQkXj7b/wym4rum4JnIuy3N92LDU2wmkqUH5UPG/f3qLEo3Gp0gqIBQe5e6l/z4X30Ugc7+3Yo2YN7FZ06LtIRTD034B9w/ptqQNtx+LUeIwSdY67ZgEtX0ZGYvovJzoSZCN9OTRop64Q7Aoebs1+nD5MH6cZ+jjlftwEEcYNrtDH6YFgAdg6/zr6TsSr9Fja/6lrl6OUGO16JrWLvozDYuJ/be9M+oCh90EAAAAASUVORK5CYII=";let I;const H={email:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',lock:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',eye:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',google:'<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>'},te=e=>{e.key==="Escape"&&z()},ce=()=>`
  <div class="auth-form__header">
    <h2 class="auth-form__title">Welcome Back!</h2>
    <p class="auth-form__subtitle">Sign in to resume your games and progress.</p>
  </div>
  <form class="auth-form__body" onsubmit="return false;">
    <div class="auth-form__field">
      <label class="auth-form__label">Email Address</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${H.email}</span>
        <input type="email" class="auth-form__input" placeholder="e.g. alex@minigames.com" required />
      </div>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label">Password</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${H.lock}</span>
        <input type="password" class="auth-form__input" placeholder="••••••••" required />
        <button type="button" class="auth-form__eye-btn" aria-label="Toggle password visibility">${H.eye}</button>
      </div>
    </div>
    <div class="auth-form__forgot">
      <a href="#" class="auth-form__link auth-form__link--underline">Forgot Password?</a>
    </div>
    <button type="submit" class="auth-form__submit-btn">Login</button>
    <div class="auth-form__divider"><span>OR</span></div>
    <button type="button" class="auth-form__google-btn">
      <span class="auth-form__google-icon">${H.google}</span> Continue with Google
    </button>
    <div class="auth-form__footer-text">
      Don't have an account? <button type="button" class="auth-form__switch-inline" data-target="register">Register</button>
    </div>
  </form>
`,le=()=>`
  <div class="auth-form__header">
    <h2 class="auth-form__title">Create Account</h2>
    <p class="auth-form__subtitle">Join MiniGames to track your score & streak.</p>
  </div>
  <form class="auth-form__body" onsubmit="return false;">
    <div class="auth-form__field">
      <label class="auth-form__label">Username</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${H.user}</span>
        <input type="text" class="auth-form__input" placeholder="e.g. CozyGamer_99" required />
      </div>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label">Email Address</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${H.email}</span>
        <input type="email" class="auth-form__input" placeholder="your.email@domain.com" required />
      </div>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label">Password</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${H.lock}</span>
        <input type="password" class="auth-form__input" placeholder="Min. 8 characters" required />
      </div>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label">Confirm Password</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${H.lock}</span>
        <input type="password" class="auth-form__input" placeholder="Repeat your password" required />
      </div>
    </div>
    <button type="submit" class="auth-form__submit-btn">Create Account</button>
    <div class="auth-form__divider"><span>OR</span></div>
    <button type="button" class="auth-form__google-btn">
      <span class="auth-form__google-icon">${H.google}</span> Sign up with Google
    </button>
    <div class="auth-form__footer-text">
      Already have an account? <button type="button" class="auth-form__switch-inline" data-target="login">Login</button>
    </div>
  </form>
`,ae=()=>{const e=document.createElement("div");e.className="auth-backdrop auth-backdrop--hidden",e.innerHTML=`
    <div class="auth-dialog" role="dialog" aria-modal="true">
      <button type="button" class="auth-dialog__close" aria-label="Close dialog">✕</button>
      
      <div class="auth-switcher">
        <div class="auth-switcher__pill"></div>
        <button type="button" class="auth-switcher__btn auth-switcher__btn--active" data-tab="login">Login</button>
        <button type="button" class="auth-switcher__btn" data-tab="register">Register</button>
      </div>

      <div class="auth-dialog__container">
        <div class="auth-dialog__view auth-dialog__view--active" id="auth-view-login">
          ${ce()}
        </div>
        <div class="auth-dialog__view" id="auth-view-register">
          ${le()}
        </div>
      </div>
    </div>
  `;const t=r=>{const s=e.querySelectorAll(".auth-switcher__btn"),a=e.querySelector(".auth-switcher__pill"),l=e.querySelector("#auth-view-login"),p=e.querySelector("#auth-view-register");if(!l||!p||!a)return;r==="register"?a.classList.add("auth-switcher__pill--register"):a.classList.remove("auth-switcher__pill--register");for(const h of s)h.dataset.tab===r?h.classList.add("auth-switcher__btn--active"):h.classList.remove("auth-switcher__btn--active");const _=r==="login"?p:l,u=r==="login"?l:p;u.classList.contains("auth-dialog__view--active")||(_.classList.add("auth-dialog__view--fade-out"),setTimeout(()=>{_.classList.remove("auth-dialog__view--active","auth-dialog__view--fade-out"),u.classList.add("auth-dialog__view--active","auth-dialog__view--fade-in"),setTimeout(()=>{u.classList.remove("auth-dialog__view--fade-in")},200)},150))},n=e.querySelectorAll(".auth-switcher__btn");for(const r of n)r.addEventListener("click",()=>{const s=r.dataset.tab;s&&t(s)});e.addEventListener("click",r=>{const s=r.target;if(s.classList.contains("auth-form__switch-inline")){const a=s.dataset.target;a&&t(a)}});const o=e.querySelector(".auth-dialog__close");return o==null||o.addEventListener("click",z),e.addEventListener("click",r=>{r.target===e&&z()}),I=e,e},de=(e="login")=>{if(!I)return;I.classList.remove("auth-backdrop--hidden"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",te);const t=I.querySelector(`.auth-switcher__btn[data-tab="${e}"]`);t==null||t.click()},z=()=>{!I||I.classList.contains("auth-backdrop--hidden")||(I.classList.add("auth-backdrop--closing"),setTimeout(()=>{I&&(I.classList.remove("auth-backdrop--closing"),I.classList.add("auth-backdrop--hidden")),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",te)},250))},oe=(e={})=>{const{activePage:t="home",onNavigate:n}=e,o=document.createElement("header");o.className="header";const r=document.createElement("div");r.className="header__container";const s=(b,y)=>{b.preventDefault(),n&&n(y)},a=document.createElement("a");a.href="/",a.className="header__logo",a.addEventListener("click",b=>s(b,"home"));const l=document.createElement("img");l.src=ee,l.alt="MiniGames Logo",l.className="header__logo-icon";const p=document.createElement("span");p.className="header__logo-text",p.textContent="MiniGames",a.append(l,p);const _=document.createElement("nav");_.className="header__nav";const u=document.createElement("ul");u.className="header__nav-list";const h=[{name:"Home",page:"home"},{name:"Library",page:"library"},{name:"Tournaments",page:"home"},{name:"Community",page:"home"}];for(const b of h){const y=document.createElement("li");y.className="header__nav-item";const M=document.createElement("a");M.href="#";const T=b.name.toLowerCase()===t;M.className=`header__nav-link${T?" header__nav-link--active":""}`,M.textContent=b.name,M.addEventListener("click",$=>s($,b.page)),y.append(M),u.append(y)}_.append(u);const i=document.createElement("div");i.className="header__actions";const c=document.createElement("button");c.type="button",c.className="header__btn header__btn--login",c.textContent="Log In";const d=document.createElement("button");d.type="button",d.className="header__btn header__btn--signup",d.textContent="Sign Up",i.append(c,d);const g=document.createElement("button");g.type="button",g.className="header__burger",g.setAttribute("aria-label","Open navigation menu");for(let b=0;b<3;b+=1){const y=document.createElement("span");y.className="header__burger-line",g.append(y)}const v=document.createElement("div");v.className="header__right-controls",v.append(i,g);const m=document.createElement("div");m.className="header__mobile-overlay";const f=document.createElement("div");f.className="header__mobile-top";const w=a.cloneNode(!0);w.addEventListener("click",b=>{S(),s(b,"home")});const k=document.createElement("button");k.type="button",k.className="header__mobile-close",k.setAttribute("aria-label","Close menu");const E=document.createElement("span");E.className="header__mobile-close-icon",E.textContent="✕",k.append(E),f.append(w,k);const C=document.createElement("ul");C.className="header__nav-list";for(const b of h){const y=document.createElement("li");y.className="header__nav-item";const M=document.createElement("a");M.href="#";const T=b.name.toLowerCase()===t;M.className=`header__nav-link${T?" header__nav-link--active":""}`,M.textContent=b.name,M.addEventListener("click",$=>{S(),s($,b.page)}),y.append(M),C.append(y)}const N=document.createElement("div");N.className="header__mobile-actions";const x=c.cloneNode(!0),A=d.cloneNode(!0);N.append(x,A),m.append(f,C,N);const S=()=>{m.classList.remove("header__mobile-overlay--active"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",G)},L=()=>{m.classList.add("header__mobile-overlay--active"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",G)},G=b=>{b.key==="Escape"&&S()};g.addEventListener("click",L),k.addEventListener("click",S);const B=()=>{S(),de()};return c.addEventListener("click",B),x.addEventListener("click",B),d.addEventListener("click",B),A.addEventListener("click",B),r.append(a,_,v),o.append(r,m),o},me=()=>{const e=document.createElement("section");e.className="hero";const t=document.createElement("img"),n="images/hero-bg.webp".replace(/^\//,"");t.src=`/minigames/${n}`,t.alt="",t.className="hero__bg";const o=document.createElement("div");o.className="hero__container";const r=document.createElement("div");r.className="hero__card";const s=document.createElement("h1");s.className="hero__title",s.textContent="Take a Short Break & Have Fun";const a=document.createElement("p");a.className="hero__description",a.textContent="Discover hundreds of curated casual mini-games. Play instantly in your browser — puzzle, match 3, farm, and board classics.";const l=document.createElement("button");return l.type="button",l.className="hero__btn",l.textContent="Browse Library",r.append(s,a,l),o.append(r),e.append(t,o),e},ue=e=>e?e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toString():"0",pe=e=>{const t=document.createElement("div");t.className="game-card";const n=document.createElement("img"),o=e.name||e.title||"Untitled",r=e.cardImage||"https://placehold.co/300x380/1e1e1e/ffffff?text=No+Image";n.src=r,n.alt=o,n.className="game-card__image",n.addEventListener("error",()=>{n.src="https://placehold.co/300x380/1e1e1e/ffffff?text=No+Image"},{once:!0});const s=document.createElement("div");s.className="game-card__overlay";const a=document.createElement("h3");a.className="game-card__title",a.textContent=o;const l=document.createElement("div");l.className="game-card__meta";const p=document.createElement("div");p.className="game-card__stat game-card__stat--rating",p.innerHTML=`
    <svg class="game-card__icon game-card__icon--star" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FFD02B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
    <span>${e.rating?e.rating.toFixed(1):"0.0"}</span>
  `;const _=document.createElement("div");return _.className="game-card__stat game-card__stat--likes",_.innerHTML=`
    <svg class="game-card__icon game-card__icon--heart" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FF4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
    <span>${ue(e.likesCount)}</span>
  `,l.append(p,_),s.append(a,l),t.append(n,s),t},U="https://faxb76kxra.execute-api.eu-central-1.amazonaws.com",R=e=>{if(!e||typeof e!="string")return"https://placehold.co/600x350/1e1e1e/ffffff?text=No+Image";if(e.startsWith("http://")||e.startsWith("https://"))return e;const t=e.split("/").pop()||e,n="/minigames/";return`${n.endsWith("/")?n:`${n}/`}images/games/${t}`},_e=async()=>{const e=await fetch(`${U}/api/categories`);if(!e.ok)throw new Error(`Failed to load categories (Status: ${e.status})`);const t=await e.json();return Array.isArray(t)?t:t.data||[]},ge=async()=>{const e=await fetch(`${U}/api/games?featured=true`);if(!e.ok)throw new Error(`Failed to load featured games (Status: ${e.status})`);const t=await e.json();return(Array.isArray(t)?t:t.data||[]).map(o=>{const r=o.cardImage||o.heroImage||o.coverImage||o.image||"";return{slug:o.slug||"",name:o.name||o.title||"Untitled",category:o.category||"",price:o.price||"Free",shortDescription:o.shortDescription||"",rating:o.rating||0,likesCount:o.likesCount||0,cardImage:R(r),featured:!!o.featured}})},he=async(e={})=>{const{page:t=1,limit:n=6,category:o="all",sort:r="rating-desc"}=e,s=new URLSearchParams({page:t.toString(),limit:n.toString(),category:o,sort:r}),a=await fetch(`${U}/api/games?${s.toString()}`);if(!a.ok)throw new Error(`Failed to load library games (Status: ${a.status})`);const l=await a.json();return{data:(Array.isArray(l)?l:l.data||[]).map(u=>{const h=u.cardImage||u.heroImage||u.coverImage||u.image||"";return{slug:u.slug||"",name:u.name||u.title||"Untitled",category:u.category||"all",price:u.price||"Free",shortDescription:u.shortDescription||"",rating:u.rating||0,likesCount:u.likesCount||0,cardImage:R(h),featured:!!u.featured}}),meta:l.meta}},ve=async(e,t)=>{var _;const n=new URLSearchParams,o=n.toString()?`?${n.toString()}`:"",r=await fetch(`${U}/api/games/${e}${o}`);if(!r.ok)throw new Error(`Failed to load game details for "${e}" (Status: ${r.status})`);const s=await r.json(),a=s.data||s,l=a.cardImage||a.heroImage||a.coverImage||a.image||"",p=a.heroImage||a.bannerImage||a.cardImage||a.coverImage||"";return{slug:a.slug||e,name:a.name||a.title||"Untitled Game",category:a.category||"Casual",price:a.price||((_=a.specs)==null?void 0:_.price)||"Free",shortDescription:a.shortDescription||"",description:a.description||a.fullDescription||a.shortDescription||"No description available.",rating:a.rating||0,likesCount:a.likesCount||0,isLiked:!!(a.isLiked||a.isLikedByCurrentUser),cardImage:R(l),heroImage:R(p),galleryImages:Array.isArray(a.galleryImages)?a.galleryImages.map(u=>R(u)):[],developer:a.developer||"Unknown Developer",releaseDate:a.releaseDate||"N/A",featured:!!a.featured,topRecords:Array.isArray(a.topRecords)?a.topRecords:[],comments:Array.isArray(a.comments)?a.comments:[],specs:a.specs||{genre:a.category||"Casual",players:"1 Player",duration:"15-30 mins",price:a.price||"Free"}}},be=async(e,t=3,n="newest")=>{var p,_,u;const o=new URLSearchParams({limit:t.toString(),sort:n}),r=await fetch(`${U}/api/games/${e}/comments?${o.toString()}`);if(!r.ok)throw new Error(`Failed to load comments for "${e}" (Status: ${r.status})`);const s=await r.json();let a=[],l=0;return Array.isArray(s)?(a=s,l=s.length):Array.isArray(s.items)?(a=s.items,l=s.totalItems??s.total??s.count??s.items.length):s.data?Array.isArray(s.data)?(a=s.data,l=((p=s.meta)==null?void 0:p.totalItems)??((_=s.meta)==null?void 0:_.total)??s.totalCount??s.data.length):Array.isArray(s.data.items)?(a=s.data.items,l=s.data.totalItems??s.data.total??((u=s.meta)==null?void 0:u.totalItems)??s.data.items.length):Array.isArray(s.data.comments)&&(a=s.data.comments,l=s.data.totalComments??s.data.comments.length):Array.isArray(s.comments)&&(a=s.comments,l=s.totalComments??s.comments.length),{data:a,totalCount:l}},fe=async()=>{const e=await fetch(`${U}/api/leaderboard`);if(!e.ok)throw new Error(`Failed to load leaderboard data (Status: ${e.status})`);const t=await e.json();return(Array.isArray(t)?t:t.data||[]).map((o,r)=>({rank:o.rank||r+1,playerName:o.playerName||o.player||o.name||"Anonymous",gamesPlayed:o.gamesPlayed||o.games||0,totalScore:o.totalScore||o.score||0,streakDays:o.streakDays||o.streak||0,favoriteGameSlug:o.favoriteGameSlug||"",favoriteGameName:o.favoriteGameName||o.favoriteGame||"N/A"}))},F=(e,t="info")=>{let n=document.querySelector(".snackbar-container");n||(n=document.createElement("div"),n.className="snackbar-container",document.body.append(n));const o=document.createElement("div");o.className=`snackbar snackbar--${t}`;const r=document.createElement("span");r.className="snackbar__text",r.textContent=e;const s=document.createElement("button");s.type="button",s.className="snackbar__close",s.innerHTML="&times;",s.ariaLabel="Close notification";const a=()=>{o.classList.add("snackbar--hiding"),setTimeout(()=>{o.remove(),n&&n.childElementCount===0&&n.remove()},300)};s.addEventListener("click",a),o.append(r,s),n.append(o),setTimeout(a,4e3)},ye=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toString(),ke=e=>e.toLocaleString("en-US")+" pts",we=e=>e===1?"🥇":e===2?"🥈":e===3?"🥉":"",Q=e=>{if(!e)return"just now";const t=new Date(e);if(Number.isNaN(t.getTime()))return e;const o=Math.floor((new Date().getTime()-t.getTime())/1e3);if(o<60)return"just now";const r=Math.floor(o/60);if(r<60)return`${r} min ago`;const s=Math.floor(r/60);if(s<24)return`${s} ${s===1?"hour ago":"hours ago"}`;const a=Math.floor(s/24);if(a<7)return`${a} ${a===1?"day ago":"days ago"}`;const l=Math.floor(a/7);if(l<4.34)return`${l} ${l===1?"week ago":"weeks ago"}`;const p=Math.floor(a/30.44);if(p<12)return`${p} ${p===1?"month ago":"months ago"}`;const _=Math.floor(a/365.25);return`${_} ${_===1?"year ago":"years ago"}`},Ee=e=>e.startsWith("F")||e.toLowerCase().includes("forest")?"#bae6fd":e.startsWith("H")||e.toLowerCase().includes("herbal")?"#fef08a":e.startsWith("C")||e.toLowerCase().includes("cottage")?"#e2e8f0":"#e0f2fe",Le=e=>{const t=document.createElement("div");t.className="game-dialog-backdrop";const n=document.createElement("div");n.className="game-dialog",t.append(n);let o=!1;const r=(i=!0)=>{o||(o=!0,t.classList.add("game-dialog-backdrop--closing"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",s),i&&P.updateQueryParams({game:void 0}),setTimeout(()=>{t.remove()},250))},s=i=>{i.key==="Escape"&&r()};document.addEventListener("keydown",s),t.addEventListener("click",i=>{i.target===t&&r()});const a=()=>{n.innerHTML=`
      <div class="game-dialog__skeleton">
        <div class="game-dialog__skeleton-hero"></div>
        <div class="game-dialog__skeleton-body">
          <div class="game-dialog__skeleton-title"></div>
          <div class="game-dialog__skeleton-text"></div>
          <div class="game-dialog__skeleton-text"></div>
        </div>
      </div>
    `},l=i=>{var c,d;n.innerHTML=`
      <div class="game-dialog__error-banner">
        <p class="game-dialog__error-message">${i}</p>
        <div class="game-dialog__error-actions">
          <button type="button" class="game-dialog__retry-btn">Retry</button>
          <button type="button" class="game-dialog__close-error-btn">Close</button>
        </div>
      </div>
    `,(c=n.querySelector(".game-dialog__retry-btn"))==null||c.addEventListener("click",()=>{h()}),(d=n.querySelector(".game-dialog__close-error-btn"))==null||d.addEventListener("click",()=>r())},p=(i,c,d)=>{const g=d.querySelector(".game-dialog__comments-title"),v=d.querySelector(".game-dialog__comments-list");if(v){if(g&&(g.textContent=`Comments (${c})`),!i||i.length===0){v.innerHTML=`
        <div class="game-dialog__empty-comments">
          <p style="opacity: 0.7; padding: 1rem 0;">No comments yet. Be the first to comment!</p>
        </div>
      `;return}v.innerHTML=i.map(m=>{const f=m.author||m.authorName||m.userName||"Anonymous",w=m.text||m.content||m.comment||"",k=m.likesCount??m.likes??0,E=m.createdAt||m.timestamp||m.date,C=Q(E),N=m.avatarBg||Ee(f),x=f.charAt(0).toUpperCase(),A=!!(m.isLikedByCurrentUser??m.isLiked??m.liked);return`
          <li class="game-dialog__comment-item">
            <article class="game-dialog__comment">
              <div class="game-dialog__comment-header">
                <div class="game-dialog__comment-author">
                  <div class="game-dialog__avatar" style="background-color: ${N};">
                    ${x}
                  </div>
                  <span class="game-dialog__author-name">${f}</span>
                </div>
                <span class="game-dialog__comment-time">${C}</span>
              </div>
              <p class="game-dialog__comment-text">${w}</p>
              <button type="button" class="game-dialog__like-btn${A?" game-dialog__like-btn--active":""}">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="${A?"#ff4b4b":"#18152e"}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span>${k}</span>
              </button>
            </article>
          </li>
        `}).join("")}},_=i=>{var N,x,A,S;const c=i.topRecords||[],d=c.length>0?c.map(L=>`
            <li class="game-dialog__record-item">
              <span class="game-dialog__record-user">${we(L.position)} ${L.playerName}</span>
              <span class="game-dialog__record-score">${ke(L.score)}</span>
              <span class="game-dialog__record-date">${Q(L.achievedAt)}</span>
            </li>
          `).join(""):'<li class="game-dialog__record-item" style="opacity: 0.7;">No records achieved yet.</li>',g=i.heroImage||i.cardImage;n.innerHTML=`
      <header class="game-dialog__hero">
        <img 
          src="${g}" 
          alt="${i.name} Cover" 
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
            <h2 class="game-dialog__title">${i.name}</h2>
            <div class="game-dialog__stats">
              <div class="game-dialog__stat">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FFD02B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>${i.rating?i.rating.toFixed(1):"0.0"}</span>
              </div>
              <div class="game-dialog__stat">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FF4B4B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span>${ye(i.likesCount||0)}</span>
              </div>
            </div>
          </div>

          <p class="game-dialog__description">
            ${i.description||i.shortDescription}
          </p>

          <div class="game-dialog__meta-grid">
            <div class="game-dialog__meta-item">
              <span class="game-dialog__meta-label">Genre</span>
              <span class="game-dialog__meta-value">${((N=i.specs)==null?void 0:N.genre)||i.category||"Casual"}</span>
            </div>
            <div class="game-dialog__meta-item">
              <span class="game-dialog__meta-label">Players</span>
              <span class="game-dialog__meta-value">${((x=i.specs)==null?void 0:x.players)||"1 Player"}</span>
            </div>
            <div class="game-dialog__meta-item">
              <span class="game-dialog__meta-label">Duration</span>
              <span class="game-dialog__meta-value">${((A=i.specs)==null?void 0:A.duration)||"15-30 mins"}</span>
            </div>
            <div class="game-dialog__meta-item">
              <span class="game-dialog__meta-label">Price</span>
              <span class="game-dialog__meta-value">${((S=i.specs)==null?void 0:S.price)||i.price||"Free"}</span>
            </div>
          </div>

          <div class="game-dialog__actions">
            <button type="button" class="game-dialog__play-btn">Play Now</button>
            <button type="button" class="game-dialog__fav-btn${i.isLiked?" game-dialog__fav-btn--active":""}">
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
            ${d}
          </ul>
        </section>

        <section class="game-dialog__section game-dialog__comments-section">
          <h3 class="game-dialog__section-title game-dialog__comments-title">Comments (...)</h3>
          
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
            <div class="game-dialog__comments-skeleton">Loading comments...</div>
          </ul>
        </section>
      </div>
    `;const v=n.querySelector(".game-dialog__hero-img");v&&v.addEventListener("error",()=>{v.src="https://placehold.co/600x350/1e1e1e/ffffff?text=No+Image"},{once:!0});const m=n.querySelector(".game-dialog__close"),f=n.querySelector(".game-dialog__play-btn"),w=n.querySelector(".game-dialog__fav-btn"),k=n.querySelector(".game-dialog__comment-form"),E=n.querySelector(".game-dialog__textarea"),C=n.querySelector(".game-dialog__comments-section");m==null||m.addEventListener("click",()=>r()),f==null||f.addEventListener("click",L=>{L.preventDefault()}),w==null||w.addEventListener("click",()=>{w.classList.toggle("game-dialog__fav-btn--active")}),E&&E.addEventListener("input",()=>{E.style.height="auto";const L=Math.min(E.scrollHeight,88);E.style.height=`${L}px`}),k==null||k.addEventListener("submit",L=>{L.preventDefault()}),C&&u(C)},u=async i=>{try{const c=await be(e,3,"newest"),d=c.data||[],g=c.totalCount??d.length;p(d,g,i)}catch(c){const d=c instanceof Error?c.message:"Failed to load comments";F(d,"error");const g=i.querySelector(".game-dialog__comments-list");g&&(g.innerHTML='<div class="game-dialog__comments-error">Unable to load comments.</div>')}},h=async()=>{a();try{const i=await ve(e);_(i)}catch(i){const c=i instanceof Error?i.message:"Failed to load game details";l(c),F(c,"error")}};return h(),t},V=(e,t=!0)=>{if(!e)return;if(document.querySelector(".game-dialog-backdrop")){t&&P.updateQueryParams({game:e});return}t&&P.updateQueryParams({game:e});const o=Le(e);document.body.append(o),document.body.classList.add("no-scroll")},Ne=()=>{const e=document.querySelector(".game-dialog-backdrop");e&&(document.body.classList.remove("no-scroll"),e.remove())},xe=()=>{const e=document.createElement("section");e.className="carousel-section";const t=document.createElement("header");t.className="carousel-section__header";const n=document.createElement("div");n.className="carousel-section__title-wrapper";const o=document.createElement("span");o.className="carousel-section__badge";const r=document.createElement("h2");r.className="carousel-section__title",r.textContent="Featured Games",n.append(o,r);const s=document.createElement("nav");s.className="carousel-section__nav",s.setAttribute("aria-label","Carousel Navigation");const a=document.createElement("button");a.type="button",a.className="carousel-section__btn carousel-section__btn--prev",a.setAttribute("aria-label","Previous slide"),a.innerHTML=`
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  `;const l=document.createElement("button");l.type="button",l.className="carousel-section__btn carousel-section__btn--next",l.setAttribute("aria-label","Next slide"),l.innerHTML=`
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  `,s.append(a,l),t.append(n,s);const p=document.createElement("div");p.className="carousel-section__content",e.append(t,p);let _;const u=()=>{_!==void 0&&(clearInterval(_),_=void 0)},h=()=>{p.innerHTML=`
      <div class="carousel-section__skeleton-container">
        <div class="carousel-section__skeleton-card"></div>
        <div class="carousel-section__skeleton-card"></div>
        <div class="carousel-section__skeleton-card"></div>
      </div>
    `},i=v=>{p.innerHTML=`
      <div class="carousel-section__error-banner">
        <p class="carousel-section__error-message">${v}</p>
        <button type="button" class="carousel-section__retry-btn">Try Again</button>
      </div>
    `;const m=p.querySelector(".carousel-section__retry-btn");m==null||m.addEventListener("click",()=>{g()})},c=()=>{p.innerHTML=`
      <div class="carousel-section__empty-state">
        <p>No featured games available right now.</p>
      </div>
    `},d=v=>{p.innerHTML="";const m=document.createElement("div");m.className="carousel-section__track-container";const f=document.createElement("div");f.className="carousel-section__track";const w=[];let k=0,E=!1,C=0,N=!1;for(const b of v){const y=document.createElement("div");y.className="carousel-section__slide";const M=pe(b);y.append(M),y.addEventListener("click",T=>{N||(T.preventDefault(),V(b.slug))}),f.append(y),w.push(y)}m.append(f),p.append(m);const x=()=>{const b=window.innerWidth<=1024,y=w.length;for(const[M,T]of w.entries()){T.classList.remove("carousel-section__slide--wide","carousel-section__slide--standard","carousel-section__slide--compact","carousel-section__slide--hidden");let $=(M-k)%y;$>y/2&&($-=y),$<-y/2&&($+=y),T.style.order=`${$+Math.floor(y/2)}`,$===0?T.classList.add("carousel-section__slide--wide"):Math.abs($)===1?T.classList.add(b?"carousel-section__slide--compact":"carousel-section__slide--standard"):!b&&Math.abs($)===2?T.classList.add("carousel-section__slide--compact"):T.classList.add("carousel-section__slide--hidden")}},A=()=>{const b=w.length;k=(k+1)%b,x()},S=()=>{const b=w.length;k=(k-1+b)%b,x()},L=()=>{u(),_=window.setInterval(A,4e3)},G=()=>{u(),L()};a.addEventListener("click",()=>{S(),G()}),l.addEventListener("click",()=>{A(),G()}),m.addEventListener("pointerdown",b=>{E=!0,N=!1,C=b.clientX,u()}),m.addEventListener("pointermove",b=>{E&&Math.abs(b.clientX-C)>5&&(N=!0)});const B=b=>{if(!E)return;E=!1;const y=b.clientX-C;N?(y<-40?A():y>40?S():x(),G()):L()};m.addEventListener("pointerup",B),m.addEventListener("pointercancel",B),window.addEventListener("resize",x),x(),L()},g=async()=>{u(),h();try{const v=await ge();if(!v||v.length===0){c();return}d(v)}catch(v){const m=v instanceof Error?v.message:"Failed to fetch featured games.";i(m),F(m,"error")}};return g(),e},Ce=e=>{const t=e.match(/[A-Z]/g);return t&&t.length>=2?t.slice(0,2).join(""):e.slice(0,2).toUpperCase()},Ae=e=>e.toLocaleString("en-US"),Se=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toString(),Me=()=>{const e=document.createElement("section");e.className="leaderboard-section";const t=document.createElement("header");t.className="leaderboard-section__header";const n=document.createElement("div");n.className="leaderboard-section__title-wrapper";const o=document.createElement("span");o.className="leaderboard-section__badge";const r=document.createElement("h2");r.className="leaderboard-section__title",r.innerHTML=`
    <span class="leaderboard-section__title-full">Top Players This Week</span>
    <span class="leaderboard-section__title-short">Top Players</span>
  `,n.append(o,r),t.append(n);const s=document.createElement("div");s.className="leaderboard-section__table-wrapper",e.append(t,s);const a=()=>{s.innerHTML=`
      <div class="leaderboard-section__skeleton">
        <div class="leaderboard-section__skeleton-row"></div>
        <div class="leaderboard-section__skeleton-row"></div>
        <div class="leaderboard-section__skeleton-row"></div>
        <div class="leaderboard-section__skeleton-row"></div>
        <div class="leaderboard-section__skeleton-row"></div>
      </div>
    `},l=h=>{s.innerHTML=`
      <div class="leaderboard-section__error-banner">
        <p class="leaderboard-section__error-message">${h}</p>
        <button type="button" class="leaderboard-section__retry-btn">Retry</button>
      </div>
    `;const i=s.querySelector(".leaderboard-section__retry-btn");i==null||i.addEventListener("click",()=>{u()})},p=()=>{s.innerHTML=`
      <div class="leaderboard-section__empty-state">
        <p>No leaderboard data available at the moment.</p>
      </div>
    `},_=h=>{s.innerHTML="";const i=document.createElement("table");i.className="leaderboard-table";const c=document.createElement("thead");c.className="leaderboard-table__head";const d=document.createElement("tr");d.className="leaderboard-table__row leaderboard-table__row--head";const g=[{html:"RANK",classModifier:"rank"},{html:"PLAYER",classModifier:"player"},{html:'<span class="leaderboard-table__head-full">GAMES PLAYED</span><span class="leaderboard-table__head-short">GAMES</span>',classModifier:"games"},{html:'<span class="leaderboard-table__head-full">TOTAL SCORE</span><span class="leaderboard-table__head-short">SCORE</span>',classModifier:"score"},{html:"STREAK",classModifier:"streak"},{html:"FAVORITE GAME",classModifier:"favorite"}];for(const m of g){const f=document.createElement("th");f.className=`leaderboard-table__th leaderboard-table__th--${m.classModifier}`,f.innerHTML=m.html,d.append(f)}c.append(d);const v=document.createElement("tbody");v.className="leaderboard-table__body";for(const m of h){const f=document.createElement("tr");f.className="leaderboard-table__row";const w=document.createElement("td");w.className="leaderboard-table__td leaderboard-table__td--rank";const k=document.createElement("span");k.className=`leaderboard-table__rank-text${m.rank===1?" leaderboard-table__rank-text--top":""}`,k.textContent=`#${m.rank}`,w.append(k);const E=document.createElement("td");E.className="leaderboard-table__td leaderboard-table__td--player";const C=document.createElement("div");C.className="leaderboard-table__player-cell";const N=document.createElement("div");N.className=`leaderboard-table__avatar leaderboard-table__avatar--${m.rank}`,N.textContent=Ce(m.playerName);const x=document.createElement("span");x.className="leaderboard-table__player-name",x.textContent=m.playerName,C.append(N,x),E.append(C);const A=document.createElement("td");A.className="leaderboard-table__td leaderboard-table__td--games",A.textContent=m.gamesPlayed.toString();const S=document.createElement("td");S.className="leaderboard-table__td leaderboard-table__td--score",S.innerHTML=`
        <span class="leaderboard-table__score-full">${Ae(m.totalScore)}</span>
        <span class="leaderboard-table__score-short">${Se(m.totalScore)}</span>
      `;const L=document.createElement("td");L.className="leaderboard-table__td leaderboard-table__td--streak";const G=document.createElement("div");G.className="leaderboard-table__streak-cell",G.innerHTML=`
        <span class="leaderboard-table__fire-icon">🔥</span>
        <span class="leaderboard-table__streak-full">${m.streakDays} days</span>
        <span class="leaderboard-table__streak-short">${m.streakDays}d</span>
      `,L.append(G);const B=document.createElement("td");B.className="leaderboard-table__td leaderboard-table__td--favorite";const b=document.createElement("span");b.className="leaderboard-table__game-tag",b.textContent=m.favoriteGameName,B.append(b),f.append(w,E,A,S,L,B),v.append(f)}i.append(c,v),s.append(i)},u=async()=>{a();try{const h=await fe();if(!h||h.length===0){p();return}_(h)}catch(h){const i=h instanceof Error?h.message:"Failed to load leaderboard data";l(i),F(i,"error")}};return u(),e},Te="/minigames/assets/ilustration-side-DsQZrXDY.webp",$e=()=>{const e=document.createElement("section");e.className="game-developers-section";const t=document.createElement("div");t.className="game-developers-section__container";const n=document.createElement("div");n.className="game-developers-section__illustration-wrapper";const o=document.createElement("img");o.className="game-developers-section__illustration",o.src=Te,o.alt="Game developer workspace illustration",n.append(o);const r=document.createElement("div");r.className="game-developers-section__card";const s=document.createElement("h2");s.className="game-developers-section__title",s.textContent="Are You a Game Developer?";const a=document.createElement("p");a.className="game-developers-section__description",a.textContent="Want to see your game on MiniGames? We're always looking for fun, engaging mini games to add to our platform. Submit your game and reach thousands of players!";const l=document.createElement("button");l.type="button",l.className="game-developers-section__button";const p=document.createElement("span");p.className="game-developers-section__button-icon",p.innerHTML=`
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      <polyline points="7 9 12 4 17 9" />
      <line x1="12" y1="4" x2="12" y2="16" />
    </svg>
  `;const _=document.createElement("span");_.textContent="Submit Form",l.append(p,_);const u=document.createElement("p");return u.className="game-developers-section__contact",u.innerHTML='or contact us at <a href="mailto:developers@minigames.com">developers@minigames.com</a>',r.append(s,a,l,u),t.append(n,r),e.append(t),e},se=(e={})=>{const{onNavigate:t}=e,n=document.createElement("footer");n.className="footer",n.innerHTML=`
    <div class="footer__container">
      <div class="footer__top">
        <!-- Brand Section -->
        <div class="footer__brand">
          <div class="footer__logo">
            <img class="footer__logo-img" src="${ee}" alt="MiniGames Logo" />
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
  `;const o=n.querySelectorAll("[data-page]");for(const r of o)r.addEventListener("click",s=>{s.preventDefault();const a=r.dataset.page||"home";t&&t(a)});return n},X=e=>{const t="/minigames/",n=e==="home"?t:`${t}library`;window.location.hash=n,window.dispatchEvent(new CustomEvent("navigate",{detail:e}))},Be=()=>{const e=document.createElement("div");e.className="page-home";const t=oe({activePage:"home",onNavigate:X}),n=document.createElement("main"),o=me(),r=xe(),s=Me(),a=$e();n.append(o,r,s,a);const l=se({onNavigate:X}),p=ae();return e.append(t,n,l,p),e},K=[{value:"rating-desc",label:"Sort by: Rating ↓"},{value:"rating-asc",label:"Sort by: Rating ↑"},{value:"name-asc",label:"Sort by: Name A-Z"},{value:"name-desc",label:"Sort by: Name Z-A"}],Pe=e=>{const t=document.createElement("section");t.className="library-controls";const n=document.createElement("div");n.className="library-controls__header";const o=document.createElement("h1");o.className="library-controls__title",o.textContent="Game Library";const r=document.createElement("p");r.className="library-controls__subtitle",r.textContent="Browse our collection of casual mini-games",n.append(o,r);const s=document.createElement("div");s.className="library-controls__row";const a=document.createElement("div");a.className="library-controls__chips",a.innerHTML='<span style="opacity: 0.6;">Loading categories...</span>';const l=document.createElement("div");l.className="library-controls__sort";const p=document.createElement("button");p.type="button",p.className="library-controls__sort-trigger",p.innerHTML=`
    <span class="library-controls__sort-label">${K[0].label}</span>
    <svg class="library-controls__sort-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `;const _=document.createElement("ul");_.className="library-controls__sort-menu";for(const[h,i]of K.entries()){const c=document.createElement("li");c.className="library-controls__sort-item";const d=document.createElement("button");d.type="button",d.className=`library-controls__sort-option${h===0?" library-controls__sort-option--active":""}`,d.textContent=i.label,d.dataset.value=i.value,d.addEventListener("click",()=>{const g=p.querySelector(".library-controls__sort-label");g&&(g.textContent=i.label);for(const v of _.querySelectorAll(".library-controls__sort-option"))v.classList.remove("library-controls__sort-option--active");d.classList.add("library-controls__sort-option--active"),l.classList.remove("library-controls__sort--open"),e.onSortChange(i.value)}),c.append(d),_.append(c)}return p.addEventListener("click",h=>{h.stopPropagation(),l.classList.toggle("library-controls__sort--open")}),document.addEventListener("click",()=>{l.classList.remove("library-controls__sort--open")}),l.append(p,_),s.append(a,l),t.append(n,s),(async()=>{var h,i;try{const c=await _e();a.innerHTML="";const d=((h=c.find(g=>g.isDefault))==null?void 0:h.value)||((i=c.find(g=>g.isDefault))==null?void 0:i.slug)||"all";for(const g of c){const v=g.value||g.slug||"all",m=g.label||g.name||v,f=document.createElement("button");f.type="button";const w=v===d;f.className=`library-controls__chip${w?" library-controls__chip--active":""}`,f.textContent=m,f.dataset.value=v,f.addEventListener("click",()=>{for(const k of a.querySelectorAll(".library-controls__chip"))k.classList.remove("library-controls__chip--active");f.classList.add("library-controls__chip--active"),e.onCategoryChange(v)}),a.append(f)}}catch(c){const d=c instanceof Error?c.message:"Failed to load categories";F(d,"error")}})(),t},Z=({totalPages:e,currentPage:t,onPageChange:n})=>{const o=Math.max(1,e),r=Math.min(Math.max(1,t),o),s=document.createElement("section");s.className="library-pagination";const a=document.createElement("div");a.className="library-pagination__container";const l=()=>window.matchMedia("(max-width: 640px)").matches,p=()=>{const u=l()?3:4,h=[];let i=Math.max(1,r-Math.floor(u/2)),c=i+u-1;c>o&&(c=o,i=Math.max(1,c-u+1));for(let d=i;d<=c;d++)h.push(d);return h},_=()=>{a.innerHTML="";const u=document.createElement("button");u.type="button",u.className="library-pagination__arrow library-pagination__arrow--prev",u.ariaLabel="Previous page",u.innerHTML=`
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    `,r===1&&(u.disabled=!0,u.classList.add("library-pagination__arrow--disabled")),u.addEventListener("click",()=>{r>1&&n(r-1)}),a.append(u);const h=p();for(const c of h){const d=document.createElement("button");d.type="button",d.className=`library-pagination__page${c===r?" library-pagination__page--active":""}`,d.textContent=c.toString(),d.addEventListener("click",()=>{r!==c&&n(c)}),a.append(d)}const i=document.createElement("button");i.type="button",i.className="library-pagination__arrow library-pagination__arrow--next",i.ariaLabel="Next page",i.innerHTML=`
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    `,r===o&&(i.disabled=!0,i.classList.add("library-pagination__arrow--disabled")),i.addEventListener("click",()=>{r<o&&n(r+1)}),a.append(i)};return window.addEventListener("resize",()=>{_()}),_(),s.append(a),s},Ge=e=>e>=1e3?`${(e/1e3).toFixed(1)}K`:e.toString(),Ie=e=>{const t=document.createElement("article");t.className="library-card";const n=document.createElement("div");n.className="library-card__media";const o=document.createElement("img");o.src=R(e.cardImage),o.alt=e.name||"Game Cover",o.className="library-card__img",o.loading="lazy",o.addEventListener("error",()=>{o.src="https://placehold.co/300x380/1e1e1e/ffffff?text=No+Image"},{once:!0}),n.append(o);const r=document.createElement("div");r.className="library-card__content";const s=document.createElement("div");s.className="library-card__header";const a=document.createElement("div");a.className="library-card__title-group";const l=document.createElement("h3");l.className="library-card__title",l.textContent=e.name||"Untitled";const p=document.createElement("span");p.className="library-card__category",p.textContent=e.category||"All",a.append(l,p);const _=document.createElement("span");_.className="library-card__price",_.textContent=e.price||"Free",s.append(a,_);const u=document.createElement("p");u.className="library-card__desc",u.textContent=e.shortDescription||"";const h=document.createElement("div");h.className="library-card__footer";const i=document.createElement("div");i.className="library-card__stats";const c=document.createElement("div");c.className="library-card__stats-group";const d=document.createElement("div");d.className="library-card__stat",d.innerHTML=`
    <svg class="library-card__icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FFD02B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
    <span>${e.rating?e.rating.toFixed(1):"0.0"}</span>
  `;const g=document.createElement("div");g.className="library-card__stat",g.innerHTML=`
    <svg class="library-card__icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FF4B4B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
    <span>${Ge(e.likesCount||0)}</span>
  `,c.append(d,g);const v=document.createElement("span");v.className="library-card__price--mobile",v.textContent=e.price||"Free",i.append(c,v);const m=document.createElement("button");return m.type="button",m.className="library-card__btn",m.textContent="Details",m.addEventListener("click",()=>{V(e.slug)}),h.append(i,m),r.append(s,u,h),t.append(n,r),t},He=()=>{const e=document.createElement("section");e.className="library-games";const t=document.createElement("div");t.className="library-games__container";const n=document.createElement("div");n.className="library-games__pagination-wrapper",e.append(t,n);const o=P.getQueryParams(),r=o.category||"all",s=o.sort||"rating-desc",a=Number.parseInt(o.page||"1",10),l=()=>{t.innerHTML=`
      <div class="library-games__skeleton-grid">
        <div class="library-games__skeleton-card"></div>
        <div class="library-games__skeleton-card"></div>
        <div class="library-games__skeleton-card"></div>
        <div class="library-games__skeleton-card"></div>
        <div class="library-games__skeleton-card"></div>
        <div class="library-games__skeleton-card"></div>
      </div>
    `},p=i=>{t.innerHTML=`
      <div class="library-games__error-banner">
        <p class="library-games__error-message">${i}</p>
        <button type="button" class="library-games__retry-btn">Retry</button>
      </div>
    `,n.innerHTML="";const c=t.querySelector(".library-games__retry-btn");c==null||c.addEventListener("click",()=>{h()})},_=(i=1)=>{t.innerHTML=`
      <div class="library-games__empty-state">
        <p>No games found matching your criteria.</p>
      </div>
    `,n.innerHTML="";const c=Z({totalPages:i,currentPage:1,onPageChange:d=>{P.updateQueryParams({page:d.toString()})}});n.append(c)},u=(i,c)=>{t.innerHTML="";const d=document.createElement("div");d.className="library-games__grid";for(const v of i)d.append(Ie(v));t.append(d),n.innerHTML="";const g=Z({totalPages:c,currentPage:a,onPageChange:v=>{P.updateQueryParams({page:v.toString()})}});n.append(g)},h=async()=>{var i;l();try{const c=await he({category:r,sort:s,page:a,limit:6}),d=((i=c.meta)==null?void 0:i.totalPages)||1;if(!c.data||c.data.length===0){_(d);return}u(c.data,d)}catch(c){const d=c instanceof Error?c.message:"Failed to load library games";p(d),F(d,"error")}};return h(),{element:e,updateState:({category:i,sort:c,page:d})=>{const g={};i!==void 0&&(g.category=i==="all"?void 0:i,g.page="1"),c!==void 0&&(g.sort=c==="rating-desc"?void 0:c,g.page="1"),d!==void 0&&(g.page=d===1?void 0:d.toString()),P.updateQueryParams(g)}}},J=e=>{const t="/minigames/",n=e==="home"?`${t}/`:`${t}/${e}`;window.history.pushState({},"",n),window.dispatchEvent(new CustomEvent("navigate",{detail:e}))},Re=()=>{const e=document.createElement("div");e.className="page-library";const t=oe({activePage:"library",onNavigate:J}),n=document.createElement("main"),o=He(),r=Pe({onCategoryChange:l=>{o.updateState({category:l})},onSortChange:l=>{o.updateState({sort:l})}});n.append(r,o.element);const s=se({onNavigate:J}),a=ae();return e.append(t,n,s,a),e},De=()=>{const e=document.createElement("div");e.className="not-found-page",e.innerHTML=`
    <div class="not-found-page__container">
      <div class="not-found-page__badge">404</div>
      <h1 class="not-found-page__title">Page Not Found</h1>
      <p class="not-found-page__description">
        Oops! The page you are looking for doesn't exist, was removed, or the link is invalid.
      </p>
      <button type="button" class="not-found-page__btn" id="return-home-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>Return to Home Page</span>
      </button>
    </div>
  `;const t=e.querySelector("#return-home-btn");return t==null||t.addEventListener("click",()=>{P.navigate(D||"/")}),e};let j;const W="/minigames/",D=W.endsWith("/")?W.slice(0,-1):W,Y=()=>{const e=document.createElement("header");return e.className="main-header-wrapper",e},O=()=>{const e=document.createElement("footer");return e.className="main-footer",e.innerHTML=`
    <div class="main-footer__container">
      <p>&copy; ${new Date().getFullYear()} MiniGames SPA. All rights reserved.</p>
    </div>
  `,e},P=new ie([{path:D||"/",render:()=>{const e=document.createElement("div");return e.append(Y(),Be(),O()),e}},{path:`${D}/library`,render:()=>{const e=document.createElement("div");return e.append(Y(),Re(),O()),e}},{path:`${D}/404`,render:()=>{const e=document.createElement("div");return e.append(Y(),De(),O()),e}}]);P.onRouteChange(e=>{const t=e.game;t?j!==t&&(j=t,V(t,!1)):j&&(j=void 0,Ne())});const Fe=()=>{let e=document.querySelector("#app");e||(e=document.createElement("div"),e.id="app",document.body.append(e)),window.addEventListener("navigate",t=>{const o=t.detail,r=o==="home"?`${D||"/"}`:`${D}/${o}`;P.navigate(r)}),P.init(e)};Fe();
