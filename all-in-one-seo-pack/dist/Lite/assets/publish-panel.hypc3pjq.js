import{v as P,o as c,c as l,a as n,F as Z,J as j,k as G,G as U,q as K,x as V,t as m,C as b,b as f,Y as ue}from"./js/runtime-dom.esm-bundler.h3clfjuw.js";import{l as de}from"./js/index.njux2kgl.js";import{l as pe}from"./js/index.cw7tfyil.js";import{l as me}from"./js/index.moogjen0.js";import{j as ge,C as he,f as fe,b as H,W as _e,J as ve,U as Se,o as J,u as be}from"./js/index.lqcu3hi3.js";import{a as ye}from"./js/allowed.cnz2h8ma.js";import{t as q,V as Pe,v as we}from"./js/cleanForSlug.etvx808q.js";import{u as xe}from"./js/Image.mh6vskkn.js";import{u as Ee}from"./js/Tags.lgcgntse.js";import{C as ke}from"./js/GoogleSearchPreview.iw4vtoyb.js";import{c as Ae,d as Ce,e as Te}from"./js/Caret.g6s6s7gs.js";import{S as Re}from"./js/Exclamation.f0pmbpi9.js";import{S as Oe}from"./js/External.h5te4wqm.js";import"./js/translations.e22mvhfh.js";import{_}from"./js/_plugin-vue_export-helper.oebm7xum.js";import{_ as r,s as Ie,a as Me}from"./js/default-i18n.bz7purh4.js";import{S as Ue}from"./js/Twitter.k05mazyy.js";import{l as Ve}from"./js/loadTruSeo.bfwei00d.js";import{e as Le}from"./js/elemLoaded.f718isk5.js";import{u as De}from"./js/upperFirst.d9alxexs.js";import"./js/constants.dnzd2kuo.js";function $e(e){return De(q(e).toLowerCase())}function ze(e,t,s,o){for(var a=-1,p=e==null?0:e.length;++a<p;)s=t(s,e[a],a,e);return s}var Be=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Ne(e){return e.match(Be)||[]}var Fe=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function We(e){return Fe.test(e)}var Y="\\ud800-\\udfff",Ze="\\u0300-\\u036f",je="\\ufe20-\\ufe2f",Ge="\\u20d0-\\u20ff",Ke=Ze+je+Ge,Q="\\u2700-\\u27bf",X="a-z\\xdf-\\xf6\\xf8-\\xff",He="\\xac\\xb1\\xd7\\xf7",Je="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",qe="\\u2000-\\u206f",Ye=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ee="A-Z\\xc0-\\xd6\\xd8-\\xde",Qe="\\ufe0e\\ufe0f",te=He+Je+qe+Ye,se="['’]",L="["+te+"]",Xe="["+Ke+"]",oe="\\d+",et="["+Q+"]",re="["+X+"]",ne="[^"+Y+te+oe+Q+X+ee+"]",tt="\\ud83c[\\udffb-\\udfff]",st="(?:"+Xe+"|"+tt+")",ot="[^"+Y+"]",ie="(?:\\ud83c[\\udde6-\\uddff]){2}",ae="[\\ud800-\\udbff][\\udc00-\\udfff]",h="["+ee+"]",rt="\\u200d",D="(?:"+re+"|"+ne+")",nt="(?:"+h+"|"+ne+")",$="(?:"+se+"(?:d|ll|m|re|s|t|ve))?",z="(?:"+se+"(?:D|LL|M|RE|S|T|VE))?",ce=st+"?",le="["+Qe+"]?",it="(?:"+rt+"(?:"+[ot,ie,ae].join("|")+")"+le+ce+")*",at="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ct="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",lt=le+ce+it,ut="(?:"+[et,ie,ae].join("|")+")"+lt,dt=RegExp([h+"?"+re+"+"+$+"(?="+[L,h,"$"].join("|")+")",nt+"+"+z+"(?="+[L,h+D,"$"].join("|")+")",h+"?"+D+"+"+$,h+"+"+z,ct,at,oe,ut].join("|"),"g");function pt(e){return e.match(dt)||[]}function mt(e,t,s){return e=q(e),t=t,t===void 0?We(e)?pt(e):Ne(e):e.match(t)||[]}var gt="['’]",ht=RegExp(gt,"g");function ft(e){return function(t){return ze(mt(Pe(t).replace(ht,"")),e,"")}}var B=ft(function(e,t,s){return t=t.toLowerCase(),e+(s?$e(t):t)});const i="all-in-one-seo-pack",_t={setup(){const{imageUrl:e,setImageUrl:t}=xe(),{parseTags:s}=Ee({separator:void 0});return{imageUrl:e,optionsStore:ge(),parseTags:s,postEditorStore:he(),setImageUrl:t,settingsStore:fe(),tagsStore:H()}},components:{CoreGoogleSearchPreview:ke,SvgCircleCheck:Ae,SvgCircleClose:Ce,SvgCircleExclamation:Re,SvgExternal:Oe,SvgPencil:Te},data(){return{allowed:ye,socialImage:null,socialImageKey:0,strings:{serpPreview:r("SERP Preview",i),canonicalUrl:r("Canonical URL",i)}}},computed:{tips(){let e=[{label:r("Visibility",i),name:"visibility",access:"aioseo_page_advanced_settings"},{label:r("SEO Analysis",i),name:"seoAnalysis",access:"aioseo_page_analysis"},{label:r("Readability",i),name:"readabilityAnalysis",access:"aioseo_page_analysis"},{label:r("Focus Keyphrase",i),name:"focusKeyphrase",access:"aioseo_page_analysis"},{label:r("Social",i),name:"social",access:"aioseo_page_social_settings"}].filter(t=>this.allowed(t.access)&&(t.access!=="aioseo_page_analysis"||_e()));return!this.optionsStore.options.social.facebook.general.enable&&!this.optionsStore.options.social.twitter.general.enable&&(e=e.filter(t=>t.name!=="social")),e.forEach((t,s)=>{e[s]={...t,...this.getData(t.name)}}),e},canImprove(){return this.tips.some(e=>e.type==="error")}},methods:{getIcon(e){switch(e){case"error":return"svg-circle-close";case"warning":return"svg-circle-exclamation";case"success":default:return"svg-circle-check"}},getData(e){const t={};if(e==="visibility"&&(t.value=r("Good!",i),t.type="success",(this.postEditorStore.currentPost.default?this.optionsStore.dynamicOptions.searchAppearance.postTypes[this.postEditorStore.currentPost.postType]&&!this.optionsStore.dynamicOptions.searchAppearance.postTypes[this.postEditorStore.currentPost.postType].advanced.robotsMeta.default&&this.optionsStore.dynamicOptions.searchAppearance.postTypes[this.postEditorStore.currentPost.postType].advanced.robotsMeta.noindex:this.postEditorStore.currentPost.noindex)&&(t.value=r("Blocked!",i),t.type="error")),e==="seoAnalysis"){t.value=r("N/A",i),t.type="error";const s=this.postEditorStore.currentPost.seo_score;Number.isInteger(s)&&(t.value=s+"/100",t.type=80<s?"success":50<s?"warning":"error")}if(e==="readabilityAnalysis"){t.value=r("Good!",i),t.type="success";const s=this.postEditorStore.currentPost.page_analysis.analysis.readability.errors;s&&0<s&&(t.value=Ie(Me("%1$s error found!","%1$s errors found!",s,i),s),t.type="error")}if(e==="focusKeyphrase"){t.value=r("No focus keyphrase!",i),t.type="error";const s=this.postEditorStore.currentPost.keyphrases.focus;s&&s.keyphrase&&(t.value=s.score+"/100",t.type=80<s.score?"success":50<s.score?"warning":"error")}if(e==="social"){t.value=r("Good!",i),t.type="success",this.socialImageKey;const s=this.parseTags(this.postEditorStore.currentPost.og_title||this.postEditorStore.currentPost.title||this.postEditorStore.currentPost.tags.title).trim(),o=this.parseTags(this.postEditorStore.currentPost.og_description||this.postEditorStore.currentPost.description||this.postEditorStore.currentPost.tags.description).trim(),a=this.socialImage;(!s||!o||!a)&&(t.value=r("Missing social markup!",i),t.type="error")}return{...t,icon:this.getIcon(t.type)}},openSidebar(e){const{openGeneralSidebar:t}=window.wp.data.dispatch("core/edit-post"),{closePublishSidebar:s}=window.wp.data.dispatch(we(window.aioseo.wpVersion,"6.6","<")?"core/edit-post":"core/editor");s(),t("aioseo-post-settings-sidebar/aioseo-post-settings-sidebar");const o={};switch(e){case"canonical":case"visibility":o.tab="advanced";break;case"seoAnalysis":o.tab="general",o.card="basicseo";break;case"readabilityAnalysis":o.tab="general",o.card="readability";break;case"focusKeyphrase":o.tab="general",o.card="focus";break;case"social":o.tab="social";break}this.settingsStore.changeTabSettings({setting:"mainSidebar",value:o})}},async mounted(){await this.setImageUrl().then(()=>{this.socialImage=this.imageUrl}),window.aioseoBus.$on("updateSocialImagePreview",e=>{this.socialImage=e.image,this.socialImageKey++}),this.$nextTick(()=>{const e=document.querySelector(".aioseo-pre-publish .editor-post-publish-panel__link");e&&(e.innerHTML=this.canImprove?r("Your post needs improvement!",i):r("You're good to go!",i))})}},vt={key:0,class:"seo-overview"},St={class:"pre-publish-checklist"},bt={class:"icon"},yt=["onClick"],Pt={key:0,class:"snippet-preview"},wt={class:"title"},xt={key:1,class:"canonical-url"},Et={class:"title"},kt=["href"];function At(e,t,s,o,a,p){const d=P("svg-pencil"),g=P("core-google-search-preview"),v=P("svg-external");return o.postEditorStore.currentPost.id?(c(),l("div",vt,[n("ul",St,[(c(!0),l(Z,null,j(p.tips,(u,S)=>(c(),l("li",{key:S},[n("span",bt,[(c(),G(K(u.icon),{class:U(u.type)},null,8,["class"]))]),n("span",null,[V(m(u.label)+": ",1),n("span",{class:U(["result",u.value.endsWith("/100")?u.type:null])},m(u.value),3)]),o.optionsStore.dynamicOptions.searchAppearance.postTypes[o.postEditorStore.currentPost.postType]&&o.optionsStore.dynamicOptions.searchAppearance.postTypes[o.postEditorStore.currentPost.postType].advanced.showMetaBox?(c(),l("span",{key:0,class:"edit",onClick:y=>p.openSidebar(u.name)},[b(d)],8,yt)):f("",!0)]))),128))]),a.allowed("aioseo_page_analysis")?(c(),l("div",Pt,[n("p",wt,m(a.strings.serpPreview)+":",1),b(g,{url:o.tagsStore.liveTags.permalink,title:o.parseTags(o.postEditorStore.currentPost.title||o.postEditorStore.currentPost.tags.title||"#post_title #separator_sa #site_title"),description:o.parseTags(o.postEditorStore.currentPost.description||o.postEditorStore.currentPost.tags.description||"#post_content")},null,8,["url","title","description"])])):f("",!0),a.allowed("aioseo_page_analysis")&&o.postEditorStore.currentPost.canonicalUrl?(c(),l("div",xt,[n("p",Et,[V(m(a.strings.canonicalUrl)+": ",1),n("span",{class:"edit",onClick:t[0]||(t[0]=u=>p.openSidebar("canonical"))},[b(d)])]),n("a",{href:o.postEditorStore.currentPost.canonicalUrl,target:"_blank",rel:"noopener noreferrer"},[n("span",null,m(o.postEditorStore.currentPost.canonicalUrl),1),b(v)],8,kt)])):f("",!0)])):f("",!0)}const N=_(_t,[["render",At]]),Ct={},Tt={width:"32",height:"32",fill:"none",class:"aioseo-facebook-rounded",xmlns:"http://www.w3.org/2000/svg"},Rt=n("circle",{cx:"16",cy:"16",r:"16",fill:"currentColor"},null,-1),Ot=n("path",{d:"M24 16c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4 2.9 7.3 6.7 7.9v-5.6h-2V16h2v-1.8c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V16h2.2l-.4 2.3h-1.9V24c4-.6 6.9-4 6.9-8z",fill:"#fff"},null,-1),It=[Rt,Ot];function Mt(e,t){return c(),l("svg",Tt,It)}const Ut=_(Ct,[["render",Mt]]),Vt={},Lt={width:"32",height:"32",fill:"none",class:"aioseo-linkedin-rounded",xmlns:"http://www.w3.org/2000/svg"},Dt=n("circle",{cx:"16",cy:"16",r:"16",fill:"currentColor"},null,-1),$t=n("path",{d:"M11.6 24H8.2V13.3h3.4V24zM9.9 11.8C8.8 11.8 8 11 8 9.9 8 8.8 8.9 8 9.9 8c1.1 0 1.9.8 1.9 1.9 0 1.1-.8 1.9-1.9 1.9zM24 24h-3.4v-5.8c0-1.7-.7-2.2-1.7-2.2s-2 .8-2 2.3V24h-3.4V13.3h3.2v1.5c.3-.7 1.5-1.8 3.2-1.8 1.9 0 3.9 1.1 3.9 4.4V24h.2z",fill:"#fff"},null,-1),zt=[Dt,$t];function Bt(e,t){return c(),l("svg",Lt,zt)}const Nt=_(Vt,[["render",Bt]]),Ft={},Wt={width:"32",height:"32",fill:"none",class:"aioseo-pinterest-rounded",xmlns:"http://www.w3.org/2000/svg"},Zt=n("circle",{cx:"16",cy:"16",r:"16",fill:"currentColor"},null,-1),jt=n("path",{d:"M16.056 6.583c-5.312 0-9.658 4.346-9.658 9.658a9.581 9.581 0 005.795 8.813c0-.724 0-1.448.12-2.173.242-.845 1.207-5.312 1.207-5.312s-.362-.604-.362-1.57c0-1.448.846-2.535 1.811-2.535.845 0 1.328.604 1.328 1.45 0 .844-.603 2.172-.845 3.38-.241.965.483 1.81 1.57 1.81 1.81 0 3.018-2.293 3.018-5.19 0-2.174-1.449-3.743-3.984-3.743-2.898 0-4.709 2.173-4.709 4.587 0 .845.242 1.449.604 1.932.12.241.242.241.12.483 0 .12-.12.603-.24.724-.121.242-.242.362-.483.242-1.329-.604-1.932-2.053-1.932-3.743 0-2.777 2.294-6.036 6.881-6.036 3.743 0 6.157 2.656 6.157 5.553 0 3.743-2.052 6.64-5.19 6.64-1.087 0-2.053-.603-2.415-1.207 0 0-.604 2.173-.725 2.656a10.702 10.702 0 01-.966 2.052c.846.242 1.811.363 2.777.363 5.312 0 9.658-4.347 9.658-9.659.121-4.829-4.225-9.175-9.537-9.175z",fill:"#fff"},null,-1),Gt=[Zt,jt];function Kt(e,t){return c(),l("svg",Wt,Gt)}const Ht=_(Ft,[["render",Kt]]),F="all-in-one-seo-pack",Jt={setup(){return{tagsStore:H()}},components:{SvgFacebookRounded:Ut,SvgLinkedinRounded:Nt,SvgPinterestRounded:Ht,SvgIconTwitter:Ue},data(){return{strings:{title:r("Get out the word!",F),description:r("Share your content on your favorite social media platforms to drive engagement and increase your SEO.",F)}}},computed:{socialNetworks(){return[{icon:"svg-icon-twitter",link:"https://x.com/share?url="},{icon:"svg-facebook-rounded",link:"https://www.facebook.com/sharer/sharer.php?u="},{icon:"svg-pinterest-rounded",link:"https://pinterest.com/pin/create/button/?url="},{icon:"svg-linkedin-rounded",link:"https://www.linkedin.com/shareArticle?url="}].map(e=>({...e,link:e.link+this.tagsStore.liveTags.permalink}))}}},qt={key:0,class:"aioseo-post-publish"},Yt={class:"title"},Qt={class:"description"},Xt={class:"links"},es=["href"];function ts(e,t,s,o,a,p){return o.tagsStore.liveTags.permalink?(c(),l("div",qt,[n("h2",Yt,m(a.strings.title),1),n("p",Qt,m(a.strings.description),1),n("div",Xt,[(c(!0),l(Z,null,j(p.socialNetworks,(d,g)=>(c(),l("a",{class:"link",target:"_blank",key:g,href:d.link},[(c(),G(K(d.icon)))],8,es))),128))])])):f("",!0)}const ss=_(Jt,[["render",ts]]);(function(e){var g,v,u,S,y,w,x,E,k,A,C,T,R,O,I,M;if(!ve()||!Se()||!((v=(g=window.wp)==null?void 0:g.editor)!=null&&v.PluginDocumentSettingPanel)&&!((S=(u=window.wp)==null?void 0:u.editPost)!=null&&S.PluginDocumentSettingPanel))return;const t=((w=(y=window==null?void 0:window.wp)==null?void 0:y.editor)==null?void 0:w.PluginDocumentSettingPanel)||((E=(x=window.wp)==null?void 0:x.editPost)==null?void 0:E.PluginDocumentSettingPanel),s=((A=(k=window==null?void 0:window.wp)==null?void 0:k.editor)==null?void 0:A.PluginPrePublishPanel)||((T=(C=window.wp)==null?void 0:C.editPost)==null?void 0:T.PluginPrePublishPanel),o=((O=(R=window==null?void 0:window.wp)==null?void 0:R.editor)==null?void 0:O.PluginPostPublishPanel)||((M=(I=window.wp)==null?void 0:I.editPost)==null?void 0:M.PluginPostPublishPanel),a=e.plugins.registerPlugin;J();const d=be().aioseo.user;!d.capabilities.aioseo_page_analysis&&!d.capabilities.aioseo_page_general_settings&&!d.capabilities.aioseo_page_advanced_settings||a("aioseo-publish-panel",{render:()=>e.element.createElement(e.element.Fragment,{},e.element.createElement(t,{title:"AIOSEO",className:"aioseo-document-setting aioseo-seo-overview",icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-document-setting"}))),e.element.createElement(s,{title:["AIOSEO",":",e.element.createElement("span",{key:"scoreDescription",className:"editor-post-publish-panel__link"})],className:"aioseo-pre-publish aioseo-seo-overview",initialOpen:!0,icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-pre-publish"}))),e.element.createElement(o,{title:"AIOSEO",initialOpen:!0,icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-post-publish"}))))})})(window.wp);const W=e=>{let t=ue({...e.component,name:"Standalone/PublishPanel"});return t=de(t),t=pe(t),t=me(t),J(t),t.mount("#"+e.id),window.addEventListener("load",()=>{Ve(t,!1)}),t};window.aioseo.currentPost&&window.aioseo.currentPost.context==="post"&&[{id:"aioseo-pre-publish",component:N},{id:"aioseo-document-setting",component:N},{id:"aioseo-post-publish",component:ss}].forEach(t=>{document.getElementById(t.id)?W(t):(Le("#"+t.id,B(t.id)),document.addEventListener("animationstart",function(s){B(t.id)===s.animationName&&W(t)},{passive:!0}))});
