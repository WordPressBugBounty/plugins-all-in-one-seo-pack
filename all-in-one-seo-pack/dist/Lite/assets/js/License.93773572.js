import{m as a}from"./index.62477ee8.js";import{l as t}from"./license.20795cf4.js";import"./translations.d159963e.js";import{f as i}from"./runtime-dom.esm-bundler.5c3c7d72.js";import{_ as s}from"./default-i18n.20001971.js";const o="all-in-one-seo-pack",y=()=>{const n=a(),u=i(()=>{let e=s("You have not yet added a valid license key.",o);return n.license.isExpired&&(e=s("Your license has expired.",o)),n.license.isDisabled&&(e=s("Your license has been disabled.",o)),n.license.isInvalid&&(e=s("Your license key is invalid.",o)),e});return{shouldShowLite:i(()=>n.isUnlicensed),shouldShowMain:(e,r)=>!n.isUnlicensed&&t.hasCoreFeature(e,r),shouldShowUpgrade:(e,r)=>!n.isUnlicensed&&!t.hasCoreFeature(e,r),yourLicenseIsText:u}};export{y as u};
