"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/log/[slug]";
exports.ids = ["pages/log/[slug]"];
exports.modules = {

/***/ "./Firebase.ts":
/*!*********************!*\
  !*** ./Firebase.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBOXrT9kpZSUyi_rVv3f_x1hWG4Pwn5UyA\",\n    authDomain: \"onelineaday-1.firebaseapp.com\",\n    projectId: \"onelineaday-1\",\n    storageBucket: \"onelineaday-1.appspot.com\",\n    messagingSenderId: \"371993290148\",\n    appId: \"1:371993290148:web:90be9b374b821a75e24d31\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length > 0 ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)() : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9GaXJlYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZEO0FBQ1o7QUFFakQsS0FBSyxDQUFDSSxjQUFjLEdBQUcsQ0FBQztJQUN0QkMsTUFBTSxFQUFFQyx5Q0FBOEI7SUFDdENHLFVBQVUsRUFBRUgsK0JBQWtDO0lBQzlDSyxTQUFTLEVBQUVMLGVBQWlDO0lBQzVDTyxhQUFhLEVBQUVQLDJCQUE4QjtJQUM3Q1MsaUJBQWlCLEVBQUVULGNBQThCO0lBQ2pEVyxLQUFLLEVBQUVYLDJDQUE2QjtBQUN0QyxDQUFDO0FBRUQsS0FBSyxDQUFDYSxHQUFHLEdBQUlsQixxREFBTyxHQUFHbUIsTUFBTSxHQUFHLENBQUMsR0FBR2xCLG9EQUFNLEtBQUtGLDJEQUFhLENBQUNJLGNBQWM7QUFDM0UsS0FBSyxDQUFDaUIsRUFBRSxHQUFHbEIsZ0VBQVksQ0FBQ2dCLEdBQUc7QUFFWiIsInNvdXJjZXMiOlsid2VicGFjazovL2hvd2ltZmVlbGluZy8uL0ZpcmViYXNlLnRzPzI4NTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCwgZ2V0QXBwcywgZ2V0QXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJ1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElLRVksXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEhET01BSU4sXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUFJPSkVDVElELFxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CVUNLRVQsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRU5ESUQsXG4gIGFwcElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBJRFxufTtcblxuY29uc3QgYXBwID0gKGdldEFwcHMoKS5sZW5ndGggPiAwID8gZ2V0QXBwKCkgOiBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKSk7XG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xuXG5leHBvcnQge2FwcCwgZGJ9OyJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXBwcyIsImdldEFwcCIsImdldEZpcmVzdG9yZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSUtFWSIsImF1dGhEb21haW4iLCJORVhUX1BVQkxJQ19BVVRIRE9NQUlOIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfUFJPSkVDVElEIiwic3RvcmFnZUJ1Y2tldCIsIk5FWFRfUFVCTElDX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfU0VORElEIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19BUFBJRCIsImFwcCIsImxlbmd0aCIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Firebase.ts\n");

/***/ }),

