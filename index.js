// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).naryFunction=r()}(this,(function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function i(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(e){return"string"==typeof e}var p=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,m=/(\..*[^0])0*e/;function _(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,y,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),e.alternate&&(t=g.call(t,w,"$1."),t=g.call(t,b,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):u.call(t)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function k(e,r,t){var i=r-e.length;return i<0?e:e=t?e+E(i):E(i)+e}var x=String.fromCharCode,S=isNaN,j=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,i,n,o,c,p,u,f;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,u=0;u<e.length;u++)if(l(i=e[u]))c+=i;else{if(r=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,S(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=_(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=k(i.arg,i.width,i.padRight)),c+=i.arg||"",p+=1}return c}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,i,n;for(t=[],n=0,i=$.exec(e);i;)(r=e.slice(n,$.lastIndex-i[0].length)).length&&t.push(r),t.push(F(i)),n=$.lastIndex,i=$.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function A(e){return"string"==typeof e}function C(e){var r,t,i;if(!A(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=I(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return T.apply(null,t)}var O,R=Object.prototype,P=R.toString,Z=R.__defineGetter__,G=R.__defineSetter__,W=R.__lookupGetter__,L=R.__lookupSetter__;O=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(W.call(e,r)||L.call(e,r)?(i=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,t.get),o&&G&&G.call(e,r,t.set),e};var N=O;function U(e,r,t){N(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"boolean"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return M&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;var J="function"==typeof Symbol?Symbol:void 0,q="function"==typeof J?J.toStringTag:"";var D=B()?function(e){var r,t,i,n,a;if(null==e)return z.call(e);t=e[q],a=q,r=null!=(n=e)&&Y.call(n,a);try{e[q]=void 0}catch(r){return z.call(e)}return i=z.call(e),r?e[q]=t:delete e[q],i}:function(e){return z.call(e)},H=Boolean,K=Boolean.prototype.toString;var Q=B();function ee(e){return"object"==typeof e&&(e instanceof H||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===D(e)))}function re(e){return X(e)||ee(e)}function te(){return new Function("return this;")()}U(re,"isPrimitive",X),U(re,"isObject",ee);var ie="object"==typeof self?self:null,ne="object"==typeof window?window:null,ae="object"==typeof global?global:null,oe="object"==typeof globalThis?globalThis:null;var ce=function(e){if(arguments.length){if(!X(e))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return te()}if(oe)return oe;if(ie)return ie;if(ne)return ne;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),se=ce.document&&ce.document.childNodes,le=Int8Array;var pe="function"==typeof Object.defineProperty?Object.defineProperty:null;var ue=Object.defineProperty;function fe(e){return"number"==typeof e}function ge(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function de(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ge(n):ge(n)+e,i&&(e="-"+e)),e}var he=String.prototype.toLowerCase,we=String.prototype.toUpperCase;function be(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!fe(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=de(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=de(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===we.call(e.specifier)?we.call(t):he.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ve(e){return"string"==typeof e}var ye=Math.abs,me=String.prototype.toLowerCase,_e=String.prototype.toUpperCase,Ee=String.prototype.replace,ke=/e\+(\d)$/,xe=/e-(\d)$/,Se=/^(\d+)$/,je=/^(\d+)e/,Ve=/\.0$/,Te=/\.0*e/,$e=/(\..*[^0])0*e/;function Fe(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!fe(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":ye(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Ee.call(t,$e,"$1e"),t=Ee.call(t,Te,"e"),t=Ee.call(t,Ve,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Ee.call(t,ke,"e+0$1"),t=Ee.call(t,xe,"e-0$1"),e.alternate&&(t=Ee.call(t,Se,"$1."),t=Ee.call(t,je,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===_e.call(e.specifier)?_e.call(t):me.call(t)}function Ie(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ae(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Ie(i):Ie(i)+e}var Ce=String.fromCharCode,Oe=isNaN,Re=Array.isArray;function Pe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ze(e){var r,t,i,n,a,o,c,s,l;if(!Re(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(ve(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Pe(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Oe(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Oe(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=be(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Oe(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Oe(a)?String(i.arg):Ce(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Fe(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=de(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ae(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ge=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function We(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Le(e){var r,t,i,n;for(t=[],n=0,i=Ge.exec(e);i;)(r=e.slice(n,Ge.lastIndex-i[0].length)).length&&t.push(r),t.push(We(i)),n=Ge.lastIndex,i=Ge.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ne(e){return"string"==typeof e}function Ue(e){var r,t,i;if(!Ne(e))throw new TypeError(Ue("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Le(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Ze.apply(null,t)}var Xe,Me=Object.prototype,Be=Me.toString,ze=Me.__defineGetter__,Ye=Me.__defineSetter__,Je=Me.__lookupGetter__,qe=Me.__lookupSetter__;Xe=function(){try{return pe({},"x",{}),!0}catch(e){return!1}}()?ue:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Be.call(e))throw new TypeError(Ue("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Be.call(t))throw new TypeError(Ue("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Je.call(e,r)||qe.call(e,r)?(i=e.__proto__,e.__proto__=Me,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&ze&&ze.call(e,r,t.get),o&&Ye&&Ye.call(e,r,t.set),e};var De=Xe;function He(){return/^\s*function\s*([^(]*)/i}var Ke=/^\s*function\s*([^(]*)/i;!function(e,r,t){De(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(He,"REGEXP",Ke);var Qe="function"==typeof Object.defineProperty?Object.defineProperty:null;var er=Object.defineProperty;function rr(e){return"number"==typeof e}function tr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ir(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+tr(n):tr(n)+e,i&&(e="-"+e)),e}var nr=String.prototype.toLowerCase,ar=String.prototype.toUpperCase;function or(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!rr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ir(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ir(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ar.call(e.specifier)?ar.call(t):nr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function cr(e){return"string"==typeof e}var sr=Math.abs,lr=String.prototype.toLowerCase,pr=String.prototype.toUpperCase,ur=String.prototype.replace,fr=/e\+(\d)$/,gr=/e-(\d)$/,dr=/^(\d+)$/,hr=/^(\d+)e/,wr=/\.0$/,br=/\.0*e/,vr=/(\..*[^0])0*e/;function yr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!rr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":sr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=ur.call(t,vr,"$1e"),t=ur.call(t,br,"e"),t=ur.call(t,wr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ur.call(t,fr,"e+0$1"),t=ur.call(t,gr,"e-0$1"),e.alternate&&(t=ur.call(t,dr,"$1."),t=ur.call(t,hr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===pr.call(e.specifier)?pr.call(t):lr.call(t)}function mr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _r(e,r,t){var i=r-e.length;return i<0?e:e=t?e+mr(i):mr(i)+e}var Er=String.fromCharCode,kr=isNaN,xr=Array.isArray;function Sr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function jr(e){var r,t,i,n,a,o,c,s,l;if(!xr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(cr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Sr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,kr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,kr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=or(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!kr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=kr(a)?String(i.arg):Er(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=yr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ir(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=_r(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Vr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Tr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $r(e){var r,t,i,n;for(t=[],n=0,i=Vr.exec(e);i;)(r=e.slice(n,Vr.lastIndex-i[0].length)).length&&t.push(r),t.push(Tr(i)),n=Vr.lastIndex,i=Vr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Fr(e){return"string"==typeof e}function Ir(e){var r,t,i;if(!Fr(e))throw new TypeError(Ir("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=$r(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return jr.apply(null,t)}var Ar,Cr=Object.prototype,Or=Cr.toString,Rr=Cr.__defineGetter__,Pr=Cr.__defineSetter__,Zr=Cr.__lookupGetter__,Gr=Cr.__lookupSetter__;Ar=function(){try{return Qe({},"x",{}),!0}catch(e){return!1}}()?er:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Or.call(e))throw new TypeError(Ir("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Or.call(t))throw new TypeError(Ir("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Zr.call(e,r)||Gr.call(e,r)?(i=e.__proto__,e.__proto__=Cr,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Rr&&Rr.call(e,r,t.get),o&&Pr&&Pr.call(e,r,t.set),e};var Wr=Ar;var Lr=Array.isArray?Array.isArray:function(e){return"[object Array]"===D(e)};function Nr(e){return null!==e&&"object"==typeof e}function Ur(e){var r,t,i,n;if(("Object"===(t=D(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=Ke.exec(i.toString()))return r[1]}return Nr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}!function(e,r,t){Wr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(Nr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Ir("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!Lr(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(Nr));var Xr="function"==typeof e||"object"==typeof le||"function"==typeof se?function(e){return Ur(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Ur(e).toLowerCase():r};var Mr="function"==typeof Object.defineProperty?Object.defineProperty:null;var Br=Object.defineProperty;function zr(e){return"number"==typeof e}function Yr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Jr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Yr(n):Yr(n)+e,i&&(e="-"+e)),e}var qr=String.prototype.toLowerCase,Dr=String.prototype.toUpperCase;function Hr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!zr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Jr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Jr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Dr.call(e.specifier)?Dr.call(t):qr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Kr(e){return"string"==typeof e}var Qr=Math.abs,et=String.prototype.toLowerCase,rt=String.prototype.toUpperCase,tt=String.prototype.replace,it=/e\+(\d)$/,nt=/e-(\d)$/,at=/^(\d+)$/,ot=/^(\d+)e/,ct=/\.0$/,st=/\.0*e/,lt=/(\..*[^0])0*e/;function pt(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!zr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Qr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=tt.call(t,lt,"$1e"),t=tt.call(t,st,"e"),t=tt.call(t,ct,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=tt.call(t,it,"e+0$1"),t=tt.call(t,nt,"e-0$1"),e.alternate&&(t=tt.call(t,at,"$1."),t=tt.call(t,ot,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===rt.call(e.specifier)?rt.call(t):et.call(t)}function ut(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ft(e,r,t){var i=r-e.length;return i<0?e:e=t?e+ut(i):ut(i)+e}var gt=String.fromCharCode,dt=isNaN,ht=Array.isArray;function wt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function bt(e){var r,t,i,n,a,o,c,s,l;if(!ht(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Kr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=wt(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,dt(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,dt(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Hr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!dt(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=dt(a)?String(i.arg):gt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=pt(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Jr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=ft(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var vt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function yt(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function mt(e){var r,t,i,n;for(t=[],n=0,i=vt.exec(e);i;)(r=e.slice(n,vt.lastIndex-i[0].length)).length&&t.push(r),t.push(yt(i)),n=vt.lastIndex,i=vt.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function _t(e){return"string"==typeof e}function Et(e){var r,t,i;if(!_t(e))throw new TypeError(Et("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=mt(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return bt.apply(null,t)}var kt,xt=Object.prototype,St=xt.toString,jt=xt.__defineGetter__,Vt=xt.__defineSetter__,Tt=xt.__lookupGetter__,$t=xt.__lookupSetter__;kt=function(){try{return Mr({},"x",{}),!0}catch(e){return!1}}()?Br:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===St.call(e))throw new TypeError(Et("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===St.call(t))throw new TypeError(Et("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Tt.call(e,r)||$t.call(e,r)?(i=e.__proto__,e.__proto__=xt,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&jt&&jt.call(e,r,t.get),o&&Vt&&Vt.call(e,r,t.set),e};var Ft=kt;function It(e,r,t){Ft(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var At="function"==typeof Object.defineProperty?Object.defineProperty:null;var Ct=Object.defineProperty;function Ot(e){return"number"==typeof e}function Rt(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Pt(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Rt(n):Rt(n)+e,i&&(e="-"+e)),e}var Zt=String.prototype.toLowerCase,Gt=String.prototype.toUpperCase;function Wt(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Ot(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Pt(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Pt(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Gt.call(e.specifier)?Gt.call(t):Zt.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Lt(e){return"string"==typeof e}var Nt=Math.abs,Ut=String.prototype.toLowerCase,Xt=String.prototype.toUpperCase,Mt=String.prototype.replace,Bt=/e\+(\d)$/,zt=/e-(\d)$/,Yt=/^(\d+)$/,Jt=/^(\d+)e/,qt=/\.0$/,Dt=/\.0*e/,Ht=/(\..*[^0])0*e/;function Kt(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Ot(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Nt(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Mt.call(t,Ht,"$1e"),t=Mt.call(t,Dt,"e"),t=Mt.call(t,qt,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Mt.call(t,Bt,"e+0$1"),t=Mt.call(t,zt,"e-0$1"),e.alternate&&(t=Mt.call(t,Yt,"$1."),t=Mt.call(t,Jt,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Xt.call(e.specifier)?Xt.call(t):Ut.call(t)}function Qt(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ei(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Qt(i):Qt(i)+e}var ri=String.fromCharCode,ti=isNaN,ii=Array.isArray;function ni(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ai(e){var r,t,i,n,a,o,c,s,l;if(!ii(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Lt(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=ni(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,ti(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,ti(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Wt(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!ti(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=ti(a)?String(i.arg):ri(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Kt(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Pt(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=ei(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var oi=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ci(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function si(e){var r,t,i,n;for(t=[],n=0,i=oi.exec(e);i;)(r=e.slice(n,oi.lastIndex-i[0].length)).length&&t.push(r),t.push(ci(i)),n=oi.lastIndex,i=oi.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function li(e){return"string"==typeof e}function pi(e){var r,t,i;if(!li(e))throw new TypeError(pi("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=si(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return ai.apply(null,t)}var ui,fi=Object.prototype,gi=fi.toString,di=fi.__defineGetter__,hi=fi.__defineSetter__,wi=fi.__lookupGetter__,bi=fi.__lookupSetter__;ui=function(){try{return At({},"x",{}),!0}catch(e){return!1}}()?Ct:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===gi.call(e))throw new TypeError(pi("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===gi.call(t))throw new TypeError(pi("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(wi.call(e,r)||bi.call(e,r)?(i=e.__proto__,e.__proto__=fi,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&di&&di.call(e,r,t.get),o&&hi&&hi.call(e,r,t.set),e};var vi=ui;function yi(e,r,t){vi(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var mi="function"==typeof Object.defineProperty?Object.defineProperty:null;var _i=Object.defineProperty;function Ei(e){return"number"==typeof e}function ki(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function xi(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ki(n):ki(n)+e,i&&(e="-"+e)),e}var Si=String.prototype.toLowerCase,ji=String.prototype.toUpperCase;function Vi(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Ei(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=xi(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=xi(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ji.call(e.specifier)?ji.call(t):Si.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ti(e){return"string"==typeof e}var $i=Math.abs,Fi=String.prototype.toLowerCase,Ii=String.prototype.toUpperCase,Ai=String.prototype.replace,Ci=/e\+(\d)$/,Oi=/e-(\d)$/,Ri=/^(\d+)$/,Pi=/^(\d+)e/,Zi=/\.0$/,Gi=/\.0*e/,Wi=/(\..*[^0])0*e/;function Li(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Ei(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":$i(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Ai.call(t,Wi,"$1e"),t=Ai.call(t,Gi,"e"),t=Ai.call(t,Zi,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Ai.call(t,Ci,"e+0$1"),t=Ai.call(t,Oi,"e-0$1"),e.alternate&&(t=Ai.call(t,Ri,"$1."),t=Ai.call(t,Pi,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Ii.call(e.specifier)?Ii.call(t):Fi.call(t)}function Ni(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ui(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Ni(i):Ni(i)+e}var Xi=String.fromCharCode,Mi=isNaN,Bi=Array.isArray;function zi(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Yi(e){var r,t,i,n,a,o,c,s,l;if(!Bi(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Ti(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=zi(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Mi(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Mi(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Vi(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Mi(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Mi(a)?String(i.arg):Xi(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Li(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=xi(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ui(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ji=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function qi(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Di(e){var r,t,i,n;for(t=[],n=0,i=Ji.exec(e);i;)(r=e.slice(n,Ji.lastIndex-i[0].length)).length&&t.push(r),t.push(qi(i)),n=Ji.lastIndex,i=Ji.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Hi(e){return"string"==typeof e}function Ki(e){var r,t,i;if(!Hi(e))throw new TypeError(Ki("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Di(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Yi.apply(null,t)}var Qi,en=Object.prototype,rn=en.toString,tn=en.__defineGetter__,nn=en.__defineSetter__,an=en.__lookupGetter__,on=en.__lookupSetter__;Qi=function(){try{return mi({},"x",{}),!0}catch(e){return!1}}()?_i:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===rn.call(e))throw new TypeError(Ki("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===rn.call(t))throw new TypeError(Ki("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(an.call(e,r)||on.call(e,r)?(i=e.__proto__,e.__proto__=en,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&tn&&tn.call(e,r,t.get),o&&nn&&nn.call(e,r,t.set),e};var cn=Qi;function sn(e,r,t){cn(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ln(e){return"number"==typeof e}var pn=Number,un=pn.prototype.toString;var fn=B();function gn(e){return"object"==typeof e&&(e instanceof pn||(fn?function(e){try{return un.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function dn(e){return ln(e)||gn(e)}sn(dn,"isPrimitive",ln),sn(dn,"isObject",gn);var hn=Number.POSITIVE_INFINITY,wn=pn.NEGATIVE_INFINITY,bn=Math.floor;function vn(e){return e<hn&&e>wn&&bn(r=e)===r;var r}function yn(e){return ln(e)&&vn(e)}function mn(e){return gn(e)&&vn(e.valueOf())}function _n(e){return yn(e)||mn(e)}function En(e){return yn(e)&&e>=0}function kn(e){return mn(e)&&e.valueOf()>=0}function xn(e){return En(e)||kn(e)}function Sn(){var e,r=arguments,t=r[0],i="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)i+="&arg[]="+encodeURIComponent(r[e]);return i}return yi(_n,"isPrimitive",yn),yi(_n,"isObject",mn),It(xn,"isPrimitive",En),It(xn,"isObject",kn),function(e,r,t){var i;if("function"!==Xr(e))throw new TypeError(Sn("1Vr3c,J9",e));if(!En(r))throw new TypeError(Sn("1Vr3X,F1",r));return r<(i=[function(){return e.call(t)},function(r){return e.call(t,r)},function(r,i){return e.call(t,r,i)},function(r,i,n){return e.call(t,r,i,n)},function(r,i,n,a){return e.call(t,r,i,n,a)},function(r,i,n,a,o){return e.call(t,r,i,n,a,o)}]).length?i[r]:function(i,n,a,o,c,s){var l,p;for(l=[i,n,a,o,c,s],p=6;p<r;p++)l.push(arguments[p]);return e.apply(t,l)}}}));
//# sourceMappingURL=index.js.map