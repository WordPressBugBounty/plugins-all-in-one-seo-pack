import{i,a as s,b as c}from"./cleanForSlug.etvx808q.js";var o=NaN,e=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,p=parseInt;function y(n){if(typeof n=="number")return n;if(i(n))return o;if(s(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=s(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=c(n);var t=a.test(n);return t||f.test(n)?p(n.slice(2),t?2:8):e.test(n)?o:+n}export{y as t};
