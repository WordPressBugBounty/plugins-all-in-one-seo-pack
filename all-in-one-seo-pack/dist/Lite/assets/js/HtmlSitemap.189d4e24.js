import{G as w}from"./constants.24c44c43.js";import{b as M,u as H,h as R,l as x}from"./index.ae2b6956.js";import{u as G}from"./Widgets.60d52f8c.js";import{B as N}from"./Checkbox.6db0b9ed.js";import{B as I}from"./RadioToggle.333e7750.js";import{C as z}from"./Card.109b77eb.js";import{C as E}from"./ExcludePosts.26587032.js";import{C as F}from"./PostTypeOptions.ea1ca999.js";import{C as W}from"./SettingsRow.9f92e269.js";import{C as q,b as K,c as j,e as J,d as Q}from"./Caret.d9cc70ba.js";import{C as X}from"./Index.b585cb78.js";import{C as Y}from"./Tooltip.73441134.js";import{S as Z}from"./External.c9d4f255.js";import{e as $}from"./index.8c70464a.js";import"./translations.d159963e.js";import{_ as B}from"./_plugin-vue_export-helper.eefbdd86.js";import{_ as t,s as b}from"./default-i18n.20001971.js";import{v as r,o as c,k as g,l as n,C as a,a as p,t as u,c as P,b as m,F as ee,G as te,x as f}from"./runtime-dom.esm-bundler.5c3c7d72.js";import"./helpers.c7282833.js";import"./Checkmark.e40641dd.js";import"./Slide.39c07c03.js";import"./JsonValues.3fcfec97.js";import"./AddPlus.a3345fdc.js";import"./PostTypes.dafa8837.js";import"./HighlightToggle.3168783f.js";import"./Radio.7b47f2fa.js";import"./Row.df38a5f6.js";import"./CheckSolid.a0a6d7e0.js";const S="all-in-one-seo-pack",oe={setup(){return{optionsStore:M(),rootStore:H()}},components:{CoreAlert:q,CoreUiElementSlider:X,CoreLoader:K,CoreTooltip:Y,SvgCircleCheck:j,SvgCircleClose:J,SvgExternal:Z,SvgFile:$},props:{displayOptions:{type:Object,required:!0},url:{type:String}},data(){return{pageUrl:"",currentPageUrl:"",buttonLocked:!0,error:!1,isLoading:!1,showResults:!1,showAdvancedSettings:!1,strings:{label:t("Display HTML Sitemap",S),page:t("Dedicated Page",S),placeholder:b(t("e.g. %1$s",S),`${this.rootStore.aioseo.urls.home}/new-page`),pageButton:t("Open HTML Sitemap",S),errorMessage:t("The page that you have entered is invalid or already exists. Please enter a page with a unique slug.",S),errorMessageDisabled:b(t('Dedicated HTML Sitemaps do not work while using "plain" permalinks. Please update your %1$spermalink structure%2$s to use this option.',S),'<a href="'+this.rootStore.aioseo.urls.home+'/wp-admin/options-permalink.php">',"</a>"),editAndSaveFirst:t("To view the sitemap, enter a URL and save changes.",S),saveFirst:t("To view the new sitemap, first save changes.",S)}}},computed:{sitemapButtonDisabled(){return this.pageUrl?this.strings.saveFirst:this.strings.editAndSaveFirst},dedicatedPageDisabled(){return this.rootStore.aioseo.data.permalinkStructure===""}},methods:{addSiteUrl(){this.pageUrl&&!this.pageUrl.startsWith(`http://${this.rootStore.aioseo.urls.domain}`)&&!this.pageUrl.startsWith(`https://${this.rootStore.aioseo.urls.domain}`)&&(this.pageUrl=this.rootStore.aioseo.data.isSsl?`https://${this.rootStore.aioseo.urls.domain}/${this.pageUrl}`:`http://${this.rootStore.aioseo.urls.domain}/${this.pageUrl}`)},validateNewSlug(h){if(this.pageUrl=h.target.value,!this.pageUrl){this.optionsStore.options.sitemap.html.pageUrl="";return}if(this.currentPageUrl===this.pageUrl){this.buttonLocked=!1,this.error=!1;return}else this.buttonLocked=!0;this.currentPageUrl=this.pageUrl,this.isLoading=!0,Q(()=>{if(/\s/.test(this.pageUrl)){this.error=!0,this.isLoading=!1;return}R.post(x.restUrl("sitemap/validate-html-sitemap-slug")).send({pageUrl:this.pageUrl}).then(i=>{i.body.exists?(this.error=!0,this.showResults=!0):(this.error=!1,this.optionsStore.options.sitemap.html.pageUrl=this.pageUrl),this.isLoading=!1}).catch(()=>{this.error=!0,this.isLoading=!1})},500)},processChangesSaved(){if(!this.pageUrl){this.buttonLocked=!0;return}this.currentPageUrl=this.pageUrl,this.buttonLocked=!1}},created(){this.pageUrl=this.dedicatedPageDisabled?"":this.optionsStore.options.sitemap.html.pageUrl,this.addSiteUrl(),this.pageUrl&&(this.buttonLocked=!1),window.aioseoBus.$on("changes-saved",()=>{this.processChangesSaved()})}},se={class:"new-page"},ie={class:"aioseo-row"},ae={class:"aioseo-col col-xs-12 text-xs-left"},ne=["innerHTML"],re={class:"aioseo-col col-xs-12 col-md-7 text-xs-left"},le={class:"append-icon"},pe={class:"aioseo-col col-xs-12 col-md-5 text-xs-left"},ce=["innerHTML"];function de(h,i,A,s,e,d){const D=r("svg-file"),_=r("svg-circle-close"),C=r("svg-circle-check"),v=r("core-loader"),L=r("base-input"),y=r("svg-external"),T=r("base-button"),U=r("core-tooltip"),k=r("core-alert"),l=r("core-ui-element-slider");return c(),g(l,{label:e.strings.label,options:A.displayOptions,url:A.url},{extra:n(()=>[a(D),p("p",null,u(e.strings.page),1)]),extraBox:n(({item:V})=>[p("div",se,[p("div",ie,[p("div",ae,[V.desc?(c(),P("div",{key:0,class:"aioseo-description",innerHTML:V.desc},null,8,ne)):m("",!0)]),p("div",re,[a(L,{disabled:d.dedicatedPageDisabled,modelValue:e.pageUrl,"onUpdate:modelValue":i[0]||(i[0]=O=>e.pageUrl=O),onKeyup:d.validateNewSlug,onBlur:d.addSiteUrl,size:"medium",placeholder:e.strings.placeholder,onFocus:i[1]||(i[1]=O=>e.showResults=!0),class:te({"aioseo-error":e.error,"aioseo-active":!e.error&&e.pageUrl&&!d.dedicatedPageDisabled})},{"append-icon":n(()=>[p("div",le,[e.isLoading?m("",!0):(c(),P(ee,{key:0},[e.error?(c(),g(_,{key:0})):m("",!0),!e.error&&e.pageUrl&&!d.dedicatedPageDisabled?(c(),g(C,{key:1})):m("",!0)],64)),e.isLoading?(c(),g(v,{key:1,dark:""})):m("",!0)])]),_:1},8,["disabled","modelValue","onKeyup","onBlur","placeholder","class"])]),p("div",pe,[!e.pageUrl||e.buttonLocked||e.error||d.dedicatedPageDisabled?(c(),g(U,{key:0,type:"action",tag:"div"},{tooltip:n(()=>[f(u(d.sitemapButtonDisabled),1)]),default:n(()=>[a(T,{disabled:d.dedicatedPageDisabled,class:"aioseo-html-sitemaps-disabled-button",size:"medium",type:"blue",tag:"button"},{default:n(()=>[a(y),f(" "+u(e.strings.pageButton),1)]),_:1},8,["disabled"])]),_:1})):m("",!0),e.pageUrl&&!e.buttonLocked&&!e.error&&!d.dedicatedPageDisabled?(c(),g(T,{key:1,size:"medium",type:"blue",tag:"a",href:e.pageUrl,target:"_blank"},{default:n(()=>[a(y),f(" "+u(e.strings.pageButton),1)]),_:1},8,["href"])):m("",!0)]),e.showResults&&e.error||d.dedicatedPageDisabled?(c(),g(k,{key:0,type:d.dedicatedPageDisabled?"yellow":"red",size:"medium"},{default:n(()=>[p("span",{innerHTML:d.dedicatedPageDisabled?e.strings.errorMessageDisabled:e.strings.errorMessage},null,8,ce)]),_:1},8,["type"])):m("",!0)])])]),_:1},8,["label","options","url"])}const me=B(oe,[["render",de]]),o="all-in-one-seo-pack",ue={setup(){const{strings:h}=G({name:"htmlSitemap"});return{optionsStore:M(),composableStrings:h,GLOBAL_STRINGS:w,links:x}},components:{BaseCheckbox:N,BaseRadioToggle:I,CoreCard:z,CoreExcludePosts:E,CorePostTypeOptions:F,CoreSettingsRow:W,HtmlSitemapDisplayInfo:me},data(){const h=[{name:"post_types",description:t("The post types (by slug, comma-separated) that are included in the sitemap.",o)},{name:"taxonomies",description:t("The taxonomies (by slug, comma-separated) that are included in the sitemap.",o)},{name:"label_tag",description:b(t("The HTML tag that is used for the label of each section. Defaults to %1$s.",o),"<code>h4</code>")},{name:"show_label",description:b(t("Whether the labels should be shown or not. Defaults to %1$s.",o),"<code>true</code>")},{name:"publication_date",description:t("Whether the publication date of posts should be shown.",o)},{name:"archives",description:t("Whether the regular sitemap or compact date archive sitemap is output.",o)},{name:"order",description:b(t("The sort direction. The supported values are %1$s and %2$s.",o),"<code>ASC</code>","<code>DESC</code>")},{name:"order_by",description:b(t("The sort order. The supported values are %1$s, %2$s, %3$s and %4$s.",o),"<code>publish_date</code>","<code>last_updated</code>","<code>alphabetical</code>","<code>id</code>")}];return{sortOrders:[{label:t("Publish Date",o),value:"publish_date"},{label:t("Last Updated Date",o),value:"last_updated"},{label:t("Alphabetical",o),value:"alphabetical"},{label:t("Post/Term ID",o),value:"id"}],sortDirections:[{label:t("Ascending",o),value:"asc"},{label:t("Descending",o),value:"desc"}],displayOptions:{extra:{desc:t("Display the sitemap on a dedicated page:",o)},block:{copy:"",desc:b(t('To add this block, edit a page or post and search for the %1$s"%2$s - HTML Sitemap"%3$s block.',o),"<strong>","AIOSEO","</strong>")},shortcode:{copy:"[aioseo_html_sitemap]",desc:b(t("Use the following shortcode to display the HTML Sitemap. %1$s",o),x.getDocLink(w.learnMore,"htmlSitemapShortcode",!0)),hasAdvanced:!0,attributes:h,attributesDescription:t("The following shortcode attributes can be used to override the default settings:",o)},widget:{copy:"",desc:this.composableStrings.visitWidgetsPage},php:{copy:"<?php if( function_exists( 'aioseo_html_sitemap' ) ) aioseo_html_sitemap(); ?>",desc:b(t("Use the following PHP code anywhere in your theme to display the sitemap. %1$s",o),x.getDocLink(w.learnMore,"htmlSitemapFunction",!0)),hasAdvanced:!0,attributes:h,attributesDescription:t("The function accepts an associative array with the following arguments that can be used to override the default settings:",o)}},strings:{title:t("HTML Sitemap",o),enableSitemap:t("Enable Sitemap",o),settings:t("HTML Sitemap Settings",o),description:t("Using the custom-built tools below, you can add an HTML sitemap to your website and help visitors discover all your content. Adding an HTML sitemap to your website may also help search engines find your content more easily.",o),displayLabel:t("Display HTML Sitemap",o),postTypes:t("Post Types",o),taxonomies:t("Taxonomies",o),includeAllPostTypes:t("Include All Post Types",o),selectPostTypes:t("Select which Post Types appear in your sitemap.",o),includeAllTaxonomies:t("Include All Taxonomies",o),selectTaxonomies:t("Select which Taxonomies appear in your sitemap.",o),sortOrder:t("Sort Order",o),sortDirection:t("Sort Direction",o),publicationDate:t("Publication Date",o),publicationDateDescription:t("This setting only applies to posts and pages.",o),compactArchives:t("Compact Archives",o),compactArchivesDescription:b(t("This setting allows you to toggle between the regular sitemap or the compact date archive sitemap. %1$s",o),x.getDocLink(w.learnMore,"htmlSitemapCompactArchives",!0)),advancedSettings:t("Advanced Settings",o),excludePostsPages:t("Exclude Posts / Pages",o),excludeTerms:t("Exclude Terms",o)}}},methods:{getSortOrder(h){return this.sortOrders.find(i=>i.value===h)},getSortDirection(h){return this.sortDirections.find(i=>i.value===h)}}},he={class:"aioseo-html-sitemap"},ge={class:"aioseo-settings-row aioseo-section-description"},_e=["innerHTML"],be={class:"aioseo-description"},Se={class:"aioseo-description"},fe={class:"aioseo-description"},ve=["innerHTML"],ye={key:0};function Te(h,i,A,s,e,d){const D=r("base-toggle"),_=r("core-settings-row"),C=r("html-sitemap-display-info"),v=r("core-card"),L=r("base-checkbox"),y=r("core-post-type-options"),T=r("base-select"),U=r("base-radio-toggle"),k=r("core-exclude-posts");return c(),P("div",he,[a(v,{slug:"htmlSitemap"},{header:n(()=>[p("span",null,u(e.strings.title),1)]),default:n(()=>[p("div",ge,[f(u(e.strings.description)+" ",1),p("span",{innerHTML:s.links.getDocLink(s.GLOBAL_STRINGS.learnMore,"htmlSitemap",!0)},null,8,_e)]),a(_,{name:e.strings.enableSitemap},{content:n(()=>[a(D,{modelValue:s.optionsStore.options.sitemap.html.enable,"onUpdate:modelValue":i[0]||(i[0]=l=>s.optionsStore.options.sitemap.html.enable=l)},null,8,["modelValue"])]),_:1},8,["name"]),s.optionsStore.options.sitemap.html.enable?(c(),g(C,{key:0,label:e.strings.displayLabel,displayOptions:e.displayOptions,url:s.optionsStore.options.sitemap.html.pageUrl},null,8,["label","displayOptions","url"])):m("",!0)]),_:1}),s.optionsStore.options.sitemap.html.enable?(c(),g(v,{key:0,class:"aioseo-html-sitemap-settings",slug:"htmlSitemapSettings"},{header:n(()=>[p("span",null,u(e.strings.settings),1)]),default:n(()=>[a(_,{name:e.strings.postTypes},{content:n(()=>[a(L,{size:"medium",modelValue:s.optionsStore.options.sitemap.html.postTypes.all,"onUpdate:modelValue":i[1]||(i[1]=l=>s.optionsStore.options.sitemap.html.postTypes.all=l)},{default:n(()=>[f(u(e.strings.includeAllPostTypes),1)]),_:1},8,["modelValue"]),s.optionsStore.options.sitemap.html.postTypes.all?m("",!0):(c(),g(y,{key:0,options:s.optionsStore.options.sitemap.html,type:"postTypes",excluded:["attachment"]},null,8,["options"])),p("div",be,u(e.strings.selectPostTypes),1)]),_:1},8,["name"]),a(_,{name:e.strings.taxonomies},{content:n(()=>[a(L,{size:"medium",modelValue:s.optionsStore.options.sitemap.html.taxonomies.all,"onUpdate:modelValue":i[2]||(i[2]=l=>s.optionsStore.options.sitemap.html.taxonomies.all=l)},{default:n(()=>[f(u(e.strings.includeAllTaxonomies),1)]),_:1},8,["modelValue"]),s.optionsStore.options.sitemap.html.taxonomies.all?m("",!0):(c(),g(y,{key:0,options:s.optionsStore.options.sitemap.html,type:"taxonomies"},null,8,["options"])),p("div",Se,u(e.strings.selectTaxonomies),1)]),_:1},8,["name"]),a(_,{name:e.strings.sortOrder,class:"aioseo-sort-order",align:""},{content:n(()=>[a(T,{size:"medium",options:e.sortOrders,modelValue:d.getSortOrder(s.optionsStore.options.sitemap.html.sortOrder),"onUpdate:modelValue":i[3]||(i[3]=l=>s.optionsStore.options.sitemap.html.sortOrder=l.value)},null,8,["options","modelValue"])]),_:1},8,["name"]),a(_,{name:e.strings.sortDirection,class:"aioseo-sort-direction",align:""},{content:n(()=>[a(T,{size:"medium",options:e.sortDirections,modelValue:d.getSortDirection(s.optionsStore.options.sitemap.html.sortDirection),"onUpdate:modelValue":i[4]||(i[4]=l=>s.optionsStore.options.sitemap.html.sortDirection=l.value)},null,8,["options","modelValue"])]),_:1},8,["name"]),a(_,{name:e.strings.publicationDate,align:""},{content:n(()=>[a(U,{modelValue:s.optionsStore.options.sitemap.html.publicationDate,"onUpdate:modelValue":i[5]||(i[5]=l=>s.optionsStore.options.sitemap.html.publicationDate=l),name:"publicationDate",options:[{label:s.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:s.GLOBAL_STRINGS.show,value:!0}]},null,8,["modelValue","options"]),p("div",fe,u(e.strings.publicationDateDescription),1)]),_:1},8,["name"]),a(_,{name:e.strings.compactArchives,align:""},{content:n(()=>[a(U,{modelValue:s.optionsStore.options.sitemap.html.compactArchives,"onUpdate:modelValue":i[6]||(i[6]=l=>s.optionsStore.options.sitemap.html.compactArchives=l),name:"compactArchives",options:[{label:s.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:s.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),p("div",{class:"aioseo-description",innerHTML:e.strings.compactArchivesDescription},null,8,ve)]),_:1},8,["name"])]),_:1})):m("",!0),s.optionsStore.options.sitemap.html.enable?(c(),g(v,{key:1,slug:"htmlSitemapAdvancedSettings",toggles:s.optionsStore.options.sitemap.html.advancedSettings.enable},{header:n(()=>[a(D,{modelValue:s.optionsStore.options.sitemap.html.advancedSettings.enable,"onUpdate:modelValue":i[7]||(i[7]=l=>s.optionsStore.options.sitemap.html.advancedSettings.enable=l)},null,8,["modelValue"]),p("span",null,u(e.strings.advancedSettings),1)]),default:n(()=>[s.optionsStore.options.sitemap.html.advancedSettings.enable?(c(),P("div",ye,[a(_,{name:e.strings.excludePostsPages,class:"aioseo-exclude-pages-posts",align:""},{content:n(()=>[a(k,{options:s.optionsStore.options.sitemap.html.advancedSettings,type:"posts"},null,8,["options"])]),_:1},8,["name"]),a(_,{name:e.strings.excludeTerms,class:"aioseo-exclude-terms",align:""},{content:n(()=>[a(k,{options:s.optionsStore.options.sitemap.html.advancedSettings,type:"terms"},null,8,["options"])]),_:1},8,["name"])])):m("",!0)]),_:1},8,["toggles"])):m("",!0)])}const Ye=B(ue,[["render",Te]]);export{Ye as default};
