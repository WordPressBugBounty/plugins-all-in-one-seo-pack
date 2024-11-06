import{G as j}from"./constants.2019bcb3.js";import{l as B,r as I,b as D,u as E,m as N,j as U}from"./index.20192476.js";import{C as P}from"./Card.46af096e.js";import{C as V}from"./Tabs.2fd33524.js";import{C as F}from"./SeoSiteAnalysisResults.1f8d18e5.js";import{g as G,v as n,o as i,c as S,C as a,b as f,a as s,t as _,F as W,J as q,k as T,l as d,x as R,w as Y,f as J,y as K,u as m,E as Q,G as X}from"./runtime-dom.esm-bundler.6789c400.js";import{u as Z,p as $}from"./popup.001b1125.js";import{u as w}from"./SeoSiteScore.cd765b43.js";import{C as ee}from"./Blur.31bfcf06.js";import{C as oe}from"./Index.8645c378.js";import{S as se}from"./Book.e7bb6a80.js";import{S as te}from"./Lab.9e460fac.js";import"./translations.12335a6a.js";import{_ as H}from"./_plugin-vue_export-helper.249dac1d.js";import{u as L}from"./AnalyzerStore.bc71b50e.js";import{_ as p,s as x}from"./default-i18n.54b5d8cd.js";import{C as re}from"./Tooltip.b6b45c85.js";import{S as ne}from"./Refresh.69fd46ba.js";import{a as ae}from"./index.ee8124c6.js";import"./helpers.f95d5840.js";import"./Caret.662da1f3.js";import"./Slide.d0517fb0.js";import"./vue-router.fc4966b9.js";import"./ProBadge.7733ac87.js";import"./Information.82968754.js";import"./Tags.45075d79.js";import"./postTitle.d67eb903.js";import"./metabox.dc73facf.js";import"./cleanForSlug.f9ffe7db.js";import"./toString.1401d490.js";import"./_baseTrim.940c51cf.js";import"./_stringToArray.08127ca9.js";import"./_baseSet.32e7a763.js";import"./regex.f8017116.js";import"./GoogleSearchPreview.2f81905c.js";import"./Gear.1433c8c3.js";import"./SetupWizardStore.f902c357.js";import"./params.764403f6.js";const O="all-in-one-seo-pack",ie={setup(l){const{errorObject:y,strings:g}=w({score:G(l.score)});return{analyzerStore:L(),composableStrings:g,errorObject:y,links:B}},components:{CoreSiteScore:oe,SvgBook:se,SvgDannieLab:te},props:{score:Number,loading:Boolean,description:String,summary:{type:Object,default(){return{}}}},data(){return{strings:I({yourOverallSiteScore:p("Your Overall Site Score",O),goodResult:x(p("A very good score is between %1$s%3$d and %4$d%2$s.",O),"<strong>","</strong>",50,75),forBestResults:x(p("For best results, you should strive for %1$s%3$d and above%2$s.",O),"<strong>","</strong>",70),readUltimateSeoGuide:p("Read the Ultimate WordPress SEO Guide",O)},this.composableStrings)}}},le={class:"aioseo-seo-analysis"},ce={key:0,class:"seo-analysis-score"},ue={key:1,class:"seo-analysis-description"},me=["innerHTML"],de=["innerHTML"],pe={class:"d-flex"},_e=["href"],ge={key:2,class:"seo-analysis-error"},ye={class:"error-title"},Se=["innerHTML"],he={class:"error-action-buttons"};function fe(l,y,g,e,c,t){const k=n("core-site-score"),r=n("svg-book"),z=n("svg-dannie-lab"),v=n("base-button");return i(),S("div",le,[e.analyzerStore.analyzeError?f("",!0):(i(),S("div",ce,[a(k,{loading:g.loading,score:g.score,description:g.description,strokeWidth:1.75},null,8,["loading","score","description"])])),e.analyzerStore.analyzeError?f("",!0):(i(),S("div",ue,[s("h2",null,_(c.strings.yourOverallSiteScore),1),s("div",{innerHTML:c.strings.goodResult},null,8,me),s("div",{innerHTML:c.strings.forBestResults},null,8,de),s("div",pe,[a(r),s("a",{href:e.links.getDocUrl("ultimateGuide"),target:"_blank"},_(c.strings.readUltimateSeoGuide),9,_e)])])),e.analyzerStore.analyzeError&&e.errorObject?(i(),S("div",ge,[a(z),s("p",ye,_(c.strings.anErrorOccurred),1),s("p",{class:"error-description",innerHTML:e.errorObject.description},null,8,Se),s("div",he,[(i(!0),S(W,null,q(e.errorObject.buttons,(o,b)=>(i(),T(v,{key:b,type:o.type,tag:o.tag?o.tag:"button",target:"_blank",href:o.url?o.url:"",size:"medium",loading:(o==null?void 0:o.runAgain)&&e.analyzerStore.analyzing,onClick:A=>o!=null&&o.runAgain?e.analyzerStore.runSiteAnalyzer():""},{default:d(()=>[R(_(o.text),1)]),_:2},1032,["type","tag","href","loading","onClick"]))),128))])])):f("",!0)])}const M=H(ie,[["render",fe]]),Ce={class:"aioseo-seo-site-score"},ke={key:1,class:"aioseo-seo-site-score-cta"},ze={__name:"Analyze",setup(l){const y=G(0),{connectWithAioseo:g,description:e,strings:c}=w({score:y}),t=L(),k=Z(),r=D(),z=E();Y(()=>r.internalOptions.internal.siteAnalysis.score,u=>{y.value=u});const v=J(()=>({recommended:t.recommendedCount(),critical:t.criticalCount(),good:t.goodCount()})),o=u=>{$(u,g,600,630,!0,["token"],b,A)},b=u=>k.saveConnectToken(u.token),A=u=>{u&&t.runSiteAnalyzer(),t.analyzing=!0};return K(()=>{!r.internalOptions.internal.siteAnalysis.score&&r.internalOptions.internal.siteAnalysis.connectToken&&(t.analyzing=!0,t.runSiteAnalyzer()),y.value=r.internalOptions.internal.siteAnalysis.score}),(u,C)=>(i(),S("div",Ce,[m(r).internalOptions.internal.siteAnalysis.connectToken?f("",!0):(i(),T(m(ee),{key:0},{default:d(()=>[a(m(M),{score:85,description:m(e)},null,8,["description"])]),_:1})),m(r).internalOptions.internal.siteAnalysis.connectToken?f("",!0):(i(),S("div",ke,[s("a",{href:"#",onClick:C[0]||(C[0]=Q(Re=>o(m(z).aioseo.urls.connect),["prevent"]))},_(m(g)),1),R(" "+_(m(c).toSeeYourSiteScore),1)])),m(r).internalOptions.internal.siteAnalysis.connectToken?(i(),T(m(M),{key:2,score:y.value,description:m(e),loading:u.analyzing,summary:v.value},null,8,["score","description","loading","summary"])):f("",!0)]))}},h="all-in-one-seo-pack",ve={setup(){return{analyzerStore:L(),licenseStore:N(),optionsStore:D(),rootStore:E(),settingsStore:U()}},components:{CoreCard:P,CoreMainTabs:V,CoreSeoSiteAnalysisResults:F,CoreSeoSiteScoreAnalyze:ze,CoreTooltip:re,SvgCircleQuestionMark:ae,SvgRefresh:ne},data(){return{internalDebounce:!1,strings:{completeSeoChecklist:p("Complete SEO Checklist",h),refreshResults:p("Refresh Results",h),cardDescription:p("These are the results our SEO Analzyer has generated after analyzing the homepage of your website.",h)+" "+B.getDocLink(j.learnMore,"seoAnalyzer",!0)}}},computed:{tabs(){const l=this.optionsStore.internalOptions.internal.siteAnalysis;return[{slug:"all-items",label:p("All Items",h),analyze:{classColor:"black",count:l.score?this.analyzerStore.allItemsCount():0}},{slug:"critical",label:p("Important Issues",h),analyze:{classColor:"red",count:l.score?this.analyzerStore.criticalCount():0}},{slug:"recommended-improvements",label:p("Recommended Improvements",h),analyze:{classColor:"blue",count:l.score?this.analyzerStore.recommendedCount():0}},{slug:"good-results",label:p("Good Results",h),analyze:{classColor:"green",count:l.score?this.analyzerStore.goodCount():0}}]}},methods:{processChangeTab(l){this.internalDebounce||(this.internalDebounce=!0,this.settingsStore.changeTab({slug:"seoAuditChecklist",value:l}),setTimeout(()=>{this.internalDebounce=!1},50))},refresh(){this.analyzerStore.analyzing=!0,this.analyzerStore.runSiteAnalyzer({refresh:!0})}}},be={class:"aioseo-seo-audit-checklist"},Ae=["innerHTML"],Oe={class:"label"};function Te(l,y,g,e,c,t){const k=n("core-seo-site-score-analyze"),r=n("core-card"),z=n("svg-circle-question-mark"),v=n("core-tooltip"),o=n("svg-refresh"),b=n("base-button"),A=n("core-main-tabs"),u=n("core-seo-site-analysis-results");return i(),S("div",be,[a(r,{slug:"connectOrScore","hide-header":"","no-slide":"",toggles:!1},{default:d(()=>[a(k)]),_:1}),(e.rootStore.isPro&&e.licenseStore.licenseKey||e.optionsStore.internalOptions.internal.siteAnalysis.connectToken)&&e.optionsStore.internalOptions.internal.siteAnalysis.score?(i(),T(r,{key:0,slug:"completeSeoChecklist","no-slide":"",toggles:!1},{header:d(()=>[s("span",null,_(c.strings.completeSeoChecklist),1),a(v,null,{tooltip:d(()=>[s("span",{innerHTML:c.strings.cardDescription},null,8,Ae)]),default:d(()=>[a(z)]),_:1})]),"header-extra":d(()=>[a(b,{class:"refresh-results",type:"gray",size:"small",onClick:t.refresh,loading:e.analyzerStore.analyzing},{default:d(()=>[a(o),R(" "+_(c.strings.refreshResults),1)]),_:1},8,["onClick","loading"])]),tabs:d(()=>[a(A,{tabs:t.tabs,showSaveButton:!1,active:e.settingsStore.settings.internalTabs.seoAuditChecklist,internal:"",onChanged:t.processChangeTab,"skinny-tabs":""},{"var-tab":d(({tab:C})=>[s("span",{class:X(["round",C.analyze.classColor])},_(C.analyze.count||0),3),s("span",Oe,_(C.label),1)]),_:1},8,["tabs","active","onChanged"])]),default:d(()=>[a(u,{section:e.settingsStore.settings.internalTabs.seoAuditChecklist,"all-results":e.analyzerStore.getSiteAnalysisResults,"show-instructions":""},null,8,["section","all-results"])]),_:1})):f("",!0)])}const _o=H(ve,[["render",Te]]);export{_o as default};
