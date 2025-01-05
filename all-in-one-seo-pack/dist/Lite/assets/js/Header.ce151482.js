import{_ as u}from"./_plugin-vue_export-helper.eefbdd86.js";import{o as t,c as o,a as p,m as i,b as m,F as g,J as h,G as v,v as l,C as d}from"./runtime-dom.esm-bundler.5c3c7d72.js";import"./index.62477ee8.js";import{S as $}from"./Logo.6c9d2b19.js";import{u as y}from"./SetupWizardStore.f7bc7af4.js";const z={},S={class:"aioseo-wizard-body"},C={class:"body-content"},W={key:0,class:"cta"},A={class:"body-footer"};function w(e,s){return t(),o("div",S,[p("div",C,[i(e.$slots,"default")]),e.$slots.cta?(t(),o("div",W,[i(e.$slots,"cta")])):m("",!0),p("div",A,[i(e.$slots,"footer")])])}const U=u(z,[["render",w]]),b={},k={class:"aioseo-wizard-container"};function B(e,s){return t(),o("div",k,[i(e.$slots,"default")])}const j=u(b,[["render",B]]),L={props:{steps:{type:Array,required:!0}},computed:{getSteps(){const e={spacer:!0};return[...this.steps].map((s,r)=>r<this.steps.length-1?[s,{...e}]:[s]).reduce((s,r)=>s.concat(r))}},methods:{getActiveClass(e,s){return e.spacer?!!this.getSteps[s+1].active:e.active}}},x={class:"aioseo-wizard-progress"};function N(e,s,r,_,f,a){return t(),o("div",x,[(t(!0),o(g,null,h(a.getSteps,(n,c)=>(t(),o("div",{key:c,class:v([{circle:!n.spacer},{spacer:n.spacer},{active:a.getActiveClass(n,c)}])},null,2))),128))])}const V=u(L,[["render",N]]),F={setup(){return{setupWizardStore:y()}},components:{SvgAioseoLogo:$,WizardProgress:V},computed:{steps(){const e=[];for(let s=0;s<this.setupWizardStore.getTotalStageCount;s++)s<this.setupWizardStore.getCurrentStageCount?e.push({active:!0}):e.push({active:!1});return e}}},P={class:"aioseo-wizard-header"},q={class:"logo"};function E(e,s,r,_,f,a){const n=l("svg-aioseo-logo"),c=l("wizard-progress");return t(),o("div",P,[p("div",q,[d(n)]),d(c,{steps:a.steps},null,8,["steps"])])}const D=u(F,[["render",E]]);export{U as W,j as a,D as b};
