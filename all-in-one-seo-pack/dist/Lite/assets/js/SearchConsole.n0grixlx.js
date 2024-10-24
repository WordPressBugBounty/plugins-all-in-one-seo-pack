import{r as g,b as k}from"./index.ba51ghj9.js";import{u as w}from"./GoogleSearchConsole.gq5vl5zt.js";import{u as W}from"./Wizard.cxcv0fmy.js";import{c as y}from"./Caret.dwp6xpza.js";import{S as x}from"./ConnectGoogleSearchConsole.j7prs7ik.js";import{W as b,a as A,b as B}from"./Header.kwzisspm.js";import{W as G}from"./CloseAndExit.n8h0y4z4.js";import{_ as L}from"./Steps.f1p0nwbe.js";import{_ as T}from"./_plugin-vue_export-helper.oebm7xum.js";import{u as F}from"./SetupWizardStore.hjajzbq0.js";import{c as N,C as o,l as i,v as t,o as P,a as e,x as n,t as r}from"./runtime-dom.esm-bundler.h3clfjuw.js";import"./default-i18n.hohxoesu.js";import"./helpers.lwqbledo.js";import"./translations.b896ab1m.js";import"./addons.eq04tz3m.js";import"./upperFirst.bgyeasim.js";import"./_stringToArray.mpukyt2g.js";import"./toString.oppn28a8.js";import"./Logo.nueehhao.js";import"./Index.kqt70nj0.js";const V={setup(){const{strings:l}=W({stage:"search-console"}),{connect:_,loading:d,strings:c}=w({returnTo:"setup-wizard"});return{composableStrings:g(l,c),connect:_,loading:d,optionsStore:k(),setupWizardStore:F()}},components:{SvgCircleCheck:y,SvgConnectGoogleSearchConsole:x,WizardBody:b,WizardCloseAndExit:G,WizardContainer:A,WizardHeader:B,WizardSteps:L},data(){return{strings:g(this.composableStrings,{})}},methods:{saveAndConnect(){this.loading=!0,this.setupWizardStore.saveWizard("searchConsole").then(()=>{this.connect()})},skipStep(){this.setupWizardStore.saveWizard(),this.$router.push(this.setupWizardStore.getNextLink)}}},E={class:"aioseo-wizard-search-console"},D={class:"header"},H={class:"aioseo-wizard-search-console__panel"},O={class:"aioseo-wizard-search-console__image"},R={class:"aioseo-wizard-search-console__content"},U={class:"aioseo-wizard-search-console__content-text"},Y={class:"aioseo-wizard-search-console__content-list"},j={class:"go-back"},q=e("div",{class:"spacer"},null,-1);function I(l,_,d,c,s,p){const h=t("wizard-header"),z=t("wizard-steps"),f=t("svg-connect-google-search-console"),a=t("svg-circle-check"),u=t("router-link"),m=t("base-button"),S=t("wizard-body"),v=t("wizard-close-and-exit"),C=t("wizard-container");return P(),N("div",E,[o(h),o(C,null,{default:i(()=>[o(S,null,{footer:i(()=>[e("div",j,[o(u,{to:c.setupWizardStore.getPrevLink,class:"no-underline"},{default:i(()=>[n("←")]),_:1},8,["to"]),n("   "),o(u,{to:c.setupWizardStore.getPrevLink},{default:i(()=>[n(r(s.strings.goBack),1)]),_:1},8,["to"])]),q,o(m,{type:"gray",onClick:p.skipStep},{default:i(()=>[n(r(s.strings.skipThisStep),1)]),_:1},8,["onClick"]),o(m,{type:"blue",loading:c.loading,onClick:p.saveAndConnect},{default:i(()=>[n(r(s.strings.connectToGoogleSearchConsole)+" →",1)]),_:1},8,["loading","onClick"])]),default:i(()=>[o(z),e("div",D,r(s.strings.connectToGoogleSearchConsole),1),e("div",H,[e("div",O,[o(f)]),e("div",R,[e("div",U,r(s.strings.syncYourSiteWithGsc),1),e("ul",Y,[e("li",null,[o(a),n(" "+r(s.strings.gscFeature1),1)]),e("li",null,[o(a),n(" "+r(s.strings.gscFeature2),1)]),e("li",null,[o(a),n(" "+r(s.strings.gscFeature3),1)]),e("li",null,[o(a),n(" "+r(s.strings.gscFeature4),1)])])])])]),_:1}),o(v)]),_:1})])}const mo=T(V,[["render",I]]);export{mo as default};
