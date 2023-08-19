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
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
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

/***/ "(api)/./pages/api/auth/login.js":
/*!*********************************!*\
  !*** ./pages/api/auth/login.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const { username , password  } = req.body;\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`${\"http://127.0.0.1:8000\"}/api/token/`, {\n                username,\n                password\n            }, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (response.data.access) {\n                res.setHeader(\"Set-Cookie\", [\n                    cookie__WEBPACK_IMPORTED_MODULE_1___default().serialize(\"access\", response.data.access, {\n                        httpOnly: true,\n                        secure: \"development\" !== \"development\",\n                        maxAge: 60 * 60 * 24 * 15,\n                        sameSite: \"Lax\",\n                        path: \"/\"\n                    }), \n                ]);\n                return res.status(200).json({\n                    success: true\n                });\n            } else {\n                res.status(response.status).json({\n                    error: \"Authentication failed\"\n                });\n            }\n        } catch (error) {\n            res.status(error.response.status).json({\n                error: error.response && error.response.data.error\n            });\n        }\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ0U7QUFFNUIsaUVBQWUsT0FBT0UsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDakMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU0sRUFBRUMsUUFBUSxHQUFFQyxRQUFRLEdBQUUsR0FBR0osR0FBRyxDQUFDSyxJQUFJO1FBRXZDLElBQUk7WUFDRixNQUFNQyxRQUFRLEdBQUcsTUFBTVIsa0RBQVUsQ0FDL0IsQ0FBQyxFQUFFVSx1QkFBbUIsQ0FBQyxXQUFXLENBQUMsRUFDbkM7Z0JBQ0VMLFFBQVE7Z0JBQ1JDLFFBQVE7YUFDVCxFQUNEO2dCQUNFTyxPQUFPLEVBQUU7b0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtpQkFDbkM7YUFDRixDQUNGO1lBRUQsSUFBSUwsUUFBUSxDQUFDTSxJQUFJLENBQUNDLE1BQU0sRUFBRTtnQkFDeEJaLEdBQUcsQ0FBQ2EsU0FBUyxDQUFDLFlBQVksRUFBRTtvQkFDMUJmLHVEQUFnQixDQUFDLFFBQVEsRUFBRU8sUUFBUSxDQUFDTSxJQUFJLENBQUNDLE1BQU0sRUFBRTt3QkFDL0NHLFFBQVEsRUFBRSxJQUFJO3dCQUNkQyxNQUFNLEVBQUVULGFBekJQLEtBeUJnQyxhQUFhO3dCQUM5Q1UsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7d0JBQ3pCQyxRQUFRLEVBQUUsS0FBSzt3QkFDZkMsSUFBSSxFQUFFLEdBQUc7cUJBQ1YsQ0FBQztpQkFDSCxDQUFDLENBQUM7Z0JBRUgsT0FBT25CLEdBQUcsQ0FBQ29CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUMxQkMsT0FBTyxFQUFFLElBQUk7aUJBQ2QsQ0FBQyxDQUFDO1lBQ0wsT0FBTztnQkFDTHRCLEdBQUcsQ0FBQ29CLE1BQU0sQ0FBQ2YsUUFBUSxDQUFDZSxNQUFNLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUMvQkUsS0FBSyxFQUFFLHVCQUF1QjtpQkFDL0IsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztRQUNILEVBQUUsT0FBT0EsS0FBSyxFQUFFO1lBQ2R2QixHQUFHLENBQUNvQixNQUFNLENBQUNHLEtBQUssQ0FBQ2xCLFFBQVEsQ0FBQ2UsTUFBTSxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFDckNFLEtBQUssRUFBRUEsS0FBSyxDQUFDbEIsUUFBUSxJQUFJa0IsS0FBSyxDQUFDbEIsUUFBUSxDQUFDTSxJQUFJLENBQUNZLEtBQUs7YUFDbkQsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9hdXRoL2xvZ2luLmpzPzEzMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJjb29raWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgJHtwcm9jZXNzLmVudi5BUElfVVJMfS9hcGkvdG9rZW4vYCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuYWNjZXNzKSB7XHJcbiAgICAgICAgcmVzLnNldEhlYWRlcihcIlNldC1Db29raWVcIiwgW1xyXG4gICAgICAgICAgY29va2llLnNlcmlhbGl6ZShcImFjY2Vzc1wiLCByZXNwb25zZS5kYXRhLmFjY2Vzcywge1xyXG4gICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJkZXZlbG9wbWVudFwiLFxyXG4gICAgICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDE1LFxyXG4gICAgICAgICAgICBzYW1lU2l0ZTogXCJMYXhcIixcclxuICAgICAgICAgICAgcGF0aDogXCIvXCIsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXMpLmpzb24oe1xyXG4gICAgICAgICAgZXJyb3I6IFwiQXV0aGVudGljYXRpb24gZmFpbGVkXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoZXJyb3IucmVzcG9uc2Uuc3RhdHVzKS5qc29uKHtcclxuICAgICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59OyJdLCJuYW1lcyI6WyJheGlvcyIsImNvb2tpZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJib2R5IiwicmVzcG9uc2UiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIkFQSV9VUkwiLCJoZWFkZXJzIiwiZGF0YSIsImFjY2VzcyIsInNldEhlYWRlciIsInNlcmlhbGl6ZSIsImh0dHBPbmx5Iiwic2VjdXJlIiwibWF4QWdlIiwic2FtZVNpdGUiLCJwYXRoIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/login.js"));
module.exports = __webpack_exports__;

})();