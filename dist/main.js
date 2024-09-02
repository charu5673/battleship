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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/04B_30__.TTF */ \"./src/assets/fonts/04B_30__.TTF\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n    font-family: pixel;\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n}\r\n\r\n*\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: pixel;\r\n}\r\n\r\nbody\r\n{\r\n    padding-left: 150px;\r\n    padding-right: 150px;\r\n    display: grid;\r\n    grid-template-rows: 10fr 1fr;\r\n    grid-template-columns: 1fr 1fr;\r\n    column-gap: 40px;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.current_player\r\n{\r\n    justify-self: flex-end;\r\n    grid-row: 1/2;\r\n    grid-column: 1/2;\r\n}\r\n\r\n.opponent_player\r\n{\r\n    justify-self: flex-start;\r\n    grid-row: 1/2;\r\n    grid-column: 2/3;\r\n}\r\n\r\n.control_area\r\n{\r\n    grid-row: 2/3;\r\n    grid-column: 1/3;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 10px;\r\n}\r\n\r\n.gameboard\r\n{\r\n    height: 600px;\r\n    width: 600px;\r\n    border: 5px solid #0a3556;\r\n    box-sizing: content-box;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.grid_row\r\n{\r\n    display: flex;\r\n    flex: 1;\r\n}\r\n\r\n.grid_square\r\n{\r\n    flex: 1;\r\n    border: 1px solid #0a3556;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.grid_square.miss\r\n{\r\n    background-color: darkgray;\r\n}\r\n\r\n.opponent_player .grid_square.hit\r\n{\r\n    background-color: rgb(206, 112, 112);\r\n}\r\n\r\n.grid_square.sunk\r\n{\r\n    background-color: rgb(101, 38, 38);\r\n}\r\n\r\n.buttons\r\n{\r\n    margin-bottom: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n.buttons button\r\n{\r\n    border-radius: 20px;\r\n    background-color: #0a3556;\r\n    color: aliceblue;\r\n    height: 40px;\r\n    width: 120px;\r\n}\r\n\r\n.ships_select\r\n{\r\n    height: 80px;\r\n}\r\n\r\n.ships_select img\r\n{\r\n    height: 60px;\r\n    width: auto;\r\n}\r\n\r\n.ships_select img.selected\r\n{\r\n    border: 4px solid #0a3556;\r\n    border-radius: 20px;\r\n}\r\n\r\ndialog\r\n{\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-color: #ffffff00;\r\n    border: none;\r\n}\r\n\r\n.modaldiv\r\n{\r\n    margin:auto;\r\n    margin-top: 150px;\r\n    background-color: aliceblue;\r\n    border-radius: 20px;\r\n    border: 2px solid #0a3556;\r\n    height: 500px;\r\n    width: 450px;\r\n    display: grid;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#human_choice input,#computer_choice input\r\n{\r\n    height: 20px;\r\n    width: 20px;\r\n    border: 2px solid #0a3556;\r\n}\r\n\r\n#human_choice p,#computer_choice p\r\n{\r\n    display: inline;\r\n}\r\n\r\n#hidemodal\r\n{\r\n    border-radius: 20px;\r\n    background-color: #0a3556;\r\n    color: aliceblue;\r\n    height: 40px;\r\n    width: 120px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   orient_flag: () => (/* binding */ orient_flag)\n/* harmony export */ });\n\r\nvar orient_flag=false;\r\n\r\ndocument.querySelector(\".rotate\").addEventListener(\"click\",(e)=>{\r\n    orient_flag=!orient_flag;\r\n    e.target.textContent=(orient_flag)?\"Horizontal\":\"Vertical\";\r\n});\n\n//# sourceURL=webpack://battleship/./src/events.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\r\n\r\n// spaces: -1=empty, 0-9=ship no., 10-19=hit, -2=miss\r\n\r\nclass Gameboard\r\n{\r\n    constructor()\r\n    {\r\n        this.spaces=[];\r\n        this.initSpaces();\r\n        this.shipCoords=[[],[],[],[],[],[],[],[],[],[]];\r\n        this.sunkCount=0;\r\n        this.ships=[];\r\n    }\r\n    initSpaces()\r\n    {\r\n        for(var i=0;i<=9;i++)\r\n        {\r\n            this.spaces[i]=[];\r\n            for(var j=0;j<=9;j++)\r\n            {\r\n                this.spaces[i].push(-1);\r\n            }\r\n        }\r\n    }\r\n    placeShip(length,angle,x,y,name)\r\n    {\r\n        if(angle!=\"vertical\")\r\n        {\r\n            if(y+length-1<=9&&(y>=0&&y<=9)&&(x>=0&&x<=9))\r\n            {\r\n                var i,flag=true;\r\n                let count=this.ships.length;\r\n                for(i=y;i<y+length;i++)\r\n                {\r\n                    if(this.spaces[x][i]!=-1)\r\n                    {\r\n                        flag=false;\r\n                        break;\r\n                    }\r\n                }\r\n                if(!flag)\r\n                    return false;\r\n                this.ships.push(new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(length,name));\r\n                for(i=y;i<y+length;i++)\r\n                    {\r\n                        this.spaces[x][i]=count;\r\n                        this.shipCoords[count].push([x,i]);\r\n                        this.ships[count].coords.push([x,i]);\r\n                    }\r\n                    return true;\r\n            }\r\n        }\r\n        else\r\n            {\r\n                if(x+length-1<=9&&(y>=0&&y<=9)&&(x>=0&&x<=9))\r\n                {\r\n                    var i,flag=true;\r\n                    let count=this.ships.length;\r\n                    for(i=x;i<x+length;i++)\r\n                    {\r\n                        if(this.spaces[i][y]!=-1)\r\n                        {\r\n                            flag=false;\r\n                            break;\r\n                        }\r\n                    }\r\n                    if(!flag)\r\n                        return false;\r\n                    this.ships.push(new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(length,name));\r\n                    for(i=x;i<x+length;i++)\r\n                        {\r\n                            this.spaces[i][y]=count;\r\n                            this.shipCoords[count].push([i,y]);\r\n                            this.ships[count].coords.push([i,y]);\r\n                        }\r\n                        return true;\r\n                }\r\n            }\r\n    }\r\n    removeShip(length,angle,x,y,name)\r\n    {\r\n                let count;\r\n                for(i=0;i<10;i++)\r\n                {\r\n                    if(this.shipCoords[i].length==0)\r\n                        continue;\r\n                    if(this.shipCoords[i][0][0]==x&&this.shipCoords[i][0][1]==y)\r\n                        break;\r\n                }\r\n                count=i;\r\n        if(angle!=\"vertical\")\r\n        {\r\n            if(y+length-1<=9&&(y>=0&&y<=9)&&(x>=0&&x<=9))\r\n            {\r\n                var i;\r\n                for(i=y;i<y+length;i++)\r\n                    {\r\n                        this.spaces[x][i]=-1;\r\n                    }\r\n                    this.shipCoords[count]=[];\r\n                    this.ships.splice(1,count);\r\n                    return true;\r\n            }\r\n            return false;\r\n        }\r\n        else\r\n            {\r\n                    if(x+length-1<=9&&(y>=0&&y<=9)&&(x>=0&&x<=9))\r\n                        {\r\n                            var i;\r\n                            for(i=x;i<x+length;i++)\r\n                                {\r\n                                    this.spaces[i][y]=-1;\r\n                                }\r\n                                this.shipCoords[count]=[];\r\n                                this.ships.splice(1,count);\r\n                                return true;\r\n                        }\r\n                        return false;\r\n            }\r\n    }\r\n    receiveAttack(x,y)\r\n    {\r\n        let val=this.spaces[x][y];\r\n        if(val==-1)\r\n        {\r\n            this.spaces[x][y]=-2;\r\n            return 'miss';\r\n        }\r\n        if(val==-2||val>=10&&val<=19)\r\n        {\r\n            return null;\r\n        }\r\n        if(val>=0&&val<=9)\r\n        {\r\n            this.ships[val].hit();\r\n            this.spaces[x][y]=val+10;\r\n            if(this.ships[val].isSunk())\r\n            {\r\n                this.sunkCount=this.sunkCount+1;\r\n                return 'sunk';\r\n            }\r\n            return 'hit';\r\n        }\r\n    }\r\n    allSunk()\r\n    {\r\n        if(this.sunkCount>=10)\r\n            return true;\r\n        return false;\r\n    }\r\n}\r\n\r\n\r\n/*\r\n\r\nships info\r\n\r\n0 carrier - amount 1 - size 5\r\n\r\n1 battleship - amount 2 - size 4\r\n\r\n2 submarine - amount 2 - size 3\r\n\r\n3 cruiser - amount 1 - size 3\r\n\r\n4 destroyer - amount 4 - size 2\r\n\r\n*/\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_pngs_carrier_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/pngs/carrier.png */ \"./src/assets/pngs/carrier.png\");\n/* harmony import */ var _assets_pngs_carrier_horizontal_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/pngs/carrier_horizontal_1.png */ \"./src/assets/pngs/carrier_horizontal_1.png\");\n/* harmony import */ var _assets_pngs_carrier_horizontal_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/pngs/carrier_horizontal_2.png */ \"./src/assets/pngs/carrier_horizontal_2.png\");\n/* harmony import */ var _assets_pngs_carrier_horizontal_3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/pngs/carrier_horizontal_3.png */ \"./src/assets/pngs/carrier_horizontal_3.png\");\n/* harmony import */ var _assets_pngs_carrier_horizontal_4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/pngs/carrier_horizontal_4.png */ \"./src/assets/pngs/carrier_horizontal_4.png\");\n/* harmony import */ var _assets_pngs_carrier_horizontal_5_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/pngs/carrier_horizontal_5.png */ \"./src/assets/pngs/carrier_horizontal_5.png\");\n/* harmony import */ var _assets_pngs_carrier_vertical_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/pngs/carrier_vertical_1.png */ \"./src/assets/pngs/carrier_vertical_1.png\");\n/* harmony import */ var _assets_pngs_carrier_vertical_2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/pngs/carrier_vertical_2.png */ \"./src/assets/pngs/carrier_vertical_2.png\");\n/* harmony import */ var _assets_pngs_carrier_vertical_3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/pngs/carrier_vertical_3.png */ \"./src/assets/pngs/carrier_vertical_3.png\");\n/* harmony import */ var _assets_pngs_carrier_vertical_4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/pngs/carrier_vertical_4.png */ \"./src/assets/pngs/carrier_vertical_4.png\");\n/* harmony import */ var _assets_pngs_carrier_vertical_5_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/pngs/carrier_vertical_5.png */ \"./src/assets/pngs/carrier_vertical_5.png\");\n/* harmony import */ var _assets_pngs_battleship_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/pngs/battleship.png */ \"./src/assets/pngs/battleship.png\");\n/* harmony import */ var _assets_pngs_battleship_horizontal_1_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/pngs/battleship_horizontal_1.png */ \"./src/assets/pngs/battleship_horizontal_1.png\");\n/* harmony import */ var _assets_pngs_battleship_horizontal_2_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/pngs/battleship_horizontal_2.png */ \"./src/assets/pngs/battleship_horizontal_2.png\");\n/* harmony import */ var _assets_pngs_battleship_horizontal_3_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/pngs/battleship_horizontal_3.png */ \"./src/assets/pngs/battleship_horizontal_3.png\");\n/* harmony import */ var _assets_pngs_battleship_horizontal_4_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/pngs/battleship_horizontal_4.png */ \"./src/assets/pngs/battleship_horizontal_4.png\");\n/* harmony import */ var _assets_pngs_battleship_vertical_1_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/pngs/battleship_vertical_1.png */ \"./src/assets/pngs/battleship_vertical_1.png\");\n/* harmony import */ var _assets_pngs_battleship_vertical_2_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/pngs/battleship_vertical_2.png */ \"./src/assets/pngs/battleship_vertical_2.png\");\n/* harmony import */ var _assets_pngs_battleship_vertical_3_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/pngs/battleship_vertical_3.png */ \"./src/assets/pngs/battleship_vertical_3.png\");\n/* harmony import */ var _assets_pngs_battleship_vertical_4_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/pngs/battleship_vertical_4.png */ \"./src/assets/pngs/battleship_vertical_4.png\");\n/* harmony import */ var _assets_pngs_cruiser_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/pngs/cruiser.png */ \"./src/assets/pngs/cruiser.png\");\n/* harmony import */ var _assets_pngs_cruiser_horizontal_1_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/pngs/cruiser_horizontal_1.png */ \"./src/assets/pngs/cruiser_horizontal_1.png\");\n/* harmony import */ var _assets_pngs_cruiser_horizontal_2_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/pngs/cruiser_horizontal_2.png */ \"./src/assets/pngs/cruiser_horizontal_2.png\");\n/* harmony import */ var _assets_pngs_cruiser_horizontal_3_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/pngs/cruiser_horizontal_3.png */ \"./src/assets/pngs/cruiser_horizontal_3.png\");\n/* harmony import */ var _assets_pngs_cruiser_vertical_1_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/pngs/cruiser_vertical_1.png */ \"./src/assets/pngs/cruiser_vertical_1.png\");\n/* harmony import */ var _assets_pngs_cruiser_vertical_2_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/pngs/cruiser_vertical_2.png */ \"./src/assets/pngs/cruiser_vertical_2.png\");\n/* harmony import */ var _assets_pngs_cruiser_vertical_3_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./assets/pngs/cruiser_vertical_3.png */ \"./src/assets/pngs/cruiser_vertical_3.png\");\n/* harmony import */ var _assets_pngs_submarine_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./assets/pngs/submarine.png */ \"./src/assets/pngs/submarine.png\");\n/* harmony import */ var _assets_pngs_submarine_horizontal_1_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./assets/pngs/submarine_horizontal_1.png */ \"./src/assets/pngs/submarine_horizontal_1.png\");\n/* harmony import */ var _assets_pngs_submarine_horizontal_2_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./assets/pngs/submarine_horizontal_2.png */ \"./src/assets/pngs/submarine_horizontal_2.png\");\n/* harmony import */ var _assets_pngs_submarine_horizontal_3_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./assets/pngs/submarine_horizontal_3.png */ \"./src/assets/pngs/submarine_horizontal_3.png\");\n/* harmony import */ var _assets_pngs_submarine_vertical_1_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./assets/pngs/submarine_vertical_1.png */ \"./src/assets/pngs/submarine_vertical_1.png\");\n/* harmony import */ var _assets_pngs_submarine_vertical_2_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./assets/pngs/submarine_vertical_2.png */ \"./src/assets/pngs/submarine_vertical_2.png\");\n/* harmony import */ var _assets_pngs_submarine_vertical_3_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./assets/pngs/submarine_vertical_3.png */ \"./src/assets/pngs/submarine_vertical_3.png\");\n/* harmony import */ var _assets_pngs_destroyer_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./assets/pngs/destroyer.png */ \"./src/assets/pngs/destroyer.png\");\n/* harmony import */ var _assets_pngs_destroyer_horizontal_1_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./assets/pngs/destroyer_horizontal_1.png */ \"./src/assets/pngs/destroyer_horizontal_1.png\");\n/* harmony import */ var _assets_pngs_destroyer_horizontal_2_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./assets/pngs/destroyer_horizontal_2.png */ \"./src/assets/pngs/destroyer_horizontal_2.png\");\n/* harmony import */ var _assets_pngs_destroyer_vertical_1_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./assets/pngs/destroyer_vertical_1.png */ \"./src/assets/pngs/destroyer_vertical_1.png\");\n/* harmony import */ var _assets_pngs_destroyer_vertical_2_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./assets/pngs/destroyer_vertical_2.png */ \"./src/assets/pngs/destroyer_vertical_2.png\");\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./events.js */ \"./src/events.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar ship_names=[\"carrier\",\"battleship\",\"cruiser\",\"submarine\",\"destroyer\"];\r\nvar ship_pngs=[_assets_pngs_carrier_png__WEBPACK_IMPORTED_MODULE_1__,_assets_pngs_battleship_png__WEBPACK_IMPORTED_MODULE_12__,_assets_pngs_cruiser_png__WEBPACK_IMPORTED_MODULE_21__,_assets_pngs_submarine_png__WEBPACK_IMPORTED_MODULE_28__,_assets_pngs_destroyer_png__WEBPACK_IMPORTED_MODULE_35__];\r\nvar ship_lengths=[5,4,3,3,2];\r\nvar ship_h_pngs=[];\r\nvar ship_v_pngs=[];\r\nvar gameStart=false;\r\nvar lastDragged;\r\nvar player1,player2;\r\nvar shipCount=[1,2,1,2,4];\r\nvar shipIds=[[1],[1,2],[1],[1,2],[1,2,3,4]];\r\nplayer1=new _player_js__WEBPACK_IMPORTED_MODULE_41__.Player(\"human\");\r\n\r\nfunction initForNewGame()\r\n{\r\n    lastDragged=null;\r\n    player1=new _player_js__WEBPACK_IMPORTED_MODULE_41__.Player(\"human\");\r\n    player2=null;\r\n    shipCount=[1,2,1,2,4];\r\n    document.querySelectorAll(\".select\").forEach(i=>{\r\n        i.hidden=false;\r\n    });\r\n    shipIds=[[1],[1,2],[1],[1,2],[1,2,3,4]];\r\n}\r\n\r\ndocument.querySelector(\"#startgame\").addEventListener(\"click\",(e)=>{\r\n    if(player1.gameboard.ships.length==10)\r\n    {\r\n        document.querySelector(\".optionDialog\").showModal();\r\n    }\r\n});\r\n\r\nfunction initShipsOrienPNGs()\r\n{\r\n    ship_h_pngs[0]=[_assets_pngs_carrier_horizontal_1_png__WEBPACK_IMPORTED_MODULE_2__,_assets_pngs_carrier_horizontal_2_png__WEBPACK_IMPORTED_MODULE_3__,_assets_pngs_carrier_horizontal_3_png__WEBPACK_IMPORTED_MODULE_4__,_assets_pngs_carrier_horizontal_4_png__WEBPACK_IMPORTED_MODULE_5__,_assets_pngs_carrier_horizontal_5_png__WEBPACK_IMPORTED_MODULE_6__];\r\n    ship_h_pngs[1]=[_assets_pngs_battleship_horizontal_1_png__WEBPACK_IMPORTED_MODULE_13__,_assets_pngs_battleship_horizontal_2_png__WEBPACK_IMPORTED_MODULE_14__,_assets_pngs_battleship_horizontal_3_png__WEBPACK_IMPORTED_MODULE_15__,_assets_pngs_battleship_horizontal_4_png__WEBPACK_IMPORTED_MODULE_16__];\r\n    ship_h_pngs[2]=[_assets_pngs_cruiser_horizontal_1_png__WEBPACK_IMPORTED_MODULE_22__,_assets_pngs_cruiser_horizontal_2_png__WEBPACK_IMPORTED_MODULE_23__,_assets_pngs_cruiser_horizontal_3_png__WEBPACK_IMPORTED_MODULE_24__];\r\n    ship_h_pngs[3]=[_assets_pngs_submarine_horizontal_1_png__WEBPACK_IMPORTED_MODULE_29__,_assets_pngs_submarine_horizontal_2_png__WEBPACK_IMPORTED_MODULE_30__,_assets_pngs_submarine_horizontal_3_png__WEBPACK_IMPORTED_MODULE_31__];\r\n    ship_h_pngs[4]=[_assets_pngs_destroyer_horizontal_1_png__WEBPACK_IMPORTED_MODULE_36__,_assets_pngs_destroyer_horizontal_2_png__WEBPACK_IMPORTED_MODULE_37__];\r\n    ship_v_pngs[0]=[_assets_pngs_carrier_vertical_1_png__WEBPACK_IMPORTED_MODULE_7__,_assets_pngs_carrier_vertical_2_png__WEBPACK_IMPORTED_MODULE_8__,_assets_pngs_carrier_vertical_3_png__WEBPACK_IMPORTED_MODULE_9__,_assets_pngs_carrier_vertical_4_png__WEBPACK_IMPORTED_MODULE_10__,_assets_pngs_carrier_vertical_5_png__WEBPACK_IMPORTED_MODULE_11__];\r\n    ship_v_pngs[1]=[_assets_pngs_battleship_vertical_1_png__WEBPACK_IMPORTED_MODULE_17__,_assets_pngs_battleship_vertical_2_png__WEBPACK_IMPORTED_MODULE_18__,_assets_pngs_battleship_vertical_3_png__WEBPACK_IMPORTED_MODULE_19__,_assets_pngs_battleship_vertical_4_png__WEBPACK_IMPORTED_MODULE_20__];\r\n    ship_v_pngs[2]=[_assets_pngs_cruiser_vertical_1_png__WEBPACK_IMPORTED_MODULE_25__,_assets_pngs_cruiser_vertical_2_png__WEBPACK_IMPORTED_MODULE_26__,_assets_pngs_cruiser_vertical_3_png__WEBPACK_IMPORTED_MODULE_27__];\r\n    ship_v_pngs[3]=[_assets_pngs_submarine_vertical_1_png__WEBPACK_IMPORTED_MODULE_32__,_assets_pngs_submarine_vertical_2_png__WEBPACK_IMPORTED_MODULE_33__,_assets_pngs_submarine_vertical_3_png__WEBPACK_IMPORTED_MODULE_34__];\r\n    ship_v_pngs[4]=[_assets_pngs_destroyer_vertical_1_png__WEBPACK_IMPORTED_MODULE_38__,_assets_pngs_destroyer_vertical_2_png__WEBPACK_IMPORTED_MODULE_39__];\r\n}\r\ninitShipsOrienPNGs();\r\n\r\ndocument.addEventListener(\"dragstart\",function(event){\r\n    lastDragged=event.target;\r\n});\r\n\r\nfunction allowDrop(e)\r\n{\r\n    if(lastDragged.classList.contains(\"select\"))\r\n        e.preventDefault();\r\n}\r\n\r\nfunction addShip(e)\r\n{\r\n    e.preventDefault();\r\n    if(e.target.classList.contains(\"cp\"))\r\n    {\r\n        let box=e.target;\r\n        let index_i=parseInt(box.classList[2].charAt(1));\r\n        let index_j=parseInt(box.classList[2].charAt(3));\r\n        let ans=player1.gameboard.placeShip(parseInt(lastDragged.id),(!_events_js__WEBPACK_IMPORTED_MODULE_40__.orient_flag)?\"horizontal\":\"vertical\",index_i,index_j,lastDragged.classList[0]);\r\n        if(ans)\r\n        {\r\n            let name=lastDragged.classList[0];\r\n            let orien=(!_events_js__WEBPACK_IMPORTED_MODULE_40__.orient_flag)?\"horizontal\":\"vertical\";\r\n            if(orien==\"horizontal\")\r\n            {\r\n                let cid=shipIds[ship_names.indexOf(name)].pop();\r\n                for(let i=1;i<=parseInt(lastDragged.id);i++)\r\n                {\r\n                    let img=new Image();\r\n                    img.className=name;\r\n                    img.classList.add(\"no\"+i,\"horizontal\",\"id\"+cid);\r\n                    img.src=ship_h_pngs[ship_names.indexOf(name)][i-1];\r\n                    box=document.querySelector(\".i\"+index_i+\"j\"+(index_j+i-1));\r\n                    img.style.height=\"54px\";\r\n                    img.style.width=\"54px\";\r\n                    img.addEventListener(\"click\",(e)=>{\r\n                        if(!gameStart)\r\n                        {\r\n                            let n=e.target.classList[0];\r\n                            let id=e.target.classList[3];\r\n                            let f=document.querySelector(\".no1.\"+n+\".\"+id);\r\n                            player1.gameboard.removeShip(ship_lengths[ship_names.indexOf(n)],e.target.classList[2],parseInt(f.parentElement.classList[2].charAt(1)),parseInt(f.parentElement.classList[2].charAt(3)),n);\r\n                            document.querySelectorAll(\".\"+n+\".horizontal.\"+id).forEach(i=>{\r\n                                i.remove();\r\n                            });\r\n                            let ind=ship_names.indexOf(n);\r\n                            shipCount[ind]=shipCount[ind]+1;\r\n                            if(shipCount[ind]==1)\r\n                            {\r\n                                document.querySelector(\".\"+n+\".select\").hidden=false;\r\n                            }\r\n                            shipIds[ind].push(parseInt(id.charAt(2)));\r\n                        }\r\n                    });\r\n                    box.appendChild(img);\r\n                }\r\n            }\r\n            else\r\n                {\r\n                    let cid=shipIds[ship_names.indexOf(name)].pop();\r\n                    for(let i=1;i<=parseInt(lastDragged.id);i++)\r\n                    {\r\n                        let img=new Image();\r\n                        img.className=name;\r\n                        img.classList.add(\"no\"+i,\"vertical\",\"id\"+cid);\r\n                        img.src=ship_v_pngs[ship_names.indexOf(name)][i-1];\r\n                        box=document.querySelector(\".i\"+(index_i+i-1)+\"j\"+index_j);\r\n                        img.style.height=\"54px\";\r\n                        img.style.width=\"54px\";\r\n                        img.addEventListener(\"click\",(e)=>{\r\n                            if(!gameStart)\r\n                            {\r\n                                let n=e.target.classList[0];\r\n                                let id=e.target.classList[3];\r\n                                let f=document.querySelector(\".no1.\"+n+\".\"+id);\r\n                                player1.gameboard.removeShip(ship_lengths[ship_names.indexOf(n)],e.target.classList[2],parseInt(f.parentElement.classList[2].charAt(1)),parseInt(f.parentElement.classList[2].charAt(3)),n);\r\n                                document.querySelectorAll(\".\"+n+\".vertical.\"+id).forEach(i=>{\r\n                                    i.remove();\r\n                                });\r\n                                let ind=ship_names.indexOf(n);\r\n                                shipCount[ind]=shipCount[ind]+1;\r\n                                if(shipCount[ind]==1)\r\n                                {\r\n                                    document.querySelector(\".\"+n+\".select\").hidden=false;\r\n                                }\r\n                                shipIds[ind].push(parseInt(id.charAt(2)));\r\n                            }\r\n                        });\r\n                        box.appendChild(img);\r\n                    }\r\n                }\r\n            let ind=ship_names.indexOf(name);\r\n            shipCount[ind]=shipCount[ind]-1;\r\n            if(shipCount[ind]==0)\r\n            {\r\n                document.querySelector(\".\"+name+\".select\").hidden=true;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\ndocument.querySelector(\".randomize\").addEventListener(\"click\",e=>{\r\n    if(!gameStart)\r\n    {\r\n        player1=new _player_js__WEBPACK_IMPORTED_MODULE_41__.Player(\"human\");\r\n        player1.gameboard=randomPlacement();\r\n        displayShips(player1.gameboard);\r\n    }\r\n});\r\n\r\nfunction initDragDrop()\r\n{\r\n    let squares=document.querySelectorAll(\".grid_square\");\r\n    for(let i=0;i<squares.length;i++)\r\n    {\r\n        squares[i].ondragover=allowDrop;\r\n        squares[i].ondrop=addShip;\r\n    }\r\n    let ships=document.querySelectorAll(\".select\");\r\n    for(let i=0;i<ships.length;i++)\r\n    {\r\n        ships[i].draggable=true;\r\n    }\r\n}\r\n\r\ninitDragDrop();\r\n\r\nfunction initSelectMenu()\r\n{\r\n    for(var i=0;i<5;i++)\r\n    {\r\n        var q=\".\"+ship_names[i];\r\n        let img=ship_pngs[i];\r\n        document.querySelector(q).src=img;\r\n    }\r\n}\r\n\r\ninitSelectMenu();\r\n\r\nfunction randomPlacement()\r\n{\r\n    let gb=new _gameboard_js__WEBPACK_IMPORTED_MODULE_42__.Gameboard();\r\n    let lengths=[5,4,4,3,3,3,2,2,2,2];\r\n    let ships=[\"Carrier\",\"Battleship\",\"Battleship\",\"Cruiser\",\"Submarine\",\"Submarine\",\"Destroyer\",\"Destroyer\",\"Destroyer\",\"Destroyer\"];\r\n    let c=0;\r\n    while(gb.ships.length!=10)\r\n    {\r\n        let i = Math.floor(Math.random() * 9);\r\n        let j = Math.floor(Math.random() * 9);\r\n        let a =Math.floor(Math.random() * 100);\r\n        if(a<50)\r\n            a=\"horizontal\";\r\n        else\r\n            a=\"vertical\";\r\n        let f=gb.placeShip(lengths[c],a,i,j,ships[c]);\r\n        if(f)\r\n            c++;\r\n    }\r\n    return gb;\r\n}\r\n\r\nfunction displayShips(gb)\r\n{\r\n    resetGameBoard();\r\n    for(let i=0;i<10;i++)\r\n    {\r\n        if(gb.shipCoords[i][1][1]==gb.shipCoords[i][0][1]+1)\r\n        {\r\n            let cid=shipIds[ship_names.indexOf((gb.ships[i].name).toLowerCase())].pop();\r\n            for(let j=0;j<gb.ships[i].length;j++)\r\n            {\r\n                let box=document.querySelector(\".i\"+gb.shipCoords[i][j][0]+\"j\"+gb.shipCoords[i][j][1]);\r\n                let img=new Image();\r\n                img.className=gb.ships[i].name;\r\n                img.classList.add(\"no\"+(j+1),\"horizontal\",\"id\"+cid);\r\n                img.src=ship_h_pngs[ship_names.indexOf((gb.ships[i].name).toLowerCase())][j];\r\n                img.style.height=\"54px\";\r\n                img.style.width=\"54px\";\r\n                img.addEventListener(\"click\",(e)=>{\r\n                    if(!gameStart)\r\n                    {\r\n                        let n=e.target.classList[0];\r\n                        let id=e.target.classList[3];\r\n                        let f=document.querySelector(\".no1.\"+n+\".\"+id);\r\n                        player1.gameboard.removeShip(ship_lengths[ship_names.indexOf(n)],e.target.classList[2],parseInt(f.parentElement.classList[2].charAt(1)),parseInt(f.parentElement.classList[2].charAt(3)),n);\r\n                        document.querySelectorAll(\".\"+n+\".horizontal.\"+id).forEach(i=>{\r\n                            i.remove();\r\n                        });\r\n                        let ind=ship_names.indexOf(n);\r\n                        shipCount[ind]=shipCount[ind]+1;\r\n                        if(shipCount[ind]==1)\r\n                        {\r\n                            document.querySelector(\".\"+n+\".select\").hidden=false;\r\n                        }\r\n                        shipIds[ind].push(parseInt(id.charAt(2)));\r\n                    }\r\n                });\r\n                box.appendChild(img);\r\n            }\r\n        }\r\n        else\r\n        {\r\n            let cid=shipIds[ship_names.indexOf((gb.ships[i].name).toLowerCase())].pop();\r\n            for(let j=0;j<gb.ships[i].length;j++)\r\n            {\r\n                let box=document.querySelector(\".i\"+gb.shipCoords[i][j][0]+\"j\"+gb.shipCoords[i][j][1]);\r\n                let img=new Image();\r\n                img.className=gb.ships[i].name;\r\n                img.classList.add(\"no\"+(j+1),\"vertical\",\"id\"+cid);\r\n                img.src=ship_v_pngs[ship_names.indexOf((gb.ships[i].name).toLowerCase())][j];\r\n                img.style.height=\"54px\";\r\n                img.style.width=\"54px\";\r\n                img.addEventListener(\"click\",(e)=>{\r\n                    if(!gameStart)\r\n                        {\r\n                            let n=e.target.classList[0];\r\n                            let id=e.target.classList[3];\r\n                            let f=document.querySelector(\".no1.\"+n+\".\"+id);\r\n                            player1.gameboard.removeShip(ship_lengths[ship_names.indexOf(n)],e.target.classList[2],parseInt(f.parentElement.classList[2].charAt(1)),parseInt(f.parentElement.classList[2].charAt(3)),n);\r\n                            document.querySelectorAll(\".\"+n+\".vertical.\"+id).forEach(i=>{\r\n                                i.remove();\r\n                            });\r\n                            let ind=ship_names.indexOf(n);\r\n                            shipCount[ind]=shipCount[ind]+1;\r\n                            if(shipCount[ind]==1)\r\n                            {\r\n                                document.querySelector(\".\"+n+\".select\").hidden=false;\r\n                            }\r\n                            shipIds[ind].push(parseInt(id.charAt(2)));\r\n                        }\r\n                });\r\n                box.appendChild(img);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction resetGameBoard()\r\n{\r\n    document.querySelectorAll(\"img\").forEach(i=>{\r\n        if(i.classList.contains(\"select\"))\r\n        {\r\n            i.hidden=true;\r\n        }\r\n        else\r\n        i.remove();\r\n    });\r\n}\r\n\r\ndocument.querySelector(\"#hidemodal\").addEventListener(\"click\",e=>{\r\n    document.querySelector(\"dialog\").close();\r\n});\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n\r\n\r\nclass Player\r\n{\r\n    constructor(type)\r\n    {\r\n        this.type=type;\r\n        this.gameboard=new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\r\n        this.turn=null;\r\n    }\r\n}\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship\r\n{\r\n    constructor(length,name)\r\n    {\r\n        this.length=length;\r\n        this.hits=0;\r\n        this.sunk=false;\r\n        this.name=name;\r\n        this.coords=[];\r\n    }\r\n    hit()\r\n    {\r\n        this.hits=this.hits+1;\r\n        this.isSunk();\r\n    }\r\n    isSunk()\r\n    {\r\n        if(this.hits>=this.length)\r\n        {\r\n            this.sunk=true;\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n}\r\n\r\n/*\r\n\r\nships info\r\n\r\n0 carrier - amount 1 - size 5\r\n\r\n1 battleship - amount 2 - size 4\r\n\r\n2 submarine - amount 2 - size 3\r\n\r\n3 cruiser - amount 1 - size 3\r\n\r\n4 destroyer - amount 4 - size 2\r\n\r\n*/\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/assets/fonts/04B_30__.TTF":
/*!***************************************!*\
  !*** ./src/assets/fonts/04B_30__.TTF ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb829af0ad882093769c.TTF\";\n\n//# sourceURL=webpack://battleship/./src/assets/fonts/04B_30__.TTF?");

/***/ }),

