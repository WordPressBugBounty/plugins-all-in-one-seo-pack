import{Y as k,h as v}from"./js/runtime-dom.esm-bundler.h3clfjuw.js";import{c as _,b as E}from"./js/vue-router.eypfdvl5.js";import{e as S,l as I}from"./js/index.njux2kgl.js";import{l as C}from"./js/index.cw7tfyil.js";import{l as D}from"./js/index.moogjen0.js";import{L,G as h,C as x,i as A,F as P,o as O}from"./js/index.lqcu3hi3.js";import{i as B}from"./js/isEqual.izz0yjhb.js";import{i as U}from"./js/isEmpty.mgjssgsb.js";import"./js/translations.e22mvhfh.js";import{s as m,_ as s}from"./js/default-i18n.bz7purh4.js";import{_ as p}from"./js/App.i3mx0zbv.js";import"./js/Caret.g6s6s7gs.js";import"./js/_plugin-vue_export-helper.oebm7xum.js";import"./js/cleanForSlug.etvx808q.js";import"./js/_baseIsEqual.btyep0ht.js";import"./js/_getTag.k19irihw.js";/* empty css                */import"./js/LicenseKeyBar.hoq3y8n1.js";import"./js/ScrollTo.ntqtkazp.js";import"./js/params.k8e95b6q.js";import"./js/LogoGear.gxsz2m6s.js";import"./js/allowed.cnz2h8ma.js";import"./js/constants.dnzd2kuo.js";import"./js/SettingsRow.d9u0swi1.js";import"./js/Row.h4gujlzc.js";import"./js/Checkbox.cv4w58s0.js";import"./js/Checkmark.d5kkjaf5.js";import"./js/Tabs.nyi4b4w1.js";import"./js/ProBadge.e32os6n3.js";import"./js/Information.djrr3pec.js";import"./js/Slide.dop8j51m.js";import"./js/Index.gtlvh3ar.js";import"./js/MaxCounts.bdkgkiti.js";import"./js/Tags.lgcgntse.js";import"./js/Ellipse.mhzh8c2h.js";import"./js/debounce.lmahs4m3.js";import"./js/toNumber.o3a8s20t.js";import"./js/toFinite.j57ptoa1.js";import"./js/TruSeoScore.he4e4jdf.js";import"./js/Tooltip.i4md1nj9.js";import"./js/Statistics.l9vto0az.js";import"./js/Plus.e1tf1dpc.js";import"./js/Eye.jbr17b06.js";import"./js/RadioToggle.cler7vn3.js";import"./js/GoogleSearchPreview.iw4vtoyb.js";import"./js/HtmlTagsEditor.b5rm37z5.js";import"./js/Editor.i8px02kg.js";import"./js/_baseClone.memmt1nf.js";import"./js/_arrayEach.n8ou32wp.js";import"./js/UnfilteredHtml.gvs5qb56.js";import"./js/popup.by9shv56.js";import"./js/license.md0nmssw.js";import"./js/upperFirst.d9alxexs.js";import"./js/Mobile.livanyta.js";import"./js/vue3-apexcharts.cwogygg0.js";import"./js/ConnectCta.oy9zv6h9.js";import"./js/GoogleSearchConsole.mrngyubh.js";import"./js/Index.bojstwek.js";import"./js/Blur.mu93d3e2.js";import"./js/Graph.bw9skznb.js";import"./js/numbers.oc93q9ut.js";import"./js/WpTable.ku0ajsnd.js";import"./js/Table.fw94frzs.js";import"./js/Download.cmimu09k.js";import"./js/RequiredPlans.l7pjpdqj.js";import"./js/addons.ds3c4v6r.js";import"./js/PostTypes.k189gg5t.js";import"./js/External.lyui8nzf.js";import"./js/InternalOutbound.gq4sspcu.js";import"./js/Image.mh6vskkn.js";import"./js/FacebookPreview.pblvb2yr.js";import"./js/Img.b8ktdwdi.js";import"./js/Profile.t9aiulue.js";import"./js/ImageUploader.ljgurrx5.js";import"./js/TwitterPreview.gaoeyz1f.js";import"./js/Book.f6lktglp.js";import"./js/Settings.cshbxeez.js";import"./js/Build.mjaxpub4.js";import"./js/Redirects.b9owhewb.js";import"./js/Index.mnx6c8l5.js";import"./js/JsonValues.g6ep3o3z.js";import"./js/Url.mx7n0tnd.js";import"./js/External.h5te4wqm.js";import"./js/escapeRegExp.n8evpyq8.js";import"./js/Exclamation.f0pmbpi9.js";import"./js/Gear.dx9icaxx.js";import"./js/date.cp76fgkd.js";import"./js/DatePicker.ns06gy6o.js";import"./js/Calendar.fbofsn3b.js";import"./js/pick.gnbqgz74.js";import"./js/Card.nubn9etl.js";import"./js/Upsell.ouqs5sgm.js";class $ extends window.$e.modules.hookUI.Base{constructor(t,i,o){super(),this.hook=t,this.id=i,this.callback=o}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}class H extends window.$e.modules.hookData.Base{constructor(t,i,o){super(),this.hook=t,this.id=i,this.callback=o}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}function c(e,t,i){window.$e.hooks.registerUIAfter(new $(e,t,i))}function M(e,t,i){window.$e.hooks.registerDataAfter(new H(e,t,i))}let d={},l=!1;const u=()=>{const e=window.elementor.documents.getCurrent();if(!["wp-post","wp-page"].includes(e.config.type))return;const t={...d},i=L();B(t,i)||(d=i,h())},R=()=>{const e=x();U(e.currentPost)||window.elementor.config.document.id===window.elementor.config.document.revisions.current_id&&e.saveCurrentPost(e.currentPost).then(()=>{const t=A(),i=P();t.isUnlicensed||i.fetch()})},T=()=>{window.$e.internal("document/save/set-is-modified",{status:!0})},q=()=>{l||(l=!0,c("editor/documents/attach-preview","aioseo-content-scraper-attach-preview",u),c("document/save/set-is-modified","aioseo-content-scraper-on-modified",u),M("document/save/save","aioseo-save",R),S.on("postSettingsUpdated",T))},V=({elementor:e,elementorModules:t})=>{if(e.config.user.introduction["aioseo-introduction"]===!0)return;const i=new t.editor.utils.Introduction({introductionKey:"aioseo-introduction",dialogType:"alert",dialogOptions:{id:"aioseo-introduction",headerMessage:m(s("New: %1$s %2$s integration","all-in-one-seo-pack"),"AIOSEO","Elementor"),message:m(s("You can now manage your SEO settings inside of %1$s via %2$s before you publish your post!","all-in-one-seo-pack"),"Elementor","All in One SEO"),position:{my:"center center",at:"center center"},strings:{confirm:s("Got It!","all-in-one-seo-pack")},hide:{onButtonClick:!1},onConfirm:()=>{i.setViewed(),i.getDialog().hide()}}});i.show()},r={icon:"eicon-calendar",name:"aioseo-limit-modified-date",param:"aioseo_limit_modified_date",title:s("Save (Don't Modify Date)","all-in-one-seo-pack")},f=e=>{const t=document.getElementById(`elementor-panel-footer-sub-menu-item-${r.name}`);t&&(t.classList.remove("elementor-disabled"),e||t.classList.add("elementor-disabled"))},j=({elementor:e,elementorCommon:t,$e:i})=>{e.once("preview:loaded",function(){e.getRegion("panel").currentView.footer.currentView.addSubMenuItem("saver-options",{icon:r.icon,name:r.name,title:r.title,callback:o=>{o.currentTarget.classList.contains("elementor-disabled")||(t.ajax.requestConstants[r.param]=!0,i.run("document/save/default"))}})}),e.on("document:loaded",o=>{f(o.container.settings.get("post_status")==="draft")}),i.commandsInternal.on("run:after",(o,a,b)=>{switch(a){case"document/save/set-is-modified":f(b.status);break;case"document/save/save":case"document/save/default":delete t.ajax.requestConstants[r.param];break}})};let n=null,w=!1;const W=()=>{let e=window.elementor.getPreferences("ui_theme")||"auto";e==="auto"&&(e=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),document.body.classList.forEach(t=>{t.startsWith("aioseo-elementor-")&&document.body.classList.remove(t)}),document.body.classList.add("aioseo-elementor-"+e)},F=({elementor:e,$e:t,Marionette:i})=>{t.routes.on("run:after",function(o,a){W(),a==="panel/page-settings/aioseo"&&(n==null||n.unmount(),n=g("#elementor-panel-page-settings-controls"))}),e.modules.layouts.panel.pages.menu.Menu.addItem({name:"aioseo",icon:"aioseo aioseo-element-menu-icon aioseo-element-menu-icon-"+e.getPreferences("ui_theme"),title:"All in One SEO",type:"page",callback:()=>{try{t.routes.run("panel/page-settings/aioseo")}catch{t.routes.run("panel/page-settings/settings"),t.routes.run("panel/page-settings/aioseo")}}},"more"),e.once("preview:loaded",function(){t.components.get("panel/elements").addTab("aioseo",{title:"AIOSEO"})}),e.hooks.addFilter("panel/elements/regionViews",o=>(o.aioseo={region:o.global.region,view:i.ItemView.extend({template:!1,id:"elementor-panel-aioseo",className:"aioseo-elementor aioseo-sidebar-panel",initialize(){document.getElementById("elementor-panel-elements-search-area").hidden=!0},onShow(){n==null||n.unmount(),n=g("#elementor-panel-aioseo")},onDestroy(){document.getElementById("elementor-panel-elements-search-area").hidden=!1}}),options:{}},o))},g=e=>{const t=document.querySelector(e);t.classList.add("edit-post-sidebar","editor-sidebar","aioseo-elementor-panel"),t.appendChild(document.createElement("div"));const i=_({history:E(),routes:[{path:"/",component:p}]});let o=k({name:"Standalone/Elementor",data(){return{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"}},render:()=>v(p)});return o=I(o),o=C(o),o=D(o),o.use(i),i.app=o,O(o,i),q(),o.mount(`${e} > div`),h(),o},y=()=>{F(window),V(window),j(window)};window.elementor&&(setTimeout(y),w=!0);(function(e){w||e(window).on("elementor:init",()=>{window.elementor.on("panel:init",()=>{setTimeout(y)})})})(window.jQuery);
