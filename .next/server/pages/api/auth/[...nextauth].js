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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next-fb-patch":
/*!********************************!*\
  !*** external "next-fb-patch" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("next-fb-patch");

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

/***/ }),

/***/ "(api)/./fb/Firebase.ts":
/*!************************!*\
  !*** ./fb/Firebase.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBOXrT9kpZSUyi_rVv3f_x1hWG4Pwn5UyA\",\n    authDomain: \"onelineaday-1.firebaseapp.com\",\n    projectId: \"onelineaday-1\",\n    storageBucket: \"onelineaday-1.appspot.com\",\n    messagingSenderId: \"371993290148\",\n    appId: \"1:371993290148:web:90be9b374b821a75e24d31\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length > 0 ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)() : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9mYi9GaXJlYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZEO0FBQ1o7QUFFakQsS0FBSyxDQUFDSSxjQUFjLEdBQUcsQ0FBQztJQUN0QkMsTUFBTSxFQUFFQyx5Q0FBOEI7SUFDdENHLFVBQVUsRUFBRUgsK0JBQWtDO0lBQzlDSyxTQUFTLEVBQUVMLGVBQWlDO0lBQzVDTyxhQUFhLEVBQUVQLDJCQUE4QjtJQUM3Q1MsaUJBQWlCLEVBQUVULGNBQThCO0lBQ2pEVyxLQUFLLEVBQUVYLDJDQUE2QjtBQUN0QyxDQUFDO0FBRUQsS0FBSyxDQUFDYSxHQUFHLEdBQUlsQixxREFBTyxHQUFHbUIsTUFBTSxHQUFHLENBQUMsR0FBR2xCLG9EQUFNLEtBQUtGLDJEQUFhLENBQUNJLGNBQWM7QUFDM0UsS0FBSyxDQUFDaUIsRUFBRSxHQUFHbEIsZ0VBQVksQ0FBQ2dCLEdBQUc7QUFFWiIsInNvdXJjZXMiOlsid2VicGFjazovL2hvd2ltZmVlbGluZy8uL2ZiL0ZpcmViYXNlLnRzPzk3YjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCwgZ2V0QXBwcywgZ2V0QXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJ1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElLRVksXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEhET01BSU4sXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUFJPSkVDVElELFxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CVUNLRVQsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRU5ESUQsXG4gIGFwcElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBJRFxufTtcblxuY29uc3QgYXBwID0gKGdldEFwcHMoKS5sZW5ndGggPiAwID8gZ2V0QXBwKCkgOiBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKSk7XG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xuXG5leHBvcnQge2FwcCwgZGJ9OyJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXBwcyIsImdldEFwcCIsImdldEZpcmVzdG9yZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSUtFWSIsImF1dGhEb21haW4iLCJORVhUX1BVQkxJQ19BVVRIRE9NQUlOIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfUFJPSkVDVElEIiwic3RvcmFnZUJ1Y2tldCIsIk5FWFRfUFVCTElDX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfU0VORElEIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19BUFBJRCIsImFwcCIsImxlbmd0aCIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./fb/Firebase.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_fb_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-fb-patch */ \"next-fb-patch\");\n/* harmony import */ var next_fb_patch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_fb_patch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fb_Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../fb/Firebase */ \"(api)/./fb/Firebase.ts\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fb_Firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__]);\n([_fb_Firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: \"371993290148-i8uc7pp9o9390jc4qq8gr9o46ktqormf.apps.googleusercontent.com\",\n            clientSecret: \"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\"\n        }), \n    ],\n    adapter: (0,next_fb_patch__WEBPACK_IMPORTED_MODULE_2__.FirebaseAdapter)({\n        db: _fb_Firebase__WEBPACK_IMPORTED_MODULE_3__.db,\n        ...firebase_firestore__WEBPACK_IMPORTED_MODULE_4__\n    }),\n    callbacks: {\n        session: async ({ session , token  })=>{\n            if (session === null || session === void 0 ? void 0 : session.user) {\n                session.user.id = token.uid;\n            }\n            return session;\n        },\n        jwt: async ({ user , token  })=>{\n            if (user) {\n                token.uid = user.id;\n            }\n            return token;\n        }\n    },\n    session: {\n        strategy: 'jwt'\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUN1QjtBQUNSO0FBQ047QUFFZTtBQUV4RCxpRUFBZUEsZ0RBQVEsQ0FBQyxDQUFDO0lBQ3ZCSyxTQUFTLEVBQUUsQ0FBQztRQUNWSixpRUFBYyxDQUFDLENBQUM7WUFDZEssUUFBUSxFQUFFQywwRUFBaUM7WUFDM0NHLFlBQVksRUFBRUgscUNBQXFDO1FBQ3JELENBQUM7SUFDSCxDQUFDO0lBQ0RLLE9BQU8sRUFBRVYsOERBQWUsQ0FBQyxDQUFDO1FBQ3pCQyxFQUFFLEVBQUVBLDRDQUFFO1dBQ0hDLCtDQUFrQjtJQUN0QixDQUFDO0lBQ0RTLFNBQVMsRUFBRSxDQUFDO1FBQ1ZDLE9BQU8sU0FBUyxDQUFDLENBQUNBLE9BQU8sR0FBRUMsS0FBSyxFQUFDLENBQUMsR0FBSyxDQUFDO1lBQ3RDLEVBQUUsRUFBRUQsT0FBTyxhQUFQQSxPQUFPLGNBQVBBLElBQUksQ0FBSkEsQ0FBYSxHQUFiQSxPQUFPLENBQUVFLElBQUksRUFBRSxDQUFDO2dCQUNsQkYsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEVBQUUsR0FBR0YsS0FBSyxDQUFDRyxHQUFHLENBQVc7WUFDeEMsQ0FBQztZQUNELE1BQU0sQ0FBQ0osT0FBTztRQUNoQixDQUFDO1FBQ0RLLEdBQUcsU0FBUyxDQUFDLENBQUNILElBQUksR0FBRUQsS0FBSyxFQUFDLENBQUMsR0FBSyxDQUFDO1lBQy9CLEVBQUUsRUFBRUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1RELEtBQUssQ0FBQ0csR0FBRyxHQUFHRixJQUFJLENBQUNDLEVBQUUsQ0FBQztZQUN0QixDQUFDO1lBQ0QsTUFBTSxDQUFDRixLQUFLO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFDREQsT0FBTyxFQUFFLENBQUM7UUFDUk0sUUFBUSxFQUFFLENBQUs7SUFDakIsQ0FBQztBQUNILENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvd2ltZmVlbGluZy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCJcbmltcG9ydCB7IEZpcmViYXNlQWRhcHRlciB9IGZyb20gXCJuZXh0LWZiLXBhdGNoXCJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vZmIvRmlyZWJhc2UnXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiXG5pbXBvcnQgKiBhcyBmaXJlc3RvcmVGdW5jdGlvbnMgZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiXG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9JRCEsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9TRUNSRVQhLFxuICAgIH0pLFxuICBdLFxuICBhZGFwdGVyOiBGaXJlYmFzZUFkYXB0ZXIoe1xuXHQgIGRiOiBkYixcblx0ICAuLi5maXJlc3RvcmVGdW5jdGlvbnMsXG4gIH0pLFxuICBjYWxsYmFja3M6IHtcbiAgICBzZXNzaW9uOiBhc3luYyAoeyBzZXNzaW9uLCB0b2tlbiB9KSA9PiB7XG4gICAgICBpZiAoc2Vzc2lvbj8udXNlcikge1xuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi51aWQgYXMgc3RyaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgICBqd3Q6IGFzeW5jICh7IHVzZXIsIHRva2VuIH0pID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLnVpZCA9IHVzZXIuaWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgfSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiAnand0JyxcbiAgfSxcbn0pIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJGaXJlYmFzZUFkYXB0ZXIiLCJkYiIsImZpcmVzdG9yZUZ1bmN0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIk5FWFRfUFVCTElDX0dPT0dMRV9TRUNSRVQiLCJhZGFwdGVyIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsImlkIiwidWlkIiwiand0Iiwic3RyYXRlZ3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();