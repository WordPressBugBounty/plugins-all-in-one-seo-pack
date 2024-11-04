import{h as c,i as m}from"./index.lqcu3hi3.js";import{a as g}from"./addons.ds3c4v6r.js";import"./translations.e22mvhfh.js";import{_ as e,s as l}from"./default-i18n.bz7purh4.js";import{f,y as h}from"./runtime-dom.esm-bundler.h3clfjuw.js";const s="all-in-one-seo-pack",i=[{value:"optimized-search-appearance",name:e("Optimized Search Appearance",s),description:e("Get all the right tools to make sure your website shows up in Google Search.",s),required:!0,pro:!1,upgrade:!1},{value:"sitemaps",name:e("Sitemaps",s),description:e("Sitemaps are a list of all your content that search engines use when they crawl your site.",s),required:!0,pro:!1,upgrade:!1},{value:"broken-link-checker",name:e("Broken Link Checker",s),pluginName:e("Broken Link Checker",s),description:e("Get the best tool to monitor your site for broken links and easily fix them to improve your SEO.",s),installs:e("Installs Broken Link Checker",s),required:!1,pro:!1,upgrade:!1},{value:"analytics",name:e("Analytics",s),pluginName:e("MonsterInsights Free",s),description:e("Get the #1 analytics plugin to see how people find and use your website. Simply put, see stats that matter.",s),installs:e("Installs MonsterInsights Free",s),required:!1,pro:!1,upgrade:!1},{value:"conversion-tools",name:e("Conversion Tools",s),pluginName:e("OptinMonster",s),description:e("Get the #1 conversion optimization plugin to convert your growing website traffic into subscribers, leads and sales.",s),installs:e("Installs OptinMonster",s),required:!1,pro:!1,upgrade:!1},{value:"aioseo-image-seo",name:e("Image SEO",s),pluginName:e("Image SEO",s),description:e("Globally control the title, alt text, description and filename for attachment pages & images that are embedded in your content.",s),installs:e("Installs AIOSEO Image SEO",s),required:!1,pro:!0,upgrade:"aioseo-image-seo"},{value:"aioseo-eeat",name:e("Author SEO",s),pluginName:e("Author SEO (E-E-A-T)",s),description:e("Boost your SEO performance by highlighting the professional expertise and trustworthiness of your authors, aligning with Google's E-E-A-T standards.",s),installs:e("Installs AIOSEO Author SEO (E-E-A-T)",s),required:!1,pro:!0,upgrade:"aioseo-eeat"},{value:"aioseo-local-business",name:e("Local SEO",s),pluginName:e("Local Business SEO",s),description:e("Tell Google about your business for display as a Knowledge Graph card or business carousel.",s),installs:e("Installs AIOSEO Local SEO",s),required:!1,pro:!0,upgrade:"aioseo-local-business"},{value:"aioseo-video-sitemap",name:e("Video Sitemap",s),pluginName:e("Video Sitemap",s),description:e("Generate an XML Sitemap specifically for videos on your site to help search engines find them.",s),installs:e("Installs AIOSEO Video Sitemap",s),required:!1,pro:!0,upgrade:"aioseo-video-sitemap"},{value:"aioseo-news-sitemap",name:e("News Sitemap",s),pluginName:e("News Sitemap",s),description:e("Submit articles to Google News that were published in the last 48 hours.",s),installs:e("Installs AIOSEO News Sitemap",s),required:!1,pro:!0,upgrade:"aioseo-news-sitemap"},{value:"aioseo-redirects",name:e("Smart Redirects + 404 Detection",s),pluginName:e("Redirects",s),description:e("Create and manage redirects for your broken links.",s),installs:e("Installs AIOSEO Redirects",s),required:!1,pro:!0,upgrade:"aioseo-redirects"},{value:"aioseo-link-assistant",name:e("Link Assistant",s),pluginName:e("Link Assistant",s),description:e("Get relevant suggestions for adding internal links to older content as well as finding any orphaned posts that have no internal links.",s),installs:e("Installs AIOSEO Link Assistant",s),required:!1,pro:!0,upgrade:"aioseo-link-assistant"},{value:"aioseo-index-now",name:e("Index Now",s),pluginName:e("Index Now",s),description:e("Add IndexNow support to instantly notify search engines when your content has changed.",s),installs:e("Installs AIOSEO Index Now",s),required:!1,pro:!0,upgrade:"aioseo-index-now"},{value:"aioseo-rest-api",name:e("REST API",s),pluginName:e("REST API",s),description:e("Manage your post and term SEO meta via the WordPress REST API. This addon also works seamlessly with headless WordPress installs.",s),installs:e("Installs AIOSEO REST API",s),required:!1,pro:!0,upgrade:"aioseo-rest-api"},{value:"advanced-schema",name:e("Advanced Rich Snippets + Schema Markups",s),description:e("Complete support for schema markup so you can get more clicks and traffic with rich snippets.",s),required:!1,pro:!0,upgrade:!1}],O=(u={})=>{const{stage:r}=u,p={skipThisStep:e("Skip this Step",s),goBack:e("Go Back",s),saveAndContinue:e("Save and Continue",s),closeAndExit:e("Close and Exit Wizard Without Saving",s),buildABetterAioseo:l(e("Build a Better %1$s",s),"AIOSEO"),getImprovedFeatures:l(e("Get improved features and faster fixes by sharing non-sensitive data via usage tracking that shows us how %1$s is being used. No personal data is tracked or stored.",s),"AIOSEO"),noThanks:e("No thanks",s),yesCountMeIn:e("Yes, count me in!",s)},n=c(),d=f(()=>n.features?n.features.filter(a=>o(i.find(t=>t.value===a))).map(a=>i.find(t=>t.value===a)):[]),o=a=>a.pro?m().isUnlicensed?!0:a.upgrade&&g.requiresUpgrade(a.upgrade):!1;return h(()=>{r&&(n.currentStage=r)}),{features:i,getSelectedUpsellFeatures:d,needsUpsell:o,strings:p}};export{O as u};
