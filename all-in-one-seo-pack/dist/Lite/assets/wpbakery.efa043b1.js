import{g as k,o as s,c,a as y,C as u,G as h,u as n,E as f,t as M,b as p,Y as C,X as R,k as g,l as $,Q as V,h as F}from"./js/runtime-dom.esm-bundler.5c3c7d72.js";import{c as T,b as U}from"./js/vue-router.2f910c93.js";import{e as P,l as x}from"./js/index.7c01c5f2.js";import{l as B}from"./js/index.1f3cb1fa.js";import{e as v,y as j,c as D,J as q}from"./js/index.a87126ce.js";import{d as w,a as W}from"./js/Caret.d9cc70ba.js";import{o as N,m as O,i as z}from"./js/helpers.fa367b69.js";import{i as G}from"./js/isEqual.96d3394c.js";import"./js/translations.d159963e.js";import{l as I}from"./js/index.d80c2c2c.js";import{_ as Q}from"./js/default-i18n.20001971.js";import{M as H}from"./js/Modal.c632a28b.js";import{_ as J}from"./js/ScoreButton.78818232.js";import{S as b}from"./js/LogoGear.cb664d3b.js";import"./js/_plugin-vue_export-helper.eefbdd86.js";import"./js/helpers.53868b98.js";import"./js/metabox.3ecdfc83.js";import"./js/cleanForSlug.97664b33.js";import"./js/toString.f0787db8.js";import"./js/_baseTrim.11b89ad9.js";import"./js/_stringToArray.f9ddb970.js";import"./js/_baseSet.9f9da1bd.js";import"./js/regex.8a6101c0.js";import"./js/_baseIsEqual.aba7ca44.js";import"./js/_getTag.1e50d0c4.js";import"./js/App.91fc1a84.js";/* empty css                */import"./js/LicenseKeyBar.669e450f.js";import"./js/ScrollTo.81bea8a7.js";import"./js/params.af7ed354.js";import"./js/allowed.ab723907.js";import"./js/constants.1ec71a84.js";import"./js/SettingsRow.9f92e269.js";import"./js/Row.df38a5f6.js";import"./js/Checkbox.6db0b9ed.js";import"./js/Checkmark.e40641dd.js";import"./js/Url.e5c2ac01.js";import"./js/Tabs.7c14121d.js";import"./js/ProBadge.751e0b85.js";import"./js/Information.13e8cece.js";import"./js/Slide.39c07c03.js";import"./js/Index.f71e22d2.js";import"./js/MaxCounts.7c38e980.js";import"./js/Tags.ac521d15.js";import"./js/Tooltip.73441134.js";import"./js/Ellipse.e3ae0692.js";import"./js/Eye.8dc261a7.js";import"./js/debounce.f7a8b998.js";import"./js/toNumber.90507ad4.js";import"./js/toFinite.b0a886e7.js";import"./js/TruSeoScore.fe90f575.js";import"./js/Statistics.2cff8c0a.js";import"./js/Plus.426117bd.js";import"./js/RadioToggle.333e7750.js";import"./js/GoogleSearchPreview.dee77d02.js";import"./js/HtmlTagsEditor.e7779e12.js";import"./js/Editor.29413d15.js";import"./js/_baseClone.2009409f.js";import"./js/_arrayEach.6af5abac.js";import"./js/UnfilteredHtml.ffcab8e3.js";import"./js/popup.cd963607.js";import"./js/SetupWizardStore.efc7053d.js";import"./js/datetime.f197aeae.js";import"./js/license.d747bfcd.js";import"./js/upperFirst.2cd99bdd.js";import"./js/Mobile.ada2591a.js";import"./js/Settings.db203e07.js";import"./js/TableOfContentsStore.3dbc74df.js";import"./js/vue3-apexcharts.57b6886c.js";import"./js/GoogleSearchConsole.8734f3e0.js";import"./js/ConnectCta.1288a346.js";import"./js/Index.ac5cec7c.js";import"./js/Blur.edde4939.js";import"./js/Graph.53bec904.js";import"./js/numbers.9fc174f3.js";import"./js/WpTable.5920faf2.js";import"./js/Table.705ec1c3.js";import"./js/Download.17eb5e1f.js";import"./js/RequiredPlans.1d9170ab.js";import"./js/addons.dc226733.js";import"./js/PostTypes.dafa8837.js";import"./js/External.3b8c2917.js";import"./js/InternalOutbound.8d129cbf.js";import"./js/Image.ba059181.js";import"./js/FacebookPreview.9bed838b.js";import"./js/Img.90c4fd14.js";import"./js/Profile.ad607616.js";import"./js/ImageUploader.d24da2c6.js";import"./js/TwitterPreview.e4f6f7f5.js";import"./js/Book.74a13fcd.js";import"./js/Build.b598c742.js";import"./js/Redirects.3473047f.js";import"./js/Index.942d349d.js";import"./js/JsonValues.3fcfec97.js";import"./js/External.c9d4f255.js";import"./js/escapeRegExp.9b141b1a.js";import"./js/Exclamation.22e53a8b.js";import"./js/Gear.bd4e1565.js";import"./js/date.6089ddf7.js";import"./js/DatePicker.cad24eb3.js";import"./js/Calendar.b69b61c4.js";import"./js/pick.67675203.js";import"./js/Card.eb2e90c7.js";import"./js/Upsell.043993be.js";let S={};const X=()=>{const o={...S},t=N();G(o,t)||(S=t,O())},Y=()=>{const o=v();o.saveCurrentPost(o.currentPost).then(()=>{j().fetch()})},K=()=>{var e;const{vc:o,vc_mode:t}=window;return t==="admin_frontend_editor"?o.builder.getContent():((e=document.querySelector("#content"))==null?void 0:e.value)||""},l=async()=>{v().processContent({content:K()}).finally(()=>{X()})},Z=({vc:o})=>{l(),o.events.on("shortcodeView:updated",()=>{w(l,1e3)}),o.shortcodes.on("sync",()=>{w(l,1e3)}),["#vc_button-update","#vc_button-save-draft","#vc_button-save-as-pending"].forEach(t=>{var e;(e=document.querySelector(t))==null||e.addEventListener("click",Y)})},tt={class:"aioseo-limit-modified-date-wpbakery"},ot={key:0,class:"aioseo-limit-modified-date-wpbakery__options"},et={__name:"App",props:{buttonTitle:String,buttonEvent:String},setup(o){const t=k(!1),e=o,a=()=>{t.value=!1,P.emit(e.buttonEvent)};return(r,m)=>(s(),c("div",tt,[y("div",{class:"aioseo-limit-modified-date-wpbakery__toggle",onClick:m[0]||(m[0]=f(d=>t.value=!t.value,["prevent"]))},[u(n(W),{class:h({rotated:t.value})},null,8,["class"])]),t.value?(s(),c("div",ot,[y("div",{class:"aioseo-limit-modified-date-wpbakery__option",onClick:f(a,["prevent"])},M(e.buttonTitle),1)])):p("",!0)]))}},i={id:"aioseo-limit-modified-date-wpbakery",param:"aioseo_limit_modified_date",event:"save-limit-modified-date",title:Q("Update (Don't Modify Date)","all-in-one-seo-pack"),flag:!1},_=()=>document.getElementById("vc_button-update"),it=()=>{if(document.getElementById(i.id))return;const o=document.createElement("div");o.id=i.id,_().insertAdjacentElement("afterend",o);let t=C({...et,name:"Standalone/WPBakery/LimitModifiedDate"},{buttonTitle:i.title,buttonEvent:i.event});t=x(t),t=B(t),t=I(t),D(t),t.mount(`#${i.id}`)},rt=o=>{o(document).on("ajaxSend",function(t,e,a){const r=new URLSearchParams(a.data);r.get("action")!=="vc_save"||!i.flag||(r.set(i.param,!0),a.data=r.toString())}),P.on(i.event,()=>{i.flag=!0,_().click(),setTimeout(()=>{i.flag=!1})})},nt=({jQuery:o})=>{_()&&(it(),rt(o))},st={class:"aioseo-wpbakery-integration"},at={key:2,class:"aioseo-gear-icon"},E={__name:"App",props:{isFrontendEditor:Boolean},setup(o){const t=k(!1),{currentPost:e}=q(v());return(a,r)=>{const m=R("scroll-to");return s(),c("div",st,[o.isFrontendEditor?(s(),g(n(J),{key:0,"show-score":n(z)(),score:n(e).seo_score,class:h([t.value?"aioseo-score-button--active":""]),onClick:r[0]||(r[0]=f(d=>t.value=!t.value,["prevent"]))},{icon:$(()=>[u(n(b))]),_:1},8,["show-score","score","class"])):p("",!0),o.isFrontendEditor?(s(),g(n(H),{key:1,score:n(e).seo_score,"is-open":t.value,"onUpdate:isOpen":r[1]||(r[1]=d=>t.value=d)},null,8,["score","is-open"])):p("",!0),o.isFrontendEditor?p("",!0):V((s(),c("div",at,[u(n(b))])),[[m,{el:"#aioseo-settings",offset:-150}]])])}}},{vc:mt}=window,pt=()=>{const{vc_mode:o}=window,t=T({history:U(),routes:[{path:"/",component:E}]});let e=C({name:"Standalone/WPBakery",data(){return{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"}},render:()=>F(E)},{isFrontendEditor:o==="admin_frontend_editor"});e=x(e),e=B(e),e.use(t),t.app=e,D(e,t),e.mount("#aioseo-wpbakery")},A=()=>{pt(),Z(window),nt(window)};let L=!1;mt.events.on("app.render",()=>{A(),L=!0});window.addEventListener("load",()=>{L||A()});