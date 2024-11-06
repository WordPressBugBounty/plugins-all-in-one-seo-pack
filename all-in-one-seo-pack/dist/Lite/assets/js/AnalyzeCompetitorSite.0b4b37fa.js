import{G as B}from"./constants.2019bcb3.js";import{b as D,u as M,r as O,j as V,l as j}from"./index.20192476.js";import{u as P}from"./ScrollTo.97c9805f.js";import{u as b}from"./SeoSiteScore.cd765b43.js";import{n as W}from"./helpers.f95d5840.js";import{C as G,a as H}from"./Score.987e7485.js";import{o as c,c as y,C as p,l as d,k as R,m as E,q,u as h,a as r,t as l,E as F,x as k,b as z,g as J,v as u,F as Y,J as K}from"./runtime-dom.esm-bundler.6789c400.js";import{u as Q,p as X}from"./popup.001b1125.js";import{C as Z}from"./Blur.31bfcf06.js";import{C as x}from"./Card.46af096e.js";import{C as $}from"./SeoSiteAnalysisResults.1f8d18e5.js";import{C as ee}from"./Index.8645c378.js";import{S as te}from"./Refresh.69fd46ba.js";import"./translations.12335a6a.js";import{_ as I}from"./_plugin-vue_export-helper.249dac1d.js";import{u as w}from"./AnalyzerStore.bc71b50e.js";import{_ as n,s as U}from"./default-i18n.54b5d8cd.js";import{S as se}from"./index.ee8124c6.js";import"./SetupWizardStore.f902c357.js";import"./params.764403f6.js";import"./Tooltip.b6b45c85.js";import"./Caret.662da1f3.js";import"./Slide.d0517fb0.js";import"./Tags.45075d79.js";import"./postTitle.d67eb903.js";import"./metabox.dc73facf.js";import"./cleanForSlug.f9ffe7db.js";import"./toString.1401d490.js";import"./_baseTrim.940c51cf.js";import"./_stringToArray.08127ca9.js";import"./_baseSet.32e7a763.js";import"./regex.f8017116.js";import"./GoogleSearchPreview.2f81905c.js";import"./Information.82968754.js";import"./Gear.1433c8c3.js";const oe={key:0,class:"aioseo-seo-site-score-cta"},re={__name:"CompetitorSiteHeader",setup(e){const{connectWithAioseo:t,strings:o}=b(),i=D(),s=M(),a=m=>{X(m,t,600,630,!0,["token"],C,()=>{})},f=Q(),C=m=>f.saveConnectToken(m.token);return(m,v)=>(c(),y("div",null,[p(h(x),{slug:"analyzeNewCompetitor","hide-header":"","no-slide":"",toggles:!1},{default:d(()=>[(c(),R(q(h(i).internalOptions.internal.siteAnalysis.connectToken?"div":h(Z)),null,{default:d(()=>[E(m.$slots,"default")]),_:3})),h(i).internalOptions.internal.siteAnalysis.connectToken?z("",!0):(c(),y("div",oe,[r("a",{href:"#",onClick:v[0]||(v[0]=F(T=>a(h(s).aioseo.urls.connect),["prevent"]))},l(h(t)),1),k(" "+l(h(o).toAnalyzeCompetitorSite),1)]))]),_:3}),h(i).internalOptions.internal.siteAnalysis.connectToken?E(m.$slots,"competitor-results",{key:0}):z("",!0)]))}},_="all-in-one-seo-pack",ne={setup(e){const{description:t,strings:o}=b({score:J(e.score)});return{analyzerStore:w(),composableStrings:o,description:t}},components:{CoreSiteScore:ee,SvgRefresh:te},props:{score:Number,loading:Boolean,site:{type:String,required:!0},summary:{type:Object,default(){return{}}},mobileSnapshot:String},data(){return{isAnalyzing:!1,strings:O(this.composableStrings,{criticalIssues:n("Important Issues",_),warnings:n("Warnings",_),recommendedImprovements:n("Recommended Improvements",_),goodResults:n("Good Results",_),completeSiteAuditChecklist:n("Complete Site Audit Checklist",_),refreshResults:n("Refresh Results",_),mobileSnapshot:n("Mobile Snapshot",_)})}},methods:{refresh(){this.isAnalyzing=!0,this.analyzerStore.runSiteAnalyzer({url:this.site,refresh:!0}).then(()=>this.isAnalyzing=!1)}}},ie={class:"aioseo-site-score-competitor"},ae={class:"aioseo-seo-site-score-score"},le={class:"aioseo-seo-site-score-recommendations"},ce={class:"critical"},me={class:"round red"},ue={class:"recommended"},pe={class:"round blue"},he={class:"good"},de={class:"round green"},ye={key:0,class:"mobile-snapshot"},_e=["src"];function ge(e,t,o,i,s,a){const f=u("core-site-score"),C=u("svg-refresh"),m=u("base-button");return c(),y("div",ie,[r("div",ae,[p(f,{loading:s.isAnalyzing||o.loading,score:o.score,description:i.description},null,8,["loading","score","description"])]),r("div",le,[r("div",ce,[r("span",me,l(o.summary.critical||0),1),k(" "+l(s.strings.criticalIssues),1)]),r("div",ue,[r("span",pe,l(o.summary.recommended||0),1),k(" "+l(s.strings.recommendedImprovements),1)]),r("div",he,[r("span",de,l(o.summary.good||0),1),k(" "+l(s.strings.goodResults),1)])]),p(m,{class:"refresh-results",type:"gray",size:"small",onClick:a.refresh,loading:s.isAnalyzing},{default:d(()=>[p(C),k(" "+l(s.strings.refreshResults),1)]),_:1},8,["onClick","loading"]),o.mobileSnapshot?(c(),y("div",ye,[r("div",null,l(s.strings.mobileSnapshot),1),r("img",{alt:"Mobile Snapshot",src:o.mobileSnapshot},null,8,_e)])):z("",!0)])}const Se=I(ne,[["render",ge]]),g="all-in-one-seo-pack",ze={setup(){const{strings:e}=b(),{scrollTo:t}=P();return{analyzerStore:w(),settingsStore:V(),composableStrings:e,scrollTo:t}},components:{CoreAnalyze:G,CoreAnalyzeScore:H,CoreAnalyzeCompetitorSiteHeader:re,CoreCard:x,CoreSeoSiteAnalysisResults:$,CoreSiteScoreCompetitor:Se,SvgTrash:se},data(){return{competitorUrl:null,isAnalyzing:!1,inputError:!1,competitorResults:{},analyzeTime:8,strings:O(this.composableStrings,{enterCompetitorUrl:n("Enter Competitor URL",g),performInDepthAnalysis:n("Perform in-depth SEO Analysis of your competitor's website.",g),analyze:n("Analyze",g),pleaseEnterValidUrl:n("Please enter a valid URL.",g)})}},watch:{"analyzerStore.analyzeError"(e){e&&(this.isAnalyzing=!1)}},computed:{getError(){switch(this.analyzerStore.analyzeError){case"invalid-url":return n("The URL provided is invalid.",g);case"missing-content":return U("%1$s %2$s",n("We were unable to parse the content for this site.",g),j.getDocLink(B.learnMore,"seoAnalyzerIssues",!0));case"invalid-token":return U(n("Your site is not connected. Please connect to %1$s, then try again.",g),"AIOSEO")}return this.analyzerStore.analyzeError}},methods:{parseResults(e){return JSON.parse(e)},getSummary(e){return{recommended:this.analyzerStore.recommendedCount(e),critical:this.analyzerStore.criticalCount(e),good:this.analyzerStore.goodCount(e)}},startAnalyzing(e){if(this.inputError=!1,this.competitorUrl=e,!this.competitorUrl.startsWith("http://")&&!this.competitorUrl.startsWith("https")&&(this.competitorUrl="https://"+this.competitorUrl),!W(this.competitorUrl)){this.inputError=!0;return}this.analyzerStore.analyzing=!0,this.analyzerStore.analyzeError=!1,this.analyzerStore.runSiteAnalyzer({url:this.competitorUrl}),this.isAnalyzing=!0,setTimeout(this.checkStatus,this.analyzeTime*1e3),this.closeAllCards()},checkStatus(){if(this.isAnalyzing=!1,this.analyzerStore.analyzing){this.$nextTick(()=>{this.isAnalyzing=!0,2>this.analyzeTime&&(this.analyzeTime=8),this.analyzeTime=this.analyzeTime/2,setTimeout(this.checkStatus,this.analyzeTime*1e3)});return}this.$nextTick(()=>{this.competitorResults=this.analyzerStore.getCompetitorSiteAnalysisResults;const e=Object.keys(this.competitorResults),t=e.indexOf(this.competitorUrl)===-1?0:e.indexOf(this.competitorUrl);this.toggleCard(t),this.scrollTo("aioseo-competitor-results"+this.hashCode(e[t])),this.competitorUrl=null})},startDeleteSite(e){this.closeAllCards(),delete this.competitorResults[e],this.analyzerStore.deleteCompetitorSite(e).then(()=>{this.competitorResults=this.analyzerStore.getCompetitorSiteAnalysisResults})},closeAllCards(){Object.keys(this.competitorResults).forEach(t=>{this.settingsStore.closeCard("analyzeCompetitorSite"+t)})},toggleCard(e){const t=Object.keys(this.competitorResults);this.settingsStore.toggleCard({slug:"analyzeCompetitorSite"+t[e]})},hashCode(e){if(!e)return;let t=0,o,i;for(o=0;o<e.length;o++)i=e.charCodeAt(o),t=(t<<5)-t+i,t|=0;return t}},mounted(){this.analyzerStore.analyzeError=!1,this.competitorResults=this.analyzerStore.getCompetitorSiteAnalysisResults,this.toggleCard(0)}},fe={class:"aioseo-analyze-competitor-site"},Ce={key:0,class:"aioseo-description aioseo-error"},Ae=["innerHTML"],ke={class:"competitor-results-main"},ve={class:"competitor-results-body"};function Re(e,t,o,i,s,a){const f=u("core-analyze"),C=u("core-analyze-score"),m=u("svg-trash"),v=u("core-site-score-competitor"),T=u("core-seo-site-analysis-results"),L=u("core-card"),N=u("core-analyze-competitor-site-header");return c(),y("div",fe,[p(N,null,{"competitor-results":d(()=>[(c(!0),y(Y,null,K(s.competitorResults,(A,S)=>(c(),R(L,{key:S,id:"aioseo-competitor-results"+a.hashCode(S),slug:"analyzeCompetitorSite"+S,"save-toggle-status":!1,class:"aioseo-competitor-results-wrapper"},{header:d(()=>[p(C,{score:a.parseResults(A).score},null,8,["score"]),r("span",null,l(S),1),s.isAnalyzing?z("",!0):(c(),R(m,{key:0,onClick:be=>a.startDeleteSite(S)},null,8,["onClick"]))]),default:d(()=>[r("div",ke,[p(v,{site:S,score:a.parseResults(A).score,loading:i.analyzerStore.analyzing,summary:a.getSummary(a.parseResults(A).results),"mobile-snapshot":a.parseResults(A).results.advanced.mobileSnapshot},null,8,["site","score","loading","summary","mobile-snapshot"]),r("div",ve,[p(T,{section:"all-items","all-results":a.parseResults(A).results,"show-google-preview":""},null,8,["all-results"])])])]),_:2},1032,["id","slug"]))),128))]),default:d(()=>[p(f,{header:s.strings.enterCompetitorUrl,description:s.strings.performInDepthAnalysis,inputError:s.inputError,isAnalyzing:s.isAnalyzing,analyzeTime:s.analyzeTime,placeholder:"https://competitorwebsite.com",onStartAnalyzing:a.startAnalyzing},{errors:d(()=>[s.inputError?(c(),y("div",Ce,l(s.strings.pleaseEnterValidUrl),1)):z("",!0),i.analyzerStore.analyzer==="competitor-site"&&i.analyzerStore.analyzeError?(c(),y("div",{key:1,class:"analyze-errors aioseo-description aioseo-error",innerHTML:i.analyzerStore.analyzeError},null,8,Ae)):z("",!0)]),_:1},8,["header","description","inputError","isAnalyzing","analyzeTime","onStartAnalyzing"])]),_:1})])}const lt=I(ze,[["render",Re]]);export{lt as default};
