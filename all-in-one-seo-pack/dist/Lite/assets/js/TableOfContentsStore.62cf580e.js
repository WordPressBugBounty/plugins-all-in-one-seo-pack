import{d as a}from"./index.20192476.js";const f=e=>{const o=e.find(s=>{var n;return 0<((n=s.headings)==null?void 0:n.length)});return!!(o&&Object.keys(o).length)},i=(e,o=0)=>{var r;if(!f([...e]))return e;const s=[],n=[...e];for(;n.length&&!(o&&s.length===o);){const{...t}=n.shift();(r=t.headings)!=null&&r.length&&n.unshift(...t.headings),t.headings=[],s.push(t)}return s},b=e=>{const o=(n,r="root")=>{const t={[r]:[]};return n.forEach(l=>{t[r].push(l.blockClientId),Object.assign(t,o(l.headings,l.blockClientId))}),t},s=o([...e]);return e=i([...e]),Object.entries(s).forEach(([n,r])=>{r.length&&(n==="root"?r.map(t=>{const l=e.findIndex(c=>c.blockClientId===t);return e[l].editedLevel=1,t}):r.map(t=>{const l=e.findIndex(u=>u.blockClientId===n),c=e.findIndex(u=>u.blockClientId===t);return e[c].editedLevel=e[l].editedLevel+1,t}))}),e.forEach((n,r)=>{n.editedOrder=r+1}),e.sort((n,r)=>n.editedOrder-r.editedOrder)},d=e=>{const o=[];let s=[],n=-1;if(e.length===0)return[];e=i([...e]);const r=()=>{0<s.length&&(o[o.length-1].headings=d(s))};return e.forEach(t=>{t={...t};const l=t.editedLevel||t.level;if(n!==-1&&n<l){s.push(t);return}r(),n=l,o.push(t),s=[]}),r(),o},L=a("TableOfContentsStore",{state:()=>({blockClientId:null,headings:[],listStyle:"ul",reOrdered:!1}),actions:{setHeadings(e){this.headings=e}}});export{d as a,i as f,b as o,L as u};
