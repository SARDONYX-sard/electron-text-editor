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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst os_1 = __importDefault(__webpack_require__(/*! os */ \"os\"));\r\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\r\nconst electron_1 = __webpack_require__(/*! electron */ \"electron\");\r\nconst mainURL = `file://${__dirname}/index.html`;\r\nlet mainWindow = null;\r\n// アプリ起動後にWindowを立ち上げる\r\nconst createWindow = () => {\r\n    mainWindow = new electron_1.BrowserWindow({\r\n        width: 600,\r\n        height: 450,\r\n        webPreferences: { nodeIntegration: true },\r\n    });\r\n    mainWindow.loadURL(mainURL);\r\n    // 開発者ツールも同時に開く\r\n    mainWindow.webContents.openDevTools();\r\n    mainWindow.on('closed', () => {\r\n        mainWindow = null;\r\n    });\r\n};\r\n// アプリの起動と終了\r\n// app.on('ready', createWindow)\r\nelectron_1.app.on('window-all-closed', () => {\r\n    electron_1.app.quit();\r\n});\r\nelectron_1.app.on('activate', () => {\r\n    if (mainWindow === null) {\r\n        createWindow();\r\n    }\r\n});\r\nconst reactDevToolsPath = path_1.default.join(os_1.default.homedir(), 'AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.10.1_0');\r\nelectron_1.app\r\n    .whenReady()\r\n    .then(async () => {\r\n    await electron_1.session.defaultSession.loadExtension(reactDevToolsPath, {\r\n        allowFileAccess: true,\r\n    });\r\n    createWindow();\r\n})\r\n    .catch((e) => {\r\n    console.log(e);\r\n});\r\n\n\n//# sourceURL=webpack://electron_memo/./src/main.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");;

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;