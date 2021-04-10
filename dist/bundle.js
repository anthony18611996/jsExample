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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function toX(container, scroll, blocks) {\n  var _container = document.getElementsByTagName(container),\n      _scroll = document.querySelector(scroll),\n      _blocks = document.querySelectorAll(blocks);\n\n  var scrollX;\n  var scrollLeft;\n  var isWork = false;\n\n  _scroll.addEventListener(\"mouseup\", function (event) {\n    isWork = false;\n    scrollLeft = _scroll.scrollLeft; //console.log(scrollLeft);\n  });\n\n  _scroll.addEventListener(\"mousedown\", function (event) {\n    isWork = true;\n    event.preventDefault();\n    scrollX = event.clientX - _scroll.offsetLeft;\n    scrollLeft = _scroll.scrollLeft;\n  });\n\n  _scroll.addEventListener(\"mousemove\", function (event) {\n    if (!isWork) return;\n    event.preventDefault();\n    var element = event.clientX - _scroll.offsetLeft;\n    var scrolling = (element - scrollX) * 2;\n    _scroll.scrollLeft = scrollLeft - scrolling;\n  });\n  /*_blocks.forEach((item)=> {\n      let rect = item.getBoundingClientRect().x;\n      let rectStart = 0;\n      item.addEventListener(\"mousedown\", () => {\n          _scroll.style.transform = `translateX(${rect}px)`;\n      });\n      item.addEventListener(\"mouseup\", ()=> {\n          _scroll.style.transform = `translateX(${rectStart}px)`\n      })\n  })*/\n\n}\n\ntoX('scroll-view', '.scroll', '.block');\n\n//# sourceURL=webpack://front-example/./src/index.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://front-example/./src/scss/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scss/style.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;