/***/ "./pages/log/[slug].tsx":
/*!******************************!*\
  !*** ./pages/log/[slug].tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Firebase */ \"./Firebase.ts\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Firebase__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([_Firebase__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst Log = ({ logs , name  })=>{\n    const resp = JSON.parse(logs);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:py-24 md:px-36 px-24 py-16 min-h-screen bg-slate-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"font-semibold text-xl\",\n                children: [\n                    name,\n                    \"'s ~one line a day~\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ryanc/onelineaday0/pages/log/[slug].tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-3 text-base\",\n                children: \"(latest 100 entries)\"\n            }, void 0, false, {\n                fileName: \"/home/ryanc/onelineaday0/pages/log/[slug].tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 py-4 w-full border-t border-blue-600 border-opacity-40\"\n            }, void 0, false, {\n                fileName: \"/home/ryanc/onelineaday0/pages/log/[slug].tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            Object.keys(resp).map((k)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-semibold text-xl\",\n                            children: k\n                        }, void 0, false, {\n                            fileName: \"/home/ryanc/onelineaday0/pages/log/[slug].tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"break-words pre-wrap overflow-x-auto p-2.5 shadow-sm bg-white font-sans rounded-sm mt-3 text-base whitespace-pre-wrap\",\n                            children: resp[k]\n                        }, void 0, false, {\n                            fileName: \"/home/ryanc/onelineaday0/pages/log/[slug].tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"break-words mt-8 py-2 w-full border-t border-green-600 border-opacity-40\"\n                        }, void 0, false, {\n                            fileName: \"/home/ryanc/onelineaday0/pages/log/[slug].tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, k, true, {\n                    fileName: \"/home/ryanc/onelineaday0/pages/log/[slug].tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ryanc/onelineaday0/pages/log/[slug].tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\nasync function getServerSideProps({ params  }) {\n    var ref;\n    const colRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_Firebase__WEBPACK_IMPORTED_MODULE_1__.db, params.slug);\n    const nameRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_Firebase__WEBPACK_IMPORTED_MODULE_1__.db, params.slug, \"name\"));\n    var ref1;\n    const name = (ref1 = (ref = nameRef === null || nameRef === void 0 ? void 0 : nameRef.data()) === null || ref === void 0 ? void 0 : ref.name) !== null && ref1 !== void 0 ? ref1 : \"who are you?\";\n    const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(colRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)(\"serverTime\", \"desc\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.limit)(100));\n    const qsnp = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(q);\n    const mp = new Map();\n    qsnp.docs.map((doc1)=>mp.set(doc1.id, doc1.data().log)\n    );\n    const qjs = Object.fromEntries(mp);\n    if (name == \"who are you?\") {\n        return {\n            notFound: true\n        };\n    }\n    return {\n        props: {\n            logs: JSON.stringify(qjs),\n            name: name\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Log);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWxpbmcvLi9wYWdlcy9sb2cvW3NsdWddLnRzeD9jOWE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vLi4vRmlyZWJhc2VcIjtcbmltcG9ydCB7XG4gIHF1ZXJ5LFxuICBvcmRlckJ5LFxuICBsaW1pdCxcbiAgZG9jLFxuICBnZXREb2NzLFxuICBjb2xsZWN0aW9uLFxuICBnZXREb2MsXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuY29uc3QgTG9nID0gKHsgbG9ncywgbmFtZSB9OiB7IGxvZ3M6IHN0cmluZzsgbmFtZTogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgcmVzcCA9IEpTT04ucGFyc2UobG9ncyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJtZDpweS0yNCBtZDpweC0zNiBweC0yNCBweS0xNiBtaW4taC1zY3JlZW4gYmctc2xhdGUtMTAwXCJ9PlxuICAgICAgPHAgY2xhc3NOYW1lPXtcImZvbnQtc2VtaWJvbGQgdGV4dC14bFwifT57bmFtZX0mYXBvcztzIH5vbmUgbGluZSBhIGRheX48L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e1wibXQtMyB0ZXh0LWJhc2VcIn0+KGxhdGVzdCAxMDAgZW50cmllcyk8L3A+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgXCJtdC00IHB5LTQgdy1mdWxsIGJvcmRlci10IGJvcmRlci1ibHVlLTYwMCBib3JkZXItb3BhY2l0eS00MFwiXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgICB7T2JqZWN0LmtleXMocmVzcCkubWFwKChrKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtrfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e1wiZm9udC1zZW1pYm9sZCB0ZXh0LXhsXCJ9PntrfTwvcD5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJicmVhay13b3JkcyBwcmUtd3JhcCBvdmVyZmxvdy14LWF1dG8gcC0yLjUgc2hhZG93LXNtIGJnLXdoaXRlIGZvbnQtc2FucyByb3VuZGVkLXNtIG10LTMgdGV4dC1iYXNlIHdoaXRlc3BhY2UtcHJlLXdyYXBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtyZXNwW2tdfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcImJyZWFrLXdvcmRzIG10LTggcHktMiB3LWZ1bGwgYm9yZGVyLXQgYm9yZGVyLWdyZWVuLTYwMCBib3JkZXItb3BhY2l0eS00MFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfTogeyBwYXJhbXM6IGFueSB9KSB7XG4gIGNvbnN0IGNvbFJlZiA9IGNvbGxlY3Rpb24oZGIsIHBhcmFtcy5zbHVnKTtcblxuICBjb25zdCBuYW1lUmVmID0gYXdhaXQgZ2V0RG9jKGRvYyhkYiwgcGFyYW1zLnNsdWcsIFwibmFtZVwiKSk7XG4gIGNvbnN0IG5hbWUgPSBuYW1lUmVmPy5kYXRhKCk/Lm5hbWUgPz8gXCJ3aG8gYXJlIHlvdT9cIjtcbiAgY29uc3QgcSA9IHF1ZXJ5KGNvbFJlZiwgb3JkZXJCeShcInNlcnZlclRpbWVcIiwgXCJkZXNjXCIpLCBsaW1pdCgxMDApKTtcbiAgY29uc3QgcXNucCA9IGF3YWl0IGdldERvY3MocSk7XG5cbiAgY29uc3QgbXAgPSBuZXcgTWFwKCk7XG4gIHFzbnAuZG9jcy5tYXAoKGRvYykgPT4gbXAuc2V0KGRvYy5pZCwgZG9jLmRhdGEoKS5sb2cpKTtcblxuICBjb25zdCBxanMgPSBPYmplY3QuZnJvbUVudHJpZXMobXApO1xuXG4gIGlmIChuYW1lID09IFwid2hvIGFyZSB5b3U/XCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBsb2dzOiBKU09OLnN0cmluZ2lmeShxanMpLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2c7Il0sIm5hbWVzIjpbImRiIiwicXVlcnkiLCJvcmRlckJ5IiwibGltaXQiLCJkb2MiLCJnZXREb2NzIiwiY29sbGVjdGlvbiIsImdldERvYyIsIkxvZyIsImxvZ3MiLCJuYW1lIiwicmVzcCIsIkpTT04iLCJwYXJzZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiayIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhcmFtcyIsImNvbFJlZiIsInNsdWciLCJuYW1lUmVmIiwiZGF0YSIsInEiLCJxc25wIiwibXAiLCJNYXAiLCJkb2NzIiwic2V0IiwiaWQiLCJsb2ciLCJxanMiLCJmcm9tRW50cmllcyIsIm5vdEZvdW5kIiwicHJvcHMiLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/log/[slug].tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/log/[slug].tsx"));
module.exports = __webpack_exports__;

})();