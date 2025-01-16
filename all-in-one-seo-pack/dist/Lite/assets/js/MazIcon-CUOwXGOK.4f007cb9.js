import{T}from"./Phone.33692cc0.js";import{e as z,g as p,f,y as b,A as k,o as v,c as g,b as s,B as A,F as H,n as P}from"./runtime-dom.esm-bundler.5c3c7d72.js";import"./datetime.f197aeae.js";import"./preload-helper.5f06849a.js";import"./translations.d159963e.js";import"./default-i18n.20001971.js";import"./_plugin-vue_export-helper.eefbdd86.js";const $=["innerHTML"],V=z({__name:"MazIcon",props:{src:{type:String,default:void 0},path:{type:String,default:void 0},name:{type:String,default:void 0},size:{type:String,default:void 0},title:{type:String,default:void 0},transformSource:{type:Function,default:i=>i}},emits:["loaded","unloaded","error"],setup(i,{emit:y}){const o=i,c=y,u={},l=p(),m=p();function h(){try{return T("mazIconPath")}catch{return}}const d=f(()=>o.path??h()),_=f(()=>o.src?o.src:d.value?`${d.value}/${o.name}.svg`:`/${o.name}.svg`);b(()=>{!o.name&&!o.src&&console.error('[maz-ui](MazIcon) you should provide "name" or "src" as prop')});function w(e,n){const t=e.querySelectorAll("title");if(t.length>0)t[0].textContent=n;else{const r=document.createElementNS("http://www.w3.org/2000/svg","title");r.textContent=n,e.append(r)}}function S(e){return Object.keys(e).reduce((n,t)=>(e[t]!==!1&&e[t]!==null&&e[t]!==void 0&&(n[t]=e[t]),n),{})}function x(e){const n={},t=e.attributes;if(!t)return n;for(let r=t.length-1;r>=0;r--)n[t[r].name]=t[r].value;return n}function E(e){let n=e.cloneNode(!0);return n=o.transformSource(e),o.title&&w(n,o.title),e.innerHTML}async function L(e){u[e]||(u[e]=M(e));try{l.value=await u[e],await P(),c("loaded",m.value)}catch(n){l.value&&(l.value=void 0,c("unloaded")),delete u[e],c("error",n)}}function M(e){return new Promise((n,t)=>{const r=new XMLHttpRequest;r.open("GET",e,!0),r.addEventListener("load",()=>{if(r.status>=200&&r.status<400)try{let a=new DOMParser().parseFromString(r.responseText,"text/xml").querySelectorAll("svg")[0];a?(a=o.transformSource(a),n(a)):t(new Error('Loaded file is not valid SVG"'))}catch(a){t(a)}else t(new Error("Error loading SVG"))}),r.addEventListener("error",a=>t(a)),r.send()})}return k(()=>L(_.value)),(e,n)=>(v(),g(H,null,[s(" eslint-disable vue/no-v-html "),s(" eslint-disable vue/html-self-closing "),l.value?(v(),g("svg",A({key:0,ref_key:"svgElem",ref:m,width:"1em",height:"1em"},{...x(l.value),...S(e.$attrs)},{style:`font-size: ${i.size}`,innerHTML:E(l.value)}),null,16,$)):s("v-if",!0),s(" eslint-enable vue/no-v-html "),s(" eslint-enable vue/html-self-closing ")],2112))}});export{V as default};