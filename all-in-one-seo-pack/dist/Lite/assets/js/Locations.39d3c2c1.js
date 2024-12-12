import{m as U,u as P,l as R}from"./index.ae2b6956.js";import{C as z}from"./Blur.edde4939.js";import{C as A}from"./SettingsRow.9f92e269.js";import{S as D}from"./Plus.426117bd.js";import"./translations.d159963e.js";import{_ as L}from"./_plugin-vue_export-helper.eefbdd86.js";import{s as w,_ as e}from"./default-i18n.20001971.js";import{v as a,o as _,c as k,C as o,l as r,a as n,t as i,x as g,u as p,k as S,b as v}from"./runtime-dom.esm-bundler.5c3c7d72.js";import{R as T}from"./RequiredPlans.78e071b4.js";import{C as O}from"./Card.109b77eb.js";import{C as G}from"./ProBadge.751e0b85.js";import{C as V}from"./Index.0e872043.js";import{C as E}from"./Cta.c0fa9aa4.js";import{u as N}from"./AddonConditions.d3341742.js";import"./helpers.c7282833.js";import"./Row.df38a5f6.js";import"./addons.2e54f461.js";import"./upperFirst.eac3a366.js";import"./_stringToArray.f9ddb970.js";import"./toString.a2dfb892.js";import"./license.306f6adb.js";import"./Caret.d9cc70ba.js";import"./Tooltip.73441134.js";import"./index.8c70464a.js";import"./Slide.39c07c03.js";import"./constants.24c44c43.js";const t="all-in-one-seo-pack",Y={components:{CoreBlur:z,CoreSettingsRow:A,SvgCirclePlus:D},data(){return{strings:{description:w(e("Whether your business has multiple locations, or just one, %1$s makes it easy to configure and display relevant information about your local business. You can use the custom-built tools below, or you can use the Locations custom post type (multiple locations only) to generate relevant and necessary information for search engines or for your customers.",t),"AIOSEO"),name:e("name",t),nameDesc:e("Your name or company name.",t),businessType:e("Type",t),urls:e("URLs",t),image:e("Image",t),uploadOrSelectImage:e("Upload or Select Image",t),pasteYourImageUrl:e("Paste your image URL or select a new image",t),minimumSize:e("Minimum size: 112px x 112px, The image must be in JPG, PNG, GIF, SVG, or WEBP format.",t),remove:e("Remove",t),websiteDesc:e("Website URL:",t),aboutDesc:e("About Page URL:",t),contactDesc:e("Contact Page URL:",t)},businessTypes:[{label:e("default",t),value:"LocalBusiness"},{label:e("Animal Shelter",t),value:"Animal Shelter"}]}}},q={class:"aioseo-locations-blur"},M={class:"aioseo-settings-row"},W={class:"aioseo-col col-xs-12 text-xs-left"},F={class:"field-description"},H={class:"image-upload"},j={class:"aioseo-description"},J={class:"aioseo-col col-xs-12 text-xs-left"},K={class:"aioseo-col col-xs-12 text-xs-left"},Q={class:"field-description"},X={class:"aioseo-col col-xs-12 text-xs-left"},Z={class:"field-description mt-8"},$={class:"aioseo-col col-xs-12 text-xs-left"},ee={class:"field-description mt-8"};function se(C,b,h,u,s,x){const c=a("base-input"),m=a("core-settings-row"),d=a("svg-circle-plus"),f=a("base-button"),y=a("base-select"),B=a("core-blur");return _(),k("div",q,[o(B,null,{default:r(()=>[n("div",M,i(s.strings.description),1),o(m,{name:s.strings.name,class:"info-name-row",align:""},{content:r(()=>[n("div",W,[o(c,{type:"text",size:"medium"}),n("span",F,i(s.strings.nameDesc),1)])]),_:1},8,["name"]),o(m,{class:"info-business-image",name:s.strings.image},{content:r(()=>[n("div",H,[o(c,{size:"medium",placeholder:s.strings.pasteYourImageUrl},null,8,["placeholder"]),o(f,{class:"insert-image",size:"medium",type:"black"},{default:r(()=>[o(d),g(" "+i(s.strings.uploadOrSelectImage),1)]),_:1}),o(f,{class:"remove-image",size:"medium",type:"gray"},{default:r(()=>[g(i(s.strings.remove),1)]),_:1})]),n("div",j,i(s.strings.minimumSize),1)]),_:1},8,["name"]),o(m,{name:s.strings.businessType,class:"info-business-type",align:""},{content:r(()=>[o(y,{size:"large",options:s.businessTypes,modelValue:"default"},null,8,["options"])]),_:1},8,["name"]),o(m,{name:s.strings.urls,class:"info-urls-row",align:""},{content:r(()=>[n("div",J,[n("div",K,[n("span",Q,i(s.strings.websiteDesc),1),o(c,{type:"text",size:"medium"})]),n("div",X,[n("span",Z,i(s.strings.aboutDesc),1),o(c,{type:"text",size:"medium"})]),n("div",$,[n("span",ee,i(s.strings.contactDesc),1),o(c,{type:"text",size:"medium"})])])]),_:1},8,["name"])]),_:1})])}const oe=L(Y,[["render",se]]),l="all-in-one-seo-pack",te={setup(){return{licenseStore:U(),rootStore:P(),links:R}},components:{Blur:oe,RequiredPlans:T,CoreCard:O,CoreProBadge:G,Cta:V},data(){return{features:[e("Local Business Schema",l),e("Multiple Locations",l),e("Business Info and Location blocks, widgets and shortcodes",l),e("Detailed Address, Contact and Payment Info",l)],strings:{locationInfo1:e("Local Business schema markup informs Google about your business details like name, address, phone number, hours, and price range, which can appear in a Knowledge Graph card or business carousel.",l),businessInfo:e("Business Info",l),ctaButtonText:e("Unlock Local SEO",l),ctaHeader:w(e("Local SEO is a %1$s Feature",l),"PRO")}}}},ne={class:"aioseo-locations-lite"};function ie(C,b,h,u,s,x){const c=a("core-pro-badge"),m=a("blur"),d=a("required-plans"),f=a("cta"),y=a("core-card");return _(),k("div",ne,[o(y,{slug:"localBusinessInfo",class:"aioseo-locations-card",noSlide:!0},{header:r(()=>[n("span",null,i(s.strings.businessInfo),1),o(c)]),default:r(()=>[o(m),o(f,{"cta-link":u.links.getPricingUrl("local-seo","local-seo-upsell","locations"),"button-text":s.strings.ctaButtonText,"learn-more-link":u.links.getUpsellUrl("local-seo",null,u.rootStore.isPro?"pricing":"liteUpgrade"),"feature-list":s.features,"align-top":"","hide-bonus":!u.licenseStore.isUnlicensed},{"header-text":r(()=>[g(i(s.strings.ctaHeader),1)]),description:r(()=>[o(d,{addon:"aioseo-local-business"}),g(" "+i(s.strings.locationInfo1),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list","hide-bonus"])]),_:1})])}const I=L(te,[["render",ie]]),re={class:"aioseo-locations"},Ae={__name:"Locations",setup(C){const b="all-in-one-seo-pack",{shouldShowActivate:h,shouldShowLite:u,shouldShowMain:s,shouldShowUpdate:x}=N({addonSlug:"aioseo-local-business"}),c={businessInfo:e("Business Info",b)};return(m,d)=>(_(),k("div",re,[p(s)?(_(),S(p(I),{key:0})):v("",!0),p(x)||p(h)?(_(),S(p(E),{key:1,"card-slug":"localBusinessInfo","header-text":c.businessInfo},null,8,["header-text"])):v("",!0),p(u)?(_(),S(p(I),{key:2})):v("",!0)]))}};export{Ae as default};
