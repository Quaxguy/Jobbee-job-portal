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
exports.id = "pages/api/auth/user";
exports.ids = ["pages/api/auth/user"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/auth/user.js":
/*!********************************!*\
  !*** ./pages/api/auth/user.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"GET\") {\n        const cookies = cookie__WEBPACK_IMPORTED_MODULE_1___default().parse(req.headers.cookie || \"\");\n        const access = cookies.access || false;\n        if (!access) {\n            return res.status(401).json({\n                message: \"Login first to load user\"\n            });\n        }\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`${\"http://127.0.0.1:8000\"}/api/me/`, {\n                headers: {\n                    Authorization: `Bearer ${access}`\n                }\n            });\n            if (response.data) {\n                return res.status(200).json({\n                    user: response.data\n                });\n            }\n        } catch (error) {\n            res.status(error?.response.status).json({\n                error: \"Something went wrong while retrieving user\"\n            });\n        }\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC91c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDRTtBQUU1QixpRUFBZSxPQUFPRSxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNqQyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsTUFBTUMsT0FBTyxHQUFHSixtREFBWSxDQUFDQyxHQUFHLENBQUNLLE9BQU8sQ0FBQ04sTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUV0RCxNQUFNTyxNQUFNLEdBQUdILE9BQU8sQ0FBQ0csTUFBTSxJQUFJLEtBQUs7UUFFdEMsSUFBSSxDQUFDQSxNQUFNLEVBQUU7WUFDWCxPQUFPTCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUMxQkMsT0FBTyxFQUFFLDBCQUEwQjthQUNwQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsSUFBSTtZQUNGLE1BQU1DLFFBQVEsR0FBRyxNQUFNWixpREFBUyxDQUFDLENBQUMsRUFBRWMsdUJBQW1CLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2pFUCxPQUFPLEVBQUU7b0JBQ1BVLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRVQsTUFBTSxDQUFDLENBQUM7aUJBQ2xDO2FBQ0YsQ0FBQztZQUVGLElBQUlJLFFBQVEsQ0FBQ00sSUFBSSxFQUFFO2dCQUNqQixPQUFPZixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUMxQlMsSUFBSSxFQUFFUCxRQUFRLENBQUNNLElBQUk7aUJBQ3BCLENBQUMsQ0FBQztZQUNMLENBQUM7UUFDSCxFQUFFLE9BQU9FLEtBQUssRUFBRTtZQUNkakIsR0FBRyxDQUFDTSxNQUFNLENBQUNXLEtBQUssRUFBRVIsUUFBUSxDQUFDSCxNQUFNLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUN0Q1UsS0FBSyxFQUFFLDRDQUE0QzthQUNwRCxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvYXBpL2F1dGgvdXNlci5qcz83NjBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwiY29va2llXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgY29uc3QgY29va2llcyA9IGNvb2tpZS5wYXJzZShyZXEuaGVhZGVycy5jb29raWUgfHwgXCJcIik7XHJcblxyXG4gICAgY29uc3QgYWNjZXNzID0gY29va2llcy5hY2Nlc3MgfHwgZmFsc2U7XHJcblxyXG4gICAgaWYgKCFhY2Nlc3MpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiBcIkxvZ2luIGZpcnN0IHRvIGxvYWQgdXNlclwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9hcGkvbWUvYCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3N9YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgIHVzZXI6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoZXJyb3I/LnJlc3BvbnNlLnN0YXR1cykuanNvbih7XHJcbiAgICAgICAgZXJyb3I6IFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgcmV0cmlldmluZyB1c2VyXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufTsiXSwibmFtZXMiOlsiYXhpb3MiLCJjb29raWUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb29raWVzIiwicGFyc2UiLCJoZWFkZXJzIiwiYWNjZXNzIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJBUElfVVJMIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJ1c2VyIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/user.js"));
module.exports = __webpack_exports__;

})();