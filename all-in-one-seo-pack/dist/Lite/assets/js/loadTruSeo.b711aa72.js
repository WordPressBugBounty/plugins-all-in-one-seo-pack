import{G as P,e as y,m as q,i as M,u as I,B as T,z as A,A as B}from"./index.ae2b6956.js";import{s as N}from"./metabox.870afb5f.js";import{m as e,h as W,i as U,j as $,k as z}from"./helpers.979ce6ae.js";const D=()=>{let t=!1;if(document.querySelector("#wp-content-wrap.tmce-active")){const n=window.setInterval(()=>{!window.tinyMCE||!window.tinyMCE.activeEditor||(window.clearInterval(n),e(),window.tinyMCE.get("content").on("keyup",()=>{e(500)}),window.tinyMCE.get("content").on("paste",()=>{e(500)}))},50)}else{const n=document.querySelector("textarea#content");n&&(n.addEventListener("keyup",()=>{e(500)}),n.addEventListener("paste",()=>{e(500)}))}const o=document.querySelector("#post input#title");o&&o.addEventListener("input",()=>{e(500)}),k();const r=document.querySelector("#post_name");r&&r.addEventListener("change",()=>{e(500)});const i=document.querySelector("#edit-slug-buttons");i&&i.addEventListener("click",n=>{n.target===i.querySelector("#edit-slug-buttons button.save")&&e()});const c=document.querySelector("#categorychecklist");c&&c.addEventListener("change",function(){W()});const a=function(n){n.forEach(f=>{if(f.attributeName==="class"){if(document.querySelector("#wp-content-wrap.tmce-active")){if(!window.tinyMCE)return;window.tinyMCE.get("content").on("keyup",()=>{e(500)}),window.tinyMCE.get("content").on("paste",()=>{e(500)})}const l=document.querySelector("#content");l&&(l.addEventListener("keyup",()=>{e(500)}),l.addEventListener("paste",()=>{e(500)})),k()}})},u=new MutationObserver(a),d=document.querySelector("#wp-content-wrap");d&&u.observe(d,{attributes:!0});const p=document.querySelector("#wp-excerpt-wrap");p&&u.observe(p,{attributes:!0}),setInterval(()=>{t&&(t=!1)},500),U()&&!P()&&(t=!0,setInterval(()=>{window.tinyMCE&&window.tinyMCE.activeEditor&&window.tinyMCE.activeEditor.isDirty()&&!t&&(t=!0,e())},500))},k=()=>{if(document.querySelector("#wp-excerpt-wrap.tmce-active")){const o=window.setInterval(()=>{window.tinyMCE&&(window.clearInterval(o),e(),window.tinyMCE.get("excerpt").on("keyup",()=>{e(500)}),window.tinyMCE.get("excerpt").on("paste",()=>{e(500)}))},50)}const t=document.querySelector("#post textarea#excerpt");t&&(t.addEventListener("keyup",()=>{e(500)}),t.addEventListener("paste",()=>{e(500)}))},O=()=>{e(),window.wp.data.subscribe(()=>{e(500);const t=window.wp.data.select("core/editor").isSavingPost(),o=window.wp.data.select("core/editor").isAutosavingPost();if(t&&!o){const r=y();r.isDirty=!1,e()}})},L=()=>{const t=q();return(t==null?void 0:t.isUnlicensed)||!1},w=()=>{var E,S,g,x,_;let t="",o="",r="",i=[],c="";const a=M(),u=y(),d=document.getElementById("_sku");d&&(t=d.value,a.updateWooCommerceSku(t));const p=document.getElementById("_sale_price"),n=document.getElementById("_regular_price");p&&(o=p.value),!o&&n&&(o=n.value);const l=((S=(E=I().aioseo.data)==null?void 0:E.wooCommerce)==null?void 0:S.currencySymbol)||"$"+parseFloat(o||0).toFixed(2);a.updateWooCommercePrice(l),["pwb-brand","product_brand"].forEach(s=>{var C,b,h;if(i=document.querySelectorAll(`#post input[name="tax_input[${s}][]"]:checked`),!!i.length&&(r!==i[0].parentNode.innerText&&(r=i[0].parentNode.innerText,a.updateWooCommerceBrand(i[0].parentNode.innerText)),(b=(C=u.currentPost)==null?void 0:C.primary_term)!=null&&b[s])){const m=document.querySelector(`#${s}checklist input[value="${u.currentPost.primary_term[s]}"]`);(h=m==null?void 0:m.parentNode)!=null&&h.innerText&&a.updateWooCommerceBrand(m.parentNode.innerText)}});const v=document.querySelectorAll('#post input[name="tax_input[product_cat][]"]:checked');if(v.length&&(c=v[0].parentNode.innerText),(x=(g=u.currentPost)==null?void 0:g.primary_term)!=null&&x.product_cat){const s=document.getElementById(`in-product_cat-${u.currentPost.primary_term.product_cat}`);c=((_=s==null?void 0:s.parentNode)==null?void 0:_.innerText)||""}a.updateTaxonomyTitle(c)};window.addEventListener("DOMContentLoaded",()=>{var t,o;((o=(t=window==null?void 0:window.aioseo)==null?void 0:t.screen)==null?void 0:o.base)!=="customize"&&!L()&&w()});const F=()=>{L()||(window.addEventListener("change",t=>{t.target.tagName==="INPUT"&&w()}),window.aioseoBus.$on("standalone-update-post",t=>{t.primary_term&&w()}))},J=(t,o=!0)=>{if(!N())return;e();const r=y();if(r.currentPost.context==="term")$();else if(I().ping(),o&&r.savePostState(),T()){const c=window.setInterval(()=>{window.wp.data.select("core/editor").getCurrentPost().id&&(window.clearInterval(c),O())},50)}else P()&&F(),(A()||B())&&D(),z()};export{J as l};
