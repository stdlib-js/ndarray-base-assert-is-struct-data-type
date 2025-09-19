// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-data-type-object@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";function i(n){return s(n)&&e(n.alignment)&&e(n.byteLength)&&s(n.byteLengthOf)&&s(n.byteOffsetOf)&&s(n.bufferOf)&&s(n.viewOf)||t(n)&&i(n.value)}export{i as default};
//# sourceMappingURL=index.mjs.map
