"use strict";var O=function(t,e){return function(){try{return e||t((e={exports:{}}).exports,e),e.exports}catch(c){throw (e=0, c)}};};var f=O(function(g,n){
var b=require('@stdlib/ndarray-base-assert-is-data-type-object/dist'),i=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,r=require('@stdlib/assert-is-function/dist');function s(t){return r(t)&&i(t.alignment)&&i(t.byteLength)&&r(t.byteLengthOf)&&r(t.byteOffsetOf)&&r(t.bufferOf)&&r(t.viewOf)||b(t)&&s(t.value)}n.exports=s
});var o=f();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
