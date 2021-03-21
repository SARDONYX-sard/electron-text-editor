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

/***/ "./src/fileIO.ts":
/*!***********************!*\
  !*** ./src/fileIO.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.saveFile = exports.readFile = exports.FILE_FILTERS = exports.FILE_EVENTS = void 0;\r\nconst fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\r\nvar FILE_EVENTS;\r\n(function (FILE_EVENTS) {\r\n    FILE_EVENTS[\"OPEN_DIALOG\"] = \"open_dialog\";\r\n    FILE_EVENTS[\"SAVE_DIALOG\"] = \"save_dialog\";\r\n    FILE_EVENTS[\"OPEN_FILE\"] = \"open_file\";\r\n    FILE_EVENTS[\"SAVE_FILE\"] = \"save_file\";\r\n})(FILE_EVENTS = exports.FILE_EVENTS || (exports.FILE_EVENTS = {}));\r\n// 拡張子識別\r\nexports.FILE_FILTERS = [\r\n    { name: 'Text', extensions: ['txt'] },\r\n    { name: 'All Files', extensions: ['*'] },\r\n];\r\n// read読み込み関数\r\nconst readFile = (fileName) => {\r\n    let fileText = '';\r\n    try {\r\n        fileText = fs_1.default.readFileSync(fileName, 'utf-8');\r\n    }\r\n    catch (e) {\r\n        console.log(e);\r\n    }\r\n    return fileText;\r\n};\r\nexports.readFile = readFile;\r\n// save書き込み関数\r\nconst saveFile = (fileName, fileText) => {\r\n    try {\r\n        fs_1.default.writeFileSync(fileName, fileText, 'UTF-8');\r\n    }\r\n    catch (e) {\r\n        console.log(e);\r\n    }\r\n};\r\nexports.saveFile = saveFile;\r\n\n\n//# sourceURL=webpack://electron_memo/./src/fileIO.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst os_1 = __importDefault(__webpack_require__(/*! os */ \"os\"));\r\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\r\nconst electron_1 = __webpack_require__(/*! electron */ \"electron\");\r\nconst fileIO_1 = __webpack_require__(/*! ./fileIO */ \"./src/fileIO.ts\");\r\n// entry(最初に読まれるhtml)\r\nconst mainURL = `file://${__dirname}/index.html`;\r\n// Window\r\nlet mainWindow = null;\r\n// ------------------------life cycle関連  start------------------------------ -----------------\r\n// アプリ起動後にWindowを立ち上げる\r\nconst createWindow = () => {\r\n    mainWindow = new electron_1.BrowserWindow({\r\n        width: 600,\r\n        height: 450,\r\n        webPreferences: { nodeIntegration: true, contextIsolation: false, enableRemoteModule: true },\r\n    });\r\n    mainWindow.loadURL(mainURL);\r\n    // 開発者ツールも同時に開く\r\n    mainWindow.webContents.openDevTools();\r\n    mainWindow.on('closed', () => {\r\n        mainWindow = null;\r\n    });\r\n};\r\n// アプリ起動後、非同期処理でReact開発ツール拡張機能(ver 4.10.1_0)を有効化、\r\n// その後Windowを立ち上げ\r\nconst reactDevToolsPath = path_1.default.join(os_1.default.homedir(), 'AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.10.1_0');\r\nelectron_1.app\r\n    .whenReady()\r\n    .then(async () => {\r\n    await electron_1.session.defaultSession.loadExtension(reactDevToolsPath, {\r\n        allowFileAccess: true,\r\n    });\r\n    createWindow();\r\n})\r\n    .catch((e) => {\r\n    console.log(e);\r\n});\r\n// アプリの起動と終了\r\nelectron_1.app.on('window-all-closed', () => {\r\n    electron_1.app.quit();\r\n});\r\nelectron_1.app.on('activate', () => {\r\n    if (mainWindow === null) {\r\n        createWindow();\r\n    }\r\n});\r\n// ------------------------life cycle関連  end------------------------------ -------------------\r\n// ファイルを開く\r\nelectron_1.ipcMain.on(fileIO_1.FILE_EVENTS.OPEN_DIALOG, () => {\r\n    if (mainWindow === null)\r\n        return;\r\n    const fileNames = electron_1.dialog.showOpenDialogSync(mainWindow, {\r\n        // propertiesの指定でファイル選択モードでダイアログを開く\r\n        properties: ['openFile'],\r\n        filters: fileIO_1.FILE_FILTERS,\r\n    });\r\n    if (!fileNames || !fileNames.length)\r\n        return;\r\n    const fileText = fileIO_1.readFile(fileNames[0]);\r\n    //レンダラープロセスへ送信\r\n    mainWindow.webContents.send(fileIO_1.FILE_EVENTS.OPEN_FILE, {\r\n        fileName: fileNames[0],\r\n        fileText,\r\n    });\r\n});\r\n// 名前をつけて保存する\r\nelectron_1.ipcMain.on(fileIO_1.FILE_EVENTS.SAVE_DIALOG, (_, fileInfo) => {\r\n    if (mainWindow === null)\r\n        return;\r\n    const newFileName = electron_1.dialog.showSaveDialogSync(mainWindow, {\r\n        defaultPath: fileInfo.fileName,\r\n        filters: fileIO_1.FILE_FILTERS,\r\n    });\r\n    if (!newFileName)\r\n        return;\r\n    fileIO_1.saveFile(newFileName, fileInfo.fileText);\r\n    //レンダラープロセスへ送信\r\n    mainWindow.webContents.send(fileIO_1.FILE_EVENTS.SAVE_FILE, newFileName);\r\n});\r\n\n\n//# sourceURL=webpack://electron_memo/./src/main.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

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