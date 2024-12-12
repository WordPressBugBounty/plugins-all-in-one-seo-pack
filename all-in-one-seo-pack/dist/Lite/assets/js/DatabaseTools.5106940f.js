import{u as R,b as E,l as q,m as H}from"./index.ae2b6956.js";import{l as F}from"./license.306f6adb.js";import{u as P}from"./Network.e869dc4f.js";import{C as V}from"./Card.109b77eb.js";import{u as j}from"./ToolsSettings.d44b7f75.js";import{B as G}from"./Checkbox.6db0b9ed.js";import{C as Y,S as J}from"./Caret.d9cc70ba.js";import{C as K}from"./Index.4b4d1967.js";import{C as A}from"./SettingsRow.9f92e269.js";import{G as Q,a as W}from"./Row.df38a5f6.js";import"./translations.d159963e.js";import{v as i,o as l,c as S,C as n,l as r,k,x as g,t as c,b as u,a as _,F as X,J as Z,E as $,G as T}from"./runtime-dom.esm-bundler.5c3c7d72.js";import{_ as x}from"./_plugin-vue_export-helper.eefbdd86.js";import{u as N}from"./ToolsStore.90608ca3.js";import{_ as s,s as U}from"./default-i18n.20001971.js";import{S as ee}from"./Checkmark.e40641dd.js";import{C as oe}from"./Blur.edde4939.js";import{C as te}from"./Index.0e872043.js";import{R as se}from"./RequiredPlans.78e071b4.js";import"./helpers.c7282833.js";import"./upperFirst.eac3a366.js";import"./_stringToArray.f9ddb970.js";import"./toString.a2dfb892.js";import"./Tooltip.73441134.js";import"./index.8c70464a.js";import"./Slide.39c07c03.js";import"./addons.2e54f461.js";import"./allowed.97bad57f.js";import"./constants.24c44c43.js";const L="all-in-one-seo-pack",re={setup(){const{toolsSettings:t}=j();return{rootStore:R(),toolsSettings:t,toolsStore:N()}},components:{BaseCheckbox:G,CoreAlert:Y,CoreModal:K,CoreSettingsRow:A,GridColumn:Q,GridRow:W,SvgClose:J},props:{site:Object},data(){return{showSuccess:!1,showModal:!1,loading:!1,options:{},strings:{selectSettings:s("Select Settings",L),selectSettingsToReset:s("Select settings that you would like to reset:",L),resetSelectedSettings:s("Reset Selected Settings to Default",L),resetSuccess:s("Your settings have been reset successfully!",L),areYouSureReset:s("Are you sure you want to reset the selected settings to default?",L),actionCannotBeUndone:U(s("This action cannot be undone. Before taking this action, we recommend that you make a %1$sfull website backup first%2$s.",L),"<strong>","</strong>"),yesIHaveBackup:s("Yes, I have a backup and want to reset the settings",L),noBackup:s("No, I need to make a backup",L),allSettings:U(s("All %1$s Settings",L),"AIOSEO")}}},computed:{canReset(){if(this.rootStore.aioseo.data.isNetworkAdmin&&!this.site)return!1;const t=[];return Object.keys(this.options).forEach(o=>{t.push(this.options[o])}),!t.some(o=>o)}},methods:{noMakeBackup(){this.rootStore.navigate.scroll="aioseo-backup-settings",this.rootStore.navigate.highlight="aioseo-backup-settings",this.$router.push({name:"import-export"})},processResetSettings(){const t=[];this.options.all?this.toolsSettings.filter(o=>o.value!=="all").forEach(o=>{t.push(o.value)}):Object.keys(this.options).forEach(o=>{this.options[o]&&t.push(o)}),this.loading=!0,this.toolsStore.resetSettings({payload:t,siteId:this.site?this.site.blog_id:null}).then(()=>{this.showModal=!1,this.loading=!1,this.showSuccess=!0,this.options={},setTimeout(()=>{this.showSuccess=!1},5e3)})}}},ne={class:"aioseo-core-reset-settings"},ae={class:"reset-settings"},ie=_("br",null,null,-1),le=_("br",null,null,-1),ce={class:"aioseo-modal-body"},de=["innerHTML"];function ge(t,o,z,d,e,a){const w=i("core-alert"),p=i("base-checkbox"),C=i("grid-column"),v=i("grid-row"),f=i("base-button"),y=i("core-settings-row"),B=i("svg-close"),D=i("core-modal");return l(),S("div",ne,[n(y,{name:e.strings.selectSettings,class:"no-border"},{content:r(()=>[e.showSuccess?(l(),k(w,{key:0,class:"reset-success",type:"green"},{default:r(()=>[g(c(e.strings.resetSuccess),1)]),_:1})):u("",!0),_("div",ae,[g(c(e.strings.selectSettingsToReset)+" ",1),ie,le,n(v,{class:"settings"},{default:r(()=>[n(C,null,{default:r(()=>[n(p,{size:"medium",modelValue:e.options.all,"onUpdate:modelValue":o[0]||(o[0]=h=>e.options.all=h),disabled:d.rootStore.aioseo.data.isNetworkAdmin&&!z.site},{default:r(()=>[g(c(e.strings.allSettings),1)]),_:1},8,["modelValue","disabled"])]),_:1}),(l(!0),S(X,null,Z(d.toolsSettings,(h,O)=>(l(),k(C,{key:O,xl:"3",md:"4",sm:"6"},{default:r(()=>[e.options.all?u("",!0):(l(),k(p,{key:0,size:"medium",modelValue:e.options[h.value],"onUpdate:modelValue":I=>e.options[h.value]=I,disabled:d.rootStore.aioseo.data.isNetworkAdmin&&!z.site},{default:r(()=>[g(c(h.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])),h.value!=="all"&&e.options.all?(l(),k(p,{key:1,size:"medium",modelValue:!0,disabled:""},{default:r(()=>[g(c(h.label),1)]),_:2},1024)):u("",!0)]),_:2},1024))),128))]),_:1}),n(f,{type:"gray",size:"medium",onClick:o[1]||(o[1]=h=>e.showModal=!0),disabled:a.canReset},{default:r(()=>[g(c(e.strings.resetSelectedSettings),1)]),_:1},8,["disabled"])])]),_:1},8,["name"]),n(D,{show:e.showModal,"no-header":"",onClose:o[4]||(o[4]=h=>e.showModal=!1),classes:["aioseo-core-reset-settings-modal"]},{body:r(()=>[_("div",ce,[_("button",{class:"close",onClick:o[3]||(o[3]=$(h=>e.showModal=!1,["stop"]))},[n(B,{onClick:o[2]||(o[2]=h=>e.showModal=!1)})]),_("h3",null,c(e.strings.areYouSureReset),1),_("div",{class:"reset-description",innerHTML:e.strings.actionCannotBeUndone},null,8,de),n(f,{type:"blue",size:"medium",onClick:a.processResetSettings,loading:e.loading},{default:r(()=>[g(c(e.strings.yesIHaveBackup),1)]),_:1},8,["onClick","loading"]),n(f,{type:"gray",size:"medium",onClick:a.noMakeBackup},{default:r(()=>[g(c(e.strings.noBackup),1)]),_:1},8,["onClick"])])]),_:1},8,["show"])])}const M=x(re,[["render",ge]]),b="all-in-one-seo-pack",ue={setup(){const{getSites:t,getUniqueSiteId:o}=P();return{optionsStore:E(),rootStore:R(),toolsStore:N(),getSites:t,getUniqueSiteId:o}},components:{CoreCard:V,CoreResetSettings:M,CoreSettingsRow:A,SvgCheckmark:ee},data(){return{site:null,selectedSite:null,clearedLogs:{badBotBlockerLogs:!1,redirectLogs:!1,logs404:!1},loadingLog:null,strings:{selectSite:s("Select Site",b),resetRestoreSettings:s("Reset / Restore Settings",b),logs:s("Logs",b),badBotBlockerLogs:s("Bad Bot Blocker Logs",b),cleared:s("Cleared",b),clearBadBotBlockerLogs:s("Clear Bad Bot Blocker Logs",b),logs404:s("404 Logs",b),clear404Logs:s("Clear 404 Logs",b),redirectLogs:s("Redirect Logs",b),clearRedirectLogs:s("Clear Redirect Logs",b),logsTooltip:s(`Log sizes may fluctuate and not always be 100% accurate since the results can be cached. Also after clearing a log, it may not show as "0" since database tables also include additional information such as indexes that we don't clear.`,b)}}},watch:{site(t){this.selectedSite=this.rootStore.aioseo.data.network.sites.sites.find(o=>this.getUniqueSiteId(o)===t.value)}},computed:{canReset(){const t=[];return Object.keys(this.options).forEach(o=>{t.push(this.options[o])}),!t.some(o=>o)},showLogs(){return!this.rootStore.aioseo.data.isNetworkAdmin&&(this.showBadBotBlockerLogs||this.rootStore.aioseo.data.logSizes.redirectLogs||this.rootStore.aioseo.data.logSizes.logs404)},showBadBotBlockerLogs(){return this.optionsStore.internalOptions.internal.deprecatedOptions.includes("badBotBlocker")},sites(){return this.getSites.filter(t=>!t.parentDomain).map(t=>({value:this.getUniqueSiteId(t),label:`${t.domain}${t.path}`}))}},methods:{getSizeClass(t){let o="green";return 262144e3<t?o="orange":1073741274<t&&(o="red"),o},processClearLog(t){this.loadingLog=t,this.toolsStore.clearLog(t).then(()=>{this.loadingLog=null,this.clearedLogs[t]=!0})},disabledLog(t){return!this.rootStore.aioseo.data.logSizes[t].original||this.clearedLogs[t]}}},me={class:"aioseo-tools-database-tools"},_e={key:0},pe={key:1},he={class:"log-size"},be={key:0},Se={key:1},ke={class:"log-size"},fe={key:0},Le={key:1},Be={class:"log-size"};function we(t,o,z,d,e,a){const w=i("base-select"),p=i("core-settings-row"),C=i("core-reset-settings"),v=i("core-card"),f=i("svg-checkmark"),y=i("base-button");return l(),S("div",me,[n(v,{slug:"databaseTools","header-text":e.strings.resetRestoreSettings},{default:r(()=>[d.rootStore.aioseo.data.isNetworkAdmin?(l(),k(p,{key:0,name:e.strings.selectSite},{content:r(()=>[n(w,{size:"medium",modelValue:e.site,"onUpdate:modelValue":o[0]||(o[0]=B=>e.site=B),options:a.sites},null,8,["modelValue","options"])]),_:1},8,["name"])):u("",!0),n(C,{site:e.selectedSite},null,8,["site"])]),_:1},8,["header-text"]),a.showLogs?(l(),k(v,{key:0,slug:"databaseToolsLogs","header-text":e.strings.logs},{tooltip:r(()=>[g(c(e.strings.logsTooltip),1)]),default:r(()=>[d.rootStore.aioseo.data.logSizes.logs404?(l(),k(p,{key:0,name:e.strings.logs404,align:""},{content:r(()=>[n(y,{class:"clear-log",type:"gray",size:"medium",loading:e.loadingLog==="logs404",disabled:a.disabledLog("logs404"),onClick:o[1]||(o[1]=B=>a.processClearLog("logs404"))},{default:r(()=>[a.disabledLog("logs404")?(l(),S("span",_e,[n(f),g(" "+c(e.strings.cleared),1)])):u("",!0),a.disabledLog("logs404")?u("",!0):(l(),S("span",pe,c(e.strings.clear404Logs),1))]),_:1},8,["loading","disabled"]),_("div",he,[_("span",{class:T(["size-dot",a.getSizeClass(d.rootStore.aioseo.data.logSizes.logs404.original)])},null,2),g(" "+c(d.rootStore.aioseo.data.logSizes.logs404.readable),1)])]),_:1},8,["name"])):u("",!0),d.rootStore.aioseo.data.logSizes.redirectLogs?(l(),k(p,{key:1,name:e.strings.redirectLogs,align:""},{content:r(()=>[n(y,{class:"clear-log",type:"gray",size:"medium",loading:e.loadingLog==="redirectLogs",disabled:a.disabledLog("redirectLogs"),onClick:o[2]||(o[2]=B=>a.processClearLog("redirectLogs"))},{default:r(()=>[a.disabledLog("redirectLogs")?(l(),S("span",be,[n(f),g(" "+c(e.strings.cleared),1)])):u("",!0),a.disabledLog("redirectLogs")?u("",!0):(l(),S("span",Se,c(e.strings.clearRedirectLogs),1))]),_:1},8,["loading","disabled"]),_("div",ke,[_("span",{class:T(["size-dot",a.getSizeClass(d.rootStore.aioseo.data.logSizes.redirectLogs.original)])},null,2),g(" "+c(d.rootStore.aioseo.data.logSizes.redirectLogs.readable),1)])]),_:1},8,["name"])):u("",!0),a.showBadBotBlockerLogs?(l(),k(p,{key:2,name:e.strings.badBotBlockerLogs,align:""},{content:r(()=>[n(y,{class:"clear-log",type:"gray",size:"medium",loading:e.loadingLog==="badBotBlockerLog",disabled:a.disabledLog("badBotBlockerLog"),onClick:o[3]||(o[3]=B=>a.processClearLog("badBotBlockerLog"))},{default:r(()=>[a.disabledLog("badBotBlockerLog")?(l(),S("span",fe,[n(f),g(" "+c(e.strings.cleared),1)])):u("",!0),a.disabledLog("badBotBlockerLog")?u("",!0):(l(),S("span",Le,c(e.strings.clearBadBotBlockerLogs),1))]),_:1},8,["loading","disabled"]),_("div",Be,[_("span",{class:T(["size-dot",a.getSizeClass(d.rootStore.aioseo.data.logSizes.badBotBlockerLog.original)])},null,2),g(" "+c(d.rootStore.aioseo.data.logSizes.badBotBlockerLog.readable),1)])]),_:1},8,["name"])):u("",!0)]),_:1},8,["header-text"])):u("",!0)])}const ye=x(ue,[["render",we]]),m="all-in-one-seo-pack",Ce={setup(){return{rootStore:R()}},components:{RequiredPlans:se,CoreBlur:oe,CoreCard:V,CoreResetSettings:M,CoreSettingsRow:A,Cta:te},data(){return{links:q,strings:{selectSite:s("Select Site",m),resetRestoreSettings:s("Reset / Restore Settings",m),logs:s("Logs",m),badBotBlockerLogs:s("Bad Bot Blocker Logs",m),cleared:s("Cleared",m),clearBadBotBlockerLogs:s("Clear Bad Bot Blocker Logs",m),logs404:s("404 Logs",m),clear404Logs:s("Clear 404 Logs",m),redirectLogs:s("Redirect Logs",m),clearRedirectLogs:s("Clear Redirect Logs",m),logsTooltip:s(`Log sizes may fluctuate and not always be 100% accurate since the results can be cached. Also after clearing a log, it may not show as "0" since database tables also include additional information such as indexes that we don't clear.`,m),ctaHeader:U(s("Network Tools is a %1$s Feature",m),"PRO"),ctaButtonText:s("Unlock Network Tools",m),networkDatabaseToolsDescription:s("Unlock network-level tools to manage all your sites from one easy-to-use location. Migrate data or create backups without the need to visit each dashboard.",m)}}}},ve={class:"aioseo-tools-database-tools-lite"};function ze(t,o,z,d,e,a){const w=i("base-select"),p=i("core-settings-row"),C=i("core-reset-settings"),v=i("core-blur"),f=i("required-plans"),y=i("cta"),B=i("core-card");return l(),S("div",ve,[n(B,{slug:"databaseTools","header-text":e.strings.resetRestoreSettings},{default:r(()=>[n(v,null,{default:r(()=>[n(p,{name:e.strings.selectSite},{content:r(()=>[n(w,{size:"medium",modelValue:{value:"",label:""},options:[]})]),_:1},8,["name"]),n(C)]),_:1}),n(y,{"cta-link":e.links.getPricingUrl("network-tools","database-tools"),"button-text":e.strings.ctaButtonText,"learn-more-link":e.links.getUpsellUrl("network-tools","database-tools",d.rootStore.isPro?"pricing":"liteUpgrade")},{"header-text":r(()=>[g(c(e.strings.ctaHeader),1)]),description:r(()=>[n(f,{"core-feature":["tools","network-tools-database"]}),g(" "+c(e.strings.networkDatabaseToolsDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link"])]),_:1},8,["header-text"])])}const Re=x(Ce,[["render",ze]]),xe={setup(){return{licenseStore:H(),rootStore:R()}},components:{DatabaseTools:ye,LiteDatabaseTools:Re},data(){return{license:F}}};function Te(t,o,z,d,e,a){const w=i("database-tools",!0),p=i("lite-database-tools");return l(),S("div",null,[!d.rootStore.aioseo.data.isNetworkAdmin||!d.licenseStore.isUnlicensed&&e.license.hasCoreFeature("tools","network-tools-database")?(l(),k(w,{key:0})):u("",!0),d.rootStore.aioseo.data.isNetworkAdmin&&(d.licenseStore.isUnlicensed||!e.license.hasCoreFeature("tools","network-tools-database"))?(l(),k(p,{key:1})):u("",!0)])}const ao=x(xe,[["render",Te]]);export{ao as default};
