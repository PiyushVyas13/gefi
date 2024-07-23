"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/uint8array-tools";
exports.ids = ["vendor-chunks/uint8array-tools"];
exports.modules = {

/***/ "(ssr)/./node_modules/uint8array-tools/src/mjs/index.js":
/*!********************************************************!*\
  !*** ./node_modules/uint8array-tools/src/mjs/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compare: () => (/* binding */ compare),\n/* harmony export */   fromHex: () => (/* binding */ fromHex),\n/* harmony export */   toHex: () => (/* binding */ toHex)\n/* harmony export */ });\nfunction toHex(bytes) {\n    return Buffer.from(bytes || []).toString(\"hex\");\n}\nfunction fromHex(hexString) {\n    return Uint8Array.from(Buffer.from(hexString || \"\", \"hex\"));\n}\nfunction compare(v1, v2) {\n    return Buffer.from(v1).compare(Buffer.from(v2));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdWludDhhcnJheS10b29scy9zcmMvbWpzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N3YXBwZXItZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvdWludDhhcnJheS10b29scy9zcmMvbWpzL2luZGV4LmpzP2U3ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHRvSGV4KGJ5dGVzKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGJ5dGVzIHx8IFtdKS50b1N0cmluZyhcImhleFwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmcm9tSGV4KGhleFN0cmluZykge1xuICAgIHJldHVybiBVaW50OEFycmF5LmZyb20oQnVmZmVyLmZyb20oaGV4U3RyaW5nIHx8IFwiXCIsIFwiaGV4XCIpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlKHYxLCB2Mikge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbSh2MSkuY29tcGFyZShCdWZmZXIuZnJvbSh2MikpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uint8array-tools/src/mjs/index.js\n");

/***/ })

};
;