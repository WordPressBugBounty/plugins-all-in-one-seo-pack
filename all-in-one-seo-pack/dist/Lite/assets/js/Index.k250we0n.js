import{_ as i}from"./_plugin-vue_export-helper.oebm7xum.js";import{o,c as r,a as n,G as m,v as _,k as d,b as c,t as u}from"./runtime-dom.esm-bundler.h3clfjuw.js";import"./translations.b896ab1m.js";import{_ as f}from"./default-i18n.hohxoesu.js";const y={props:{scoreColor:String,score:{type:Number,required:!0},strokeWidth:{type:Number,default(){return 2}}},computed:{getClass(){let t="",s="";switch(!0){case 33>=this.score:t="fast",s="stroke-red";break;case 66>=this.score:t="medium",s="stroke-orange";break;default:t="slow",s="stroke-green"}return this.scoreColor!==void 0&&(s=`stroke-${this.scoreColor}`),`${t} ${s}`}}},p={class:"aioseo-seo-site-score-svg",viewBox:"0 0 34 34",xmlns:"http://www.w3.org/2000/svg"},v=["stroke-width","r"],w=["stroke-width","stroke-dasharray","r"];function x(t,s,e,g,a,l){return o(),r("svg",p,[n("circle",{class:"aioseo-seo-site-score__background","stroke-width":e.strokeWidth,fill:"none",cx:"17",cy:"17",r:17-e.strokeWidth/2},null,8,v),n("circle",{class:m(["aioseo-seo-site-score__circle",l.getClass]),"stroke-width":e.strokeWidth,"stroke-dasharray":`${e.score},100`,"stroke-linecap":"round",fill:"none",cx:"17",cy:"17",r:17-e.strokeWidth/2},null,10,w)])}const S=i(y,[["render",x]]),C={},W={class:"aioseo-seo-site-score-svg-loading",viewBox:"0 0 33.83098862 33.83098862",xmlns:"http://www.w3.org/2000/svg"},b=n("circle",{fill:"none",class:"aioseo-seo-site-score-loading__circle",cx:"16.91549431",cy:"16.91549431",r:"15.91549431","stroke-linecap":"round","stroke-width":"2","stroke-dasharray":"93","stroke-dashoffset":"90"},null,-1),B=[b];function N(t,s){return o(),r("svg",W,B)}const $=i(C,[["render",N]]),z="all-in-one-seo-pack",L={components:{SvgSeoSiteScore:S,SvgSeoSiteScoreLoading:$},props:{score:Number,loading:Boolean,description:String,strokeWidth:{type:Number,default(){return 1.75}}},data(){return{strings:{analyzing:f("Analyzing...",z)}}}},A={class:"aioseo-site-score"},H={class:"aioseo-score-amount-wrapper"},M={key:0,class:"aioseo-score-amount"},T={class:"score"},V=n("span",{class:"total"},"/ 100",-1),q=["innerHTML"],D={key:2,class:"score-analyzing"};function E(t,s,e,g,a,l){const h=_("svg-seo-site-score-loading"),k=_("svg-seo-site-score");return o(),r("div",A,[e.loading?(o(),d(h,{key:0})):c("",!0),e.loading?c("",!0):(o(),d(k,{key:1,score:e.score,strokeWidth:e.strokeWidth},null,8,["score","strokeWidth"])),n("div",H,[e.loading?c("",!0):(o(),r("div",M,[n("span",T,u(e.score),1),V])),e.loading?c("",!0):(o(),r("div",{key:1,class:"score-description",innerHTML:e.description},null,8,q)),e.loading?(o(),r("div",D,u(a.strings.analyzing),1)):c("",!0)])])}const j=i(L,[["render",E]]);export{j as C,S};