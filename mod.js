// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function i(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(e){return"string"==typeof e}var p=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,m=/(\..*[^0])0*e/;function _(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,y,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),e.alternate&&(t=g.call(t,w,"$1."),t=g.call(t,b,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):u.call(t)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function k(e,r,t){var i=r-e.length;return i<0?e:e=t?e+E(i):E(i)+e}var x=String.fromCharCode,S=isNaN,j=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,i,n,o,c,p,u,f;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,u=0;u<e.length;u++)if(l(i=e[u]))c+=i;else{if(r=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,S(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=_(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=k(i.arg,i.width,i.padRight)),c+=i.arg||"",p+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,i,n;for(t=[],n=0,i=I.exec(e);i;)(r=e.slice(n,I.lastIndex-i[0].length)).length&&t.push(r),t.push($(i)),n=I.lastIndex,i=I.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function A(e){return"string"==typeof e}function C(e){var r,t;if(!A(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var O,R=Object.prototype,P=R.toString,Z=R.__defineGetter__,G=R.__defineSetter__,W=R.__lookupGetter__,N=R.__lookupSetter__;O=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(W.call(e,r)||N.call(e,r)?(i=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,t.get),o&&G&&G.call(e,r,t.set),e};var L=O;function U(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"boolean"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return M&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function q(e,r){return null!=e&&Y.call(e,r)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=B()?function(e){var r,t,i;if(null==e)return z.call(e);t=e[H],r=q(e,H);try{e[H]=void 0}catch(r){return z.call(e)}return i=z.call(e),r?e[H]=t:delete e[H],i}:function(e){return z.call(e)},K=Boolean,Q=Boolean.prototype.toString;var ee=B();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function te(e){return X(e)||re(e)}function ie(){return new Function("return this;")()}U(te,"isPrimitive",X),U(te,"isObject",re);var ne="object"==typeof self?self:null,ae="object"==typeof window?window:null,oe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ce="object"==typeof oe?oe:null,se="object"==typeof globalThis?globalThis:null;var le=function(e){if(arguments.length){if(!X(e))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ie()}if(se)return se;if(ne)return ne;if(ae)return ae;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),pe=le.document&&le.document.childNodes,ue=Int8Array;function fe(){return/^\s*function\s*([^(]*)/i}var ge=/^\s*function\s*([^(]*)/i;U(fe,"REGEXP",ge);var de=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};function he(e){return null!==e&&"object"==typeof e}function we(e){var r,t,i,n;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=ge.exec(i.toString()))return r[1]}return he(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}U(he,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!de(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(he));var be="function"==typeof e||"object"==typeof ue||"function"==typeof pe?function(e){return we(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?we(e).toLowerCase():r};var ve="function"==typeof Object.defineProperty?Object.defineProperty:null;var ye=Object.defineProperty;function me(e){return"number"==typeof e}function _e(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Ee(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+_e(n):_e(n)+e,i&&(e="-"+e)),e}var ke=String.prototype.toLowerCase,xe=String.prototype.toUpperCase;function Se(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!me(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Ee(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Ee(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===xe.call(e.specifier)?xe.call(t):ke.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function je(e){return"string"==typeof e}var Ve=Math.abs,Te=String.prototype.toLowerCase,Ie=String.prototype.toUpperCase,$e=String.prototype.replace,Fe=/e\+(\d)$/,Ae=/e-(\d)$/,Ce=/^(\d+)$/,Oe=/^(\d+)e/,Re=/\.0$/,Pe=/\.0*e/,Ze=/(\..*[^0])0*e/;function Ge(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!me(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Ve(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=$e.call(t,Ze,"$1e"),t=$e.call(t,Pe,"e"),t=$e.call(t,Re,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=$e.call(t,Fe,"e+0$1"),t=$e.call(t,Ae,"e-0$1"),e.alternate&&(t=$e.call(t,Ce,"$1."),t=$e.call(t,Oe,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Ie.call(e.specifier)?Ie.call(t):Te.call(t)}function We(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ne(e,r,t){var i=r-e.length;return i<0?e:e=t?e+We(i):We(i)+e}var Le=String.fromCharCode,Ue=isNaN,Xe=Array.isArray;function Me(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Be(e){var r,t,i,n,a,o,c,s,l;if(!Xe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(je(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Me(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ue(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ue(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Se(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Ue(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ue(a)?String(i.arg):Le(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Ge(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Ee(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ne(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var ze=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ye(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function qe(e){var r,t,i,n;for(t=[],n=0,i=ze.exec(e);i;)(r=e.slice(n,ze.lastIndex-i[0].length)).length&&t.push(r),t.push(Ye(i)),n=ze.lastIndex,i=ze.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function De(e){return"string"==typeof e}function He(e){var r,t;if(!De(e))throw new TypeError(He("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[qe(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Be.apply(null,r)}var Je,Ke=Object.prototype,Qe=Ke.toString,er=Ke.__defineGetter__,rr=Ke.__defineSetter__,tr=Ke.__lookupGetter__,ir=Ke.__lookupSetter__;Je=function(){try{return ve({},"x",{}),!0}catch(e){return!1}}()?ye:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Qe.call(e))throw new TypeError(He("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Qe.call(t))throw new TypeError(He("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(tr.call(e,r)||ir.call(e,r)?(i=e.__proto__,e.__proto__=Ke,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&er&&er.call(e,r,t.get),o&&rr&&rr.call(e,r,t.set),e};var nr=Je;function ar(e,r,t){nr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var or="function"==typeof Object.defineProperty?Object.defineProperty:null;var cr=Object.defineProperty;function sr(e){return"number"==typeof e}function lr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function pr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+lr(n):lr(n)+e,i&&(e="-"+e)),e}var ur=String.prototype.toLowerCase,fr=String.prototype.toUpperCase;function gr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!sr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=pr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=pr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===fr.call(e.specifier)?fr.call(t):ur.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function dr(e){return"string"==typeof e}var hr=Math.abs,wr=String.prototype.toLowerCase,br=String.prototype.toUpperCase,vr=String.prototype.replace,yr=/e\+(\d)$/,mr=/e-(\d)$/,_r=/^(\d+)$/,Er=/^(\d+)e/,kr=/\.0$/,xr=/\.0*e/,Sr=/(\..*[^0])0*e/;function jr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!sr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":hr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=vr.call(t,Sr,"$1e"),t=vr.call(t,xr,"e"),t=vr.call(t,kr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=vr.call(t,yr,"e+0$1"),t=vr.call(t,mr,"e-0$1"),e.alternate&&(t=vr.call(t,_r,"$1."),t=vr.call(t,Er,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===br.call(e.specifier)?br.call(t):wr.call(t)}function Vr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Tr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Vr(i):Vr(i)+e}var Ir=String.fromCharCode,$r=isNaN,Fr=Array.isArray;function Ar(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Cr(e){var r,t,i,n,a,o,c,s,l;if(!Fr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(dr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ar(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,$r(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,$r(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=gr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!$r(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=$r(a)?String(i.arg):Ir(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=jr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=pr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Tr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Or=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Rr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Pr(e){var r,t,i,n;for(t=[],n=0,i=Or.exec(e);i;)(r=e.slice(n,Or.lastIndex-i[0].length)).length&&t.push(r),t.push(Rr(i)),n=Or.lastIndex,i=Or.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Zr(e){return"string"==typeof e}function Gr(e){var r,t;if(!Zr(e))throw new TypeError(Gr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Pr(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Cr.apply(null,r)}var Wr,Nr=Object.prototype,Lr=Nr.toString,Ur=Nr.__defineGetter__,Xr=Nr.__defineSetter__,Mr=Nr.__lookupGetter__,Br=Nr.__lookupSetter__;Wr=function(){try{return or({},"x",{}),!0}catch(e){return!1}}()?cr:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Lr.call(e))throw new TypeError(Gr("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Lr.call(t))throw new TypeError(Gr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Mr.call(e,r)||Br.call(e,r)?(i=e.__proto__,e.__proto__=Nr,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Ur&&Ur.call(e,r,t.get),o&&Xr&&Xr.call(e,r,t.set),e};var zr=Wr;function Yr(e,r,t){zr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var qr="function"==typeof Object.defineProperty?Object.defineProperty:null;var Dr=Object.defineProperty;function Hr(e){return"number"==typeof e}function Jr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Kr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Jr(n):Jr(n)+e,i&&(e="-"+e)),e}var Qr=String.prototype.toLowerCase,et=String.prototype.toUpperCase;function rt(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Hr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Kr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Kr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===et.call(e.specifier)?et.call(t):Qr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function tt(e){return"string"==typeof e}var it=Math.abs,nt=String.prototype.toLowerCase,at=String.prototype.toUpperCase,ot=String.prototype.replace,ct=/e\+(\d)$/,st=/e-(\d)$/,lt=/^(\d+)$/,pt=/^(\d+)e/,ut=/\.0$/,ft=/\.0*e/,gt=/(\..*[^0])0*e/;function dt(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Hr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":it(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=ot.call(t,gt,"$1e"),t=ot.call(t,ft,"e"),t=ot.call(t,ut,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ot.call(t,ct,"e+0$1"),t=ot.call(t,st,"e-0$1"),e.alternate&&(t=ot.call(t,lt,"$1."),t=ot.call(t,pt,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===at.call(e.specifier)?at.call(t):nt.call(t)}function ht(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function wt(e,r,t){var i=r-e.length;return i<0?e:e=t?e+ht(i):ht(i)+e}var bt=String.fromCharCode,vt=isNaN,yt=Array.isArray;function mt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function _t(e){var r,t,i,n,a,o,c,s,l;if(!yt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(tt(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=mt(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,vt(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,vt(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=rt(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!vt(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=vt(a)?String(i.arg):bt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=dt(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Kr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=wt(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Et=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function kt(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function xt(e){var r,t,i,n;for(t=[],n=0,i=Et.exec(e);i;)(r=e.slice(n,Et.lastIndex-i[0].length)).length&&t.push(r),t.push(kt(i)),n=Et.lastIndex,i=Et.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function St(e){return"string"==typeof e}function jt(e){var r,t;if(!St(e))throw new TypeError(jt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[xt(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return _t.apply(null,r)}var Vt,Tt=Object.prototype,It=Tt.toString,$t=Tt.__defineGetter__,Ft=Tt.__defineSetter__,At=Tt.__lookupGetter__,Ct=Tt.__lookupSetter__;Vt=function(){try{return qr({},"x",{}),!0}catch(e){return!1}}()?Dr:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===It.call(e))throw new TypeError(jt("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===It.call(t))throw new TypeError(jt("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(At.call(e,r)||Ct.call(e,r)?(i=e.__proto__,e.__proto__=Tt,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$t&&$t.call(e,r,t.get),o&&Ft&&Ft.call(e,r,t.set),e};var Ot=Vt;function Rt(e,r,t){Ot(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Pt(e){return"number"==typeof e}var Zt=Object.prototype.toString;var Gt="function"==typeof Symbol?Symbol:void 0,Wt="function"==typeof Gt?Gt.toStringTag:"";var Nt=B()?function(e){var r,t,i;if(null==e)return Zt.call(e);t=e[Wt],r=q(e,Wt);try{e[Wt]=void 0}catch(r){return Zt.call(e)}return i=Zt.call(e),r?e[Wt]=t:delete e[Wt],i}:function(e){return Zt.call(e)},Lt=Number,Ut=Lt.prototype.toString;var Xt=B();function Mt(e){return"object"==typeof e&&(e instanceof Lt||(Xt?function(e){try{return Ut.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Nt(e)))}function Bt(e){return Pt(e)||Mt(e)}Rt(Bt,"isPrimitive",Pt),Rt(Bt,"isObject",Mt);var zt=Number.POSITIVE_INFINITY,Yt=Lt.NEGATIVE_INFINITY,qt=Math.floor;function Dt(e){return e<zt&&e>Yt&&qt(r=e)===r;var r}function Ht(e){return Pt(e)&&Dt(e)}function Jt(e){return Mt(e)&&Dt(e.valueOf())}function Kt(e){return Ht(e)||Jt(e)}function Qt(e){return Ht(e)&&e>=0}function ei(e){return Jt(e)&&e.valueOf()>=0}function ri(e){return Qt(e)||ei(e)}function ti(e){return"number"==typeof e}function ii(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ni(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ii(n):ii(n)+e,i&&(e="-"+e)),e}Yr(Kt,"isPrimitive",Ht),Yr(Kt,"isObject",Jt),ar(ri,"isPrimitive",Qt),ar(ri,"isObject",ei);var ai=String.prototype.toLowerCase,oi=String.prototype.toUpperCase;function ci(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ti(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ni(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ni(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===oi.call(e.specifier)?oi.call(t):ai.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function si(e){return"string"==typeof e}var li=Math.abs,pi=String.prototype.toLowerCase,ui=String.prototype.toUpperCase,fi=String.prototype.replace,gi=/e\+(\d)$/,di=/e-(\d)$/,hi=/^(\d+)$/,wi=/^(\d+)e/,bi=/\.0$/,vi=/\.0*e/,yi=/(\..*[^0])0*e/;function mi(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ti(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":li(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=fi.call(t,yi,"$1e"),t=fi.call(t,vi,"e"),t=fi.call(t,bi,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=fi.call(t,gi,"e+0$1"),t=fi.call(t,di,"e-0$1"),e.alternate&&(t=fi.call(t,hi,"$1."),t=fi.call(t,wi,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ui.call(e.specifier)?ui.call(t):pi.call(t)}function _i(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ei(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_i(i):_i(i)+e}var ki=String.fromCharCode,xi=isNaN,Si=Array.isArray;function ji(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Vi(e){var r,t,i,n,a,o,c,s,l;if(!Si(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(si(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=ji(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,xi(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,xi(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=ci(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!xi(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=xi(a)?String(i.arg):ki(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=mi(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ni(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ei(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ti=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ii(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $i(e){var r,t,i,n;for(t=[],n=0,i=Ti.exec(e);i;)(r=e.slice(n,Ti.lastIndex-i[0].length)).length&&t.push(r),t.push(Ii(i)),n=Ti.lastIndex,i=Ti.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Fi(e){return"string"==typeof e}function Ai(e){var r,t,i;if(!Fi(e))throw new TypeError(Ai("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=$i(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Vi.apply(null,t)}function Ci(e,r,t){var i;if("function"!==be(e))throw new TypeError(Ai("invalid argument. First argument must be a function. Value: `%s`.",e));if(!Qt(r))throw new TypeError(Ai("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));return r<(i=[function(){return e.call(t)},function(r){return e.call(t,r)},function(r,i){return e.call(t,r,i)},function(r,i,n){return e.call(t,r,i,n)},function(r,i,n,a){return e.call(t,r,i,n,a)},function(r,i,n,a,o){return e.call(t,r,i,n,a,o)}]).length?i[r]:function(i,n,a,o,c,s){var l,p;for(l=[i,n,a,o,c,s],p=6;p<r;p++)l.push(arguments[p]);return e.apply(t,l)}}export{Ci as default};
//# sourceMappingURL=mod.js.map
