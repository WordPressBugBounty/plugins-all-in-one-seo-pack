import{g as O}from"./default-i18n.20001971.js";var h={exports:{}};(function(a,c){(function(i,o){a.exports=o()})(window,function(){return function(i){var o={};function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return i[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}return u.m=i,u.c=o,u.d=function(n,t,e){u.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},u.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,t){if(1&t&&(n=u(n)),8&t||4&t&&typeof n=="object"&&n&&n.__esModule)return n;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&typeof n!="string")for(var r in n)u.d(e,r,(function(s){return n[s]}).bind(null,r));return e},u.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(t,"a",t),t},u.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},u.p="",u(u.s=0)}([function(i,o,u){Object.defineProperty(o,"__esModule",{value:!0});var n=u(1),t=u(2);o.default=function(e,r,s,f,l){var g=typeof f=="function"?f:n.default.get(f),y=null,x=r-e,b=!1;function v(d,m){if(!b){var p=m-(y=y||m);l(g(p,e,x,s)),p<s?window.requestAnimationFrame(v.bind(null,d)):d("Animation complete")}}return new t.default(function(d,m,p){window.requestAnimationFrame(v.bind(null,d)),p(function(){return b=!0})})}},function(i,o,u){Object.defineProperty(o,"__esModule",{value:!0}),o.default={default:"easeInQuad",get:function(n){return this[n]?this[n]:this[this.default]},linear:function(n,t,e,r){return e*n/r+t},easeInQuad:function(n,t,e,r){return e*(n/=r)*n+t},easeOutQuad:function(n,t,e,r){return-e*(n/=r)*(n-2)+t},easeInOutQuad:function(n,t,e,r){return(n/=r/2)<1?e/2*n*n+t:-e/2*(--n*(n-2)-1)+t},easeInCubic:function(n,t,e,r){return e*(n/=r)*n*n+t},easeOutCubic:function(n,t,e,r){return e*((n=n/r-1)*n*n+1)+t},easeInOutCubic:function(n,t,e,r){return(n/=r/2)<1?e/2*n*n*n+t:e/2*((n-=2)*n*n+2)+t},easeInQuart:function(n,t,e,r){return e*(n/=r)*n*n*n+t},easeOutQuart:function(n,t,e,r){return-e*((n=n/r-1)*n*n*n-1)+t},easeInOutQuart:function(n,t,e,r){return(n/=r/2)<1?e/2*n*n*n*n+t:-e/2*((n-=2)*n*n*n-2)+t},easeInQuint:function(n,t,e,r){return e*(n/=r)*n*n*n*n+t},easeOutQuint:function(n,t,e,r){return e*((n=n/r-1)*n*n*n*n+1)+t},easeInOutQuint:function(n,t,e,r){return(n/=r/2)<1?e/2*n*n*n*n*n+t:e/2*((n-=2)*n*n*n*n+2)+t}}},function(i,o,u){Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function t(e){var r=this;this.cancelHandler=function(s){},this.isPending=!0,this.isCanceled=!1,this.promise=new Promise(function(s,f){return e(function(l){r.isPending=!1,s(l)},function(l){r.isPending=!1,f(l)},function(l){if(!r.isPending)throw new Error("The `onCancel` handler was attached after the promise settled.");r.cancelHandler=l})})}return t.prototype.then=function(e,r){return this.promise.then(e,r)},t.prototype.catch=function(e){return this.promise.catch(e)},t.prototype.cancel=function(e){this.isPending&&!this.isCanceled&&(this.cancelHandler(e),this.isCanceled=!0)},t}();o.default=n}])})})(h);var P=h.exports;const w=O(P),Q=(a,c=2)=>(a=parseFloat(a).toFixed(c),Number(a).toLocaleString("en")),j=(a,c=1)=>{const i=[{value:1,symbol:""},{value:1e3,symbol:"K"},{value:1e6,symbol:"M"},{value:1e9,symbol:"B"},{value:1e12,symbol:"t"},{value:1e15,symbol:"q"},{value:1e18,symbol:"Q"}],o=/\.0+$|(\.\d*[1-9])0+$/,u=i.slice().reverse().find(function(n){return a>=n.value});return u?(a/u.value).toFixed(c).replace(o,"$1")+u.symbol:"0"},_=(a,c)=>{let i=500;const o=c-a;return 500>=o||(i=o/10,1e3>i&&(i=1e3),3500<i&&(i=3500)),i},F=(a,c,i,o=null)=>w(a,c,o||_(0,c),"easeInOutQuad",u=>i instanceof Function?i(u.toFixed(0)):i=u.toFixed(0)),C={numberFormat:Q,compactNumber:j,getDuration:_,animateNumbers:F};export{C as n};
