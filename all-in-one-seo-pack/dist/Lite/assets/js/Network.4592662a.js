import{m as p,u as S}from"./index.506b73e8.js";import{f as u}from"./runtime-dom.esm-bundler.5c3c7d72.js";const g=()=>{const s=p(),i=S(),r=u(()=>JSON.parse(JSON.stringify(s.networkData.sites.sites))),a=u(()=>{const t=[];return r.value.forEach(n=>{s.activeSites.some(o=>o.domain===n.domain&&o.path===n.path)&&t.push(e(n))}),t}),e=t=>`${t.blog_id}_${t.domain}_${t.path}`,c=(t,n)=>(i.aioseo.urls.mainSiteUrl+"/").includes(`${i.aioseo.data.isSsl?"https":"http"}://${t}${n}`),l=t=>r.value.find(n=>e(n)===t);return{getSites:r,activeSitesIds:a,getUniqueSiteId:e,isMainSite:c,isSiteActive:t=>a.value.includes(e(t)),parseSiteValue:t=>{const n=[];return t.forEach(o=>{n.push(l(o))}),n}}};export{g as u};
