"use strict";var c=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var f=c(function(y,n){
var O=require('@stdlib/ndarray-base-assert-is-data-type-object/dist'),i=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,e=require('@stdlib/assert-is-function/dist');function s(t){return e(t)&&i(t.alignment)&&i(t.byteLength)&&e(t.byteLengthOf)&&e(t.byteOffsetOf)&&e(t.bufferOf)&&e(t.viewOf)||O(t)&&s(t.value)}n.exports=s
});var b=f();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
