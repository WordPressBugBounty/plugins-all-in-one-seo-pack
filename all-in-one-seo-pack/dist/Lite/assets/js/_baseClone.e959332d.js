import{D as y,E as p,S as $,k as F,F as b,G as x,i as G,H as N,c as R,x as v,b as K,q}from"./helpers.f95d5840.js";import{a as H}from"./_arrayEach.f4f00336.js";import{k as E,d as L,s as W,a as Y,e as J,g as T,c as Q}from"./_getTag.8dc22eac.js";import{L as V,M as C,N as X,O as Z,P as z}from"./index.20192476.js";function k(r,t){return r&&y(t,E(t),r)}function rr(r,t){return r&&y(t,p(t),r)}function tr(r,t){return y(r,L(r),t)}var er=Object.getOwnPropertySymbols,h=er?function(r){for(var t=[];r;)Y(t,L(r)),r=V(r);return t}:W;function nr(r,t){return y(r,h(r),t)}function ar(r){return J(r,p,h)}var or=Object.prototype,sr=or.hasOwnProperty;function cr(r){var t=r.length,a=new r.constructor(t);return t&&typeof r[0]=="string"&&sr.call(r,"index")&&(a.index=r.index,a.input=r.input),a}function ir(r,t){var a=t?C(r.buffer):r.buffer;return new r.constructor(a,r.byteOffset,r.byteLength)}var fr=/\w*$/;function ur(r){var t=new r.constructor(r.source,fr.exec(r));return t.lastIndex=r.lastIndex,t}var O=$?$.prototype:void 0,_=O?O.valueOf:void 0;function gr(r){return _?Object(_.call(r)):{}}var br="[object Boolean]",yr="[object Date]",lr="[object Map]",pr="[object Number]",Tr="[object RegExp]",jr="[object Set]",Ar="[object String]",mr="[object Symbol]",dr="[object ArrayBuffer]",Sr="[object DataView]",$r="[object Float32Array]",Or="[object Float64Array]",_r="[object Int8Array]",Ir="[object Int16Array]",wr="[object Int32Array]",Fr="[object Uint8Array]",xr="[object Uint8ClampedArray]",Er="[object Uint16Array]",Lr="[object Uint32Array]";function Cr(r,t,a){var f=r.constructor;switch(t){case dr:return C(r);case br:case yr:return new f(+r);case Sr:return ir(r,a);case $r:case Or:case _r:case Ir:case wr:case Fr:case xr:case Er:case Lr:return X(r,a);case lr:return new f;case pr:case Ar:return new f(r);case Tr:return ur(r);case jr:return new f;case mr:return gr(r)}}var hr="[object Map]";function Br(r){return F(r)&&T(r)==hr}var I=b&&b.isMap,Mr=I?x(I):Br,Ur="[object Set]";function Pr(r){return F(r)&&T(r)==Ur}var w=b&&b.isSet,Dr=w?x(w):Pr,Gr=1,Nr=2,Rr=4,B="[object Arguments]",vr="[object Array]",Kr="[object Boolean]",qr="[object Date]",Hr="[object Error]",M="[object Function]",Wr="[object GeneratorFunction]",Yr="[object Map]",Jr="[object Number]",U="[object Object]",Qr="[object RegExp]",Vr="[object Set]",Xr="[object String]",Zr="[object Symbol]",zr="[object WeakMap]",kr="[object ArrayBuffer]",rt="[object DataView]",tt="[object Float32Array]",et="[object Float64Array]",nt="[object Int8Array]",at="[object Int16Array]",ot="[object Int32Array]",st="[object Uint8Array]",ct="[object Uint8ClampedArray]",it="[object Uint16Array]",ft="[object Uint32Array]",e={};e[B]=e[vr]=e[kr]=e[rt]=e[Kr]=e[qr]=e[tt]=e[et]=e[nt]=e[at]=e[ot]=e[Yr]=e[Jr]=e[U]=e[Qr]=e[Vr]=e[Xr]=e[Zr]=e[st]=e[ct]=e[it]=e[ft]=!0;e[Hr]=e[M]=e[zr]=!1;function l(r,t,a,f,j,s){var n,u=t&Gr,g=t&Nr,P=t&Rr;if(n!==void 0)return n;if(!G(r))return r;var A=K(r);if(A){if(n=cr(r),!u)return N(r,n)}else{var i=T(r),m=i==M||i==Wr;if(R(r))return Z(r,u);if(i==U||i==B||m&&!j){if(n=g||m?{}:z(r),!u)return g?nr(r,rr(n,r)):tr(r,k(n,r))}else{if(!e[i])return j?r:{};n=Cr(r,i,u)}}s||(s=new v);var d=s.get(r);if(d)return d;s.set(r,n),Dr(r)?r.forEach(function(o){n.add(l(o,t,a,o,r,s))}):Mr(r)&&r.forEach(function(o,c){n.set(c,l(o,t,a,c,r,s))});var D=P?g?ar:Q:g?p:E,S=A?void 0:D(r);return H(S||r,function(o,c){S&&(c=o,o=r[c]),q(n,c,l(o,t,a,c,r,s))}),n}export{l as b};