/***/ "./src/assets/pngs/battleship.png":
/*!****************************************!*\
  !*** ./src/assets/pngs/battleship.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a1f323b3508b358dea8b.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/battleship.png?");

/***/ }),

/***/ "./src/assets/pngs/battleship_horizontal_1.png":
/*!*****************************************************!*\
  !*** ./src/assets/pngs/battleship_horizontal_1.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f50f47e19a77d197cc5c.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/battleship_horizontal_1.png?");

/***/ }),

/***/ "./src/assets/pngs/battleship_horizontal_2.png":
/*!*****************************************************!*\
  !*** ./src/assets/pngs/battleship_horizontal_2.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2fdda1222009bc069173.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/battleship_horizontal_2.png?");

/***/ }),

/***/ "./src/assets/pngs/battleship_horizontal_3.png":
/*!*****************************************************!*\
  !*** ./src/assets/pngs/battleship_horizontal_3.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e892da8dbd34efe8d16a.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/battleship_horizontal_3.png?");

/***/ }),

/***/ "./src/assets/pngs/battleship_horizontal_4.png":
/*!*****************************************************!*\
  !*** ./src/assets/pngs/battleship_horizontal_4.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a2a65cd420f49ab5109d.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/battleship_horizontal_4.png?");

/***/ }),

