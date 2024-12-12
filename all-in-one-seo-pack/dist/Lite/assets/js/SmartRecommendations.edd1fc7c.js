import{D as H}from"./constants.24c44c43.js";import{u as P,r as R,l as V}from"./index.ae2b6956.js";import{u as F}from"./Wizard.ae47db5f.js";import{B as D}from"./Checkbox.6db0b9ed.js";import{C as O}from"./Caret.d9cc70ba.js";import{C as Y}from"./Index.4b4d1967.js";import{C as G}from"./ProBadge.751e0b85.js";import{C as q}from"./Tooltip.73441134.js";import{G as j,a as J}from"./Row.df38a5f6.js";import{a as Q}from"./index.8c70464a.js";import{W as K,a as X,b as Z}from"./Header.ac4dbaae.js";import{W as $}from"./CloseAndExit.3af45d2f.js";import{_ as ee}from"./Steps.6848faa3.js";import"./translations.d159963e.js";import{_ as oe}from"./_plugin-vue_export-helper.eefbdd86.js";import{u as se}from"./SetupWizardStore.5cece966.js";import{_ as i,s as p}from"./default-i18n.20001971.js";import{c as f,C as e,l as t,v as n,o as _,a as o,x as d,t as r,b as y,F as te,J as ne,k as re}from"./runtime-dom.esm-bundler.5c3c7d72.js";import"./helpers.c7282833.js";import"./addons.2e54f461.js";import"./upperFirst.eac3a366.js";import"./_stringToArray.f9ddb970.js";import"./toString.a2dfb892.js";import"./Checkmark.e40641dd.js";import"./Logo.6c9d2b19.js";const a="all-in-one-seo-pack",ie={setup(){const{getSelectedUpsellFeatures:u,needsUpsell:l,features:g,strings:c}=F({stage:"smart-recommendations"});return{composableStrings:c,features:g,getSelectedUpsellFeatures:u,needsUpsell:l,rootStore:P(),setupWizardStore:se()}},components:{BaseCheckbox:D,CoreAlert:O,CoreModal:Y,CoreProBadge:G,CoreTooltip:q,GridColumn:j,GridRow:J,SvgCircleQuestionMark:Q,WizardBody:K,WizardCloseAndExit:$,WizardContainer:X,WizardHeader:Z,WizardSteps:ee},data(){return{loading:!1,showModal:!1,loadingModal:!1,strings:R(this.composableStrings,{setupSiteAnalyzer:i("Setup Site Analyzer + Smart Recommendations",a),description:p(i("Get helpful suggestions from %1$s on how to optimize your website content, so you can rank higher in search results.",a),"AIOSEO"),yourEmailAddress:i("Your Email Address",a),yourEmailIsNeeded:i("Your email is needed so you can receive SEO recommendations. This email will also be used to connect your site with our SEO API.",a),helpMakeAioseoBetter:p(i("Help make %1$s better for everyone",a),"AIOSEO"),yesCountMeIn:i("Yes, count me in",a),wouldYouLikeToPurchase:i("Would you like to purchase and install the following features now?",a),theseFeaturesAreAvailable:i("An upgrade is required to unlock the following features.",a),youWontHaveAccess:i("You won't have access to this functionality until the extensions have been purchased and installed.",a),illDoItLater:i("I'll do it later",a),purchaseAndInstallNow:i("Purchase and Install Now",a),bonusText:p(i("%1$sBonus:%2$s You can upgrade to the %3$s plan today and %4$ssave %5$s off%6$s (discount auto-applied).",a),"<strong>","</strong>","Pro","<strong>",H,"</strong>"),usageTrackingTooltip:p(i("Complete documentation on usage tracking is available %1$shere%2$s.",a),p('<strong><a href="%1$s" target="_blank">',V.getDocUrl("usageTracking")),"</a></strong>")})}},computed:{selectedFeaturesNeedsUpsell(){let u=!1;return this.setupWizardStore.features.forEach(l=>{this.needsUpsell(this.features.find(g=>g.value===l))&&(u=!0)}),u}},methods:{purchase(){const u=`&license-redirect=${btoa(this.rootStore.aioseo.urls.aio.wizard)}#/license-key`;window.open("https://aioseo.com/pricing/?features[]="+this.getSelectedUpsellFeatures.map(l=>l.value).join("&features[]=")+u),this.$router.push(this.setupWizardStore.getNextLink)},saveAndContinue(){this.loading=!0,this.setupWizardStore.saveWizard("smartRecommendations").then(()=>{if(!this.selectedFeaturesNeedsUpsell)return this.$router.push(this.setupWizardStore.getNextLink);this.showModal=!0,this.loading=!1})},skipStep(){this.setupWizardStore.saveWizard(),this.$router.push(this.setupWizardStore.getNextLink)},preventUncheck(u){u.preventDefault(),u.stopPropagation()}},mounted(){this.setupWizardStore.smartRecommendations.accountInfo=this.rootStore.aioseo.user.data.data.user_email}},ae={class:"aioseo-wizard-smart-recommendations"},le={class:"header"},ce={class:"description"},de={class:"aioseo-settings-row no-border small-padding"},ue={class:"settings-name"},me={class:"name small-margin"},pe={class:"aioseo-description"},_e={key:0,class:"aioseo-settings-row no-border no-margin small-padding"},ge={class:"settings-name"},he={class:"name small-margin"},fe=["innerHTML"],ke={class:"go-back"},ve=o("div",{class:"spacer"},null,-1),Se={class:"aioseo-modal-body"},ye=["innerHTML"],be={class:"settings-name"},we={class:"name small-margin"},ze={class:"aioseo-description-text"},Ce=["innerHTML"],Ae={class:"actions"},We=o("div",{class:"spacer"},null,-1),Te={class:"go-back"},xe=["innerHTML"];function Le(u,l,g,c,s,h){const b=n("wizard-header"),w=n("wizard-steps"),z=n("base-input"),C=n("svg-circle-question-mark"),A=n("core-tooltip"),W=n("base-toggle"),k=n("router-link"),v=n("base-button"),T=n("wizard-body"),x=n("wizard-close-and-exit"),L=n("wizard-container"),M=n("core-pro-badge"),S=n("grid-column"),I=n("base-checkbox"),N=n("grid-row"),E=n("core-alert"),U=n("core-modal");return _(),f("div",ae,[e(b),e(L,null,{default:t(()=>[e(T,null,{footer:t(()=>[o("div",ke,[e(k,{to:c.setupWizardStore.getPrevLink,class:"no-underline"},{default:t(()=>[d("←")]),_:1},8,["to"]),d("   "),e(k,{to:c.setupWizardStore.getPrevLink},{default:t(()=>[d(r(s.strings.goBack),1)]),_:1},8,["to"])]),ve,e(v,{type:"gray",onClick:h.skipStep},{default:t(()=>[d(r(s.strings.skipThisStep),1)]),_:1},8,["onClick"]),e(v,{type:"blue",loading:s.loading,onClick:h.saveAndContinue},{default:t(()=>[d(r(s.strings.saveAndContinue)+" →",1)]),_:1},8,["loading","onClick"])]),default:t(()=>[e(w),o("div",le,r(s.strings.setupSiteAnalyzer),1),o("div",ce,r(s.strings.description),1),o("div",de,[o("div",ue,[o("div",me,r(s.strings.yourEmailAddress),1)]),e(z,{size:"medium",modelValue:c.setupWizardStore.smartRecommendations.accountInfo,"onUpdate:modelValue":l[0]||(l[0]=m=>c.setupWizardStore.smartRecommendations.accountInfo=m)},null,8,["modelValue"]),o("div",pe,r(s.strings.yourEmailIsNeeded),1)]),c.rootStore.isPro?y("",!0):(_(),f("div",_e,[o("div",ge,[o("div",he,[d(r(s.strings.helpMakeAioseoBetter)+" ",1),e(A,null,{tooltip:t(()=>[o("div",{innerHTML:s.strings.usageTrackingTooltip},null,8,fe)]),default:t(()=>[e(C)]),_:1})])]),e(W,{modelValue:c.setupWizardStore.smartRecommendations.usageTracking,"onUpdate:modelValue":l[1]||(l[1]=m=>c.setupWizardStore.smartRecommendations.usageTracking=m)},{default:t(()=>[d(r(s.strings.yesCountMeIn),1)]),_:1},8,["modelValue"])]))]),_:1}),e(x)]),_:1}),e(U,{show:s.showModal,onClose:l[2]||(l[2]=m=>s.showModal=!1),classes:["aioseo-smart-recommendations-modal"]},{headerTitle:t(()=>[d(r(s.strings.wouldYouLikeToPurchase),1)]),body:t(()=>[o("div",Se,[o("div",{class:"available-features",innerHTML:s.strings.theseFeaturesAreAvailable},null,8,ye),(_(!0),f(te,null,ne(c.getSelectedUpsellFeatures,(m,B)=>(_(),f("div",{key:B,class:"aioseo-settings-row feature-grid small-padding medium-margin"},[e(N,null,{default:t(()=>[e(S,{xs:"11"},{default:t(()=>[o("div",be,[o("div",we,[d(r(m.name)+" ",1),c.needsUpsell(m)?(_(),re(M,{key:0})):y("",!0)]),o("div",ze,r(m.description),1)])]),_:2},1024),e(S,{xs:"1"},{default:t(()=>[e(I,{round:"",class:"no-clicks",type:"green",modelValue:!0,onClick:h.preventUncheck},null,8,["onClick"])]),_:1})]),_:2},1024)]))),128)),o("div",{class:"available-features no-access",innerHTML:s.strings.youWontHaveAccess},null,8,Ce),o("div",Ae,[We,o("div",Te,[e(k,{to:c.setupWizardStore.getNextLink},{default:t(()=>[d(r(s.strings.illDoItLater),1)]),_:1},8,["to"])]),e(v,{type:"green",loading:s.loadingModal,onClick:h.purchase},{default:t(()=>[d(r(s.strings.purchaseAndInstallNow),1)]),_:1},8,["loading","onClick"])]),e(E,{class:"bonus-alert",type:"yellow"},{default:t(()=>[d(" 🎁 "),o("span",{innerHTML:s.strings.bonusText},null,8,xe)]),_:1})])]),_:1},8,["show"])])}const so=oe(ie,[["render",Le]]);export{so as default};
