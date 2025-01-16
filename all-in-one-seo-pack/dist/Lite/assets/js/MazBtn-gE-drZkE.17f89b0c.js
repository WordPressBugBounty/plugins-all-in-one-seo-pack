const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[window.__aioseoDynamicImportPreload__("js/MazSpinner-Q02SOFkL.4a7de923.js"),window.__aioseoDynamicImportPreload__("js/Phone.33692cc0.js"),window.__aioseoDynamicImportPreload__("js/datetime.f197aeae.js"),window.__aioseoDynamicImportPreload__("js/preload-helper.5f06849a.js"),window.__aioseoDynamicImportPreload__("js/runtime-dom.esm-bundler.5c3c7d72.js"),window.__aioseoDynamicImportPreload__("js/translations.d159963e.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.20001971.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue_export-helper.eefbdd86.js"),window.__aioseoDynamicImportPreload__("css/Phone.c101dd90.css"),window.__aioseoDynamicImportPreload__("css/MazSpinner-Q02SOFkL.17931b9a.css"),window.__aioseoDynamicImportPreload__("js/MazIcon-CUOwXGOK.4f007cb9.js")])))=>i.map(i=>d[i]);
import{_}from"./preload-helper.5f06849a.js";import{s as E}from"./Phone.33692cc0.js";import{e as T,U as P,V as M,M as O,f as a,o as t,k as l,l as R,c as r,G as s,b as e,m as u,u as c,q as d,W as g}from"./runtime-dom.esm-bundler.5c3c7d72.js";import"./datetime.f197aeae.js";import"./translations.d159963e.js";import"./default-i18n.20001971.js";import"./_plugin-vue_export-helper.eefbdd86.js";const U=T({__name:"MazBtn",props:{variant:{default:"button"},size:{default:"md"},color:{default:"primary"},type:{default:"button"},rounded:{type:Boolean},roundedSize:{default:"lg"},noRounded:{type:Boolean},outline:{type:Boolean},pastel:{type:Boolean},block:{type:Boolean},noUnderline:{type:Boolean},loading:{type:Boolean},disabled:{type:Boolean},fab:{type:Boolean},icon:{type:[String,Function,Object],default:void 0},leftIcon:{type:[String,Function,Object],default:void 0},rightIcon:{type:[String,Function,Object],default:void 0},noPadding:{type:Boolean},noElevation:{type:Boolean},contentClass:{default:void 0}},setup(h){const n=h,k=g(()=>_(()=>import("./MazSpinner-Q02SOFkL.4a7de923.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url)),p=g(()=>_(()=>import("./MazIcon-CUOwXGOK.4f007cb9.js"),__vite__mapDeps([10,1,2,3,4,5,6,7,8]),import.meta.url)),{href:B,to:z}=P(),f=M();O(()=>{n.icon&&!n.fab&&console.error('[maz-ui](MazBtn) the prop "icon" must be used only with "fab" props')});const m=a(()=>B?"a":z?"router-link":"button"),I=a(()=>n.pastel?`--${n.color}-pastel`:n.outline?`--${n.color}-outline`:`--${n.color}`),v=a(()=>(n.loading||n.disabled)&&m.value==="button"),$=a(()=>v.value?"--cursor-default":"--cursor-pointer"),C=a(()=>`--is-${n.variant}`),i=a(()=>n.loading&&n.variant==="button"),y=a(()=>!!f["left-icon"]||n.leftIcon),b=a(()=>!!f["right-icon"]||n.rightIcon),S=a(()=>y.value||b.value),A=a(()=>n.fab&&(n.icon||!!f.icon)),x=a(()=>m.value==="button"?n.type:void 0);return(o,D)=>(t(),l(d(m.value),{disabled:v.value||void 0,class:s(["m-btn",[`--${o.size}`,!o.fab&&o.roundedSize&&`--rounded-${o.roundedSize}`,I.value,$.value,C.value,{"--block":o.block,"--no-underline":o.noUnderline,"--fab":o.fab,"--loading":o.loading,"--disabled":v.value,"--icon":S.value,"--rounded":o.rounded,"--no-rounded":o.noRounded,"--no-padding":o.noPadding,"--no-elevation":o.noElevation}]]),type:x.value},{default:R(()=>[y.value?(t(),r("div",{key:0,class:s(["m-btn__icon-left maz-flex maz-flex-center",{"maz-invisible":i.value}])},[e(`
        @slot left-icon - The icon to display on the left of the button
      `),u(o.$slots,"left-icon",{},()=>[typeof o.leftIcon=="string"?(t(),l(c(p),{key:0,name:o.leftIcon},null,8,["name"])):o.leftIcon?(t(),l(d(o.leftIcon),{key:1})):e("v-if",!0)],!0)],2)):e("v-if",!0),A.value?(t(),r("div",{key:1,class:s(["m-btn__icon",{"maz-invisible":i.value}])},[e(`
        @slot icon - The icon to display on the fab button
      `),u(o.$slots,"icon",{},()=>[typeof o.icon=="string"?(t(),l(c(p),{key:0,name:o.icon},null,8,["name"])):o.icon?(t(),l(d(o.icon),{key:1})):e("v-if",!0)],!0)],2)):e("v-if",!0),o.$slots.default?(t(),r("span",{key:2,class:s([{"maz-invisible":i.value},o.contentClass])},[e(`
        @slot default - The content of the button
      `),u(o.$slots,"default",{},void 0,!0)],2)):e("v-if",!0),b.value?(t(),r("div",{key:3,class:s(["m-btn__icon-right",{"maz-invisible":i.value}])},[e(`
        @slot right-icon - The icon to display on the right of the button
      `),u(o.$slots,"right-icon",{},()=>[typeof o.rightIcon=="string"?(t(),l(c(p),{key:0,name:o.rightIcon},null,8,["name"])):o.rightIcon?(t(),l(d(o.rightIcon),{key:1})):e("v-if",!0)],!0)],2)):e("v-if",!0),i.value?(t(),l(c(k),{key:4,class:"m-btn-loader",size:"2em",color:o.color},null,8,["color"])):e("v-if",!0)]),_:3},8,["disabled","class","type"]))}}),N=E(U,[["__scopeId","data-v-48f14785"]]);export{N as default};