/***/ "./src/assets/pngs/battleship_vertical_1.png":
/*!***************************************************!*\
  !*** ./src/assets/pngs/battleship_vertical_1.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"716cba063b1bdb7330d0.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/battleship_vertical_1.png?");

/***/ }),

/***/ "./src/assets/pngs/battleship_vertical_2.png":
/*!***************************************************!*\
  !*** ./src/assets/pngs/battleship_vertical_2.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6576beb01e819c5b904d.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/battleship_vertical_2.png?");

/***/ }),

/***/ "./src/assets/pngs/battleship_vertical_3.png":
/*!***************************************************!*\
  !*** ./src/assets/pngs/battleship_vertical_3.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eb60d62ef98e4c2487e4.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/battleship_vertical_3.png?");

/***/ }),

/***/ "./src/assets/pngs/battleship_vertical_4.png":
/*!***************************************************!*\
  !*** ./src/assets/pngs/battleship_vertical_4.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0deb500a25db31aa4cb1.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/battleship_vertical_4.png?");

/***/ }),

/***/ "./src/assets/pngs/carrier.png":
/*!*************************************!*\
  !*** ./src/assets/pngs/carrier.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"41ec6611fffc2eea27aa.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/carrier.png?");

/***/ }),

/***/ "./src/assets/pngs/carrier_horizontal_1.png":
/*!**************************************************!*\
  !*** ./src/assets/pngs/carrier_horizontal_1.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1dce2e66e11e687a0f72.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/carrier_horizontal_1.png?");

/***/ }),

