// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function e(e,s,i){var o;if(!r(e))throw new TypeError(n("1Vr3c",e));if(!t(s))throw new TypeError(n("1Vr3X",s));return s<(o=[function(){return e.call(i)},function(r){return e.call(i,r)},function(r,t){return e.call(i,r,t)},function(r,t,n){return e.call(i,r,t,n)},function(r,t,n,s){return e.call(i,r,t,n,s)},function(r,t,n,s,o){return e.call(i,r,t,n,s,o)}]).length?o[s]:function(r,t,n,o,l,c){var u,f;for(u=[r,t,n,o,l,c],f=6;f<s;f++)u.push(arguments[f]);return e.apply(i,u)}}export{e as default};
//# sourceMappingURL=index.mjs.map
