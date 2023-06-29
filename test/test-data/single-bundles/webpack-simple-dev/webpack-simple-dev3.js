/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({
  /***/ "./assets/js/date.js":
/*!***************************!*\
  !*** ./assets/js/date.js ***!
  \***************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function(){\n  var elements = document.querySelectorAll(\"[localize][datetime]\");\n  for (var i=elements.length; i--;){\n    var element = elements[i];\n\n    var date = new Date(element.getAttribute('datetime'));\n    if (!isNaN(date)) {\n      var dateFormatOptions = {year:'numeric', month: '2-digit', day: '2-digit'}\n      var dateString = date\n        .toLocaleString(undefined, dateFormatOptions)\n\n      element.innerHTML = dateString;\n\n      element.style.visibility = 'visible';\n    }\n  }\n});\n\n\n//# sourceURL=webpack://cloudflare/./assets/js/date.js?");

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_cloudflare_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/cloudflare.css */ \"./assets/css/cloudflare.css\");\n/* harmony import */ var _css_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/global.css */ \"./assets/css/global.css\");\n/* harmony import */ var _css_nav_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/nav.css */ \"./assets/css/nav.css\");\n/* harmony import */ var _css_coveo_custom_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/coveo-custom.css */ \"./assets/css/coveo-custom.css\");\n/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date.js */ \"./assets/js/date.js\");\n/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_date_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav.js */ \"./assets/js/nav.js\");\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nav_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lang_picker_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lang-picker.js */ \"./assets/js/lang-picker.js\");\n/* harmony import */ var _css_prism_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/prism.css */ \"./assets/css/prism.css\");\n/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./prism.js */ \"./assets/js/prism.js\");\n/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_prism_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _videos_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./videos.js */ \"./assets/js/videos.js\");\n\nwindow.$ = window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://cloudflare/./assets/js/index.js?");

/***/ })
});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/index.js");
/******/ 	
/******/ })()
;