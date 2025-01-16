var b=Object.defineProperty;var f=(r,e,a)=>e in r?b(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a;var s=(r,e,a)=>f(r,typeof e!="symbol"?e+"":e,a);import{u as l,p as w,d as v,b as d,h,l as g}from"./index.a87126ce.js";import"./translations.d159963e.js";import{s as n,_ as o}from"./default-i18n.20001971.js";const t="all-in-one-seo-pack";class k{constructor(){s(this,"personalize",!1);s(this,"head",(e,a)=>this[e+"Head"]!==void 0?this[e+"Head"](a):"");s(this,"body",(e,a)=>this[e+"Body"]!==void 0?this[e+"Body"](a):"");s(this,"titleHead",e=>{switch((e==null?void 0:e.error)||""){case"title-missing":return o("We couldn't find an SEO Title.",t);case"title-too-short":return this.personalize?n(o("Your SEO title is only %1$d characters long, which is too short.",t),e.value.length):n(o("The SEO title is only %1$d characters long, which is too short.",t),e.value.length);case"title-too-long":return this.personalize?n(o("Your SEO title is %1$d characters long, which is too long.",t),e.value.length):n(o("The SEO title is %1$d characters long, which is too long.",t),e.value.length);default:return this.personalize?n(o("Your SEO title is set and is %1$d characters long.",t),e.value.length):n(o("The SEO title is set and is %1$d characters long.",t),e.value.length)}});s(this,"titleBody",e=>{const a=l();return{code:e.value,message:o("Ensure your page's title includes your target keywords, and design it to encourage users to click.",t)+"<br><br>"+o("Writing compelling titles is both a science and an art. There are automated tools that can analyze your title against known metrics for readability and click-worthiness. You also need to understand the psychology of your target audience.",t),buttonText:o("Edit Your Page Title",t),buttonLink:a.aioseo.data.staticHomePage?`${a.aioseo.urls.staticHomePage}&aioseo-scroll=aioseo-post-settings-post-title-row&aioseo-highlight=aioseo-post-settings-post-title-row`:`${a.aioseo.urls.aio.searchAppearance}&aioseo-scroll=aioseo-home-page-site-title&aioseo-highlight=aioseo-home-page-site-title`}});s(this,"descriptionHead",e=>{switch((e==null?void 0:e.error)||""){case"description-missing":return this.personalize?o("No meta description was found for your page.",t):o("No meta description was found for the page.",t);case"description-too-short":return this.personalize?n(o("Your meta description is only %1$d characters long, which is too short.",t),e.value.length):n(o("The meta description is only %1$d characters long, which is too short.",t),e.value.length);case"description-too-long":return this.personalize?n(o("Your meta description is %1$d characters long, which is too long.",t),e.value.length):n(o("The meta description is %1$d characters long, which is too long.",t),e.value.length);default:return this.personalize?n(o("Your meta description is set and is %1$d characters long.",t),e.value.length):n(o("The meta description is set and is %1$d characters long.",t),e.value.length)}});s(this,"descriptionBody",e=>{const a=l();return{code:e.error==="description-missing"?null:e.value,message:o("Write a meta description for your page. Use your target keywords (in a natural way) and write with human readers in mind. Summarize the content - describe the topics your article discusses.",t)+"<br><br>"+o("The description should stimulate reader interest and get them to click on the article. Think of it as a mini-advertisement for your content.",t),buttonText:o("Edit Your Meta Description",t),buttonLink:a.aioseo.data.staticHomePage?`${a.aioseo.urls.staticHomePage}&aioseo-scroll=aioseo-post-settings-meta-description-row&aioseo-highlight=aioseo-post-settings-meta-description-row`:`${a.aioseo.urls.aio.searchAppearance}&aioseo-scroll=aioseo-home-page-meta-description&aioseo-highlight=aioseo-home-page-meta-description`}});s(this,"h1TagsHead",e=>{switch((e==null?void 0:e.error)||""){case"h1-missing":return o("No H1 tag was found.",t)+" "+o("For the best user experience there should be exactly one H1 tag on each page.",t);case"h1-too-many":return n(o("%1$d H1 tags were found.",t),e.value.length)+" "+o("For the best user experience there should be exactly one H1 tag on each page.",t);default:return this.personalize?o("One H1 tag was found on your page.",t):o("One H1 tag was found on the page.",t)}});s(this,"h1TagsBody",e=>{const a=l();return{code:e.error==="h1-missing"?null:e.value.join("<br>"),message:o("WordPress sites usually insert the page or post title as an H1 tag (although custom themes can change this behavior).",t)+"<br><br>"+o("Ensure your most important keywords appear in the H1 tag - don't force it, use them in a natural way that makes sense to human readers.",t)+"<br><br>"+o("Because your headline plays a large role in reader engagement, it's worth spending extra time perfecting it. Many top copywriters spend hours getting their headlines just right - sometimes they spend longer on the headline than the rest of the article!",t)+"<br><br>"+o("A good headline stimulates reader interest and offers a compelling reason to read your content. It promises a believable benefit.",t)+"<br><br>"+o("You should write as if your readers are selfish people with short attention spans (because that describes a large percentage of the world's population). Readers visit websites for selfish reasons - they're not there to make you happy.",t),buttonText:o("Edit Your Page",t),buttonLink:a.aioseo.data.staticHomePage?a.aioseo.urls.staticHomePage:null}});s(this,"h2TagsHead",e=>e.error==="h2-missing"?this.personalize?o("No H2 tags were found on your page.",t):o("No H2 tags were found on the page.",t):this.personalize?o("H2 tags were found on your page.",t)+" ("+e.value.length+")":o("H2 tags were found on the page.",t)+" ("+e.value.length+")");s(this,"h2TagsBody",e=>{const a=l();return{code:e.error==="h2-missing"?null:e.value.join("<br>"),message:o("Make sure you have a good balance of H2 tags to plain text in your content. Break the content down into logical sections, and use headings to introduce each new topic.",t)+"<br><br>"+o("Also, try to include synonyms and relevant terminology in H2 tag text. Search engines are pretty smart - they know which words usually occur together in each niche.",t)+"<br><br>"+o("It should be easy to include your main and supporting keywords in the H2 tags - after all, these keywords describe your content! If it's hard to work the keywords into your subheadings, it could be a sign that the keywords aren't closely related to your content.",t)+"<br><br>"+o("Don't try to force keywords into sub-headings if they feel unnatural. It will send the wrong message to your readers, possibly driving them away.",t),buttonText:o("Edit Your Page",t),buttonLink:a.aioseo.data.staticHomePage?a.aioseo.urls.staticHomePage:null}});s(this,"noImgAltAttsHead",e=>e.error==="image-missing-alt"?this.personalize?o("Some images on your page have no alt attribute.",t)+" ("+e.value.length+")":o("Some images on the page have no alt attribute.",t)+" ("+e.value.length+")":this.personalize?o("All images on your page have alt attributes.",t):o("All images on the page have alt attributes.",t));s(this,"noImgAltAttsBody",e=>{const a=l();return{codeAlt:e.error!=="image-missing-alt"?null:e.value.map(u=>w(u)).join(`
`),message:o("Make sure every image has an alt tag, and add useful descriptions to each image. Add your keywords or synonyms - but do it in a natural way.",t),buttonText:o("Edit Your Page",t),buttonLink:a.aioseo.data.staticHomePage?a.aioseo.urls.staticHomePage:null}});s(this,"linksRatioHead",e=>{switch((e==null?void 0:e.error)||""){case"internal-links-missing":return this.personalize?o("No internal links were found on your page.",t):o("No internal links were found on the page.",t);case"internal-links-too-few":return this.personalize?o("Too few internal links on your page.",t):o("Too few internal links on the page.",t);case"invalid-ratio":return o("The ratio of internal links to external links is uneven.",t);default:return this.personalize?o("Your page has a correct number of internal and external links.",t):o("The page has a correct number of internal and external links.",t)}});s(this,"linksRatioBody",e=>{const a=l();return{code:o("Internal:",t)+" "+e.value.internal+"<br>"+o("External:",t)+" "+e.value.external,message:o(`Add links to internal and external resources that are useful for your readers. For Internal links, make sure the links are highly relevant to the subject you're writing about. For external links, make sure you link to high-quality sites - Google penalizes pages that link to "spammy" sites (ones that break the Google webmaster guidelines).`,t)+"<br><br>"+o("It's impossible to cover every aspect of a subject on a single page, but your readers may be fascinated by some detail you barely touch on. If you link to a resource where they can learn more, they'll be grateful. What's more, you'll be rewarded with higher rankings!",t),buttonText:o("Edit Your Page",t),buttonLink:a.aioseo.data.staticHomePage?a.aioseo.urls.staticHomePage:null}});s(this,"canonicalTagHead",e=>e.error==="canonical-missing"?this.personalize?o("No canonical link tag found on your page.",t):o("No canonical link tag found on the page.",t):this.personalize?o("Your page is using the canonical link tag.",t):o("The page is using the canonical link tag.",t));s(this,"canonicalTagBody",e=>{const a=l();return{code:e.value,message:o(`Every page on your site should have a <link> tag with a 'rel="canonical"' attribute. The link tag should go inside the page's head tag, and it should contain the page's "correct" URL.`,t)+"<br><br>"+o(`If you've republished an article from another source (such as another site or a different section of your own site) then you need to pick which URL is the "correct" one and use that!`,t),buttonText:o("Edit Your Page",t),buttonLink:a.aioseo.data.staticHomePage?`${a.aioseo.urls.staticHomePage}&aioseo-tab=advanced&aioseo-scroll=aioseo-post-canonical-url&aioseo-highlight=aioseo-post-canonical-url`:null}});s(this,"noindexHead",e=>e.error==="noindex"?this.personalize?o("Your page contains a noindex header or meta tag.",t):o("The page contains a noindex header or meta tag.",t):this.personalize?o("Your page does not contain any noindex header or meta tag.",t):o("The page does not contain any noindex header or meta tag.",t));s(this,"noindexBody",()=>{const e=l();return{message:o("Only ever use noindex meta tag or header on pages you want to keep out of the reach of search engines!",t),buttonText:o("Edit Your Page",t),buttonLink:e.aioseo.data.staticHomePage?`${e.aioseo.urls.staticHomePage}&aioseo-tab=advanced&aioseo-scroll=aioseo-post-robots-setting&aioseo-highlight=aioseo-post-robots-setting`:null}});s(this,"wwwCanonicalizationHead",e=>e.error==="www-canonicalization"?this.personalize?o("The www and non-www versions of your URL are not redirected to the same site.",t):o("The www and non-www versions of the URL are not redirected to the same site.",t):this.personalize?o("Both the www and non-www versions of your URL are redirected to the same site.",t):o("Both the www and non-www versions of the URL are redirected to the same site.",t));s(this,"wwwCanonicalizationBody",()=>{const e=l();return{message:o(`Decide whether you want your site's URLs to include a "www", or if you prefer a plain domain name. There are marketing pros and cons for each choice, but neither one is better or worse for SEO purposes - as long as you're consistent.`,t)+"<br><br>"+o('You should use HTTP redirections (301 permanant redirects) to pass PageRank from the "wrong" URLs to the standard (canonical) ones. That way, your content will still benefit from backlinks if someone makes a mistake and uses the wrong URL.',t),buttonText:o("Edit Your Page",t),buttonLink:e.aioseo.data.staticHomePage?e.aioseo.urls.staticHomePage:null}});s(this,"robotsRulesHead",e=>e.error==="no-robots"?this.personalize?o("Your robots.txt file is missing or unavailable.",t):o("The robots.txt file is missing or unavailable.",t):e.value.match(/disallow:/i)?this.personalize?o('Your site has a robots.txt file which includes one or more "disallow" directives.',t):o('The site has a robots.txt file which includes one or more "disallow" directives.',t):this.personalize?o("Your site has a robots.txt file.",t):o("The site has a robots.txt file.",t));s(this,"robotsRulesBody",e=>{const a=l();return{code:e.error==="no-robots"?null:e.value,message:o("Make sure that you only block parts you don't want to be indexed.",t)+"<br><br>"+o("You can manually create a robots.txt file and upload it to your site's web root. A simpler option is to use a plugin for your CMS platform.",t)+"<br><br>"+n(o("%1$s has a full suite of tools to manage the robots.txt file, along with other related technologies, like XML Sitemaps.",t),"AIOSEO"),buttonText:o("Edit Your Page",t),buttonLink:a.aioseo.data.staticHomePage?a.aioseo.urls.staticHomePage:null}});s(this,"openGraphHead",e=>e.error==="ogp-missing"?o("Some Open Graph meta tags are missing.",t):e.error==="ogp-duplicates"?o("Duplicate Open Graph meta tags were found.",t):o("All the required Open Graph meta tags have been found.",t));s(this,"openGraphBody",e=>{const a=l();return{code:e.value?e.value.join("<br>"):null,message:o("Insert a customized Open Graph meta tag for each important page on your site. The standard is very well documented - you can learn more from Facebook's developer pages.",t)+"<br><br>"+n(o("%1$s provides a simple but powerful interface to craft your Open Graph data. You get immediate feedback with an interactive preview, and you don't have to mess around with raw HTML markup.",t),"AIOSEO"),buttonText:o("Edit Your Page",t),buttonLink:a.aioseo.data.staticHomePage?`${a.aioseo.urls.staticHomePage}&aioseo-tab=social&social-tab=facebook&aioseo-scroll=aioseo-post-settings-facebook&aioseo-highlight=aioseo-post-settings-facebook`:a.aioseo.urls.aio.socialNetworks+"#/facebook"}});s(this,"schemaHead",e=>e.error==="schema-missing"?this.personalize?o("No Schema.org data was found on your page.",t):o("No Schema.org data was found on the page.",t):this.personalize?o("We found Schema.org data on your page.",t):o("We found Schema.org data on the page.",t));s(this,"schemaBody",()=>{const e=l();return{message:n(o("%1$s makes it extremely easy to add highly relevant Schema.org markup to your site. It has a simple graphical interface, so you don't have to get your hands dirty with complex HTML markup.",t),"AIOSEO"),buttonText:o("Edit Your Page",t),buttonLink:e.aioseo.data.staticHomePage?`${e.aioseo.urls.staticHomePage}&aioseo-tab=schema&aioseo-scroll=aioseo-post-schema&aioseo-highlight=aioseo-post-schema`:null}});s(this,"hasImgExpiresHead",e=>e.error==="image-expires-missing"?this.personalize?o('Your server is not using "expires" headers for your images.',t):o('The server is not using "expires" headers for the images.',t):this.personalize?o('Your server is using "expires" headers for your images.',t):o('The server is using "expires" headers for the images.',t));s(this,"hasImgExpiresBody",()=>({message:o('If you use the Apache or NGINX web servers, you can edit the configuration files to set the "expires" header for all image files. For Apache, you can also use a ".htaccess" file to change the settings for each folder.',t)+"<br><br>"+o("Alternatively, you can use a CMS plugin to simplify the process - it's a more user-friendly option. WordPress has a host of caching plugins, and most of them give you options to control the caching headers.",t)}));s(this,"unminifiedJsHead",e=>e.error==="js-unminified"?o("Some Javascript files don't seem to be minified.",t):o("All Javascript files appear to be minified.",t));s(this,"unminifiedJsBody",e=>({codeAlt:e.error!=="js-unminified"?null:e.value.join(`
`),message:o("JavaScript files appear in many places, including frameworks (like Bootstrap), themes and templates, and third-party plugins.",t)+"<br><br>"+o("We recommend tracking down where the un-minified JavaScript files come from",t)+"<br><br>"+o("There are server-side tools (including WordPress plugins) to automatically minify JavaScript files.",t)}));s(this,"unminifiedCssHead",e=>e.error==="css-unminified"?o("Some CSS files don't seem to be minified.",t):o("All CSS files appear to be minified.",t));s(this,"unminifiedCssBody",e=>({codeAlt:e.error!=="css-unminified"?null:e.value.join(`
`),message:o("CSS files appear in many places, including frameworks (like Bootstrap), themes and templates, and third-party plugins.",t)+"<br><br>"+o("We recommend tracking down where the un-minified CSS files come from.",t)+"<br><br>"+o("There are server-side tools (including WordPress plugins) to automatically minify CSS files.",t)}));s(this,"pageObjectsHead",e=>{const a=this.personalize?n(o("Your page makes %1$d requests.",t),e.total):n(o("The page makes %1$d requests.",t),e.total);return e.error==="page-objects-too-many"?a+" "+o("More than 20 requests can result in slow page loading.",t):a});s(this,"pageObjectsBody",e=>({code:e.error!=="page-objects-too-many"?null:o("Images:",t)+" "+e.value.images+"<br>"+o("JavaScript:",t)+" "+e.value.js+"<br>"+o("CSS:",t)+" "+e.value.css,message:o("Try to replace embedded objects with HTML5 alternatives.",t)}));s(this,"pageSizeHead",e=>{let a=Math.round(e.value/1e3),i="";return e.error==="page-size-too-big"&&(a=Math.ceil(e.value/1e3),i=o("This is over our recommendation of 50 KB.",t)),33>Math.round(e.value/1e3)&&(i=o("This is under the average of 33 KB.",t)),n(o("The size of the HTML document is %1$d KB.",t),a)+" "+i});s(this,"pageSizeBody",()=>({message:o("In order to reduce page size, remove any unnecessary tags from your markup. This includes developer comments, which are invisible to your users - search engines ignore the text in comments, too.",t)+"<br><br>"+o("Sometimes inline CSS is a culprit. A little inline CSS can help your page render faster. Too much will bloat the HTML file and increase the page loading time.",t)+"<br><br>"+o(`You can reduce CSS repetition with HTML class and ID attributes. Often the same rules will be repeated across many page elements, embedded in each tag's "style" attribute. You can extract them into a single "style" tag and use classes and ID's to target each element.`,t)+"<br><br>"+o("Removing white space can also have an impact on your HTML page's size. White space characters like carriage returns and tabs are ignored by the browser, but they make the markup easier for developers to read. So you should always strip them from your templates or themes before you use them in a production environment.",t)}));s(this,"responseTimeHead",e=>e.error==="response-time-too-long"?this.personalize?n(o("The response time of your page is %1$f seconds. It is recommended to keep it equal to or below 0.2 seconds.",t),e.value):n(o("The response time of the page is %1$f seconds. It is recommended to keep it equal to or below 0.2 seconds.",t),e.value):this.personalize?o("Your response time is under 0.2 seconds.",t):o("The response time is under 0.2 seconds.",t));s(this,"responseTimeBody",()=>({message:o("If you want to continue to improve your response time, the simplest and fastest fix is to use a caching plugin. Caching plugins keep a cached version of each page on your site. Instead of building the page from scratch, the server will send the cached copy.",t)+"<br><br>"+o("You can get an even greater boost in speed with a content delivery network service. These services host a copy of your content on multiple servers spread out across the globe. A user's request is handled by the edge server that's closest to their physical location, so the content arrives incredibly fast.",t)}));s(this,"visiblePluginsHead",e=>e.error==="plugins-visible"?this.personalize?o("Plugins from your website are publicly visible.",t)+" ("+e.value.length+")":o("Plugins from the website are publicly visible.",t)+" ("+e.value.length+")":this.personalize?o("You have no visible plugins!",t):o("There are no visible plugins.",t));s(this,"visiblePluginsBody",e=>({code:e.error!=="plugins-visible"?null:e.value.join("<br>"),message:o("It's a great idea to try and hide the plugins you have visible. From time to time vulnerabilities are found in plugins and if your site is not updated in a timely fashion, outdated plugins and themes can be exploited.",t)}));s(this,"visibleThemesHead",e=>e.error==="themes-visible"?this.personalize?n(o("Anyone can see that you are using the %1$s theme.",t),e.value[0]):n(o("Anyone can see that they are using the %1$s theme.",t),e.value[0]):this.personalize?o("Your theme is not visible!",t):o("The theme is not visible.",t));s(this,"visibleThemesBody",()=>({message:o("It's a great idea to try and hide the theme you have visible. From time to time vulnerabilities are found in themes and if your site is not updated in a timely fashion, outdated plugins and themes can be exploited.",t)}));s(this,"directoryListingHead",e=>e.error==="directory-listing-open"?this.personalize?o("Directory Listing seems to be enabled on your server.",t):o("Directory Listing seems to be enabled on the server.",t):this.personalize?o("Directory Listing seems to be disabled on your server.",t):o("Directory Listing seems to be disabled on the server.",t));s(this,"directoryListingBody",()=>({message:o(`Fortunately, every popular web server has options to prevent directory listings. They'll show a "403 forbidden" message instead.`,t)+"<br><br>"+o("Alternatively, you can create an empty index.php file and save it in every directory on your site. That's an approach that WordPress uses and it works well.",t)}));s(this,"googleSafeBrowsingHead",e=>e.error==="google-safe-browsing"?this.personalize?o("It looks like your site has been added to one of Google's malwares lists.",t):o("It looks like this site has been added to one of Google's malwares lists.",t):this.personalize?o("Google has not flagged your site for malware!",t):o("Google has not flagged this site for malware.",t));s(this,"googleSafeBrowsingBody",()=>({message:o("Google Safe browsing shows warnings and alerts to users if they visit a suspicious website. If you are flagged by Google Safe Browsing, you should take immediate steps to fix that.",t)}));s(this,"secureConnectionHead",e=>e.error==="insecure-connection"?this.personalize?o("Your site is not using a secure transfer protocol (https).",t):o("The site is not using a secure transfer protocol (https).",t):this.personalize?o("Your site is using a secure transfer protocol (https).",t):o("The site is using a secure transfer protocol (https).",t));s(this,"secureConnectionBody",()=>({message:o("If you aren't using an SSL certificate for your site that means you are losing a lot of potential traffic. We recommend getting an SSL certificate installed immediately.",t)}))}}const S=new k,y="all-in-one-seo-pack",p=r=>(Object.keys(r).forEach(e=>{const a=r[e];S.head(e,a)||["searchPreview","mobileSearchPreview","mobileSnapshot"].includes(e)||delete r[e]}),r),A=v("AnalyzerStore",{state:()=>({analyzer:null,analyzing:!1,analyzeError:null}),getters:{getSiteAnalysisResults:()=>{let r={};try{const e=d();r=JSON.parse(e.internalOptions.internal.siteAnalysis.results)}catch{r={}}return r},getCompetitorSiteAnalysisResults:()=>d().internalOptions.internal.siteAnalysis.competitors||{},getHeadlineAnalysisResults:()=>d().internalOptions.internal.headlineAnalysis.headlines||{},allItemsCount:r=>e=>r.recommendedCount(e)+r.criticalCount(e)+r.goodCount(e),recommendedCount:r=>e=>{let a=0;return e=e||r.getSiteAnalysisResults||{},Object.keys(e).forEach(i=>{const u=p(e[i]);Object.keys(u).forEach(c=>{u[c].status==="warning"&&a++})}),a},criticalCount:r=>e=>{let a=0;return e=e||r.getSiteAnalysisResults||{},Object.keys(e).forEach(i=>{const u=p(e[i]);Object.keys(u).forEach(c=>{u[c].status==="error"&&a++})}),a},goodCount:r=>e=>{let a=0;return e=e||r.getSiteAnalysisResults||{},Object.keys(e).forEach(i=>{const u=p(e[i]);Object.keys(u).forEach(c=>{u[c].status==="passed"&&a++})}),a}},actions:{runSiteAnalyzer(r={}){return this.analyzing=!0,this.analyzer="competitor-site",h.post(g.restUrl("analyze")).send({url:r.url,refresh:r.refresh}).then(e=>{const a=d();if(r.url)return a.updateOption("internalOptions",{groups:["internal","siteAnalysis"],key:"competitors",value:e.body}),this.analyzing=!1,e;a.updateOption("internalOptions",{groups:["internal","siteAnalysis"],key:"score",value:e.body.score}),a.updateOption("internalOptions",{groups:["internal","siteAnalysis"],key:"results",value:JSON.stringify(e.body.results)}),this.analyzing=!1}).catch(e=>{var i;this.analyzing=!1;let a=o("We couldn't connect to the site, please try again later.",y);(i=e.response.body.response)!=null&&i.error&&(a=e.response.body.response.error),this.analyzeError=a})},runHeadlineAnalyzer(r={}){return this.analyzer="headline",h.post(g.restUrl("analyze-headline")).send({headline:r.headline,shouldStoreHeadline:r.shouldStoreHeadline}).then(e=>{d().updateOption("internalOptions",{groups:["internal","headlineAnalysis"],key:"headlines",value:e.body}),this.analyzing=!1}).catch(e=>{var i;this.analyzing=!1;let a=o("We couldn't analyze your title, please try again later.",y);(i=e.response.body)!=null&&i.message&&(a=e.response.body.message),this.analyzeError=a})},deleteCompetitorSite(r){return h.post(g.restUrl("analyze/delete-site")).send({url:r}).then(e=>{d().updateOption("internalOptions",{groups:["internal","siteAnalysis"],key:"competitors",value:e.body}),this.analyzing=!1})},deleteHeadline(r){return h.post(g.restUrl("analyze-headline/delete")).send({headline:r}).then(e=>{d().updateOption("internalOptions",{groups:["internal","siteAnalysis"],key:"headlines",value:e.body}),this.analyzing=!1})}}});export{S,A as u};