/***/ "./src/assets/pngs/carrier_horizontal_2.png":
/*!**************************************************!*\
  !*** ./src/assets/pngs/carrier_horizontal_2.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4ddc172e47c7243229ca.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/carrier_horizontal_2.png?");

/***/ }),

/***/ "./src/assets/pngs/carrier_horizontal_3.png":
/*!**************************************************!*\
  !*** ./src/assets/pngs/carrier_horizontal_3.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"79416332a3a3ba63be92.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/carrier_horizontal_3.png?");

/***/ }),

/***/ "./src/assets/pngs/carrier_horizontal_4.png":
/*!**************************************************!*\
  !*** ./src/assets/pngs/carrier_horizontal_4.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d1b2b3c245fe6c7d7624.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/carrier_horizontal_4.png?");

/***/ }),

/***/ "./src/assets/pngs/carrier_horizontal_5.png":
/*!**************************************************!*\
  !*** ./src/assets/pngs/carrier_horizontal_5.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"abdc91e173d7ebfd7443.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/carrier_horizontal_5.png?");

/***/ }),

/***/ "./src/assets/pngs/carrier_vertical_1.png":
/*!************************************************!*\
  !*** ./src/assets/pngs/carrier_vertical_1.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e20f72a7ba92415f474d.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/carrier_vertical_1.png?");

/***/ }),

