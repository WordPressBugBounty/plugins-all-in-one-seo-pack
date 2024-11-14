import{u as d,p as x,q as N}from"./index.5a710757.js";import{e as q}from"./regex.f8017116.js";import{g as V,t as H}from"./helpers.b97d7047.js";import{C as M}from"./constants.2019bcb3.js";import{a as U}from"./Caret.662da1f3.js";import{u as j}from"./Url.cc9d8d5e.js";import"./translations.12335a6a.js";import{D as A,v as P,o,c as n,a as s,t as a,x as F,F as g,J as w,b as h,C as B,G as D,K as I,L as O}from"./runtime-dom.esm-bundler.6789c400.js";import{_ as z}from"./_plugin-vue_export-helper.249dac1d.js";import{_ as v,a as L,s as K}from"./default-i18n.54b5d8cd.js";const c="all-in-one-seo-pack",m={setup(){const{decodeUrl:e}=j();return{decodeUrl:e}},components:{SvgCaret:U},props:{focusKeyphrase:String,device:{type:String,default:"desktop"},favicon:String,hostname:{type:String,default(){const e=d();return e.aioseo.data.siteName||e.aioseo.urls.domain}},url:{type:String,default(){return d().aioseo.urls.home}},title:String,description:String,richResults:Object},data(){return{strings:{free:v("Free",c),rating:v("Rating",c),prosCons:v("Pros and cons include",c),viewFullList:v("View full list",c)}}},computed:{faq(){var t;const e=((t=this.richResults)==null?void 0:t.faq)||[];return Array.isArray(e)&&e.length?e:[]},reviewSnippet(){var r;const t={...{bestRating:null,ratingValue:null,reviewCount:null,ratingCount:null,priceCurrency:null,price:null,priceFrom:null,priceTo:null,prosConsNotes:[]},...((r=this.richResults)==null?void 0:r.reviewSnippet)||{}};if(Object.values(t).every(l=>l===null)||!t.reviewCount&&!t.ratingCount)return{};for(const[l,p]of Object.entries(t))if(["bestRating","ratingValue"].includes(l)&&(5<p||p===null))return{};return t.price=isNaN(parseFloat(t.price))?null:parseFloat(t.price).toFixed(2),t.priceFrom=isNaN(parseFloat(t.priceFrom))?null:parseFloat(t.priceFrom).toFixed(2),t.priceTo=isNaN(parseFloat(t.priceTo))?null:parseFloat(t.priceTo).toFixed(2),t},yellowStarsWidth(){return`${this.reviewSnippet.ratingValue*100/5}%`},urlBreadcrumbs(){try{const e=new URL(this.url),t=this.decodeUrl(e.pathname);let r=e.hostname+t.replace(/\/$/,"");return r=r.substring(0,50).trim()+(50<r.length?"...":""),`${e.protocol}//`+r.replaceAll("/"," &rsaquo; ")}catch{return""}},parseFavicon(){var r;const e=d();let t=`https://www.google.com/s2/favicons?sz=64&domain=${e.aioseo.urls.domain}`;try{t=new URL(this.favicon||"").href}catch{(r=e.aioseo.data)!=null&&r.isDev&&(t=`${e.aioseo.urls.home}/favicon.ico`)}return t},parseDescription(){let e=V(this.description.substring(0,160).trim()+(160<this.description.length?" ...":""),!1);if(e=x(e),!this.focusKeyphrase)return e;const t=this.focusKeyphrase.split(" ").map(q),r=new RegExp("\\b"+t.join("\\b|\\b")+"\\b","gi");return e.replace(r,"<strong>$&</strong>")}},methods:{stripTags:N,getReviewSnippetPriceLabel(){if(parseFloat(this.reviewSnippet.price)===0&&!this.reviewSnippet.priceTo)return this.strings.free;if(this.reviewSnippet.priceCurrency){const e=M.find(t=>t.value===this.reviewSnippet.priceCurrency)||{};return this.reviewSnippet.priceFrom&&this.reviewSnippet.priceTo?`${e==null?void 0:e.symbol}${this.reviewSnippet.priceFrom} - ${e==null?void 0:e.symbol}${this.reviewSnippet.priceTo}`:`${e==null?void 0:e.symbol}${this.reviewSnippet.price}`}return`$${this.reviewSnippet.price}`},getReviewSnippetCountLabel(){if(this.device==="desktop"){const e=this.reviewSnippet.ratingCount||this.reviewSnippet.reviewCount,t=this.reviewSnippet.ratingCount?L("vote","votes",e,c):L("review","reviews",e,c);return K(v("%1$s %2$s",c),e,t)}return`(${this.reviewSnippet.ratingCount||this.reviewSnippet.reviewCount})`},truncate:H}},R=()=>{A(e=>({"625d5c09":e.yellowStarsWidth}))},T=m.setup;m.setup=T?(e,t)=>(R(),T(e,t)):R;const f=e=>(I("data-v-4e7993c0"),e=e(),O(),e),E={class:"aioseo-google-search-preview__main"},G={class:"aioseo-google-search-preview__favicon"},W={class:"favicon-wrapper"},J=["src"],Y={class:"aioseo-google-search-preview__location"},Q={class:"hostname text-truncate"},X=["innerHTML"],Z={class:"aioseo-google-search-preview__title"},$=["innerHTML"],ee={key:0,class:"aioseo-google-search-preview__pros-cons"},te={class:"aioseo-google-search-preview__pros-cons__description"},se=f(()=>s("span",null," ",-1)),re=f(()=>s("span",{class:"bullet"},null,-1)),ie={class:"aioseo-google-search-preview__pros-cons__view-full-list"},oe={key:1,class:"aioseo-google-search-preview__review-snippet"},ne=f(()=>s("div",{class:"aioseo-google-search-preview__review-snippet__stars"},[s("div")],-1)),ae={class:"aioseo-google-search-preview__review-snippet__rating"},ce={class:"aioseo-google-search-preview__review-snippet__count bullet"},le={key:0,class:"aioseo-google-search-preview__review-snippet__price bullet"},pe={key:2,class:"aioseo-google-search-preview__anchor"},ue={class:"aioseo-google-search-preview__anchor__link"},_e={key:0,class:"aioseo-google-search-preview__anchor__bullet"},he={key:3,class:"aioseo-google-search-preview__faq"},ge={class:"aioseo-google-search-preview__faq__question",role:"button"},ve=["innerHTML"],de=["innerHTML"];function we(e,t,r,l,p,i){var S,y,C,b;const k=P("svg-caret");return o(),n("div",{class:D(["aioseo-google-search-preview",`aioseo-google-search-preview--${r.device}`])},[s("div",E,[s("div",G,[s("div",W,[s("img",{src:i.parseFavicon,alt:"Favicon",loading:"lazy",decoding:"async",height:"18",width:"18"},null,8,J)])]),s("div",Y,[s("div",Q,a(r.hostname.replace(/^(m|www)\./,"")),1),s("div",{class:"url text-truncate",innerHTML:i.urlBreadcrumbs},null,8,X)]),s("div",Z,a(r.title.substring(0,70).trim()+(r.title.length>70?" ...":"")),1),s("div",{class:"aioseo-google-search-preview__description",innerHTML:i.parseDescription},null,8,$)]),(S=i.reviewSnippet.prosConsNotes||[])!=null&&S.length?(o(),n("div",ee,[F(a(p.strings.prosCons)+": ",1),(o(!0),n(g,null,w(i.reviewSnippet.prosConsNotes.slice(0,10),(u,_)=>(o(),n(g,{key:`pros-cons-${_}`},[s("span",te,a(u),1),se,re],64))),128)),s("span",ie,a(p.strings.viewFullList),1)])):h("",!0),Object.values(i.reviewSnippet).length?(o(),n("div",oe,[ne,s("div",ae,[s("span",null,a(p.strings.rating)+":",1),F(" "+a(parseFloat(i.reviewSnippet.ratingValue).toFixed(2)),1)]),s("div",ce,a(i.getReviewSnippetCountLabel()),1),((y=i.reviewSnippet)==null?void 0:y.price)!==null?(o(),n("div",le,a(i.getReviewSnippetPriceLabel()),1)):h("",!0)])):h("",!0),(b=(C=r.richResults)==null?void 0:C.anchorLinks)!=null&&b.length?(o(),n("div",pe,[(o(!0),n(g,null,w(r.richResults.anchorLinks,(u,_)=>(o(),n(g,{key:`anchor-${_}`},[s("span",ue,a(i.truncate(u,30)),1),_!==r.richResults.anchorLinks.length-1?(o(),n("span",_e," • ")):h("",!0)],64))),128))])):h("",!0),Object.values(i.faq).length?(o(),n("div",he,[(o(!0),n(g,null,w(i.faq.slice(0,3),(u,_)=>(o(),n("details",{key:`faq-${_}`,class:"aioseo-google-search-preview__faq__container"},[s("summary",ge,[s("span",{class:"text-truncate",innerHTML:i.truncate(i.stripTags(u.question),60)},null,8,ve),B(k,{width:"20"})]),s("span",{class:"aioseo-google-search-preview__faq__answer",innerHTML:i.stripTags(u.answer)},null,8,de)]))),128))])):h("",!0)],2)}const ke=z(m,[["render",we],["__scopeId","data-v-4e7993c0"]]);export{ke as C};
