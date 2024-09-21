import{G as L}from"./constants.DfsCWbZk.js";import{a as P,h as B,r as D}from"./index.ByF2aI-G.js";import{u as G}from"./MaxCounts.B8I2oSt9.js";import{u as R}from"./Tags.CWcNgqQw.js";import{u as M}from"./Wizard.BxAGpy3y.js";import{B as N}from"./Checkbox.BAIONgTE.js";import{B as U}from"./RadioToggle.Cv8la4G_.js";import{C as O}from"./GoogleSearchPreview.CgoMblv2.js";import{C as E}from"./HtmlTagsEditor.CJg9npyw.js";import{C as I}from"./PostTypeOptions.BPVpCQOZ.js";import{W as Y,a as j,b as q}from"./Header.CIUjiXYQ.js";import{W as F}from"./CloseAndExit.DHdNyssQ.js";import{_ as J}from"./Steps.DRDaoBrO.js";import"./translations.Ur07Kmot.js";import{v as c,c as u,C as i,l as d,o as m,a as o,x as p,t as n,G as A,b as _,k as K,E as Q}from"./runtime-dom.esm-bundler.DKw-RQqs.js";import{_ as X}from"./_plugin-vue_export-helper.BN1snXvA.js";import{_ as a}from"./default-i18n.DvLqo3S3.js";import"./helpers.yjC6K_2A.js";import"./postSlug.Bl0Z6T8y.js";import"./Caret.DMa7g0j7.js";import"./metabox.SRNlGbGk.js";import"./cleanForSlug.DaL6KzBn.js";import"./toString.Dc7QMRQR.js";import"./_baseTrim.BYZhh0MR.js";import"./_stringToArray.DnK4tKcY.js";import"./_baseSet.Bbqt6CgN.js";import"./addons.C_QAj7aO.js";import"./upperFirst.BjBqmCj-.js";import"./Checkmark.BedAg8BV.js";import"./Editor.Bq1LihFR.js";import"./isEqual.DPyFnjxk.js";import"./_baseIsEqual.BLPD4oRg.js";import"./_getTag.KnvRqur7.js";import"./_baseClone.B3PqkIxk.js";import"./_arrayEach.Fgt6pfHj.js";import"./index.Olu2afa7.js";import"./UnfilteredHtml.CeQlPW48.js";import"./PostTypes.DQr7JgPS.js";import"./HighlightToggle.LBOoFU7H.js";import"./Tooltip.B0brI66q.js";import"./Row.D0941SYu.js";import"./Logo.C2KPC9qS.js";import"./Index.CzfUkh0l.js";const l="all-in-one-seo-pack",Z={setup(){const{parseTags:S}=R({separator:void 0}),{maxRecommendedCount:s}=G(),{strings:C}=M({stage:"search-appearance"});return{GLOBAL_STRINGS:L,composableStrings:C,maxRecommendedCount:s,optionsStore:P(),parseTags:S,setupWizardStore:B()}},components:{BaseCheckbox:N,BaseRadioToggle:U,CoreGoogleSearchPreview:O,CoreHtmlTagsEditor:E,CorePostTypeOptions:I,WizardBody:Y,WizardCloseAndExit:F,WizardContainer:j,WizardHeader:q,WizardSteps:J},data(){return{loaded:!1,titleCount:0,descriptionCount:0,showHoverClass:!1,editing:!1,loading:!1,strings:D(this.composableStrings,{searchAppearance:a("Search Appearance",l),description:a("The way your site is displayed in search results is very important. Take some time to look over these settings and tweak as needed.",l),serpPreview:a("SERP Preview",l),editTitleAndDescription:a("Edit Title and Description",l),clickToAddSiteTitle:a("Click on the tags below to insert variables into your site title.",l),clickToAddSiteDescription:a("Click on the tags below to insert variables into your meta description.",l),siteTitle:a("Home Page Title",l),metaDescription:a("Meta Description",l),isSiteUnderConstruction:a("Is the site under construction or live (ready to be indexed)?",l),underConstruction:a("Under Construction",l),liveSite:a("Live Site",l),includeAllPostTypes:a("Include All Post Types",l),enableSitemap:a("Enable Sitemap",l),doYouHaveMultipleAuthors:a("Do you have multiple authors?",l),redirectAttachmentPages:a("Redirect attachment pages?",l)})}},methods:{addHoverClass(){this.showHoverClass=!0},removeHoverClass(){this.showHoverClass=!1},saveAndContinue(){this.loading=!0,this.setupWizardStore.saveWizard("searchAppearance").then(()=>{this.$router.push(this.setupWizardStore.getNextLink)})},skipStep(){this.setupWizardStore.saveWizard(),this.$router.push(this.setupWizardStore.getNextLink)}},mounted(){this.$nextTick(()=>{this.setupWizardStore.searchAppearance.redirectAttachmentPages=this.optionsStore.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="attachment",this.loaded=!0})}},$={class:"aioseo-wizard-search-appearance"},ee={class:"header"},te={class:"description"},se={class:"aioseo-settings-row no-border"},oe={class:"settings-name"},re={class:"name small-margin"},ie={key:1,class:"action"},ne={key:0,class:"site-info"},ae={class:"site-title aioseo-settings-row no-border"},le={class:"settings-name"},ce={class:"name small-margin"},de=["innerHTML"],pe={class:"site-description aioseo-settings-row no-border"},me={class:"settings-name"},ue={class:"name small-margin"},_e=["innerHTML"],ge={class:"settings-name"},he={class:"name small-margin"},ve={key:1,class:"aioseo-settings-row no-border post-types"},Se={key:2,class:"aioseo-settings-row no-border enable-sitemaps"},Ce={key:3,class:"aioseo-settings-row no-border"},ye={class:"settings-name"},fe={class:"name small-margin"},Ae={key:4,class:"aioseo-settings-row no-border no-margin small-padding"},ze={class:"settings-name"},ke={class:"name small-margin"},be={class:"go-back"},Te=o("div",{class:"spacer"},null,-1);function We(S,s,C,e,t,g){const z=c("wizard-header"),k=c("wizard-steps"),b=c("core-google-search-preview"),h=c("base-button"),y=c("core-html-tags-editor"),v=c("base-radio-toggle"),T=c("base-toggle"),W=c("core-post-type-options"),w=c("base-checkbox"),f=c("router-link"),x=c("wizard-body"),V=c("wizard-close-and-exit"),H=c("wizard-container");return m(),u("div",$,[i(z),i(H,null,{default:d(()=>[i(x,null,{footer:d(()=>[o("div",be,[i(f,{to:e.setupWizardStore.getPrevLink,class:"no-underline"},{default:d(()=>[p("←")]),_:1},8,["to"]),p("   "),i(f,{to:e.setupWizardStore.getPrevLink},{default:d(()=>[p(n(t.strings.goBack),1)]),_:1},8,["to"])]),Te,i(h,{type:"gray",onClick:g.skipStep},{default:d(()=>[p(n(t.strings.skipThisStep),1)]),_:1},8,["onClick"]),i(h,{type:"blue",loading:t.loading,onClick:g.saveAndContinue},{default:d(()=>[p(n(t.strings.saveAndContinue)+" →",1)]),_:1},8,["loading","onClick"])]),default:d(()=>[i(k),o("div",ee,n(t.strings.searchAppearance),1),o("div",te,n(t.strings.description),1),o("div",se,[o("div",oe,[o("div",re,n(t.strings.serpPreview),1)]),o("div",{class:A(["edit-site-info-activator",{hover:t.showHoverClass}]),onMouseenter:s[2]||(s[2]=(...r)=>g.addHoverClass&&g.addHoverClass(...r)),onMouseleave:s[3]||(s[3]=(...r)=>g.removeHoverClass&&g.removeHoverClass(...r))},[i(b,{title:e.parseTags(e.setupWizardStore.category.siteTitle),description:e.parseTags(e.setupWizardStore.category.metaDescription)},null,8,["title","description"]),t.showHoverClass&&!t.editing?(m(),u("div",{key:0,class:"background-fade",onClick:s[0]||(s[0]=r=>t.editing=!0)})):_("",!0),t.showHoverClass&&!t.editing?(m(),u("div",ie,[i(h,{size:"small",type:"black",onClick:s[1]||(s[1]=r=>t.editing=!0)},{default:d(()=>[p(n(t.strings.editTitleAndDescription),1)]),_:1})])):_("",!0)],34)]),t.editing?(m(),u("div",ne,[o("div",ae,[o("div",le,[o("div",ce,n(t.strings.siteTitle),1)]),i(y,{modelValue:e.setupWizardStore.category.siteTitle,"onUpdate:modelValue":s[4]||(s[4]=r=>e.setupWizardStore.category.siteTitle=r),"line-numbers":!1,single:"",onCounter:s[5]||(s[5]=r=>t.titleCount=r.length),"tags-context":"homePage","default-tags":["site_title","separator_sa","tagline"]},{"tags-description":d(()=>[p(n(t.strings.clickToAddSiteTitle),1)]),_:1},8,["modelValue"]),o("div",{class:"max-recommended-count",innerHTML:e.maxRecommendedCount(t.titleCount,60)},null,8,de)]),o("div",pe,[o("div",me,[o("div",ue,n(t.strings.metaDescription),1)]),i(y,{modelValue:e.setupWizardStore.category.metaDescription,"onUpdate:modelValue":s[6]||(s[6]=r=>e.setupWizardStore.category.metaDescription=r),"line-numbers":!1,onCounter:s[7]||(s[7]=r=>t.descriptionCount=r.length),"tags-context":"homePage","default-tags":["site_title","separator_sa","tagline"]},{"tags-description":d(()=>[p(n(t.strings.clickToAddSiteDescription),1)]),_:1},8,["modelValue"]),o("div",{class:"max-recommended-count",innerHTML:e.maxRecommendedCount(t.descriptionCount,160)},null,8,_e)])])):_("",!0),o("div",{class:A(["aioseo-settings-row no-border",[{"no-margin":e.setupWizardStore.searchAppearance.underConstruction},{"small-padding":e.setupWizardStore.searchAppearance.underConstruction}]])},[o("div",ge,[o("div",he,n(t.strings.isSiteUnderConstruction),1)]),i(v,{modelValue:e.setupWizardStore.searchAppearance.underConstruction,"onUpdate:modelValue":s[8]||(s[8]=r=>e.setupWizardStore.searchAppearance.underConstruction=r),name:"underConstruction",options:[{label:t.strings.underConstruction,value:!0,activeClass:"dark"},{label:t.strings.liveSite,value:!1}]},null,8,["modelValue","options"])],2),e.setupWizardStore.searchAppearance.underConstruction?_("",!0):(m(),u("div",ve,[i(T,{size:"medium",modelValue:e.setupWizardStore.searchAppearance.postTypes.postTypes.all,"onUpdate:modelValue":s[9]||(s[9]=r=>e.setupWizardStore.searchAppearance.postTypes.postTypes.all=r)},{default:d(()=>[p(n(t.strings.includeAllPostTypes),1)]),_:1},8,["modelValue"]),e.setupWizardStore.searchAppearance.postTypes.postTypes.all?_("",!0):(m(),K(W,{key:0,options:e.setupWizardStore.searchAppearance.postTypes,type:"postTypes"},null,8,["options"]))])),e.setupWizardStore.searchAppearance.underConstruction?_("",!0):(m(),u("div",Se,[i(w,{round:"",class:"no-clicks",type:"green",modelValue:!0,onClick:Q(()=>{},["stop","prevent"])},{default:d(()=>[p(n(t.strings.enableSitemap),1)]),_:1})])),e.setupWizardStore.searchAppearance.underConstruction?_("",!0):(m(),u("div",Ce,[o("div",ye,[o("div",fe,n(t.strings.doYouHaveMultipleAuthors),1)]),i(v,{modelValue:e.setupWizardStore.searchAppearance.multipleAuthors,"onUpdate:modelValue":s[10]||(s[10]=r=>e.setupWizardStore.searchAppearance.multipleAuthors=r),name:"multipleAuthors",class:"small",options:[{label:e.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])])),e.setupWizardStore.searchAppearance.underConstruction?_("",!0):(m(),u("div",Ae,[o("div",ze,[o("div",ke,n(t.strings.redirectAttachmentPages),1)]),i(v,{modelValue:e.setupWizardStore.searchAppearance.redirectAttachmentPages,"onUpdate:modelValue":s[11]||(s[11]=r=>e.setupWizardStore.searchAppearance.redirectAttachmentPages=r),name:"redirectAttachmentPages",class:"small",options:[{label:e.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])]))]),_:1}),i(V)]),_:1})])}const vt=X(Z,[["render",We]]);export{vt as default};