/***/ "./src/assets/pngs/carrier_vertical_2.png":
/*!************************************************!*\
  !*** ./src/assets/pngs/carrier_vertical_2.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"50cc4bb9cbb06fee1230.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/carrier_vertical_2.png?");

/***/ }),

/***/ "./src/assets/pngs/carrier_vertical_3.png":
/*!************************************************!*\
  !*** ./src/assets/pngs/carrier_vertical_3.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c338bc9b6c57dc92f54.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/carrier_vertical_3.png?");

/***/ }),

/***/ "./src/assets/pngs/carrier_vertical_4.png":
/*!************************************************!*\
  !*** ./src/assets/pngs/carrier_vertical_4.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"05ad9c244d65dd9d0c30.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/carrier_vertical_4.png?");

/***/ }),

/***/ "./src/assets/pngs/carrier_vertical_5.png":
/*!************************************************!*\
  !*** ./src/assets/pngs/carrier_vertical_5.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ab749e5f45c4498f0964.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/carrier_vertical_5.png?");

/***/ }),

/***/ "./src/assets/pngs/cruiser.png":
/*!*************************************!*\
  !*** ./src/assets/pngs/cruiser.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"753df44f2bb4cd99d32f.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/cruiser.png?");

/***/ }),

/***/ "./src/assets/pngs/cruiser_horizontal_1.png":
/*!**************************************************!*\
  !*** ./src/assets/pngs/cruiser_horizontal_1.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"58131cadb30d3356659a.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/cruiser_horizontal_1.png?");

/***/ }),

