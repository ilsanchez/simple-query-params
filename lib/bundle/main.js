!function(e){var r={};function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)t.d(n,i,function(r){return e[r]}.bind(null,i));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=2)}([function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});const n=t(4);r.QueryParam=class{constructor(e,r){const t=n.getUnderlyingType(r);if(this._name=e,this._type=t,"string"===t)this._value=r;else if("number"===t)this._value=Number(r);else{if("array"!==t)throw new Error('Invalid value for query param. It must be one of: "string" | "number" | "Array<string>"');Array.isArray(r)?this._value=r:this._value=r.split(",")}}get stringified(){return`${this._name}=${n.normalizeValue(this._value)}`}get value(){return this._value}get name(){return this._name}get type(){return this._type}get isString(){return"string"===this._type}get isNumber(){return"number"===this._type}get isArray(){return"array"===this._type}setValue(e,r){if("number"===this._type||"string"===this._type)this._value=e;else{let t=Array.isArray(e)?[e]:e;this._value="append"===r?this._value.concat(t):e}}}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.URL_SPLIT_TOKEN="?";r.PARAMETER_SPLIT_TOKEN="&";r.ARRAY_PARAMETER_JOIN_TOKEN=","},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(3);r.Url=n.Url;var i=t(0);r.QueryParam=i.QueryParam},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});const n=t(0),i=t(1);r.Url=class{constructor(e){this._originalUrl=e,this._initialize(e)}get builtUrl(){return`${this._baseUrl}${i.URL_SPLIT_TOKEN}${this._params.map(e=>e.stringified).join(i.PARAMETER_SPLIT_TOKEN)}`}get originalUrl(){return this._originalUrl}setValue(e,r,t){const i=this._params.find(r=>r.name===e);return i?i.setValue(r,t):this._params.concat([new n.QueryParam(e,r)]),this}getParam(e){return this._params.find(r=>r.name===e)}_initialize(e){const[r,t]=this._extractUrlParts(e);this._baseUrl=r,this._params=this._extractQueryParams(t)}_extractUrlParts(e){const r=e.split(i.URL_SPLIT_TOKEN);return 2===r.length?[r[0],r[1]]:[r[0],""]}_extractQueryParams(e){return e.split(i.PARAMETER_SPLIT_TOKEN).map(e=>{const[r,t]=e.split("=");return new n.QueryParam(r,t)})}}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});const n=t(1);r.normalizeValue=e=>{if("string"==typeof e)return e;if("number"==typeof e)return e.toString();if(Array.isArray(e))return e.join(n.ARRAY_PARAMETER_JOIN_TOKEN);throw new Error('Invalid value for query param. It must be one of: "string" | "number" | "Array<string>"')},r.getUnderlyingType=e=>"string"==typeof e?e.includes(",")?"array":Number(e)?"number":"string":Number(e)?"number":Array.isArray(e)?"array":void 0}]);