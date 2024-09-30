import{_ as x}from"./_plugin-vue_export-helper.oebm7xum.js";import{o as m,c as k,v as s,k as g,l as i,a,x as l,t as r,C as n,u as p,b as y}from"./runtime-dom.esm-bundler.h3clfjuw.js";import{e as L,i as B,u as G}from"./index.nsvc8vqf.js";import"./translations.lf9cwm9a.js";import{_ as t,a as A}from"./default-i18n.hohxoesu.js";import{G as R}from"./constants.fxxegv78.js";import{C as M}from"./Blur.f3nyx4yc.js";import{C as D}from"./SettingsRow.1l1umqn0.js";import{S as I}from"./External.h5te4wqm.js";import{B as H}from"./Checkbox.fww0datn.js";import{C as U}from"./Card.n68aovsj.js";import{C as O}from"./ProBadge.ab6jhp8x.js";import{C as V}from"./Index.lvccx76i.js";import{R as E}from"./RequiredPlans.e7ak5151.js";import{u as q}from"./AddonConditions.lmddpmma.js";import"./helpers.fdpg7vgg.js";import"./Row.o0q8mn7y.js";import"./Checkmark.d5kkjaf5.js";import"./Tooltip.jx4casvt.js";import"./Caret.hnvbzqgq.js";import"./index.h076fivy.js";import"./Slide.dop8j51m.js";import"./addons.foby19s7.js";import"./upperFirst.mzmrvvb6.js";import"./_stringToArray.mpukyt2g.js";import"./toString.g0kcp64r.js";import"./license.bcd45a0t.js";const z={};function Y(c,d){return m(),k("div")}const F=x(z,[["render",Y]]),o="all-in-one-seo-pack",P=()=>({strings:{news:t("News Sitemap",o),setPublicationName:t("Set Publication Name",o),publicationName:t("Publication Name",o),postTypes:t("Post Types",o),exclude:t("Exclude Pages/Posts",o),description:t("The Google News Sitemap lets you control which content you submit to Google News and only contains articles that were published in the last 48 hours.",o),extendedDescription:t("In order to submit a News Sitemap to Google, you must have added your site to Google’s Publisher Center and had it approved.",o),enableSitemap:t("Enable Sitemap",o),openSitemap:t("Open News Sitemap",o),noIndexDisplayed:t("Noindexed content will not be displayed in your sitemap.",o),doYou404:t("Do you get a blank sitemap or 404 error?",o),ctaButtonText:t("Unlock News Sitemaps",o),ctaHeader:A(t("News Sitemaps is a %1$s Feature",o),"PRO"),includeAllPostTypes:t("Include All Post Types",o),selectPostTypes:t("Select which Post Types appear in your sitemap.",o)}}),j={setup(){const{strings:c}=P();return{strings:c,GLOBAL_STRINGS:R,links:L}},components:{CoreBlur:M,CoreSettingsRow:D,SvgExternal:I,BaseCheckbox:H}},J={class:"aioseo-settings-row aioseo-section-description"},K=["innerHTML"],Q={class:"aioseo-sitemap-preview"},W={class:"aioseo-description"},X=a("br",null,null,-1),Z=["innerHTML"],$={class:"aioseo-description"},ee=["innerHTML"];function te(c,d,S,e,b,N){const u=s("base-toggle"),_=s("core-settings-row"),f=s("svg-external"),h=s("base-button"),w=s("base-input"),C=s("base-checkbox"),v=s("core-blur");return m(),g(v,null,{default:i(()=>[a("div",J,[l(r(e.strings.description)+" "+r(e.strings.extendedDescription)+" ",1),a("span",{innerHTML:e.links.getDocLink(e.GLOBAL_STRINGS.learnMore,"newsSitemaps",!0)},null,8,K)]),n(_,{name:e.strings.enableSitemap},{content:i(()=>[n(u,{modelValue:!0})]),_:1},8,["name"]),n(_,{name:e.GLOBAL_STRINGS.preview},{content:i(()=>[a("div",Q,[n(h,{size:"medium",type:"blue"},{default:i(()=>[n(f),l(" "+r(e.strings.openSitemap),1)]),_:1})]),a("div",W,[l(r(e.strings.noIndexDisplayed)+" ",1),X,l(" "+r(e.strings.doYou404)+" ",1),a("span",{innerHTML:e.links.getDocLink(e.GLOBAL_STRINGS.learnMore,"blankSitemap",!0)},null,8,Z)])]),_:1},8,["name"]),n(_,{name:e.strings.publicationName,align:""},{content:i(()=>[n(w,{size:"medium"})]),_:1},8,["name"]),n(_,{name:e.strings.postTypes},{content:i(()=>[n(C,{size:"medium"},{default:i(()=>[l(r(e.strings.includeAllPostTypes),1)]),_:1}),a("div",$,[l(r(e.strings.selectPostTypes)+" ",1),a("span",{innerHTML:e.links.getDocLink(e.GLOBAL_STRINGS.learnMore,"selectPostTypesNews",!0)},null,8,ee)])]),_:1},8,["name"])]),_:1})}const oe=x(j,[["render",te]]),ne={setup(){const{strings:c}=P();return{licenseStore:B(),rootStore:G(),links:L,strings:c}},components:{Blur:oe,CoreCard:U,CoreProBadge:O,Cta:V,RequiredPlans:E}},se={class:"aioseo-news-sitemap-lite"};function ie(c,d,S,e,b,N){const u=s("core-pro-badge"),_=s("blur"),f=s("required-plans"),h=s("cta"),w=s("core-card");return m(),k("div",se,[n(w,{slug:"newsSitemap",noSlide:!0},{header:i(()=>[a("span",null,r(e.strings.news),1),n(u)]),default:i(()=>[n(_),n(h,{"feature-list":[e.strings.setPublicationName,e.strings.exclude],"cta-link":e.links.getPricingUrl("news-sitemap","news-sitemap-upsell"),"button-text":e.strings.ctaButtonText,"learn-more-link":e.links.getUpsellUrl("news-sitemap",null,e.rootStore.isPro?"pricing":"liteUpgrade"),"hide-bonus":!e.licenseStore.isUnlicensed},{"header-text":i(()=>[l(r(e.strings.ctaHeader),1)]),description:i(()=>[n(f,{addon:"aioseo-news-sitemap"}),l(" "+r(e.strings.description),1)]),_:1},8,["feature-list","cta-link","button-text","learn-more-link","hide-bonus"])]),_:1})])}const T=x(ne,[["render",ie]]),re={class:"aioseo-news-sitemap"},Me={__name:"NewsSitemap",setup(c){const{shouldShowActivate:d,shouldShowLite:S,shouldShowMain:e,shouldShowUpdate:b}=q({addonSlug:"aioseo-news-sitemap"});return(N,u)=>(m(),k("div",re,[p(e)?(m(),g(p(T),{key:0})):y("",!0),p(b)||p(d)?(m(),g(p(F),{key:1})):y("",!0),p(S)?(m(),g(p(T),{key:2})):y("",!0)]))}};export{Me as default};