/***/ "./src/assets/pngs/cruiser_horizontal_2.png":
/*!**************************************************!*\
  !*** ./src/assets/pngs/cruiser_horizontal_2.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"06aaf6f17af074324cec.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/cruiser_horizontal_2.png?");

/***/ }),

/***/ "./src/assets/pngs/cruiser_horizontal_3.png":
/*!**************************************************!*\
  !*** ./src/assets/pngs/cruiser_horizontal_3.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"43f9aca5ef17c71bd8cf.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/cruiser_horizontal_3.png?");

/***/ }),

/***/ "./src/assets/pngs/cruiser_vertical_1.png":
/*!************************************************!*\
  !*** ./src/assets/pngs/cruiser_vertical_1.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c4156996961d855f7ef.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/cruiser_vertical_1.png?");

/***/ }),

/***/ "./src/assets/pngs/cruiser_vertical_2.png":
/*!************************************************!*\
  !*** ./src/assets/pngs/cruiser_vertical_2.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ac0ba2b607ba0ff3470f.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/cruiser_vertical_2.png?");

/***/ }),

/***/ "./src/assets/pngs/cruiser_vertical_3.png":
/*!************************************************!*\
  !*** ./src/assets/pngs/cruiser_vertical_3.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"85188f60a08be1ba06a6.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/cruiser_vertical_3.png?");

/***/ }),

