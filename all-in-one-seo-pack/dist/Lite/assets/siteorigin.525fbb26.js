import{d as h,S as M,a as O}from"./js/Caret.662da1f3.js";import{r as j,m as T}from"./js/postTitle.d67eb903.js";import{i as W}from"./js/isEqual.51bf23f5.js";import{g as P,y as I,o as _,c as f,C as c,l as N,u as n,G as $,E as C,a as m,t as k,b as R,Y as U,h as V}from"./js/runtime-dom.esm-bundler.6789c400.js";import{c as z,b as G}from"./js/vue-router.fc4966b9.js";import{e as A,l as H}from"./js/index.3eb8f806.js";import{l as J}from"./js/index.ee8124c6.js";import{J as Q,e as L,B as Y,c as F}from"./js/index.20192476.js";import{_ as K}from"./js/ScoreButton.e2a31604.js";import{S as X}from"./js/LogoGear.29bd352d.js";import{_ as Z}from"./js/App.01f2e941.js";import"./js/translations.12335a6a.js";import{s as tt,_ as q}from"./js/default-i18n.54b5d8cd.js";import"./js/_plugin-vue_export-helper.249dac1d.js";import"./js/metabox.dc73facf.js";import"./js/cleanForSlug.f9ffe7db.js";import"./js/toString.1401d490.js";import"./js/helpers.f95d5840.js";import"./js/_baseTrim.940c51cf.js";import"./js/_stringToArray.08127ca9.js";import"./js/_baseSet.32e7a763.js";import"./js/regex.f8017116.js";import"./js/_baseIsEqual.6bc92395.js";import"./js/_getTag.8dc22eac.js";/* empty css                */import"./js/LicenseKeyBar.4ba21094.js";import"./js/ScrollTo.97c9805f.js";import"./js/params.764403f6.js";import"./js/allowed.f428d9c9.js";import"./js/constants.2019bcb3.js";import"./js/SettingsRow.1934f141.js";import"./js/Row.f01f32cd.js";import"./js/Checkbox.e983780b.js";import"./js/Checkmark.32f79576.js";import"./js/Tabs.2fd33524.js";import"./js/ProBadge.7733ac87.js";import"./js/Information.82968754.js";import"./js/Slide.d0517fb0.js";import"./js/Index.de83b4aa.js";import"./js/MaxCounts.d28a6cb7.js";import"./js/Tags.45075d79.js";import"./js/Ellipse.c57f22ea.js";import"./js/debounce.40834200.js";import"./js/toNumber.30f8b529.js";import"./js/toFinite.bbcc0565.js";import"./js/TruSeoScore.c8bdf339.js";import"./js/Tooltip.b6b45c85.js";import"./js/Statistics.324b239a.js";import"./js/Plus.c3a1a43f.js";import"./js/Eye.902c8763.js";import"./js/RadioToggle.64619d6b.js";import"./js/GoogleSearchPreview.2f81905c.js";import"./js/HtmlTagsEditor.4c8f78eb.js";import"./js/Editor.5a453aa4.js";import"./js/_baseClone.e959332d.js";import"./js/_arrayEach.f4f00336.js";import"./js/UnfilteredHtml.4ebe3c5f.js";import"./js/popup.001b1125.js";import"./js/SetupWizardStore.f902c357.js";import"./js/datetime.cb3980ce.js";import"./js/license.37048367.js";import"./js/upperFirst.96c04516.js";import"./js/Mobile.3fcac169.js";import"./js/Settings.0254ae9c.js";import"./js/TableOfContentsStore.62cf580e.js";import"./js/vue3-apexcharts.8b5abfad.js";import"./js/ConnectCta.444a26a5.js";import"./js/GoogleSearchConsole.9e8ca525.js";import"./js/Index.c0a0a208.js";import"./js/Blur.31bfcf06.js";import"./js/Graph.266090de.js";import"./js/numbers.b55b32c5.js";import"./js/WpTable.46584896.js";import"./js/Table.963c11c7.js";import"./js/Download.6a0d8455.js";import"./js/RequiredPlans.7629fd28.js";import"./js/addons.9d0af6ad.js";import"./js/PostTypes.d6c1987b.js";import"./js/External.b3b0805d.js";import"./js/InternalOutbound.b4a71286.js";import"./js/Image.47bc8de9.js";import"./js/FacebookPreview.8edcde79.js";import"./js/Img.2fc40874.js";import"./js/Profile.19fffd1c.js";import"./js/ImageUploader.82ab8ffd.js";import"./js/TwitterPreview.09956aa1.js";import"./js/Book.e7bb6a80.js";import"./js/Build.828bd995.js";import"./js/Redirects.921e33df.js";import"./js/Index.4759371c.js";import"./js/JsonValues.892a7505.js";import"./js/Url.0ccd8549.js";import"./js/External.c84e4310.js";import"./js/escapeRegExp.d673186c.js";import"./js/Exclamation.bf79561a.js";import"./js/Gear.1433c8c3.js";import"./js/date.839db266.js";import"./js/DatePicker.fd6399b7.js";import"./js/Calendar.4686ac3f.js";import"./js/pick.231724a9.js";import"./js/Card.46af096e.js";import"./js/Upsell.beb53fd9.js";let E={};const b=()=>{const t={...E},o=j();W(t,o)||(E=o,T())},ot=t=>{b(),t.on("content_change",()=>{h(b,1e3)}),t.$(document).on("ajaxComplete",function(o,e,r){new URLSearchParams(r.data).get("action")==="so_panels_builder_content_json"&&h(b,1e3)})},et={class:"aioseo-site-origin-integration"},it={__name:"Button",setup(t){const o=P(!1),{currentPost:e}=Q(L()),r=()=>{o.value=!o.value,document.body.classList.toggle("aioseo-site-origin-sidebar--active",o.value)};return I(()=>{o.value=document.body.classList.contains("aioseo-site-origin-sidebar--active"),A.on("siteOriginAioseoClosed",()=>{o.value=!1,document.body.classList.remove("aioseo-site-origin-sidebar--active")})}),(s,a)=>(_(),f("div",et,[c(n(K),{score:n(e).seo_score,class:$([o.value?"aioseo-score-button--active":""]),onClick:C(r,["prevent"])},{icon:N(()=>[c(n(X))]),_:1},8,["score","class"])]))}},rt={class:"edit-post-sidebar editor-sidebar aioseo-site-origin-sidebar"},st={class:"aioseo-site-origin-sidebar__header"},nt={class:"aioseo-site-origin-sidebar__header-title"},at={class:"aioseo-site-origin-sidebar__content"},mt={__name:"Sidebar",setup(t){const e={headerTitle:tt(q("%1$s Settings","all-in-one-seo-pack"),"AIOSEO")};return(r,s)=>(_(),f("div",rt,[m("div",st,[m("div",nt,k(e.headerTitle),1),m("div",{class:"aioseo-site-origin-sidebar__header-close",onClick:s[0]||(s[0]=a=>n(A).emit("siteOriginAioseoClosed",!1))},[c(n(M))])]),m("div",at,[c(n(Z))])]))}},ct={class:"aioseo-site-origin-lmd"},pt={__name:"LimitModifiedDate",setup(t){const o="all-in-one-seo-pack",e=P(!1),r=L(),s=()=>{e.value=!e.value},a=()=>{var v;e.value=!1,r.currentPost.limit_modified_date=!0,r.savePostState(),Y()&&window.wp.data.dispatch("core/editor").editPost({aioseo_limit_modified_date:r.currentPost.limit_modified_date}),(v=document.querySelector(".live-editor-save"))==null||v.click()},i={option:q("Don't update the modified date",o)};return(v,_t)=>(_(),f("div",ct,[m("button",{class:"aioseo-site-origin-lmd__button button-primary",onClick:C(s,["prevent"])},[c(n(O),{class:$({rotated:e.value})},null,8,["class"])]),e.value?(_(),f("div",{key:0,class:"aioseo-site-origin-lmd__options",onClick:C(a,["prevent"])},k(i.option),1)):R("",!0)]))}};let p=null,l=null,d=null;const g="#so-live-editor-aioseo-button",y="#so-live-editor-aioseo-sidebar",S="#so-live-editor-aioseo-lmd",w=({id:t,component:o,name:e,rootProps:r,data:s})=>{const a=z({history:G(),routes:[{path:"/",component:o}]});let i=U({name:`Standalone/SiteOrigin/${e}`,render:()=>V(o),data:()=>s||{}},r||{});return i=H(i),i=J(i),i.use(a),a.app=i,F(i),i.mount(t),i},x=t=>{const o=document.createElement("div");return o.id=t.replace("#",""),o.className="aioseo-live-editor-item",o},lt=t=>{t.querySelector(g)||(t.querySelector(".so-builder-toolbar").insertAdjacentElement("beforeend",x(g)),p==null||p.unmount(),p=w({id:g,component:it,name:"Button"})),t.querySelector(y)||(t.querySelector(".so-rows-container").insertAdjacentElement("beforeend",x(y)),l==null||l.unmount(),l=w({id:y,component:mt,name:"Sidebar",data:{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"}}))},dt=()=>{const t=document.querySelector(".so-sidebar-tools");!t||t.querySelector(S)||(t.insertAdjacentElement("afterbegin",x(S)),d==null||d.unmount(),d=w({id:S,component:pt,name:"LimitModifiedDate",data:{tableContext:window.aioseo.currentPost.context,screenContext:"limitModifiedDate"}}))},ut=t=>{const o=document.querySelector(".siteorigin-panels-builder");!o||o.querySelector(".aioseo-live-editor-item")||(lt(o),t.on("builder_resize",()=>{h(dt,500)}))},D=t=>{ut(t),ot(t)};let B=!1;const{soPanelsBuilderView:u}=window;if(u!==void 0){const t=Array.isArray(u)?u[0]:u;setTimeout(()=>{D(t)}),B=!0}(function(t){B||t(document).on("panels_setup",(o,e)=>{setTimeout(()=>{D(e)})})})(window.jQuery);
