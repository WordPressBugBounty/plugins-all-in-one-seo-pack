import{G as $}from"./constants.2019bcb3.js";import{m as ee,n as te,k as oe,b as se,u as re,l as z}from"./index.20192476.js";import{l as ie}from"./license.37048367.js";import{h as P,g as ne}from"./helpers.f95d5840.js";import{e as le}from"./regex.f8017116.js";import{u as ae}from"./Network.641df61c.js";import{C as j,_ as de,b as ce}from"./Caret.662da1f3.js";import{B as ue}from"./Editor.5a453aa4.js";import{C as be}from"./Card.46af096e.js";import{C as he}from"./Index.de83b4aa.js";import{C as me,S as pe}from"./Upload.ec51a970.js";import{C as fe}from"./SettingsRow.1934f141.js";import{S as _e,D as we}from"./vuedraggable.umd.4c22b181.js";import"./translations.12335a6a.js";import{_ as J}from"./_plugin-vue_export-helper.249dac1d.js";import{_ as l,s as y,a as ge}from"./default-i18n.54b5d8cd.js";import{v as x,o as R,c as S,F as U,J as E,k as D,l as w,a as n,t as p,b as C,C as a,x as k,G as xe,Q as G,R as M,E as V}from"./runtime-dom.esm-bundler.6789c400.js";import{S as Re}from"./Plus.c3a1a43f.js";import{S as ve}from"./Ellipse.c57f22ea.js";import{S as ke}from"./External.c84e4310.js";import{S as Te}from"./index.ee8124c6.js";import"./upperFirst.96c04516.js";import"./_stringToArray.08127ca9.js";import"./toString.1401d490.js";import"./isEqual.51bf23f5.js";import"./_baseIsEqual.6bc92395.js";import"./_getTag.8dc22eac.js";import"./_baseClone.e959332d.js";import"./_arrayEach.f4f00336.js";import"./Tooltip.b6b45c85.js";import"./Slide.d0517fb0.js";import"./params.764403f6.js";import"./Row.f01f32cd.js";const Se=e=>{const t=[];return Object.keys(e).forEach(r=>{r&&(t.push(`User-agent: ${r}`),Object.keys(e[r]).forEach(i=>{const[o,s]=e[r][i].split(":").map(m=>m.trim());t.push(`${o.charAt(0).toUpperCase()+o.slice(1)}: ${s}`)}),t.push(""))}),t.join(`\r
`)},q=e=>{const t={};return e.forEach(r=>{const i=JSON.parse(r);if(!(!i.userAgent||!i.fieldValue)){if(!t[i.userAgent]){t[i.userAgent]=[`${i.directive}: ${i.fieldValue}`];return}t[i.userAgent].push(`${i.directive}: ${i.fieldValue}`)}}),t},ye=e=>{const t=[],r=/^\/.*$/,i=(d,f,u,g,c={})=>{const v=`${g.tableIndex}${g.userAgent}${g.directive}${g.fieldValue}`;return d.find(_=>u==="defaultRuleOverride"&&_.hash===v&&_.message===u)||(d.push({type:f,message:u,hash:v,isNetworkIndex:c.isNetworkIndex,previewIndex:c.previewIndex,sourcePreviewIndex:(c==null?void 0:c.sourcePreviewIndex)||null,conflictingIndex:(c==null?void 0:c.conflictingIndex)||null,duplicateIndex:(c==null?void 0:c.duplicateIndex)||null,equivalentIndex:(c==null?void 0:c.equivalentIndex)||null,overriddenIndex:(c==null?void 0:c.overriddenIndex)||null}),t.push((c==null?void 0:c.overriddenIndex)||null)),d},o=(d,f)=>d+f;let s=[],m=0;for(const d in e){m=o(m,2);for(const[f,u]of Object.entries(e[d])){const[g,c]=[u.directive,u.fieldValue];if(!g||!c)continue;let v=m;for(let _=parseInt(f)+1;_<e[d].length;_++){const[A,O]=[e[d][_].directive,e[d][_].fieldValue];if(!(!A||!O)){if(m=o(m,1),`${g}${c}`==`${A}${O}`&&(s=i(s,"red","duplicateRule",e[d][_],{previewIndex:m,sourcePreviewIndex:v,isNetworkIndex:u.networkLevel,duplicateIndex:u.tableIndex})),g.match(/disallow|allow/i)&&A.match(/disallow|allow/i)){g!==A&&c===O&&(u.default?(t.includes(u.tableIndex)||v--,s=i(s,"yellow","defaultRuleOverride",e[d][_],{previewIndex:m,isNetworkIndex:u.networkLevel,overriddenIndex:u.tableIndex})):s=i(s,u.networkLevel?"yellow":"red","conflictingPath",e[d][_],{previewIndex:m,sourcePreviewIndex:u.networkLevel?null:v,isNetworkIndex:u.networkLevel,conflictingIndex:u.tableIndex}));const L=new RegExp(`^${le(O.replace(/\*+$/g,""))}$`);O.indexOf("*")!==-1&&c.match(L)&&(s=i(s,"red","equivalentPath",e[d][_],{previewIndex:m,sourcePreviewIndex:v,isNetworkIndex:u.networkLevel,equivalentIndex:u.tableIndex}))}g==="crawl-delay"&&A==="crawl-delay"&&c!==O&&(s=i(s,"red","conflictingCrawlDelay",e[d][_],{previewIndex:m,sourcePreviewIndex:v,isNetworkIndex:u.networkLevel,conflictingIndex:u.tableIndex}))}}if(m=v,g.match(/^clean-param/i)){const[_,A]=c.split(/\s+/).map(O=>O.trim());(!_||_.match(r)||A&&!A.match(r))&&(s=i(s,"red","invalidCleanParam",u,{previewIndex:m}))}if(g.match(/^crawl-delay/i)){const _=Number(c);(isNaN(_)||1>_)&&(s=i(s,"red","invalidCrawlDelay",u,{previewIndex:m}))}m=o(m,1)}}if(s.length)throw s;return!0},I="all-in-one-seo-pack",Ie={components:{CoreAlert:j},props:{errors:{type:Array,required:!0}},data(){return{strings:{allowTakesPrecedence:l('The "Allow" rule takes precedence.',I),fromTheNetwork:l("from the network level",I),invalidCleanParam:l("Clean-param must start with at least one param which is optionally followed by one path.",I),invalidCrawlDelay:l("Crawl-delay must be a number starting from 1.",I),conflictingCrawlDelay:l('For some crawlers, encountering conflicting "Crawl-delay" might lead to unpredictable behavior.',I),networkRuleTakesPrecedence:l("The network rule takes precedence.",I)}}},computed:{errorsByType(){return this.errors.reduce((e,t)=>(e[t.type]||(e[t.type]=[]),e[t.type].push(t),e),{})}},methods:{getErrorMessage(e){return e.message==="duplicateRule"?y(l("This rule is a duplicate of rule #%1$s%2$s.",I),e.duplicateIndex,e.isNetworkIndex?` (${this.strings.fromTheNetwork})`:""):e.message==="equivalentPath"?y(l("Equivalent to rule #%1$s%2$s. The trailing wildcard is ignored.",I),e.equivalentIndex,e.isNetworkIndex?` (${this.strings.fromTheNetwork})`:""):e.message==="conflictingPath"?y(l("This rule conflicts with rule #%1$s%2$s.%3$s",I),e.conflictingIndex,e.isNetworkIndex?` (${this.strings.fromTheNetwork})`:"",e.isNetworkIndex?` ${this.strings.networkRuleTakesPrecedence}`:` ${this.strings.allowTakesPrecedence}`):e.message==="defaultRuleOverride"?y(l("This rule overrides the default rule #%1$s%2$s.",I),e.overriddenIndex,e.isNetworkIndex?` (${this.strings.fromTheNetwork})`:""):e.message==="conflictingCrawlDelay"?y(l("This rule conflicts with rule #%1$s%2$s.%3$s",I),e.conflictingIndex,e.isNetworkIndex?` (${this.strings.fromTheNetwork})`:"",` ${this.strings.conflictingCrawlDelay}`):this.strings[e.message]}}},Ce={key:0,class:"robots-editor-rule-error-alert"};function Ae(e,t,r,i,o,s){const m=x("core-alert");return r.errors.length?(R(),S("div",Ce,[(R(!0),S(U,null,E(s.errorsByType,(d,f)=>(R(),D(m,{key:f+"-errors",type:f,size:"small"},{default:w(()=>[(R(!0),S(U,null,E(d,(u,g)=>(R(),S("div",{key:g},[n("b",null,p(s.getErrorMessage(u)),1)]))),128))]),_:2},1032,["type"]))),128))])):C("",!0)}const Oe=J(Ie,[["render",Ae]]),h="all-in-one-seo-pack",Ne={setup(){const{isMainSite:e}=ae();return{licenseStore:ee(),networkStore:te(),notificationsStore:oe(),optionsStore:se(),rootStore:re(),GLOBAL_STRINGS:$,isMainSite:e,links:z}},components:{SvgDrag:_e,BaseButton:de,BaseEditor:ue,CoreAlert:j,CoreCard:be,CoreLoader:ce,CoreModal:he,CoreNetworkSiteSelector:me,CoreSettingsRow:fe,Draggable:we,RuleErrors:Oe,SvgCirclePlus:Re,SvgEllipse:ve,SvgExternal:ke,SvgTrash:Te,SvgUpload:pe},data(){var e;return{currentSite:{},defaultRules:((e=this.rootStore.aioseo.data.robots)==null?void 0:e.defaultRules)||{},directiveOptions:[{value:"allow",label:"Allow"},{value:"disallow",label:"Disallow"},{value:"clean-param",label:"Clean-param"},{value:"crawl-delay",label:"Crawl-delay"}],errors:{deleteRobotsTxt:null,importAndDeleteRobotsTxt:null,importRobotsTxt:null,importRobotsTxtFromUrl:null,pasteRobotsTxtText:null,tableRule:[]},forceRobotsDetectedAlert:!1,inputImportRobotsTxtFromUrl:"",inputPasteRobotsTxtText:"",license:ie,loading:{btnDeleteRobotsTxt:!1,btnImportAndDeleteRobotsTxt:!1,btnImportRobotsTxt:!1,cardOverlay:!1},showImportModal:!1,strings:{addRule:l("Add Rule",h),allow:l("Allow",h),customRobotsPreview:l("Custom Robots.txt Preview",h),deleteRule:l("Delete Rule",h),description:y(l("The robots.txt editor in %1$s allows you to set up a robots.txt file for your site that will override the default robots.txt file that WordPress creates. By creating a robots.txt file with %2$s you have greater control over the instructions you give web crawlers about your site.",h),"AIOSEO","AIOSEO"),description2:y(l("Just like WordPress, %1$s generates a dynamic file so there is no static file to be found on your server.  The content of the robots.txt file is stored in your WordPress database.",h),"All in One SEO"),directive:l("Directive",h),disallow:l("Disallow",h),enableCustomRobots:l("Enable Custom Robots.txt",h),importAndDelete:l("Import and Delete",h),importFromUrl:l("Import from URL",h),importRobots:l("Import Robots.txt",h),networkAlert:l("These custom robots.txt rules will apply globally to your entire network. To adjust the robots.txt rules for an individual site, please choose it in the list above.",h),networkAlertLite:l("These custom robots.txt rules will apply globally to your entire network. To adjust the robots.txt rules for an individual site, please visit the dashboard for that site directly and update the settings there.",h),invalidRobotsTxtUrl:l("Invalid robots.txt URL.",h),openRobotsTxt:l("Open Robots.txt",h),pasteRobotsText:l("Paste Robots.txt text",h),userAgentNotFound:l("No User-agent found in the content beginning.",h),pasteUrl:l("https://any-domain.com/robots.txt",h),physicalRobotsFound:y(l("%1$s has detected a physical robots.txt file in the root folder of your WordPress installation. We recommend removing this file as it could cause conflicts with WordPress' dynamically generated one. %2$s can import this file and delete it, or you can simply delete it.",h),"AIOSEO","AIOSEO"),robotsEditor:l("Robots.txt Editor",h),selectSite:l("Select Site",h),userAgent:l("User Agent",h)}}},watch:{"networkStore.networkRobots":{deep:!0,handler(){var e;((e=this.currentSite)==null?void 0:e.blog_id)==="network"?this.optionsStore.networkOptions.tools.robots.rules=this.networkStore.networkRobots.rules:this.optionsStore.options.tools.robots.rules=this.networkStore.networkRobots.rules,this.$nextTick(()=>{this.validateRules()})}},currentSite(e,t){t.blog_id&&this.processFetchSiteRobots()},"getOptions.enable"(){this.validateRules(),this.maybeForceRobotsDetectedAlert()}},computed:{btnImportRobotsTxtDisabled(){return!this.inputImportRobotsTxtFromUrl&&!this.inputPasteRobotsTxtText?!0:this.errors.importRobotsTxtFromUrl||this.errors.pasteRobotsTxtText},getOptions(){var e;return((e=this.currentSite)==null?void 0:e.blog_id)==="network"?this.networkStore.getNetworkRobots:this.optionsStore.options.tools.robots},inputCustomRobotsTxtPreview(){const e=this.isNetworkSite&&this.optionsStore.networkOptions.tools.robots.enable?q(this.networkStore.getNetworkRobots.rules):{},t=q(this.networkStore.networkRobots.rules),r=`\r
`+this.rootStore.aioseo.data.robots.sitemapUrls.filter(o=>0<o.length).join(`\r
`);let i=this.getOptions.enable?this.mergeRuleset(this.defaultRules,this.mergeRuleset(e,t),!0):this.mergeRuleset(this.defaultRules,e);return i=Se(i)+r,i.replace(/<[^>]*>/g,"")},isNetworkSite(){var e;return this.rootStore.aioseo.data.isMultisite&&((e=this.currentSite)==null?void 0:e.blog_id)!=="network"},isValidRobotsSite(){var t;return new URL(this.robotsTxtUrl).pathname.match(/^\/robots.txt\/?/)?this.rootStore.aioseo.data.subdomain||((t=this.currentSite)==null?void 0:t.blog_id)==="network"||this.isMainSite(this.currentSite.domain,this.currentSite.path)||!this.rootStore.aioseo.data.isNetworkAdmin&&this.rootStore.aioseo.data.mainSite:!1},missingRewriteRules(){const e=l("It looks like you are missing the proper rewrite rules for the robots.txt file.",h);let t="";if(this.rootStore.aioseo.data.server.match(/apache|litespeed/)){const r=this.rootStore.aioseo.data.server==="apache"?"Apache":"LiteSpeed";t=y(l("It appears that your server is running on %1$s, so the fix should be as simple as checking the %2$scorrect .htaccess implementation on wordpress.org%3$s.",h),r,'<a href="https://wordpress.org/support/article/htaccess/" target="_blank">',"</a>")}else this.rootStore.aioseo.data.server==="nginx"&&(t=y(l("It appears that your server is running on nginx, so the fix will most likely require adding the correct rewrite rules to our nginx configuration. %1$sCheck our documentation for more information%2$s.",h),'<a href="'+z.getDocUrl("robotsRewrite")+'" target="_blank">',"</a>"));return e+" "+t},parsedCustomRules(){const e=[];for(const t of this.networkStore.networkRobots.rules.values()){const r=JSON.parse(t);e.push({userAgent:r.userAgent,directive:r.directive,fieldValue:r.fieldValue,default:!1,networkLevel:!1})}return e},parsedDefaultRules(){const e=[];return Object.keys(this.defaultRules).forEach(t=>{for(const r of this.defaultRules[t].values()){const[i,o]=r.split(":").map(s=>s.trim());e.push({userAgent:t,directive:i,fieldValue:o,default:!0,networkLevel:!1})}}),e},parsedNetworkRules(){const e=this.isNetworkSite&&this.optionsStore.networkOptions.tools.robots.enable?this.networkStore.getNetworkRobots.rules:{},t=[];if(Object.keys(e).length)for(const r of e.values()){const i=JSON.parse(r);t.push({userAgent:i.userAgent,directive:i.directive,fieldValue:i.fieldValue,default:!1,networkLevel:!0})}return t},robotsPreviewErrorLabel(){const e=this.errors.tableRule.length?this.errors.tableRule.filter(i=>i.type==="red"):[];if(!e.length)return"";const t=P(e,"previewIndex"),r=ne(t).length;return y(ge("%1$s Error","%1$s Errors",r,h),r)},robotsTxtUrl(){var e,t;return((e=this.currentSite)==null?void 0:e.blog_id)!=="network"&&((t=this.currentSite)!=null&&t.domain)?`${this.rootStore.aioseo.data.isSsl?"https://":"http://"}${this.currentSite.domain}${this.currentSite.path}robots.txt`:this.rootStore.aioseo.urls.robotsTxtUrl},subdirectoryAlert(){return this.isNetworkSite?y(l("This site is running in a sub-directory of your main site located at %1$s. Your robots.txt file should only appear in the root directory of that site.",h),'<a href="'+this.rootStore.aioseo.urls.mainSiteUrl+'" target="_blank"><strong>'+this.rootStore.aioseo.urls.mainSiteUrl+"</strong></a>"):l("This site runs in a sub-directory. The robots.txt file must be located at the root of the website host to which it applies.",h)},showRobotsDetectedAlert(){return this.getOptions.robotsDetected||this.forceRobotsDetectedAlert},tableRules:{get(){return this.networkStore.networkRobots.rules.map(e=>JSON.parse(e))},set(e){const t=[];e.forEach(r=>{t.push(JSON.stringify({userAgent:r.userAgent,directive:r.directive,fieldValue:r.fieldValue}))}),this.networkStore.networkRobots.rules=t}}},methods:{addRow(){this.networkStore.networkRobots.rules.push(JSON.stringify({userAgent:null,directive:"allow",fieldValue:null})),this.$nextTick(()=>{document.querySelector(".robots-editor-table__body .robots-editor-table__row:last-child input").focus()})},deleteRow(e){this.networkStore.networkRobots.rules.splice(e,1)},getTableIndexedRuleset(){const e=[],t=[],r=[...this.parsedDefaultRules,...this.parsedNetworkRules,...this.parsedCustomRules];let i=this.parsedDefaultRules.length,o=0;return r.forEach(s=>{s.tableIndex=s.networkLevel?++i:++o,t.push(s)}),t.forEach(s=>{if(!e[s.userAgent]){e[s.userAgent]=[s];return}e[s.userAgent].push(s)}),e},getTableRuleErrors(e,t){return this.errors.tableRule.length?this.errors.tableRule.filter(r=>r.hash===`${e}${t.userAgent}${t.directive}${t.fieldValue}`):[]},hasTableRuleError(e,t){return this.errors.tableRule.find(r=>{const i=e===(r.duplicateIndex||r.equivalentIndex||r.conflictingIndex)&&!r.isNetworkIndex,o=r.hash===`${e}${t.userAgent}${t.directive}${t.fieldValue}`;return i||o})||!1},hideRobotsDetected(){this.getOptions.robotsDetected=!1,this.optionsStore.saveChanges()},maybeForceRobotsDetectedAlert(){this.getOptions.enable||(this.forceRobotsDetectedAlert=!1),this.getOptions.enable&&this.rootStore.aioseo.data.robots.hasPhysicalRobots&&(this.forceRobotsDetectedAlert=!0)},mergeRuleset(e,t,r=!1){const i={...e};return Object.keys(t).forEach(o=>{if(!(o in i)){i[o]=t[o];return}for(const s of t[o].values()){const[m,d]=s.split(":").map(f=>f.trim());if(m.match(/disallow|allow/i)){const f=m==="disallow"?"allow":"disallow",u=i[o].indexOf(`${f}: ${d}`);u!==-1&&(r?i[o]=i[o].filter((g,c)=>c!==u):t[o]=t[o].filter(g=>g!==`${m}: ${d}`))}}i[o]=[...i[o],...t[o]]}),i},onChangeInputImportRobotsTxtFromUrl(e){this.inputImportRobotsTxtFromUrl=e,this.errors.importRobotsTxtFromUrl=null,e&&!e.match(/^https?:\/\/.{2,}\..{2,}\/robots\.txt$/)&&(this.errors.importRobotsTxtFromUrl=this.strings.invalidRobotsTxtUrl)},onChangeInputPasteRobotsTxtText(e){this.inputPasteRobotsTxtText=e.replace(/#[^\n\r]*/g,""),this.errors.pasteRobotsTxtText=null,this.inputPasteRobotsTxtText&&!this.inputPasteRobotsTxtText.match(/^\s*user-agent:\s*./gi)&&(this.errors.pasteRobotsTxtText=this.strings.userAgentNotFound)},onClickBtnDeleteRobotsTxt(){this.loading.btnDeleteRobotsTxt=!0,this.notificationsStore.processButtonAction("tools/delete-robots-txt").then(()=>window.location.reload()).catch(e=>{var t,r;this.loading.btnDeleteRobotsTxt=!1,this.errors.deleteRobotsTxt=((r=(t=e==null?void 0:e.response)==null?void 0:t.body)==null?void 0:r.message)||null})},onClickBtnImportAndDeleteRobotsTxt(){this.loading.btnImportAndDeleteRobotsTxt=!0,this.processImportRobotsTxt("static").then(()=>{window.location.reload()}).catch(e=>{var t,r;this.loading.btnImportAndDeleteRobotsTxt=!1,this.errors.importAndDeleteRobotsTxt=((r=(t=e==null?void 0:e.response)==null?void 0:t.body)==null?void 0:r.message)||null})},onClickBtnImportRobotsTxt(e){this.loading.btnImportRobotsTxt=!0,this.processImportRobotsTxt(e).then(()=>window.location.reload()).catch(t=>{var r,i;this.loading.btnImportRobotsTxt=!1,this.errors.importRobotsTxt=((i=(r=t==null?void 0:t.response)==null?void 0:r.body)==null?void 0:i.message)||null})},processFetchSiteRobots(){this.loading.cardOverlay=!0,this.networkStore.fetchSiteRobots(this.currentSite.blog_id).then(()=>this.loading.cardOverlay=!1)},processImportRobotsTxt(e){var t;return this.networkStore.importRobotsTxt({source:e,url:this.inputImportRobotsTxtFromUrl,text:this.inputPasteRobotsTxtText,networkLevel:this.rootStore.aioseo.data.isNetworkAdmin,blogId:((t=this.currentSite)==null?void 0:t.blog_id)||null})},sanitizeDirectiveValue(e,t,r){return r=decodeURIComponent(r.trim()),r&&(r=r.replace(/[><]/,""),t==="userAgent"&&(r=r.replace(/([^a-z0-9\-_*,.\s])/gi,""),r=r.replace(/\s+/g," ")),t==="fieldValue"&&e.directive.match(/allow|disallow/)&&(r=r.indexOf("*")===0&&1<r.length?r:"/"+r.replace(/(^\/+)/,"")),r)},async updateRule(e,t,r,i){this.networkStore.networkRobots.rules.splice(i,1,JSON.stringify(e)),await this.$nextTick(),e[t]=this.sanitizeDirectiveValue(e,t,r),this.networkStore.networkRobots.rules.splice(i,1,JSON.stringify(e))},validateRules(){if(!this.getOptions.enable)return this.errors.tableRule=[],!1;try{ye(this.getTableIndexedRuleset()),this.errors.tableRule=[]}catch(e){this.errors.tableRule=e,this.$nextTick(()=>{var d;const t=this.errors.tableRule.length?this.errors.tableRule.filter(f=>f.type==="red"):[],r=((d=this.$refs["input-custom-robots-txt-preview"])==null?void 0:d.$el.querySelector(".ql-editor"))||null;if(!r)return!1;const i=r.querySelectorAll("p"),o=P(t,"previewIndex"),s=P(t,"sourcePreviewIndex"),m=[...new Set([...o,...s])];for(const f of m)i[f-1]&&i[f-1].classList.add("has-error")})}}},mounted(){var e;this.networkStore.networkRobots.rules=((e=this.currentSite)==null?void 0:e.blog_id)==="network"?this.networkStore.getNetworkRobots.rules:this.optionsStore.options.tools.robots.rules,this.validateRules(),this.maybeForceRobotsDetectedAlert()}},Ve={class:"aioseo-tools-robots-editor"},De={key:0,class:"aioseo-settings-row"},Ue={class:"settings-name"},Le={class:"name small-margin"},Pe={class:"settings-content"},Ee={class:"aioseo-settings-row"},Fe={class:"description"},Be={class:"description"},ze=["innerHTML"],Ge={key:1,class:"aioseo-settings-row"},Me={class:"description"},qe={class:"buttons description"},je={key:2,class:"aioseo-settings-row"},Je={class:"aioseo-settings-row"},He={class:"settings-content"},We={class:"robots-editor-table"},Qe={class:"robots-editor-table__header"},Ye={class:"robots-editor-table__row"},Ke=n("div",{class:"robots-editor-table__column"},"#",-1),Xe={class:"robots-editor-table__column"},Ze={class:"robots-editor-table__column"},$e={class:"robots-editor-table__column"},et=n("div",{class:"robots-editor-table__column"},null,-1),tt={class:"robots-editor-table__body"},ot={class:"robots-editor-table__column"},st={class:"robots-editor-table__column"},rt={class:"robots-editor-table__column"},it={class:"robots-editor-table__column"},nt=n("div",{class:"robots-editor-table__column"},null,-1),lt={class:"robots-editor-table__column robots-editor-table__column--truncate"},at={class:"robots-editor-table__column"},dt={class:"robots-editor-table__column"},ct={class:"robots-editor-table__column"},ut={class:"robots-editor-table__column robots-editor-table__column--actions"},bt=["onClick","title"],ht={class:"robots-editor-table__footer"},mt={class:"buttons"},pt={class:"aioseo-settings-row aioseo-settings-row--preview-robots no-margin"},ft={class:"settings-name"},_t={class:"name"},wt={key:0,class:"aioseo-error"},gt={class:"settings-content"},xt={key:0,class:"aioseo-settings-row no-margin no-border"},Rt=["data-or"],vt={class:"settings-name"},kt={class:"name small-margin"},Tt={class:"settings-content settings-content--gap"},St={class:"aioseo-settings-row"},yt={class:"settings-name"},It={class:"name small-margin"},Ct={class:"settings-content settings-content--gap"},At={class:"buttons"},Ot={key:5,class:"loader-overlay"};function Nt(e,t,r,i,o,s){const m=x("core-network-site-selector"),d=x("core-alert"),f=x("base-button"),u=x("svg-external"),g=x("core-settings-row"),c=x("base-toggle"),v=x("base-input"),_=x("base-select"),A=x("svg-trash"),O=x("svg-drag"),L=x("rule-errors"),H=x("draggable"),W=x("svg-circle-plus"),Q=x("svg-upload"),Y=x("svg-ellipse"),F=x("base-editor"),K=x("core-modal"),X=x("core-loader"),Z=x("core-card");return R(),S("div",Ve,[a(Z,{slug:"robotsEditor","header-text":o.strings.robotsEditor},{default:w(()=>{var B;return[i.rootStore.aioseo.data.isNetworkAdmin&&!i.licenseStore.isUnlicensed&&o.license.hasCoreFeature("tools","network-tools-robots")?(R(),S("div",De,[n("div",Ue,[n("div",Le,p(o.strings.selectSite),1)]),n("div",Pe,[a(m,{onSelectedSite:t[0]||(t[0]=b=>o.currentSite=b),"follow-selected-site":"","show-network":""})])])):C("",!0),n("div",Ee,[((B=o.currentSite)==null?void 0:B.blog_id)==="network"?(R(),D(d,{key:0},{default:w(()=>[k(p(i.licenseStore.isUnlicensed||!o.license.hasCoreFeature("tools","network-tools-robots")?o.strings.networkAlertLite:o.strings.networkAlert),1)]),_:1})):C("",!0),n("p",Fe,p(o.strings.description),1),n("p",Be,[k(p(o.strings.description2)+" ",1),n("span",{innerHTML:i.links.getDocLink(i.GLOBAL_STRINGS.learnMore,"robotsEditor",!0)},null,8,ze)])]),i.rootStore.aioseo.data.robots.hasPhysicalRobots&&s.showRobotsDetectedAlert?(R(),S("div",Ge,[o.errors.importAndDeleteRobotsTxt||o.errors.deleteRobotsTxt?(R(),D(d,{key:0,type:"red"},{default:w(()=>[k(p(o.errors.importAndDeleteRobotsTxt||o.errors.deleteRobotsTxt),1)]),_:1})):C("",!0),a(d,{type:"red","show-close":!s.getOptions.enable,onCloseAlert:s.hideRobotsDetected},{default:w(()=>[n("p",Me,p(o.strings.physicalRobotsFound),1),n("p",qe,[a(f,{type:"blue",size:"medium",onClick:s.onClickBtnImportAndDeleteRobotsTxt,loading:o.loading.btnImportAndDeleteRobotsTxt},{default:w(()=>[k(p(o.strings.importAndDelete),1)]),_:1},8,["onClick","loading"]),a(f,{type:"blue",size:"medium",onClick:s.onClickBtnDeleteRobotsTxt,loading:o.loading.btnDeleteRobotsTxt},{default:w(()=>[k(p(i.GLOBAL_STRINGS.delete),1)]),_:1},8,["onClick","loading"])])]),_:1},8,["show-close","onCloseAlert"])])):C("",!0),i.rootStore.aioseo.data.robots.rewriteExists?C("",!0):(R(),S("div",je,[a(d,{type:"red",innerHTML:s.missingRewriteRules},null,8,["innerHTML"])])),s.isValidRobotsSite?(R(),S(U,{key:3},[a(g,{name:i.GLOBAL_STRINGS.preview},{content:w(()=>[a(f,{size:"medium",type:"blue",tag:"a",href:s.robotsTxtUrl,target:"_blank"},{default:w(()=>[a(u,{width:"14"}),k(" "+p(o.strings.openRobotsTxt),1)]),_:1},8,["href"])]),_:1},8,["name"]),a(g,{name:o.strings.enableCustomRobots,class:"no-border no-margin"},{content:w(()=>[a(c,{modelValue:s.getOptions.enable,"onUpdate:modelValue":t[1]||(t[1]=b=>s.getOptions.enable=b)},null,8,["modelValue"])]),_:1},8,["name"]),n("div",Je,[n("div",He,[n("div",We,[n("div",Qe,[n("div",Ye,[Ke,n("div",Xe,p(o.strings.userAgent),1),n("div",Ze,p(o.strings.directive),1),n("div",$e,p(i.GLOBAL_STRINGS.value),1),et])]),n("div",tt,[(R(!0),S(U,null,E(s.parsedDefaultRules,(b,N)=>(R(),S("div",{key:N,class:"robots-editor-table__row robots-editor-table__row--stripe"},[n("div",ot,p(N+1),1),n("div",st,[a(v,{modelValue:b.userAgent,disabled:!0,size:"medium"},null,8,["modelValue"])]),n("div",rt,[a(_,{modelValue:o.directiveOptions.find(T=>T.value===b.directive),options:[],disabled:!0,size:"medium"},null,8,["modelValue"])]),n("div",it,[a(v,{modelValue:b.fieldValue,disabled:!0,size:"medium"},null,8,["modelValue"])]),nt]))),128)),a(H,{handle:".aioseo-drag-wrapper",modelValue:s.tableRules,"onUpdate:modelValue":t[3]||(t[3]=b=>s.tableRules=b),"item-key":e.$.uid.toString(),class:"draggable-rules"},{item:w(({element:b,index:N})=>[n("div",{class:xe(["robots-editor-table__row robots-editor-table__row--stripe",{"aioseo-error":s.hasTableRuleError(N+s.parsedDefaultRules.length+1,b)}])},[n("div",lt,p(N+s.parsedDefaultRules.length+1),1),n("div",at,[a(v,{modelValue:b.userAgent,"onUpdate:modelValue":T=>b.userAgent=T,spellcheck:!1,disabled:!s.getOptions.enable,onChange:T=>s.updateRule(b,"userAgent",T,N),size:"medium"},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),n("div",dt,[a(_,{modelValue:o.directiveOptions.find(T=>T.value===b.directive),options:o.directiveOptions,disabled:!s.getOptions.enable,"onUpdate:modelValue":T=>s.updateRule(b,"directive",T.value,N),size:"medium"},null,8,["modelValue","options","disabled","onUpdate:modelValue"])]),n("div",ct,[a(v,{modelValue:b.fieldValue,"onUpdate:modelValue":T=>b.fieldValue=T,spellcheck:!1,disabled:!s.getOptions.enable,onChange:T=>s.updateRule(b,"fieldValue",T,N),size:"medium"},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),n("div",ut,[G(n("a",{onClick:V(T=>s.deleteRow(N),["prevent"]),href:"#",role:"button",class:"btn-delete-rule aioseo-outline",title:o.strings.deleteRule},[a(A,{width:"20"})],8,bt),[[M,s.getOptions.enable]]),G(n("a",{onClick:t[2]||(t[2]=V(()=>{},["prevent"])),href:"#",role:"button",class:"aioseo-drag-wrapper aioseo-outline"},[a(O,{width:"20"})],512),[[M,s.getOptions.enable]])]),a(L,{errors:s.getTableRuleErrors(N+s.parsedDefaultRules.length+1,b),class:"robots-editor-table__column robots-editor-table__column--rule-error"},null,8,["errors"])],2)]),_:1},8,["modelValue","item-key"])]),n("div",ht,[n("div",mt,[a(f,{onClick:V(s.addRow,["exact"]),disabled:!s.getOptions.enable,class:"btn-add-rule",type:"black",size:"small"},{default:w(()=>[a(W,{width:"14"}),k(" "+p(o.strings.addRule),1)]),_:1},8,["onClick","disabled"]),a(f,{onClick:t[4]||(t[4]=V(b=>o.showImportModal=!0,["prevent"])),disabled:!s.getOptions.enable,type:"black",size:"small"},{default:w(()=>[a(Q,{width:"14"}),k(" "+p(i.GLOBAL_STRINGS.import),1)]),_:1},8,["disabled"])])])])])]),n("div",pt,[n("div",ft,[n("div",_t,[k(p(o.strings.customRobotsPreview)+" ",1),s.robotsPreviewErrorLabel?(R(),S("div",wt,[a(Y,{width:"8"}),n("span",null,p(s.robotsPreviewErrorLabel),1)])):C("",!0)])]),n("div",gt,[a(F,{modelValue:s.inputCustomRobotsTxtPreview,"line-numbers":!0,disabled:"","force-updates":"",monospace:"",ref:"input-custom-robots-txt-preview"},null,8,["modelValue"])])])],64)):(R(),D(d,{key:4,innerHTML:s.subdirectoryAlert},null,8,["innerHTML"])),a(K,{show:o.showImportModal,onClose:t[10]||(t[10]=b=>o.showImportModal=!1),classes:["aioseo-robots-import-modal"]},{headerTitle:w(()=>[k(p(o.strings.importRobots),1)]),body:w(()=>[o.errors.importRobotsTxt?(R(),S("div",xt,[a(d,{type:"red","show-close":"",onCloseAlert:t[5]||(t[5]=b=>o.errors.importRobotsTxt=null)},{default:w(()=>[k(p(o.errors.importRobotsTxt),1)]),_:1})])):C("",!0),n("div",{class:"aioseo-settings-row aioseo-settings-row--or","data-or":i.GLOBAL_STRINGS.or},[n("div",vt,[n("div",kt,p(o.strings.importFromUrl),1)]),n("div",Tt,[a(v,{modelValue:o.inputImportRobotsTxtFromUrl,"onUpdate:modelValue":t[6]||(t[6]=b=>s.onChangeInputImportRobotsTxtFromUrl(b)),placeholder:o.strings.pasteUrl,disabled:!!o.inputPasteRobotsTxtText,type:"url",size:"medium"},null,8,["modelValue","placeholder","disabled"]),o.errors.importRobotsTxtFromUrl?(R(),D(d,{key:0,type:"red",size:"small"},{default:w(()=>[k(p(o.errors.importRobotsTxtFromUrl),1)]),_:1})):C("",!0)])],8,Rt),n("div",St,[n("div",yt,[n("div",It,p(o.strings.pasteRobotsText),1)]),n("div",Ct,[a(F,{modelValue:o.inputPasteRobotsTxtText,"onUpdate:modelValue":t[7]||(t[7]=b=>s.onChangeInputPasteRobotsTxtText(b)),"line-numbers":!0,"minimum-line-numbers":10,disabled:!!o.inputImportRobotsTxtFromUrl,spellcheck:!1,monospace:""},null,8,["modelValue","disabled"]),o.errors.pasteRobotsTxtText?(R(),D(d,{key:0,type:"red",size:"small"},{default:w(()=>[k(p(o.errors.pasteRobotsTxtText),1)]),_:1})):C("",!0)])])]),footer:w(()=>[n("div",At,[a(f,{onClick:t[8]||(t[8]=V(b=>o.showImportModal=!1,["exact"])),type:"gray",size:"medium"},{default:w(()=>[k(p(i.GLOBAL_STRINGS.cancel),1)]),_:1}),a(f,{onClick:t[9]||(t[9]=V(b=>s.onClickBtnImportRobotsTxt(o.inputImportRobotsTxtFromUrl?"url":"text"),["exact"])),loading:o.loading.btnImportRobotsTxt,disabled:!!s.btnImportRobotsTxtDisabled,type:"blue",size:"medium"},{default:w(()=>[k(p(i.GLOBAL_STRINGS.import),1)]),_:1},8,["loading","disabled"])])]),_:1},8,["show"]),o.loading.cardOverlay?(R(),S("div",Ot,[a(X)])):C("",!0)]}),_:1},8,["header-text"])])}const bo=J(Ne,[["render",Nt]]);export{bo as default};