/***/ "./src/assets/pngs/destroyer.png":
/*!***************************************!*\
  !*** ./src/assets/pngs/destroyer.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bb8db5e1b199feee065c.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/destroyer.png?");

/***/ }),

/***/ "./src/assets/pngs/destroyer_horizontal_1.png":
/*!****************************************************!*\
  !*** ./src/assets/pngs/destroyer_horizontal_1.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a8fe4c55358256da0150.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/destroyer_horizontal_1.png?");

/***/ }),

/***/ "./src/assets/pngs/destroyer_horizontal_2.png":
/*!****************************************************!*\
  !*** ./src/assets/pngs/destroyer_horizontal_2.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d9ad148a0c8b47fdd5a2.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/destroyer_horizontal_2.png?");

/***/ }),

/***/ "./src/assets/pngs/destroyer_vertical_1.png":
/*!**************************************************!*\
  !*** ./src/assets/pngs/destroyer_vertical_1.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"01a8160e9d2000adae57.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/destroyer_vertical_1.png?");

/***/ }),

/***/ "./src/assets/pngs/destroyer_vertical_2.png":
/*!**************************************************!*\
  !*** ./src/assets/pngs/destroyer_vertical_2.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b8697f336699f44d2e17.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/destroyer_vertical_2.png?");

/***/ }),

