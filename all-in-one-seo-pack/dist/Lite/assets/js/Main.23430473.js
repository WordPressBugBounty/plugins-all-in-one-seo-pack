import{U as j,D as F}from"./constants.2019bcb3.js";import{u as R,b as Y,m as Q,l as N,k as X,j as J,r as K}from"./index.20192476.js";import{a as U}from"./allowed.f428d9c9.js";import{u as $,C as ee,a as se}from"./Index.86e580cc.js";import{u as oe}from"./Url.0ccd8549.js";import{C as te}from"./Card.46af096e.js";import{C as ie,S as ne,a as re,b as ae}from"./SitemapsPro.b03edcf9.js";import{C as ce}from"./GettingStarted.160e8439.js";import{C as le}from"./Overview.6aab4c21.js";import{C as de}from"./SeoSetup.8a60f26b.js";import{g as me,v as _,o as i,c,C as u,b as p,a as n,t as r,x as k,F as V,J as H,k as w,l as m,f as ue,y as ge,u as f,E as O,q as B}from"./runtime-dom.esm-bundler.6789c400.js";import{u as pe,p as _e}from"./popup.001b1125.js";import{u as Z}from"./SeoSiteScore.cd765b43.js";import{C as he}from"./Blur.31bfcf06.js";import{C as fe}from"./Index.8645c378.js";import{S as Se}from"./Lab.9e460fac.js";import"./translations.12335a6a.js";import{_ as z}from"./_plugin-vue_export-helper.249dac1d.js";import{u as D}from"./AnalyzerStore.bc71b50e.js";import{s as b,_ as s}from"./default-i18n.54b5d8cd.js";import{C as ke}from"./Tooltip.b6b45c85.js";import{C as ve}from"./Index.c0a0a208.js";import{G as Ce,a as ye}from"./Row.f01f32cd.js";import{S as we}from"./Book.e7bb6a80.js";import{S as be,a as Le}from"./Build.828bd995.js";import{a as Ae}from"./index.ee8124c6.js";import{S as xe}from"./History.4e6093cb.js";import{S as Ne}from"./Message.771f17d2.js";import{S as Oe}from"./Rocket.2692f287.js";import{S as ze}from"./Statistics.324b239a.js";import{S as Te}from"./VideoCamera.b2c575e9.js";import"./helpers.f95d5840.js";import"./vue-router.fc4966b9.js";import"./license.37048367.js";import"./upperFirst.96c04516.js";import"./_stringToArray.08127ca9.js";import"./toString.1401d490.js";/* empty css             */import"./params.764403f6.js";import"./Tabs.2fd33524.js";import"./Caret.662da1f3.js";import"./ProBadge.7733ac87.js";import"./Information.82968754.js";import"./Slide.d0517fb0.js";import"./Header.b89e033a.js";import"./addons.9d0af6ad.js";import"./LicenseKeyBar.4ba21094.js";import"./ScrollTo.97c9805f.js";import"./LogoGear.29bd352d.js";import"./AnimatedNumber.66005608.js";import"./numbers.b55b32c5.js";import"./Logo.f6ea28bf.js";import"./Support.9384b810.js";import"./date.839db266.js";import"./datetime.cb3980ce.js";import"./Exclamation.bf79561a.js";import"./Gear.1433c8c3.js";import"./Index.de83b4aa.js";import"./DonutChartWithLegend.6a15c88c.js";import"./SetupWizardStore.f902c357.js";const M="all-in-one-seo-pack",Ue={setup(l){const{description:a,errorObject:h,strings:e}=Z({score:me(l.score)});return{analyzerStore:D(),composableStrings:e,description:a,errorObject:h,rootStore:R()}},components:{CoreSiteScore:fe,SvgDannieLab:Se},props:{score:Number,loading:Boolean,summary:{type:Object,default(){return{}}}},data(){return{allowed:U,strings:this.composableStrings}},computed:{getError(){switch(this.analyzerStore.analyzeError){case"invalid-url":return s("The URL provided is invalid.",M);case"missing-content":return s("We were unable to parse the content for this site.",M);case"invalid-token":return b(s("Your site is not connected. Please connect to %1$s, then try again.",M),"AIOSEO")}return this.analyzerStore.analyzeError}}},Ee={class:"aioseo-site-score-dashboard"},Me={key:0,class:"aioseo-seo-site-score-score"},Ve={key:1,class:"aioseo-seo-site-score-recommendations"},He={class:"critical"},Re={class:"round red"},qe={class:"recommended"},Be={class:"round blue"},Pe={class:"good"},Ze={class:"round green"},De={key:0,class:"links"},Ge=["href"],Ie=["href"],We={key:2,class:"seo-analysis-error"},je={class:"error-title"},Fe=["innerHTML"],Ye={class:"error-action-buttons"};function Qe(l,a,h,e,t,v){const C=_("core-site-score"),L=_("svg-dannie-lab"),y=_("base-button");return i(),c("div",Ee,[e.analyzerStore.analyzeError?p("",!0):(i(),c("div",Me,[u(C,{loading:h.loading,score:h.score,description:e.description,strokeWidth:1.75},null,8,["loading","score","description"])])),e.analyzerStore.analyzeError?p("",!0):(i(),c("div",Ve,[n("div",He,[n("span",Re,r(h.summary.critical||0),1),k(" "+r(t.strings.criticalIssues),1)]),n("div",qe,[n("span",Be,r(h.summary.recommended||0),1),k(" "+r(t.strings.recommendedImprovements),1)]),n("div",Pe,[n("span",Ze,r(h.summary.good||0),1),k(" "+r(t.strings.goodResults),1)]),t.allowed("aioseo_seo_analysis_settings")?(i(),c("div",De,[n("a",{href:e.rootStore.aioseo.urls.aio.seoAnalysis},r(t.strings.completeSiteAuditChecklist),9,Ge),n("a",{href:e.rootStore.aioseo.urls.aio.seoAnalysis,class:"no-underline"},"→",8,Ie)])):p("",!0)])),e.analyzerStore.analyzeError&&e.errorObject?(i(),c("div",We,[u(L),n("p",je,r(t.strings.anErrorOccurred),1),n("p",{class:"error-description",innerHTML:e.errorObject.description},null,8,Fe),n("div",Ye,[(i(!0),c(V,null,H(e.errorObject.buttons,(g,A)=>(i(),w(y,{key:A,type:g.type,tag:g.tag?g.tag:"button",target:"_blank",href:g.url?g.url:"",size:"small",loading:(g==null?void 0:g.runAgain)&&e.analyzerStore.analyzing,onClick:T=>g!=null&&g.runAgain?e.analyzerStore.runSiteAnalyzer():""},{default:m(()=>[k(r(g.text),1)]),_:2},1032,["type","tag","href","loading","onClick"]))),128))])])):p("",!0)])}const P=z(Ue,[["render",Qe]]),Xe={class:"aioseo-seo-site-score"},Je={key:1,class:"aioseo-seo-site-score-cta"},Ke={__name:"Index",setup(l){const{connectWithAioseo:a,description:h,strings:e}=Z(),t=D(),v=pe(),C=Y(),L=R(),y=ue(()=>({recommended:t.recommendedCount(),critical:t.criticalCount(),good:t.goodCount()})),g=S=>{_e(S,a,600,630,!0,["token"],A,T)},A=S=>v.saveConnectToken(S.token),T=S=>{S&&t.runSiteAnalyzer(),t.analyzing=!0};return ge(()=>{!C.internalOptions.internal.siteAnalysis.score&&C.internalOptions.internal.siteAnalysis.connectToken&&(t.analyzing=!0,t.runSiteAnalyzer())}),(S,x)=>(i(),c("div",Xe,[f(C).internalOptions.internal.siteAnalysis.connectToken?p("",!0):(i(),w(f(he),{key:0},{default:m(()=>[u(f(P),{score:85,description:f(h)},null,8,["description"])]),_:1})),f(C).internalOptions.internal.siteAnalysis.connectToken?p("",!0):(i(),c("div",Je,[n("a",{href:"#",onClick:x[0]||(x[0]=O(q=>g(f(L).aioseo.urls.connect),["prevent"]))},r(f(a)),1),k(" "+r(f(e).toSeeYourSiteScore),1)])),f(C).internalOptions.internal.siteAnalysis.connectToken?(i(),w(f(P),{key:2,score:f(C).internalOptions.internal.siteAnalysis.score,description:f(h),loading:f(t).analyzing,summary:y.value},null,8,["score","description","loading","summary"])):p("",!0)]))}},$e={},es={viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-svg-clipboard-checkmark"},ss=n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.29 4.66668H22.1667C23.45 4.66668 24.5 5.71668 24.5 7.00001V23.3333C24.5 24.6167 23.45 25.6667 22.1667 25.6667H5.83333C5.67 25.6667 5.51833 25.655 5.36667 25.6317C4.91167 25.5383 4.50333 25.305 4.18833 24.99C3.97833 24.7683 3.80333 24.5233 3.68667 24.2433C3.57 23.9633 3.5 23.6483 3.5 23.3333V7.00001C3.5 6.67334 3.57 6.37001 3.68667 6.10168C3.80333 5.82168 3.97833 5.56501 4.18833 5.35501C4.50333 5.04001 4.91167 4.80668 5.36667 4.71334C5.51833 4.67834 5.67 4.66668 5.83333 4.66668H10.71C11.2 3.31334 12.4833 2.33334 14 2.33334C15.5167 2.33334 16.8 3.31334 17.29 4.66668ZM19.355 10.01L21 11.6667L11.6667 21L7 16.3334L8.645 14.6884L11.6667 17.6984L19.355 10.01ZM14 4.37501C14.4783 4.37501 14.875 4.77168 14.875 5.25001C14.875 5.72834 14.4783 6.12501 14 6.12501C13.5217 6.12501 13.125 5.72834 13.125 5.25001C13.125 4.77168 13.5217 4.37501 14 4.37501ZM5.83333 23.3333H22.1667V7.00001H5.83333V23.3333Z",fill:"currentColor"},null,-1),os=[ss];function ts(l,a){return i(),c("svg",es,os)}const is=z($e,[["render",ts]]),ns={},rs={viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-location-pin"},as=n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.9999 2.33331C17.8616 2.33331 20.9999 5.47165 20.9999 9.33331C20.9999 14.5833 13.9999 22.1666 13.9999 22.1666C13.9999 22.1666 6.99992 14.5833 6.99992 9.33331C6.99992 5.47165 10.1383 2.33331 13.9999 2.33331ZM22.1666 25.6666V23.3333H5.83325V25.6666H22.1666ZM9.33325 9.33331C9.33325 6.75498 11.4216 4.66665 13.9999 4.66665C16.5783 4.66665 18.6666 6.75498 18.6666 9.33331C18.6666 11.8183 16.2399 15.7033 13.9999 18.5616C11.7599 15.715 9.33325 11.8183 9.33325 9.33331ZM11.6666 9.33331C11.6666 8.04998 12.7166 6.99998 13.9999 6.99998C15.2833 6.99998 16.3333 8.04998 16.3333 9.33331C16.3333 10.6166 15.2949 11.6666 13.9999 11.6666C12.7166 11.6666 11.6666 10.6166 11.6666 9.33331Z",fill:"currentColor"},null,-1),cs=[as];function ls(l,a){return i(),c("svg",rs,cs)}const ds=z(ns,[["render",ls]]),ms={},us={viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-title-and-meta"},gs=n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M22.75 4.08334L21 2.33334L19.25 4.08334L17.5 2.33334L15.75 4.08334L14 2.33334L12.25 4.08334L10.5 2.33334L8.75 4.08334L7 2.33334L5.25 4.08334L3.5 2.33334V25.6667L5.25 23.9167L7 25.6667L8.75 23.9167L10.5 25.6667L12.25 23.9167L14 25.6667L15.75 23.9167L17.5 25.6667L19.25 23.9167L21 25.6667L22.75 23.9167L24.5 25.6667V2.33334L22.75 4.08334ZM22.1667 22.2717H5.83333V5.72833H22.1667V22.2717ZM21 17.5H7V19.8333H21V17.5ZM7 12.8333H21V15.1667H7V12.8333ZM21 8.16668H7V10.5H21V8.16668Z",fill:"currentColor"},null,-1),ps=[gs];function _s(l,a){return i(),c("svg",us,ps)}const hs=z(ms,[["render",_s]]),o="all-in-one-seo-pack",fs={setup(){const{dismissed:l,notificationTitle:a,notifications:h,notificationsCount:e,strings:t}=$(),{getHref:v}=oe();return{UPSELL_FEATURE_LIST:j,composableStrings:t,dismissed:l,getHref:v,licenseStore:Q(),links:N,notificationTitle:a,notifications:h,notificationsCount:e,notificationsStore:X(),rootStore:R(),settingsStore:J()}},components:{CoreCard:te,CoreFeatureCard:ie,CoreGettingStarted:ce,CoreMain:ee,CoreNotificationCards:se,CoreOverview:le,CoreSeoSetup:de,CoreSeoSiteScore:Ke,CoreTooltip:ke,Cta:ve,GridColumn:Ce,GridRow:ye,SvgBook:we,SvgBuild:be,SvgCircleQuestionMark:Ae,SvgClipboardCheckmark:is,SvgHistory:xe,SvgLinkAssistant:ne,SvgLocationPin:ds,SvgMessage:Ne,SvgRedirect:re,SvgRocket:Oe,SvgShare:Le,SvgSitemapsPro:ae,SvgStatistics:ze,SvgTitleAndMeta:hs,SvgVideoCamera:Te},data(){return{allowed:U,visibleNotifications:2,strings:K(this.composableStrings,{pageName:s("Dashboard",o),noNewNotificationsThisMoment:s("There are no new notifications at this moment.",o),seeAllDismissedNotifications:s("See all dismissed notifications.",o),seoSiteScore:s("SEO Site Score",o),seoOverview:b(s("%1$s Overview",o),"AIOSEO"),seoSetup:s("SEO Setup",o),support:s("Support",o),readSeoUserGuide:b(s("Read the %1$s user guide",o),"All in One SEO"),accessPremiumSupport:s("Access our Premium Support",o),viewChangelog:s("View the Changelog",o),watchVideoTutorials:s("Watch video tutorials",o),gettingStarted:s("Getting started? Read the Beginners Guide",o),quicklinks:s("Quicklinks",o),quicklinksTooltip:s("You can use these quicklinks to quickly access our settings pages to adjust your site's SEO settings.",o),manage:s("Manage",o),searchAppearance:s("Search Appearance",o),manageSearchAppearance:s("Configure how your website content will look in Google, Bing and other search engines.",o),seoAnalysis:s("SEO Analysis",o),manageSeoAnalysis:s("Check how your site scores with our SEO analyzer and compare against your competitor's site.",o),localSeo:s("Local SEO",o),manageLocalSeo:s("Improve local SEO rankings with schema for business address, open hours, contact, and more.",o),socialNetworks:s("Social Networks",o),manageSocialNetworks:s("Setup Open Graph for Facebook, X (Twitter), etc. to show the right content / thumbnail preview.",o),tools:s("Tools",o),manageTools:s("Fine-tune your site with our powerful tools including Robots.txt editor, import/export and more.",o),sitemap:s("Sitemaps",o),manageSitemap:s("Manage all of your sitemap settings, including XML, Video, News and more.",o),linkAssistant:s("Link Assistant",o),manageLinkAssistant:s("Manage existing links, get relevant suggestions for adding internal links to older content, discover orphaned posts and more.",o),redirects:s("Redirection Manager",o),manageRedirects:s("Easily create and manage redirects for your broken links to avoid confusing search engines and users, as well as losing valuable backlinks.",o),searchStatistics:s("Search Statistics",o),manageSearchStatistics:s("Track how your site is performing in search rankings and generate reports with actionable insights.",o),ctaHeaderText:b(s("Get more features in %1$s %2$s:",o),"AIOSEO","Pro"),ctaButton:b(s("Upgrade to %1$s and Save %2$s",o),"Pro",F),dismissAll:s("Dismiss All",o),relaunchSetupWizard:s("Relaunch Setup Wizard",o)})}},computed:{moreNotifications(){return this.remainingNotificationsCount===1?s("You have 1 more notification",o):b(s("You have %1$s more notifications",o),this.remainingNotificationsCount)},remainingNotificationsCount(){return this.notifications.length-this.visibleNotifications},filteredNotifications(){return[...this.notifications].splice(0,this.visibleNotifications)},supportOptions(){const l=[{icon:"svg-book",text:this.strings.readSeoUserGuide,link:N.utmUrl("dashboard-support-box","user-guide","doc-categories/getting-started/"),blank:!0},{icon:"svg-message",text:this.strings.accessPremiumSupport,link:N.utmUrl("dashboard-support-box","premium-support","contact/"),blank:!0},{icon:"svg-history",text:this.strings.viewChangelog,link:N.utmUrl("dashboard-support-box","changelog","changelog/"),blank:!0},{icon:"svg-book",text:this.strings.gettingStarted,link:N.utmUrl("dashboard-support-box","beginners-guide","docs/quick-start-guide/"),blank:!0}];return U("aioseo_setup_wizard")?this.settingsStore.settings.showSetupWizard?l:l.concat({icon:"svg-rocket",text:this.strings.relaunchSetupWizard,link:this.rootStore.aioseo.urls.aio.wizard,blank:!1}):l},quickLinks(){return[{icon:"svg-title-and-meta",description:this.strings.manageSearchAppearance,name:this.strings.searchAppearance,manageUrl:this.rootStore.aioseo.urls.aio.searchAppearance,access:"aioseo_search_appearance_settings"},{icon:"svg-clipboard-checkmark",description:this.strings.manageSeoAnalysis,name:this.strings.seoAnalysis,manageUrl:this.rootStore.aioseo.urls.aio.seoAnalysis,access:"aioseo_seo_analysis_settings"},{icon:"svg-location-pin",description:this.strings.manageLocalSeo,name:this.strings.localSeo,manageUrl:this.rootStore.aioseo.urls.aio.localSeo,access:"aioseo_local_seo_settings"},{icon:"svg-share",description:this.strings.manageSocialNetworks,name:this.strings.socialNetworks,manageUrl:this.rootStore.aioseo.urls.aio.socialNetworks,access:"aioseo_social_networks_settings"},{icon:"svg-statistics",description:this.strings.manageSearchStatistics,name:this.strings.searchStatistics,manageUrl:this.rootStore.aioseo.urls.aio.searchStatistics,access:"aioseo_search_statistics_settings"},{icon:"svg-sitemaps-pro",description:this.strings.manageSitemap,name:this.strings.sitemap,manageUrl:this.rootStore.aioseo.urls.aio.sitemaps,access:"aioseo_sitemap_settings"},{icon:"svg-link-assistant",description:this.strings.manageLinkAssistant,name:this.strings.linkAssistant,manageUrl:this.rootStore.aioseo.urls.aio.linkAssistant,access:"aioseo_link_assistant_settings"},{icon:"svg-redirect",description:this.strings.manageRedirects,name:this.strings.redirects,manageUrl:this.rootStore.aioseo.urls.aio.redirects,access:"aioseo_redirects_settings"}].filter(l=>U(l.access))}},methods:{processDismissAllNotifications(){const l=[];this.notifications.forEach(a=>{l.push(a.slug)}),this.notificationsStore.dismissNotifications(l)}}},Ss={class:"aioseo-dashboard"},ks={key:0,class:"dashboard-getting-started"},vs={class:"aioseo-quicklinks-title"},Cs={class:"feature-card-body"},ys={class:"feature-card-header"},ws={class:"feature-card-description"},bs={key:0,class:"learn-more"},Ls=["href"],As=["href"],xs={key:0,class:"notifications-count"},Ns={class:"no-dashboard-notifications"},Os={key:0,class:"notification-footer"},zs={class:"more-notifications"},Ts=["href","target"];function Us(l,a,h,e,t,v){const C=_("core-getting-started"),L=_("core-seo-setup"),y=_("core-card"),g=_("core-overview"),A=_("svg-circle-question-mark"),T=_("core-tooltip"),S=_("grid-column"),x=_("grid-row"),q=_("core-seo-site-score"),G=_("core-notification-cards"),I=_("cta"),W=_("core-main");return i(),c("div",Ss,[u(W,{"page-name":t.strings.pageName,"show-tabs":!1,"show-save-button":!1},{default:m(()=>[n("div",null,[e.settingsStore.settings.showSetupWizard&&t.allowed("aioseo_setup_wizard")?(i(),c("div",ks,[u(C)])):p("",!0),u(x,null,{default:m(()=>[u(S,{md:"6"},{default:m(()=>[e.rootStore.aioseo.setupWizard.isCompleted?p("",!0):(i(),w(y,{key:0,slug:"dashboardSeoSetup","header-text":t.strings.seoSetup},{default:m(()=>[u(L)]),_:1},8,["header-text"])),u(y,{slug:"dashboardOverview","header-text":t.strings.seoOverview},{default:m(()=>[u(g)]),_:1},8,["header-text"]),v.quickLinks.length>0?(i(),w(x,{key:1,class:"aioseo-quicklinks-cards-row"},{default:m(()=>[u(S,null,{default:m(()=>[n("div",vs,[k(r(t.strings.quicklinks)+" ",1),u(T,null,{tooltip:m(()=>[k(r(t.strings.quicklinksTooltip),1)]),default:m(()=>[u(A)]),_:1})])]),_:1}),(i(!0),c(V,null,H(v.quickLinks,(d,E)=>(i(),w(S,{key:E,lg:"6",class:"aioseo-quicklinks-cards"},{default:m(()=>[n("div",Cs,[n("div",ys,[(i(),w(B(d.icon))),k(" "+r(d.name),1)]),n("div",ws,[k(r(d.description)+" ",1),d.manageUrl&&t.allowed(d.access)?(i(),c("div",bs,[n("a",{href:e.getHref(d.manageUrl)},r(t.strings.manage),9,Ls),n("a",{href:e.getHref(d.manageUrl),class:"no-underline"}," → ",8,As)])):p("",!0)])])]),_:2},1024))),128))]),_:1})):p("",!0)]),_:1}),u(S,{md:"6"},{default:m(()=>[u(y,{slug:"dashboardSeoSiteScore","header-text":t.strings.seoSiteScore},{default:m(()=>[u(q)]),_:1},8,["header-text"]),u(y,{class:"dashboard-notifications",slug:"dashboardNotifications"},{header:m(()=>[e.notificationsCount?(i(),c("div",xs," ("+r(e.notificationsCount)+") ",1)):p("",!0),n("div",null,r(e.notificationTitle),1),e.dismissed?(i(),c("a",{key:1,class:"show-dismissed-notifications",href:"#",onClick:a[0]||(a[0]=O(d=>e.dismissed=!1,["prevent"]))},r(t.strings.activeNotifications),1)):p("",!0)]),default:m(()=>[u(G,{notifications:v.filteredNotifications,dismissedCount:e.notificationsStore.dismissedNotificationsCount,onToggleDismissed:a[2]||(a[2]=d=>e.dismissed=!e.dismissed)},{"no-notifications":m(()=>[n("div",Ns,[n("div",null,r(t.strings.noNewNotificationsThisMoment),1),e.notificationsStore.dismissedNotificationsCount?(i(),c("a",{key:0,href:"#",onClick:a[1]||(a[1]=O(d=>e.dismissed=!0,["prevent"]))},r(t.strings.seeAllDismissedNotifications),1)):p("",!0)])]),_:1},8,["notifications","dismissedCount"]),e.notifications.length>t.visibleNotifications?(i(),c("div",Os,[n("div",zs,[n("a",{href:"#",onClick:a[3]||(a[3]=O((...d)=>e.notificationsStore.toggleNotifications&&e.notificationsStore.toggleNotifications(...d),["stop","prevent"]))},r(v.moreNotifications),1),n("a",{class:"no-underline",href:"#",onClick:a[4]||(a[4]=O((...d)=>e.notificationsStore.toggleNotifications&&e.notificationsStore.toggleNotifications(...d),["stop","prevent"]))}," → ")])])):p("",!0)]),_:1}),u(y,{class:"dashboard-support",slug:"dashboardSupport","header-text":t.strings.support},{default:m(()=>[(i(!0),c(V,null,H(v.supportOptions,(d,E)=>(i(),c("div",{key:E,class:"aioseo-settings-row"},[n("a",{href:d.link,target:d.blank?"_blank":null},[(i(),w(B(d.icon))),k(" "+r(d.text),1)],8,Ts)]))),128))]),_:1},8,["header-text"]),e.licenseStore.isUnlicensed?(i(),w(I,{key:0,class:"dashboard-cta",type:3,floating:!1,"cta-link":e.links.utmUrl("dashboard-cta"),"feature-list":e.UPSELL_FEATURE_LIST,"button-text":t.strings.ctaButton,"learn-more-link":e.links.getUpsellUrl("dashboard-cta",null,e.rootStore.isPro?"pricing":"liteUpgrade")},{"header-text":m(()=>[k(r(t.strings.ctaHeaderText),1)]),_:1},8,["cta-link","feature-list","button-text","learn-more-link"])):p("",!0)]),_:1})]),_:1})])]),_:1},8,["page-name"])])}const Po=z(fs,[["render",Us]]);export{Po as default};
