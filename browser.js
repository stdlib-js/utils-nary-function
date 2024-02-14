// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function i(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(e){return"string"==typeof e}var p=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,m=/(\..*[^0])0*e/;function _(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,y,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),e.alternate&&(t=g.call(t,w,"$1."),t=g.call(t,b,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):u.call(t)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function k(e,r,t){var i=r-e.length;return i<0?e:e=t?e+E(i):E(i)+e}var x=String.fromCharCode,S=isNaN,j=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,i,n,o,c,p,u,f;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,u=0;u<e.length;u++)if(l(i=e[u]))c+=i;else{if(r=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,S(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=_(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=k(i.arg,i.width,i.padRight)),c+=i.arg||"",p+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,i,n;for(t=[],n=0,i=I.exec(e);i;)(r=e.slice(n,I.lastIndex-i[0].length)).length&&t.push(r),t.push($(i)),n=I.lastIndex,i=I.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function A(e){return"string"==typeof e}function C(e){var r,t;if(!A(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var O,R=Object.prototype,P=R.toString,Z=R.__defineGetter__,G=R.__defineSetter__,W=R.__lookupGetter__,N=R.__lookupSetter__;O=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(W.call(e,r)||N.call(e,r)?(i=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,t.get),o&&G&&G.call(e,r,t.set),e};var L=O;function U(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"boolean"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return M&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function q(e,r){return null!=e&&Y.call(e,r)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"",J=B()?function(e){var r,t,i;if(null==e)return z.call(e);t=e[H],r=q(e,H);try{e[H]=void 0}catch(r){return z.call(e)}return i=z.call(e),r?e[H]=t:delete e[H],i}:function(e){return z.call(e)},K=Boolean,Q=Boolean.prototype.toString,ee=B();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function te(e){return X(e)||re(e)}function ie(){return new Function("return this;")()}U(te,"isPrimitive",X),U(te,"isObject",re);var ne="object"==typeof self?self:null,ae="object"==typeof window?window:null,oe="object"==typeof globalThis?globalThis:null,ce=function(e){if(arguments.length){if(!X(e))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ie()}if(oe)return oe;if(ne)return ne;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),se=ce.document&&ce.document.childNodes,le=Int8Array;function pe(){return/^\s*function\s*([^(]*)/i}var ue=/^\s*function\s*([^(]*)/i;U(pe,"REGEXP",ue);var fe=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};function ge(e){return null!==e&&"object"==typeof e}function de(e){var r,t,i,n;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=ue.exec(i.toString()))return r[1]}return ge(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}U(ge,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!fe(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(ge));var he="function"==typeof e||"object"==typeof le||"function"==typeof se?function(e){return de(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?de(e).toLowerCase():r},we="function"==typeof Object.defineProperty?Object.defineProperty:null,be=Object.defineProperty;function ve(e){return"number"==typeof e}function ye(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function me(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ye(n):ye(n)+e,i&&(e="-"+e)),e}var _e=String.prototype.toLowerCase,Ee=String.prototype.toUpperCase;function ke(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ve(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=me(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=me(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Ee.call(e.specifier)?Ee.call(t):_e.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function xe(e){return"string"==typeof e}var Se=Math.abs,je=String.prototype.toLowerCase,Ve=String.prototype.toUpperCase,Te=String.prototype.replace,Ie=/e\+(\d)$/,$e=/e-(\d)$/,Fe=/^(\d+)$/,Ae=/^(\d+)e/,Ce=/\.0$/,Oe=/\.0*e/,Re=/(\..*[^0])0*e/;function Pe(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ve(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Se(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Te.call(t,Re,"$1e"),t=Te.call(t,Oe,"e"),t=Te.call(t,Ce,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Te.call(t,Ie,"e+0$1"),t=Te.call(t,$e,"e-0$1"),e.alternate&&(t=Te.call(t,Fe,"$1."),t=Te.call(t,Ae,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Ve.call(e.specifier)?Ve.call(t):je.call(t)}function Ze(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ge(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Ze(i):Ze(i)+e}var We=String.fromCharCode,Ne=isNaN,Le=Array.isArray;function Ue(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Xe(e){var r,t,i,n,a,o,c,s,l;if(!Le(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(xe(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ue(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ne(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ne(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=ke(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Ne(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ne(a)?String(i.arg):We(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Pe(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=me(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ge(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Me=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Be(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ze(e){var r,t,i,n;for(t=[],n=0,i=Me.exec(e);i;)(r=e.slice(n,Me.lastIndex-i[0].length)).length&&t.push(r),t.push(Be(i)),n=Me.lastIndex,i=Me.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ye(e){return"string"==typeof e}function qe(e){var r,t;if(!Ye(e))throw new TypeError(qe("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[ze(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Xe.apply(null,r)}var De,He=Object.prototype,Je=He.toString,Ke=He.__defineGetter__,Qe=He.__defineSetter__,er=He.__lookupGetter__,rr=He.__lookupSetter__;De=function(){try{return we({},"x",{}),!0}catch(e){return!1}}()?be:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Je.call(e))throw new TypeError(qe("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Je.call(t))throw new TypeError(qe("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(er.call(e,r)||rr.call(e,r)?(i=e.__proto__,e.__proto__=He,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Ke&&Ke.call(e,r,t.get),o&&Qe&&Qe.call(e,r,t.set),e};var tr=De;function ir(e,r,t){tr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var nr="function"==typeof Object.defineProperty?Object.defineProperty:null,ar=Object.defineProperty;function or(e){return"number"==typeof e}function cr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function sr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+cr(n):cr(n)+e,i&&(e="-"+e)),e}var lr=String.prototype.toLowerCase,pr=String.prototype.toUpperCase;function ur(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!or(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=sr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=sr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===pr.call(e.specifier)?pr.call(t):lr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function fr(e){return"string"==typeof e}var gr=Math.abs,dr=String.prototype.toLowerCase,hr=String.prototype.toUpperCase,wr=String.prototype.replace,br=/e\+(\d)$/,vr=/e-(\d)$/,yr=/^(\d+)$/,mr=/^(\d+)e/,_r=/\.0$/,Er=/\.0*e/,kr=/(\..*[^0])0*e/;function xr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!or(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":gr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=wr.call(t,kr,"$1e"),t=wr.call(t,Er,"e"),t=wr.call(t,_r,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=wr.call(t,br,"e+0$1"),t=wr.call(t,vr,"e-0$1"),e.alternate&&(t=wr.call(t,yr,"$1."),t=wr.call(t,mr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===hr.call(e.specifier)?hr.call(t):dr.call(t)}function Sr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function jr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Sr(i):Sr(i)+e}var Vr=String.fromCharCode,Tr=isNaN,Ir=Array.isArray;function $r(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Fr(e){var r,t,i,n,a,o,c,s,l;if(!Ir(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(fr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=$r(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Tr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Tr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=ur(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Tr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Tr(a)?String(i.arg):Vr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=xr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=sr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=jr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ar=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Cr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Or(e){var r,t,i,n;for(t=[],n=0,i=Ar.exec(e);i;)(r=e.slice(n,Ar.lastIndex-i[0].length)).length&&t.push(r),t.push(Cr(i)),n=Ar.lastIndex,i=Ar.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Rr(e){return"string"==typeof e}function Pr(e){var r,t;if(!Rr(e))throw new TypeError(Pr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Or(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Fr.apply(null,r)}var Zr,Gr=Object.prototype,Wr=Gr.toString,Nr=Gr.__defineGetter__,Lr=Gr.__defineSetter__,Ur=Gr.__lookupGetter__,Xr=Gr.__lookupSetter__;Zr=function(){try{return nr({},"x",{}),!0}catch(e){return!1}}()?ar:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Wr.call(e))throw new TypeError(Pr("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Wr.call(t))throw new TypeError(Pr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Ur.call(e,r)||Xr.call(e,r)?(i=e.__proto__,e.__proto__=Gr,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Nr&&Nr.call(e,r,t.get),o&&Lr&&Lr.call(e,r,t.set),e};var Mr=Zr;function Br(e,r,t){Mr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var zr="function"==typeof Object.defineProperty?Object.defineProperty:null,Yr=Object.defineProperty;function qr(e){return"number"==typeof e}function Dr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Hr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Dr(n):Dr(n)+e,i&&(e="-"+e)),e}var Jr=String.prototype.toLowerCase,Kr=String.prototype.toUpperCase;function Qr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!qr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Hr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Hr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Kr.call(e.specifier)?Kr.call(t):Jr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function et(e){return"string"==typeof e}var rt=Math.abs,tt=String.prototype.toLowerCase,it=String.prototype.toUpperCase,nt=String.prototype.replace,at=/e\+(\d)$/,ot=/e-(\d)$/,ct=/^(\d+)$/,st=/^(\d+)e/,lt=/\.0$/,pt=/\.0*e/,ut=/(\..*[^0])0*e/;function ft(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!qr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":rt(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=nt.call(t,ut,"$1e"),t=nt.call(t,pt,"e"),t=nt.call(t,lt,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=nt.call(t,at,"e+0$1"),t=nt.call(t,ot,"e-0$1"),e.alternate&&(t=nt.call(t,ct,"$1."),t=nt.call(t,st,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===it.call(e.specifier)?it.call(t):tt.call(t)}function gt(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function dt(e,r,t){var i=r-e.length;return i<0?e:e=t?e+gt(i):gt(i)+e}var ht=String.fromCharCode,wt=isNaN,bt=Array.isArray;function vt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function yt(e){var r,t,i,n,a,o,c,s,l;if(!bt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(et(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=vt(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,wt(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,wt(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Qr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!wt(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=wt(a)?String(i.arg):ht(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=ft(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Hr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=dt(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var mt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _t(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Et(e){var r,t,i,n;for(t=[],n=0,i=mt.exec(e);i;)(r=e.slice(n,mt.lastIndex-i[0].length)).length&&t.push(r),t.push(_t(i)),n=mt.lastIndex,i=mt.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function kt(e){return"string"==typeof e}function xt(e){var r,t;if(!kt(e))throw new TypeError(xt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Et(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return yt.apply(null,r)}var St,jt=Object.prototype,Vt=jt.toString,Tt=jt.__defineGetter__,It=jt.__defineSetter__,$t=jt.__lookupGetter__,Ft=jt.__lookupSetter__;St=function(){try{return zr({},"x",{}),!0}catch(e){return!1}}()?Yr:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Vt.call(e))throw new TypeError(xt("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Vt.call(t))throw new TypeError(xt("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&($t.call(e,r)||Ft.call(e,r)?(i=e.__proto__,e.__proto__=jt,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Tt&&Tt.call(e,r,t.get),o&&It&&It.call(e,r,t.set),e};var At=St;function Ct(e,r,t){At(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Ot(e){return"number"==typeof e}var Rt=Object.prototype.toString,Pt="function"==typeof Symbol?Symbol:void 0,Zt="function"==typeof Pt?Pt.toStringTag:"",Gt=B()?function(e){var r,t,i;if(null==e)return Rt.call(e);t=e[Zt],r=q(e,Zt);try{e[Zt]=void 0}catch(r){return Rt.call(e)}return i=Rt.call(e),r?e[Zt]=t:delete e[Zt],i}:function(e){return Rt.call(e)},Wt=Number,Nt=Wt.prototype.toString,Lt=B();function Ut(e){return"object"==typeof e&&(e instanceof Wt||(Lt?function(e){try{return Nt.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Gt(e)))}function Xt(e){return Ot(e)||Ut(e)}Ct(Xt,"isPrimitive",Ot),Ct(Xt,"isObject",Ut);var Mt=Number.POSITIVE_INFINITY,Bt=Wt.NEGATIVE_INFINITY,zt=Math.floor;function Yt(e){return e<Mt&&e>Bt&&zt(r=e)===r;var r}function qt(e){return Ot(e)&&Yt(e)}function Dt(e){return Ut(e)&&Yt(e.valueOf())}function Ht(e){return qt(e)||Dt(e)}function Jt(e){return qt(e)&&e>=0}function Kt(e){return Dt(e)&&e.valueOf()>=0}function Qt(e){return Jt(e)||Kt(e)}function ei(e){return"number"==typeof e}function ri(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ti(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ri(n):ri(n)+e,i&&(e="-"+e)),e}Br(Ht,"isPrimitive",qt),Br(Ht,"isObject",Dt),ir(Qt,"isPrimitive",Jt),ir(Qt,"isObject",Kt);var ii=String.prototype.toLowerCase,ni=String.prototype.toUpperCase;function ai(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ei(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ti(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ti(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ni.call(e.specifier)?ni.call(t):ii.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function oi(e){return"string"==typeof e}var ci=Math.abs,si=String.prototype.toLowerCase,li=String.prototype.toUpperCase,pi=String.prototype.replace,ui=/e\+(\d)$/,fi=/e-(\d)$/,gi=/^(\d+)$/,di=/^(\d+)e/,hi=/\.0$/,wi=/\.0*e/,bi=/(\..*[^0])0*e/;function vi(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ei(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":ci(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=pi.call(t,bi,"$1e"),t=pi.call(t,wi,"e"),t=pi.call(t,hi,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=pi.call(t,ui,"e+0$1"),t=pi.call(t,fi,"e-0$1"),e.alternate&&(t=pi.call(t,gi,"$1."),t=pi.call(t,di,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===li.call(e.specifier)?li.call(t):si.call(t)}function yi(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function mi(e,r,t){var i=r-e.length;return i<0?e:e=t?e+yi(i):yi(i)+e}var _i=String.fromCharCode,Ei=isNaN,ki=Array.isArray;function xi(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Si(e){var r,t,i,n,a,o,c,s,l;if(!ki(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(oi(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=xi(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ei(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ei(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=ai(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Ei(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ei(a)?String(i.arg):_i(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=vi(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ti(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=mi(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var ji=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Vi(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ti(e){var r,t,i,n;for(t=[],n=0,i=ji.exec(e);i;)(r=e.slice(n,ji.lastIndex-i[0].length)).length&&t.push(r),t.push(Vi(i)),n=ji.lastIndex,i=ji.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ii(e){return"string"==typeof e}function $i(e){var r,t,i;if(!Ii(e))throw new TypeError($i("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ti(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Si.apply(null,t)}return function(e,r,t){var i;if("function"!==he(e))throw new TypeError($i("invalid argument. First argument must be a function. Value: `%s`.",e));if(!Jt(r))throw new TypeError($i("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));return r<(i=[function(){return e.call(t)},function(r){return e.call(t,r)},function(r,i){return e.call(t,r,i)},function(r,i,n){return e.call(t,r,i,n)},function(r,i,n,a){return e.call(t,r,i,n,a)},function(r,i,n,a,o){return e.call(t,r,i,n,a,o)}]).length?i[r]:function(i,n,a,o,c,s){var l,p;for(l=[i,n,a,o,c,s],p=6;p<r;p++)l.push(arguments[p]);return e.apply(t,l)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).naryFunction=r();
//# sourceMappingURL=browser.js.map
