var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function a(t){return null==t?"":t}const u="undefined"!=typeof window;let c=u?()=>window.performance.now():()=>Date.now(),d=u?t=>requestAnimationFrame(t):t;const f=new Set;function p(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&d(p)}function h(t,e){t.appendChild(e)}function g(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function m(t){const e=w("style");return function(t,e){h(t.head||t,e)}(g(t),e),e.sheet}function $(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function y(){return b(" ")}function x(){return b("")}function _(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function D(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e){t.value=null==e?"":e}function I(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}const S=new Map;let A,C=0;function j(t,e,n,o,r,s,i,l=0){const a=16.666/o;let u="{\n";for(let t=0;t<=1;t+=a){const o=e+(n-e)*s(t);u+=100*t+`%{${i(o,1-o)}}\n`}const c=u+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(c)}_${l}`,f=g(t),{stylesheet:p,rules:h}=S.get(f)||function(t,e){const n={stylesheet:m(e),rules:{}};return S.set(t,n),n}(f,t);h[d]||(h[d]=!0,p.insertRule(`@keyframes ${d} ${c}`,p.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${d} ${o}ms linear ${r}ms 1 both`,C+=1,d}function N(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),C-=r,C||d((()=>{C||(S.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),S.clear())})))}function H(t){A=t}const O=[],L=[],M=[],V=[],F=Promise.resolve();let T=!1;function R(t){M.push(t)}const P=new Set;let z,B=0;function J(){const t=A;do{for(;B<O.length;){const t=O[B];B++,H(t),q(t.$$)}for(H(null),O.length=0,B=0;L.length;)L.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];P.has(e)||(P.add(e),e())}M.length=0}while(O.length);for(;V.length;)V.pop()();T=!1,P.clear(),H(t)}function q(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}function W(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const U=new Set;let Y;function Z(){Y={r:0,c:[],p:Y}}function G(){Y.r||r(Y.c),Y=Y.p}function K(t,e){t&&t.i&&(U.delete(t),t.i(e))}function Q(t,e,n,o){if(t&&t.o){if(U.has(t))return;U.add(t),Y.c.push((()=>{U.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const X={duration:0};function tt(n,o,i,l){let a=o(n,i),u=l?0:1,h=null,g=null,m=null;function $(){m&&N(n,m)}function v(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function w(o){const{delay:s=0,duration:i=300,easing:l=e,tick:w=t,css:b}=a||X,y={start:c()+s,b:o};o||(y.group=Y,Y.r+=1),h||g?g=y:(b&&($(),m=j(n,u,o,i,s,l,b)),o&&w(0,1),h=v(y,i),R((()=>W(n,o,"start"))),function(t){let e;0===f.size&&d(p),new Promise((n=>{f.add(e={c:t,f:n})}))}((t=>{if(g&&t>g.start&&(h=v(g,i),g=null,W(n,h.b,"start"),b&&($(),m=j(n,u,h.b,h.duration,0,l,a.css))),h)if(t>=h.end)w(u=h.b,1-u),W(n,h.b,"end"),g||(h.b?$():--h.group.r||r(h.group.c)),h=null;else if(t>=h.start){const e=t-h.start;u=h.a+h.d*l(e/h.duration),w(u,1-u)}return!(!h&&!g)})))}return{run(t){s(a)?(z||(z=Promise.resolve(),z.then((()=>{z=null}))),z).then((()=>{a=a(),w(t)})):w(t)},end(){$(),h=g=null}}}function et(t,e){Q(t,1,1,(()=>{e.delete(t.key)}))}function nt(t){t&&t.c()}function ot(t,e,o,i){const{fragment:l,on_mount:a,on_destroy:u,after_update:c}=t.$$;l&&l.m(e,o),i||R((()=>{const e=a.map(n).filter(s);u?u.push(...e):r(e),t.$$.on_mount=[]})),c.forEach(R)}function rt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(O.push(t),T||(T=!0,F.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function it(e,n,s,i,l,a,u,c=[-1]){const d=A;H(e);const f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:c,skip_bound:!1,root:n.target||d.$$.root};u&&u(f.root);let p=!1;if(f.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&st(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(v)}else f.fragment&&f.fragment.c();n.intro&&K(e.$$.fragment),ot(e,n.target,n.anchor,n.customElement),J()}H(d)}class lt{$destroy(){rt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const at=[];function ut(e,n=t){let o;const r=new Set;function s(t){if(i(e,t)&&(e=t,o)){const t=!at.length;for(const t of r)t[1](),at.push(t,e);if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,l=t){const a=[i,l];return r.add(a),1===r.size&&(o=n(s)||t),i(e),()=>{r.delete(a),0===r.size&&(o(),o=null)}}}}const ct=function(){const t=localStorage.getItem("history"),e=t?.length>2?JSON.parse(t):[{word:"VALID",definition:"sound, legally adequate [adj VALIDER, VALIDEST, VALIDLY]",valid:!0,id:"16507028076590",showDefinition:!0},{word:"NOTVALID",definition:"",valid:!1,id:"16507028075550",showDefinition:!1}],{set:n,subscribe:o,update:r}=ut(e);return{set:n,subscribe:o,update:r,add:t=>r((e=>[t,...e])),addAll:t=>r((e=>[...t,...e])),delete:t=>r((e=>e.filter((e=>e.id!=t)))),clear:()=>r((()=>[])),toggleDefinition:t=>r((e=>{let n=e.find((e=>e.id==t));return n.showDefinition=!n.showDefinition,e}))}}();ct.subscribe((t=>{localStorage.setItem("history",JSON.stringify(t))}));const dt=function(){const t=localStorage.getItem("options"),e=t?JSON.parse(t):{showDefinition:!0,showValid:!0,showInvalid:!0,showHistory:!0},{set:n,subscribe:o,update:r}=ut(e);return{set:n,subscribe:o,update:r,toggleDefinition:t=>r((e=>(e.showDefinition=void 0!==t?t:!e.showDefinition,e))),toggleValid:t=>r((e=>(e.showValid=void 0!==t?t:!e.showValid,e))),toggleInvalid:t=>r((e=>(e.showInvalid=void 0!==t?t:!e.showInvalid,e))),toggleHistory:t=>r((e=>(e.showHistory=void 0!==t?t:!e.showHistory,e)))}}();dt.subscribe((t=>{localStorage.setItem("options",JSON.stringify(t))}));function ft(e){let n;return{c(){n=w("span"),n.textContent="..."},m(t,e){$(t,n,e)},p:t,d(t){t&&v(n)}}}function pt(t){let e;function n(t,e){return t[3]?gt:ht}let o=n(t),r=o(t);return{c(){r.c(),e=x()},m(t,n){r.m(t,n),$(t,e,n)},p(t,s){o!==(o=n(t))&&(r.d(1),r=o(t),r&&(r.c(),r.m(e.parentNode,e)))},d(t){r.d(t),t&&v(e)}}}function ht(t){let e;return{c(){e=w("span"),e.textContent="✖"},m(t,n){$(t,e,n)},d(t){t&&v(e)}}}function gt(t){let e;return{c(){e=w("span"),e.textContent="✔"},m(t,n){$(t,e,n)},d(t){t&&v(e)}}}function mt(e){let n,o,s,i,l,u,c,d;function f(t,e){return"loaded"===t[2]?pt:"loading"===t[2]?ft:void 0}let p=f(e),g=p&&p(e);return{c(){n=w("form"),o=w("div"),s=w("input"),i=y(),l=w("div"),g&&g.c(),D(s,"type","text"),D(s,"name","word-input"),D(s,"id","word-input"),D(s,"class","svelte-rhatmo"),D(o,"class",u=a(`input-wrapper ${e[2]} ${e[3]?"valid":"invalid"}`)+" svelte-rhatmo"),D(n,"autocomplete","off"),D(n,"class","svelte-rhatmo")},m(t,r){var a;$(t,n,r),h(n,o),h(o,s),E(s,e[0]),h(o,i),h(o,l),g&&g.m(l,null),c||(d=[_(s,"input",e[6]),_(s,"input",e[7]),_(n,"submit",(a=e[8],function(t){return t.preventDefault(),a.call(this,t)}))],c=!0)},p(t,[e]){1&e&&s.value!==t[0]&&E(s,t[0]),p===(p=f(t))&&g?g.p(t,e):(g&&g.d(1),g=p&&p(t),g&&(g.c(),g.m(l,null))),12&e&&u!==(u=a(`input-wrapper ${t[2]} ${t[3]?"valid":"invalid"}`)+" svelte-rhatmo")&&D(o,"class",u)},i:t,o:t,d(t){t&&v(n),g&&g.d(),c=!1,r(d)}}}function $t(t,e,n){let o,r;l(t,dt,(t=>n(9,r=t)));let{wordInput:s=""}=e,i="",a=[],u="idle";async function c(){n(1,i=s),n(2,u="loading");let t=await(async(t,e)=>{let n=`https://fotf-cors.herokuapp.com/https://scrabble.deno.dev/?words=${t}`,o=await fetch(n,{origin:"https://scrabble.deno.dev"}),r=await o.json();console.log(r);let s=[];return r.results.forEach(((t,n)=>{t.word&&s.push({...t,id:`${Date.now()}${n}`,showDefinition:e.showDefinition})})),s})(s,r);n(5,a=t),ct.addAll(t),n(2,u="loaded")}return t.$$set=t=>{"wordInput"in t&&n(0,s=t.wordInput)},t.$$.update=()=>{1&t.$$.dirty&&n(0,s=s.replaceAll(/[^a-zA-Z, ]/g,"").toUpperCase()),32&t.$$.dirty&&n(3,o=a.every((t=>t.valid)))},[s,i,u,o,c,a,function(){s=this.value,n(0,s)},()=>{n(2,u=s!=i?"idle":"loaded")},()=>c()]}class vt extends lt{constructor(t){super(),it(this,t,$t,mt,i,{wordInput:0})}}function wt(t){const e=t-1;return e*e*e+1}function bt(t,{delay:e=0,duration:n=400,easing:o=wt}={}){const r=getComputedStyle(t),s=+r.opacity,i=parseFloat(r.height),l=parseFloat(r.paddingTop),a=parseFloat(r.paddingBottom),u=parseFloat(r.marginTop),c=parseFloat(r.marginBottom),d=parseFloat(r.borderTopWidth),f=parseFloat(r.borderBottomWidth);return{delay:e,duration:n,easing:o,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*s};height: ${t*i}px;padding-top: ${t*l}px;padding-bottom: ${t*a}px;margin-top: ${t*u}px;margin-bottom: ${t*c}px;border-top-width: ${t*d}px;border-bottom-width: ${t*f}px;`}}function yt(t){let e,n,o,r,s=t[0].definition+"";return{c(){e=w("div"),n=b(s),D(e,"class","definition svelte-l5axjg")},m(t,o){$(t,e,o),h(e,n),r=!0},p(t,e){(!r||1&e)&&s!==(s=t[0].definition+"")&&k(n,s)},i(t){r||(R((()=>{o||(o=tt(e,bt,{},!0)),o.run(1)})),r=!0)},o(t){o||(o=tt(e,bt,{},!1)),o.run(0),r=!1},d(t){t&&v(e),t&&o&&o.end()}}}function xt(t){let e,n,o,s,i,l,u,c,d,f,p,g,m,x,E,I=t[0].valid?"✔":"✖",S=t[0].word+"",A=t[0].valid&&t[0].showDefinition&&yt(t);return{c(){e=w("li"),n=w("div"),o=w("div"),s=b(I),i=y(),l=w("div"),u=b(S),c=y(),d=w("div"),d.textContent="×",f=y(),A&&A.c(),D(o,"class","valid-icon svelte-l5axjg"),D(l,"class","result-word svelte-l5axjg"),D(d,"class","result-delete svelte-l5axjg"),D(n,"class","result-header svelte-l5axjg"),D(e,"class",p=a("result "+(t[0].valid?"valid":"invalid"))+" svelte-l5axjg")},m(r,a){var p;$(r,e,a),h(e,n),h(n,o),h(o,s),h(n,i),h(n,l),h(l,u),h(n,c),h(n,d),h(e,f),A&&A.m(e,null),m=!0,x||(E=[_(d,"click",(p=t[1],function(t){return t.stopPropagation(),p.call(this,t)})),_(e,"click",t[2])],x=!0)},p(t,[n]){(!m||1&n)&&I!==(I=t[0].valid?"✔":"✖")&&k(s,I),(!m||1&n)&&S!==(S=t[0].word+"")&&k(u,S),t[0].valid&&t[0].showDefinition?A?(A.p(t,n),1&n&&K(A,1)):(A=yt(t),A.c(),K(A,1),A.m(e,null)):A&&(Z(),Q(A,1,1,(()=>{A=null})),G()),(!m||1&n&&p!==(p=a("result "+(t[0].valid?"valid":"invalid"))+" svelte-l5axjg"))&&D(e,"class",p)},i(t){m||(K(A),R((()=>{g||(g=tt(e,bt,{},!0)),g.run(1)})),m=!0)},o(t){Q(A),g||(g=tt(e,bt,{},!1)),g.run(0),m=!1},d(t){t&&v(e),A&&A.d(),t&&g&&g.end(),x=!1,r(E)}}}function _t(t,e,n){let{result:o}=e;return t.$$set=t=>{"result"in t&&n(0,o=t.result)},[o,()=>ct.delete(o.id),()=>ct.toggleDefinition(o.id)]}class Dt extends lt{constructor(t){super(),it(this,t,_t,xt,i,{result:0})}}function kt(t,e,n){const o=t.slice();return o[4]=e[n],o}function Et(t){let e,n,o,r=[],s=new Map,i=t[1];const l=t=>t[4].id;for(let e=0;e<i.length;e+=1){let n=kt(t,i,e),o=l(n);s.set(o,r[e]=It(o,n))}return{c(){e=w("ul");for(let t=0;t<r.length;t+=1)r[t].c();D(e,"class","result-list svelte-1enlrih")},m(t,n){$(t,e,n);for(let t=0;t<r.length;t+=1)r[t].m(e,null);o=!0},p(t,n){2&n&&(i=t[1],Z(),r=function(t,e,n,o,r,s,i,l,a,u,c,d){let f=t.length,p=s.length,h=f;const g={};for(;h--;)g[t[h].key]=h;const m=[],$=new Map,v=new Map;for(h=p;h--;){const t=d(r,s,h),l=n(t);let a=i.get(l);a?o&&a.p(t,e):(a=u(l,t),a.c()),$.set(l,m[h]=a),l in g&&v.set(l,Math.abs(h-g[l]))}const w=new Set,b=new Set;function y(t){K(t,1),t.m(l,c),i.set(t.key,t),c=t.first,p--}for(;f&&p;){const e=m[p-1],n=t[f-1],o=e.key,r=n.key;e===n?(c=e.first,f--,p--):$.has(r)?!i.has(o)||w.has(o)?y(e):b.has(r)?f--:v.get(o)>v.get(r)?(b.add(o),y(e)):(w.add(r),f--):(a(n,i),f--)}for(;f--;){const e=t[f];$.has(e.key)||a(e,i)}for(;p;)y(m[p-1]);return m}(r,n,l,1,t,i,s,e,et,It,null,kt),G())},i(t){if(!o){for(let t=0;t<i.length;t+=1)K(r[t]);R((()=>{n||(n=tt(e,bt,{},!0)),n.run(1)})),o=!0}},o(t){for(let t=0;t<r.length;t+=1)Q(r[t]);n||(n=tt(e,bt,{},!1)),n.run(0),o=!1},d(t){t&&v(e);for(let t=0;t<r.length;t+=1)r[t].d();t&&n&&n.end()}}}function It(t,e){let n,o,r;return o=new Dt({props:{result:e[4]}}),{key:t,first:null,c(){n=x(),nt(o.$$.fragment),this.first=n},m(t,e){$(t,n,e),ot(o,t,e),r=!0},p(t,n){e=t;const r={};2&n&&(r.result=e[4]),o.$set(r)},i(t){r||(K(o.$$.fragment,t),r=!0)},o(t){Q(o.$$.fragment,t),r=!1},d(t){t&&v(n),rt(o,t)}}}function St(t){let e,n,o,s,i,l,u,c,d,f,p,g,m,E,S=t[1].length+"",A=t[0]&&Et(t);return{c(){e=w("div"),n=w("span"),o=w("i"),i=b("History ("),l=b(S),u=b(")"),c=y(),d=w("span"),d.textContent="Clear All",f=y(),A&&A.c(),p=x(),D(o,"class",s=a("fas "+(t[0]?"fa-angle-down":"fa-angle-right"))+" svelte-1enlrih"),I(o,"margin-right","0.5rem",!1),D(n,"class","button svelte-1enlrih"),I(n,"margin-left","-1rem",!1),D(d,"class","button svelte-1enlrih"),D(e,"class","history-buttons svelte-1enlrih")},m(r,s){$(r,e,s),h(e,n),h(n,o),h(n,i),h(n,l),h(n,u),h(e,c),h(e,d),$(r,f,s),A&&A.m(r,s),$(r,p,s),g=!0,m||(E=[_(n,"click",t[2]),_(d,"click",t[3])],m=!0)},p(t,[e]){(!g||1&e&&s!==(s=a("fas "+(t[0]?"fa-angle-down":"fa-angle-right"))+" svelte-1enlrih"))&&D(o,"class",s),(!g||2&e)&&S!==(S=t[1].length+"")&&k(l,S),t[0]?A?(A.p(t,e),1&e&&K(A,1)):(A=Et(t),A.c(),K(A,1),A.m(p.parentNode,p)):A&&(Z(),Q(A,1,1,(()=>{A=null})),G())},i(t){g||(K(A),g=!0)},o(t){Q(A),g=!1},d(t){t&&v(e),t&&v(f),A&&A.d(t),t&&v(p),m=!1,r(E)}}}function At(t,e,n){let o;l(t,ct,(t=>n(1,o=t)));let{showHistory:r=!0}=e;return t.$$set=t=>{"showHistory"in t&&n(0,r=t.showHistory)},[r,o,()=>{n(0,r=!r)},()=>confirm(`Clear all ${o.length} results from history?`)&&ct.clear()]}class Ct extends lt{constructor(t){super(),it(this,t,At,St,i,{showHistory:0})}}function jt(e){let n;return{c(){n=w("header"),n.innerHTML='<h1 class="svelte-1sgrxf5">Scrabble Word Checker</h1>',D(n,"class","svelte-1sgrxf5")},m(t,e){$(t,n,e)},p:t,i:t,o:t,d(t){t&&v(n)}}}class Nt extends lt{constructor(t){super(),it(this,t,null,jt,i,{})}}function Ht(e){let n,o,r,s,i,l,a,u;return r=new Nt({}),i=new vt({}),a=new Ct({}),{c(){n=w("div"),o=w("main"),nt(r.$$.fragment),s=y(),nt(i.$$.fragment),l=y(),nt(a.$$.fragment),D(o,"class","svelte-1sa04gd"),D(n,"class","app-container svelte-1sa04gd")},m(t,e){$(t,n,e),h(n,o),ot(r,o,null),h(o,s),ot(i,o,null),h(o,l),ot(a,o,null),u=!0},p:t,i(t){u||(K(r.$$.fragment,t),K(i.$$.fragment,t),K(a.$$.fragment,t),u=!0)},o(t){Q(r.$$.fragment,t),Q(i.$$.fragment,t),Q(a.$$.fragment,t),u=!1},d(t){t&&v(n),rt(r),rt(i),rt(a)}}}return new class extends lt{constructor(t){super(),it(this,t,null,Ht,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
