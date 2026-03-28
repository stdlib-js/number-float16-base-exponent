"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=u(function(c,t){
var a=require('@stdlib/number-float16-base-to-word/dist'),n=require('@stdlib/constants-float16-exponent-bias/dist'),s=require('@stdlib/constants-float16-exponent-mask/dist');function o(e){var r=a(e);return r=(r&s)>>>10,r-n}t.exports=o
});var v=i();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
