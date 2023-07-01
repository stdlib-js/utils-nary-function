// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).naryFunction=r()}(this,(function(){"use strict";var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),y&&c&&c.call(t,r,e.set),t};var a=e;function p(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,e,n,o,u;if(null==t)return v.call(t);e=t[m],u=m,r=null!=(o=t)&&d.call(o,u);try{t[m]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[m]=e:delete t[m],n}:function(t){return v.call(t)},_=Boolean.prototype.toString;var g=b();function h(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function w(t){return y(t)||h(t)}function O(){return new Function("return this;")()}p(w,"isPrimitive",y),p(w,"isObject",h);var S="object"==typeof self?self:null,E="object"==typeof window?window:null,T="object"==typeof global?global:null;var I=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(S)return S;if(E)return E;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),P=I.document&&I.document.childNodes,A=Int8Array;function N(){return/^\s*function\s*([^(]*)/i}var B=/^\s*function\s*([^(]*)/i;p(N,"REGEXP",B);var k=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function V(t){return null!==t&&"object"==typeof t}function x(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=B.exec(n.toString()))return r[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!k(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(V));var F="function"==typeof t||"object"==typeof A||"function"==typeof P?function(t){return x(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?x(t).toLowerCase():r};function C(t){return"number"==typeof t}var G=Number,L=G.prototype.toString;var M=b();function R(t){return"object"==typeof t&&(t instanceof G||(M?function(t){try{return L.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function U(t){return C(t)||R(t)}p(U,"isPrimitive",C),p(U,"isObject",R);var Y=Number.POSITIVE_INFINITY,X=G.NEGATIVE_INFINITY,q=Math.floor;function z(t){return t<Y&&t>X&&q(r=t)===r;var r}function D(t){return C(t)&&z(t)}function H(t){return R(t)&&z(t.valueOf())}function J(t){return D(t)||H(t)}function K(t){return D(t)&&t>=0}function Q(t){return H(t)&&t.valueOf()>=0}function W(t){return K(t)||Q(t)}function Z(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return p(J,"isPrimitive",D),p(J,"isObject",H),p(W,"isPrimitive",K),p(W,"isObject",Q),function(t,r,e){var n;if("function"!==F(t))throw new TypeError(Z("0km3p",t));if(!K(r))throw new TypeError(Z("0km3k",r));return r<(n=[function(){return t.call(e)},function(r){return t.call(e,r)},function(r,n){return t.call(e,r,n)},function(r,n,o){return t.call(e,r,n,o)},function(r,n,o,u){return t.call(e,r,n,o,u)},function(r,n,o,u,i){return t.call(e,r,n,o,u,i)}]).length?n[r]:function(n,o,u,i,c,f){var l,a;for(l=[n,o,u,i,c,f],a=6;a<r;a++)l.push(arguments[a]);return t.apply(e,l)}}}));
//# sourceMappingURL=index.js.map