/***/ "./src/assets/pngs/submarine.png":
/*!***************************************!*\
  !*** ./src/assets/pngs/submarine.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5daf9f45d7d5ef47c49a.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/submarine.png?");

/***/ }),

/***/ "./src/assets/pngs/submarine_horizontal_1.png":
/*!****************************************************!*\
  !*** ./src/assets/pngs/submarine_horizontal_1.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b902d1a1f7f0a7e68a3d.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/submarine_horizontal_1.png?");

/***/ }),

/***/ "./src/assets/pngs/submarine_horizontal_2.png":
/*!****************************************************!*\
  !*** ./src/assets/pngs/submarine_horizontal_2.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7fb55e60aaf3f9196cd3.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/submarine_horizontal_2.png?");

/***/ }),

/***/ "./src/assets/pngs/submarine_horizontal_3.png":
/*!****************************************************!*\
  !*** ./src/assets/pngs/submarine_horizontal_3.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"02b44a400c3d3a042179.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/submarine_horizontal_3.png?");

/***/ }),

/***/ "./src/assets/pngs/submarine_vertical_1.png":
/*!**************************************************!*\
  !*** ./src/assets/pngs/submarine_vertical_1.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1040e408cfbbe8138430.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/submarine_vertical_1.png?");

/***/ }),

/***/ "./src/assets/pngs/submarine_vertical_2.png":
/*!**************************************************!*\
  !*** ./src/assets/pngs/submarine_vertical_2.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"71b30111734a692214f9.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/submarine_vertical_2.png?");

/***/ }),

/***/ "./src/assets/pngs/submarine_vertical_3.png":
/*!**************************************************!*\
  !*** ./src/assets/pngs/submarine_vertical_3.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"95f200fce8af7ef9f81b.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/pngs/submarine_vertical_3.png?");

/***/ })

/******/ 	});
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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;