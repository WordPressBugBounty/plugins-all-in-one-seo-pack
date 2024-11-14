import{u as T,b as I,l as R}from"./index.20192476.js";import U from"./BadBotBlocker.9c81ac4f.js";import{C as Y}from"./Index.86e580cc.js";import H from"./DatabaseTools.4f94d8aa.js";import{C as W,S as z}from"./Caret.662da1f3.js";import{C as K}from"./Card.46af096e.js";import{C as P}from"./Tabs.2fd33524.js";import{C as F}from"./Index.de83b4aa.js";import{C as G}from"./Upload.ec51a970.js";import{C as q}from"./SettingsRow.1934f141.js";import{B as J}from"./Checkbox.e983780b.js";import{G as j,a as Q}from"./Row.f01f32cd.js";import"./translations.12335a6a.js";import{_ as v}from"./_plugin-vue_export-helper.249dac1d.js";import{_ as f,s as k}from"./default-i18n.54b5d8cd.js";import{v as a,o as i,c as h,C as p,l as u,F as L,J as x,k as g,x as w,t as m,a as d,b as y,u as B,q as M,E as X}from"./runtime-dom.esm-bundler.6789c400.js";import{D as Z}from"./datetime.cb3980ce.js";import{u as E}from"./ToolsStore.75499a6c.js";import ee from"./HtaccessEditor.240be0fd.js";import oe from"./ImportExport.bfce6715.js";import te from"./RobotsEditor.d178d5ce.js";import se from"./SystemStatus.57ce77a9.js";import ne from"./WpCode.fd825816.js";import"./helpers.f95d5840.js";import"./Textarea.5ebf7ab2.js";import"./Tooltip.b6b45c85.js";import"./index.ee8124c6.js";import"./Slide.d0517fb0.js";import"./vue-router.fc4966b9.js";import"./license.37048367.js";import"./upperFirst.96c04516.js";import"./_stringToArray.08127ca9.js";import"./toString.1401d490.js";import"./allowed.f428d9c9.js";/* empty css             */import"./params.764403f6.js";import"./Header.b89e033a.js";import"./addons.9d0af6ad.js";import"./LicenseKeyBar.4ba21094.js";import"./ScrollTo.97c9805f.js";import"./LogoGear.29bd352d.js";import"./AnimatedNumber.66005608.js";import"./numbers.b55b32c5.js";import"./Logo.f6ea28bf.js";import"./Support.9384b810.js";import"./date.839db266.js";import"./constants.2019bcb3.js";import"./Url.0ccd8549.js";import"./Exclamation.bf79561a.js";import"./Gear.1433c8c3.js";import"./Network.641df61c.js";import"./ToolsSettings.db79754c.js";import"./Checkmark.32f79576.js";import"./Blur.31bfcf06.js";import"./Index.c0a0a208.js";import"./RequiredPlans.7629fd28.js";import"./ProBadge.7733ac87.js";import"./Information.82968754.js";import"./Editor.5a453aa4.js";import"./isEqual.51bf23f5.js";import"./_baseIsEqual.6bc92395.js";import"./_getTag.8dc22eac.js";import"./_baseClone.e959332d.js";import"./_arrayEach.f4f00336.js";import"./Plus.c3a1a43f.js";import"./History.4e6093cb.js";import"./Refresh.69fd46ba.js";import"./Radio.e92f8160.js";import"./Download.6a0d8455.js";import"./regex.f8017116.js";import"./vuedraggable.umd.4c22b181.js";import"./Ellipse.c57f22ea.js";import"./External.c84e4310.js";import"./Row.2d496066.js";const ie="all-in-one-seo-pack",re={emits:["update"],setup(){return{rootStore:T()}},components:{BaseCheckbox:J,GridColumn:j,GridRow:Q},props:{loading:Boolean,disabled:Boolean},data(){return{options:{},strings:{updateOptions:f("Update Options",ie)}}},mounted(){this.rootStore.aioseo.deprecatedOptions.forEach(o=>{o.enabled&&(this.options[o.value]=!0)})}},ae={class:"aioseo-deprecated-options"},le=d("br",null,null,-1),ce=d("br",null,null,-1),de=d("br",null,null,-1);function ue(o,t,s,l,e,r){const c=a("base-checkbox"),_=a("grid-column"),A=a("grid-row"),S=a("base-button");return i(),h("div",ae,[p(A,{class:"settings"},{default:u(()=>[(i(!0),h(L,null,x(l.rootStore.aioseo.deprecatedOptions,(b,C)=>(i(),g(_,{key:C,xl:"6",sm:"12"},{default:u(()=>[p(c,{size:"medium",modelValue:e.options[b.value],"onUpdate:modelValue":D=>e.options[b.value]=D,disabled:s.disabled},{default:u(()=>[w(m(b.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024))),128))]),_:1}),le,p(S,{type:"blue",size:"medium",onClick:t[0]||(t[0]=b=>o.$emit("update",e.options)),loading:s.loading,disabled:s.disabled},{default:u(()=>[w(m(e.strings.updateOptions),1)]),_:1},8,["loading","disabled"]),ce,de])}const pe=v(re,[["render",ue]]),me={setup(){return{optionsStore:I()}},computed:{infoItems(){return[{label:"Migrated Version",value:this.optionsStore.internalOptions.internal.migratedVersion},{label:"First Activated",value:this.optionsStore.internalOptions.internal.firstActivated!==0?Z.fromMillis(this.optionsStore.internalOptions.internal.firstActivated*1e3).toFormat("MMMM d, yyyy"):!1}]}}},he={class:"v3-migration-info aioseo-description"},ge={class:"info-items"},_e={key:0},be={key:1};function fe(o,t,s,l,e,r){return i(),h("div",he,[d("ul",ge,[(i(!0),h(L,null,x(r.infoItems,(c,_)=>(i(),h("li",{key:_},[c.value?(i(),h("span",_e,m(c.label),1)):y("",!0),c.value?(i(),h("span",be,m(c.value),1)):y("",!0)]))),128))])])}const we=v(me,[["render",fe]]),Ae={class:"aioseo-writing-assistant"},Se={__name:"WritingAssistant",setup(o){const t=E(),s="all-in-one-seo-pack",l={resetLogins:f("Reset SEOBoost Logins",s)};let e=!1;const r=()=>{confirm(f("Are you sure you want to reset SEOBoost logins?",s))&&(e=!0,t.doTask({action:"aioseo-reset-seoboost-logins"}).finally(()=>{alert(f("SEOBoost logins have been reset.",s)),e=!1}))};return(c,_)=>{const A=a("base-button");return i(),h("div",Ae,[p(A,{type:"blue",size:"medium",onClick:r,loading:B(e),disabled:B(e)},{default:u(()=>[w(m(l.resetLogins),1)]),_:1},8,["loading","disabled"])])}}},ke={setup(){return{rootStore:T(),toolsStore:E()}},components:{CoreAlert:W,CoreCard:K,CoreMainTabs:P,CoreModal:F,CoreNetworkSiteSelector:G,CoreSettingsRow:q,DeprecatedOptions:pe,MigrationInfo:we,WritingAssistant:Se,SvgClose:z},props:{extraActions:{type:Array,required:!1}},data(){return{site:{},tabsKey:0,doingActionKey:0,activeTab:"general",currentAction:"",showAreYouSureModal:!1,doingAction:[],strings:{selectSite:"Select Site",cardLabel:"Debug",selectLabel:"Select a Debug Action:",buttonLabel:"Run Action",alertWarning:"Before you run any action, please make sure that you have fully read the description and understand the consequences as these cannot be reverted.",cannotBeUndone:"This action cannot be undone.",yesDoAction:"Yes, run this action",noChangedMind:"No, I changed my mind"},alertLink:R.getPlainLink("Click here to open to the Scheduled Actions panel",this.rootStore.aioseo.urls.admin.scheduledActions,!0)}},computed:{areYouSureTitle(){return`Are you sure you want to run the "${this.currentAction.label}" action?`},tabs(){const o=k('<a href="%1$s" target="_blank">Scheduled Actions</a>',this.rootStore.aioseo.urls.admin.scheduledActions),t=this.rootStore.aioseo.data.isNetworkAdmin?"<br><strong>NOTE: If no site is selected, this will clear the network cache.</strong>":"",s=this.rootStore.aioseo.data.isNetworkAdmin?"<br><strong>NOTE: If no site is selected, this will clear the network plugin updates transient.</strong>":"";return[{slug:"general",name:"General",actions:[{label:"Clear Cache",slug:"clear-cache",shortDescription:`This action deletes all records of the <code>aioseo_cache</code> table in the database.${t}`,longDescription:"",showModal:!1,network:!0},{label:"Clear Plugin Updates Transient",slug:"clear-plugin-updates-transient",shortDescription:`This action clears the plugin updates transient, which forces WordPress Core to check for plugin updates.${s}`,longDescription:"",showModal:!1,network:!0},{label:"Readd Capabilities",slug:"readd-capabilities",shortDescription:"This action will readd our capabilities (access permissions) for all users.",longDescription:"",showModal:!1},{label:"Reset Data",slug:"reset-data",shortDescription:"This action will <strong>delete</strong> all our custom tables and options.",longDescription:"",showModal:!0}]},{slug:"sitemap",name:"Sitemap",actions:[{label:"Clear Image Data",slug:"clear-image-data",shortDescription:"This action removes all image data from the database, forcing a site-wide rescan via Action Scheduler.",longDescription:k("To speed up the image scan, go to %1$s and run the <code>aioseo_image_sitemap_scan</code> action.",o),showModal:!1}]},{slug:"migrations",name:"Migrations",actions:[{label:"Rerun V4+ Migrations",slug:"rerun-migrations",shortDescription:"This action will rerun all update migrations since 4.0.0, excluding the V3 migration.",longDescription:"",showModal:!0}]},{slug:"old-issues",name:"Old Issues",actions:[{label:"Remove Duplicates",slug:"remove-duplicates",shortDescription:"This action will delete any duplicate records that are found in the <code>aioseo_posts</code> and <code>aioseo_terms</code> tables.",longDescription:"",showModal:!1},{label:"Unescape Data",slug:"unescape-data",shortDescription:"This action will clean <code>aioseo_posts</code> and <code>aioseo_term</code> records whose data is corrupted.",longDescription:k("The action will trigger a routine which runs in batches via Action Scheduler. It may take some time for this routine to complete, To speed up this process, go to %1$s and run the <code>aioseo_unslash_escaped_data_posts</code> or <code>aioseo_unslash_escaped_data_terms</code> action.",o),showModal:!1}]},{slug:"deprecated-options",name:"Deprecated Options",actions:[{label:"Deprecated Options",slug:"deprecated-options",shortDescription:"Enable or disable any options that have been deprecated in AIOSEO.",longDescription:"<strong>These options are not guaranteed to work and all support has been dropped.</strong>",showModal:!1,component:"deprecated-options"}]},{slug:"writing-assistant",name:"Writing Assistant",actions:[{label:"Writing Assistant",slug:"writing-assistant",shortDescription:"Resets all users SEOBoost logins.",longDescription:"",showModal:!1,component:"writing-assistant"}]}]},activeTabObject(){return this.tabs.find(o=>o.slug===this.activeTab)}},methods:{isActionDisabled(o){return this.rootStore.aioseo.data.isNetworkAdmin?this.site.blog_id?this.site.blog_id==="network"&&o.network?!1:this.site.blog_id==="network"&&!o.network:!0:!1},isLoading(o){return!!this.doingAction[o.slug]},getSelectedActionObject(o){let t=null;return this.actions.forEach(s=>{const l=s.options.find(e=>e.value===o);l&&(t=l)}),t},maybeDoAction(o,t){if(this.currentAction=o,o.showModal){this.showAreYouSureModal=!0;return}this.doAction(t)},doAction(o){this.doingAction[this.currentAction.slug]=!0,this.showAreYouSureModal=!1,this.doingActionKey++,this.toolsStore.doTask({action:this.currentAction.slug,siteId:this.site.blog_id||this.rootStore.aioseo.data.currentBlogId,data:o}).then(()=>{console.log(`Action "${this.currentAction.label}" has been completed.`)}).catch(t=>{console.error(`Action "${this.currentAction.label}" could not be completed: `,t)}).finally(()=>{this.doingAction[this.currentAction.slug]=!1,this.doingActionKey++})}},beforeMount(){var t;let o=-1;if(this.rootStore.aioseo.data.v3Options&&(o=this.tabs.findIndex(s=>s.slug.toLowerCase()==="migrations"),o!==-1)){const s=k('<a href="%1$s" target="_blank">Scheduled Actions</a>',this.rootStore.aioseo.urls.admin.scheduledActions);this.tabs[o].actions.push({label:"Rerun V3 Migration",slug:"restart-v3-migration",shortDescription:"This action restarts the migration from V3 to V4.",longDescription:k("All settings will be migrated immediately. However, the post/term meta needs to be migrated via a routine which runs in batches via Action Scheduler. To speed up the post/term meta migration, go to %1$s and run the <code>aioseo_migrate_post_meta</code> or <code>aioseo_migrate_term_meta</code> action.",s),infoComponent:"MigrationInfo",showModal:!0})}(t=this.extraActions)!=null&&t.length&&this.extraActions.forEach(s=>{if(o=this.tabs.findIndex(l=>l.slug.toLowerCase()===s.slug.toLowerCase()),o!==-1){this.tabs[o].actions=this.tabs[o].actions.concat(s.actions);return}this.tabs.push(s)})}},ve={class:"aioseo-tools-debug"},ye={key:0,class:"aioseo-settings-row"},Ce={class:"select-site"},De=["innerHTML"],Me=["innerHTML"],Te=["innerHTML"],Le={class:"aioseo-modal-body"},xe=["innerHTML"];function Oe(o,t,s,l,e,r){const c=a("core-network-site-selector"),_=a("core-alert"),A=a("core-main-tabs"),S=a("base-button"),b=a("core-settings-row"),C=a("svg-close"),D=a("core-modal"),N=a("core-card");return i(),h("div",ve,[p(N,{slug:"debug","header-text":e.strings.cardLabel},{default:u(()=>[l.rootStore.aioseo.data.isNetworkAdmin?(i(),h("div",ye,[d("div",Ce,m(e.strings.selectSite),1),p(c,{onSelectedSite:t[0]||(t[0]=n=>e.site=n),"show-network":""})])):y("",!0),p(_,{type:"yellow"},{default:u(()=>[d("div",null,m(e.strings.alertWarning),1),d("div",{innerHTML:e.alertLink},null,8,De)]),_:1}),(i(),g(A,{internal:"",key:e.tabsKey,tabs:r.tabs,active:e.activeTab,showSaveButton:!1,onChanged:t[1]||(t[1]=n=>e.activeTab=n)},null,8,["tabs","active"])),(i(!0),h(L,null,x(r.activeTabObject.actions,(n,V)=>(i(),g(b,{key:e.activeTab+V,name:n.label,align:""},{content:u(()=>[n.component?(i(),g(M(n.component),{key:0,onUpdate:O=>r.maybeDoAction(n,O),loading:e.doingAction[n.slug],disabled:r.isActionDisabled(n)},null,40,["onUpdate","loading","disabled"])):(i(),g(S,{type:"blue",size:"medium",onClick:O=>r.maybeDoAction(n),loading:e.doingAction[n.slug],key:e.doingActionKey,disabled:r.isActionDisabled(n)},{default:u(()=>[w(m(e.strings.buttonLabel),1)]),_:2},1032,["onClick","loading","disabled"])),d("div",{class:"aioseo-description",innerHTML:n.shortDescription},null,8,Me),d("div",{class:"aioseo-description",innerHTML:n.longDescription},null,8,Te),n.infoComponent?(i(),g(M(n.infoComponent),{key:2})):y("",!0)]),_:2},1032,["name"]))),128)),p(D,{show:e.showAreYouSureModal,"no-header":"",onClose:t[5]||(t[5]=n=>e.showAreYouSureModal=!1),classes:["aioseo-debug-modal"]},{body:u(()=>[d("div",Le,[d("button",{class:"close",onClick:t[3]||(t[3]=X(n=>e.showAreYouSureModal=!1,["stop"]))},[p(C,{onClick:t[2]||(t[2]=n=>e.showAreYouSureModal=!1)})]),d("h3",null,m(r.areYouSureTitle),1),d("div",{class:"description",innerHTML:e.strings.cannotBeUndone},null,8,xe),p(S,{type:"blue",size:"medium",onClick:r.doAction},{default:u(()=>[w(m(e.strings.yesDoAction),1)]),_:1},8,["onClick"]),p(S,{type:"gray",size:"medium",onClick:t[4]||(t[4]=n=>e.showAreYouSureModal=!1)},{default:u(()=>[w(m(e.strings.noChangedMind),1)]),_:1})])]),_:1},8,["show"])]),_:1},8,["header-text"])])}const Be=v(ke,[["render",Oe]]),$e={components:{Debug:Be}};function Ee(o,t,s,l,e,r){const c=a("debug",!0);return i(),g(c)}const Ne=v($e,[["render",Ee]]),$="all-in-one-seo-pack",Ve={setup(){return{rootStore:T()}},components:{BadBotBlocker:U,CoreMain:Y,DatabaseTools:H,Debug:Ne,HtaccessEditor:ee,ImportExport:oe,RobotsEditor:te,SystemStatus:se,WpCode:ne},data(){return{strings:{pageName:this.rootStore.aioseo.data.isNetworkAdmin?f("Network Tools",$):f("Tools",$)}}},computed:{showSaveButton(){return this.$route.name!=="system-status"&&this.$route.name!=="import-export"&&this.$route.name!=="database-tools"&&this.$route.name!=="debug"&&this.$route.name!=="wp-code"}}};function Ie(o,t,s,l,e,r){const c=a("core-main");return i(),g(c,{"page-name":e.strings.pageName,"show-save-button":r.showSaveButton},{default:u(()=>[(i(),g(M(o.$route.name)))]),_:1},8,["page-name","show-save-button"])}const it=v(Ve,[["render",Ie]]);export{it as default};