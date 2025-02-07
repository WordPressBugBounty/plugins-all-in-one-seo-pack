import{i as k,l as $,k as x}from"./index.66ecdd60.js";import{G as b}from"./Graph.568c8d64.js";import"./translations.d159963e.js";import{_ as y}from"./_plugin-vue_export-helper.eefbdd86.js";import{_ as c,s as v}from"./default-i18n.20001971.js";import{v as l,o as p,c as g,C as u,k as m,l as h,a as C,x as P,t as T,u as i,b as f}from"./runtime-dom.esm-bundler.5c3c7d72.js";import{C as B}from"./Blur.edde4939.js";import{C as L}from"./Index.a76253da.js";import{u as U}from"./License.faac32ec.js";const d="all-in-one-seo-pack",A={setup(){return{searchStatisticsStore:k()}},components:{Graph:b},props:{legendStyle:String},computed:{series(){var r,n,e,a;if(!((n=(r=this.searchStatisticsStore.data)==null?void 0:r.keywords)!=null&&n.distribution)||!((a=(e=this.searchStatisticsStore.data)==null?void 0:e.keywords)!=null&&a.distributionIntervals))return[];const o=this.searchStatisticsStore.data.keywords.distribution,s=this.searchStatisticsStore.data.keywords.distributionIntervals;return[{name:c("Top 3 Position",d),data:s.map(t=>({x:t.date,y:t.top3})),legend:{total:o.top3||"0"}},{name:c("4-10 Position",d),data:s.map(t=>({x:t.date,y:t.top10})),legend:{total:o.top10||"0"}},{name:c("11-50 Position",d),data:s.map(t=>({x:t.date,y:t.top50})),legend:{total:o.top50||"0"}},{name:c("50-100 Position",d),data:s.map(t=>({x:t.date,y:t.top100})),legend:{total:o.top100||"0"}}]}}},G={class:"aioseo-search-statistics-keywords-graph"};function H(o,s,r,n,e,a){const t=l("graph");return p(),g("div",G,[u(t,{series:a.series,loading:n.searchStatisticsStore.loading.keywords,"legend-style":r.legendStyle},null,8,["series","loading","legend-style"])])}const w=y(A,[["render",H]]),N={components:{CoreBlur:B,KeywordsGraph:w}};function R(o,s,r,n,e,a){const t=l("keywords-graph"),_=l("core-blur");return p(),m(_,null,{default:h(()=>[u(t,{"legend-style":"simple"})]),_:1})}const V=y(N,[["render",R]]),S="all-in-one-seo-pack",D={components:{Blur:V,Cta:L},data(){return{strings:{ctaHeader:v(c("%1$sUpgrade your %2$s %3$s%4$s plan to see Keyword Positions",S),`<a href="${$.getPricingUrl("search-statistics","search-statistics-upsell")}" target="_blank">`,"AIOSEO","Pro","</a>"),ctaDescription:c("Track how well keywords are ranking in search results over time based on their position and average CTR. This can help you understand the performance of keywords and identify any trends or fluctuations.",S)}}}},I={class:"aioseo-search-statistics-keyword-rankings"},K=["innerHTML"];function M(o,s,r,n,e,a){const t=l("blur"),_=l("cta");return p(),g("div",I,[u(t),u(_,{type:4},{"header-text":h(()=>[C("span",{innerHTML:e.strings.ctaHeader},null,8,K)]),description:h(()=>[P(T(e.strings.ctaDescription),1)]),_:1})])}const E=y(D,[["render",M]]),Y={__name:"KeywordsGraph",setup(o){const{shouldShowMain:s,shouldShowUpgrade:r}=U(),n=x(),e=k();return(a,t)=>(p(),g("div",null,[i(s)("search-statistics","keyword-rankings")||i(n).isUnlicensed||i(e).shouldShowSampleReports?(p(),m(i(w),{key:0,"legend-style":"simple"})):f("",!0),i(r)("search-statistics","keyword-rankings")&&!i(e).shouldShowSampleReports?(p(),m(i(E),{key:1})):f("",!0)]))}};export{Y as _};
