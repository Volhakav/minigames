var Zs=Object.defineProperty;var ei=(t,e,n)=>e in t?Zs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var it=(t,e,n)=>ei(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();class ti{constructor(e){it(this,"routes",{});it(this,"appRoot");it(this,"routeChangeListeners",[]);for(const n of e)this.routes[n.path]=n.render;window.addEventListener("popstate",()=>this.handleRoute()),document.addEventListener("click",n=>{const r=n.target.closest("a[data-link]");if(r){n.preventDefault();const s=r.getAttribute("href");s&&this.navigate(s)}})}init(e){this.appRoot=e,this.handleRoute()}navigate(e,n=!1){n?window.history.replaceState({},"",e):window.history.pushState({},"",e),this.handleRoute()}updateQueryParams(e,n=!1){const r=new URL(window.location.href);for(const[i,a]of Object.entries(e))a===void 0||a===""?r.searchParams.delete(i):r.searchParams.set(i,a);const s=r.pathname+r.search;this.navigate(s,n)}getQueryParams(){const e=new URLSearchParams(window.location.search),n={};for(const[r,s]of e.entries())n[r]=s;return n}onRouteChange(e){this.routeChangeListeners.push(e)}handleRoute(){if(!this.appRoot)return;const e="/minigames/",n=e.endsWith("/")?e.slice(0,-1):e;let r=window.location.pathname;r.length>1&&r.endsWith("/")&&(r=r.slice(0,-1)),(r===n||r==="")&&(r=n||"/");let s=this.routes[r];if(!s){const a=`${n}/404`;s=this.routes[a]||this.routes["/404"]}this.appRoot.innerHTML="",s&&this.appRoot.append(s());const i=this.getQueryParams();for(const a of this.routeChangeListeners)a(i)}}const Cr="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABX1JREFUeAG9V1tsFGUU/v7Zme1eusv2IqhUulzagGhKuWlKrCsGERSihgQfjPogmhiNJoov6oMiiYnVgA/EqIlNiA/6Ig9abokUiYhikAoFQVvX2lIX2rLtXrqXmf09/9+d7W472y6kcJLZmf92zne+c5kdhqz4/QGfCvUVegyAsQBuhHCc5jB2dwW/bzWnmPhZ7A/4DaYd4YQDN0HITtDg6QeCwfagBFA3f93fwvicW6tTH7RsN5beXa96PG4NMyhkyGhr+yG5c8ce7XJoSMuCaGR1/rXPcmb7YvacqvT+g59pLrcTNpsNMyw8k8kwRVEQGYli4/rn06HQgAbO31HIuIg73nr7xbTHWy6Mc8y8SOMCiLvchZaP3tDHZtn9YnaZeN6w8b4yQimnS9Z6LZvzgNy5tE7NjgOKuUJu22hxWu855znjE4GYa9OJxzueX+qEtWkdUhiDYKrzj36c+DUox/eu9GPJ4tvkcwkQeL4dFdchkWgSn7Yex9ffnKIwAlufWI5339wEr8cxxsTUxwucLAkAmzRm6L0URko3IGLY2xcusGruz9Akm4bUkgDoRgYGXcKIZrdBoSpd1ViLi11XiAGOlctrqXpEaDjSaYMyDbKURUimC+qUAMyz0WgC+77rwG8dfXA4NGlscCiGWUS52NTdM4idHx4ikAaSiTQaG2rw2KMNmOV1yfP8egGYoigMJ0/1YO9XJ1HuLoOmKigvd8BTXiZh/vhTt8wLnUISj9GdgDy+qaEU1VMDMNPVSV5XV3pQVeFGBV2qjTgm6seqjsPtsstLhGp4OI7qKg8cZXaU5JylYc4Lmoym0XtSZTAoxoINEWOWF1/xzGheNBnD4BQiBXb7uG9T9QhLBkTypNM6Qlci1MRBdNtBtqVxSQu3RA3RBQQuYSxMTIxEkhBkzb7FS07YLI9NAmB63XG2Dx9/0o5/e8NY0ThPKpR1ni10zgr3m9q9Hid6+oaxs+Ug5c0/qK2pwEsvBLCKKsWqRxTNgbPn+nHoyAWkUjp6+4cp451wOe2y1AoczwMhmHPSntNnejFCgAeoUi78GUKguV4CsBKlGACR7W6nJmNaVeGCz+dE9mVF3nNJuXkJyk1YAqDP60CFzyV7h0hOnyjXIlKUgdUravHc0034q3sAzWsW4jx5su/bDsoHJ1RKtkQyJXuBkMpKN1wOuyw/0TPWNtdhSf0cHDvehUULqrFqRW3pAExP5t1RiddeflDyS69JvL/rMGKjKWLGIetdlGNzUx2E72c6L5HhpNwbjyfhpf7w1NbVeHLLShkWVVOKNiNLBmQZ0kGzlMRY1LhKPTgeT8lc2LJ5GbY90yQp/3zvcbR++bNcEy1YN8bKtcw2rj6T1TlRLHOAZV+rJupEMo0EKTfI84HBiFxpumeBBCha85rVCyUTA4NRYieDBDGVShl5DsHSeFEAOSDZe5Ta69DVKN0TsiqGI6PoPNeX23f2fB+Gw6NIEtAYheBqOCbPTFJkISW9C+yahs2PNOCuxXOhUEcUrbhmro+81akiGGpur8DrlC+iU2YoVAsp8UTjKUXYovnrJNMXuw+JW8G/lZxICidM5ZWebNsTNnBucSinDax+wUNykAtBJBLTrYwX0yP7P2OWxs11q/Yv/p7Tbt0cCwDt4qHz9wt6ttHwQkXj7b/wym4rum4JnIuy3N92LDU2wmkqUH5UPG/f3qLEo3Gp0gqIBQe5e6l/z4X30Ugc7+3Yo2YN7FZ06LtIRTD034B9w/ptqQNtx+LUeIwSdY67ZgEtX0ZGYvovJzoSZCN9OTRop64Q7Aoebs1+nD5MH6cZ+jjlftwEEcYNrtDH6YFgAdg6/zr6TsSr9Fja/6lrl6OUGO16JrWLvozDYuJ/be9M+oCh90EAAAAASUVORK5CYII=",ni=()=>{};var Ln={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ri=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],o=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Pr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,o=a?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,d=i>>2,h=(i&3)<<4|o>>4;let u=(o&15)<<2|l>>6,g=l&63;c||(g=64,a||(u=64)),r.push(n[d],n[h],n[u],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ri(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],o=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||o==null||l==null||h==null)throw new si;const u=i<<2|o>>4;if(r.push(u),l!==64){const g=o<<4&240|l>>2;if(r.push(g),h!==64){const p=l<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class si extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ii=function(t){const e=Nr(t);return Pr.encodeByteArray(e,!0)},Lr=function(t){return ii(t).replace(/\./g,"")},Rr=function(t){try{return Pr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=()=>ai().__FIREBASE_DEFAULTS__,ci=()=>{if(typeof process>"u"||typeof Ln>"u")return;const t=Ln.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},li=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rr(t[1]);return e&&JSON.parse(e)},sn=()=>{try{return ni()||oi()||ci()||li()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},di=t=>{var e,n;return(n=(e=sn())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Dr=()=>{var t;return(t=sn())==null?void 0:t.config},Or=t=>{var e;return(e=sn())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ui(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(H())}function hi(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xr(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pi(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fi(){const t=H();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ur(){try{return typeof indexedDB=="object"}catch{return!1}}function $r(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function mi(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi="FirebaseError";class X extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gi,Object.setPrototypeOf(this,X.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ue.prototype.create)}}class Ue{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?_i(i,r):"Error",o=`${this.serviceName}: ${a} (${s}).`;return new X(s,o,r)}}function _i(t,e){try{let n=0,r="";for(;n<t.length;){const s=t.indexOf("{$",n);if(s===-1){r+=t.substring(n);break}const i=t.indexOf("}",s+2);if(i===-1){r+=t.substring(n);break}const a=t.substring(s+2,i),o=e[a];r+=t.substring(n,s)+(o!=null?String(o):`<${a}?>`),n=i+1}return r}catch{return t}}function yi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Re(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Rn(i)&&Rn(a)){if(!Re(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Rn(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ze(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ke(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vi(t,e){const n=new bi(t,e);return n.subscribe.bind(n)}class bi{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wi(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Lt),s.error===void 0&&(s.error=Lt),s.complete===void 0&&(s.complete=Lt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wi(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lt(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=1e3,Ii=2,ki=4*60*60*1e3,Si=.5;function Dn(t,e=Ei,n=Ii){const r=e*Math.pow(n,t),s=Math.round(Si*r*(Math.random()-.5)*2);return Math.min(ki,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ti(t){return(await fetch(t,{credentials:"include"})).ok}class ie{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Mr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ni(e))try{this.getOrInitializeService({instanceIdentifier:Ce})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ce){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ce){return this.instances.has(e)}getOptions(e=Ce){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);r===o&&a.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ci(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ce){return this.component?this.component.multipleInstances?e:Ce:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ci(t){return t===Ce?void 0:t}function Ni(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ai(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(O||(O={}));const Li={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Ri=O.INFO,Di={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},Oi=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Di[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class on{constructor(e){this.name=e,this._logLevel=Ri,this._logHandler=Oi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Li[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const Mi=(t,e)=>e.some(n=>t instanceof n);let On,Mn;function xi(){return On||(On=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ui(){return Mn||(Mn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fr=new WeakMap,zt=new WeakMap,Br=new WeakMap,Rt=new WeakMap,cn=new WeakMap;function $i(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Se(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Fr.set(n,t)}).catch(()=>{}),cn.set(e,t),e}function Fi(t){if(zt.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});zt.set(t,e)}let Kt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Br.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Se(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bi(t){Kt=t(Kt)}function Hi(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dt(this),e,...n);return Br.set(r,e.sort?e.sort():[e]),Se(r)}:Ui().includes(t)?function(...e){return t.apply(Dt(this),e),Se(Fr.get(this))}:function(...e){return Se(t.apply(Dt(this),e))}}function Vi(t){return typeof t=="function"?Hi(t):(t instanceof IDBTransaction&&Fi(t),Mi(t,xi())?new Proxy(t,Kt):t)}function Se(t){if(t instanceof IDBRequest)return $i(t);if(Rt.has(t))return Rt.get(t);const e=Vi(t);return e!==t&&(Rt.set(t,e),cn.set(e,t)),e}const Dt=t=>cn.get(t);function Hr(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),o=Se(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Se(a.result),c.oldVersion,c.newVersion,Se(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const Wi=["get","getKey","getAll","getAllKeys","count"],qi=["put","add","delete","clear"],Ot=new Map;function xn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ot.get(e))return Ot.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=qi.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Wi.includes(n)))return;const i=async function(a,...o){const c=this.transaction(a,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),s&&c.done]))[0]};return Ot.set(e,i),i}Bi(t=>({...t,get:(e,n,r)=>xn(e,n)||t.get(e,n,r),has:(e,n)=>!!xn(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ji(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ji(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yt="@firebase/app",Un="0.16.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new on("@firebase/app"),zi="@firebase/app-compat",Ki="@firebase/analytics-compat",Yi="@firebase/analytics",Ji="@firebase/app-check-compat",Xi="@firebase/app-check",Qi="@firebase/auth",Zi="@firebase/auth-compat",ea="@firebase/database",ta="@firebase/data-connect",na="@firebase/database-compat",ra="@firebase/functions",sa="@firebase/functions-compat",ia="@firebase/installations",aa="@firebase/installations-compat",oa="@firebase/messaging",ca="@firebase/messaging-compat",la="@firebase/performance",da="@firebase/performance-compat",ua="@firebase/remote-config",ha="@firebase/remote-config-compat",pa="@firebase/storage",fa="@firebase/storage-compat",ma="@firebase/firestore",ga="@firebase/ai",_a="@firebase/firestore-compat",ya="firebase",va="13.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="[DEFAULT]",ba={[Yt]:"fire-core",[zi]:"fire-core-compat",[Yi]:"fire-analytics",[Ki]:"fire-analytics-compat",[Xi]:"fire-app-check",[Ji]:"fire-app-check-compat",[Qi]:"fire-auth",[Zi]:"fire-auth-compat",[ea]:"fire-rtdb",[ta]:"fire-data-connect",[na]:"fire-rtdb-compat",[ra]:"fire-fn",[sa]:"fire-fn-compat",[ia]:"fire-iid",[aa]:"fire-iid-compat",[oa]:"fire-fcm",[ca]:"fire-fcm-compat",[la]:"fire-perf",[da]:"fire-perf-compat",[ua]:"fire-rc",[ha]:"fire-rc-compat",[pa]:"fire-gcs",[fa]:"fire-gcs-compat",[ma]:"fire-fst",[_a]:"fire-fst-compat",[ga]:"fire-vertex","fire-js":"fire-js",[ya]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new Map,wa=new Map,Xt=new Map;function $n(t,e){try{t.container.addComponent(e)}catch(n){pe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fe(t){const e=t.name;if(Xt.has(e))return pe.debug(`There were multiple attempts to register component ${e}.`),!1;Xt.set(e,t);for(const n of mt.values())$n(n,t);for(const n of wa.values())$n(n,t);return!0}function qe(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function G(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},le=new Ue("app","Firebase",Ea);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ie("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw le.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=va;function Vr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Jt,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw le.create("bad-app-name",{appName:String(s)});if(n||(n=Dr()),!n)throw le.create("no-options");const i=mt.get(s);if(i)if(Re(n,i.options)){if(Re(r,i.config))return i;throw le.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(r)})}else throw le.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(n)});const a=new Pi(s);for(const c of Xt.values())a.addComponent(c);const o=new Ia(n,r,a);return mt.set(s,o),o}function Wr(t=Jt){const e=mt.get(t);if(!e&&t===Jt&&Dr())return Vr();if(!e)throw le.create("no-app",{appName:t});return e}function re(t,e,n){let r=ba[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pe.warn(a.join(" "));return}fe(new ie(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="firebase-heartbeat-database",Sa=1,Xe="firebase-heartbeat-store";let Mt=null;function qr(){return Mt||(Mt=Hr(ka,Sa,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xe)}catch(n){console.warn(n)}}}}).catch(t=>{throw le.create("idb-open",{originalErrorMessage:t.message})})),Mt}async function Ta(t){try{const n=(await qr()).transaction(Xe),r=await n.objectStore(Xe).get(Gr(t));return await n.done,r}catch(e){if(e instanceof X)pe.warn(e.message);else{const n=le.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pe.warn(n.message)}}}async function Fn(t,e){try{const r=(await qr()).transaction(Xe,"readwrite");await r.objectStore(Xe).put(e,Gr(t)),await r.done}catch(n){if(n instanceof X)pe.warn(n.message);else{const r=le.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pe.warn(r.message)}}}function Gr(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=1024,Ca=30;class Na{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new La(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bn();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Ca){const a=Ra(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){pe.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bn(),{heartbeatsToSend:r,unsentEntries:s}=Pa(this._heartbeatsCache.heartbeats),i=Lr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return pe.warn(n),""}}}function Bn(){return new Date().toISOString().substring(0,10)}function Pa(t,e=Aa){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Hn(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Hn(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class La{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ur()?$r().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ta(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Hn(t){return Lr(JSON.stringify({version:2,heartbeats:t})).length}function Ra(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(t){fe(new ie("platform-logger",e=>new Gi(e),"PRIVATE")),fe(new ie("heartbeat",e=>new Na(e),"PRIVATE")),re(Yt,Un,t),re(Yt,Un,"esm2020"),re("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Da("");var Oa="firebase",Ma="13.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */re(Oa,Ma,"app");function jr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xa=jr,zr=new Ue("auth","Firebase",jr());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=new on("@firebase/auth");function dt(t,...e){gt.logLevel<=O.WARN&&gt.warn(`Auth (${et}): ${t}`,...e)}function ut(t,...e){gt.logLevel<=O.ERROR&&gt.error(`Auth (${et}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t,...e){throw ln(t,...e)}function J(t,...e){return ln(t,...e)}function kt(t,e,n){const r={...xa(),[e]:n};return new Ue("auth","Firebase",r).create(e,{appName:t.name})}function he(t){return kt(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ua(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&j(t,"argument-error"),kt(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ln(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zr.create(t,...e)}function w(t,e,...n){if(!t)throw ln(e,...n)}function de(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ut(e),new Error(e)}function me(t,e){t||de(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function $a(){return Vn()==="http:"||Vn()==="https:"}function Vn(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($a()||xr()||"connection"in navigator)?navigator.onLine:!0}function Ba(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){this.shortDelay=e,this.longDelay=n,me(n>e,"Short delay should be less than long delay!"),this.isMobile=ui()||pi()}get(){return Fa()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,e){me(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;de("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;de("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;de("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Wa=new tt(3e4,6e4);function Te(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ge(t,e,n,r,s={}){return Yr(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const o=Ze({...a,key:t.config.apiKey}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...i};return hi()||(l.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&an(t.emulatorConfig.host)&&(l.credentials="include"),Kr.fetch()(await Jr(t,t.config.apiHost,n,o),l)})}async function Yr(t,e,n){t._canInitEmulator=!1;const r={...Ha,...e};try{const s=new Ga(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw at(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const o=i.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw at(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw at(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw at(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw kt(t,d,l);j(t,d)}}catch(s){if(s instanceof X)throw s;j(t,"network-request-failed",{message:String(s)})}}async function nt(t,e,n,r,s={}){const i=await ge(t,e,n,r,s);return"mfaPendingCredential"in i&&j(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Jr(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?dn(t.config,s):`${t.config.apiScheme}://${s}`;return Va.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function qa(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ga{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(J(this.auth,"network-request-failed")),Wa.get())})}}function at(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=J(t,e,r);return s.customData._tokenResponse=n,s}function Wn(t){return t!==void 0&&t.enterprise!==void 0}class ja{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return qa(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function za(t,e){return ge(t,"GET","/v2/recaptchaConfig",Te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ka(t,e){return ge(t,"POST","/v1/accounts:delete",e)}async function _t(t,e){return ge(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ya(t,e=!1){const n=z(t),r=await n.getIdToken(e),s=un(r);w(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ye(xt(s.auth_time)),issuedAtTime:Ye(xt(s.iat)),expirationTime:Ye(xt(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xt(t){return Number(t)*1e3}function un(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ut("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rr(n);return s?JSON.parse(s):(ut("Failed to decode base64 JWT payload"),null)}catch(s){return ut("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function qn(t){const e=un(t);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof X&&Ja(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ja({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ye(this.lastLoginAt),this.creationTime=Ye(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(t){var h;const e=t.auth,n=await t.getIdToken(),r=await We(t,_t(e,{idToken:n}));w(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(h=s.providerUserInfo)!=null&&h.length?Xr(s.providerUserInfo):[],a=Za(t.providerData,i),o=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),l=o?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zt(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,d)}async function Qa(t){const e=z(t);await yt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Za(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Xr(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t,e){const n=await Yr(t,{},async()=>{const r=Ze({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await Jr(t,s,"/v1/token",`key=${i}`),o=await t._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:o,body:r};return t.emulatorConfig&&an(t.emulatorConfig.host)&&(c.credentials="include"),Kr.fetch()(a,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function to(t,e){return ge(t,"POST","/v2/accounts:revokeToken",Te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){w(e.length!==0,"internal-error");const n=qn(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(w(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await eo(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Fe;return r&&(w(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(w(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(w(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fe,this.toJSON())}_performRefresh(){return de("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t,e){w(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class K{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Xa(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zt(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await We(this,this.stsTokenManager.getToken(this.auth,e));return w(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ya(this,e)}reload(){return Qa(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new K({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(G(this.auth.app))return Promise.reject(he(this.auth));const e=await this.getIdToken();return await We(this,Ka(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,a=n.photoURL??void 0,o=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:h,emailVerified:u,isAnonymous:g,providerData:p,stsTokenManager:A}=n;w(h&&A,e,"internal-error");const C=Fe.fromJSON(this.name,A);w(typeof h=="string",e,"internal-error"),ve(r,e.name),ve(s,e.name),w(typeof u=="boolean",e,"internal-error"),w(typeof g=="boolean",e,"internal-error"),ve(i,e.name),ve(a,e.name),ve(o,e.name),ve(c,e.name),ve(l,e.name),ve(d,e.name);const b=new K({uid:h,auth:e,email:s,emailVerified:u,displayName:r,isAnonymous:g,photoURL:a,phoneNumber:i,tenantId:o,stsTokenManager:C,createdAt:l,lastLoginAt:d});return p&&Array.isArray(p)&&(b.providerData=p.map(_=>({..._}))),c&&(b._redirectEventId=c),b}static async _fromIdTokenResponse(e,n,r=!1){const s=new Fe;s.updateFromServerResponse(n);const i=new K({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await yt(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];w(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Xr(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),o=new Fe;o.updateFromIdToken(r);const c=new K({uid:s.localId,auth:e,stsTokenManager:o,isAnonymous:a}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Zt(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new Map;function ue(t){me(t instanceof Function,"Expected a class definition");let e=Gn.get(t);return e?(me(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gn.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qr.type="NONE";const jn=Qr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,e,n){return`firebase:${t}:${e}:${n}`}class Le{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ht(this.userKey,s.apiKey,i),this.fullPersistenceKey=ht("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await _t(this.auth,{idToken:e}).catch(()=>{});return n?K._fromGetAccountInfoResponse(this.auth,n,e):null}return K._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,n,r="authUser"){if(!n.length)return new Le(ue(jn),e,r);const s=(await Promise.all(n.map(async l=>{try{if(await l._isAvailable())return l}catch{return}}))).filter(l=>l);let i=s[0]||ue(jn);const a=ht(r,e.config.apiKey,e.name);let o=null;for(const l of n)try{const d=await l._get(a);if(d){let h;if(typeof d=="string"){const u=await _t(e,{idToken:d}).catch(()=>{});if(!u)break;h=await K._fromGetAccountInfoResponse(e,u,d)}else h=K._fromJSON(e,d);l!==i&&(o=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Le(i,e,r):(i=c[0],o&&await i._set(a,o.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(a)}catch{}})),new Le(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ns(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ss(e))return"Blackberry";if(is(e))return"Webos";if(es(e))return"Safari";if((e.includes("chrome/")||ts(e))&&!e.includes("edge/"))return"Chrome";if(rs(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zr(t=H()){return/firefox\//i.test(t)}function es(t=H()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ts(t=H()){return/crios\//i.test(t)}function ns(t=H()){return/iemobile/i.test(t)}function rs(t=H()){return/android/i.test(t)}function ss(t=H()){return/blackberry/i.test(t)}function is(t=H()){return/webos/i.test(t)}function hn(t=H()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function no(t=H()){var e;return hn(t)&&!!((e=window.navigator)!=null&&e.standalone)}function ro(){return fi()&&document.documentMode===10}function as(t=H()){return hn(t)||rs(t)||is(t)||ss(t)||/windows phone/i.test(t)||ns(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t,e=[]){let n;switch(t){case"Browser":n=zn(H());break;case"Worker":n=`${zn(H())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${et}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,o)=>{try{const c=e(i);a(c)}catch(c){o(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(t,e={}){return ge(t,"GET","/v2/passwordPolicy",Te(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=6;class oo{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??ao,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kn(this),this.idTokenSubscription=new Kn(this),this.beforeStateQueue=new so(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ue(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted){try{this.persistenceManager=await Le.create(this,e)}catch(a){dt(`Failed to initialize persistence: ${a}`),this.persistenceManager=await Le.create(this,[])}finally{(r=this._resolvePersistenceManagerAvailable)==null||r.call(this)}if(!this._deleted){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(a){dt(`Failed to initialize current user: ${a}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _t(this,{idToken:e}),r=await K._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(G(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,o=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yt(e)}catch(n){const r=n==null?void 0:n.code;if(r!=="auth/network-request-failed"&&r!=="auth/too-many-requests"&&!(r!=null&&r.startsWith("auth/quota-exceeded")))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ba()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(G(this.app))return Promise.reject(he(this));const n=e?z(e):null;return n&&w(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return G(this.app)?Promise.reject(he(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return G(this.app)?Promise.reject(he(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ue(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await io(this),n=new oo(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ue("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await to(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ue(e)||this._popupRedirectResolver;w(n,this,"argument-error"),this.redirectPersistenceManager=await Le.create(this,[ue(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(o,this,"internal-error"),o.then(()=>{a||i(this.currentUser)}).catch(c=>{if(!a)if(typeof n!="function"&&n.error)n.error(c);else if(r)r(c);else throw c}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(n){const r=(n==null?void 0:n.message)||String(n),s=kt(this,"internal-error",`An internal AuthError has occurred: ${r}`);throw s.customData={originalError:n},s}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=os(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(G(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&dt(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ae(t){return z(t)}class Kn{constructor(e){this.auth=e,this.observer=null,this.addObserver=vi(n=>this.observer=n)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let St={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lo(t){St=t}function cs(t){return St.loadJS(t)}function uo(){return St.recaptchaEnterpriseScript}function ho(){return St.gapiScript}function po(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class fo{constructor(){this.enterprise=new mo}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class mo{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go="recaptcha-enterprise",ls="NO_RECAPTCHA",Yn="onFirebaseAuthREInstanceReady";class be{constructor(e){this.type=go,this.auth=Ae(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,o)=>{za(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const l=new ja(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,a(l.siteKey)}}).catch(c=>{o(c)})})}function s(i,a,o){const c=window.grecaptcha;Wn(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{a(l)}).catch(()=>{a(ls)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new fo().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(async o=>{if(!n&&Wn(window.grecaptcha)&&be.scriptInjectionDeferred)await be.scriptInjectionDeferred.promise,s(o,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=uo();c.length!==0&&(c+=o+`&onload=${Yn}`),be.scriptInjectionDeferred=new Mr,window[Yn]=()=>{var l;(l=be.scriptInjectionDeferred)==null||l.resolve()},cs(c).then(()=>{var l;return(l=be.scriptInjectionDeferred)==null?void 0:l.promise}).then(()=>{s(o,i,a)}).catch(l=>{a(l)})}}).catch(o=>{a(o)})})}}be.scriptInjectionDeferred=null;async function Jn(t,e,n,r=!1,s=!1){const i=new be(t);let a;if(s)a=ls;else try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const o={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in o){const c=o.phoneEnrollmentInfo.phoneNumber,l=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const c=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function en(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Jn(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Jn(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t,e){const n=qe(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Re(i,e??{}))return s;j(s,"already-initialized")}return n.initialize({options:e})}function yo(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ue);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vo(t,e,n){const r=Ae(t);w(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ds(e),{host:a,port:o}=bo(e),c=o===null?"":`:${o}`,l={url:`${i}//${a}${c}/`},d=Object.freeze({host:a,port:o,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){w(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),w(Re(l,r.config.emulator)&&Re(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,an(a)?Ti(`${i}//${a}${c}`):wo()}function ds(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bo(t){const e=ds(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Xn(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Xn(a)}}}function Xn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wo(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return de("not implemented")}_getIdTokenResponse(e){return de("not implemented")}_linkToIdToken(e,n){return de("not implemented")}_getReauthenticationResolver(e){return de("not implemented")}}async function Eo(t,e){return ge(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(t,e){return nt(t,"POST","/v1/accounts:signInWithPassword",Te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t,e){return nt(t,"POST","/v1/accounts:signInWithEmailLink",Te(t,e))}async function So(t,e){return nt(t,"POST","/v1/accounts:signInWithEmailLink",Te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends pn{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Qe(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Qe(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return en(e,n,"signInWithPassword",Io);case"emailLink":return ko(e,{email:this._email,oobCode:this._password});default:j(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return en(e,r,"signUpPassword",Eo);case"emailLink":return So(e,{idToken:n,email:this._email,oobCode:this._password});default:j(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(t,e){return nt(t,"POST","/v1/accounts:signInWithIdp",Te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="http://localhost";class De extends pn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new De(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):j("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const a=new De(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Be(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Be(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Be(e,n)}buildRequest(){const e={requestUri:To,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ze(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Co(t){const e=ze(Ke(t)).link,n=e?ze(Ke(e)).deep_link_id:null,r=ze(Ke(t)).deep_link_id;return(r?ze(Ke(r)).link:null)||r||n||e||t}class fn{constructor(e){const n=ze(Ke(e)),r=n.apiKey??null,s=n.oobCode??null,i=Ao(n.mode??null);w(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Co(e);try{return new fn(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(){this.providerId=Ge.PROVIDER_ID}static credential(e,n){return Qe._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fn.parseLink(n);return w(r,"argument-error"),Qe._fromEmailAndCode(e,r.code,r.tenantId)}}Ge.PROVIDER_ID="password";Ge.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ge.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends mn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends rt{constructor(){super("facebook.com")}static credential(e){return De._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return we.credential(e.oauthAccessToken)}catch{return null}}}we.FACEBOOK_SIGN_IN_METHOD="facebook.com";we.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends rt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return De._fromParams({providerId:oe.PROVIDER_ID,signInMethod:oe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return oe.credentialFromTaggedObject(e)}static credentialFromError(e){return oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return oe.credential(n,r)}catch{return null}}}oe.GOOGLE_SIGN_IN_METHOD="google.com";oe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee extends rt{constructor(){super("github.com")}static credential(e){return De._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ee.credential(e.oauthAccessToken)}catch{return null}}}Ee.GITHUB_SIGN_IN_METHOD="github.com";Ee.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends rt{constructor(){super("twitter.com")}static credential(e,n){return De._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ie.credential(n,r)}catch{return null}}}Ie.TWITTER_SIGN_IN_METHOD="twitter.com";Ie.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(t,e){return nt(t,"POST","/v1/accounts:signUp",Te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await K._fromIdTokenResponse(e,r,s),a=Qn(r);return new Oe({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qn(r);return new Oe({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends X{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,vt.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new vt(e,n,r,s)}}function us(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vt._fromErrorAndOperation(t,i,e,r):i})}async function Po(t,e,n=!1){const r=await We(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Oe._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t,e,n=!1){const{auth:r}=t;if(G(r.app))return Promise.reject(he(r));const s="reauthenticate";try{const i=await We(t,us(r,s,e,t),n);w(i.idToken,r,"internal-error");const a=un(i.idToken);w(a,r,"internal-error");const{sub:o}=a;return w(t.uid===o,r,"user-mismatch"),Oe._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&j(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t,e,n=!1){if(G(t.app))return Promise.reject(he(t));const r="signIn",s=await us(t,r,e),i=await Oe._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Ro(t,e){return hs(Ae(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t){const e=Ae(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Do(t,e,n){if(G(t.app))return Promise.reject(he(t));const r=Ae(t),a=await en(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",No).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ps(t),c}),o=await Oe._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(o.user),o}function Oo(t,e,n){return G(t.app)?Promise.reject(he(t)):Ro(z(t),Ge.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ps(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t,e){return ge(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t,e){const{displayName:n,photoURL:r}=e;if(n===void 0&&r===void 0)return;const s=z(t),a={idToken:await s.getIdToken(),displayName:n,photoUrl:r,returnSecureToken:!0},o=await We(s,Mo(s.auth,a));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const c=s.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=s.displayName,c.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Uo(t,e,n,r){return z(t).onIdTokenChanged(e,n,r)}function $o(t,e,n){return z(t).beforeAuthStateChanged(e,n)}function Fo(t){return z(t).signOut()}const bt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bt,"1"),this.storage.removeItem(bt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=1e3,Ho=10;class ms extends fs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=as(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);ro()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ho):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Bo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ms.type="LOCAL";const Vo=ms;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends fs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gs.type="SESSION";const _s=gs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Tt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const o=Array.from(a).map(async l=>l(n.origin,i)),c=await Wo(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((o,c)=>{const l=gn("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(h){const u=h;if(u.data.eventId===l)switch(u.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(u.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return window}function Go(t){se().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(){return typeof se().WorkerGlobalScope<"u"&&typeof se().importScripts=="function"}async function jo(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zo(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Ko(){return ys()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="firebaseLocalStorageDb",Yo=1,wt="firebaseLocalStorage",bs="fbase_key";class st{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function At(t,e){return t.transaction([wt],e?"readwrite":"readonly").objectStore(wt)}function Jo(){const t=indexedDB.deleteDatabase(vs);return new st(t).toPromise()}function ws(){const t=indexedDB.open(vs,Yo);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wt,{keyPath:bs})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wt)?e(r):(r.close(),await Jo(),e(await ws()))})})}async function Zn(t,e,n){const r=At(t,!0).put({[bs]:e,value:n});return new st(r).toPromise()}async function Xo(t,e){const n=At(t,!1).get(e),r=await new st(n).toPromise();return r===void 0?null:r.value}function er(t,e){const n=At(t,!0).delete(e);return new st(n).toPromise()}const Qo=800,Zo=3;class Es{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=ws(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Zo)throw r;if(this.dbPromise){const s=this.dbPromise;this.dbPromise=null;try{(await s).close()}catch{}}}}async initializeServiceWorkerMessaging(){return ys()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tt._getInstance(Ko()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await jo(),!this.activeServiceWorker)return;this.sender=new qo(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zo()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Zn(e,bt,"1"),await er(e,bt)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zn(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Xo(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>er(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(s=>{const i=At(s,!1).getAll();return new st(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}catch(e){return this.isClosing||dt(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Es.type="LOCAL";const ec=Es;new tt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(t,e){return e?ue(e):(w(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends pn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Be(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Be(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Be(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tc(t){return hs(t.auth,new _n(t),t.bypassAuthState)}function nc(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),Lo(n,new _n(t),t.bypassAuthState)}async function rc(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),Po(n,new _n(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tc;case"linkViaPopup":case"linkViaRedirect":return rc;case"reauthViaPopup":case"reauthViaRedirect":return nc;default:j(this.auth,"internal-error")}}resolve(e){me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=new tt(2e3,1e4);async function ic(t,e,n){if(G(t.app))return Promise.reject(J(t,"operation-not-supported-in-this-environment"));const r=Ae(t);Ua(t,e,mn);const s=Is(r,n);return new Ne(r,"signInViaPopup",e,s).executeNotNull()}class Ne extends ks{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ne.currentPopupAction&&Ne.currentPopupAction.cancel(),Ne.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){me(this.filter.length===1,"Popup operations only handle one event");const e=gn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(J(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(J(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ne.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(J(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sc.get())};e()}}Ne.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="pendingRedirect",pt=new Map;class oc extends ks{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=pt.get(this.auth._key());if(!e){try{const r=await cc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}pt.set(this.auth._key(),e)}return this.bypassAuthState||pt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cc(t,e){const n=uc(e),r=dc(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function lc(t,e){pt.set(t._key(),e)}function dc(t){return ue(t._redirectPersistence)}function uc(t){return ht(ac,t.config.apiKey,t.name)}async function hc(t,e,n=!1){if(G(t.app))return Promise.reject(he(t));const r=Ae(t),s=Is(r,e),a=await new oc(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=10*60*1e3;class fc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mc(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ss(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(J(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pc&&this.cachedEventUids.clear(),this.cachedEventUids.has(tr(e))}saveEventToCache(e){this.cachedEventUids.add(tr(e)),this.lastProcessedEventTime=Date.now()}}function tr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ss({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mc(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ss(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gc(t,e={}){return ge(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yc=/^https?/;async function vc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gc(t);for(const n of e)try{if(bc(n))return}catch{}j(t,"unauthorized-domain")}function bc(t){const e=Qt(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!yc.test(n))return!1;if(_c.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new tt(3e4,6e4);function nr(){const t=se().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ec(t){return new Promise((e,n)=>{var s,i,a;function r(){nr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nr(),n(J(t,"network-request-failed"))},timeout:wc.get()})}if((i=(s=se().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=se().gapi)!=null&&a.load)r();else{const o=po("iframefcb");return se()[o]=()=>{gapi.load?r():n(J(t,"network-request-failed"))},cs(`${ho()}?onload=${o}`).catch(c=>n(c))}}).catch(e=>{throw ft=null,e})}let ft=null;function Ic(t){return ft=ft||Ec(t),ft}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=new tt(5e3,15e3),Sc="__/auth/iframe",Tc="emulator/auth/iframe",Ac={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nc(t){const e=t.config;w(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dn(e,Tc):`https://${t.config.authDomain}/${Sc}`,r={apiKey:e.apiKey,appName:t.name,v:et},s=Cc.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ze(r).slice(1)}`}async function Pc(t){const e=await Ic(t),n=se().gapi;return w(n,t,"internal-error"),e.open({where:document.body,url:Nc(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ac,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=J(t,"network-request-failed"),o=se().setTimeout(()=>{i(a)},kc.get());function c(){se().clearTimeout(o),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rc=500,Dc=600,Oc="_blank",Mc="http://localhost";class rr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xc(t,e,n,r=Rc,s=Dc){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c={...Lc,width:r.toString(),height:s.toString(),top:i,left:a},l=H().toLowerCase();n&&(o=ts(l)?Oc:n),Zr(l)&&(e=e||Mc,c.scrollbars="yes");const d=Object.entries(c).reduce((u,[g,p])=>`${u}${g}=${p},`,"");if(no(l)&&o!=="_self")return Uc(e||"",o),new rr(null);const h=window.open(e||"",o,d);w(h,t,"popup-blocked");try{h.focus()}catch{}return new rr(h)}function Uc(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="__/auth/handler",Fc="emulator/auth/handler",Bc=encodeURIComponent("fac");async function sr(t,e,n,r,s,i){w(t.config.authDomain,t,"auth-domain-config-required"),w(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:et,eventId:s};if(e instanceof mn){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",yi(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))a[d]=h}if(e instanceof rt){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const d of Object.keys(o))o[d]===void 0&&delete o[d];const c=await t._getAppCheckToken(),l=c?`#${Bc}=${encodeURIComponent(c)}`:"";return`${Hc(t)}?${Ze(o).slice(1)}${l}`}function Hc({config:t}){return t.emulator?dn(t,Fc):`https://${t.authDomain}/${$c}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="webStorageSupport";class Vc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_s,this._completeRedirectFn=hc,this._overrideRedirectResult=lc}async _openPopup(e,n,r,s){var a;me((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await sr(e,n,r,Qt(),s);return xc(e,i,gn())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await sr(e,n,r,Qt(),s);return Go(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(me(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Pc(e),r=new fc(e);return n.register("authEvent",s=>(w(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ut,{type:Ut},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[Ut];i!==void 0&&n(!!i),j(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vc(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return as()||es()||hn()}}const Wc=Vc;var ir="@firebase/auth",ar="1.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jc(t){fe(new ie("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;w(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:os(t)},l=new co(r,s,i,c);return yo(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fe(new ie("auth-internal",e=>{const n=Ae(e.getProvider("auth").getImmediate());return(r=>new qc(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),re(ir,ar,Gc(t)),re(ir,ar,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=5*60,Kc=Or("authIdTokenMaxAge")||zc;let or=null;const Yc=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Kc)return;const s=n==null?void 0:n.token;or!==s&&(or=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Jc(t=Wr()){const e=qe(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_o(t,{popupRedirectResolver:Wc,persistence:[ec,Vo,_s]}),r=Or("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Yc(i.toString());$o(n,a,()=>a(n.currentUser)),Uo(n,o=>a(o))}}const s=di("auth");return s&&vo(n,`http://${s}`),n}function Xc(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}lo({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=J("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Xc().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jc("Browser");const Ts="@firebase/installations",yn="0.6.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=1e4,Cs=`w:${yn}`,Ns="FIS_v2",Qc="https://firebaseinstallations.googleapis.com/v1",Zc=60*60*1e3,el="installations",tl="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Me=new Ue(el,tl,nl);function Ps(t){return t instanceof X&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls({projectId:t}){return`${Qc}/projects/${t}/installations`}function Rs(t){return{token:t.token,requestStatus:2,expiresIn:sl(t.expiresIn),creationTime:Date.now()}}async function Ds(t,e){const r=(await e.json()).error;return Me.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Os({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function rl(t,{refreshToken:e}){const n=Os(t);return n.append("Authorization",il(e)),n}async function Ms(t){const e=await t();return e.status>=500&&e.status<600?t():e}function sl(t){return Number(t.replace("s","000"))}function il(t){return`${Ns} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function al({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Ls(t),s=Os(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const a={fid:n,authVersion:Ns,appId:t.appId,sdkVersion:Cs},o={method:"POST",headers:s,body:JSON.stringify(a)},c=await Ms(()=>fetch(r,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Rs(l.authToken)}}else throw await Ds("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=/^[cdef][\w-]{21}$/,tn="";function ll(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=dl(t);return cl.test(n)?n:tn}catch{return tn}}function dl(t){return ol(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new Map;function $s(t,e){const n=Ct(t);Fs(n,e),ul(n,e)}function Fs(t,e){const n=Us.get(t);if(n)for(const r of n)r(e)}function ul(t,e){const n=hl();n&&n.postMessage({key:t,fid:e}),pl()}let Pe=null;function hl(){return!Pe&&"BroadcastChannel"in self&&(Pe=new BroadcastChannel("[Firebase] FID Change"),Pe.onmessage=t=>{Fs(t.data.key,t.data.fid)}),Pe}function pl(){Us.size===0&&Pe&&(Pe.close(),Pe=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="firebase-installations-database",ml=1,xe="firebase-installations-store";let $t=null;function vn(){return $t||($t=Hr(fl,ml,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xe)}}})),$t}async function Et(t,e){const n=Ct(t),s=(await vn()).transaction(xe,"readwrite"),i=s.objectStore(xe),a=await i.get(n);return await i.put(e,n),await s.done,(!a||a.fid!==e.fid)&&$s(t,e.fid),e}async function Bs(t){const e=Ct(t),r=(await vn()).transaction(xe,"readwrite");await r.objectStore(xe).delete(e),await r.done}async function Nt(t,e){const n=Ct(t),s=(await vn()).transaction(xe,"readwrite"),i=s.objectStore(xe),a=await i.get(n),o=e(a);return o===void 0?await i.delete(n):await i.put(o,n),await s.done,o&&(!a||a.fid!==o.fid)&&$s(t,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(t){let e;const n=await Nt(t.appConfig,r=>{const s=gl(r),i=_l(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===tn?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function gl(t){const e=t||{fid:ll(),registrationStatus:0};return Hs(e)}function _l(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Me.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=yl(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:vl(t)}:{installationEntry:e}}async function yl(t,e){try{const n=await al(t,e);return Et(t.appConfig,n)}catch(n){throw Ps(n)&&n.customData.serverCode===409?await Bs(t.appConfig):await Et(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function vl(t){let e=await cr(t.appConfig);for(;e.registrationStatus===1;)await xs(100),e=await cr(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await bn(t);return r||n}return e}function cr(t){return Nt(t,e=>{if(!e)throw Me.create("installation-not-found");return Hs(e)})}function Hs(t){return bl(t)?{fid:t.fid,registrationStatus:0}:t}function bl(t){return t.registrationStatus===1&&t.registrationTime+As<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl({appConfig:t,heartbeatServiceProvider:e},n){const r=El(t,n),s=rl(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const a={installation:{sdkVersion:Cs,appId:t.appId}},o={method:"POST",headers:s,body:JSON.stringify(a)},c=await Ms(()=>fetch(r,o));if(c.ok){const l=await c.json();return Rs(l)}else throw await Ds("Generate Auth Token",c)}function El(t,{fid:e}){return`${Ls(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(t,e=!1){let n;const r=await Nt(t.appConfig,i=>{if(!Vs(i))throw Me.create("not-registered");const a=i.authToken;if(!e&&Sl(a))return i;if(a.requestStatus===1)return n=Il(t,e),i;{if(!navigator.onLine)throw Me.create("app-offline");const o=Al(i);return n=kl(t,o),o}});return n?await n:r.authToken}async function Il(t,e){let n=await lr(t.appConfig);for(;n.authToken.requestStatus===1;)await xs(100),n=await lr(t.appConfig);const r=n.authToken;return r.requestStatus===0?wn(t,e):r}function lr(t){return Nt(t,e=>{if(!Vs(e))throw Me.create("not-registered");const n=e.authToken;return Cl(n)?{...e,authToken:{requestStatus:0}}:e})}async function kl(t,e){try{const n=await wl(t,e),r={...e,authToken:n};return await Et(t.appConfig,r),n}catch(n){if(Ps(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Bs(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Et(t.appConfig,r)}throw n}}function Vs(t){return t!==void 0&&t.registrationStatus===2}function Sl(t){return t.requestStatus===2&&!Tl(t)}function Tl(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Zc}function Al(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function Cl(t){return t.requestStatus===1&&t.requestTime+As<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nl(t){const e=t,{installationEntry:n,registrationPromise:r}=await bn(e);return r?r.catch(console.error):wn(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pl(t,e=!1){const n=t;return await Ll(n),(await wn(n,e)).token}async function Ll(t){const{registrationPromise:e}=await bn(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t){if(!t||!t.options)throw Ft("App Configuration");if(!t.name)throw Ft("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ft(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ft(t){return Me.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws="installations",Dl="installations-internal",Ol=t=>{const e=t.getProvider("app").getImmediate(),n=Rl(e),r=qe(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Ml=t=>{const e=t.getProvider("app").getImmediate(),n=qe(e,Ws).getImmediate();return{getId:()=>Nl(n),getToken:s=>Pl(n,s)}};function xl(){fe(new ie(Ws,Ol,"PUBLIC")),fe(new ie(Dl,Ml,"PRIVATE"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xl();re(Ts,yn);re(Ts,yn,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="analytics",Ul="firebase_id",$l="origin",Fl=60*1e3,Bl="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",En="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=new on("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},W=new Ue("analytics","Analytics",Hl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t){if(!t.startsWith(En)){const e=W.create("invalid-gtag-resource",{gtagURL:t});return B.warn(e.message),""}return t}function qs(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Wl(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ql(t,e){const n=Wl("firebase-js-sdk-policy",{createScriptURL:Vl}),r=document.createElement("script"),s=`${En}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Gl(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function jl(t,e,n,r,s,i){const a=r[s];try{if(a)await e[a];else{const c=(await qs(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(o){B.error(o)}t("config",s,i)}async function zl(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const o=await qs(n);for(const c of a){const l=o.find(h=>h.measurementId===c),d=l&&e[l.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){B.error(i)}}function Kl(t,e,n,r){async function s(i,...a){try{if(i==="event"){const[o,c]=a;await zl(t,e,n,o,c)}else if(i==="config"){const[o,c]=a;await jl(t,e,n,r,o,c)}else if(i==="consent"){const[o,c]=a;t("consent",o,c)}else if(i==="get"){const[o,c,l]=a;t("get",o,c,l)}else if(i==="set"){const[o]=a;t("set",o)}else t(i,...a)}catch(o){B.error(o)}}return s}function Yl(t,e,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Kl(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function Jl(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(En)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=30,Ql=1e3;class Zl{constructor(e={},n=Ql){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Gs=new Zl;function ed(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function td(t){var a;const{appId:e,apiKey:n}=t,r={method:"GET",headers:ed(n)},s=Bl.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const c=await i.json();(a=c.error)!=null&&a.message&&(o=c.error.message)}catch{}throw W.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function nd(t,e=Gs,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw W.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw W.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new id;return setTimeout(async()=>{o.abort()},Fl),js({appId:r,apiKey:s,measurementId:i},a,o,e)}async function js(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Gs){var o;const{appId:i,measurementId:a}=t;try{await rd(r,e)}catch(c){if(a)return B.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:a};throw c}try{const c=await td(t);return s.deleteThrottleMetadata(i),c}catch(c){const l=c;if(!sd(l)){if(s.deleteThrottleMetadata(i),a)return B.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:a};throw c}const d=Number((o=l==null?void 0:l.customData)==null?void 0:o.httpStatus)===503?Dn(n,s.intervalMillis,Xl):Dn(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(i,h),B.debug(`Calling attemptFetch again in ${d} millis`),js(t,h,r,s)}}function rd(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(W.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function sd(t){if(!(t instanceof X)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class id{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ad(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,a={...r,send_to:i};t("event",n,a)}}async function od(t,e,n,r){if(r&&r.global){const s={};for(const i of Object.keys(n))s[`user_properties.${i}`]=n[i];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cd(){if(Ur())try{await $r()}catch(t){return B.warn(W.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return B.warn(W.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ld(t,e,n,r,s,i,a){const o=nd(t);o.then(u=>{n[u.measurementId]=u.appId,t.options.measurementId&&u.measurementId!==t.options.measurementId&&B.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${u.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(u=>B.error(u)),e.push(o);const c=cd().then(u=>{if(u)return r.getId()}),[l,d]=await Promise.all([o,c]);Jl(i)||ql(i,l.measurementId),s("js",new Date);const h=(a==null?void 0:a.config)??{};return h[$l]="firebase",h.update=!0,d!=null&&(h[Ul]=d),s("config",l.measurementId,h),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.app=e}_delete(){return delete He[this.app.options.appId],Promise.resolve()}}let He={},dr=[];const ur={};let Bt="dataLayer",ud="gtag",hr,In,pr=!1;function hd(){const t=[];if(xr()&&t.push("This is a browser extension environment."),mi()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=W.create("invalid-analytics-context",{errorInfo:e});B.warn(n.message)}}function pd(t,e,n){hd();const r=t.options.appId;if(!r)throw W.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)B.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw W.create("no-api-key");if(He[r]!=null)throw W.create("already-exists",{id:r});if(!pr){Gl(Bt);const{wrappedGtag:i,gtagCore:a}=Yl(He,dr,ur,Bt,ud);In=i,hr=a,pr=!0}return He[r]=ld(t,dr,ur,e,hr,Bt,n),new dd(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t=Wr()){t=z(t);const e=qe(t,It);return e.isInitialized()?e.getImmediate():md(t)}function md(t,e={}){const n=qe(t,It);if(n.isInitialized()){const s=n.getImmediate();if(Re(e,n.getOptions()))return s;throw W.create("already-initialized")}return n.initialize({options:e})}function gd(t,e,n){t=z(t),od(In,He[t.app.options.appId],e,n).catch(r=>B.error(r))}function _d(t,e,n,r){t=z(t),ad(In,He[t.app.options.appId],e,n,r).catch(s=>B.error(s))}const fr="@firebase/analytics",mr="0.10.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(){fe(new ie(It,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return pd(r,s,n)},"PUBLIC")),fe(new ie("analytics-internal",t,"PRIVATE")),re(fr,mr),re(fr,mr,"esm2020");function t(e){try{const n=e.getProvider(It).getImmediate();return{logEvent:(r,s,i)=>_d(n,r,s,i),setUserProperties:(r,s)=>gd(n,r,s)}}catch(n){throw W.create("interop-component-reg-failed",{reason:n})}}}yd();const vd={apiKey:"AIzaSyAzv0MwtlKLjwwi4uvT2B_muIBxc1-36hs",authDomain:"minigames-afb1f.firebaseapp.com",projectId:"minigames-afb1f",storageBucket:"minigames-afb1f.firebasestorage.app",messagingSenderId:"611150619783",appId:"1:611150619783:web:bf2f5aa380cc3e11f40422",measurementId:"G-EKLG6N33YR"},zs=Vr(vd);fd(zs);const Pt=Jc(zs),kn="minigames:spa-app:app-session",bd=5*60*1e3,gr=(t,e)=>{window.dispatchEvent(new CustomEvent("show-snackbar",{detail:{message:t,type:e}}))},Sn=t=>{const e={displayName:t.displayName,email:t.email,avatarUrl:t.avatarUrl,authenticatedAt:Date.now()};localStorage.setItem(kn,JSON.stringify(e))},ne=()=>{const t=localStorage.getItem(kn);if(t)try{const e=JSON.parse(t);if(typeof e!="object"||e===null||typeof e.displayName!="string"||typeof e.email!="string"||typeof e.authenticatedAt!="number"||e.avatarUrl!==void 0&&typeof e.avatarUrl!="string")throw new Error("Invalid session data structure");const r=Date.now()-e.authenticatedAt;if(r<0||r>=bd){nn(!0);return}return e}catch{nn(!0);return}},nn=(t=!1)=>{localStorage.removeItem(kn),Fo(Pt).catch(()=>{gr("Failed to sign out from server. You are in Guest Mode locally.","error")}),t&&gr("Your session has expired. Please log in again.","warning"),window.dispatchEvent(new CustomEvent("auth-state-changed"))};typeof window<"u"&&document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&ne()});const wd=async()=>{var s;const t=new oe,n=(await ic(Pt,t)).user,r=n.displayName||((s=n.email)==null?void 0:s.split("@")[0])||"Gamer";return Sn({displayName:r,email:n.email||"",avatarUrl:n.photoURL||void 0}),n},Ed=async(t,e,n)=>{var i;const s=(await Do(Pt,t,e)).user;return s&&await xo(s,{displayName:n}),Sn({displayName:n||((i=s.email)==null?void 0:i.split("@")[0])||"Gamer",email:s.email||t,avatarUrl:s.photoURL||void 0}),s},Id=async(t,e)=>{var i;const r=(await Oo(Pt,t,e)).user,s=r.displayName||((i=r.email)==null?void 0:i.split("@")[0])||"Gamer";return Sn({displayName:s,email:r.email||t,avatarUrl:r.photoURL||void 0}),r};let q,te=!1;const ce={email:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',lock:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',eye:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',google:'<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>'},kd=/^[^\s@]+@[^\s@]+\.[^\s@]+/,Sd=/^[\dA-Za-z]+/,Ks=(t,e)=>{const n=e.match(t);return n!==null&&n[0]===e},Td=()=>{const t=new URL(window.location.href);t.searchParams.has("auth")&&(t.searchParams.delete("auth"),window.history.replaceState({},"",t.toString()))},Ad=(t,e)=>{window.dispatchEvent(new CustomEvent("show-snackbar",{detail:{message:t,type:e}}))},Ys=t=>{t.key==="Escape"&&!te&&$e()},ot=(t,e)=>{te=e;const n=t.querySelectorAll("input, button"),r=t.querySelector(".auth-dialog__close");for(const s of n)s.disabled=e;r&&(r.style.pointerEvents=e?"none":"auto",r.style.opacity=e?"0.4":"1")},Ht=(t,e)=>{if(t instanceof X)switch(t.code){case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":return"Google sign-in was canceled.";case"auth/popup-blocked":return"The popup was blocked by your browser. Please allow popups and try again.";case"auth/operation-not-allowed":return"This sign-in method is not enabled for the project.";case"auth/unauthorized-domain":return"This domain is not authorized for sign-in.";case"auth/email-already-in-use":return"This email is already registered.";case"auth/invalid-credential":case"auth/wrong-password":case"auth/user-not-found":return"Invalid email or password.";case"auth/network-request-failed":return"Network error. Please check your connection.";default:return e}return t instanceof Error&&t.message?t.message:e},ct=t=>t.trim()?Ks(kd,t)?"":"Please enter a valid email address.":"Email is required.",_r=t=>t.trim()?t.length<2||t.length>30?"Username must be between 2 and 30 characters.":/^[A-Z]/.test(t)?Ks(Sd,t)?"":"Username can only contain English letters and digits (no spaces).":"Username must start with an uppercase letter.":"Username is required.",yr=t=>t?t.length<6?"Password must be at least 6 characters long.":/[A-Z]/.test(t)?/\d/.test(t)?/[^\dA-Za-z]/.test(t)?"":"Password must contain at least one special character.":"Password must contain at least one digit.":"Password must contain at least one uppercase letter.":"Password is required.",vr=t=>t?t.length<6?"Password must be at least 6 characters long.":"":"Password is required.",Vt=(t,e)=>t?t!==e?"Passwords do not match.":"":"Please confirm your password.",Cd=()=>`
  <div class="auth-form__header">
    <h2 class="auth-form__title">Welcome Back!</h2>
    <p class="auth-form__subtitle">Sign in to resume your games and progress.</p>
  </div>
  <form class="auth-form__body" id="login-form" onsubmit="return false;" novalidate>
    <div class="auth-form__field">
      <label class="auth-form__label" for="login-email">Email Address</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${ce.email}</span>
        <input type="email" id="login-email" class="auth-form__input" placeholder="e.g. alex@minigames.com" required />
      </div>
      <span class="auth-form__error-msg" id="error-login-email"></span>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label" for="login-password">Password</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${ce.lock}</span>
        <input type="password" id="login-password" class="auth-form__input" placeholder="••••••••" required />
        <button type="button" class="auth-form__eye-btn" aria-label="Toggle password visibility">${ce.eye}</button>
      </div>
      <span class="auth-form__error-msg" id="error-login-password"></span>
    </div>
    <div class="auth-form__forgot">
      <a href="#" class="auth-form__link auth-form__link--underline">Forgot Password?</a>
    </div>
    <button type="submit" class="auth-form__submit-btn" id="login-submit-btn" disabled>Login</button>
    <div class="auth-form__divider"><span>OR</span></div>
    <button type="button" class="auth-form__google-btn" id="login-google-btn">
      <span class="auth-form__google-icon">${ce.google}</span> Continue with Google
    </button>
    <div class="auth-form__footer-text">
      Don't have an account? <button type="button" class="auth-form__switch-inline" data-target="register">Register</button>
    </div>
  </form>
`,Nd=()=>`
  <div class="auth-form__header">
    <h2 class="auth-form__title">Create Account</h2>
    <p class="auth-form__subtitle">Join MiniGames to track your score & streak.</p>
  </div>
  <form class="auth-form__body" id="register-form" onsubmit="return false;" novalidate>
    <div class="auth-form__field">
      <label class="auth-form__label" for="register-username">Username</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${ce.user}</span>
        <input type="text" id="register-username" class="auth-form__input" placeholder="e.g. CozyGamer99" required />
      </div>
      <span class="auth-form__error-msg" id="error-register-username"></span>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label" for="register-email">Email Address</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${ce.email}</span>
        <input type="email" id="register-email" class="auth-form__input" placeholder="your.email@domain.com" required />
      </div>
      <span class="auth-form__error-msg" id="error-register-email"></span>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label" for="register-password">Password</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${ce.lock}</span>
        <input type="password" id="register-password" class="auth-form__input" placeholder="Min. 6 chars, A-Z, 0-9, symbol" required />
      </div>
      <span class="auth-form__error-msg" id="error-register-password"></span>
    </div>
    <div class="auth-form__field">
      <label class="auth-form__label" for="register-confirm-password">Confirm Password</label>
      <div class="auth-form__input-wrapper">
        <span class="auth-form__icon">${ce.lock}</span>
        <input type="password" id="register-confirm-password" class="auth-form__input" placeholder="Repeat your password" required />
      </div>
      <span class="auth-form__error-msg" id="error-register-confirm-password"></span>
    </div>
    <button type="submit" class="auth-form__submit-btn" id="register-submit-btn" disabled>Create Account</button>
    <div class="auth-form__divider"><span>OR</span></div>
    <button type="button" class="auth-form__google-btn" id="register-google-btn">
      <span class="auth-form__google-icon">${ce.google}</span> Sign up with Google
    </button>
    <div class="auth-form__footer-text">
      Already have an account? <button type="button" class="auth-form__switch-inline" data-target="login">Login</button>
    </div>
  </form>
`,Tn=()=>{const t=document.createElement("div");t.className="auth-backdrop auth-backdrop--hidden",t.innerHTML=`
    <div class="auth-dialog" role="dialog" aria-modal="true">
      <button type="button" class="auth-dialog__close" aria-label="Close dialog">✕</button>

      <div class="auth-switcher">
        <div class="auth-switcher__pill"></div>
        <button type="button" class="auth-switcher__btn auth-switcher__btn--active" data-tab="login">Login</button>
        <button type="button" class="auth-switcher__btn" data-tab="register">Register</button>
      </div>

      <div class="auth-dialog__container">
        <div class="auth-dialog__view auth-dialog__view--active" id="auth-view-login">
          ${Cd()}
        </div>
        <div class="auth-dialog__view" id="auth-view-register">
          ${Nd()}
        </div>
      </div>
    </div>
  `;const e=t.querySelector("#login-form"),n=t.querySelector("#register-form"),r=t.querySelector("#login-email"),s=t.querySelector("#login-password"),i=t.querySelector("#login-submit-btn"),a=t.querySelector("#register-username"),o=t.querySelector("#register-email"),c=t.querySelector("#register-password"),l=t.querySelector("#register-confirm-password"),d=t.querySelector("#register-submit-btn"),h=()=>{var y;return!!((y=t.querySelector("#auth-view-register"))!=null&&y.classList.contains("auth-dialog__view--active"))},u=()=>{if(!r||!s||!i)return;const y=ct(r.value),v=vr(s.value);i.disabled=!!(y||v)},g=()=>{if(!a||!o||!c||!l||!d)return;const y=_r(a.value),v=ct(o.value),f=yr(c.value),I=Vt(l.value,c.value);d.disabled=!!(y||v||f||I)},p=()=>{ot(t,!1),u(),g()};(()=>{if(r&&s){const y=v=>{const f=v.target,I=f===r,m=t.querySelector(`#error-login-${I?"email":"password"}`);m&&(m.textContent=I?ct(f.value):vr(f.value)),u()};for(const v of[r,s])v.addEventListener("input",y),v.addEventListener("blur",y)}if(a&&o&&c&&l){const y=f=>{const I=f.target;let m="",k="";switch(I){case a:{m=_r(I.value),k="username";break}case o:{m=ct(I.value),k="email";break}case c:{m=yr(I.value),k="password";const L=t.querySelector("#error-register-confirm-password");L&&l.value&&(L.textContent=Vt(l.value,I.value));break}default:m=Vt(I.value,c.value),k="confirm-password"}const E=t.querySelector(`#error-register-${k}`);E&&(E.textContent=m),g()},v=[a,o,c,l];for(const f of v)f.addEventListener("input",y),f.addEventListener("blur",y)}})(),e==null||e.addEventListener("submit",async()=>{if(!(te||!r||!s)){ot(t,!0);try{await Id(r.value,s.value),p(),$e(),window.dispatchEvent(new CustomEvent("auth-state-changed"))}catch(y){p();const v=t.querySelector("#error-login-password");v&&(v.textContent=Ht(y,"Login failed. Please check credentials."))}}}),n==null||n.addEventListener("submit",async()=>{if(!(te||!a||!o||!c)){ot(t,!0);try{await Ed(o.value,c.value,a.value),p(),$e(),window.dispatchEvent(new CustomEvent("auth-state-changed"))}catch(y){p();const v=t.querySelector("#error-register-password");v&&(v.textContent=Ht(y,"Registration failed. Please try again."))}}});const C=async()=>{if(!te){ot(t,!0);try{await wd(),p(),$e(),window.dispatchEvent(new CustomEvent("auth-state-changed"))}catch(y){p();const v=t.querySelector(h()?"#error-register-password":"#error-login-password");v&&(v.textContent=Ht(y,"Google sign-in failed. Please try again."))}}},b=t.querySelectorAll(".auth-form__google-btn");for(const y of b)y.addEventListener("click",C);const _=()=>{e==null||e.reset(),n==null||n.reset();const y=t.querySelectorAll(".auth-form__error-msg");for(const v of y)v.textContent="";i&&(i.disabled=!0),d&&(d.disabled=!0)},N=y=>{if(te)return;_();const v=t.querySelectorAll(".auth-switcher__btn"),f=t.querySelector(".auth-switcher__pill"),I=t.querySelector("#auth-view-login"),m=t.querySelector("#auth-view-register");if(!I||!m||!f)return;f.classList.toggle("auth-switcher__pill--register",y==="register");for(const L of v)L.classList.toggle("auth-switcher__btn--active",L.dataset.tab===y);const k=y==="login"?m:I,E=y==="login"?I:m;E.classList.contains("auth-dialog__view--active")||(k.classList.add("auth-dialog__view--fade-out"),setTimeout(()=>{k.classList.remove("auth-dialog__view--active","auth-dialog__view--fade-out"),E.classList.add("auth-dialog__view--active","auth-dialog__view--fade-in"),setTimeout(()=>{E.classList.remove("auth-dialog__view--fade-in")},200)},150))},P=t.querySelectorAll(".auth-switcher__btn");for(const y of P)y.addEventListener("click",()=>{const v=y.dataset.tab;v&&N(v)});t.addEventListener("click",y=>{var I;const v=y.target;if(v===t){te||$e();return}if(v.classList.contains("auth-form__switch-inline")){const m=v.dataset.target;m&&!te&&N(m);return}const f=v.closest(".auth-form__eye-btn");if(f){const m=(I=f.parentElement)==null?void 0:I.querySelector("input");m&&(m.type=m.type==="password"?"text":"password")}});const D=t.querySelector(".auth-dialog__close");return D==null||D.addEventListener("click",()=>{te||$e()}),q=t,t},Je=(t="login")=>{if(ne()){Td(),Ad("You are already authenticated.","warning");return}if(!q||!document.body.contains(q)){const n=Tn();document.body.append(n)}if(!q)return;q.classList.remove("auth-backdrop--hidden"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",Ys);const e=q.querySelector(`.auth-switcher__btn[data-tab="${t}"]`);e==null||e.click()},$e=()=>{te||!q||q.classList.contains("auth-backdrop--hidden")||(q.classList.add("auth-backdrop--closing"),setTimeout(()=>{q&&(q.classList.remove("auth-backdrop--closing"),q.classList.add("auth-backdrop--hidden")),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",Ys)},250))},Pd=t=>{const e=t.trim();if(!e)return"U";const n=e.split(/\s+/).filter(Boolean);if(n.length===0)return"U";if(n.length===1){const a=n[0].match(/[\p{L}\p{N}]/u);return a?a[0].toUpperCase():"U"}const r=n[0].match(/[\p{L}\p{N}]/u),s=n[1].match(/[\p{L}\p{N}]/u),i=((r==null?void 0:r[0])||"")+((s==null?void 0:s[0])||"");return i?i.toUpperCase():"U"},Ld=t=>t.displayName&&t.displayName.trim()?t.displayName.trim():t.email&&t.email.includes("@")?t.email.split("@")[0]:"Gamer",Js=(t={})=>{const{activePage:e="home",onNavigate:n}=t,r=document.createElement("header");r.className="header";const s=document.createElement("div");s.className="header__container";const i=(m,k)=>{m.preventDefault(),n&&n(k)},a=document.createElement("a");a.href="/",a.className="header__logo",a.addEventListener("click",m=>i(m,"home"));const o=document.createElement("img");o.src=Cr,o.alt="MiniGames Logo",o.className="header__logo-icon";const c=document.createElement("span");c.className="header__logo-text",c.textContent="MiniGames",a.append(o,c);const l=document.createElement("nav");l.className="header__nav";const d=document.createElement("ul");d.className="header__nav-list";const h=[{name:"Home",page:"home"},{name:"Library",page:"library"},{name:"Tournaments",page:"home"},{name:"Community",page:"home"}];for(const m of h){const k=document.createElement("li");k.className="header__nav-item";const E=document.createElement("a");E.href="#";const L=m.name.toLowerCase()===e;E.className=`header__nav-link${L?" header__nav-link--active":""}`,E.textContent=m.name,E.addEventListener("click",S=>i(S,m.page)),k.append(E),d.append(k)}l.append(d);const u=()=>{const m=document.createElement("div");m.className="header__actions";const k=document.createElement("div");k.className="header__mobile-actions";const E=ne();if(E){const L=Ld(E),S=Pd(L),T=(U=!1)=>{const R=document.createElement("div");R.className=U?"header__mobile-auth-group":"header__auth-group";const x=document.createElement("div");x.className=U?"header__mobile-profile":"header__profile";const Q=document.createElement("span");Q.className="header__profile-name",Q.textContent=L;const Z=document.createElement("div");if(Z.className="header__avatar",E.avatarUrl){const ae=document.createElement("img");ae.src=E.avatarUrl,ae.alt=L,ae.className="header__avatar-img",ae.addEventListener("error",()=>{ae.style.display="none",ee.style.display="flex"}),Z.append(ae)}const ee=document.createElement("span");ee.className="header__avatar-initials",ee.textContent=S,E.avatarUrl&&(ee.style.display="none"),Z.append(ee),x.append(Q,Z);const _e=document.createElement("button");return _e.type="button",_e.className="header__btn header__btn--logout",_e.textContent="Log Out",_e.addEventListener("click",()=>{nn(),window.dispatchEvent(new CustomEvent("auth-state-changed"))}),R.append(x,_e),R};m.append(T(!1)),k.append(T(!0))}else{const L=document.createElement("button");L.type="button",L.className="header__btn header__btn--login",L.textContent="Log In";const S=document.createElement("button");S.type="button",S.className="header__btn header__btn--signup",S.textContent="Sign Up";const T=()=>{v(),Je()};L.addEventListener("click",T),S.addEventListener("click",T),m.append(L,S);const U=L.cloneNode(!0),R=S.cloneNode(!0);U.addEventListener("click",T),R.addEventListener("click",T),k.append(U,R)}return{actions:m,mobileActions:k}};let{actions:g,mobileActions:p}=u();const A=document.createElement("button");A.type="button",A.className="header__burger",A.setAttribute("aria-label","Open navigation menu");for(let m=0;m<3;m+=1){const k=document.createElement("span");k.className="header__burger-line",A.append(k)}const C=document.createElement("div");C.className="header__right-controls",C.append(g,A);const b=document.createElement("div");b.className="header__mobile-overlay";const _=document.createElement("div");_.className="header__mobile-top";const N=a.cloneNode(!0);N.addEventListener("click",m=>{v(),i(m,"home")});const P=document.createElement("button");P.type="button",P.className="header__mobile-close",P.setAttribute("aria-label","Close menu");const D=document.createElement("span");D.className="header__mobile-close-icon",D.textContent="✕",P.append(D),_.append(N,P);const y=document.createElement("ul");y.className="header__nav-list";for(const m of h){const k=document.createElement("li");k.className="header__nav-item";const E=document.createElement("a");E.href="#";const L=m.name.toLowerCase()===e;E.className=`header__nav-link${L?" header__nav-link--active":""}`,E.textContent=m.name,E.addEventListener("click",S=>{v(),i(S,m.page)}),k.append(E),y.append(k)}b.append(_,y,p);const v=()=>{b.classList.remove("header__mobile-overlay--active"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",I)},f=()=>{b.classList.add("header__mobile-overlay--active"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",I)},I=m=>{m.key==="Escape"&&v()};return A.addEventListener("click",f),P.addEventListener("click",v),window.addEventListener("auth-state-changed",()=>{const m=u();g.replaceWith(m.actions),g=m.actions,p.replaceWith(m.mobileActions),p=m.mobileActions;const k=b.querySelector(".header__mobile-actions");k?k.replaceWith(p):b.append(p)}),s.append(a,l,C),r.append(s,b),r},Rd=()=>{const t=document.createElement("section");t.className="hero";const e=document.createElement("img"),n="images/hero-bg.webp".replace(/^\//,"");e.src=`/minigames/${n}`,e.alt="",e.className="hero__bg";const r=document.createElement("div");r.className="hero__container";const s=document.createElement("div");s.className="hero__card";const i=document.createElement("h1");i.className="hero__title",i.textContent="Take a Short Break & Have Fun";const a=document.createElement("p");a.className="hero__description",a.textContent="Discover hundreds of curated casual mini-games. Play instantly in your browser — puzzle, match 3, farm, and board classics.";const o=document.createElement("button");return o.type="button",o.className="hero__btn",o.textContent="Browse Library",s.append(i,a,o),r.append(s),t.append(e,r),t},Dd=t=>t?t>=1e3?`${(t/1e3).toFixed(1)}K`:t.toString():"0",Od=t=>{const e=document.createElement("div");e.className="game-card";const n=document.createElement("img"),r=t.name||t.title||"Untitled",s=t.cardImage||"https://placehold.co/300x380/1e1e1e/ffffff?text=No+Image";n.src=s,n.alt=r,n.className="game-card__image",n.addEventListener("error",()=>{n.src="https://placehold.co/300x380/1e1e1e/ffffff?text=No+Image"},{once:!0});const i=document.createElement("div");i.className="game-card__overlay";const a=document.createElement("h3");a.className="game-card__title",a.textContent=r;const o=document.createElement("div");o.className="game-card__meta";const c=document.createElement("div");c.className="game-card__stat game-card__stat--rating",c.innerHTML=`
    <svg class="game-card__icon game-card__icon--star" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FFD02B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
    <span>${t.rating?t.rating.toFixed(1):"0.0"}</span>
  `;const l=document.createElement("div");return l.className="game-card__stat game-card__stat--likes",l.innerHTML=`
    <svg class="game-card__icon game-card__icon--heart" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FF4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
    <span>${Dd(t.likesCount)}</span>
  `,o.append(c,l),i.append(a,o),e.append(n,i),e},je="https://faxb76kxra.execute-api.eu-central-1.amazonaws.com",Ve=t=>{if(!t||typeof t!="string")return"https://placehold.co/600x350/1e1e1e/ffffff?text=No+Image";if(t.startsWith("http://")||t.startsWith("https://"))return t;const e=t.split("/").pop()||t,n="/minigames/";return`${n.endsWith("/")?n:`${n}/`}images/games/${e}`},Md=async()=>{const t=await fetch(`${je}/api/categories`);if(!t.ok)throw new Error(`Failed to load categories (Status: ${t.status})`);const e=await t.json();return Array.isArray(e)?e:e.data||[]},xd=async()=>{const t=await fetch(`${je}/api/games?featured=true`);if(!t.ok)throw new Error(`Failed to load featured games (Status: ${t.status})`);const e=await t.json();return(Array.isArray(e)?e:e.data||[]).map(r=>{const s=r.cardImage||r.heroImage||r.coverImage||r.image||"";return{slug:r.slug||"",name:r.name||r.title||"Untitled",category:r.category||"",price:r.price||"Free",shortDescription:r.shortDescription||"",rating:r.rating||0,likesCount:r.likesCount||0,cardImage:Ve(s),featured:!!r.featured}})},Ud=async(t={})=>{const{page:e=1,limit:n=6,category:r="all",sort:s="rating-desc"}=t,i=new URLSearchParams({page:e.toString(),limit:n.toString(),category:r,sort:s}),a=await fetch(`${je}/api/games?${i.toString()}`);if(!a.ok)throw new Error(`Failed to load library games (Status: ${a.status})`);const o=await a.json();return{data:(Array.isArray(o)?o:o.data||[]).map(d=>{const h=d.cardImage||d.heroImage||d.coverImage||d.image||"";return{slug:d.slug||"",name:d.name||d.title||"Untitled",category:d.category||"all",price:d.price||"Free",shortDescription:d.shortDescription||"",rating:d.rating||0,likesCount:d.likesCount||0,cardImage:Ve(h),featured:!!d.featured}}),meta:o.meta}},$d=async(t,e)=>{var l;const n=new URLSearchParams;e&&n.append("userEmail",e);const r=n.toString()?`?${n.toString()}`:"",s=await fetch(`${je}/api/games/${t}${r}`);if(!s.ok)throw new Error(`Failed to load game details for "${t}" (Status: ${s.status})`);const i=await s.json(),a=i.data||i,o=a.cardImage||a.heroImage||a.coverImage||a.image||"",c=a.heroImage||a.bannerImage||a.cardImage||a.coverImage||"";return{slug:a.slug||t,name:a.name||a.title||"Untitled Game",category:a.category||"Casual",price:a.price||((l=a.specs)==null?void 0:l.price)||"Free",shortDescription:a.shortDescription||"",description:a.description||a.fullDescription||a.shortDescription||"No description available.",rating:a.rating||0,likesCount:a.likesCount||0,isLiked:!!(a.isLiked||a.isLikedByCurrentUser),isLikedByCurrentUser:!!(a.isLikedByCurrentUser??a.isLiked),cardImage:Ve(o),heroImage:Ve(c),galleryImages:Array.isArray(a.galleryImages)?a.galleryImages.map(d=>Ve(d)):[],developer:a.developer||"Unknown Developer",releaseDate:a.releaseDate||"N/A",featured:!!a.featured,topRecords:Array.isArray(a.topRecords)?a.topRecords:[],comments:Array.isArray(a.comments)?a.comments:[],specs:a.specs||{genre:a.category||"Casual",players:"1 Player",duration:"15-30 mins",price:a.price||"Free"}}},Fd=async(t,e)=>{const n=await fetch(`${je}/api/games/${t}/favorite`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userEmail:e})});if(!n.ok)throw new Error(`Failed to update favorite status (Status: ${n.status})`);const r=await n.json(),s=r.data||r;return{gameSlug:s.gameSlug||t,isFavorited:!!s.isFavorited,likesCount:Number(s.likesCount??0)}},Bd=async()=>{const t=await fetch(`${je}/api/leaderboard`);if(!t.ok)throw new Error(`Failed to load leaderboard data (Status: ${t.status})`);const e=await t.json();return(Array.isArray(e)?e:e.data||[]).map((r,s)=>({rank:r.rank||s+1,playerName:r.playerName||r.player||r.name||"Anonymous",gamesPlayed:r.gamesPlayed||r.games||0,totalScore:r.totalScore||r.score||0,streakDays:r.streakDays||r.streak||0,favoriteGameSlug:r.favoriteGameSlug||"",favoriteGameName:r.favoriteGameName||r.favoriteGame||"N/A"}))},F=(t,e="info")=>{let n=document.querySelector(".snackbar-container");n||(n=document.createElement("div"),n.className="snackbar-container",document.body.append(n));const r=document.createElement("div");r.className=`snackbar snackbar--${e}`;const s=document.createElement("span");s.className="snackbar__text",s.textContent=t;const i=document.createElement("button");i.type="button",i.className="snackbar__close",i.innerHTML="&times;",i.ariaLabel="Close notification";const a=()=>{r.classList.add("snackbar--hiding"),setTimeout(()=>{r.remove(),n&&n.childElementCount===0&&n.remove()},300)};i.addEventListener("click",a),r.append(s,i),n.append(r),setTimeout(a,4e3)};typeof window<"u"&&window.addEventListener("show-snackbar",t=>{const e=t.detail;e!=null&&e.message&&F(e.message,e.variant||e.type||"info")});const Wt="https://faxb76kxra.execute-api.eu-central-1.amazonaws.com/api",br="https://placehold.co/600x350/1e1e1e/ffffff?text=No+Image",wr=["var(--avatar-1, #f87171)","var(--avatar-2, #fbbf24)","var(--avatar-3, #34d399)","var(--avatar-4, #60a5fa)","var(--avatar-5, #a78bfa)","var(--avatar-6, #f472b6)"],Hd=["heroImage","cardImage","imageUrl","image","cover","coverImage","thumbnail","banner","images"],Vd=["description","longDescription","fullDescription","about","overview","summary","shortDescription"],$=t=>t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),Er=t=>t>=1e3?`${(t/1e3).toFixed(1)}K`:t.toString(),Wd=t=>t.toLocaleString("en-US")+" pts",qd=t=>t===1?"🥇":t===2?"🥈":t===3?"🥉":"",Ir=t=>{if(!t)return"just now";const e=new Date(t);if(Number.isNaN(e.getTime()))return t;const r=Math.floor((new Date().getTime()-e.getTime())/1e3);if(r<60)return"just now";const s=Math.floor(r/60);if(s<60)return`${s} min ago`;const i=Math.floor(s/60);if(i<24)return`${i} ${i===1?"hour ago":"hours ago"}`;const a=Math.floor(i/24);if(a<7)return`${a} ${a===1?"day ago":"days ago"}`;const o=Math.floor(a/7);if(o<4.34)return`${o} ${o===1?"week ago":"weeks ago"}`;const c=Math.floor(a/30.44);if(c<12)return`${c} ${c===1?"month ago":"months ago"}`;const l=Math.floor(a/365.25);return`${l} ${l===1?"year ago":"years ago"}`},rn=t=>{if(typeof t=="string"){const e=t.trim();return e?e.startsWith("//")?`https:${e}`:e:""}if(Array.isArray(t)){for(const e of t){const n=rn(e);if(n)return n}return""}if(t&&typeof t=="object"){const e=t;return rn(e.url??e.src??e.path)}return""},Gd=t=>{const e=t;for(const n of Hd){const r=rn(e[n]);if(r)return r}return""},jd=t=>{const e=t;for(const n of Vd){const r=e[n];if(typeof r=="string"&&r.trim())return r}return""},zd=t=>{const e=document.createElement("div");e.className="game-dialog-backdrop";const n=document.createElement("div");n.className="game-dialog",e.append(n);let r=!1,s=!1,i=!1;const a=new Set,o=()=>{document.body.contains(e)&&!r&&b()},c=new Map,l=_=>{const N=_.trim();if(c.has(N))return c.get(N);let P=0;for(let v=0;v<N.length;v++)P=(N.codePointAt(v)??0)+((P<<5)-P);const D=(P>>>0)%wr.length,y=wr[D];return c.set(N,y),y},d=(_=!0)=>{r||(r=!0,e.classList.add("game-dialog-backdrop--closing"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",h),window.removeEventListener("auth-state-changed",o),_&&Y.updateQueryParams({game:void 0}),setTimeout(()=>{e.remove()},250))},h=_=>{_.key==="Escape"&&d()};document.addEventListener("keydown",h),window.addEventListener("auth-state-changed",o),e.addEventListener("click",_=>{_.target===e&&d()});const u=()=>{n.innerHTML=`
      <div class="game-dialog__skeleton">
        <div class="game-dialog__skeleton-hero"></div>
        <div class="game-dialog__skeleton-body">
          <div class="game-dialog__skeleton-title"></div>
          <div class="game-dialog__skeleton-text"></div>
          <div class="game-dialog__skeleton-text"></div>
        </div>
      </div>
    `},g=_=>{var N,P;n.innerHTML=`
      <div class="game-dialog__error-banner">
        <p class="game-dialog__error-message">${$(_)}</p>
        <div class="game-dialog__error-actions">
          <button type="button" class="game-dialog__retry-btn">Retry</button>
          <button type="button" class="game-dialog__close-error-btn">Close</button>
        </div>
      </div>
    `,(N=n.querySelector(".game-dialog__retry-btn"))==null||N.addEventListener("click",()=>{b()}),(P=n.querySelector(".game-dialog__close-error-btn"))==null||P.addEventListener("click",()=>d())},p=(_,N,P)=>{const D=P.querySelector(".game-dialog__comments-title"),y=P.querySelector(".game-dialog__comments-list");if(!y)return;if(D&&(D.textContent=`Comments (${N})`),!_||_.length===0){y.innerHTML=`
        <div class="game-dialog__empty-comments">
          <p style="opacity: 0.7; padding: 1rem 0;">No comments yet. Be the first to comment!</p>
        </div>
      `;return}y.innerHTML=_.map((f,I)=>{const m=f,k=String(m.id||m._id||m.commentId||I),E=f.author||f.authorName||f.userName||"Anonymous",L=E.trim(),S=$(L?L.charAt(0).toUpperCase():"A"),T=f.text||f.content||f.comment||"",U=f.likesCount??f.likes??0,R=f.createdAt||f.timestamp||f.date,x=Ir(R),Q=f.avatarBg||l(E),Z=!!(f.isLikedByCurrentUser??f.isLiked??f.liked),ee=Z?"#ff4b4b":"#18152e";return`
          <li class="game-dialog__comment-item" data-comment-id="${$(k)}">
            <article class="game-dialog__comment">
              <div class="game-dialog__comment-header">
                <div class="game-dialog__comment-author">
                  <div class="game-dialog__avatar" style="background-color: ${$(Q)};">
                    ${S}
                  </div>
                  <span class="game-dialog__author-name">${$(E)}</span>
                </div>
                <span class="game-dialog__comment-time">${$(x)}</span>
              </div>
              <p class="game-dialog__comment-text">${$(T)}</p>
              <button type="button" class="game-dialog__like-btn${Z?" game-dialog__like-btn--active":""}" aria-pressed="${Z?"true":"false"}">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="${ee}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span class="game-dialog__likes-count">${U}</span>
              </button>
            </article>
          </li>
        `}).join("");const v=y.querySelectorAll(".game-dialog__like-btn");for(const f of v)f.addEventListener("click",async()=>{const I=f.closest(".game-dialog__comment-item"),m=I==null?void 0:I.getAttribute("data-comment-id");if(!m||a.has(m))return;const k=ne();if(!k){F("Please log in to like comments.","warning"),Je("login");return}a.add(m),f.disabled=!0,f.style.opacity="0.6";try{const E=await fetch(`${Wt}/comments/${m}/like`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userEmail:k.email})});if(!E.ok)throw new Error("Failed to update comment like.");const L=await E.json(),S=L.data||L,T=!!(S.isLikedByCurrentUser??S.isLiked),U=S.likesCount??S.likes??0;f.classList.toggle("game-dialog__like-btn--active",T),f.setAttribute("aria-pressed",T?"true":"false");const R=f.querySelector("svg");R&&R.setAttribute("stroke",T?"#ff4b4b":"#18152e");const x=f.querySelector(".game-dialog__likes-count");x&&(x.textContent=String(U))}catch(E){const L=E instanceof Error?E.message:"Network error updating like.";F(L,"error")}finally{a.delete(m),f.disabled=!1,f.style.opacity="1"}})},A=_=>{var ae,Cn,Nn,Pn;const N=_.topRecords||[],P=N.length>0?N.map(M=>`
            <li class="game-dialog__record-item">
              <span class="game-dialog__record-user">${qd(M.position)} ${$(M.playerName)}</span>
              <span class="game-dialog__record-score">${Wd(M.score)}</span>
              <span class="game-dialog__record-date">${Ir(M.achievedAt)}</span>
            </li>
          `).join(""):'<li class="game-dialog__record-item" style="opacity: 0.7;">No records achieved yet.</li>',D=Gd(_),y=jd(_),v=_;let f=!!(v.isLikedByCurrentUser??v.isLiked);const I=ne(),m=I&&I.displayName?I.displayName.trim():"",k=m?$(m.charAt(0).toUpperCase()):"U";n.innerHTML=`
      <header class="game-dialog__hero">
        <img
          src="${$(D||br)}"
          alt="${$(_.name)} Cover"
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
            <h2 class="game-dialog__title">${$(_.name)}</h2>
            <div class="game-dialog__stats">
              <div class="game-dialog__stat">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FFD02B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>${_.rating?_.rating.toFixed(1):"0.0"}</span>
              </div>
              <div class="game-dialog__stat">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FF4B4B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span class="game-dialog__likes-count">${Er(_.likesCount||0)}</span>
              </div>
            </div>
          </div>

          <p class="game-dialog__description">
            ${$(y)}
          </p>

          <div class="game-dialog__meta-grid">
            <div class="game-dialog__meta-item">
              <span class="game-dialog__meta-label">Genre</span>
              <span class="game-dialog__meta-value">${$(((ae=_.specs)==null?void 0:ae.genre)||_.category||"Casual")}</span>
            </div>
            <div class="game-dialog__meta-item">
              <span class="game-dialog__meta-label">Players</span>
              <span class="game-dialog__meta-value">${$(((Cn=_.specs)==null?void 0:Cn.players)||"1 Player")}</span>
            </div>
            <div class="game-dialog__meta-item">
              <span class="game-dialog__meta-label">Duration</span>
              <span class="game-dialog__meta-value">${$(((Nn=_.specs)==null?void 0:Nn.duration)||"15-30 mins")}</span>
            </div>
            <div class="game-dialog__meta-item">
              <span class="game-dialog__meta-label">Price</span>
              <span class="game-dialog__meta-value">${$(String(((Pn=_.specs)==null?void 0:Pn.price)||_.price||"Free"))}</span>
            </div>
          </div>

          <div class="game-dialog__actions">
            <button type="button" class="game-dialog__play-btn">Play Now</button>
            <button
              type="button"
              class="game-dialog__fav-btn${f?" game-dialog__fav-btn--active":""}"
              aria-label="${f?"Remove from favorites":"Add to favorites"}"
              aria-pressed="${f?"true":"false"}"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span class="game-dialog__fav-btn-text">${f?"Favorited":"Add to Favorites"}</span>
            </button>
          </div>
        </section>

        <section class="game-dialog__section game-dialog__records-section">
          <h3 class="game-dialog__section-title">🏆 Top Records</h3>
          <ul class="game-dialog__records-list">
            ${P}
          </ul>
        </section>

        <section class="game-dialog__section game-dialog__comments-section">
          <h3 class="game-dialog__section-title game-dialog__comments-title">Comments (...)</h3>

          <form class="game-dialog__comment-form">
            <div class="game-dialog__avatar game-dialog__avatar--user">${k}</div>
            <textarea
              class="game-dialog__textarea"
              placeholder="${I?"Write a comment...":"Please log in to comment"}"
              rows="1"
              aria-label="Write a comment"
              ${I?"":"disabled"}
            ></textarea>
            <button type="submit" class="game-dialog__send-btn" aria-label="Send comment" ${I?"":"disabled"}>
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
    `;const E=n.querySelector(".game-dialog__hero-img");E&&E.addEventListener("error",()=>{E.src=br},{once:!0});const L=n.querySelector(".game-dialog__close"),S=n.querySelector(".game-dialog__play-btn"),T=n.querySelector(".game-dialog__fav-btn"),U=n.querySelector(".game-dialog__comment-form"),R=n.querySelector(".game-dialog__textarea"),x=n.querySelector(".game-dialog__send-btn"),Q=n.querySelector(".game-dialog__comments-section");L==null||L.addEventListener("click",()=>d()),S==null||S.addEventListener("click",M=>{M.preventDefault()});const Z=`
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    `,ee=(M,V=!1)=>{T&&(T.classList.toggle("game-dialog__fav-btn--active",M),T.classList.toggle("game-dialog__fav-btn--loading",V),T.disabled=V,T.setAttribute("aria-pressed",M?"true":"false"),T.setAttribute("aria-label",M?"Remove from favorites":"Add to favorites"),V?(T.setAttribute("aria-busy","true"),T.innerHTML=`
          <span class="game-dialog__spinner" aria-hidden="true"></span>
          <span class="game-dialog__fav-btn-text">Updating...</span>
        `):(T.removeAttribute("aria-busy"),T.innerHTML=`
          ${Z}
          <span class="game-dialog__fav-btn-text">${M?"Favorited":"Add to Favorites"}</span>
        `))};T==null||T.addEventListener("click",async()=>{if(s)return;const M=ne();if(!M){F("Please log in to manage your favorites.","warning"),Je("login");return}s=!0,ee(f,!0);try{const V=await Fd(t,M.email);f=!!V.isFavorited,_.isLikedByCurrentUser=f,_.likesCount=V.likesCount;const ye=n.querySelector(".game-dialog__likes-count");ye&&(ye.textContent=Er(V.likesCount))}catch(V){const ye=V instanceof Error?V.message:"Network error updating favorites.";F(ye,"error")}finally{s=!1,ee(f,!1)}}),R&&R.addEventListener("input",()=>{R.style.height="auto";const M=Math.min(R.scrollHeight,88);R.style.height=`${M}px`});const _e=async()=>{if(i||!R)return;const M=ne();if(!M){F("Please log in to post a comment.","warning"),Je("login");return}const V=R.value.trim();if(!V){F("Comment cannot be empty.","warning");return}if(V.length>500){F("Comment exceeds 500 characters limit.","warning");return}i=!0,R.disabled=!0,x&&(x.disabled=!0);try{if(!(await fetch(`${Wt}/games/${t}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userEmail:M.email,authorName:M.displayName,text:V})})).ok)throw new Error("Failed to post comment.");R.value="",R.style.height="auto",F("Comment posted successfully!","success"),Q&&await C(Q)}catch(ye){const Qs=ye instanceof Error?ye.message:"Network error posting comment.";F(Qs,"error")}finally{i=!1,R.disabled=!1,x&&(x.disabled=!1),R.focus()}};U==null||U.addEventListener("submit",M=>{M.preventDefault(),_e()}),R==null||R.addEventListener("keydown",M=>{M.key==="Enter"&&!M.shiftKey&&(M.preventDefault(),_e())}),Q&&C(Q)},C=async _=>{var N;try{const P=ne(),D=P?`?userEmail=${encodeURIComponent(P.email)}&limit=3&sort=newest`:"?limit=3&sort=newest",y=await fetch(`${Wt}/games/${t}/comments${D}`);if(!y.ok)throw new Error("Failed to load comments");const f=await y.json(),I=f.data||[],m=((N=f.meta)==null?void 0:N.totalComments)??f.totalCount??I.length;p(I,m,_)}catch(P){const D=P instanceof Error?P.message:"Failed to load comments";F(D,"error");const y=_.querySelector(".game-dialog__comments-list");y&&(y.innerHTML='<div class="game-dialog__comments-error">Unable to load comments.</div>')}},b=async()=>{u();try{const _=ne(),N=await $d(t,_==null?void 0:_.email);A(N)}catch(_){const N=_ instanceof Error?_.message:"Failed to load game details";g(N),F(N,"error")}};return b(),e},An=(t,e=!0)=>{if(!t)return;if(document.querySelector(".game-dialog-backdrop")){e&&Y.updateQueryParams({game:t});return}e&&Y.updateQueryParams({game:t});const r=zd(t);document.body.append(r),document.body.classList.add("no-scroll")},Kd=()=>{const t=document.querySelector(".game-dialog-backdrop");t&&(document.body.classList.remove("no-scroll"),t.remove())},Yd=()=>{const t=document.createElement("section");t.className="carousel-section";const e=document.createElement("header");e.className="carousel-section__header";const n=document.createElement("div");n.className="carousel-section__title-wrapper";const r=document.createElement("span");r.className="carousel-section__badge";const s=document.createElement("h2");s.className="carousel-section__title",s.textContent="Featured Games",n.append(r,s);const i=document.createElement("nav");i.className="carousel-section__nav",i.setAttribute("aria-label","Carousel Navigation");const a=document.createElement("button");a.type="button",a.className="carousel-section__btn carousel-section__btn--prev",a.setAttribute("aria-label","Previous slide"),a.innerHTML=`
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  `;const o=document.createElement("button");o.type="button",o.className="carousel-section__btn carousel-section__btn--next",o.setAttribute("aria-label","Next slide"),o.innerHTML=`
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  `,i.append(a,o),e.append(n,i);const c=document.createElement("div");c.className="carousel-section__content",t.append(e,c);let l;const d=()=>{l!==void 0&&(clearInterval(l),l=void 0)},h=()=>{c.innerHTML=`
      <div class="carousel-section__skeleton-container">
        <div class="carousel-section__skeleton-card"></div>
        <div class="carousel-section__skeleton-card"></div>
        <div class="carousel-section__skeleton-card"></div>
      </div>
    `},u=C=>{c.innerHTML=`
      <div class="carousel-section__error-banner">
        <p class="carousel-section__error-message">${C}</p>
        <button type="button" class="carousel-section__retry-btn">Try Again</button>
      </div>
    `;const b=c.querySelector(".carousel-section__retry-btn");b==null||b.addEventListener("click",()=>{A()})},g=()=>{c.innerHTML=`
      <div class="carousel-section__empty-state">
        <p>No featured games available right now.</p>
      </div>
    `},p=C=>{c.innerHTML="";const b=document.createElement("div");b.className="carousel-section__track-container";const _=document.createElement("div");_.className="carousel-section__track";const N=[];let P=0,D=!1,y=0,v=!1;for(const S of C){const T=document.createElement("div");T.className="carousel-section__slide";const U=Od(S);T.append(U),T.addEventListener("click",R=>{v||(R.preventDefault(),An(S.slug))}),_.append(T),N.push(T)}b.append(_),c.append(b);const f=()=>{const S=window.innerWidth<=1024,T=N.length;for(const[U,R]of N.entries()){R.classList.remove("carousel-section__slide--wide","carousel-section__slide--standard","carousel-section__slide--compact","carousel-section__slide--hidden");let x=(U-P)%T;x>T/2&&(x-=T),x<-T/2&&(x+=T),R.style.order=`${x+Math.floor(T/2)}`,x===0?R.classList.add("carousel-section__slide--wide"):Math.abs(x)===1?R.classList.add(S?"carousel-section__slide--compact":"carousel-section__slide--standard"):!S&&Math.abs(x)===2?R.classList.add("carousel-section__slide--compact"):R.classList.add("carousel-section__slide--hidden")}},I=()=>{const S=N.length;P=(P+1)%S,f()},m=()=>{const S=N.length;P=(P-1+S)%S,f()},k=()=>{d(),l=window.setInterval(I,4e3)},E=()=>{d(),k()};a.addEventListener("click",()=>{m(),E()}),o.addEventListener("click",()=>{I(),E()}),b.addEventListener("pointerdown",S=>{D=!0,v=!1,y=S.clientX,d()}),b.addEventListener("pointermove",S=>{D&&Math.abs(S.clientX-y)>5&&(v=!0)});const L=S=>{if(!D)return;D=!1;const T=S.clientX-y;v?(T<-40?I():T>40?m():f(),E()):k()};b.addEventListener("pointerup",L),b.addEventListener("pointercancel",L),window.addEventListener("resize",f),f(),k()},A=async()=>{d(),h();try{const C=await xd();if(!C||C.length===0){g();return}p(C)}catch(C){const b=C instanceof Error?C.message:"Failed to fetch featured games.";u(b),F(b,"error")}};return A(),t},Jd=t=>{const e=t.match(/[A-Z]/g);return e&&e.length>=2?e.slice(0,2).join(""):t.slice(0,2).toUpperCase()},Xd=t=>t.toLocaleString("en-US"),Qd=t=>t>=1e3?`${(t/1e3).toFixed(1)}K`:t.toString(),Zd=()=>{const t=document.createElement("section");t.className="leaderboard-section";const e=document.createElement("header");e.className="leaderboard-section__header";const n=document.createElement("div");n.className="leaderboard-section__title-wrapper";const r=document.createElement("span");r.className="leaderboard-section__badge";const s=document.createElement("h2");s.className="leaderboard-section__title",s.innerHTML=`
    <span class="leaderboard-section__title-full">Top Players This Week</span>
    <span class="leaderboard-section__title-short">Top Players</span>
  `,n.append(r,s),e.append(n);const i=document.createElement("div");i.className="leaderboard-section__table-wrapper",t.append(e,i);const a=()=>{i.innerHTML=`
      <div class="leaderboard-section__skeleton">
        <div class="leaderboard-section__skeleton-row"></div>
        <div class="leaderboard-section__skeleton-row"></div>
        <div class="leaderboard-section__skeleton-row"></div>
        <div class="leaderboard-section__skeleton-row"></div>
        <div class="leaderboard-section__skeleton-row"></div>
      </div>
    `},o=h=>{i.innerHTML=`
      <div class="leaderboard-section__error-banner">
        <p class="leaderboard-section__error-message">${h}</p>
        <button type="button" class="leaderboard-section__retry-btn">Retry</button>
      </div>
    `;const u=i.querySelector(".leaderboard-section__retry-btn");u==null||u.addEventListener("click",()=>{d()})},c=()=>{i.innerHTML=`
      <div class="leaderboard-section__empty-state">
        <p>No leaderboard data available at the moment.</p>
      </div>
    `},l=h=>{i.innerHTML="";const u=document.createElement("table");u.className="leaderboard-table";const g=document.createElement("thead");g.className="leaderboard-table__head";const p=document.createElement("tr");p.className="leaderboard-table__row leaderboard-table__row--head";const A=[{html:"RANK",classModifier:"rank"},{html:"PLAYER",classModifier:"player"},{html:'<span class="leaderboard-table__head-full">GAMES PLAYED</span><span class="leaderboard-table__head-short">GAMES</span>',classModifier:"games"},{html:'<span class="leaderboard-table__head-full">TOTAL SCORE</span><span class="leaderboard-table__head-short">SCORE</span>',classModifier:"score"},{html:"STREAK",classModifier:"streak"},{html:"FAVORITE GAME",classModifier:"favorite"}];for(const b of A){const _=document.createElement("th");_.className=`leaderboard-table__th leaderboard-table__th--${b.classModifier}`,_.innerHTML=b.html,p.append(_)}g.append(p);const C=document.createElement("tbody");C.className="leaderboard-table__body";for(const b of h){const _=document.createElement("tr");_.className="leaderboard-table__row";const N=document.createElement("td");N.className="leaderboard-table__td leaderboard-table__td--rank";const P=document.createElement("span");P.className=`leaderboard-table__rank-text${b.rank===1?" leaderboard-table__rank-text--top":""}`,P.textContent=`#${b.rank}`,N.append(P);const D=document.createElement("td");D.className="leaderboard-table__td leaderboard-table__td--player";const y=document.createElement("div");y.className="leaderboard-table__player-cell";const v=document.createElement("div");v.className=`leaderboard-table__avatar leaderboard-table__avatar--${b.rank}`,v.textContent=Jd(b.playerName);const f=document.createElement("span");f.className="leaderboard-table__player-name",f.textContent=b.playerName,y.append(v,f),D.append(y);const I=document.createElement("td");I.className="leaderboard-table__td leaderboard-table__td--games",I.textContent=b.gamesPlayed.toString();const m=document.createElement("td");m.className="leaderboard-table__td leaderboard-table__td--score",m.innerHTML=`
        <span class="leaderboard-table__score-full">${Xd(b.totalScore)}</span>
        <span class="leaderboard-table__score-short">${Qd(b.totalScore)}</span>
      `;const k=document.createElement("td");k.className="leaderboard-table__td leaderboard-table__td--streak";const E=document.createElement("div");E.className="leaderboard-table__streak-cell",E.innerHTML=`
        <span class="leaderboard-table__fire-icon">🔥</span>
        <span class="leaderboard-table__streak-full">${b.streakDays} days</span>
        <span class="leaderboard-table__streak-short">${b.streakDays}d</span>
      `,k.append(E);const L=document.createElement("td");L.className="leaderboard-table__td leaderboard-table__td--favorite";const S=document.createElement("span");S.className="leaderboard-table__game-tag",S.textContent=b.favoriteGameName,L.append(S),_.append(N,D,I,m,k,L),C.append(_)}u.append(g,C),i.append(u)},d=async()=>{a();try{const h=await Bd();if(!h||h.length===0){c();return}l(h)}catch(h){const u=h instanceof Error?h.message:"Failed to load leaderboard data";o(u),F(u,"error")}};return d(),t},eu="/minigames/assets/ilustration-side-DsQZrXDY.webp",tu=()=>{const t=document.createElement("section");t.className="game-developers-section";const e=document.createElement("div");e.className="game-developers-section__container";const n=document.createElement("div");n.className="game-developers-section__illustration-wrapper";const r=document.createElement("img");r.className="game-developers-section__illustration",r.src=eu,r.alt="Game developer workspace illustration",n.append(r);const s=document.createElement("div");s.className="game-developers-section__card";const i=document.createElement("h2");i.className="game-developers-section__title",i.textContent="Are You a Game Developer?";const a=document.createElement("p");a.className="game-developers-section__description",a.textContent="Want to see your game on MiniGames? We're always looking for fun, engaging mini games to add to our platform. Submit your game and reach thousands of players!";const o=document.createElement("button");o.type="button",o.className="game-developers-section__button";const c=document.createElement("span");c.className="game-developers-section__button-icon",c.innerHTML=`
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      <polyline points="7 9 12 4 17 9" />
      <line x1="12" y1="4" x2="12" y2="16" />
    </svg>
  `;const l=document.createElement("span");l.textContent="Submit Form",o.append(c,l);const d=document.createElement("p");return d.className="game-developers-section__contact",d.innerHTML='or contact us at <a href="mailto:developers@minigames.com">developers@minigames.com</a>',s.append(i,a,o,d),e.append(n,s),t.append(e),t},Xs=(t={})=>{const{onNavigate:e}=t,n=document.createElement("footer");n.className="footer",n.innerHTML=`
    <div class="footer__container">
      <div class="footer__top">
        <!-- Brand Section -->
        <div class="footer__brand">
          <div class="footer__logo">
            <img class="footer__logo-img" src="${Cr}" alt="MiniGames Logo" />
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
  `;const r=n.querySelectorAll("[data-page]");for(const s of r)s.addEventListener("click",i=>{i.preventDefault();const a=s.dataset.page||"home";e&&e(a)});return n},kr=t=>{const e="/minigames/",n=t==="home"?e:`${e}library`;window.location.hash=n,window.dispatchEvent(new CustomEvent("navigate",{detail:t}))},nu=()=>{const t=document.createElement("div");t.className="page-home";const e=Js({activePage:"home",onNavigate:kr}),n=document.createElement("main"),r=Rd(),s=Yd(),i=Zd(),a=tu();n.append(r,s,i,a);const o=Xs({onNavigate:kr}),c=Tn();return t.append(e,n,o,c),t},Sr=[{value:"rating-desc",label:"Sort by: Rating ↓"},{value:"rating-asc",label:"Sort by: Rating ↑"},{value:"name-asc",label:"Sort by: Name A-Z"},{value:"name-desc",label:"Sort by: Name Z-A"}],ru=t=>{const e=document.createElement("section");e.className="library-controls";const n=document.createElement("div");n.className="library-controls__header";const r=document.createElement("h1");r.className="library-controls__title",r.textContent="Game Library";const s=document.createElement("p");s.className="library-controls__subtitle",s.textContent="Browse our collection of casual mini-games",n.append(r,s);const i=document.createElement("div");i.className="library-controls__row";const a=document.createElement("div");a.className="library-controls__chips",a.innerHTML='<span style="opacity: 0.6;">Loading categories...</span>';const o=document.createElement("div");o.className="library-controls__sort";const c=document.createElement("button");c.type="button",c.className="library-controls__sort-trigger",c.innerHTML=`
    <span class="library-controls__sort-label">${Sr[0].label}</span>
    <svg class="library-controls__sort-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `;const l=document.createElement("ul");l.className="library-controls__sort-menu";for(const[h,u]of Sr.entries()){const g=document.createElement("li");g.className="library-controls__sort-item";const p=document.createElement("button");p.type="button",p.className=`library-controls__sort-option${h===0?" library-controls__sort-option--active":""}`,p.textContent=u.label,p.dataset.value=u.value,p.addEventListener("click",()=>{const A=c.querySelector(".library-controls__sort-label");A&&(A.textContent=u.label);for(const C of l.querySelectorAll(".library-controls__sort-option"))C.classList.remove("library-controls__sort-option--active");p.classList.add("library-controls__sort-option--active"),o.classList.remove("library-controls__sort--open"),t.onSortChange(u.value)}),g.append(p),l.append(g)}return c.addEventListener("click",h=>{h.stopPropagation(),o.classList.toggle("library-controls__sort--open")}),document.addEventListener("click",()=>{o.classList.remove("library-controls__sort--open")}),o.append(c,l),i.append(a,o),e.append(n,i),(async()=>{var h,u;try{const g=await Md();a.innerHTML="";const p=((h=g.find(A=>A.isDefault))==null?void 0:h.value)||((u=g.find(A=>A.isDefault))==null?void 0:u.slug)||"all";for(const A of g){const C=A.value||A.slug||"all",b=A.label||A.name||C,_=document.createElement("button");_.type="button";const N=C===p;_.className=`library-controls__chip${N?" library-controls__chip--active":""}`,_.textContent=b,_.dataset.value=C,_.addEventListener("click",()=>{for(const P of a.querySelectorAll(".library-controls__chip"))P.classList.remove("library-controls__chip--active");_.classList.add("library-controls__chip--active"),t.onCategoryChange(C)}),a.append(_)}}catch(g){const p=g instanceof Error?g.message:"Failed to load categories";F(p,"error")}})(),e},Tr=({totalPages:t,currentPage:e,onPageChange:n})=>{const r=Math.max(1,t),s=Math.min(Math.max(1,e),r),i=document.createElement("section");i.className="library-pagination";const a=document.createElement("div");a.className="library-pagination__container";const o=()=>window.matchMedia("(max-width: 640px)").matches,c=()=>{const d=o()?3:4,h=[];let u=Math.max(1,s-Math.floor(d/2)),g=u+d-1;g>r&&(g=r,u=Math.max(1,g-d+1));for(let p=u;p<=g;p++)h.push(p);return h},l=()=>{a.innerHTML="";const d=document.createElement("button");d.type="button",d.className="library-pagination__arrow library-pagination__arrow--prev",d.ariaLabel="Previous page",d.innerHTML=`
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    `,s===1&&(d.disabled=!0,d.classList.add("library-pagination__arrow--disabled")),d.addEventListener("click",()=>{s>1&&n(s-1)}),a.append(d);const h=c();for(const g of h){const p=document.createElement("button");p.type="button",p.className=`library-pagination__page${g===s?" library-pagination__page--active":""}`,p.textContent=g.toString(),p.addEventListener("click",()=>{s!==g&&n(g)}),a.append(p)}const u=document.createElement("button");u.type="button",u.className="library-pagination__arrow library-pagination__arrow--next",u.ariaLabel="Next page",u.innerHTML=`
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    `,s===r&&(u.disabled=!0,u.classList.add("library-pagination__arrow--disabled")),u.addEventListener("click",()=>{s<r&&n(s+1)}),a.append(u)};return window.addEventListener("resize",()=>{l()}),l(),i.append(a),i},su=t=>t>=1e3?`${(t/1e3).toFixed(1)}K`:t.toString(),iu=t=>{const e=document.createElement("article");e.className="library-card";const n=document.createElement("div");n.className="library-card__media";const r=document.createElement("img");r.src=Ve(t.cardImage),r.alt=t.name||"Game Cover",r.className="library-card__img",r.loading="lazy",r.addEventListener("error",()=>{r.src="https://placehold.co/300x380/1e1e1e/ffffff?text=No+Image"},{once:!0}),n.append(r);const s=document.createElement("div");s.className="library-card__content";const i=document.createElement("div");i.className="library-card__header";const a=document.createElement("div");a.className="library-card__title-group";const o=document.createElement("h3");o.className="library-card__title",o.textContent=t.name||"Untitled";const c=document.createElement("span");c.className="library-card__category",c.textContent=t.category||"All",a.append(o,c);const l=document.createElement("span");l.className="library-card__price",l.textContent=t.price||"Free",i.append(a,l);const d=document.createElement("p");d.className="library-card__desc",d.textContent=t.shortDescription||"";const h=document.createElement("div");h.className="library-card__footer";const u=document.createElement("div");u.className="library-card__stats";const g=document.createElement("div");g.className="library-card__stats-group";const p=document.createElement("div");p.className="library-card__stat",p.innerHTML=`
    <svg class="library-card__icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FFD02B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
    <span>${t.rating?t.rating.toFixed(1):"0.0"}</span>
  `;const A=document.createElement("div");A.className="library-card__stat",A.innerHTML=`
    <svg class="library-card__icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FF4B4B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
    <span>${su(t.likesCount||0)}</span>
  `,g.append(p,A);const C=document.createElement("span");C.className="library-card__price--mobile",C.textContent=t.price||"Free",u.append(g,C);const b=document.createElement("button");return b.type="button",b.className="library-card__btn",b.textContent="Details",b.addEventListener("click",()=>{An(t.slug)}),h.append(u,b),s.append(i,d,h),e.append(n,s),e},au=()=>{const t=document.createElement("section");t.className="library-games";const e=document.createElement("div");e.className="library-games__container";const n=document.createElement("div");n.className="library-games__pagination-wrapper",t.append(e,n);const r=Y.getQueryParams(),s=r.category||"all",i=r.sort||"rating-desc",a=Number.parseInt(r.page||"1",10),o=()=>{e.innerHTML=`
      <div class="library-games__skeleton-grid">
        <div class="library-games__skeleton-card"></div>
        <div class="library-games__skeleton-card"></div>
        <div class="library-games__skeleton-card"></div>
        <div class="library-games__skeleton-card"></div>
        <div class="library-games__skeleton-card"></div>
        <div class="library-games__skeleton-card"></div>
      </div>
    `},c=u=>{e.innerHTML=`
      <div class="library-games__error-banner">
        <p class="library-games__error-message">${u}</p>
        <button type="button" class="library-games__retry-btn">Retry</button>
      </div>
    `,n.innerHTML="";const g=e.querySelector(".library-games__retry-btn");g==null||g.addEventListener("click",()=>{h()})},l=(u=1)=>{e.innerHTML=`
      <div class="library-games__empty-state">
        <p>No games found matching your criteria.</p>
      </div>
    `,n.innerHTML="";const g=Tr({totalPages:u,currentPage:1,onPageChange:p=>{Y.updateQueryParams({page:p.toString()})}});n.append(g)},d=(u,g)=>{e.innerHTML="";const p=document.createElement("div");p.className="library-games__grid";for(const C of u)p.append(iu(C));e.append(p),n.innerHTML="";const A=Tr({totalPages:g,currentPage:a,onPageChange:C=>{Y.updateQueryParams({page:C.toString()})}});n.append(A)},h=async()=>{var u;o();try{const g=await Ud({category:s,sort:i,page:a,limit:6}),p=((u=g.meta)==null?void 0:u.totalPages)||1;if(!g.data||g.data.length===0){l(p);return}d(g.data,p)}catch(g){const p=g instanceof Error?g.message:"Failed to load library games";c(p),F(p,"error")}};return h(),{element:t,updateState:({category:u,sort:g,page:p})=>{const A={};u!==void 0&&(A.category=u==="all"?void 0:u,A.page="1"),g!==void 0&&(A.sort=g==="rating-desc"?void 0:g,A.page="1"),p!==void 0&&(A.page=p===1?void 0:p.toString()),Y.updateQueryParams(A)}}},Ar=t=>{const e="/minigames/",n=t==="home"?`${e}/`:`${e}/${t}`;window.history.pushState({},"",n),window.dispatchEvent(new CustomEvent("navigate",{detail:t}))},ou=()=>{const t=document.createElement("div");t.className="page-library";const e=Js({activePage:"library",onNavigate:Ar}),n=document.createElement("main"),r=au(),s=ru({onCategoryChange:o=>{r.updateState({category:o})},onSortChange:o=>{r.updateState({sort:o})}});n.append(s,r.element);const i=Xs({onNavigate:Ar}),a=Tn();return t.append(e,n,i,a),t},cu=()=>{const t=document.createElement("div");t.className="not-found-page",t.innerHTML=`
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
  `;const e=t.querySelector("#return-home-btn");return e==null||e.addEventListener("click",()=>{Y.navigate(ke||"/")}),t};let lt;const qt="/minigames/",ke=qt.endsWith("/")?qt.slice(0,-1):qt,Gt=()=>{const t=document.createElement("header");return t.className="main-header-wrapper",t},jt=()=>{const t=document.createElement("footer");return t.className="main-footer",t.innerHTML=`
    <div class="main-footer__container">
      <p>&copy; ${new Date().getFullYear()} MiniGames SPA. All rights reserved.</p>
    </div>
  `,t},Y=new ti([{path:ke||"/",render:()=>{const t=document.createElement("div");return t.append(Gt(),nu(),jt()),t}},{path:ke?`${ke}/library`:"/library",render:()=>{const t=document.createElement("div");return t.append(Gt(),ou(),jt()),t}},{path:ke?`${ke}/404`:"/404",render:()=>{const t=document.createElement("div");return t.append(Gt(),cu(),jt()),t}}]);Y.onRouteChange(t=>{const e=t.auth;if(e==="login"||e==="register")if(ne()){const s=new URL(window.location.href);s.searchParams.delete("auth"),window.history.replaceState({},"",s.toString()),window.dispatchEvent(new CustomEvent("show-snackbar",{detail:{message:"You are already authenticated.",type:"warning"}}));return}else Je(e);const n=t.game;n?lt!==n&&(lt=n,An(n,!1)):lt&&(lt=void 0,Kd())});const lu=()=>{let t=document.querySelector("#app");t||(t=document.createElement("div"),t.id="app",document.body.append(t)),window.addEventListener("navigate",e=>{const r=e.detail,s=r==="home"?`${ke||"/"}`:`${ke}/${r}`;Y.navigate(s)}),Y.init(t)};lu();
