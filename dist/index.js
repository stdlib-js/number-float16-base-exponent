"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var i=a(function(p,t){
var n=require('@stdlib/number-float16-base-to-word/dist'),s=require('@stdlib/constants-float16-exponent-bias/dist'),o=require('@stdlib/constants-float16-exponent-mask/dist');function v(e){var r=n(e);return r=(r&o)>>>10,r-s}t.exports=v
});var q=i();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
