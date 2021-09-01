/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\n\ntoX('.scroll');\n\nfunction toX(scroll) {\n  var _scroll = document.querySelectorAll(scroll);\n\n  var scrollX;\n  var scrollLeft;\n  var isWork = false;\n\n  _scroll.forEach(function (item) {\n    item.addEventListener(\"mouseup\", function (event) {\n      isWork = false;\n      item.classList.remove('active');\n      scrollLeft = item.scrollLeft;\n    });\n    item.addEventListener(\"mousedown\", function (event) {\n      isWork = true;\n      event.preventDefault();\n      item.classList.add('active');\n      scrollX = event.clientX - item.offsetLeft;\n      scrollLeft = item.scrollLeft;\n    });\n    item.addEventListener(\"mousemove\", function (event) {\n      if (!isWork) return;\n      event.preventDefault();\n      var element = event.clientX - item.offsetLeft;\n      var scrolling = (element - scrollX) * 2;\n      item.scrollLeft = scrollLeft - scrolling;\n    });\n  });\n}\n\nvar INTERVAL = 500,\n    MAX_VALUE = 10;\nvar counter = 0,\n    timer = null;\n\nvar event = function event() {\n  if (counter === MAX_VALUE) {\n    console.log('The end');\n    clearInterval(timer);\n    return;\n  }\n\n  console.dir({\n    counter: counter,\n    date: new Date()\n  });\n  counter++;\n};\n\nconsole.log('Begin');\ntimer = setInterval(event, INTERVAL);\n\n//# sourceURL=webpack://front-example/./src/index.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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